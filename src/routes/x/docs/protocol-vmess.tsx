import { createFileRoute } from '@tanstack/react-router'
import { XDocLayout } from '@/components/docs/x-doc-layout'
import { Card, CardContent } from '@/components/ui/card'

export const Route = createFileRoute('/x/docs/protocol-vmess')({
  component: ProtocolVmessPage,
})

function ProtocolVmessPage() {
  return (
    <XDocLayout title='VMess' description='VMess 协议配置详解'>
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>概述</h2>
        <p className='text-muted-foreground'>VMess 是 V2Ray 原生协议，自带加密。相比 VLESS 有额外的加密开销，但兼容性更广。</p>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>支持的组合</h2>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead><tr className='border-b'><th className='text-left py-3 px-4'>传输</th><th className='text-left py-3 px-4'>安全层</th><th className='text-left py-3 px-4'>说明</th></tr></thead>
            <tbody>
              <tr className='border-b'><td className='py-3 px-4'>TCP</td><td className='py-3 px-4'>None</td><td className='py-3 px-4'>仅 VMess 自身加密</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>TCP</td><td className='py-3 px-4'>TLS</td><td className='py-3 px-4'>双重加密</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>WebSocket</td><td className='py-3 px-4'>None</td><td className='py-3 px-4'>适合 CDN 中转</td></tr>
              <tr><td className='py-3 px-4'>WebSocket</td><td className='py-3 px-4'>TLS</td><td className='py-3 px-4'>WSS + VMess</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-4'>配置示例</h2>
        <Card>
          <CardContent className='pt-6'>
            <h3 className='font-semibold mb-2'>VMess + WS + TLS</h3>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto'>
              <pre>{`{
  "protocol": "vmess",
  "settings": {
    "clients": [{ "id": "uuid", "alterId": 0 }]
  },
  "streamSettings": {
    "network": "ws",
    "security": "tls",
    "wsSettings": { "path": "/vmess" },
    "tlsSettings": {
      "serverName": "example.com",
      "certificates": [{ "certificateFile": "...", "keyFile": "..." }]
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
