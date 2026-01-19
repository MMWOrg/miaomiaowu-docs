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
import {
  Plus,
  Upload,
  Search,
  Play,
  GripVertical,
  RotateCcw,
  Check,
  Copy,
  Link2,
} from 'lucide-react'
import { mockNodes, getProtocolColor, type MockNode } from '@/data/mock/nodes'
import { TutorialGuide } from '@/components/docs/tutorial-guide'
import { useTutorial } from '@/hooks/use-tutorial'
import type { TutorialStep } from '@/hooks/use-tutorial'
import { Twemoji } from '@/components/twemoji'

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
  const [searchQuery, setSearchQuery] = useState('')
  const [showAddDialog, setShowAddDialog] = useState(false)
  const tutorial = useTutorial({ steps: nodesDemoTutorial })

  const filteredNodes = nodes.filter(node =>
    node.node_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    node.protocol.toLowerCase().includes(searchQuery.toLowerCase()) ||
    node.server.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleReset = () => {
    setNodes(mockNodes)
    setSearchQuery('')
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

      {/* 节点表格 - 与实际项目一致的布局 */}
      <Card>
        <CardContent className="p-0">
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead style={{ width: '36px' }}></TableHead>
                  <TableHead style={{ width: '90px' }}>协议</TableHead>
                  <TableHead>节点名称</TableHead>
                  <TableHead style={{ width: '100px' }}>标签</TableHead>
                  <TableHead style={{ width: '200px' }}>服务器地址</TableHead>
                  <TableHead style={{ width: '80px' }} className="text-center">配置</TableHead>
                  <TableHead style={{ width: '60px' }} className="text-center">操作</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredNodes.map((node, index) => (
                  <TableRow key={node.id}>
                    {/* 拖拽手柄 */}
                    <TableCell className="px-2">
                      <div className={`drag-handle cursor-grab p-1 ${index === 0 ? '' : ''}`}>
                        <GripVertical className="size-4 text-muted-foreground" />
                      </div>
                    </TableCell>

                    {/* 协议 */}
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className={`${getProtocolColor(node.protocol)} uppercase font-medium`}
                      >
                        {node.protocol.toUpperCase()}
                      </Badge>
                    </TableCell>

                    {/* 节点名称 */}
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="font-medium truncate">
                          <Twemoji>{node.node_name}</Twemoji>
                        </span>
                        <Check className="size-4 text-green-600 shrink-0" />
                      </div>
                    </TableCell>

                    {/* 标签 */}
                    <TableCell>
                      {node.tag ? (
                        <Badge variant="outline" className="text-xs">
                          <Twemoji>{node.tag}</Twemoji>
                        </Badge>
                      ) : (
                        <span className="text-muted-foreground flex items-center gap-1">
                          <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M4 4l7.07 17 2.51-7.39L21 11.07z" />
                          </svg>
                        </span>
                      )}
                    </TableCell>

                    {/* 服务器地址 */}
                    <TableCell>
                      <span className="font-mono text-sm text-muted-foreground truncate block max-w-[180px]">
                        {node.server}:{node.port}
                      </span>
                    </TableCell>

                    {/* 配置 */}
                    <TableCell>
                      <div className="node-actions flex justify-center gap-1">
                        <Button variant="ghost" size="icon" className="size-7" title="IP 解析">
                          <span className="text-xs font-mono text-primary">IP</span>
                        </Button>
                        <Button variant="ghost" size="icon" className="size-7" title="探针测速">
                          <svg className="size-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                          </svg>
                        </Button>
                        <Button variant="ghost" size="icon" className="size-7" title="复制配置">
                          <Copy className="size-3.5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="size-7" title="链式代理">
                          <Link2 className="size-3.5" />
                        </Button>
                      </div>
                    </TableCell>

                    {/* 操作 */}
                    <TableCell className="text-center">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-destructive hover:text-destructive hover:bg-destructive/10 h-7 px-2"
                        onClick={() => setNodes(nodes.filter(n => n.id !== node.id))}
                      >
                        删除
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
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
