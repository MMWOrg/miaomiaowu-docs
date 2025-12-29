// 代理组模拟数据（用于文档演示）
export interface MockProxyGroup {
  name: string
  type: 'select' | 'url-test' | 'fallback' | 'load-balance'
  proxies: string[]
  use?: string[]
}

// 模拟代理组数据（根据实际界面截图）
export const mockProxyGroups: MockProxyGroup[] = [
  {
    name: '🚀 节点选择',
    type: 'select',
    proxies: [
      '🌄 落地节点',
      '🇭🇰 香港节点',
      '🇯🇵 日本节点',
      '🇺🇸 美国节点',
      '🌐 全球直连',
    ],
  },
  {
    name: '🌄 落地节点',
    type: 'select',
    proxies: [
      '🇭🇰 BageVM-HK-L',
      '🇭🇰 RFC-Jinx',
      '🇭🇰 Alice-TW-Home',
      '🇭🇰 Alice-HK-Free'
    ],
  },
  {
    name: '🌠 中转节点',
    type: 'select',
    proxies: [
      '🇭🇰 香港01丨直连',
      '🇭🇰 香港02丨直连'
    ],
  },
  {
    name: '🇭🇰 香港节点',
    type: 'fallback',
    proxies: [
      '🇭🇰 香港01丨直连',
      '🇭🇰 香港02丨直连',
    ],
  },
  {
    name: '🇯🇵 日本节点',
    type: 'fallback',
    proxies: [
      '🇯🇵 日本01丨直连',
      '🇯🇵 日本02丨直连',
    ],
  },
  {
    name: '🇯🇵 美国节点',
    type: 'fallback',
    proxies: [
      '🇺🇸 美国01丨直连'
    ],
  },
]

// 模拟可用节点列表
export const mockAvailableNodes: string[] = [
  // 普通节点
  '🇭🇰 香港03丨直连',
  '🇭🇰 香港04丨直连',
  '🇯🇵 日本03丨直连',
  '🇯🇵 日本04丨直连',
  '🇺🇸 美国02丨直连',
  // 特殊节点
  'DIRECT',
  'REJECT',
  '♻️ 自动选择',
  '🚀 节点选择'
]

// 模拟代理集合（proxy-providers）
export const mockProxyProviders: string[] = [
  '📦 机场-HK 节点',
  '📦 机场-US 节点',
  '📦 机场2-HK 节点',
]

// 获取所有唯一节点名称（用于可用节点列表）
export function getAllUniqueNodes(proxyGroups: MockProxyGroup[]): string[] {
  const allNodes = new Set<string>()
  proxyGroups.forEach(group => {
    group.proxies.forEach(proxy => allNodes.add(proxy))
  })
  return Array.from(allNodes)
}
