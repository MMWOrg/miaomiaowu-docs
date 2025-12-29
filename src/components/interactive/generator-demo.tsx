import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Play,
  RotateCcw,
  GripVertical,
  ChevronDown,
  ChevronUp,
  Plus,
} from 'lucide-react'
import { mockNodes } from '@/data/mock/nodes'
import { TutorialGuide } from '@/components/docs/tutorial-guide'
import { useTutorial } from '@/hooks/use-tutorial'
import type { TutorialStep } from '@/hooks/use-tutorial'

// 生成订阅演示教程步骤
const generatorDemoTutorial: TutorialStep[] = [
  {
    id: 'intro',
    target: '.generator-demo-container',
    title: '生成订阅演示',
    description: '这是订阅生成器的交互式演示。您将学习如何选择节点并配置代理组。',
    position: 'bottom',
  },
  {
    id: 'select-nodes',
    target: '.node-selection',
    title: '选择节点',
    description: '首先，勾选您想要包含在订阅中的节点。可以按标签筛选或全选。',
    position: 'right',
  },
  {
    id: 'proxy-groups',
    target: '.proxy-groups',
    title: '代理组配置',
    description: '代理组定义了如何分类和使用节点。您可以展开代理组查看和调整节点分配。',
    position: 'left',
  },
  {
    id: 'drag-node',
    target: '.draggable-node',
    title: '拖拽分配',
    description: '将右侧的节点拖拽到左侧的代理组中，完成节点分配。',
    position: 'left',
  },
  {
    id: 'save',
    target: '.save-btn',
    title: '保存订阅',
    description: '配置完成后，点击保存按钮生成订阅文件。',
    position: 'top',
  },
]

interface ProxyGroup {
  id: string
  name: string
  type: string
  nodes: string[]
  expanded: boolean
}

export function GeneratorDemo() {
  const [selectedNodeIds, setSelectedNodeIds] = useState<number[]>([1, 2, 3, 4])
  const [proxyGroups, setProxyGroups] = useState<ProxyGroup[]>([
    {
      id: 'proxy',
      name: '🚀 节点选择',
      type: 'select',
      nodes: ['🇭🇰 香港节点01', '🇭🇰 香港节点02'],
      expanded: true,
    },
    {
      id: 'auto',
      name: '♻️ 自动选择',
      type: 'url-test',
      nodes: ['🇭🇰 香港节点01', '🇭🇰 香港节点02', '🇯🇵 日本节点01'],
      expanded: false,
    },
    {
      id: 'telegram',
      name: '📲 Telegram',
      type: 'select',
      nodes: ['🇸🇬 新加坡节点01'],
      expanded: false,
    },
    {
      id: 'streaming',
      name: '🎬 流媒体',
      type: 'select',
      nodes: ['🇭🇰 香港节点01', '🇯🇵 日本节点01'],
      expanded: false,
    },
  ])
  const tutorial = useTutorial({ steps: generatorDemoTutorial })

  const availableNodes = mockNodes.filter(n => n.enabled)

  const handleSelectNode = (id: number, checked: boolean) => {
    if (checked) {
      setSelectedNodeIds([...selectedNodeIds, id])
    } else {
      setSelectedNodeIds(selectedNodeIds.filter(nid => nid !== id))
    }
  }

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedNodeIds(availableNodes.map(n => n.id))
    } else {
      setSelectedNodeIds([])
    }
  }

  const toggleGroupExpanded = (groupId: string) => {
    setProxyGroups(proxyGroups.map(g =>
      g.id === groupId ? { ...g, expanded: !g.expanded } : g
    ))
  }

  const handleReset = () => {
    setSelectedNodeIds([1, 2, 3, 4])
    setProxyGroups(proxyGroups.map(g => ({ ...g, expanded: g.id === 'proxy' })))
  }

  const getGroupTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      'select': 'bg-blue-500/10 text-blue-500',
      'url-test': 'bg-green-500/10 text-green-500',
      'fallback': 'bg-orange-500/10 text-orange-500',
      'load-balance': 'bg-purple-500/10 text-purple-500',
    }
    return colors[type] || 'bg-gray-500/10 text-gray-500'
  }

  return (
    <div className="generator-demo-container relative">
      {/* 工具栏 */}
      <Card className="mb-4">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">生成订阅演示</CardTitle>
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

      <div className="grid md:grid-cols-2 gap-4">
        {/* 左侧：代理组 */}
        <div className="proxy-groups space-y-3">
          <h3 className="font-semibold text-sm text-muted-foreground mb-2">代理组配置</h3>
          {proxyGroups.map((group) => (
            <Card key={group.id} className="overflow-hidden">
              <div
                className="flex items-center justify-between p-3 cursor-pointer hover:bg-muted/50"
                onClick={() => toggleGroupExpanded(group.id)}
              >
                <div className="flex items-center gap-2">
                  <span className="font-medium text-sm">{group.name}</span>
                  <Badge variant="secondary" className={`text-xs ${getGroupTypeColor(group.type)}`}>
                    {group.type}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    ({group.nodes.length} 个节点)
                  </span>
                </div>
                {group.expanded ? (
                  <ChevronUp className="size-4 text-muted-foreground" />
                ) : (
                  <ChevronDown className="size-4 text-muted-foreground" />
                )}
              </div>
              {group.expanded && (
                <CardContent className="pt-0 pb-3">
                  <div className="space-y-1 min-h-16 bg-muted/30 rounded-md p-2">
                    {group.nodes.length === 0 ? (
                      <p className="text-xs text-muted-foreground text-center py-2">
                        拖拽节点到此处
                      </p>
                    ) : (
                      group.nodes.map((nodeName, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 bg-background rounded px-2 py-1 text-xs"
                        >
                          <GripVertical className="size-3 text-muted-foreground" />
                          <span>{nodeName}</span>
                        </div>
                      ))
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full h-7 text-xs gap-1 mt-1"
                    >
                      <Plus className="size-3" />
                      添加节点
                    </Button>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* 右侧：节点选择 */}
        <div className="node-selection">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-sm text-muted-foreground">可用节点</h3>
            <div className="flex items-center gap-2">
              <Checkbox
                id="select-all"
                checked={selectedNodeIds.length === availableNodes.length}
                onCheckedChange={handleSelectAll}
              />
              <label htmlFor="select-all" className="text-xs">
                全选
              </label>
            </div>
          </div>
          <Card>
            <CardContent className="p-2 space-y-1 max-h-80 overflow-y-auto">
              {availableNodes.map((node, idx) => (
                <div
                  key={node.id}
                  className={`draggable-node flex items-center gap-2 p-2 rounded hover:bg-muted/50 cursor-grab ${
                    idx === 0 ? '' : ''
                  }`}
                >
                  <Checkbox
                    checked={selectedNodeIds.includes(node.id)}
                    onCheckedChange={(checked) => handleSelectNode(node.id, checked as boolean)}
                  />
                  <GripVertical className="size-3 text-muted-foreground" />
                  <span className="text-sm flex-1">{node.node_name}</span>
                  <Badge variant="secondary" className="text-xs">
                    {node.protocol}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* 底部操作栏 */}
      <Card className="mt-4">
        <CardContent className="py-3">
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              已选择 <strong>{selectedNodeIds.length}</strong> 个节点，
              配置了 <strong>{proxyGroups.length}</strong> 个代理组
            </div>
            <Button className="save-btn">
              保存订阅
            </Button>
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
