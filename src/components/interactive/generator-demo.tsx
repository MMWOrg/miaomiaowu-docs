import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  Play,
  RotateCcw,
  ChevronDown,
  CircleHelp,
} from 'lucide-react'
import { TutorialGuide } from '@/components/docs/tutorial-guide'
import { useTutorial } from '@/hooks/use-tutorial'
import type { TutorialStep } from '@/hooks/use-tutorial'

// 规则类别数据
interface RuleCategory {
  id: string
  name: string
  icon: string
  checked: boolean
}

const defaultRuleCategories: RuleCategory[] = [
  { id: 'ad-block', name: '广告拦截', icon: '🔴', checked: false },
  { id: 'youtube', name: '油管视频', icon: '📺', checked: true },
  { id: 'china', name: '国内服务', icon: '🔒', checked: true },
  { id: 'microsoft', name: '微软服务', icon: '🟦', checked: false },
  { id: 'streaming', name: '流媒体', icon: '📺', checked: false },
  { id: 'finance', name: '金融服务', icon: '💰', checked: false },
  { id: 'pixiv', name: 'Pixiv', icon: '🎨', checked: false },
  { id: 'proxy-media', name: '代理媒体', icon: '🦆', checked: false },
  { id: 'pt-tracker', name: 'PT Tracker', icon: '🔗', checked: false },
  { id: 'ai', name: 'AI 服务', icon: '🤖', checked: true },
  { id: 'google', name: '谷歌服务', icon: '🔍', checked: true },
  { id: 'telegram', name: '电报消息', icon: '📱', checked: true },
  { id: 'apple', name: '苹果服务', icon: '🍎', checked: false },
  { id: 'gaming', name: '游戏平台', icon: '🎮', checked: false },
  { id: 'cloud', name: '云服务', icon: '☁️', checked: false },
  { id: 'abema', name: 'Abema', icon: '📡', checked: false },
  { id: 'ehentai', name: 'E-Hentai', icon: '🔞', checked: false },
  { id: 'pt-site', name: 'PT 站点', icon: '🏴', checked: false },
  { id: 'bilibili', name: '哔哩哔哩', icon: '📺', checked: false },
  { id: 'private', name: '私有网络', icon: '🏠', checked: true },
  { id: 'github', name: 'Github', icon: '🐱', checked: true },
  { id: 'social', name: '社交媒体', icon: '🌐', checked: false },
  { id: 'education', name: '教育资源', icon: '📚', checked: false },
  { id: 'spotify', name: 'Spotify', icon: '🎵', checked: false },
  { id: 'proxy-service', name: '代理服务', icon: '🔄', checked: false },
  { id: 'non-china', name: '非中国', icon: '🌍', checked: false },
]

// 生成订阅演示教程步骤
const generatorDemoTutorial: TutorialStep[] = [
  {
    id: 'intro',
    target: '.generator-demo-container',
    title: '生成订阅演示',
    description: '这是订阅生成器的交互式演示。您将学习如何选择规则并生成订阅文件。',
    position: 'bottom',
  },
  {
    id: 'tabs',
    target: '.generator-tabs',
    title: '选择模式',
    description: '可以选择「自定义规则」手动配置，或使用「使用模板」快速生成。',
    position: 'bottom',
  },
  {
    id: 'rule-select',
    target: '.rule-select',
    title: '规则选择',
    description: '选择预设的规则方案，系统会自动选择常用规则类别。',
    position: 'bottom',
  },
  {
    id: 'categories',
    target: '.rule-categories',
    title: '规则类别',
    description: '勾选需要的规则类别，可以根据需求自由组合。',
    position: 'top',
  },
  {
    id: 'generate',
    target: '.generate-btn',
    title: '生成订阅',
    description: '配置完成后，点击按钮生成订阅文件。',
    position: 'top',
  },
]

