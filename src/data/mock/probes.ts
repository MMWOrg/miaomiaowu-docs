// 探针服务器模拟数据
export interface MockProbeServer {
  id: number
  name: string
  type: 'nezha' | 'nezha_v0' | 'dstatus' | 'komari'
  url: string
  api_key: string
  servers: MockProbeServerItem[]
  created_at: string
  updated_at: string
}

export interface MockProbeServerItem {
  id: number
  name: string
  monthly_traffic: number // GB
  traffic_type: 'upload' | 'download' | 'both'
  current_usage: number // GB
  online: boolean
}

export const mockProbeServers: MockProbeServer[] = [
  {
    id: 1,
    name: '香港探针',
    type: 'nezha',
    url: 'https://probe-hk.example.com',
    api_key: 'probe_api_key_hk',
    servers: [
      {
        id: 101,
        name: 'HK-Server-01',
        monthly_traffic: 1000,
        traffic_type: 'both',
        current_usage: 256.5,
        online: true,
      },
      {
        id: 102,
        name: 'HK-Server-02',
        monthly_traffic: 500,
        traffic_type: 'download',
        current_usage: 123.8,
        online: true,
      },
    ],
    created_at: '2024-01-08T10:00:00Z',
    updated_at: '2024-01-25T09:30:00Z',
  },
  {
    id: 2,
    name: '日本探针',
    type: 'nezha_v0',
    url: 'https://probe-jp.example.com',
    api_key: 'probe_api_key_jp',
    servers: [
      {
        id: 201,
        name: 'JP-Server-01',
        monthly_traffic: 2000,
        traffic_type: 'both',
        current_usage: 512.3,
        online: true,
      },
    ],
    created_at: '2024-01-10T14:20:00Z',
    updated_at: '2024-01-24T16:45:00Z',
  },
  {
    id: 3,
    name: '新加坡探针',
    type: 'dstatus',
    url: 'https://probe-sg.example.com',
    api_key: 'probe_api_key_sg',
    servers: [
      {
        id: 301,
        name: 'SG-Server-01',
        monthly_traffic: 800,
        traffic_type: 'download',
        current_usage: 345.2,
        online: true,
      },
      {
        id: 302,
        name: 'SG-Server-02',
        monthly_traffic: 800,
        traffic_type: 'download',
        current_usage: 289.7,
        online: false,
      },
    ],
    created_at: '2024-01-12T09:30:00Z',
    updated_at: '2024-01-23T11:20:00Z',
  },
]

// 探针类型配置
export const PROBE_TYPES = [
  { value: 'nezha', label: '哪吒', description: '哪吒监控面板' },
  { value: 'nezha_v0', label: '哪吒V0', description: '哪吒监控面板旧版' },
  { value: 'dstatus', label: 'Dstatus', description: 'Dstatus面板' },
  { value: 'komari', label: 'Komari', description: 'Komari面板' },
] as const

// 流量统计类型
export const TRAFFIC_TYPES = [
  { value: 'upload', label: '上行' },
  { value: 'download', label: '下行' },
  { value: 'both', label: '上下行' },
] as const
