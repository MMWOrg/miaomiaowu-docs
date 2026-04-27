import { createFileRoute } from '@tanstack/react-router'
import { XDocLayout } from '@/components/docs/x-doc-layout'
import { Card, CardContent } from '@/components/ui/card'

export const Route = createFileRoute('/x/docs/protocol-hysteria2')({
  component: ProtocolHysteria2Page,
})

function ProtocolHysteria2Page() {
  return (
    <XDocLayout title='Hysteria2' description='Hysteria2 协议配置详解'>
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>概述</h2>
        <p className='text-muted-foreground'>Hysteria2 基于 QUIC（UDP），专为高延迟、高丢包网络优化。需要 TLS 证书。</p>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>前置要求</h2>
        <ul className='space-y-2 text-sm text-muted-foreground'>
          <li>- 需要 TLS 证书（可通过证书管理自动申请）</li>
          <li>- 需要开放 UDP 端口</li>
          <li>- 客户端需支持 Hysteria2（mihomo/Clash.Meta 支持）</li>
        </ul>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>Xray 配置说明</h2>
        <p className='text-muted-foreground mb-4'>
          在 Xray-core 中，Hysteria2 使用 <code className='bg-muted px-1.5 py-0.5 rounded'>protocol: "hysteria"</code> 配合 <code className='bg-muted px-1.5 py-0.5 rounded'>version: 2</code>。
          认证使用 <code className='bg-muted px-1.5 py-0.5 rounded'>auth</code> 字段（非 password）。
        </p>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-4'>配置示例</h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto'>
              <pre>{`{
  "protocol": "hysteria",
  "settings": {
    "version": 2,
    "clients": [{ "auth": "your-password" }]
  },
  "streamSettings": {
    "network": "hysteria",
    "security": "tls",
    "tlsSettings": {
      "serverName": "example.com",
      "alpn": ["h3"],
      "certificates": [{
        "certificateFile": "/path/to/cert.pem",
        "keyFile": "/path/to/key.pem"
      }]
    }
  }
}`}</pre>
            </div>
          </CardContent>
        </Card>
      </section>
    </XDocLayout>
  )
}
