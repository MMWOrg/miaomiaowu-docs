import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Play,
  Copy,
  ExternalLink,
  QrCode,
  FileCode,
  Pencil,
} from 'lucide-react'
import { mockSubscriptions, type MockSubscription } from '@/data/mock/subscriptions'
import { TutorialGuide } from '@/components/docs/tutorial-guide'
import { useTutorial } from '@/hooks/use-tutorial'
import type { TutorialStep } from '@/hooks/use-tutorial'

// 订阅管理演示教程步骤
const subscriptionDemoTutorial: TutorialStep[] = [
  {
    id: 'intro',
    target: '.subscription-demo-container',
    title: '订阅管理演示',
    description: '这是订阅管理的交互式演示。您将学习如何查看和管理订阅配置。',
    position: 'bottom',
  },
  {
    id: 'sub-card',
    target: '.sub-card',
    title: '订阅卡片',
    description: '每个订阅显示为一个卡片，包含名称、描述、版本等信息。',
    position: 'right',
  },
  {
    id: 'sub-link',
    target: '.sub-link',
    title: '订阅链接',
    description: '这是订阅的完整链接，可以复制到客户端使用。',
    position: 'bottom',
  },
  {
    id: 'copy-btn',
    target: '.copy-btn',
    title: '复制链接',
    description: '点击复制按钮可以选择不同客户端格式的订阅链接。',
    position: 'bottom',
  },
  {
    id: 'import-btn',
    target: '.import-btn',
    title: '导入 Clash',
    description: '一键导入到 Clash 客户端，自动打开客户端并添加订阅。',
    position: 'bottom',
  },
  {
    id: 'edit-btn',
    target: '.edit-btn',
    title: '编辑配置',
    description: '管理员可以编辑订阅配置，添加或删除节点。',
    position: 'left',
  },
]

// 格式化日期
const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString('zh-CN')
}

export function SubscriptionDemo() {
  const [subscriptions] = useState<MockSubscription[]>(mockSubscriptions)
  const [copiedId, setCopiedId] = useState<number | null>(null)
  const tutorial = useTutorial({ steps: subscriptionDemoTutorial })

  const handleCopy = (id: number, url: string) => {
    navigator.clipboard.writeText(url)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <div className="subscription-demo-container relative">
      {/* 工具栏 */}
      <Card className="mb-4">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">订阅管理演示</CardTitle>
            <div className="flex gap-2">
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

      {/* 订阅卡片列表 */}
      <div className="grid gap-4 md:grid-cols-2">
        {subscriptions.map((sub, index) => (
          <Card key={sub.id} className={`sub-card ${index === 0 ? '' : ''}`}>
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-base">{sub.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    {sub.description}
                  </p>
                </div>
                <Badge variant="outline" className="text-xs">
                  v{sub.version}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              {/* 订阅链接 */}
              <div className={`sub-link bg-muted/50 rounded p-2 mb-3 ${index === 0 ? '' : ''}`}>
                <code className="text-xs text-muted-foreground break-all">
                  {sub.url}
                </code>
              </div>

              {/* 信息行 */}
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                <span>节点数：{sub.node_count}</span>
                <span>更新：{formatDate(sub.updated_at)}</span>
              </div>

              {/* 操作按钮 */}
              <div className="flex gap-2 flex-wrap">
                <Button
                  size="sm"
                  variant="outline"
                  className={`copy-btn gap-1 ${index === 0 ? '' : ''}`}
                  onClick={() => handleCopy(sub.id, sub.url)}
                >
                  <Copy className="size-3" />
                  {copiedId === sub.id ? '已复制' : '复制'}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className={`import-btn gap-1 ${index === 0 ? '' : ''}`}
                >
                  <ExternalLink className="size-3" />
                  导入 Clash
                </Button>
                <Button size="sm" variant="outline" className="gap-1">
                  <QrCode className="size-3" />
                  二维码
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className={`edit-btn gap-1 ${index === 0 ? '' : ''}`}
                >
                  <Pencil className="size-3" />
                  编辑
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 订阅统计 */}
      <Card className="mt-4">
        <CardContent className="pt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileCode className="size-4 text-primary" />
              <span className="text-sm">
                共 {subscriptions.length} 个订阅配置
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              总节点数：{subscriptions.reduce((acc, sub) => acc + sub.node_count, 0)}
            </div>
          </div>
        </CardContent>
      </Card>

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
