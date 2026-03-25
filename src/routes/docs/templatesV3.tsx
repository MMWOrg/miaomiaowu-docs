import { createFileRoute, Link } from '@tanstack/react-router'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'
import {
  Plus,
  Pencil,
  Sparkles,
  Shield,
  FileCode,
  Globe,
  Settings,
  Database,
  FolderOpen,
  ChevronDown,
  ChevronUp,
  Filter,
  Layers,
  MapPin,
  Link2,
  RefreshCw,
  Upload,
  FileText,
  Zap,
} from 'lucide-react'

export const Route = createFileRoute('/docs/templatesV3')({
  component: TemplatesV3DocPage,
})

// V3 模板示例
const v3TemplateExample = `port: 7890
socks-port: 7891
allow-lan: true
mode: rule
log-level: info
external-controller: 127.0.0.1:9090

dns:
  enable: true
  ipv6: true
  enhanced-mode: fake-ip
  nameserver:
    - https://223.5.5.5/dns-query
    - https://120.53.53.53/dns-query

proxies:

proxy-groups:
  - name: 🚀 手动选择
    type: select
    include-all: true
    proxies:
      - ♻️ 自动选择
      - __PROXY_PROVIDERS__
      - __PROXY_NODES__
      - 🌄 落地节点
      - 🇭🇰 香港节点
  - name: ♻️ 自动选择
    type: url-test
    include-all: true
    proxies:
      - __PROXY_PROVIDERS__
      - __PROXY_NODES__
    url: https://cp.cloudflare.com/generate_204
    interval: 300
    tolerance: 50
  - name: 🌠 中转节点
    type: select
    include-all: true
    filter: 中转|CO|co
    proxies:
      - __PROXY_PROVIDERS__
      - __PROXY_NODES__
  - name: 🌄 落地节点
    type: select
    include-all: true
    filter: LD|落地|Bage|bage|jinx|ctc|Jinx|JINX|CTC|Luodi|luodi|LUODI|zouter|legend|Alice|alice
    dialer-proxy-group: 🌠 中转节点
    proxies:
      - __PROXY_PROVIDERS__
      - __PROXY_NODES__
  - name: 🎯 全球直连
    type: select
    proxies:
      - DIRECT

rules:
  - GEOSITE,private,🎯 全球直连
  - GEOIP,private,🎯 全球直连,no-resolve
  - GEOSITE,cn,🎯 全球直连
  - GEOIP,cn,🎯 全球直连,no-resolve
  - MATCH,🚀 节点选择`

// 代理组配置示例
const proxyGroupExample = `- name: 🚀 节点选择
  type: select
  include-all-proxies: true        # 引入所有代理节点
  include-region-proxy-groups: true # 引入区域代理组
  filter: "港|HK|Hong Kong"        # 筛选包含关键词的节点
  exclude-filter: "过期|到期"       # 排除包含关键词的节点
  include-type: "vmess|vless|trojan" # 只引入指定类型的节点
  exclude-type: "ss|ssr"           # 排除指定类型的节点`

const proxyGroupExampleResult = `- name: 🚀 手动选择
  type: select
  proxies:
    - ♻️ 自动选择
    - 🇭🇰 香港01
    - ... 命中filter的节点
    - 🌄 落地节点
    - 🇭🇰 香港节点
    - 🇺🇸 美国节点
    - 🇯🇵 日本节点
    - 🇸🇬 新加坡节点
    - 🇼🇸 台湾节点
    - 🇰🇷 韩国节点
    - 🇨🇦 加拿大节点
    - 🇬🇧 英国节点
    - 🇫🇷 法国节点
    - 🇩🇪 德国节点
    - 🇳🇱 荷兰节点
    - 🇹🇷 土耳其节点
    - 🌐 其他地区`

