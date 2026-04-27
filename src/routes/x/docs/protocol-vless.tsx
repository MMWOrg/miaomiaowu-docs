import { createFileRoute } from '@tanstack/react-router'
import { XDocLayout } from '@/components/docs/x-doc-layout'
import { Card, CardContent } from '@/components/ui/card'

export const Route = createFileRoute('/x/docs/protocol-vless')({
  component: ProtocolVlessPage,
})

function ProtocolVlessPage() {
  return (
    <XDocLayout title='VLESS' description='VLESS 协议配置详解'>
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>概述</h2>
        <p className='text-muted-foreground'>VLESS 是 Xray 的主力协议，轻量无加密开销（依赖传输层加密），支持最多的传输和安全层组合。</p>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>支持的组合</h2>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead><tr className='border-b'><th className='text-left py-3 px-4'>传输</th><th className='text-left py-3 px-4'>安全层</th><th className='text-left py-3 px-4'>说明</th></tr></thead>
            <tbody>
              <tr className='border-b'><td className='py-3 px-4'>TCP</td><td className='py-3 px-4'>REALITY</td><td className='py-3 px-4'>推荐，无需域名和证书</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>TCP</td><td className='py-3 px-4'>REALITY + XTLS-Vision</td><td className='py-3 px-4'>推荐，最佳性能</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>TCP</td><td className='py-3 px-4'>TLS</td><td className='py-3 px-4'>需要域名和证书</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>TCP</td><td className='py-3 px-4'>TLS + XTLS-Vision</td><td className='py-3 px-4'>需要域名和证书</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>WebSocket</td><td className='py-3 px-4'>TLS</td><td className='py-3 px-4'>WSS，适合 CDN 中转</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>gRPC</td><td className='py-3 px-4'>REALITY</td><td className='py-3 px-4'>适合高并发场景</td></tr>
              <tr><td className='py-3 px-4'>XHTTP</td><td className='py-3 px-4'>REALITY</td><td className='py-3 px-4'>新一代传输，替代 H2</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>XTLS-Vision</h2>
        <p className='text-muted-foreground mb-4'>
          XTLS-Vision 是 VLESS 独有的流控模式，通过 <code className='bg-muted px-1.5 py-0.5 rounded'>flow: xtls-rprx-vision</code> 启用。
          它可以减少 TLS-in-TLS 的特征，提高抗检测能力。仅支持 TCP 传输。
        </p>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-4'>配置示例</h2>
        <Card>
          <CardContent className='pt-6'>
            <h3 className='font-semibold mb-2'>VLESS + TCP + REALITY + Vision（推荐）</h3>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto'>
              <pre>{`{
  "protocol": "vless",
  "settings": {
    "clients": [{ "id": "uuid", "flow": "xtls-rprx-vision" }],
    "decryption": "none"
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
