import { createFileRoute, Link } from '@tanstack/react-router'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import {
  Sparkles,
  FileCode,
  Shield,
  ArrowRight,
  Settings,
  Zap,
} from 'lucide-react'

export const Route = createFileRoute('/docs/proxy-providers')({
  component: ProxyProvidersPage,
})

function ProxyProvidersPage() {
  return (
    <DocLayout
      title='代理集合管理'
      description='配置 Proxy Provider 实现动态节点加载（管理员功能）'
    >
      {/* 功能说明 */}
      <section className='mb-8'>
        <div className='flex items-center gap-2 mb-4'>
          <span className='px-2 py-1 bg-destructive/10 text-destructive rounded-md text-xs border border-destructive/20'>
            管理员功能
          </span>
          <span className='px-2 py-1 bg-primary/10 text-primary rounded-md text-xs border border-primary/20'>
            需要开启系统设置
          </span>
        </div>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              代理集合（Proxy Provider）是 Clash 的高级特性，允许从外部订阅动态加载节点。使用代理集合可以让订阅文件更加简洁，同时支持节点的自动更新。
            </p>
            <div className='bg-muted/30 rounded-lg p-3 border border-border'>
              <p className='text-sm'>
                <strong>前置条件：</strong>需要在「系统设置」中开启「启用节点集合」开关才能使用此功能。
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 主要功能 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Sparkles className='size-5 text-primary' />
          主要功能
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-blue-500'>
              <ul className='space-y-2 text-sm'>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>创建代理集合</strong>：基于外部订阅创建 proxy-provider 配置</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>两种处理模式</strong>：支持客户端模式和妙妙屋模式</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>节点筛选</strong>：通过 filter、exclude_filter、exclude_type 筛选节点</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>批量创建</strong>：支持按地域或协议类型批量创建多个代理集合</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>健康检查</strong>：配置节点健康检查 URL 和间隔时间</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 处理模式说明 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Settings className='size-5 text-primary' />
          处理模式说明
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='space-y-4'>
              <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-blue-500'>
                <h4 className='font-semibold text-sm mb-2 flex items-center gap-2'>
                  <span className='size-2 rounded-full bg-blue-500'></span>
                  客户端模式 (client)
                </h4>
                <p className='text-sm text-muted-foreground mb-2'>
                  订阅链接直接返回代理集合配置的原始内容，由客户端（如 Clash）处理节点解析。
                </p>
                <ul className='text-xs text-muted-foreground space-y-1 list-disc list-inside'>
                  <li>优点：减少服务器负载，节点实时更新</li>
                  <li>缺点：无法使用妙妙屋的节点筛选和 GeoIP 匹配功能</li>
                </ul>
              </div>
              <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-purple-500'>
                <h4 className='font-semibold text-sm mb-2 flex items-center gap-2'>
                  <span className='size-2 rounded-full bg-purple-500'></span>
                  妙妙屋模式 (mmw)
                </h4>
                <p className='text-sm text-muted-foreground mb-2'>
                  由妙妙屋服务器处理外部订阅的节点，根据规则添加节点到对应的代理组，可以解决客户端不兼容代理集合功能和订阅配置看不到节点的问题，按地域分裂支持节点筛选和 GeoIP 地理位置匹配。
                </p>
                <ul className='text-xs text-muted-foreground space-y-1 list-disc list-inside'>
                  <li>优点：支持 filter/exclude_filter 筛选，支持 GeoIP 地域标识</li>
                  <li>缺点：需要服务器处理，如果节点集合过多，显著增加获取订阅的耗时，节点更新依赖妙妙屋同步</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 创建代理集合步骤 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <FileCode className='size-5 text-primary' />
          创建代理集合步骤
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-green-500'>
              <div className='space-y-4 text-sm'>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>1</span>
                  <div>
                    <strong>确保已添加外部订阅</strong>
                    <p className='text-muted-foreground mt-1'>
                      代理集合需要基于外部订阅创建，请先在
                      <Link to='/docs/external-subscriptions' className='text-primary hover:underline inline-flex items-center gap-1 mx-1'>
                        节点管理
                        <ArrowRight className='size-3' />
                      </Link>
                      中添加通过订阅导入节点
                    </p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>2</span>
                  <div>
                    <strong>进入订阅管理页面</strong>
                    <p className='text-muted-foreground mt-1'>点击「订阅管理」菜单，滚动到页面下方「代理集合」选项卡</p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>3</span>
                  <div>
                    <strong>点击「添加代理集合」按钮</strong>
                    <p className='text-muted-foreground mt-1'>选择初级模式（根据预设规则创建）或高级模式（自定义规则创建）</p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>4</span>
                  <div>
                    <strong>填写代理集合配置</strong>
                    <p className='text-muted-foreground mt-1'>
                      • <strong>选择外部订阅</strong>：选择要创建代理集合的外部订阅<br/>
                      • <strong>名称</strong>：代理集合的显示名称（默认为外部订阅名称）<br/>
                      • <strong>处理模式</strong>：选择客户端模式或妙妙屋模式<br/>
                      • <strong>更新间隔</strong>：节点自动更新的间隔时间（秒）<br/>
                      • <strong>健康检查 URL</strong>：用于测试节点连通性的 URL
                    </p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>5</span>
                  <div>
                    <strong>配置节点筛选（可选）</strong>
                    <p className='text-muted-foreground mt-1'>
                      • <strong>filter</strong>：保留匹配的节点（正则表达式）<br/>
                      • <strong>exclude_filter</strong>：排除匹配的节点（正则表达式）<br/>
                      • <strong>exclude_type</strong>：排除指定协议类型的节点
                    </p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>6</span>
                  <div>
                    <strong>保存代理集合</strong>
                    <p className='text-muted-foreground mt-1'>点击保存按钮完成创建</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      
      {/* 初级模式 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Zap className='size-5 text-primary' />
          创建代理集合(初级模式)
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              初级模式基于预设规则快速创建代理集合，支持按地域分裂和按协议分裂两种方式，具体查看
              <Link to='/docs/proxy-providers-advanced' className='text-primary hover:underline inline-flex items-center gap-1'>
                高级技巧
                <ArrowRight className='size-3' />
              </Link>
              。
            </p>
            <div className='grid md:grid-cols-2 gap-3'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>按地域分裂</h4>
                <p className='text-xs text-muted-foreground'>
                  根据节点的地理位置自动分组，如「香港节点」、「日本节点」、「美国节点」等。使用 GeoIP 数据库匹配节点 IP 地址。
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>按协议分裂</h4>
                <p className='text-xs text-muted-foreground'>
                  根据代理协议类型分组，如「SS 节点」、「VMess 节点」、「Trojan 节点」等。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 自定义创建说明 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Zap className='size-5 text-primary' />
          自定义创建(高级模式)
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              高级模式完全自定义节点集合的所有参数，具体参数查看
              <a style={{ textDecoration: 'underline' , color: 'orange'}} href='https://wiki.metacubex.one/config/proxy-providers/'>文档</a>。
            </p>
          </CardContent>
        </Card>
      </section>

      {/* 使用场景 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Sparkles className='size-5 text-primary' />
          使用场景
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='space-y-3'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>在「节点与代理组编辑」中使用</h4>
                <p className='text-xs text-muted-foreground'>
                  创建的代理集合会出现在
                  <Link to='/docs/edit-nodes' className='text-primary hover:underline inline-flex items-center gap-1 mx-1'>
                    节点与代理组编辑
                    <ArrowRight className='size-3' />
                  </Link>
                  页面的可用节点列表中，显示为紫色边框。可以将代理集合拖入代理组，使用 use 字段引用。
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>简化订阅配置</h4>
                <p className='text-xs text-muted-foreground'>
                  使用代理集合可以将大量节点从主配置中分离，订阅文件只包含代理组配置，节点信息通过 proxy-provider 动态加载。
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>节点自动更新</h4>
                <p className='text-xs text-muted-foreground'>
                  客户端模式下，客户端会根据配置的更新间隔自动刷新节点列表，无需重新获取订阅。
                </p>
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
                  <span><strong>需要开启系统设置</strong>：必须在「系统设置」中开启「启用节点集合」才能使用此功能</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>客户端兼容性</strong>：部分老版本客户端可能不支持 proxy-provider 功能</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>filter 正则语法</strong>：节点筛选使用 Go 语言的正则表达式语法</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>GeoIP 依赖</strong>：按地域分裂功能依赖 GeoIP 数据库，需要确保节点 IP 能够正确匹配</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>删除影响</strong>：删除代理集合会影响使用该配置的所有订阅</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
