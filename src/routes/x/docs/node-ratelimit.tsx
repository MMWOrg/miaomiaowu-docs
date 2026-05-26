import { createFileRoute } from '@tanstack/react-router'
import { XDocLayout } from '@/components/docs/x-doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import { AlertTriangle, Info } from 'lucide-react'

export const Route = createFileRoute('/x/docs/node-ratelimit')({
  component: NodeRateLimitPage,
})

function NodeRateLimitPage() {
  return (
    <XDocLayout title='节点限速' description='通过套餐为用户设置下载速度和设备数量限制（PRO）'>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>概述</h2>
        <p className='text-muted-foreground mb-4'>
          节点限速允许管理员为每个套餐配置下载速度上限和最大并发设备数。当用户绑定套餐后，限速规则会自动推送到该用户关联的所有入站上，由内嵌 Xray 内核在流量层面实施限制。
        </p>
        <div className='flex items-start gap-2 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20'>
          <Info className='size-4 text-blue-500 mt-0.5 shrink-0' />
          <p className='text-sm text-blue-700 dark:text-blue-400'>节点限速是 PRO 功能，需要有效的许可证。且限速仅在<strong>内嵌 Xray 模式</strong>的服务器上生效，外置 Xray 模式不支持限速推送。</p>
        </div>
      </section>

      {/* 工作原理 */}
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>工作原理</h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto'>
              <pre>{`套餐配置 (speed_limit_mbps / device_limit)
     │
     ▼
主控查询用户关联的入站 (inbound tags)
     │
     ▼
为每个入站构建限速规则 (WSLimiterConfigPayload)
     │
     ▼
通过 WebSocket 推送到内嵌 Xray Agent
     │
     ▼
Agent 在 Xray 内核层面实施速度和设备限制`}</pre>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 限速参数 */}
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>限速参数</h2>
        <p className='text-muted-foreground mb-4'>
          限速通过套餐管理页面配置，每个套餐可设置以下限速参数：
        </p>
        <div className='space-y-6'>
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-2'>下载限速 (Mbps)</h3>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm'>
                  <tbody>
                    <tr className='border-b'><td className='py-2 pr-4 font-medium w-28'>字段</td><td className='py-2'><code className='bg-muted px-1.5 py-0.5 rounded text-xs'>speed_limit_mbps</code></td></tr>
                    <tr className='border-b'><td className='py-2 pr-4 font-medium'>单位</td><td className='py-2'>Mbps（兆比特每秒）</td></tr>
                    <tr className='border-b'><td className='py-2 pr-4 font-medium'>默认值</td><td className='py-2'>0（不限速）</td></tr>
                    <tr><td className='py-2 pr-4 font-medium'>说明</td><td className='py-2'>限制用户在该套餐下的单用户下载速度上限。设置为 0 表示不限速。内部转换为字节/秒：<code className='bg-muted px-1.5 py-0.5 rounded text-xs'>Mbps × 1000000 / 8</code></td></tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-2'>设备数限制</h3>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm'>
                  <tbody>
                    <tr className='border-b'><td className='py-2 pr-4 font-medium w-28'>字段</td><td className='py-2'><code className='bg-muted px-1.5 py-0.5 rounded text-xs'>device_limit</code></td></tr>
                    <tr className='border-b'><td className='py-2 pr-4 font-medium'>默认值</td><td className='py-2'>0（不限制）</td></tr>
                    <tr><td className='py-2 pr-4 font-medium'>说明</td><td className='py-2'>限制用户同时在线的最大设备数。设置为 0 表示不限制。超出限制的新连接会被拒绝。</td></tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 用户级覆盖 */}
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>用户级覆盖</h2>
        <p className='text-muted-foreground mb-4'>
          除了套餐级别的限速配置，还支持为单个用户设置独立的限速覆盖值，优先级高于套餐配置。
        </p>
        <Card>
          <CardContent className='pt-6'>
            <div className='overflow-x-auto'>
              <table className='w-full text-sm'>
                <thead><tr className='border-b'><th className='text-left py-2 pr-4 font-medium'>优先级</th><th className='text-left py-2 pr-4 font-medium'>来源</th><th className='text-left py-2 font-medium'>说明</th></tr></thead>
                <tbody>
                  <tr className='border-b'>
                    <td className='py-2 pr-4'>最高</td>
                    <td className='py-2 pr-4'>用户覆盖值</td>
                    <td className='py-2'>用户管理中为单个用户设置的 <code className='bg-muted px-1.5 py-0.5 rounded text-xs'>speed_limit_override</code> 和 <code className='bg-muted px-1.5 py-0.5 rounded text-xs'>device_limit_override</code></td>
                  </tr>
                  <tr>
                    <td className='py-2 pr-4'>默认</td>
                    <td className='py-2 pr-4'>套餐配置</td>
                    <td className='py-2'>用户所属套餐的 <code className='bg-muted px-1.5 py-0.5 rounded text-xs'>speed_limit_mbps</code> 和 <code className='bg-muted px-1.5 py-0.5 rounded text-xs'>device_limit</code></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 推送时机 */}
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>自动推送时机</h2>
        <p className='text-muted-foreground mb-4'>
          限速配置在以下场景自动推送到 Agent，无需手动操作：
        </p>
        <Card>
          <CardContent className='pt-6'>
            <div className='overflow-x-auto'>
              <table className='w-full text-sm'>
                <thead><tr className='border-b'><th className='text-left py-2 pr-4 font-medium'>触发事件</th><th className='text-left py-2 font-medium'>行为</th></tr></thead>
                <tbody>
                  <tr className='border-b'><td className='py-2 pr-4'>服务器连接建立</td><td className='py-2'>内嵌 Xray 模式的 Agent 连接主控后，自动推送该服务器上所有用户的限速配置</td></tr>
                  <tr className='border-b'><td className='py-2 pr-4'>用户套餐变更</td><td className='py-2'>用户绑定或切换套餐后，重新推送该用户的限速配置</td></tr>
                  <tr className='border-b'><td className='py-2 pr-4'>用户启用/停用</td><td className='py-2'>停用用户时移除限速配置（入站同时停用），启用时重新推送</td></tr>
                  <tr className='border-b'><td className='py-2 pr-4'>用户删除</td><td className='py-2'>推送移除该用户的限速配置</td></tr>
                  <tr><td className='py-2 pr-4'>套餐到期</td><td className='py-2'>自动停用该用户的所有入站并移除限速配置</td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 配置步骤 */}
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>配置步骤</h2>
        <div className='space-y-4'>
          <Card>
            <CardContent className='pt-6'>
              <ol className='space-y-3 text-sm text-muted-foreground'>
                <li>1. 确保目标服务器使用<strong>内嵌 Xray 模式</strong>（外置模式不支持限速）</li>
                <li>2. 进入「套餐管理」页面，创建或编辑套餐</li>
                <li>3. 在套餐表单中设置「下载限速 (Mbps)」和「最大设备数」</li>
                <li>4. 保存套餐后，为用户绑定该套餐</li>
                <li>5. 限速配置会自动推送到用户关联的所有内嵌 Xray 服务器</li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 套餐表单字段 */}
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>套餐完整参数</h2>
        <p className='text-muted-foreground mb-4'>套餐除限速外还包含以下配置：</p>
        <Card>
          <CardContent className='pt-6'>
            <div className='overflow-x-auto'>
              <table className='w-full text-sm'>
                <thead><tr className='border-b'><th className='text-left py-2 pr-4 font-medium'>参数</th><th className='text-left py-2 pr-4 font-medium'>说明</th><th className='text-left py-2 font-medium'>默认值</th></tr></thead>
                <tbody>
                  <tr className='border-b'><td className='py-2 pr-4'>套餐名称</td><td className='py-2 pr-4'>用于识别的套餐名称</td><td className='py-2'>-</td></tr>
                  <tr className='border-b'><td className='py-2 pr-4'>流量限额 (GB)</td><td className='py-2 pr-4'>套餐总流量限额，超出后停用</td><td className='py-2'>0（不限）</td></tr>
                  <tr className='border-b'><td className='py-2 pr-4'>周期天数</td><td className='py-2 pr-4'>流量重置周期</td><td className='py-2'>30</td></tr>
                  <tr className='border-b'><td className='py-2 pr-4'>关联节点</td><td className='py-2 pr-4'>限定该套餐可使用的节点范围</td><td className='py-2'>全部</td></tr>
                  <tr className='border-b'><td className='py-2 pr-4'>下载限速 (Mbps)</td><td className='py-2 pr-4'>单用户下载速度上限</td><td className='py-2'>0（不限）</td></tr>
                  <tr className='border-b'><td className='py-2 pr-4'>设备数限制</td><td className='py-2 pr-4'>最大同时在线设备数</td><td className='py-2'>0（不限）</td></tr>
                  <tr><td className='py-2 pr-4'>流量统计模式</td><td className='py-2 pr-4'>单向（仅上行或下行取大值）或双向（上行+下行）</td><td className='py-2'>双向</td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 注意事项 */}
      <section>
        <h2 className='text-2xl font-bold mb-4'>注意事项</h2>
        <div className='space-y-3'>
          <div className='flex items-start gap-2 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20'>
            <AlertTriangle className='size-4 text-amber-500 mt-0.5 shrink-0' />
            <p className='text-sm text-amber-700 dark:text-amber-400'>限速仅在内嵌 Xray 模式的服务器上生效。外置 Xray 模式的服务器不会接收限速推送，用户在这些服务器上不受速度限制。</p>
          </div>
          <div className='flex items-start gap-2 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20'>
            <AlertTriangle className='size-4 text-amber-500 mt-0.5 shrink-0' />
            <p className='text-sm text-amber-700 dark:text-amber-400'>修改套餐限速参数后需要等待下次推送时机（如服务器重连）才能在已连接的 Agent 上生效。建议修改后手动重启 Agent 或等待心跳自动推送。</p>
          </div>
          <div className='flex items-start gap-2 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20'>
            <Info className='size-4 text-blue-500 mt-0.5 shrink-0' />
            <p className='text-sm text-blue-700 dark:text-blue-400'>设备数限制通过跟踪每个用户的活跃连接数实现。当连接数达到上限时，新连接会被拒绝，已有连接不受影响。</p>
          </div>
        </div>
      </section>
    </XDocLayout>
  )
}
