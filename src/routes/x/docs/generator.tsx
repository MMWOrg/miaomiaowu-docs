import { createFileRoute } from '@tanstack/react-router'
import { XDocLayout } from '@/components/docs/x-doc-layout'
import { Card, CardContent } from '@/components/ui/card'

export const Route = createFileRoute('/x/docs/generator')({
  component: GeneratorPage,
})

function GeneratorPage() {
  return (
    <XDocLayout title='生成订阅' description='生成和分发代理订阅链接'>
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>概述</h2>
        <p className='text-muted-foreground'>订阅系统将节点转换为各客户端支持的格式，通过唯一链接分发给用户。支持多种主流客户端格式。</p>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>支持的客户端格式</h2>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead><tr className='border-b'><th className='text-left py-3 px-4'>格式</th><th className='text-left py-3 px-4'>客户端</th><th className='text-left py-3 px-4'>平台</th></tr></thead>
            <tbody>
              <tr className='border-b'><td className='py-3 px-4'>Clash/ClashMeta</td><td className='py-3 px-4'>mihomo, Clash Verge</td><td className='py-3 px-4'>全平台</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>Surge</td><td className='py-3 px-4'>Surge</td><td className='py-3 px-4'>macOS / iOS</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>Loon</td><td className='py-3 px-4'>Loon</td><td className='py-3 px-4'>iOS</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>Quantumult X</td><td className='py-3 px-4'>Quantumult X</td><td className='py-3 px-4'>iOS</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>Shadowrocket</td><td className='py-3 px-4'>Shadowrocket</td><td className='py-3 px-4'>iOS</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>SingBox</td><td className='py-3 px-4'>sing-box</td><td className='py-3 px-4'>全平台</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>Stash</td><td className='py-3 px-4'>Stash</td><td className='py-3 px-4'>macOS / iOS</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>Surfboard</td><td className='py-3 px-4'>Surfboard</td><td className='py-3 px-4'>Android</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>V2Ray</td><td className='py-3 px-4'>V2RayN, V2RayNG</td><td className='py-3 px-4'>Windows / Android</td></tr>
              <tr><td className='py-3 px-4'>Egern</td><td className='py-3 px-4'>Egern</td><td className='py-3 px-4'>iOS</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>订阅链接</h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto'>
              <pre>{`https://your-domain.com/api/clash/subscribe?token=<用户Token>&format=<格式>`}</pre>
            </div>
            <div className='mt-4 text-sm text-muted-foreground space-y-1'>
              <p><code className='bg-muted px-1.5 py-0.5 rounded'>token</code> — 用户的订阅令牌（在用户管理中生成）</p>
              <p><code className='bg-muted px-1.5 py-0.5 rounded'>format</code> — 输出格式（clash, surge, loon, qx, shadowrocket, singbox, stash, surfboard, v2ray, egern）</p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-4'>转换流程</h2>
        <div className='text-sm text-muted-foreground space-y-2'>
          <p>1. 用户通过订阅链接请求订阅</p>
          <p>2. 系统验证 Token 并获取用户可用节点</p>
          <p>3. 根据 format 参数选择对应的格式转换器</p>
          <p>4. 应用订阅模板（如有配置）</p>
          <p>5. 输出最终订阅内容</p>
        </div>
      </section>
    </XDocLayout>
  )
}
