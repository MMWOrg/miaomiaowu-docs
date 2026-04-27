import { createFileRoute } from '@tanstack/react-router'
import { XDocLayout } from '@/components/docs/x-doc-layout'
import { Card, CardContent } from '@/components/ui/card'

export const Route = createFileRoute('/x/docs/subscribe-files')({
  component: SubscribeFilesPage,
})

function SubscribeFilesPage() {
  return (
    <XDocLayout title='订阅文件' description='外部订阅导入与管理'>
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>概述</h2>
        <p className='text-muted-foreground'>订阅文件功能允许从外部订阅链接导入节点，与本地 Xray 入站生成的节点合并，统一通过订阅系统分发。</p>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>支持的订阅格式</h2>
        <ul className='space-y-2 text-sm text-muted-foreground'>
          <li>- Clash/mihomo YAML 格式</li>
          <li>- Base64 编码的节点列表</li>
          <li>- 单行 URI 格式（ss://, vmess://, vless://, trojan://）</li>
        </ul>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>添加订阅</h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='text-sm space-y-3 text-muted-foreground'>
              <p>1. 进入「订阅文件」管理页面</p>
              <p>2. 点击「添加订阅」</p>
              <p>3. 填写订阅名称和 URL</p>
              <p>4. 设置自动更新间隔（可选）</p>
              <p>5. 保存后系统自动拉取并解析节点</p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>自动更新</h2>
        <p className='text-muted-foreground mb-4'>
          可为每个订阅设置自动更新间隔。系统会定期拉取最新订阅内容，自动更新节点列表。
        </p>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead><tr className='border-b'><th className='text-left py-3 px-4'>更新间隔</th><th className='text-left py-3 px-4'>适用场景</th></tr></thead>
            <tbody>
              <tr className='border-b'><td className='py-3 px-4'>手动</td><td className='py-3 px-4'>节点稳定，不常变更</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>每小时</td><td className='py-3 px-4'>节点频繁变更</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>每天</td><td className='py-3 px-4'>一般使用</td></tr>
              <tr><td className='py-3 px-4'>自定义</td><td className='py-3 px-4'>按需设置</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-4'>注意事项</h2>
        <ul className='space-y-2 text-sm text-muted-foreground'>
          <li>- 导入的节点与本地入站节点合并输出</li>
          <li>- 可对导入节点进行启用/禁用、重命名操作</li>
          <li>- 订阅 URL 变更后需手动触发一次更新</li>
        </ul>
      </section>
    </XDocLayout>
  )
}
