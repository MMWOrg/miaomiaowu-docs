import { createFileRoute, Link } from '@tanstack/react-router'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import {
  Layers,
  Sparkles,
  FileCode,
  Shield,
  ArrowRight,
} from 'lucide-react'

export const Route = createFileRoute('/docs/proxy-providers-advanced')({
  component: ProxyProvidersAdvancedPage,
})

function ProxyProvidersAdvancedPage() {
  return (
    <DocLayout
      title='代理集合高级技巧'
      description='使用代理集合实现高效的多机场节点管理'
    >
      {/* 有什么作用 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Layers className='size-5 text-primary' />
          有什么作用
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='space-y-4'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>1. 自动管理大量节点</h4>
                <p className='text-xs text-muted-foreground'>
                  对于机场的大量节点进行自动分组，无需关注机场新增或删除节点。当机场更新节点时，代理集合会自动同步，省去手动维护的麻烦。
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>2. 多机场节点筛选</h4>
                <p className='text-xs text-muted-foreground'>
                  适合管理多个机场的场景，可以按需筛选只使用部分节点。例如只使用香港和日本节点，排除其他地区。
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>3. 快速切换机场</h4>
                <p className='text-xs text-muted-foreground'>
                  多个机场的场景下，可以在代理组中直接切换不同机场的节点集合，无需逐个选择节点。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 使用示例 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Sparkles className='size-5 text-primary' />
          使用示例
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='space-y-4'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-3'>步骤一：按地域分裂创建代理集合</h4>
                <p className='text-xs text-muted-foreground mb-3'>
                  在
                  <Link to='/docs/proxy-providers' className='text-primary hover:underline inline-flex items-center gap-1 mx-1'>
                    代理集合管理
                    <ArrowRight className='size-3' />
                  </Link>
                  中使用「初级模式 - 按地域分裂」功能，系统会自动根据节点的 GeoIP 信息创建多个代理集合：
                </p>
                <div className='bg-background rounded-lg p-3 space-y-1 text-xs font-mono'>
                  <div className='flex items-center gap-2'>
                    <span className='text-purple-500'>📦</span>
                    <span>宝可梦-🇭🇰香港节点</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <span className='text-purple-500'>📦</span>
                    <span>宝可梦-🇯🇵日本节点</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <span className='text-purple-500'>📦</span>
                    <span>宝可梦-🇺🇸美国节点</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <span className='text-purple-500'>📦</span>
                    <span>宝可梦-🇸🇬新加坡节点</span>
                  </div>
                </div>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-3'>步骤二：在编辑节点中添加代理集合</h4>
                <p className='text-xs text-muted-foreground mb-3'>
                  进入
                  <Link to='/docs/edit-nodes' className='text-primary hover:underline inline-flex items-center gap-1 mx-1'>
                    节点与代理组编辑
                    <ArrowRight className='size-3' />
                  </Link>
                  页面，将创建的代理集合（紫色边框）拖入对应的代理组中。
                </p>
                <div className='rounded-lg overflow-hidden border'>
                  <img
                    src='/images/proxy_providers_move.png'
                    alt='在编辑节点中添加代理集合示例'
                    className='w-full'
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 两种处理模式对比 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <FileCode className='size-5 text-primary' />
          处理模式对比
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              代理集合支持两种处理模式，生成的订阅配置格式不同：
            </p>

            {/* 妙妙屋模式 */}
            <div className='mb-6'>
              <h4 className='font-semibold text-sm mb-3 flex items-center gap-2'>
                <span className='size-2 rounded-full bg-purple-500'></span>
                妙妙屋模式 (mmw)
              </h4>
              <p className='text-xs text-muted-foreground mb-3'>
                由妙妙屋服务器处理外部订阅的节点，根据规则添加到对应的代理组。节点信息直接写入配置文件。
              </p>
              <div className='bg-muted/30 rounded-lg p-4'>
                <div className='bg-background rounded p-3 font-mono text-xs space-y-1 overflow-x-auto'>
                  <div className='text-muted-foreground'># 节点直接写入 proxies</div>
                  <div>proxies:</div>
                  <div className='pl-2'>- name: 〖宝可梦〗🇭🇰【亚洲】香港01丨直连</div>
                  <div className='pl-4'>type: hysteria2</div>
                  <div className='pl-4'>server: hk.example.com</div>
                  <div className='pl-4'>port: 20000</div>
                  <div className='pl-4 text-muted-foreground'>...</div>
                  <div className='pl-2'>- name: 〖宝可梦〗🇭🇰【亚洲】香港02丨直连</div>
                  <div className='pl-4'>type: hysteria2</div>
                  <div className='pl-4 text-muted-foreground'>...</div>
                  <div className='mt-2'>proxy-groups:</div>
                  <div className='pl-2'>- name: 🚀 节点选择</div>
                  <div className='pl-4'>type: select</div>
                  <div className='pl-4'>proxies:</div>
                  <div className='pl-6'>- 宝可梦-🇭🇰香港节点</div>
                  <div className='pl-6'>- DIRECT</div>
                  <div className='pl-2'>- name: 宝可梦-🇭🇰香港节点</div>
                  <div className='pl-4'>type: select</div>
                  <div className='pl-4'>proxies:</div>
                  <div className='pl-6'>- 〖宝可梦〗🇭🇰【亚洲】香港01丨直连</div>
                  <div className='pl-6'>- 〖宝可梦〗🇭🇰【亚洲】香港02丨直连</div>
                  <div className='pl-6 text-muted-foreground'>...</div>
                </div>
              </div>
            </div>

            {/* 客户端模式 */}
            <div>
              <h4 className='font-semibold text-sm mb-3 flex items-center gap-2'>
                <span className='size-2 rounded-full bg-blue-500'></span>
                客户端模式 (client)
              </h4>
              <p className='text-xs text-muted-foreground mb-3'>
                配置文件只包含代理集合的引用，由客户端（如 Clash）动态加载节点。
              </p>
              <div className='bg-muted/30 rounded-lg p-4'>
                <div className='bg-background rounded p-3 font-mono text-xs space-y-1 overflow-x-auto'>
                  <div className='text-muted-foreground'># 使用 proxy-providers 动态加载</div>
                  <div>proxy-groups:</div>
                  <div className='pl-2'>- name: 🚀 节点选择</div>
                  <div className='pl-4'>type: select</div>
                  <div className='pl-4'>proxies:</div>
                  <div className='pl-6'>- 宝可梦-🇭🇰香港节点</div>
                  <div className='pl-6'>- DIRECT</div>
                  <div className='pl-2'>- name: 宝可梦-🇭🇰香港节点</div>
                  <div className='pl-4'>type: select</div>
                  <div className='pl-4 text-primary'>use:</div>
                  <div className='pl-6 text-primary'>- 宝可梦-🇭🇰香港节点</div>
                  <div className='mt-2 text-primary'>proxy-providers:</div>
                  <div className='pl-2 text-primary'>宝可梦-🇭🇰香港节点:</div>
                  <div className='pl-4'>type: http</div>
                  <div className='pl-4'>path: ./proxy_providers/宝可梦-🇭🇰香港节点.yaml</div>
                  <div className='pl-4'>interval: 3600</div>
                  <div className='pl-4'>url: https://sub.example.com/sub/xxxxxx</div>
                  <div className='pl-4'>header:</div>
                  <div className='pl-6'>User-Agent: Clash/v1.18.0</div>
                  <div className='pl-4'>health-check:</div>
                  <div className='pl-6'>enable: true</div>
                  <div className='pl-6'>url: https://www.gstatic.com/generate_204</div>
                  <div className='pl-6'>interval: 300</div>
                  <div className='pl-6'>timeout: 5000</div>
                  <div className='pl-6'>lazy: true</div>
                  <div className='pl-6'>expected-status: 204</div>
                  <div className='pl-4'>filter: 港|HK|hk|Hong Kong|HongKong|hongkong</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 模式选择建议 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Sparkles className='size-5 text-primary' />
          模式选择建议
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='grid md:grid-cols-2 gap-4'>
              <div className='bg-purple-50 dark:bg-purple-950/30 rounded-lg p-4 border border-purple-200 dark:border-purple-800'>
                <h4 className='font-semibold text-sm mb-2 text-purple-700 dark:text-purple-300'>推荐使用妙妙屋模式</h4>
                <ul className='text-xs text-muted-foreground space-y-1'>
                  <li>• 客户端不支持 proxy-providers 功能</li>
                  <li>• 希望在订阅配置中直接看到节点列表</li>
                  <li>• 需要使用 GeoIP 地域匹配功能</li>
                  <li>• 代理集合数量较少（避免获取订阅耗时过长）</li>
                </ul>
              </div>
              <div className='bg-blue-50 dark:bg-blue-950/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800'>
                <h4 className='font-semibold text-sm mb-2 text-blue-700 dark:text-blue-300'>推荐使用客户端模式</h4>
                <ul className='text-xs text-muted-foreground space-y-1'>
                  <li>• 客户端支持 proxy-providers（如 Clash Meta）</li>
                  <li>• 希望节点实时更新，无需重新获取订阅</li>
                  <li>• 代理集合数量较多，希望减少服务器负载</li>
                  <li>• 希望订阅文件更加简洁</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 注意事项 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Shield className='size-5 text-primary' />
          注意事项
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-orange-500'>
              <ul className='space-y-2 text-sm text-muted-foreground'>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>需要开启系统设置</strong>：必须在「系统设置」中开启「启用节点集合」才能使用代理集合功能</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>妙妙屋模式性能</strong>：如果代理集合过多，使用妙妙屋模式会显著增加获取订阅的耗时</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>客户端兼容性</strong>：客户端模式需要 Clash Meta 等支持 proxy-providers 的客户端</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>GeoIP 匹配</strong>：按地域分裂依赖 GeoIP 数据库，部分节点可能匹配不准确</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>filter 正则语法</strong>：客户端模式的节点筛选使用 Go 语言的正则表达式语法</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
