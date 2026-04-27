import { createFileRoute } from '@tanstack/react-router'
import { XDocLayout } from '@/components/docs/x-doc-layout'

export const Route = createFileRoute('/x/docs/protocol-matrix')({
  component: ProtocolMatrixPage,
})

function ProtocolMatrixPage() {
  const matrix = [
    { protocol: 'VLESS', transport: 'TCP', security: 'REALITY', note: '' },
    { protocol: 'VLESS', transport: 'TCP', security: 'REALITY + XTLS-Vision', note: 'flow: xtls-rprx-vision' },
    { protocol: 'VLESS', transport: 'TCP', security: 'TLS', note: '' },
    { protocol: 'VLESS', transport: 'TCP', security: 'TLS + XTLS-Vision', note: 'flow: xtls-rprx-vision' },
    { protocol: 'VLESS', transport: 'WS', security: 'TLS', note: 'WSS' },
    { protocol: 'VLESS', transport: 'gRPC', security: 'REALITY', note: '' },
    { protocol: 'VLESS', transport: 'XHTTP', security: 'REALITY', note: '' },
    { protocol: 'Trojan', transport: 'TCP', security: 'TLS', note: '' },
    { protocol: 'Trojan', transport: 'TCP', security: 'REALITY', note: '' },
    { protocol: 'Trojan', transport: 'gRPC', security: 'REALITY', note: '' },
    { protocol: 'VMess', transport: 'TCP', security: 'None', note: '' },
    { protocol: 'VMess', transport: 'TCP', security: 'TLS', note: '' },
    { protocol: 'VMess', transport: 'WS', security: 'None', note: '' },
    { protocol: 'VMess', transport: 'WS', security: 'TLS', note: '' },
    { protocol: 'Shadowsocks', transport: 'TCP', security: 'None', note: 'AEAD: aes-256-gcm' },
    { protocol: 'Shadowsocks', transport: 'TCP', security: 'None', note: 'SS2022: 2022-blake3-aes-256-gcm' },
    { protocol: 'Hysteria2', transport: 'UDP', security: 'TLS', note: '需要 TLS 证书' },
  ]

  return (
    <XDocLayout title='协议矩阵' description='妙妙屋X 支持的所有协议×传输×安全组合'>
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>完整矩阵</h2>
        <p className='text-muted-foreground mb-4'>以下是经过测试验证的所有可用组合（17 种），均已通过 mihomo 连通性测试。</p>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead>
              <tr className='border-b'>
                <th className='text-left py-3 px-4'>#</th>
                <th className='text-left py-3 px-4'>协议</th>
                <th className='text-left py-3 px-4'>传输</th>
                <th className='text-left py-3 px-4'>安全层</th>
                <th className='text-left py-3 px-4'>备注</th>
              </tr>
            </thead>
            <tbody>
              {matrix.map((row, i) => (
                <tr key={i} className='border-b'>
                  <td className='py-3 px-4 text-muted-foreground'>{i + 1}</td>
                  <td className='py-3 px-4 font-medium'>{row.protocol}</td>
                  <td className='py-3 px-4'>{row.transport}</td>
                  <td className='py-3 px-4'>{row.security}</td>
                  <td className='py-3 px-4 text-muted-foreground'>{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>已废弃的组合</h2>
        <p className='text-muted-foreground mb-4'>以下组合在 Xray-core 中已被废弃或移除：</p>
        <ul className='space-y-2 text-sm text-muted-foreground'>
          <li>- HTTP/H2 传输：已迁移到 XHTTP stream-one（H2 & H3）</li>
          <li>- Trojan + Flow（XTLS-Vision）：Xray-core 已移除 Trojan 的 flow 支持</li>
        </ul>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-4'>mihomo 兼容性说明</h2>
        <ul className='space-y-2 text-sm text-muted-foreground'>
          <li>- Trojan 在 mihomo 中使用 <code className='bg-muted px-1.5 py-0.5 rounded'>sni</code> 字段（非 <code className='bg-muted px-1.5 py-0.5 rounded'>servername</code>）</li>
          <li>- XHTTP 需要 <code className='bg-muted px-1.5 py-0.5 rounded'>xhttp-opts</code> 包含 <code className='bg-muted px-1.5 py-0.5 rounded'>headers: {'{}'}</code>，<code className='bg-muted px-1.5 py-0.5 rounded'>mode</code> 放在顶层</li>
          <li>- REALITY 的 <code className='bg-muted px-1.5 py-0.5 rounded'>short-id</code> 和 <code className='bg-muted px-1.5 py-0.5 rounded'>public-key</code> 放在 <code className='bg-muted px-1.5 py-0.5 rounded'>reality-opts</code> 中</li>
          <li>- Hysteria2 使用 <code className='bg-muted px-1.5 py-0.5 rounded'>hysteria2</code> 类型（非 <code className='bg-muted px-1.5 py-0.5 rounded'>hysteria</code>）</li>
        </ul>
      </section>
    </XDocLayout>
  )
}
