import { createFileRoute } from '@tanstack/react-router'
import { XDocLayout } from '@/components/docs/x-doc-layout'
import { Card, CardContent } from '@/components/ui/card'

export const Route = createFileRoute('/x/docs/protocol-trojan')({
  component: ProtocolTrojanPage,
})

function ProtocolTrojanPage() {
  return (
    <XDocLayout title='Trojan' description='Trojan 协议配置详解'>
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>概述</h2>
        <p className='text-muted-foreground'>Trojan 协议模拟 HTTPS 流量，使用密码认证。在 Xray-core 中支持 TLS 和 REALITY 安全层。</p>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>支持的组合</h2>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead><tr className='border-b'><th className='text-left py-3 px-4'>传输</th><th className='text-left py-3 px-4'>安全层</th><th className='text-left py-3 px-4'>说明</th></tr></thead>
            <tbody>
              <tr className='border-b'><td className='py-3 px-4'>TCP</td><td className='py-3 px-4'>TLS</td><td className='py-3 px-4'>经典 Trojan</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>TCP</td><td className='py-3 px-4'>REALITY</td><td className='py-3 px-4'>无需域名和证书</td></tr>
              <tr><td className='py-3 px-4'>gRPC</td><td className='py-3 px-4'>REALITY</td><td className='py-3 px-4'>gRPC 传输</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>注意事项</h2>
        <ul className='space-y-2 text-sm text-muted-foreground'>
          <li>- Xray-core 已移除 Trojan 的 flow（XTLS-Vision）支持</li>
          <li>- mihomo 中 Trojan 使用 <code className='bg-muted px-1.5 py-0.5 rounded'>sni</code> 字段，而非 <code className='bg-muted px-1.5 py-0.5 rounded'>servername</code></li>
        </ul>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-4'>配置示例</h2>
        <Card>
          <CardContent className='pt-6'>
            <h3 className='font-semibold mb-2'>Trojan + TCP + REALITY</h3>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto'>
              <pre>{`{
  "protocol": "trojan",
  "settings": {
    "clients": [{ "password": "your-password" }]
  },
  "streamSettings": {
    "network": "tcp",
    "security": "reality",
    "realitySettings": {
      "dest": "dl.google.com:443",
      "serverNames": ["dl.google.com"],
      "privateKey": "...",
      "shortIds": [""]
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