function CollapsibleCode({ title, code, language }: { title: string; code: string; language: string }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className='border rounded-lg overflow-hidden'>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className='w-full flex items-center justify-between p-3 bg-muted/50 hover:bg-muted/70 transition-colors text-left'
      >
        <span className='font-medium text-sm'>{title}</span>
        {isExpanded ? <ChevronUp className='size-4' /> : <ChevronDown className='size-4' />}
      </button>
      {isExpanded && (
        <div className='max-h-96 overflow-auto'>
          <pre className='p-4 text-xs bg-muted/30 overflow-x-auto'>
            <code className={`language-${language}`}>{code}</code>
          </pre>
        </div>
      )}
    </div>
  )
}

function TemplatesV3DocPage() {
  return (
    <DocLayout
      title='模板管理 V3'
      description='使用 mihomo 风格的高级模板系统管理订阅配置'
    >
      {/* 前置条件 */}
      <section className='mb-8'>
        <Card className='border-primary/20 bg-primary/5'>
          <CardContent className='pt-6'>
            <div className='flex items-start gap-3'>
              <Settings className='size-5 text-primary mt-0.5' />
              <div>
                <h4 className='font-semibold text-sm mb-1'>前置条件</h4>
                <p className='text-sm text-muted-foreground'>
                  需要在
                  <Link to='/docs/system-settings' className='text-primary hover:underline mx-1'>
                    系统设置
                  </Link>
                  中开启「使用新模板系统」并选择「V3 版本模板」，才会显示模板管理菜单。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 功能介绍 */}
      <section className='mb-8'>
        <Card className='bg-muted/30'>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              模板管理 V3 是妙妙屋最新的模板系统，采用 mihomo 风格的代理组配置语法，
              支持 <code className='bg-muted px-1 rounded'>include-all</code>、
              <code className='bg-muted px-1 rounded'>filter</code> 等高级特性，
              可以解决添加节点时需要手动编辑订阅的问题，现在可以根据模板自动添加节点到订阅。
            </p>
            <div className='flex gap-2 flex-wrap'>
              <Badge variant='destructive'>管理员功能</Badge>
              <Badge variant='secondary'>mihomo 兼容</Badge>
              <Badge variant='outline'>可视化编辑</Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 版本对比 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Layers className='size-5 text-primary' />
          模板版本对比
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              妙妙屋支持三种模板版本，可以在
              <Link to='/docs/system-settings' className='text-primary hover:underline mx-1'>
                系统设置
              </Link>
              中切换：
            </p>
            <div className='space-y-4'>
              <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-gray-400'>
                <div className='flex items-center gap-2 mb-2'>
                  <FolderOpen className='size-4 text-gray-500' />
                  <h4 className='font-semibold text-sm'>旧版 (V1) - 文件模板</h4>
                </div>
                <p className='text-xs text-muted-foreground'>
                  使用 <code className='bg-muted px-1 rounded'>rule_templates</code> 目录下的 YAML 文件，
                  是完整的 Clash 配置文件，节点在生成时自动填充到 proxies 字段。
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-blue-500'>
                <div className='flex items-center gap-2 mb-2'>
                  <Database className='size-4 text-blue-500' />
                  <h4 className='font-semibold text-sm'>通用后端 (V2) - 数据库模板</h4>
                </div>
                <p className='text-xs text-muted-foreground'>
                  使用 INI 格式（subconverter 格式），通过 <code className='bg-muted px-1 rounded'>custom_proxy_group</code> 定义代理组，
                  兼容 GitHub 上的各种订阅转换模板。
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-green-500'>
                <div className='flex items-center gap-2 mb-2'>
                  <Zap className='size-4 text-green-500' />
                  <h4 className='font-semibold text-sm'>新版 (V3) - mihomo 风格模板（推荐）</h4>
                </div>
                <p className='text-xs text-muted-foreground'>
                  使用 YAML 格式，支持 mihomo 的 <code className='bg-muted px-1 rounded'>include-all</code>、
                  <code className='bg-muted px-1 rounded'>filter</code> 等高级语法，
                  提供可视化编辑界面，支持区域代理组自动生成。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 核心概念 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Sparkles className='size-5 text-primary' />
          核心概念
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              V3 模板基于 mihomo 的代理组语法，通过声明式配置自动匹配和分配节点：
            </p>
            <div className='grid gap-4 md:grid-cols-2'>
              <div className='bg-primary/5 rounded-lg p-4 border border-primary/20'>
                <h4 className='font-semibold text-sm mb-2'>节点引入</h4>
                <ul className='text-xs text-muted-foreground space-y-1'>
                  <li>• <code className='bg-muted px-1 rounded'>include-all</code> - 引入所有节点和代理集合</li>
                  <li>• <code className='bg-muted px-1 rounded'>include-all-proxies</code> - 仅引入所有代理节点</li>
                  <li>• <code className='bg-muted px-1 rounded'>include-all-providers</code> - 仅引入所有代理集合</li>
                  <li>• <code className='bg-muted px-1 rounded'>include-type</code> - 按节点类型引入</li>
                </ul>
              </div>
              <div className='bg-primary/5 rounded-lg p-4 border border-primary/20'>
                <h4 className='font-semibold text-sm mb-2'>节点筛选</h4>
                <ul className='text-xs text-muted-foreground space-y-1'>
                  <li>• <code className='bg-muted px-1 rounded'>filter</code> - 筛选匹配关键词的节点</li>
                  <li>• <code className='bg-muted px-1 rounded'>exclude-filter</code> - 排除匹配关键词的节点</li>
                  <li>• <code className='bg-muted px-1 rounded'>exclude-type</code> - 按节点类型排除</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 代理组配置属性 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Filter className='size-5 text-primary' />
          代理组配置属性
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='space-y-6'>
              {/* 基础属性 */}
              <div>
                <h4 className='font-semibold mb-3'>基础属性</h4>
                <div className='overflow-x-auto'>
                  <table className='w-full text-sm'>
                    <thead>
                      <tr className='border-b'>
                        <th className='text-left py-2 pr-4'>属性</th>
                        <th className='text-left py-2 pr-4'>类型</th>
                        <th className='text-left py-2'>说明</th>
                      </tr>
                    </thead>
                    <tbody className='text-muted-foreground'>
                      <tr className='border-b'>
                        <td className='py-2 pr-4'><code className='bg-muted px-1 rounded'>name</code></td>
                        <td className='py-2 pr-4'>string</td>
                        <td className='py-2'>代理组名称</td>
                      </tr>
                      <tr className='border-b'>
                        <td className='py-2 pr-4'><code className='bg-muted px-1 rounded'>type</code></td>
                        <td className='py-2 pr-4'>string</td>
                        <td className='py-2'>代理组类型：select、url-test、fallback、load-balance、relay</td>
                      </tr>
                      <tr className='border-b'>
                        <td className='py-2 pr-4'><code className='bg-muted px-1 rounded'>proxies</code></td>
                        <td className='py-2 pr-4'>array</td>
                        <td className='py-2'>静态代理列表（其他代理组名称或 DIRECT/REJECT 或 __PROXY_NODES__ 等占位符）</td>
                      </tr>
                      <tr className='border-b'>
                        <td className='py-2 pr-4'><code className='bg-muted px-1 rounded'>icon</code></td>
                        <td className='py-2 pr-4'>string</td>
                        <td className='py-2'>代理组图标，可以是图片 URL 或 emoji</td>
                      </tr>
                      <tr className='border-b'>
                        <td className='py-2 pr-4'><code className='bg-muted px-1 rounded'>hidden</code></td>
                        <td className='py-2 pr-4'>boolean</td>
                        <td className='py-2'>是否在客户端中隐藏此代理组（默认 false）</td>
                      </tr>
                      </tbody>
                      </table>                </div>
              </div>

              {/* 引入属性 */}
              <div>
                <h4 className='font-semibold mb-3'>节点引入属性</h4>
                <div className='overflow-x-auto'>
                  <table className='w-full text-sm'>
                    <thead>
                      <tr className='border-b'>
                        <th className='text-left py-2 pr-4'>属性</th>
                        <th className='text-left py-2 pr-4'>类型</th>
                        <th className='text-left py-2'>说明</th>
                      </tr>
                    </thead>
                    <tbody className='text-muted-foreground'>
                      <tr className='border-b'>
                        <td className='py-2 pr-4'><code className='bg-muted px-1 rounded'>include-all</code></td>
                        <td className='py-2 pr-4'>boolean</td>
                        <td className='py-2'>引入所有出站代理和代理集合</td>
                      </tr>
                      <tr className='border-b'>
                        <td className='py-2 pr-4'><code className='bg-muted px-1 rounded'>include-all-proxies</code></td>
                        <td className='py-2 pr-4'>boolean</td>
                        <td className='py-2'>仅引入所有出站代理节点</td>
                      </tr>
                      <tr className='border-b'>
                        <td className='py-2 pr-4'><code className='bg-muted px-1 rounded'>include-all-providers</code></td>
                        <td className='py-2 pr-4'>boolean</td>
                        <td className='py-2'>仅引入所有代理集合</td>
                      </tr>
                      <tr className='border-b'>
                        <td className='py-2 pr-4'><code className='bg-muted px-1 rounded'>include-type</code></td>
                        <td className='py-2 pr-4'>string</td>
                        <td className='py-2'>按节点类型引入，用 | 分隔多个类型</td>
                      </tr>
                      <tr className='border-b'>
                        <td className='py-2 pr-4'><code className='bg-muted px-1 rounded'>include-region-proxy-groups</code></td>
                        <td className='py-2 pr-4'>boolean</td>
                        <td className='py-2'>引入预置的区域代理组（妙妙屋扩展）</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 筛选属性 */}
              <div>
                <h4 className='font-semibold mb-3'>节点筛选属性</h4>
                <div className='overflow-x-auto'>
                  <table className='w-full text-sm'>
                    <thead>
                      <tr className='border-b'>
                        <th className='text-left py-2 pr-4'>属性</th>
                        <th className='text-left py-2 pr-4'>类型</th>
                        <th className='text-left py-2'>说明</th>
                      </tr>
                    </thead>
                    <tbody className='text-muted-foreground'>
                      <tr className='border-b'>
                        <td className='py-2 pr-4'><code className='bg-muted px-1 rounded'>filter</code></td>
                        <td className='py-2 pr-4'>string</td>
                        <td className='py-2'>筛选匹配正则表达式的节点，多个用 ` 分隔</td>
                      </tr>
                      <tr className='border-b'>
                        <td className='py-2 pr-4'><code className='bg-muted px-1 rounded'>exclude-filter</code></td>
                        <td className='py-2 pr-4'>string</td>
                        <td className='py-2'>排除匹配正则表达式的节点，多个用 ` 分隔</td>
                      </tr>
                      <tr className='border-b'>
                        <td className='py-2 pr-4'><code className='bg-muted px-1 rounded'>exclude-type</code></td>
                        <td className='py-2 pr-4'>string</td>
                        <td className='py-2'>按节点类型排除，用 | 分隔多个类型</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 中转代理组 */}
              <div>
                <h4 className='font-semibold mb-3'>中转代理组属性</h4>
                <div className='overflow-x-auto'>
                  <table className='w-full text-sm'>
                    <thead>
                      <tr className='border-b'>
                        <th className='text-left py-2 pr-4'>属性</th>
                        <th className='text-left py-2 pr-4'>类型</th>
                        <th className='text-left py-2'>说明</th>
                      </tr>
                    </thead>
                    <tbody className='text-muted-foreground'>
                      <tr className='border-b'>
                        <td className='py-2 pr-4'><code className='bg-muted px-1 rounded'>dialer-proxy-group</code></td>
                        <td className='py-2 pr-4'>string</td>
                        <td className='py-2'>指定中转代理组名称，流量经该组转发后再到达目标（链式代理）</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className='bg-muted/30 rounded-lg p-4 mt-3'>
                  <p className='text-xs text-muted-foreground'>
                    设置中转代理组后，该代理组中的节点流量会先经过中转代理组选中的节点转发，实现
                    <code className='bg-muted px-1 rounded mx-1'>客户端 → 中转节点 → 落地节点 → 目标</code>
                    的链式代理效果。可在可视化编辑器中通过代理组右侧的链接图标快速设置。
                  </p>
                </div>
              </div>

              {/* 测速属性 */}
              <div>
                <h4 className='font-semibold mb-3'>测速相关属性（url-test/fallback/load-balance）</h4>
                <div className='overflow-x-auto'>
                  <table className='w-full text-sm'>
                    <thead>
                      <tr className='border-b'>
                        <th className='text-left py-2 pr-4'>属性</th>
                        <th className='text-left py-2 pr-4'>类型</th>
                        <th className='text-left py-2'>说明</th>
                      </tr>
                    </thead>
                    <tbody className='text-muted-foreground'>
                      <tr className='border-b'>
                        <td className='py-2 pr-4'><code className='bg-muted px-1 rounded'>url</code></td>
                        <td className='py-2 pr-4'>string</td>
                        <td className='py-2'>测速 URL，默认 https://www.gstatic.com/generate_204</td>
                      </tr>
                      <tr className='border-b'>
                        <td className='py-2 pr-4'><code className='bg-muted px-1 rounded'>interval</code></td>
                        <td className='py-2 pr-4'>number</td>
                        <td className='py-2'>测速间隔（秒），默认 300</td>
                      </tr>
                      <tr className='border-b'>
                        <td className='py-2 pr-4'><code className='bg-muted px-1 rounded'>tolerance</code></td>
                        <td className='py-2 pr-4'>number</td>
                        <td className='py-2'>容差（毫秒），默认 50</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* YAML 变量 */}
              <div>
                <h4 className='font-semibold mb-3'>YAML 变量</h4>
                <div className='bg-muted/30 rounded-lg p-4'>
                  <p className='text-xs text-muted-foreground mb-3'>
                    V3 模板支持在顶层定义自定义变量，避免在多个代理组中重复编写复杂的正则表达式：
                  </p>
                  <ul className='text-xs text-muted-foreground space-y-1 mb-3'>
                    <li>• 在 YAML 顶层定义非 Clash 标准字段的字符串即可作为变量</li>
                    <li>• 代理组的 <code className='bg-muted px-1 rounded'>filter</code> 和 <code className='bg-muted px-1 rounded'>exclude-filter</code> 可以直接引用变量名</li>
                    <li>• 最终生成的配置中会自动移除这些自定义变量</li>
                  </ul>
                  <CollapsibleCode
                    title='点击查看 YAML 变量示例'
                    code={`# 定义变量（顶层）
FILTER_US: "美|US|United States|🇺🇸"
FILTER_HK: "港|HK|Hong Kong|🇭🇰"

proxy-groups:
  - name: 🇺🇸 美国节点
    type: select
    include-all-proxies: true
    filter: FILTER_US        # 引用上面定义的变量

  - name: 🇭🇰 香港节点
    type: select
    include-all-proxies: true
    filter: FILTER_HK        # 引用上面定义的变量`}
                    language='yaml'
                  />
                </div>
              </div>

              <CollapsibleCode
                title='点击查看代理组配置示例'
                code={proxyGroupExample}
                language='yaml'
              />
              <p className='text-sm text-muted-foreground mt-4 mb-2'>等同于页面以下配置：</p>
              <img src='/images/proxygroups_ui.png' alt='代理组示例配置' className='rounded-lg border' />
              <CollapsibleCode
                title='点击查看代理组订阅结果'
                code={proxyGroupExampleResult}
                language='yaml'
              />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 支持的节点类型 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Globe className='size-5 text-primary' />
          支持的节点类型
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              <code className='bg-muted px-1 rounded'>include-type</code> 和 
              <code className='bg-muted px-1 rounded'>exclude-type</code> 支持以下节点类型（不区分大小写）：
            </p>
            <div className='flex flex-wrap gap-2'>
              {['ss', 'ssr', 'vmess', 'vless', 'trojan', 'hysteria', 'hysteria2', 'tuic', 'wireguard', 'socks5', 'http', 'snell', 'anytls', 'ssh'].map(type => (
                <Badge key={type} variant='outline' className='font-mono'>{type}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 区域代理组 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <MapPin className='size-5 text-primary' />
          区域代理组
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              妙妙屋 V3 模板支持自动生成区域代理组，在编辑模板时开启「区域代理组」开关即可。
              系统会根据节点名称自动匹配地区，并创建对应的代理组。
            </p>
            <div className='bg-primary/5 rounded-lg p-4 border border-primary/20 mb-4'>
              <h4 className='font-semibold text-sm mb-2'>预置区域代理组</h4>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-2 text-sm'>
                <div className='flex items-center gap-1'>🇭🇰 香港节点</div>
                <div className='flex items-center gap-1'>🇺🇸 美国节点</div>
                <div className='flex items-center gap-1'>🇯🇵 日本节点</div>
                <div className='flex items-center gap-1'>🇸🇬 新加坡节点</div>
                <div className='flex items-center gap-1'>🇼🇸 台湾节点</div>
                <div className='flex items-center gap-1'>🇰🇷 韩国节点</div>
                <div className='flex items-center gap-1'>🇨🇦 加拿大节点</div>
                <div className='flex items-center gap-1'>🇬🇧 英国节点</div>
                <div className='flex items-center gap-1'>🇫🇷 法国节点</div>
                <div className='flex items-center gap-1'>🇩🇪 德国节点</div>
                <div className='flex items-center gap-1'>🇳🇱 荷兰节点</div>
                <div className='flex items-center gap-1'>🇹🇷 土耳其节点</div>
                <div className='flex items-center gap-1'>🌐 其他地区</div>
              </div>
            </div>
            <div className='bg-muted/30 rounded-lg p-4'>
              <h4 className='font-semibold text-sm mb-2'>使用方式</h4>
              <ul className='text-xs text-muted-foreground space-y-1'>
                <li>• 开启区域代理组开关后，可引入所有区域代理组</li>
                <li>• 区域代理组会自动根据节点名称中的地区关键词进行匹配</li>
                <li>• 「其他地区」组会包含所有未匹配到特定地区的节点</li>
                <li>• 未匹配到任何节点的区域代理组会自动在订阅中移除，不需在模板删除不用的区域代理组</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 模板创建方式 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Plus className='size-5 text-primary' />
          模板创建方式
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='space-y-4'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <div className='flex items-center gap-2 mb-2'>
                  <Upload className='size-4 text-primary' />
                  <h4 className='font-semibold text-sm'>上传文件</h4>
                </div>
                <p className='text-xs text-muted-foreground'>
                  上传本地的 YAML 模板文件，文件名将作为模板名称。
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <div className='flex items-center gap-2 mb-2'>
                  <FileText className='size-4 text-primary' />
                  <h4 className='font-semibold text-sm'>粘贴文本</h4>
                </div>
                <p className='text-xs text-muted-foreground'>
                  直接粘贴 YAML 格式的模板内容，输入模板名称后保存。
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <div className='flex items-center gap-2 mb-2'>
                  <RefreshCw className='size-4 text-primary' />
                  <h4 className='font-semibold text-sm'>从 V2 模板转换</h4>
                </div>
                <p className='text-xs text-muted-foreground'>
                  将现有的 V2（subconverter INI 格式）模板转换为 V3 格式，
                  系统会自动解析 <code className='bg-muted px-1 rounded'>custom_proxy_group</code> 并生成对应的代理组配置。
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <div className='flex items-center gap-2 mb-2'>
                  <Database className='size-4 text-primary' />
                  <h4 className='font-semibold text-sm'>从现有订阅生成</h4>
                </div>
                <p className='text-xs text-muted-foreground'>
                  分析现有订阅配置中的代理组，自动生成 filter 正则表达式和 include-all 配置，
                  快速创建与现有订阅结构一致的模板。
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <div className='flex items-center gap-2 mb-2'>
                  <FileCode className='size-4 text-primary' />
                  <h4 className='font-semibold text-sm'>创建空白模板</h4>
                </div>
                <p className='text-xs text-muted-foreground'>
                  创建一个包含基础配置的空白模板，然后通过可视化编辑器添加代理组。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 可视化编辑器 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Pencil className='size-5 text-primary' />
          可视化编辑器
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              V3 模板提供可视化编辑界面，无需手动编写 YAML 代码即可配置代理组：
            </p>
            <div className='space-y-4'>
              <div className='bg-primary/5 rounded-lg p-4 border border-primary/20'>
                <h4 className='font-semibold text-sm mb-2'>编辑器布局</h4>
                <ul className='text-xs text-muted-foreground space-y-1'>
                  <li>• <strong>桌面端</strong>：三列布局，左侧为代理组编辑器，右侧为配置预览</li>
                  <li>• <strong>平板端</strong>：两列布局，编辑器和预览各占一半</li>
                  <li>• <strong>手机端</strong>：单列布局，预览显示在保存按钮下方</li>
                </ul>
              </div>
              <div className='bg-primary/5 rounded-lg p-4 border border-primary/20'>
                <h4 className='font-semibold text-sm mb-2'>代理组编辑功能</h4>
                <ul className='text-xs text-muted-foreground space-y-1'>
                  <li>• <strong>筛选关键词</strong>：输入关键词自动生成 filter 正则表达式</li>
                  <li>• <strong>排除关键词</strong>：输入关键词自动生成 exclude-filter 正则表达式</li>
                  <li>• <strong>节点类型选择</strong>：弹出气泡多选需要引入/排除的节点类型</li>
                  <li>• <strong>引入选项</strong>：一键开启 include-all、include-all-proxies 等选项</li>
                  <li>• <strong>图标与隐藏</strong>：可以配置代理组的图标以及设置隐藏该代理组</li>
                  <li>• <strong>代理组引用</strong>：选择并拖动排序其他代理组</li>
                  <li>• <strong>中转代理组</strong>：点击链接图标设置中转代理组，实现链式代理</li>
                  <li>• <strong>实时预览</strong>：右侧实时显示生成的 YAML 配置</li>
                </ul>
              </div>
              <div className='bg-primary/5 rounded-lg p-4 border border-primary/20'>
                <h4 className='font-semibold text-sm mb-2'>双模式编辑</h4>
                <ul className='text-xs text-muted-foreground space-y-1'>
                  <li>• <strong>可视化模式</strong>：通过表单配置代理组，适合快速编辑</li>
                  <li>• <strong>YAML 模式</strong>：直接编辑 YAML 代码，适合高级用户</li>
                  <li>• 两种模式可以随时切换，数据会自动同步</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 订阅绑定 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Link2 className='size-5 text-primary' />
          订阅绑定
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              V3 模板可以绑定到订阅，绑定后订阅配置将完全基于模板生成：
            </p>
            <div className='space-y-4'>
              <div className='bg-green-500/10 rounded-lg p-4 border border-green-500/20'>
                <h4 className='font-semibold text-sm mb-2 text-green-600'>绑定流程</h4>
                <ol className='space-y-2 text-sm'>
                  <li className='flex gap-3'>
                    <span className='flex-shrink-0 size-5 rounded-full bg-green-500/20 text-green-600 flex items-center justify-center text-xs font-semibold'>1</span>
                    <span className='text-muted-foreground'>在订阅管理页面选择要绑定的订阅</span>
                  </li>
                  <li className='flex gap-3'>
                    <span className='flex-shrink-0 size-5 rounded-full bg-green-500/20 text-green-600 flex items-center justify-center text-xs font-semibold'>2</span>
                    <span className='text-muted-foreground'>选择要绑定的 V3 模板</span>
                  </li>
                  <li className='flex gap-3'>
                    <span className='flex-shrink-0 size-5 rounded-full bg-green-500/20 text-green-600 flex items-center justify-center text-xs font-semibold'>3</span>
                    <span className='text-muted-foreground'>系统自动根据模板规则重新生成订阅配置</span>
                  </li>
                </ol>
              </div>
              <div className='bg-primary/5 rounded-lg p-4 border border-primary/20'>
                <h4 className='font-semibold text-sm mb-2'>绑定后的行为</h4>
                <ul className='text-xs text-muted-foreground space-y-1'>
                  <li>• 订阅配置完全基于模板生成，原有的规则配置将被忽略</li>
                  <li>• 根据模板中代理组的 filter 规则匹配节点表中的所有节点</li>
                  <li>• 匹配到的节点会添加到代理组的 proxies 列表和顶层 proxies 中</li>
                  <li>• 模板中的 include-*、filter、exclude-* 等属性会在生成时被移除</li>
                  <li>• 一个订阅只能绑定一个模板</li>
                </ul>
              </div>
              <div className='bg-primary/5 rounded-lg p-4 border border-primary/20'>
                <h4 className='font-semibold text-sm mb-2'>自动更新触发</h4>
                <ul className='text-xs text-muted-foreground space-y-1'>
                  <li>• 新增节点时，如果代理组规则匹配到新节点，会自动更新绑定的订阅</li>
                  <li>• 删除节点时，会自动从绑定模板的订阅中移除该节点</li>
                  <li>• 修改模板后，绑定该模板的订阅会自动重新生成</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 完整模板示例 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <FileCode className='size-5 text-primary' />
          完整模板示例
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <CollapsibleCode
              title='点击查看完整 V3 模板示例'
              code={v3TemplateExample}
              language='yaml'
            />
          </CardContent>
        </Card>
      </section>

      {/* 注意事项 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Shield className='size-5 text-orange-500' />
          注意事项
        </h2>
        <Card className='border-orange-500/20'>
          <CardContent className='pt-6'>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li className='flex items-start gap-2'>
                <span className='text-orange-500 mt-1'>⚠</span>
                <span><strong>模板格式</strong>：V3 模板使用 YAML 格式，与 V2（INI 格式）不兼容，但可以通过转换功能迁移</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-orange-500 mt-1'>⚠</span>
                <span><strong>节点过滤规则(filter)</strong>：默认会使用所有节点匹配，与显式开启代理集合+节点(include-all)结果一致</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-orange-500 mt-1'>⚠</span>
                <span><strong>正则表达式</strong>：filter 和 exclude-filter 使用正则表达式语法，特殊字符需要转义</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-orange-500 mt-1'>⚠</span>
                <span><strong>代理组顺序</strong>：代理组的顺序会影响最终配置，建议将常用的代理组放在前面</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-orange-500 mt-1'>⚠</span>
                <span><strong>空代理组</strong>：如果代理组的 filter 没有匹配到任何节点，该代理组会被自动移除</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-orange-500 mt-1'>⚠</span>
                <span><strong>绑定影响</strong>：绑定模板后，订阅的规则配置将被模板完全覆盖</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
