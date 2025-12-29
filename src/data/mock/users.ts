// 用户模拟数据
export interface MockUser {
  username: string
  email: string
  nickname: string
  role: string
  is_active: boolean
  remark: string
  subscriptions: number[]
  created_at: string
  updated_at: string
}

export const mockUsers: MockUser[] = [
  {
    username: 'admin',
    email: 'admin@example.com',
    nickname: '管理员',
    role: 'admin',
    is_active: true,
    remark: '系统管理员账户',
    subscriptions: [1, 2],
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-25T10:30:00Z',
  },
  {
    username: 'user1',
    email: 'user1@example.com',
    nickname: '用户一',
    role: 'user',
    is_active: true,
    remark: '普通用户',
    subscriptions: [1],
    created_at: '2024-01-10T08:30:00Z',
    updated_at: '2024-01-20T14:15:00Z',
  },
  {
    username: 'user2',
    email: 'user2@example.com',
    nickname: '用户二',
    role: 'user',
    is_active: true,
    remark: '',
    subscriptions: [1, 2],
    created_at: '2024-01-12T10:45:00Z',
    updated_at: '2024-01-22T09:20:00Z',
  },
  {
    username: 'user3',
    email: 'user3@example.com',
    nickname: '用户三',
    role: 'user',
    is_active: false,
    remark: '已停用',
    subscriptions: [],
    created_at: '2024-01-15T14:20:00Z',
    updated_at: '2024-01-23T16:40:00Z',
  },
  {
    username: 'vip_user',
    email: 'vip@example.com',
    nickname: 'VIP用户',
    role: 'user',
    is_active: true,
    remark: 'VIP会员',
    subscriptions: [1, 2, 3],
    created_at: '2024-01-08T09:00:00Z',
    updated_at: '2024-01-24T11:30:00Z',
  },
]

// 角色标签颜色
export const ROLE_COLORS: Record<string, string> = {
  admin: 'bg-destructive/10 text-destructive',
  user: 'bg-primary/10 text-primary',
}

// 状态标签颜色
export const STATUS_COLORS = {
  active: 'bg-green-500/10 text-green-700 dark:text-green-400',
  inactive: 'bg-gray-500/10 text-gray-700 dark:text-gray-400',
}
