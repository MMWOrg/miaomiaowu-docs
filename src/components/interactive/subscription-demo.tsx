import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { Progress } from '@/components/ui/progress'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  Play,
  Settings,
  Pencil,
  Trash2,
  ChevronDown,
  ExternalLink,
  RotateCcw,
  Download,
} from 'lucide-react'
import { TutorialGuide } from '@/components/docs/tutorial-guide'
import { useTutorial } from '@/hooks/use-tutorial'
import type { TutorialStep } from '@/hooks/use-tutorial'

// 订阅文件类型
interface SubscriptionFile {
  id: number
  name: string
  version: number
  description: string
  type: 'upload' | 'create'
  updated_at: string
  rule_sync: boolean
}

// 外部订阅类型
interface ExternalSubscription {
  id: number
  name: string
  url: string
  node_count: number
  nodes: string[]
  traffic: {
    upload: number
    download: number
    total: number
    remaining: number
  }
  expire_at: string
  updated_at: string
}

// 模拟数据 - 订阅文件列表
const mockSubscriptionFiles: SubscriptionFile[] = [
  {
    id: 1,
    name: '手机专用 - Demo',
    version: 9,
    description: 'Demo机场订阅',
    type: 'upload',
    updated_at: '2026-01-15 09:41',
    rule_sync: false,
  },
  {
    id: 2,
    name: 'Redirhost-Demo',
    version: 8,
    description: 'Redirhost 专用订阅',
    type: 'upload',
    updated_at: '2026-01-15 09:41',
    rule_sync: false,
  },
  {
    id: 3,
    name: '共享节点',
    version: 17,
    description: '分享的自建节点',
    type: 'create',
    updated_at: '2026-01-15 23:10',
    rule_sync: false,
  },
  {
    id: 4,
    name: 'Clash 路由专用',
    version: 47,
    description: 'Clash 手机专用',
    type: 'upload',
    updated_at: '2026-01-08 22:53',
    rule_sync: false,
  },
  {
    id: 5,
    name: 'FakeIP DEMO',
    version: 67,
    description: 'OpenClash FakeIP Demo',
    type: 'upload',
    updated_at: '2026-01-15 11:35',
    rule_sync: true,
  },
]

// 模拟数据 - 外部订阅（包含流量和节点信息）
const mockExternalSubscriptions: ExternalSubscription[] = [
  {
    id: 1,
    name: 'Demo机场订阅',
    url: 'https://demo.example.com/sub/vi...',
    node_count: 27,
    nodes: [
      '🇭🇰 香港01',
      '🇹🇼 台湾 01',
      '🇭🇰 DMIT 香港 (1.5X)',
      '🇭🇰 Aliyun 香港 (1.5X)',
      '🇭🇰 IX (Ali 1G)',
      '🇭🇰 香港落地01',
      '🇭🇰 香港落地02',
      '🇺🇸 美国 01',
      '🇩🇪 德国 01'
    ],
    traffic: {
      upload: 0,
      download: 0,
      total: 1024,
      remaining: 1024,
    },
    expire_at: '2026年2月28日',
    updated_at: '2026-01-15 08:00',
  },
]

// 订阅管理演示教程步骤
const subscriptionDemoTutorial: TutorialStep[] = [
  {
    id: 'intro',
    target: '.subscription-demo-container',
    title: '订阅管理演示',
    description: '这是订阅管理的交互式演示。您将学习如何管理订阅文件和外部订阅。',
    position: 'bottom',
  },
  {
    id: 'sub-list',
    target: '.sub-table',
    title: '订阅列表',
    description: '订阅列表显示所有已添加的订阅文件，包含名称、版本、说明等信息。',
    position: 'top',
  },
  {
    id: 'sub-type',
    target: '.sub-type-badge',
    title: '订阅类型',
    description: '「上传」表示从Clash订阅链接导入，「创建」表示在系统内创建的订阅。',
    position: 'right',
  },
  {
    id: 'rule-sync',
    target: '.rule-sync-switch',
    title: '规则同步',
    description: '开启后，订阅会自动同步远程规则集的更新。',
    position: 'left',
  },
  {
    id: 'actions',
    target: '.sub-actions',
    title: '操作按钮',
    description: '可以进行配置、编辑、删除等操作。',
    position: 'left',
  },
  {
    id: 'external',
    target: '.external-sub-section',
    title: '外部订阅',
    description: '管理从节点管理导入的外部订阅源，包含流量统计和节点列表。',
    position: 'top',
  },
]

