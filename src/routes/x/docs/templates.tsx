import { createFileRoute } from '@tanstack/react-router'
import { XDocLayout } from '@/components/docs/x-doc-layout'
import { Card, CardContent } from '@/components/ui/card'

export const Route = createFileRoute('/x/docs/templates')({
  component: TemplatesPage,
})

function TemplatesPage() {
  return (
    <XDocLayout title='模板管理' description='订阅输出模板配置'>
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>概述</h2>
        <p className='text-muted-foreground'>模板定义了订阅输出的整体结构，包括代理组、规则集、DNS 配置等。不同客户端格式使用各自的模板。</p>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>模板结构</h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='text-sm space-y-3 text-muted-foreground'>
              <p>一个完整的 Clash/mihomo 模板通常包含：</p>
              <ul className='space-y-1 ml-4'>
                <li>- <code className='bg-muted px-1.5 py-0.5 rounded'>proxy-groups</code> — 代理组定义（自动选择、手动选择、负载均衡等）</li>
                <li>- <code className='bg-muted px-1.5 py-0.5 rounded'>rules</code> — 分流规则（域名、IP、GeoIP 等）</li>
                <li>- <code className='bg-muted px-1.5 py-0.5 rounded'>dns</code> — DNS 配置</li>
                <li>- <code className='bg-muted px-1.5 py-0.5 rounded'>general</code> — 通用设置（端口、模式等）</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>代理组配置</h2>
        <p className='text-muted-foreground mb-4'>代理组从远程 URL 加载，支持在线编辑和预览。</p>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead><tr className='border-b'><th className='text-left py-3 px-4'>组类型</th><th className='text-left py-3 px-4'>说明</th></tr></thead>
            <tbody>
              <tr className='border-b'><td className='py-3 px-4'>select</td><td className='py-3 px-4'>手动选择节点</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>url-test</td><td className='py-3 px-4'>自动选择延迟最低的节点</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>fallback</td><td className='py-3 px-4'>按优先级自动切换</td></tr>
              <tr><td className='py-3 px-4'>load-balance</td><td className='py-3 px-4'>负载均衡</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-4'>使用方式</h2>
        <div className='text-sm text-muted-foreground space-y-2'>
          <p>1. 在系统设置中配置代理组 URL</p>
          <p>2. 系统启动时自动加载代理组配置</p>
          <p>3. 订阅生成时，节点自动填充到对应的代理组中</p>
          <p>4. 用户订阅即可获得完整的分流配置</p>
        </div>
      </section>
    </XDocLayout>
  )
}
