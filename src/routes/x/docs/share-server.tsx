import { createFileRoute } from '@tanstack/react-router'
import { XDocLayout } from '@/components/docs/x-doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import { AlertTriangle, Info } from 'lucide-react'

export const Route = createFileRoute('/x/docs/share-server')({
  component: ShareServerPage,
})

function ShareServerPage() {
  return (
    <XDocLayout title='分享服务器' description='跨主控共享服务器的联邦功能（PRO）'>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>概述</h2>
        <p className='text-muted-foreground mb-4'>
          分享服务器是妙妙屋X 的 PRO 功能，允许一个妙妙屋X 主控（拥有方）将自己管理的远程服务器共享给其他妙妙屋X 主控（消费方）使用。
          消费方无需部署 Agent，即可在被分享的服务器上添加入站和节点，实现跨主控的服务器资源共享。
        </p>
        <p className='text-muted-foreground mb-4'>
          内部采用联邦（Federation）架构：消费方的所有远程操作通过拥有方的联邦接口转发到 Agent，拥有方始终是 Agent 的唯一直接控制者。
          通信在 HTTPS 之上叠加 ECDH 端到端加密，确保拥有方无法窥探消费方的具体操作内容。
        </p>
        <div className='flex items-start gap-2 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20'>
          <Info className='size-4 text-blue-500 mt-0.5 shrink-0' />
          <p className='text-sm text-blue-700 dark:text-blue-400'>分享服务器需要 PRO 许可证并启用 <code className='bg-muted px-1.5 py-0.5 rounded text-xs'>server_share</code> 功能。拥有方和消费方均需持有有效许可证。</p>
        </div>
      </section>

      {/* 架构说明 */}
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>架构说明</h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto'>
              <pre>{`消费方主控 ──(HTTPS + ECDH 加密)──▶ 拥有方主控 ──(securechan)──▶ Agent
    │                                      │
    │  填入: 拥有方地址 + 分享令牌           │  始终是 Agent 的唯一控制者
    │  操作: 添加入站、管理节点              │  转发消费方的管理命令
    │  限制: 不能启停服务、不能编辑服务器     │  校验令牌、管理分享
    │                                      │
    └─── 本地 remote_server 记录 ───────────┘`}</pre>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 拥有方操作 */}
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>拥有方：分享服务器</h2>
        <p className='text-muted-foreground mb-4'>
          拥有方为自己管理的服务器生成分享令牌，将「拥有方地址 + 分享令牌」提供给消费方。
        </p>

        <div className='space-y-4'>
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3'>操作步骤</h3>
              <ol className='space-y-2 text-sm text-muted-foreground'>
                <li>1. 在服务管理页面，找到要分享的服务器</li>
                <li>2. 点击服务器卡片上的 <strong>分享按钮</strong>（Share 图标）</li>
                <li>3. 在弹出的对话框中点击「生成分享令牌」</li>
                <li>4. 复制「拥有方地址」和「分享令牌」，提供给消费方</li>
              </ol>
              <div className='flex items-start gap-2 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 mt-4'>
                <AlertTriangle className='size-4 text-amber-500 mt-0.5 shrink-0' />
                <p className='text-sm text-amber-700 dark:text-amber-400'>分享令牌仅在生成时显示一次，请立即复制保存。令牌以 SHA256 哈希形式存储，无法再次查看明文。</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3'>令牌管理</h3>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm'>
                  <thead><tr className='border-b'><th className='text-left py-2 pr-4 font-medium'>操作</th><th className='text-left py-2 font-medium'>说明</th></tr></thead>
                  <tbody>
                    <tr className='border-b'>
                      <td className='py-2 pr-4'>生成令牌</td>
                      <td className='py-2'>为同一台服务器可生成多个令牌，分别提供给不同的消费方</td>
                    </tr>
                    <tr className='border-b'>
                      <td className='py-2 pr-4'>吊销令牌</td>
                      <td className='py-2'>吊销后该令牌立即失效，使用该令牌的消费方将无法继续操作该服务器</td>
                    </tr>
                    <tr>
                      <td className='py-2 pr-4'>查看已分享</td>
                      <td className='py-2'>可查看该服务器已生成的令牌列表和创建时间，但无法查看令牌明文</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 消费方操作 */}
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>消费方：接入分享服务器</h2>
        <p className='text-muted-foreground mb-4'>
          消费方使用拥有方提供的地址和令牌接入服务器，接入后可像管理自己的服务器一样添加入站和节点。
        </p>

        <div className='space-y-4'>
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3'>接入步骤</h3>
              <ol className='space-y-2 text-sm text-muted-foreground'>
                <li>1. 在服务管理页面，点击「接入分享服务器」按钮</li>
                <li>2. 填写拥有方提供的信息</li>
                <li>3. 点击「接入」，系统会验证令牌有效性</li>
                <li>4. 接入成功后，服务器出现在服务管理列表中，带有紫色「分享」标签</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3'>接入参数</h3>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm'>
                  <thead><tr className='border-b'><th className='text-left py-2 pr-4 font-medium'>参数</th><th className='text-left py-2 pr-4 font-medium'>必填</th><th className='text-left py-2 font-medium'>说明</th></tr></thead>
                  <tbody>
                    <tr className='border-b'>
                      <td className='py-2 pr-4'>拥有方地址</td>
                      <td className='py-2 pr-4'>是</td>
                      <td className='py-2'>拥有方妙妙屋X 主控的域名地址，如 <code className='bg-muted px-1.5 py-0.5 rounded text-xs'>https://owner.example.com</code></td>
                    </tr>
                    <tr className='border-b'>
                      <td className='py-2 pr-4'>分享令牌</td>
                      <td className='py-2 pr-4'>是</td>
                      <td className='py-2'>拥有方生成的分享令牌</td>
                    </tr>
                    <tr className='border-b'>
                      <td className='py-2 pr-4'>服务器名称</td>
                      <td className='py-2 pr-4'>否</td>
                      <td className='py-2'>留空则自动使用拥有方的服务器名称</td>
                    </tr>
                    <tr>
                      <td className='py-2 pr-4'>入站前缀</td>
                      <td className='py-2 pr-4'>否</td>
                      <td className='py-2'>在该分享服务器上新增入站时，标签自动加上此前缀（如 <code className='bg-muted px-1.5 py-0.5 rounded text-xs'>myx-</code>），避免与拥有方的入站标签冲突。设置后固定复用。</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 消费方限制 */}
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>消费方权限与限制</h2>
        <p className='text-muted-foreground mb-4'>
          被分享方对分享服务器的操作有明确的权限边界，以确保拥有方对服务器的最终控制权。
        </p>

        <div className='space-y-4'>
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3 text-green-600 dark:text-green-400'>可以做的</h3>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm'>
                  <thead><tr className='border-b'><th className='text-left py-2 pr-4 font-medium'>操作</th><th className='text-left py-2 font-medium'>说明</th></tr></thead>
                  <tbody>
                    <tr className='border-b'>
                      <td className='py-2 pr-4'>查看服务器状态</td>
                      <td className='py-2'>查看连接状态、流量使用、网速、Xray/Nginx 运行状态</td>
                    </tr>
                    <tr className='border-b'>
                      <td className='py-2 pr-4'>添加入站</td>
                      <td className='py-2'>在分享服务器上创建新的 Xray 入站配置（标签自动加前缀）</td>
                    </tr>
                    <tr className='border-b'>
                      <td className='py-2 pr-4'>管理入站</td>
                      <td className='py-2'>编辑和删除自己创建的入站</td>
                    </tr>
                    <tr className='border-b'>
                      <td className='py-2 pr-4'>添加节点</td>
                      <td className='py-2'>基于分享服务器上的入站创建节点，分配给用户</td>
                    </tr>
                    <tr>
                      <td className='py-2 pr-4'>查看服务信息</td>
                      <td className='py-2'>查看 Xray 和 Nginx 的安装状态和版本信息</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card className='border-red-200 dark:border-red-900'>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3 text-red-600 dark:text-red-400'>不能做的</h3>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm'>
                  <thead><tr className='border-b'><th className='text-left py-2 pr-4 font-medium'>限制</th><th className='text-left py-2 font-medium'>原因</th></tr></thead>
                  <tbody>
                    <tr className='border-b'>
                      <td className='py-2 pr-4'>启动/停止/重启 Xray</td>
                      <td className='py-2'>服务的启停由拥有方控制，消费方仅能查看运行状态</td>
                    </tr>
                    <tr className='border-b'>
                      <td className='py-2 pr-4'>启动/停止/重启 Nginx</td>
                      <td className='py-2'>同上，Nginx 服务由拥有方管理</td>
                    </tr>
                    <tr className='border-b'>
                      <td className='py-2 pr-4'>安装/卸载 Xray 或 Nginx</td>
                      <td className='py-2'>软件的安装和卸载权限仅限拥有方</td>
                    </tr>
                    <tr className='border-b'>
                      <td className='py-2 pr-4'>编辑服务器信息</td>
                      <td className='py-2'>服务器名称、地址、流量限制等由拥有方设定</td>
                    </tr>
                    <tr className='border-b'>
                      <td className='py-2 pr-4'>再次分享（二次分享）</td>
                      <td className='py-2'>分享服务器不可再分享给第三方，避免链式信任扩散</td>
                    </tr>
                    <tr>
                      <td className='py-2 pr-4'>直连 Agent</td>
                      <td className='py-2'>所有操作通过拥有方联邦接口转发，消费方不直接与 Agent 通信</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 安全机制 */}
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>安全机制</h2>
        <div className='space-y-4'>
          <Card>
            <CardContent className='pt-6'>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm'>
                  <thead><tr className='border-b'><th className='text-left py-2 pr-4 font-medium'>机制</th><th className='text-left py-2 font-medium'>说明</th></tr></thead>
                  <tbody>
                    <tr className='border-b'>
                      <td className='py-2 pr-4'>令牌哈希存储</td>
                      <td className='py-2'>分享令牌以 SHA256 哈希存储在数据库中，拥有方也无法查看令牌明文</td>
                    </tr>
                    <tr className='border-b'>
                      <td className='py-2 pr-4'>ECDH 端到端加密</td>
                      <td className='py-2'>消费方与拥有方之间在 HTTPS 之上叠加 ECDH 密钥交换，实现端到端加密。拥有方无法窥探消费方的操作内容</td>
                    </tr>
                    <tr className='border-b'>
                      <td className='py-2 pr-4'>路径白名单</td>
                      <td className='py-2'>联邦转发仅允许 <code className='bg-muted px-1.5 py-0.5 rounded text-xs'>/api/child/</code> 路径下的请求，防止越权访问</td>
                    </tr>
                    <tr className='border-b'>
                      <td className='py-2 pr-4'>令牌即时吊销</td>
                      <td className='py-2'>拥有方可随时吊销令牌，吊销后消费方立即失去访问权</td>
                    </tr>
                    <tr>
                      <td className='py-2 pr-4'>自动降级</td>
                      <td className='py-2'>当拥有方不支持加密时，消费方自动降级为 HTTPS + 令牌认证，确保兼容性</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 使用场景 */}
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>典型使用场景</h2>
        <div className='space-y-4'>
          <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-blue-500'>
            <h4 className='font-semibold text-sm mb-2'>多站长合租服务器</h4>
            <p className='text-xs text-muted-foreground'>
              多个妙妙屋X 站长合租同一台服务器。由一位站长作为拥有方部署 Agent，其他站长通过分享令牌接入，各自管理自己的入站和节点，互不干扰。
            </p>
          </div>
          <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-green-500'>
            <h4 className='font-semibold text-sm mb-2'>服务器资源出租</h4>
            <p className='text-xs text-muted-foreground'>
              拥有方拥有多台服务器，将部分服务器分享给其他站长使用。拥有方保留服务器的最终控制权（启停服务、安装升级），消费方获得添加入站和节点的能力。
            </p>
          </div>
          <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-purple-500'>
            <h4 className='font-semibold text-sm mb-2'>分布式部署管理</h4>
            <p className='text-xs text-muted-foreground'>
              在不同地区部署多个妙妙屋X 主控，通过分享服务器实现跨主控的服务器资源池共享，统一利用分布在各地的服务器资源。
            </p>
          </div>
        </div>
      </section>

      {/* 注意事项 */}
      <section>
        <h2 className='text-2xl font-bold mb-4'>注意事项</h2>
        <div className='space-y-3'>
          <div className='flex items-start gap-2 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20'>
            <AlertTriangle className='size-4 text-amber-500 mt-0.5 shrink-0' />
            <p className='text-sm text-amber-700 dark:text-amber-400'>拥有方和消费方都需要持有包含 <code className='bg-muted px-1.5 py-0.5 rounded text-xs'>server_share</code> 功能的 PRO 许可证。</p>
          </div>
          <div className='flex items-start gap-2 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20'>
            <AlertTriangle className='size-4 text-amber-500 mt-0.5 shrink-0' />
            <p className='text-sm text-amber-700 dark:text-amber-400'>建议消费方在接入时设置入站前缀，避免标签与拥有方的入站冲突。前缀设置后固定复用，后续无法修改。</p>
          </div>
          <div className='flex items-start gap-2 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20'>
            <AlertTriangle className='size-4 text-amber-500 mt-0.5 shrink-0' />
            <p className='text-sm text-amber-700 dark:text-amber-400'>拥有方吊销令牌后，消费方创建的入站仍保留在 Xray 配置中，但消费方将无法再管理或删除它们。建议在吊销前通知消费方清理入站。</p>
          </div>
          <div className='flex items-start gap-2 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20'>
            <Info className='size-4 text-blue-500 mt-0.5 shrink-0' />
            <p className='text-sm text-blue-700 dark:text-blue-400'>消费方的操作延迟取决于消费方→拥有方→Agent 的网络链路。如果拥有方与 Agent 之间网络良好，额外延迟通常可忽略。</p>
          </div>
        </div>
      </section>
    </XDocLayout>
  )
}