export function SubscriptionDemo() {
  const [subscriptions, setSubscriptions] = useState<SubscriptionFile[]>(mockSubscriptionFiles)
  const [externalOpen, setExternalOpen] = useState(false)
  const [proxyProviderOpen, setProxyProviderOpen] = useState(false)
  const tutorial = useTutorial({ steps: subscriptionDemoTutorial })

  const handleToggleRuleSync = (id: number) => {
    setSubscriptions(subs =>
      subs.map(sub =>
        sub.id === id ? { ...sub, rule_sync: !sub.rule_sync } : sub
      )
    )
  }

  const handleDelete = (id: number) => {
    setSubscriptions(subs => subs.filter(sub => sub.id !== id))
  }

  const handleReset = () => {
    setSubscriptions(mockSubscriptionFiles)
  }

  const formatTraffic = (gb: number) => {
    return `${gb.toFixed(2)} GB`
  }

  const getUsagePercent = (traffic: ExternalSubscription['traffic']) => {
    const used = traffic.total - traffic.remaining
    return Math.round((used / traffic.total) * 100)
  }

  return (
    <TooltipProvider>
      <div className="subscription-demo-container relative space-y-4">
        {/* 工具栏 */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg">订阅管理</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  从Clash订阅链接导入或上传本地文件
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

        {/* 订阅列表 */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">订阅列表 ({subscriptions.length})</CardTitle>
            <p className="text-sm text-muted-foreground">已添加的订阅文件</p>
          </CardHeader>
          <CardContent className="p-0">
            <Table className="sub-table">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[280px]">订阅名称</TableHead>
                  <TableHead>说明</TableHead>
                  <TableHead className="w-[140px]">最后更新</TableHead>
                  <TableHead className="w-[100px]">规则同步</TableHead>
                  <TableHead className="w-[120px] text-right">操作</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {subscriptions.map((sub, index) => (
                  <TableRow key={sub.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="secondary"
                          className={`sub-type-badge text-xs ${
                            sub.type === 'upload'
                              ? 'bg-orange-500/10 text-orange-600'
                              : 'bg-green-500/10 text-green-600'
                          } ${index === 0 ? '' : ''}`}
                        >
                          {sub.type === 'upload' ? '上传' : '创建'}
                        </Badge>
                        <span className="font-medium">{sub.name}</span>
                        <Badge variant="outline" className="text-xs">
                          v{sub.version}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {sub.description}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {sub.updated_at}
                    </TableCell>
                    <TableCell>
                      <Switch
                        checked={sub.rule_sync}
                        onCheckedChange={() => handleToggleRuleSync(sub.id)}
                        className={`rule-sync-switch ${index === 4 ? '' : ''}`}
                      />
                    </TableCell>
                    <TableCell className="text-right">
                      <div className={`sub-actions flex justify-end gap-1 ${index === 0 ? '' : ''}`}>
                        <Button variant="ghost" size="icon" className="size-8">
                          <Settings className="size-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="size-8">
                          <Pencil className="size-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="size-8 text-destructive"
                          onClick={() => handleDelete(sub.id)}
                        >
                          <Trash2 className="size-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* 外部订阅 */}
        <Collapsible open={externalOpen} onOpenChange={setExternalOpen}>
          <Card className="external-sub-section">
            <CollapsibleTrigger asChild>
              <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ExternalLink className="size-4 text-muted-foreground" />
                    <CardTitle className="text-base">外部订阅 ({mockExternalSubscriptions.length})</CardTitle>
                  </div>
                  <ChevronDown className={`size-4 transition-transform ${externalOpen ? 'rotate-180' : ''}`} />
                </div>
                <p className="text-sm text-muted-foreground text-left">
                  管理从节点管理导入的外部订阅源，用于从第三方订阅同步节点
                </p>
              </CardHeader>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <CardContent className="pt-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>名称</TableHead>
                      <TableHead>订阅链接</TableHead>
                      <TableHead className="w-[80px]">节点数</TableHead>
                      <TableHead className="w-[80px]">流量</TableHead>
                      <TableHead className="w-[40px]"></TableHead>
                      <TableHead className="w-[120px]">到期时间</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockExternalSubscriptions.map(sub => (
                      <TableRow key={sub.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <span className="text-lg">DEMO</span>
                            <span className="font-medium">{sub.name}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-muted-foreground text-xs truncate max-w-[180px]">
                          {sub.url}
                        </TableCell>
                        <TableCell>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Badge
                                variant="outline"
                                className="cursor-pointer hover:bg-primary/10"
                              >
                                {sub.node_count}
                              </Badge>
                            </TooltipTrigger>
                            <TooltipContent
                              side="bottom"
                              className="max-w-[320px] p-0"
                            >
                              <div className="bg-primary text-primary-foreground px-3 py-2 text-sm font-medium">
                                外部订阅的节点
                              </div>
                              <div className="max-h-[280px] overflow-y-auto">
                                {sub.nodes.map((node, idx) => (
                                  <div
                                    key={idx}
                                    className="px-3 py-1.5 text-sm border-b border-border/50 last:border-0 hover:bg-muted/50"
                                  >
                                    {node}
                                  </div>
                                ))}
                                {sub.node_count > sub.nodes.length && (
                                  <div className="px-3 py-1.5 text-sm text-muted-foreground">
                                    ... 还有 {sub.node_count - sub.nodes.length} 个节点
                                  </div>
                                )}
                              </div>
                            </TooltipContent>
                          </Tooltip>
                        </TableCell>
                        <TableCell>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="flex items-center gap-2 cursor-pointer">
                                <Progress
                                  value={getUsagePercent(sub.traffic)}
                                  className="w-12 h-2"
                                />
                                <span className="text-xs text-muted-foreground">
                                  {getUsagePercent(sub.traffic)}%
                                </span>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent side="bottom" className="p-3">
                              <div className="space-y-1 text-sm">
                                <div className="flex justify-between gap-4">
                                  <span className="text-muted-foreground">上传:</span>
                                  <span>{formatTraffic(sub.traffic.upload)}</span>
                                </div>
                                <div className="flex justify-between gap-4">
                                  <span className="text-muted-foreground">下载:</span>
                                  <span>{formatTraffic(sub.traffic.download)}</span>
                                </div>
                                <div className="flex justify-between gap-4">
                                  <span className="text-muted-foreground">总量:</span>
                                  <span>{formatTraffic(sub.traffic.total)}</span>
                                </div>
                                <div className="flex justify-between gap-4">
                                  <span className="text-muted-foreground">剩余:</span>
                                  <span>{formatTraffic(sub.traffic.remaining)}</span>
                                </div>
                                <div className="pt-1 border-t text-xs text-muted-foreground">
                                  统计方式: 仅下行
                                </div>
                              </div>
                            </TooltipContent>
                          </Tooltip>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon" className="size-7">
                            <Download className="size-3" />
                          </Button>
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {sub.expire_at}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        {/* 代理集合配置 */}
        <Collapsible open={proxyProviderOpen} onOpenChange={setProxyProviderOpen}>
          <Card>
            <CollapsibleTrigger asChild>
              <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-base">代理集合配置</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      管理 Clash Meta proxy-providers 配置，用于按需加载代理节点
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-primary">0 个配置</span>
                    <ChevronDown className={`size-4 transition-transform ${proxyProviderOpen ? 'rotate-180' : ''}`} />
                  </div>
                </div>
              </CardHeader>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <CardContent className="pt-0">
                <div className="text-center py-8 text-muted-foreground">
                  暂无代理集合配置
                </div>
              </CardContent>
            </CollapsibleContent>
          </Card>
        </Collapsible>

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
    </TooltipProvider>
  )
}
