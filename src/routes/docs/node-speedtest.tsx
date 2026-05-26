import { createFileRoute } from '@tanstack/react-router'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'

export const Route = createFileRoute('/docs/node-speedtest')({
  component: NodeSpeedtestPage,
})

function NodeSpeedtestPage() {
  return (
    <DocLayout
      title='节点测速'
      description='用 mihomo 内核对节点测下行速度与延迟，支持主控本机测速与家用测速端'
    >
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>概述</h2>
        <p className='text-muted-foreground mb-4'>
          节点测速通过 mihomo 内核以单节点代理实测下行吞吐与延迟。两种测速来源：
        </p>
        <div className='grid gap-4 md:grid-cols-2'>
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-2'>🖥️ 主控本机</h3>
              <p className='text-sm text-muted-foreground'>
                主控自动下载 mihomo 内核，在主控所在网络环境测速。开箱即用，适合主控部署在家里或目标网络的场景。
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-2'>🏠 家用测速端</h3>
              <p className='text-sm text-muted-foreground'>
                在你家里的电脑/服务器跑一个测速端，反向连入主控，从真实家庭网络视角测速。适合主控在机房、但想知道家庭出口实测速度的场景。
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>发起测速</h2>
        <div className='space-y-4'>
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3'>步骤</h3>
              <div className='text-sm text-muted-foreground space-y-2'>
                <p>1. 进入「节点管理」，点顶部的「节点测速」按钮，打开测速工作台。</p>
                <p>2. 顶部选择<strong>测速来源</strong>（默认「主控本机」；若配过家用测速端可选对应测速端）。</p>
                <p>3. 表格里每个节点一行，显示协议、名称、服务器地址、测速结果与延迟。点该行的测速按钮单测；或勾选多个节点后点「批量测速」。</p>
                <p>4. 测速是<strong>异步</strong>执行：点完即返回，结果稍后自动刷新显示（测速中转圈、完成显示 ↓速度 / 延迟）。离开页面再回来仍可看到结果。</p>
                <p>5. 点行内「历史」图标可查看该节点的历次测速记录。</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-6 text-sm text-muted-foreground'>
              测速工作台被点击外部时会<strong>收起到屏幕右下角</strong>的悬浮按钮（防误关），点它可重新展开；点右上角 × 才真正关闭。
            </CardContent>
          </Card>
        </div>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>测速结果说明</h2>
        <Card>
          <CardContent className='pt-6 text-sm text-muted-foreground space-y-2'>
            <p>• <strong>速度</strong>：下行速度，单位 Mbps，经代理在限定时长内实际下载字节数计算。</p>
            <p>• <strong>延迟</strong>：经代理请求 gstatic 204 端点的往返时间，单位 ms。</p>
            <p>• <strong>出口 IP</strong>：经代理请求 IP 回显服务获得的出口地址，用于核对节点落地是否符合预期。</p>
          </CardContent>
        </Card>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>配置家用测速端</h2>
        <div className='space-y-4'>
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3'>步骤</h3>
              <div className='text-sm text-muted-foreground space-y-2'>
                <p>1. 在测速工作台点「测速端管理」→ 填写名称 → 点「创建」，得到一次性<strong>配对令牌</strong>与运行命令。</p>
                <p>2. 在你家里的机器上运行该命令（<code className='bg-muted px-1 py-0.5 rounded'>mmw-speedtester -master &lt;主控地址&gt; -token &lt;令牌&gt; -name home</code>），它会反向 WebSocket 连入主控，无需公网 IP。</p>
                <p>3. 连上后，测速来源里就会出现这个测速端（显示在线状态），选它即可让测速在你家网络里跑。</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-6 text-sm text-muted-foreground space-y-2'>
              <p>• 令牌仅在创建时显示一次，请妥善保存。</p>
              <p>• 测速端使用 mihomo 内核，首次运行会自动从 GitHub 下载。</p>
              <p>• 可创建多个测速端，分别部署在不同网络环境。</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>Mihomo 内核</h2>
        <Card>
          <CardContent className='pt-6 text-sm text-muted-foreground space-y-2'>
            <p>• 测速依赖 <strong>mihomo</strong> 内核（MetaCubeX/mihomo）启动临时代理。</p>
            <p>• 自动检测顺序：环境变量 <code className='bg-muted px-1 py-0.5 rounded'>MIHOMO_BIN</code> → <code className='bg-muted px-1 py-0.5 rounded'>data/bin/mihomo</code> → 系统 PATH → 自动从 GitHub 下载。</p>
            <p>• 如需手动指定，设置环境变量 <code className='bg-muted px-1 py-0.5 rounded'>MIHOMO_BIN=/path/to/mihomo</code>。</p>
          </CardContent>
        </Card>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>注意事项</h2>
        <Card>
          <CardContent className='pt-6 text-sm text-muted-foreground space-y-2'>
            <p>• 多节点测速在服务端<strong>串行</strong>执行（避免并发抢带宽导致结果失真），节点多时耗时较长。</p>
            <p>• 默认按固定时长（约 10 秒）下载计速，不固定下载大小；结果保存在服务端数据库，可在历史里回看。</p>
            <p>• 测速使用固定端口 17900，确保该端口未被其他程序占用。</p>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