export function GeneratorDemo() {
  const [ruleCategories, setRuleCategories] = useState<RuleCategory[]>(defaultRuleCategories)
  const [rulePreset, setRulePreset] = useState('balanced')
  const [categoriesOpen, setCategoriesOpen] = useState(true)
  const tutorial = useTutorial({ steps: generatorDemoTutorial })

  const selectedCount = ruleCategories.filter(c => c.checked).length

  const handleToggleCategory = (id: string) => {
    setRuleCategories(cats =>
      cats.map(cat =>
        cat.id === id ? { ...cat, checked: !cat.checked } : cat
      )
    )
  }

  const handleReset = () => {
    setRuleCategories(defaultRuleCategories)
    setRulePreset('balanced')
    setCategoriesOpen(true)
  }

  const handleClear = () => {
    setRuleCategories(cats => cats.map(cat => ({ ...cat, checked: false })))
  }

  return (
    <div className="generator-demo-container relative space-y-4">
      {/* 工具栏 */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg">生成订阅演示</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                选择规则类别，生成自定义订阅文件
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleReset}
                className="gap-1"
              >
                <RotateCcw className="size-3" />
                重置
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => tutorial.start()}
                className="gap-1"
              >
                <Play className="size-3" />
                开始教程
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* 主内容区 */}
      <Card>
        <CardContent className="pt-6">
          {/* Tabs */}
          <Tabs defaultValue="custom" className="generator-tabs">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="custom" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                自定义规则
              </TabsTrigger>
              <TabsTrigger value="template">
                使用模板
              </TabsTrigger>
            </TabsList>

            <TabsContent value="custom" className="mt-0 space-y-4">
              {/* 规则选择 */}
              <div className="rule-select space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">规则选择</span>
                  <CircleHelp className="size-4 text-muted-foreground" />
                </div>
                <Select value={rulePreset} onValueChange={setRulePreset}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="balanced">均衡规则（推荐）</SelectItem>
                    <SelectItem value="minimal">最小规则</SelectItem>
                    <SelectItem value="full">完整规则</SelectItem>
                    <SelectItem value="custom">自定义</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-sm text-primary">
                  已自动选择常用规则，可以手动调整
                </p>
              </div>

              {/* 规则类别 */}
              <Collapsible open={categoriesOpen} onOpenChange={setCategoriesOpen}>
                <CollapsibleTrigger asChild>
                  <div className="rule-categories flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                    <span className="text-sm">
                      已选择 <strong>{selectedCount}</strong> 个类别
                    </span>
                    <ChevronDown className={`size-4 transition-transform ${categoriesOpen ? 'rotate-180' : ''}`} />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-4">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {ruleCategories.map((category) => (
                      <label
                        key={category.id}
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                      >
                        <Checkbox
                          checked={category.checked}
                          onCheckedChange={() => handleToggleCategory(category.id)}
                        />
                        <span className="text-base">{category.icon}</span>
                        <span className="text-sm">{category.name}</span>
                      </label>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </TabsContent>

            <TabsContent value="template" className="mt-0">
              <div className="text-center py-12 text-muted-foreground">
                <p>选择预设模板快速生成订阅</p>
                <p className="text-sm mt-2">（演示功能）</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* 底部操作栏 */}
      <div className="flex gap-2">
        <Button className="generate-btn flex-1 h-12 text-base bg-primary/80 hover:bg-primary">
          生成订阅文件
        </Button>
        <Button
          variant="outline"
          className="h-12 px-6"
          onClick={handleClear}
        >
          清空
        </Button>
      </div>

      {/* 教程引导 */}
      <TutorialGuide
        step={tutorial.currentStepData}
        currentStep={tutorial.currentStep}
        totalSteps={tutorial.totalSteps}
        progress={tutorial.progress}
        isActive={tutorial.isActive}
        onNext={tutorial.next}
        onPrev={tutorial.prev}
        onStop={tutorial.stop}
        onReset={tutorial.reset}
      />
    </div>
  )
}
