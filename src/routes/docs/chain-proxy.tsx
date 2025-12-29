import { createFileRoute } from '@tanstack/react-router'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import {
  Network,
  Sparkles,
  FileCode,
  Shield,
  ArrowRight,
} from 'lucide-react'

export const Route = createFileRoute('/docs/chain-proxy')({
  component: ChainProxyPage,
})

function ChainProxyPage() {
  return (
    <DocLayout
      title='链式代理'
      description='通过多层代理服务器转发流量'
    >
      {/* 什么是链式代理 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Network className='size-5 text-primary' />
          什么是链式代理
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              链式代理（Chain Proxy）是一种通过多层代理服务器转发流量的技术，可以实现更复杂的网络路由策略。妙妙屋通过 dialer-proxy 技术实现链式代理，允许为节点指定前置节点，实现多级代理转发。
            </p>
            <div className='bg-muted/30 rounded-lg p-4'>
              <p className='text-sm text-muted-foreground mb-3'>
                链式代理是指将多个代理节点串联起来，让流量依次通过多个代理服务器再到达目标网站。例如：
              </p>
              <div className='bg-background rounded-lg p-4 font-mono text-sm flex items-center justify-center gap-2 flex-wrap'>
                <span className='px-2 py-1 bg-primary/10 rounded'>客户端</span>
                <ArrowRight className='size-4 text-muted-foreground' />
                <span className='px-2 py-1 bg-blue-500/10 rounded'>中转节点</span>
                <ArrowRight className='size-4 text-muted-foreground' />
                <span className='px-2 py-1 bg-green-500/10 rounded'>落地节点</span>
                <ArrowRight className='size-4 text-muted-foreground' />
                <span className='px-2 py-1 bg-orange-500/10 rounded'>目标网站</span>
              </div>
              <p className='text-xs text-muted-foreground mt-3'>
                在妙妙屋中，这通过 Clash 的 <code className='bg-muted px-1.5 py-0.5 rounded'>dialer-proxy</code> 属性实现。源节点会将流量先转发到指定的目标节点（前置节点），再由目标节点转发到最终目的地。
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 应用场景 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Sparkles className='size-5 text-primary' />
          应用场景
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='space-y-4'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>场景一：中转加速</h4>
                <p className='text-xs text-muted-foreground'>
                  当落地节点距离用户较远时，可以通过距离用户较近的中转节点来加速连接。例如：国内用户 → 香港中转 → 美国落地节点。
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>场景二：隐藏真实IP</h4>
                <p className='text-xs text-muted-foreground'>
                  通过多层代理隐藏客户端的真实 IP 地址，增强隐私保护。目标网站只能看到最后一个落地节点的 IP。
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>场景三：绕过地区限制</h4>
                <p className='text-xs text-muted-foreground'>
                  某些服务可能对特定 IP 段有限制，通过链式代理可以从不同地区的节点出口，绕过这些限制。
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>场景四：流量负载分散</h4>
                <p className='text-xs text-muted-foreground'>
                  将流量分散到多个中转节点，降低单个节点的压力，提高整体稳定性。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 配置方法 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <FileCode className='size-5 text-primary' />
          配置方法
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              在妙妙屋中配置链式代理非常简单，只需在节点管理页面操作：
            </p>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-green-500'>
              <div className='space-y-4 text-sm'>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>1</span>
                  <div>
                    <strong>进入节点管理页面</strong>
                    <p className='text-muted-foreground mt-1'>在左侧菜单中点击"节点管理"</p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>2</span>
                  <div>
                    <strong>找到目标节点</strong>
                    <p className='text-muted-foreground mt-1'>在节点列表中找到需要配置链式代理的节点（落地节点）</p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>3</span>
                  <div>
                    <strong>点击链式代理按钮</strong>
                    <p className='text-muted-foreground mt-1'>点击节点操作栏中的链式代理图标（两个箭头交换图标）</p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>4</span>
                  <div>
                    <strong>选择前置节点</strong>
                    <p className='text-muted-foreground mt-1'>在弹出的对话框中选择作为中转的前置节点</p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>5</span>
                  <div>
                    <strong>保存配置</strong>
                    <p className='text-muted-foreground mt-1'>确认后系统会自动创建一个新的链式代理节点，标签显示为"链式代理"</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 代理组配置 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Network className='size-5 text-primary' />
          代理组配置
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              在生成订阅时，妙妙屋支持配置专门的链式代理分组：
            </p>
            <div className='space-y-3'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>🌄 落地节点</h4>
                <p className='text-xs text-muted-foreground'>
                  用于存放最终的出口节点，这些节点的 IP 会被目标网站看到。
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>🌠 中转节点</h4>
                <p className='text-xs text-muted-foreground'>
                  用于存放中转服务器节点，流量会先经过这些节点再转发到落地节点。
                </p>
              </div>
            </div>
            <p className='text-xs text-muted-foreground mt-4'>
              这种分组方式适合有多个落地节点和多个中转节点的用户，可以灵活组合不同的链路。
            </p>
          </CardContent>
        </Card>
      </section>

      {/* 技术原理 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4'>技术原理</h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              链式代理的实现基于 Clash 的 dialer-proxy 特性：
            </p>
            <div className='bg-muted/30 rounded-lg p-4'>
              <div className='bg-background rounded p-3 font-mono text-xs space-y-1'>
                <div>- name: "链式代理节点"</div>
                <div>  type: vmess</div>
                <div>  server: us-node.example.com</div>
                <div>  port: 443</div>
                <div>  # ... 其他配置</div>
                <div className='text-primary'>  dialer-proxy: "香港中转节点"</div>
              </div>
              <p className='text-xs text-muted-foreground mt-3'>
                <code className='bg-muted px-1.5 py-0.5 rounded'>dialer-proxy</code> 属性指定了前置代理节点的名称，Clash 会先连接到前置节点，再通过前置节点连接到目标节点。
              </p>
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
                  <span><strong>延迟叠加</strong>：链式代理会增加网络延迟，因为流量需要经过多个节点</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>节点稳定性</strong>：链路中任何一个节点故障都会导致整个链路不可用</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>带宽限制</strong>：最终速度受限于链路中最慢的节点</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>避免循环</strong>：确保链式配置不会形成循环引用</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>协议兼容</strong>：确保链路中的节点协议相互兼容</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
