import { createFileRoute } from '@tanstack/react-router'
import { XDocLayout } from '@/components/docs/x-doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import { AlertTriangle, Info } from 'lucide-react'

export const Route = createFileRoute('/x/docs/embedded-xray')({
  component: EmbeddedXrayPage,
})

function EmbeddedXrayPage() {
  return (
    <XDocLayout title='内嵌 Xray' description='将 Xray 内核直接运行在 Agent 进程内，解锁限速推送和实时流量控制（PRO）'>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>概述</h2>
        <p className='text-muted-foreground mb-4'>
          内嵌 Xray（Embedded Xray）是 PRO 功能，它将 Xray 内核作为库直接嵌入到 Agent 进程中运行，替代传统的外置 Xray 服务。
          内嵌模式下，Agent 拥有对 Xray 内核的完整控制权，可以实现外置模式无法支持的高级功能，如实时限速推送、设备数限制、自动限速规则和精确的在线用户追踪。
        </p>
        <div className='flex items-start gap-2 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20'>
          <Info className='size-4 text-blue-500 mt-0.5 shrink-0' />
          <p className='text-sm text-blue-700 dark:text-blue-400'>内嵌 Xray 是 PRO 功能，需要有效的许可证且许可证包含 <code className='bg-muted px-1.5 py-0.5 rounded text-xs'>limiter</code> 特性。</p>
        </div>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>内嵌 vs 外置模式</h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='overflow-x-auto'>
              <table className='w-full text-sm'>
                <thead>
                  <tr className='border-b'>
                    <th className='text-left py-2 pr-4 font-medium'>对比项</th>
                    <th className='text-left py-2 pr-4 font-medium'>内嵌模式 (Embedded)</th>
                    <th className='text-left py-2 font-medium'>外置模式 (External)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b'><td className='py-2 pr-4 font-medium'>Xray 运行方式</td><td className='py-2 pr-4'>作为库嵌入 Agent 进程内</td><td className='py-2'>独立 systemd 服务</td></tr>
                  <tr className='border-b'><td className='py-2 pr-4 font-medium'>PRO 许可证</td><td className='py-2 pr-4'>需要</td><td className='py-2'>不需要</td></tr>
                  <tr className='border-b'><td className='py-2 pr-4 font-medium'>限速推送</td><td className='py-2 pr-4 text-green-600 dark:text-green-400'>✓ 支持</td><td className='py-2 text-muted-foreground'>✗ 不支持</td></tr>
                  <tr className='border-b'><td className='py-2 pr-4 font-medium'>设备数限制</td><td className='py-2 pr-4 text-green-600 dark:text-green-400'>✓ 支持</td><td className='py-2 text-muted-foreground'>✗ 不支持</td></tr>
                  <tr className='border-b'><td className='py-2 pr-4 font-medium'>自动限速规则</td><td className='py-2 pr-4 text-green-600 dark:text-green-400'>✓ 支持</td><td className='py-2 text-muted-foreground'>✗ 不支持</td></tr>
                  <tr className='border-b'><td className='py-2 pr-4 font-medium'>在线用户/IP 追踪</td><td className='py-2 pr-4 text-green-600 dark:text-green-400'>✓ 精确追踪</td><td className='py-2 text-muted-foreground'>✗ 不支持</td></tr>
                  <tr className='border-b'><td className='py-2 pr-4 font-medium'>XTLS Vision 限速</td><td className='py-2 pr-4 text-green-600 dark:text-green-400'>✓ 通过 Hook 支持</td><td className='py-2 text-muted-foreground'>✗ 不支持</td></tr>
                  <tr className='border-b'><td className='py-2 pr-4 font-medium'>热更新限速</td><td className='py-2 pr-4'>无需重启即时生效</td><td className='py-2'>-</td></tr>
                  <tr className='border-b'><td className='py-2 pr-4 font-medium'>配置路径</td><td className='py-2 pr-4'><code className='bg-muted px-1.5 py-0.5 rounded text-xs'>/usr/local/etc/xray/config.json</code></td><td className='py-2'>自动检测多路径</td></tr>
                  <tr><td className='py-2 pr-4 font-medium'>安装 Xray</td><td className='py-2 pr-4'>无需单独安装</td><td className='py-2'>需要安装独立 Xray 服务</td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>工作原理</h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto'>
              <pre>{`Agent 启动 (xray_mode: embedded)
     │
     ├─ 停止外置 Xray 服务 (systemctl stop xray)
     ├─ 加载 /usr/local/etc/xray/config.json
     ├─ 注入自定义调度器 (Dispatcher) + 统计 + 策略
     ├─ 注册 Vision 限速 Hook
     └─ 启动内嵌 Xray 内核实例
          │
          ▼
主控通过 WebSocket 推送 limiter_config
     │
     ▼
Agent 实时更新限速桶 (Rate Bucket)
     │
     ├─ 每个用户独立的速度限制 (bytes/s)
     ├─ 每个用户独立的设备数限制
     └─ 自动限速规则 (sustained / burst)
          │
          ▼
自定义调度器拦截所有流量
     │
     ├─ RateWriter: 普通连接限速
     ├─ VisionLimiterHook: XTLS Vision 零拷贝连接限速
     └─ 设备数超限 → 拒绝新连接`}</pre>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>核心能力</h2>
        <div className='space-y-6'>
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3'>实时限速推送</h3>
              <p className='text-sm text-muted-foreground mb-3'>
                主控通过 WebSocket 向内嵌 Xray Agent 推送限速配置，Agent 在不重启的情况下即时更新限速规则。每个入站的每个用户都有独立的速率桶（Rate Bucket）。
              </p>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm'>
                  <thead><tr className='border-b'><th className='text-left py-2 pr-4 font-medium'>参数</th><th className='text-left py-2 pr-4 font-medium'>类型</th><th className='text-left py-2 font-medium'>说明</th></tr></thead>
                  <tbody>
                    <tr className='border-b'><td className='py-2 pr-4'><code className='bg-muted px-1.5 py-0.5 rounded text-xs'>inbound_tag</code></td><td className='py-2 pr-4'>string</td><td className='py-2'>目标入站标签</td></tr>
                    <tr className='border-b'><td className='py-2 pr-4'><code className='bg-muted px-1.5 py-0.5 rounded text-xs'>node_limit</code></td><td className='py-2 pr-4'>uint64</td><td className='py-2'>节点级速度上限（bytes/s），0 表示不限</td></tr>
                    <tr className='border-b'><td className='py-2 pr-4'><code className='bg-muted px-1.5 py-0.5 rounded text-xs'>users[].speed_limit</code></td><td className='py-2 pr-4'>uint64</td><td className='py-2'>用户速度上限（bytes/s），0 表示不限</td></tr>
                    <tr><td className='py-2 pr-4'><code className='bg-muted px-1.5 py-0.5 rounded text-xs'>users[].device_limit</code></td><td className='py-2 pr-4'>int</td><td className='py-2'>用户最大设备数，0 表示不限</td></tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3'>XTLS Vision 限速</h3>
              <p className='text-sm text-muted-foreground'>
                XTLS-RPRX-VISION 协议使用零拷贝（splice）优化，普通的流量拦截无法生效。内嵌模式通过注册 Vision Limiter Hook，在 splice 之前插入限速层，
                对 Vision 连接也能精确控速。当用户没有设置限速时（无速率桶），Hook 返回空值，连接直接使用原始 splice 路径，零额外开销。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3'>自动限速规则</h3>
              <p className='text-sm text-muted-foreground mb-3'>
                内嵌模式内置速度监控器（SpeedMonitor），可配置自动限速规则，当用户流量行为触发阈值时自动施加临时限速。
              </p>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm'>
                  <thead><tr className='border-b'><th className='text-left py-2 pr-4 font-medium'>规则类型</th><th className='text-left py-2 pr-4 font-medium'>触发条件</th><th className='text-left py-2 font-medium'>说明</th></tr></thead>
                  <tbody>
                    <tr className='border-b'>
                      <td className='py-2 pr-4'><code className='bg-muted px-1.5 py-0.5 rounded text-xs'>sustained</code></td>
                      <td className='py-2 pr-4'>持续超速</td>
                      <td className='py-2'>用户速度持续超过阈值达到指定秒数后触发。例：连续 5 秒超过 100 Mbps → 限速 50 Mbps 持续 30 秒</td>
                    </tr>
                    <tr>
                      <td className='py-2 pr-4'><code className='bg-muted px-1.5 py-0.5 rounded text-xs'>burst</code></td>
                      <td className='py-2 pr-4'>突发超速</td>
                      <td className='py-2'>在时间窗口内超速次数达到阈值后触发。例：10 秒内超过 80 Mbps 达 3 次 → 限速 40 Mbps 持续 60 秒</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3'>在线用户与设备追踪</h3>
              <p className='text-sm text-muted-foreground'>
                内嵌模式精确追踪每个用户的在线 IP 地址和连接数。当用户连接数达到设备数上限时，新连接会被拒绝。
                已建立的连接不受影响。在线信息通过 WebSocket 定期上报给主控。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3'>自定义调度器</h3>
              <p className='text-sm text-muted-foreground'>
                内嵌模式替换了 Xray 默认的调度器，使用自定义调度器来拦截所有出站流量。自定义调度器集成了限速模块，
                通过 RateWriter 对每个连接的写入操作施加速率限制，同时保持完整的流量统计能力。
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>启用内嵌模式</h2>
        <div className='space-y-4'>
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3'>方式一：主控切换</h3>
              <p className='text-sm text-muted-foreground mb-3'>
                在主控的服务器管理页面，可以直接切换服务器的 Xray 模式。切换后 Agent 会自动重启并以新模式运行。
              </p>
              <ol className='space-y-2 text-sm text-muted-foreground'>
                <li>1. 进入「远程服务器」页面</li>
                <li>2. 点击目标服务器的设置</li>
                <li>3. 将 Xray 模式切换为「内嵌」</li>
                <li>4. Agent 自动重启，切换完成</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3'>方式二：Agent 配置文件</h3>
              <p className='text-sm text-muted-foreground mb-3'>
                直接编辑 Agent 的配置文件 <code className='bg-muted px-1.5 py-0.5 rounded text-xs'>config.yaml</code>：
              </p>
              <div className='bg-muted rounded-lg p-4 font-mono text-sm'>
                <pre>{`xray_mode: "embedded"  # 可选值: "external"（默认）或 "embedded"`}</pre>
              </div>
              <p className='text-sm text-muted-foreground mt-3'>
                修改后重启 Agent 服务：<code className='bg-muted px-1.5 py-0.5 rounded text-xs'>systemctl restart mmw-agent</code>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>启动行为</h2>
        <p className='text-muted-foreground mb-4'>
          Agent 以内嵌模式启动时，会执行以下步骤：
        </p>
        <Card>
          <CardContent className='pt-6'>
            <ol className='space-y-3 text-sm text-muted-foreground'>
              <li><strong>1. 停止外置 Xray</strong> — 自动执行 <code className='bg-muted px-1.5 py-0.5 rounded text-xs'>systemctl stop xray</code>，避免端口冲突</li>
              <li><strong>2. 配置迁移</strong> — 如果存在外置 Xray 的 confdir 配置，自动合并到标准路径</li>
              <li><strong>3. 确保 geodata</strong> — 检查 geoip.dat / geosite.dat 是否存在</li>
              <li><strong>4. 注入运行时组件</strong> — 向 Xray 配置注入自定义调度器、统计模块和策略配置</li>
              <li><strong>5. 注册 Vision Hook</strong> — 注册 XTLS Vision 零拷贝连接的限速拦截器</li>
              <li><strong>6. 启动内核</strong> — 创建并启动内嵌 Xray 实例</li>
              <li><strong>7. 连接主控</strong> — 建立 WebSocket 连接，开始接收限速配置推送</li>
            </ol>
          </CardContent>
        </Card>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>流量统计</h2>
        <p className='text-muted-foreground mb-4'>
          内嵌模式使用 Xray 内置的统计计数器收集流量数据，支持按入站和按用户维度统计：
        </p>
        <Card>
          <CardContent className='pt-6'>
            <div className='overflow-x-auto'>
              <table className='w-full text-sm'>
                <thead><tr className='border-b'><th className='text-left py-2 pr-4 font-medium'>计数器格式</th><th className='text-left py-2 font-medium'>说明</th></tr></thead>
                <tbody>
                  <tr className='border-b'><td className='py-2 pr-4'><code className='bg-muted px-1.5 py-0.5 rounded text-xs'>{'inbound>>>tag>>>traffic>>>uplink'}</code></td><td className='py-2'>入站上行流量</td></tr>
                  <tr className='border-b'><td className='py-2 pr-4'><code className='bg-muted px-1.5 py-0.5 rounded text-xs'>{'inbound>>>tag>>>traffic>>>downlink'}</code></td><td className='py-2'>入站下行流量</td></tr>
                  <tr className='border-b'><td className='py-2 pr-4'><code className='bg-muted px-1.5 py-0.5 rounded text-xs'>{'user>>>email>>>traffic>>>uplink'}</code></td><td className='py-2'>用户上行流量</td></tr>
                  <tr><td className='py-2 pr-4'><code className='bg-muted px-1.5 py-0.5 rounded text-xs'>{'user>>>email>>>traffic>>>downlink'}</code></td><td className='py-2'>用户下行流量</td></tr>
                </tbody>
              </table>
            </div>
            <p className='text-sm text-muted-foreground mt-3'>
              计数器采用累积模式（非破坏性读取），Agent 定期上报增量数据给主控。
            </p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-4'>注意事项</h2>
        <div className='space-y-3'>
          <div className='flex items-start gap-2 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20'>
            <AlertTriangle className='size-4 text-amber-500 mt-0.5 shrink-0' />
            <p className='text-sm text-amber-700 dark:text-amber-400'>切换到内嵌模式时，Agent 会自动停止外置 Xray 服务。切换回外置模式后需要确保 Xray 服务正常启动。</p>
          </div>
          <div className='flex items-start gap-2 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20'>
            <AlertTriangle className='size-4 text-amber-500 mt-0.5 shrink-0' />
            <p className='text-sm text-amber-700 dark:text-amber-400'>内嵌模式的配置路径固定为 <code className='bg-muted px-1.5 py-0.5 rounded text-xs'>/usr/local/etc/xray/config.json</code>，不会像外置模式那样自动检测多路径。请确保该路径可访问。</p>
          </div>
          <div className='flex items-start gap-2 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20'>
            <AlertTriangle className='size-4 text-amber-500 mt-0.5 shrink-0' />
            <p className='text-sm text-amber-700 dark:text-amber-400'>限速推送需要 PRO 许可证包含 <code className='bg-muted px-1.5 py-0.5 rounded text-xs'>limiter</code> 特性。未授权时 Agent 会忽略主控推送的限速配置。</p>
          </div>
          <div className='flex items-start gap-2 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20'>
            <Info className='size-4 text-blue-500 mt-0.5 shrink-0' />
            <p className='text-sm text-blue-700 dark:text-blue-400'>内嵌模式无需单独安装 Xray，Agent 自身即包含完整的 Xray 内核。切换后不会影响已有的入站配置。</p>
          </div>
          <div className='flex items-start gap-2 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20'>
            <Info className='size-4 text-blue-500 mt-0.5 shrink-0' />
            <p className='text-sm text-blue-700 dark:text-blue-400'>主控 UI 中，内嵌模式的服务器会显示蓝色「内置」标识，外置模式显示灰色「外置」标识，便于区分。</p>
          </div>
        </div>
      </section>
    </XDocLayout>
  )
}
