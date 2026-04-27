import { createFileRoute } from '@tanstack/react-router'
import { XDocLayout } from '@/components/docs/x-doc-layout'
import { Card, CardContent } from '@/components/ui/card'

export const Route = createFileRoute('/x/docs/protocol-shadowsocks')({
  component: ProtocolShadowsocksPage,
})

function ProtocolShadowsocksPage() {
  return (
    <XDocLayout title='Shadowsocks' description='Shadowsocks 协议配置详解'>
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>概述</h2>
        <p className='text-muted-foreground'>Shadowsocks 是经典的代理协议，支持 AEAD 和 SS2022 两种加密方式。配置简单，兼容性好。</p>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>加密方式</h2>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead><tr className='border-b'><th className='text-left py-3 px-4'>类型</th><th className='text-left py-3 px-4'>加密算法</th><th className='text-left py-3 px-4'>说明</th></tr></thead>
            <tbody>
              <tr className='border-b'><td className='py-3 px-4'>AEAD</td><td className='py-3 px-4'>aes-256-gcm</td><td className='py-3 px-4'>经典 AEAD 加密</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>AEAD</td><td className='py-3 px-4'>chacha20-ietf-poly1305</td><td className='py-3 px-4'>适合 ARM 设备</td></tr>
              <tr><td className='py-3 px-4'>SS2022</td><td className='py-3 px-4'>2022-blake3-aes-256-gcm</td><td className='py-3 px-4'>新一代协议，更安全</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>SS2022 密码格式</h2>
        <p className='text-muted-foreground mb-4'>
          SS2022 使用服务器密码 + 客户端密码的组合格式。在 mihomo/Clash 中，密码格式为 <code className='bg-muted px-1.5 py-0.5 rounded'>serverPassword:clientPassword</code>。
        </p>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-4'>配置示例</h2>
        <Card>
          <CardContent className='pt-6'>
            <h3 className='font-semibold mb-2'>SS2022</h3>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto'>
              <pre>{`{
  "protocol": "shadowsocks",
  "settings": {
    "method": "2022-blake3-aes-256-gcm",
    "password": "server-base64-key",
    "network": "tcp,udp",
    "clients": [{ "password": "client-base64-key" }]
  }
}`}</pre>
            </div>
          </CardContent>
        </Card>
      </section>
    </XDocLayout>
  )
}
