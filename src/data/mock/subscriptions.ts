// 订阅模拟数据
export interface MockSubscription {
  id: number
  name: string
  description: string
  type: string
  filename: string
  url: string
  version: number
  node_count: number
  assigned_users: string[]
  created_at: string
  updated_at: string
}

export const mockSubscriptions: MockSubscription[] = [
  {
    id: 1,
    name: 'clash-main',
    description: '主订阅配置，包含所有可用节点',
    type: 'clash',
    filename: 'clash-main.yaml',
    url: '/api/subscribe/clash-main',
    version: 5,
    node_count: 6,
    assigned_users: ['admin', 'user1', 'user2', 'vip_user'],
    created_at: '2024-01-10T10:00:00Z',
    updated_at: '2024-01-25T08:30:00Z',
  },
  {
    id: 2,
    name: 'clash-premium',
    description: '高级订阅配置，包含优质节点',
    type: 'clash',
    filename: 'clash-premium.yaml',
    url: '/api/subscribe/clash-premium',
    version: 3,
    node_count: 4,
    assigned_users: ['admin', 'user2', 'vip_user'],
    created_at: '2024-01-12T14:20:00Z',
    updated_at: '2024-01-24T16:45:00Z',
  },
  {
    id: 3,
    name: 'clash-streaming',
    description: '流媒体专用订阅，优化视频播放',
    type: 'clash',
    filename: 'clash-streaming.yaml',
    url: '/api/subscribe/clash-streaming',
    version: 2,
    node_count: 3,
    assigned_users: ['vip_user'],
    created_at: '2024-01-15T09:30:00Z',
    updated_at: '2024-01-23T11:20:00Z',
  },
]

// 订阅版本历史
export interface MockSubscriptionVersion {
  version: number
  created_at: string
  changes: string
}

export const mockVersionHistory: Record<number, MockSubscriptionVersion[]> = {
  1: [
    { version: 5, created_at: '2024-01-25T08:30:00Z', changes: '添加新加坡节点' },
    { version: 4, created_at: '2024-01-22T10:15:00Z', changes: '更新规则集' },
    { version: 3, created_at: '2024-01-18T14:40:00Z', changes: '添加日本节点' },
    { version: 2, created_at: '2024-01-14T09:20:00Z', changes: '修复香港节点配置' },
    { version: 1, created_at: '2024-01-10T10:00:00Z', changes: '初始版本' },
  ],
  2: [
    { version: 3, created_at: '2024-01-24T16:45:00Z', changes: '优化代理组配置' },
    { version: 2, created_at: '2024-01-19T11:30:00Z', changes: '添加链式代理节点' },
    { version: 1, created_at: '2024-01-12T14:20:00Z', changes: '初始版本' },
  ],
  3: [
    { version: 2, created_at: '2024-01-23T11:20:00Z', changes: '添加流媒体规则' },
    { version: 1, created_at: '2024-01-15T09:30:00Z', changes: '初始版本' },
  ],
}
