import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Plus,
  Upload,
  Trash2,
  Search,
  Play,
  GripVertical,
  Eye,
  Pencil,
  RotateCcw,
} from 'lucide-react'
import { mockNodes, type MockNode } from '@/data/mock/nodes'
import { TutorialGuide } from '@/components/docs/tutorial-guide'
import { useTutorial } from '@/hooks/use-tutorial'
import type { TutorialStep } from '@/hooks/use-tutorial'

// 节点管理演示教程步骤
const nodesDemoTutorial: TutorialStep[] = [
  {
    id: 'intro',
    target: '.nodes-demo-container',
    title: '节点管理演示',
    description: '这是一个交互式演示，展示节点管理的核心功能。您可以尝试各种操作来熟悉界面。',
    position: 'bottom',
  },
  {
    id: 'add-node',
    target: '.add-node-btn',
    title: '添加节点',
    description: '点击此按钮可以手动添加新节点。支持输入 vmess://、vless:// 等协议链接。',
    position: 'bottom',
    action: '点击"添加节点"按钮',
  },
  {
    id: 'import-sub',
    target: '.import-sub-btn',
    title: '导入订阅',
    description: '从外部机场导入订阅链接，系统会自动解析并导入所有节点。',
    position: 'bottom',
  },
  {
    id: 'search',
    target: '.search-input',
    title: '搜索节点',
    description: '输入关键词快速过滤节点，支持按名称、协议、地址等搜索。',
    position: 'bottom',
  },
  {
    id: 'select',
    target: '.select-all-checkbox',
    title: '批量选择',
    description: '勾选复选框可以选择多个节点进行批量操作。',
    position: 'right',
  },
  {
    id: 'drag',
    target: '.drag-handle',
    title: '拖拽排序',
    description: '按住拖拽手柄可以调整节点顺序。',
    position: 'right',
  },
  {
    id: 'actions',
    target: '.node-actions',
    title: '节点操作',
    description: '每个节点都可以进行查看、编辑、删除等操作。',
    position: 'left',
  },
  {
    id: 'complete',
    target: '.nodes-demo-container',
    title: '演示完成',
    description: '您已经了解了节点管理的基本功能。实际使用时，所有操作都会同步到服务器。',
    position: 'bottom',
  },
]

export function NodesDemo() {
  const [nodes, setNodes] = useState<MockNode[]>(mockNodes)
  const [selectedNodes, setSelectedNodes] = useState<number[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [showAddDialog, setShowAddDialog] = useState(false)
  const tutorial = useTutorial({ steps: nodesDemoTutorial })

  const filteredNodes = nodes.filter(node =>
    node.node_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    node.protocol.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedNodes(filteredNodes.map(n => n.id))
    } else {
      setSelectedNodes([])
    }
  }

  const handleSelectNode = (id: number, checked: boolean) => {
    if (checked) {
      setSelectedNodes([...selectedNodes, id])
    } else {
      setSelectedNodes(selectedNodes.filter(nid => nid !== id))
    }
  }

  const handleDeleteSelected = () => {
    setNodes(nodes.filter(n => !selectedNodes.includes(n.id)))
    setSelectedNodes([])
  }

  const handleToggleEnabled = (id: number) => {
    setNodes(nodes.map(n =>
      n.id === id ? { ...n, enabled: !n.enabled } : n
    ))
  }

  const handleReset = () => {
    setNodes(mockNodes)
    setSelectedNodes([])
    setSearchQuery('')
  }

  const getProtocolColor = (protocol: string) => {
    const colors: Record<string, string> = {
      vmess: 'bg-blue-500/10 text-blue-500',
      vless: 'bg-purple-500/10 text-purple-500',
      trojan: 'bg-green-500/10 text-green-500',
      ss: 'bg-orange-500/10 text-orange-500',
      hysteria2: 'bg-pink-500/10 text-pink-500',
    }
    return colors[protocol] || 'bg-gray-500/10 text-gray-500'
  }

  return (
    <div className="nodes-demo-container relative">
      {/* 工具栏 */}
      <Card className="mb-4">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">节点管理演示</CardTitle>
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
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Button
              size="sm"
              className="add-node-btn gap-1"
              onClick={() => setShowAddDialog(true)}
            >
              <Plus className="size-3" />
              添加节点
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="import-sub-btn gap-1"
            >
              <Upload className="size-3" />
              导入订阅
            </Button>
            {selectedNodes.length > 0 && (
              <Button
                size="sm"
                variant="destructive"
                className="gap-1"
                onClick={handleDeleteSelected}
              >
                <Trash2 className="size-3" />
                删除选中 ({selectedNodes.length})
              </Button>
            )}
            <div className="flex-1" />
            <div className="relative">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 size-3 text-muted-foreground" />
              <Input
                placeholder="搜索节点..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input pl-7 h-8 w-48"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 节点表格 */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-10">
                  <Checkbox
                    className="select-all-checkbox"
                    checked={selectedNodes.length === filteredNodes.length && filteredNodes.length > 0}
                    onCheckedChange={handleSelectAll}
                  />
                </TableHead>
                <TableHead className="w-10"></TableHead>
                <TableHead>节点名称</TableHead>
                <TableHead className="w-24">协议</TableHead>
                <TableHead className="w-20">状态</TableHead>
                <TableHead className="w-24">标签</TableHead>
                <TableHead className="w-28 text-right">操作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredNodes.map((node, index) => (
                <TableRow key={node.id} className={!node.enabled ? 'opacity-50' : ''}>
                  <TableCell>
                    <Checkbox
                      checked={selectedNodes.includes(node.id)}
                      onCheckedChange={(checked) => handleSelectNode(node.id, checked as boolean)}
                    />
                  </TableCell>
                  <TableCell>
                    <div className={`drag-handle cursor-grab ${index === 0 ? '' : ''}`}>
                      <GripVertical className="size-4 text-muted-foreground" />
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{node.node_name}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className={getProtocolColor(node.protocol)}>
                      {node.protocol}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={node.enabled ? 'default' : 'secondary'}
                      className={node.enabled ? 'bg-green-500/10 text-green-500' : ''}
                      onClick={() => handleToggleEnabled(node.id)}
                      style={{ cursor: 'pointer' }}
                    >
                      {node.enabled ? '启用' : '禁用'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {node.tag && (
                      <Badge variant="outline" className="text-xs">
                        {node.tag}
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="node-actions flex justify-end gap-1">
                      <Button variant="ghost" size="icon" className="size-7">
                        <Eye className="size-3" />
                      </Button>
                      <Button variant="ghost" size="icon" className="size-7">
                        <Pencil className="size-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-7 text-destructive"
                        onClick={() => setNodes(nodes.filter(n => n.id !== node.id))}
                      >
                        <Trash2 className="size-3" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* 添加节点对话框提示 */}
      {showAddDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-96">
            <CardHeader>
              <CardTitle>添加节点</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                在实际使用中，您可以在此输入节点链接（如 vmess://、vless://）来添加节点。
              </p>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setShowAddDialog(false)}>
                  关闭演示
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

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
