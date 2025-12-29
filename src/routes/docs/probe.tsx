import { createFileRoute } from '@tanstack/react-router'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import {
  Sparkles,
  FileCode,
  Network,
  Shield,
  Activity,
} from 'lucide-react'

export const Route = createFileRoute('/docs/probe')({
  component: ProbePage,
})

function ProbePage() {
  return (
    <DocLayout
      title='探针管理'
      description='配置和管理流量统计探针服务器（管理员功能）'
    >
      {/* 功能说明 */}
      <section className='mb-8'>
        <div className='flex items-center gap-2 mb-4'>
          <span className='px-2 py-1 bg-destructive/10 text-destructive rounded-md text-xs border border-destructive/20'>
            管理员功能
          </span>
        </div>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground'>
              探针管理页面是管理员专用功能，用于配置和管理流量统计探针服务器。探针服务器可以精确统计特定节点的流量使用情况。
            </p>
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
                  <span><strong>添加探针服务器</strong>：配置新的探针服务器用于流量统计</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>编辑探针配置</strong>：修改探针服务器的月流量信息和流量统计方式</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>删除探针服务器</strong>：移除不再使用的探针服务器</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>节点绑定管理</strong>：为节点分配特定的探针服务器，实现精准流量统计</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 探针工作原理 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Network className='size-5 text-primary' />
          探针工作原理
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              探针服务器通过监控探针服务器的流量，为管理员提供精确的流量统计数据。
            </p>
            <div className='space-y-4'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>统计流程</h4>
                <ol className='space-y-2 text-xs text-muted-foreground'>
                  <li><strong>1.</strong> 在探针管理中配置探针服务器的连接信息</li>
                  <li><strong>2.</strong> 在节点管理中为节点绑定特定的探针服务器</li>
                  <li><strong>3.</strong> 探针服务器实时监控绑定节点的流量使用</li>
                  <li><strong>4.</strong> 生成订阅时，系统仅统计订阅中包含的已绑定节点的流量</li>
                  <li><strong>5.</strong> 用户的流量使用数据会精确反映实际使用情况</li>
                </ol>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>优势</h4>
                <ul className='space-y-1 text-xs text-muted-foreground'>
                  <li>• <strong>精确统计</strong>：只统计用户实际使用的节点流量</li>
                  <li>• <strong>灵活配置</strong>：不同节点可以使用不同的探针服务器</li>
                  <li>• <strong>负载分散</strong>：多个探针服务器可分担统计压力</li>
                  <li>• <strong>独立部署</strong>：探针服务器可独立于主服务部署</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 配置步骤 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <FileCode className='size-5 text-primary' />
          配置探针步骤
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-green-500'>
              <div className='space-y-4 text-sm'>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>1</span>
                  <div>
                    <strong>点击"探针管理"菜单</strong>
                    <p className='text-muted-foreground mt-1'>打开顶部探针管理菜单</p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>2</span>
                  <div>
                    <strong>填写探针服务器信息</strong>
                    <p className='text-muted-foreground mt-1'>
                      • <strong>服务器类型</strong>：支持哪吒V0、哪吒、Dstatus、Komari<br/>
                      • <strong>服务器地址</strong>：探针服务器的域名或 IP 地址
                    </p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>3</span>
                  <div>
                    <strong>同步服务器</strong>
                    <p className='text-muted-foreground mt-1'>点击从面板同步，加载探针配置的服务器列表</p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>4</span>
                  <div>
                    <strong>配置流量统计方式</strong>
                    <p className='text-muted-foreground mt-1'>服务器列表选择流量统计方式（上行、下行、上下行）</p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>5</span>
                  <div>
                    <strong>配置月流量</strong>
                    <p className='text-muted-foreground mt-1'>部分探针会返回月流量字段，如未返回则需要手动输入。单位GB</p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>6</span>
                  <div>
                    <strong>绑定节点</strong>
                    <p className='text-muted-foreground mt-1'>在节点管理页面为需要统计流量的节点绑定探针服务器</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 流量统计说明 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Activity className='size-5 text-primary' />
          流量统计说明
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              节点绑定探针服务器后，系统的流量统计方式会发生变化：
            </p>
            <div className='space-y-3'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>未绑定</h4>
                <p className='text-xs text-muted-foreground'>
                  统计用户探针配置页面配置的所有服务器的总流量，无论用户是否实际使用这些节点。
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>绑定后</h4>
                <p className='text-xs text-muted-foreground mb-2'>
                  仅统计用户实际使用的已绑定探针的节点流量，更加精确和公平。
                </p>
                <ul className='text-xs text-muted-foreground space-y-1'>
                  <li>• 只有绑定了探针的节点才会被统计</li>
                  <li>• 避免了用户从探针绑定了多台服务器仅使用一台服务器的节点的订阅导致流量错误</li>
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
                  <span><strong>探针服务器要求</strong>：确保探针服务器稳定运行，网络连接正常</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>节点绑定</strong>：没有任何节点绑定探针服务器时，订阅时返回探针管理里所有服务器的流量</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>删除影响</strong>：删除探针服务器会解除所有绑定关系，相关节点将无法统计流量</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>安全性</strong>：使用公开接口访问探针，无需登录</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
