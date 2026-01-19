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
  original_server?: string
}

// 协议颜色映射 - 与实际项目一致
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

export const mockNodes: MockNode[] = [
  {
    id: 1,
    raw_url: 'ss://...',
    node_name: '🇭🇰 香港 IPLC 专线01',
    protocol: 'ss',
    parsed_config: '{}',
    clash_config: '',
    enabled: true,
    tag: '手动输入',
    probe_server: '',
    server: 'example.hk.iplc.server',
    port: 12345,
    created_at: '2024-01-15T10:30:00Z',
    updated_at: '2024-01-20T15:45:00Z',
  },
  {
    id: 2,
    raw_url: 'trojan://...',
    node_name: '🇭🇰 香港 HKT 家宽02',
    protocol: 'trojan',
    parsed_config: '{}',
    clash_config: '',
    enabled: true,
    tag: 'XX机场',
    probe_server: 'probe-hk',
    server: 'example.hk.hkt.server',
    port: 443,
    created_at: '2024-01-15T10:30:00Z',
    updated_at: '2024-01-20T15:45:00Z',
  },
  {
    id: 3,
    raw_url: 'ss://...',
    node_name: '🇹🇼 台湾 HiNet 原生03',
    protocol: 'ss',
    parsed_config: '{}',
    clash_config: '',
    enabled: true,
    tag: 'XX机场',
    probe_server: 'probe-tw',
    server: 'example.tw.hinet.server',
    port: 12345,
    created_at: '2024-01-16T08:20:00Z',
    updated_at: '2024-01-21T12:30:00Z',
  },
  {
    id: 4,
    raw_url: 'ss://...',
    node_name: '🇯🇵 日本 NTT 三网优化',
    protocol: 'ss',
    parsed_config: '{}',
    clash_config: '',
    enabled: true,
    tag: 'XX机场',
    probe_server: '',
    server: 'example.jp.ntt.server',
    port: 12345,
    created_at: '2024-01-17T14:10:00Z',
    updated_at: '2024-01-22T09:15:00Z',
  },
  {
    id: 5,
    raw_url: 'trojan://...',
    node_name: '🇸🇬 新加坡 Premium',
    protocol: 'trojan',
    parsed_config: '{}',
    clash_config: '',
    enabled: true,
    tag: 'XX机场',
    probe_server: 'probe-sg',
    server: 'example.sg.pro.server',
    port: 443,
    created_at: '2024-01-18T11:05:00Z',
    updated_at: '2024-01-23T16:20:00Z',
  },
  {
    id: 6,
    raw_url: 'trojan://...',
    node_name: '🇺🇸 美国 洛杉矶 CN2',
    protocol: 'trojan',
    parsed_config: '{}',
    clash_config: '',
    enabled: true,
    tag: 'XX机场',
    probe_server: '',
    server: 'example.us.cn2.server',
    port: 443,
    created_at: '2024-01-19T09:30:00Z',
    updated_at: '2024-01-24T14:45:00Z',
  },
  {
    id: 7,
    raw_url: 'trojan://...',
    node_name: '🇰🇷 韩国 首尔 BGP',
    protocol: 'trojan',
    parsed_config: '{}',
    clash_config: '',
    enabled: true,
    tag: 'XX机场',
    probe_server: '',
    server: 'example.kr.bgp.server',
    port: 443,
    created_at: '2024-01-20T16:00:00Z',
    updated_at: '2024-01-25T10:30:00Z',
  },
  {
    id: 8,
    raw_url: 'trojan://...',
    node_name: '🇩🇪 德国 法兰克福',
    protocol: 'trojan',
    parsed_config: '{}',
    clash_config: '',
    enabled: true,
    tag: 'XX机场',
    probe_server: '',
    server: 'example.de..server',
    port: 443,
    created_at: '2024-01-20T16:00:00Z',
    updated_at: '2024-01-25T10:30:00Z',
  },
]
