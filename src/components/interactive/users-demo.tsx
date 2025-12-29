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
  Link2,
  Shield,
} from 'lucide-react'
import { mockUsers, type MockUser } from '@/data/mock/users'
import { TutorialGuide } from '@/components/docs/tutorial-guide'
import { useTutorial } from '@/hooks/use-tutorial'
import type { TutorialStep } from '@/hooks/use-tutorial'

// 为演示扩展的用户接口（添加id）
interface DemoUser extends MockUser {
  id: number
}

// 转换模拟数据为演示用格式
const initialUsers: DemoUser[] = mockUsers.map((u, idx) => ({
  ...u,
  id: idx + 1,
}))

// 用户管理演示教程步骤
const usersDemoTutorial: TutorialStep[] = [
  {
    id: 'intro',
    target: '.users-demo-container',
    title: '用户管理演示',
    description: '这是用户管理的交互式演示。您将学习如何管理用户和分配订阅。',
    position: 'bottom',
  },
  {
    id: 'add-user',
    target: '.add-user-btn',
    title: '添加用户',
    description: '点击此按钮可以创建新用户，设置用户名、密码和角色。',
    position: 'bottom',
  },
  {
    id: 'search',
    target: '.search-input',
    title: '搜索用户',
    description: '输入关键词快速搜索用户，支持按用户名搜索。',
    position: 'bottom',
  },
  {
    id: 'user-role',
    target: '.user-role-badge',
    title: '用户角色',
    description: '用户分为管理员和普通用户两种角色，管理员拥有完整权限。',
    position: 'left',
  },
  {
    id: 'assign-sub',
    target: '.assign-sub-btn',
    title: '分配订阅',
    description: '点击"分配订阅"可以为用户分配订阅配置，用户即可获取订阅链接。',
    position: 'left',
  },
  {
    id: 'actions',
    target: '.user-actions',
    title: '用户操作',
    description: '可以查看、编辑用户信息或删除用户。',
    position: 'left',
  },
]

export function UsersDemo() {
  const [users, setUsers] = useState<DemoUser[]>(initialUsers)
  const [searchQuery, setSearchQuery] = useState('')
  const [showAddDialog, setShowAddDialog] = useState(false)
  const tutorial = useTutorial({ steps: usersDemoTutorial })

  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter(u => u.id !== id))
  }

  const handleReset = () => {
    setUsers(initialUsers)
    setSearchQuery('')
  }

  // 格式化日期
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('zh-CN')
  }

  return (
    <div className="users-demo-container relative">
      {/* 工具栏 */}
      <Card className="mb-4">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">用户管理演示</CardTitle>
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
              className="add-user-btn gap-1"
              onClick={() => setShowAddDialog(true)}
            >
              <Plus className="size-3" />
              添加用户
            </Button>
            <div className="flex-1" />
            <div className="relative">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 size-3 text-muted-foreground" />
              <Input
                placeholder="搜索用户..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input pl-7 h-8 w-48"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 用户表格 */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>用户名</TableHead>
                <TableHead className="w-24">角色</TableHead>
                <TableHead className="w-28">订阅数</TableHead>
                <TableHead className="w-36">创建时间</TableHead>
                <TableHead className="w-40 text-right">操作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user, index) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.username}</TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={`user-role-badge ${
                        index === 0 ? '' : ''
                      } ${
                        user.role === 'admin'
                          ? 'bg-purple-500/10 text-purple-500'
                          : 'bg-blue-500/10 text-blue-500'
                      }`}
                    >
                      <Shield className="size-3 mr-1" />
                      {user.role === 'admin' ? '管理员' : '用户'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">
                      {user.subscriptions?.length || 0} 个订阅
                    </span>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {formatDate(user.created_at)}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="user-actions flex justify-end gap-1">
                      <Button
                        variant="outline"
                        size="sm"
                        className={`assign-sub-btn gap-1 h-7 ${index === 1 ? '' : ''}`}
                      >
                        <Link2 className="size-3" />
                        分配订阅
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
                        onClick={() => handleDeleteUser(user.id)}
                        disabled={user.role === 'admin'}
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

      {/* 统计信息 */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        <Card>
          <CardContent className="pt-4">
            <div className="text-2xl font-bold">{users.length}</div>
            <div className="text-sm text-muted-foreground">总用户数</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4">
            <div className="text-2xl font-bold">
              {users.filter(u => u.role === 'admin').length}
            </div>
            <div className="text-sm text-muted-foreground">管理员</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-4">
            <div className="text-2xl font-bold">
              {users.filter(u => u.role === 'user').length}
            </div>
            <div className="text-sm text-muted-foreground">普通用户</div>
          </CardContent>
        </Card>
      </div>

      {/* 添加用户对话框提示 */}
      {showAddDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-96">
            <CardHeader>
              <CardTitle>添加用户</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                在实际使用中，您可以在此设置用户名、密码和角色来创建新用户。
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
