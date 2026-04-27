import { createFileRoute } from '@tanstack/react-router'
import { XDocLayout } from '@/components/docs/x-doc-layout'
import { Card, CardContent } from '@/components/ui/card'

export const Route = createFileRoute('/x/docs/custom-rules')({
  component: CustomRulesPage,
})

function CustomRulesPage() {
  return (
    <XDocLayout title='自定义规则' description='订阅分流规则自定义'>
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>概述</h2>
        <p className='text-muted-foreground'>自定义规则允许在订阅输出中添加额外的分流规则，控制特定域名或 IP 的代理行为。规则会插入到模板规则之前，优先级更高。</p>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>规则类型</h2>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead><tr className='border-b'><th className='text-left py-3 px-4'>类型</th><th className='text-left py-3 px-4'>格式</th><th className='text-left py-3 px-4'>示例</th></tr></thead>
            <tbody>
              <tr className='border-b'><td className='py-3 px-4'>DOMAIN</td><td className='py-3 px-4'>精确域名匹配</td><td className='py-3 px-4 font-mono text-xs'>DOMAIN,example.com,PROXY</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>DOMAIN-SUFFIX</td><td className='py-3 px-4'>域名后缀匹配</td><td className='py-3 px-4 font-mono text-xs'>DOMAIN-SUFFIX,google.com,PROXY</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>DOMAIN-KEYWORD</td><td className='py-3 px-4'>域名关键词匹配</td><td className='py-3 px-4 font-mono text-xs'>DOMAIN-KEYWORD,github,PROXY</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>IP-CIDR</td><td className='py-3 px-4'>IP 段匹配</td><td className='py-3 px-4 font-mono text-xs'>IP-CIDR,10.0.0.0/8,DIRECT</td></tr>
              <tr><td className='py-3 px-4'>GEOIP</td><td className='py-3 px-4'>GeoIP 匹配</td><td className='py-3 px-4 font-mono text-xs'>GEOIP,CN,DIRECT</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>策略</h2>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead><tr className='border-b'><th className='text-left py-3 px-4'>策略</th><th className='text-left py-3 px-4'>说明</th></tr></thead>
            <tbody>
              <tr className='border-b'><td className='py-3 px-4'>PROXY</td><td className='py-3 px-4'>通过代理访问</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>DIRECT</td><td className='py-3 px-4'>直接连接</td></tr>
              <tr><td className='py-3 px-4'>REJECT</td><td className='py-3 px-4'>拒绝连接</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-4'>配置示例</h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto'>
              <pre>{`# 自定义规则示例
DOMAIN-SUFFIX,openai.com,PROXY
DOMAIN-SUFFIX,anthropic.com,PROXY
DOMAIN-KEYWORD,github,PROXY
IP-CIDR,192.168.0.0/16,DIRECT
GEOIP,CN,DIRECT`}</pre>
            </div>
          </CardContent>
        </Card>
      </section>
    </XDocLayout>
  )
}
