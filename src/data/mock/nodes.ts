// 节点模拟数据
export interface MockNode {
  id: number
  raw_url: string
  node_name: string
  protocol: string
  parsed_config: string
  clash_config: string
  enabled: boolean
  tag: string
  probe_server: string
  server: string
  port: number
  created_at: string
  updated_at: string
  original_server?: string // 原始服务器地址（IP 解析后保存）
}

// 模拟 IP 解析结果
export const mockIpResults: Record<string, string[]> = {
  'hk.example.com': ['103.152.220.1', '2001:df2:1c00::1'],
  'tw.example.com': ['168.95.1.1', '2001:b000:168::1'],
  'jp.example.com': ['203.140.12.1', '2001:240:bb82::1'],
  'us.example.com': ['8.8.8.8', '2001:4860:4860::8888'],
  'sg.example.com': ['103.6.84.1', '2001:e68:20::1'],
  'kr.example.com': ['175.45.176.1', '2001:220:8001::1'],
}

// 模拟探针服务器
export const mockProbeServers = [
  { id: 1, name: 'probe-hk', server_id: 'hk-001' },
  { id: 2, name: 'probe-jp', server_id: 'jp-001' },
  { id: 3, name: 'probe-sg', server_id: 'sg-001' },
]

export const mockNodes: MockNode[] = [
  {
    id: 1,
    raw_url: 'vmess://eyJhZGQiOiJoay5leGFtcGxlLmNvbSIsInBvcnQiOiI0NDMiLCJuYW1lIjoi8J+HrfCfh7Ag6aaZ5riv6IqC54K5MDEifQ==',
    node_name: '🇭🇰 香港节点01',
    protocol: 'vmess',
    parsed_config: '{"server": "hk.example.com", "port": 443}',
    clash_config: 'name: "🇭🇰 香港节点01"\ntype: vmess\nserver: hk.example.com\nport: 443\nuuid: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"\nalterId: 0\ncipher: auto\ntls: true',
    enabled: true,
    tag: '机场订阅',
    probe_server: 'probe-hk',
    server: 'hk.example.com',
    port: 443,
    created_at: '2024-01-15T10:30:00Z',
    updated_at: '2024-01-20T15:45:00Z',
  },
  {
    id: 2,
    raw_url: 'vmess://eyJhZGQiOiJ0dy5leGFtcGxlLmNvbSIsInBvcnQiOiI0NDMiLCJuYW1lIjoi8J+HufCfh7wg5Y+w5rm+6IqC54K5MDEifQ==',
    node_name: '🇹🇼 台湾节点01',
    protocol: 'vmess',
    parsed_config: '{"server": "tw.example.com", "port": 443}',
    clash_config: 'name: "🇹🇼 台湾节点01"\ntype: vmess\nserver: tw.example.com\nport: 443',
    enabled: true,
    tag: '机场订阅',
    probe_server: '',
    server: 'tw.example.com',
    port: 443,
    created_at: '2024-01-15T10:30:00Z',
    updated_at: '2024-01-20T15:45:00Z',
  },
  {
    id: 3,
    raw_url: 'vless://uuid@jp.example.com:443?type=ws&security=tls#🇯🇵 日本节点01',
    node_name: '🇯🇵 日本节点01',
    protocol: 'vless',
    parsed_config: '{"server": "jp.example.com", "port": 443}',
    clash_config: 'name: "🇯🇵 日本节点01"\ntype: vless\nserver: jp.example.com\nport: 443',
    enabled: true,
    tag: '手动输入',
    probe_server: 'probe-jp',
    server: 'jp.example.com',
    port: 443,
    created_at: '2024-01-16T08:20:00Z',
    updated_at: '2024-01-21T12:30:00Z',
  },
  {
    id: 4,
    raw_url: 'trojan://password@us.example.com:443#🇺🇸 美国节点01',
    node_name: '🇺🇸 美国节点01',
    protocol: 'trojan',
    parsed_config: '{"server": "us.example.com", "port": 443}',
    clash_config: 'name: "🇺🇸 美国节点01"\ntype: trojan\nserver: us.example.com\nport: 443',
    enabled: true,
    tag: '手动输入',
    probe_server: '',
    server: 'us.example.com',
    port: 443,
    created_at: '2024-01-17T14:10:00Z',
    updated_at: '2024-01-22T09:15:00Z',
  },
  {
    id: 5,
    raw_url: 'ss://YWVzLTI1Ni1nY206cGFzc3dvcmQ=@sg.example.com:8388#🇸🇬 新加坡节点01',
    node_name: '🇸🇬 新加坡节点01',
    protocol: 'ss',
    parsed_config: '{"server": "sg.example.com", "port": 8388}',
    clash_config: 'name: "🇸🇬 新加坡节点01"\ntype: ss\nserver: sg.example.com\nport: 8388',
    enabled: true,
    tag: '机场订阅',
    probe_server: 'probe-sg',
    server: 'sg.example.com',
    port: 8388,
    created_at: '2024-01-18T11:05:00Z',
    updated_at: '2024-01-23T16:20:00Z',
  },
  {
    id: 6,
    raw_url: 'hysteria2://auth@kr.example.com:443#🇰🇷 韩国节点01',
    node_name: '🇰🇷 韩国节点01',
    protocol: 'hysteria2',
    parsed_config: '{"server": "kr.example.com", "port": 443}',
    clash_config: 'name: "🇰🇷 韩国节点01"\ntype: hysteria2\nserver: kr.example.com\nport: 443',
    enabled: false,
    tag: '手动输入',
    probe_server: '',
    server: 'kr.example.com',
    port: 443,
    created_at: '2024-01-19T09:30:00Z',
    updated_at: '2024-01-24T14:45:00Z',
  },
  {
    id: 7,
    raw_url: 'vmess://...',
    node_name: '🇺🇸 美国节点01⇋🇭🇰 香港中转',
    protocol: 'vmess⇋vmess',
    parsed_config: '{}',
    clash_config: 'name: "🇺🇸 美国节点01⇋🇭🇰 香港中转"\ntype: vmess\nserver: us.example.com\nport: 443\ndialer-proxy: "🇭🇰 香港节点01"',
    enabled: true,
    tag: '链式代理',
    probe_server: '',
    server: 'us.example.com',
    port: 443,
    created_at: '2024-01-20T16:00:00Z',
    updated_at: '2024-01-25T10:30:00Z',
  },
]

// 协议颜色映射
export const PROTOCOL_COLORS: Record<string, string> = {
  vmess: 'bg-blue-500/10 text-blue-700 dark:text-blue-400',
  vless: 'bg-purple-500/10 text-purple-700 dark:text-purple-400',
  trojan: 'bg-red-500/10 text-red-700 dark:text-red-400',
  ss: 'bg-green-500/10 text-green-700 dark:text-green-400',
  socks5: 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400',
  hysteria: 'bg-pink-500/10 text-pink-700 dark:text-pink-400',
  hysteria2: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-400',
  tuic: 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-400',
  anytls: 'bg-teal-500/10 text-teal-700 dark:text-teal-400',
  wireguard: 'bg-orange-500/10 text-orange-700 dark:text-orange-400',
}

// 获取协议颜色
export function getProtocolColor(protocol: string): string {
  const normalizedProtocol = protocol.toLowerCase().split('⇋')[0].trim()
  return PROTOCOL_COLORS[normalizedProtocol] || ''
}
