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
  Search,
  Play,
  Eye,
  Pencil,
  Trash2,
  RotateCcw,
  RefreshCw,
  Activity,
} from 'lucide-react'
import { mockProbeServers, type MockProbeServer } from '@/data/mock/probes'
import { TutorialGuide } from '@/components/docs/tutorial-guide'
import { useTutorial } from '@/hooks/use-tutorial'
import type { TutorialStep } from '@/hooks/use-tutorial'

// 为演示扩展的探针接口
interface DemoProbe extends MockProbeServer {
  status: 'online' | 'offline'
  lastSync: string
}

// 转换模拟数据为演示用格式
const initialProbes: DemoProbe[] = mockProbeServers.map(p => ({
  ...p,
  status: p.servers.some(s => s.online) ? 'online' : 'offline',
  lastSync: new Date(p.updated_at).toLocaleDateString('zh-CN'),
}))

// 探针管理演示教程步骤
const probeDemoTutorial: TutorialStep[] = [
  {
    id: 'intro',
    target: '.probe-demo-container',
    title: '探针管理演示',
    description: '这是探针管理的交互式演示。探针用于监控节点流量和状态。',
    position: 'bottom',
  },
  {
    id: 'add-probe',
    target: '.add-probe-btn',
    title: '添加探针',
    description: '点击此按钮可以添加新的探针，支持哪吒、Dstatus、Komari 等类型。',
    position: 'bottom',
  },
  {
    id: 'probe-type',
    target: '.probe-type-badge',
    title: '探针类型',
    description: '不同类型的探针有不同的数据格式和接口，需要选择正确的类型。',
    position: 'left',
  },
  {
    id: 'probe-status',
    target: '.probe-status-badge',
    title: '探针状态',
    description: '绿色表示探针正常运行，红色表示连接失败或配置错误。',
    position: 'left',
  },
  {
    id: 'sync-btn',
    target: '.sync-btn',
    title: '同步数据',
    description: '点击同步按钮可以立即从探针获取最新的流量数据。',
    position: 'left',
  },
  {
    id: 'actions',
    target: '.probe-actions',
    title: '探针操作',
    description: '可以查看探针详情、编辑配置或删除探针。',
    position: 'left',
  },
]

export function ProbeDemo() {
  const [probes, setProbes] = useState<DemoProbe[]>(initialProbes)
  const [searchQuery, setSearchQuery] = useState('')
  const [showAddDialog, setShowAddDialog] = useState(false)
  const [syncingId, setSyncingId] = useState<number | null>(null)
  const tutorial = useTutorial({ steps: probeDemoTutorial })

  const filteredProbes = probes.filter(probe =>
    probe.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleDeleteProbe = (id: number) => {
    setProbes(probes.filter(p => p.id !== id))
  }

  const handleSync = (id: number) => {
    setSyncingId(id)
    setTimeout(() => {
      setSyncingId(null)
      // 模拟更新最后同步时间
      setProbes(probes.map(p =>
        p.id === id ? { ...p, lastSync: '刚刚' } : p
      ))
    }, 1500)
  }

  const handleReset = () => {
    setProbes(initialProbes)
    setSearchQuery('')
  }

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      'nezha': 'bg-blue-500/10 text-blue-500',
      'nezha_v0': 'bg-blue-500/10 text-blue-500',
      'dstatus': 'bg-green-500/10 text-green-500',
      'komari': 'bg-purple-500/10 text-purple-500',
    }
    return colors[type] || 'bg-gray-500/10 text-gray-500'
  }

  const getTypeName = (type: string) => {
    const names: Record<string, string> = {
      'nezha': '哪吒',
      'nezha_v0': '哪吒V0',
      'dstatus': 'Dstatus',
      'komari': 'Komari',
    }
    return names[type] || type
  }

  return (
    <div className="probe-demo-container relative">
      {/* 工具栏 */}
      <Card className="mb-4">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">探针管理演示</CardTitle>
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
              className="add-probe-btn gap-1"
              onClick={() => setShowAddDialog(true)}
            >
              <Plus className="size-3" />
              添加探针
            </Button>
            <div className="flex-1" />
            <div className="relative">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 size-3 text-muted-foreground" />
              <Input
                placeholder="搜索探针..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input pl-7 h-8 w-48"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 探针表格 */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>探针名称</TableHead>
                <TableHead className="w-24">类型</TableHead>
                <TableHead className="w-24">状态</TableHead>
                <TableHead className="w-28">最后同步</TableHead>
                <TableHead className="w-36 text-right">操作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProbes.map((probe, index) => (
                <TableRow key={probe.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Activity className="size-4 text-primary" />
                      <span className="font-medium">{probe.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={`probe-type-badge ${index === 0 ? '' : ''} ${getTypeColor(probe.type)}`}
                    >
                      {getTypeName(probe.type)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={`probe-status-badge ${index === 0 ? '' : ''} ${
                        probe.status === 'online'
                          ? 'bg-green-500/10 text-green-500'
                          : 'bg-red-500/10 text-red-500'
                      }`}
                    >
                      {probe.status === 'online' ? '在线' : '离线'}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {probe.lastSync}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="probe-actions flex justify-end gap-1">
                      <Button
                        variant="outline"
                        size="sm"
                        className={`sync-btn gap-1 h-7 ${index === 0 ? '' : ''}`}
                        onClick={() => handleSync(probe.id)}
                        disabled={syncingId === probe.id}
                      >
                        <RefreshCw className={`size-3 ${syncingId === probe.id ? 'animate-spin' : ''}`} />
                        同步
                      </Button>
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
                        onClick={() => handleDeleteProbe(probe.id)}
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

      {/* 添加探针对话框提示 */}
      {showAddDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-96">
            <CardHeader>
              <CardTitle>添加探针</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                在实际使用中，您需要填写探针名称、类型、API 地址和 Token 等信息。
              </p>
              <div className="space-y-2 text-sm text-muted-foreground mb-4">
                <p>支持的探针类型：</p>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>哪吒</strong>：哪吒监控面板</li>
                  <li><strong>Dstatus</strong>：Dstatus 监控</li>
                  <li><strong>Komari</strong>：Komari 探针</li>
                </ul>
              </div>
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
