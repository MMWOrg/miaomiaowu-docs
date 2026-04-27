import { createFileRoute } from '@tanstack/react-router'
import { XDocLayout } from '@/components/docs/x-doc-layout'
import { Card, CardContent } from '@/components/ui/card'

export const Route = createFileRoute('/x/docs/xray-service')({
  component: XrayServicePage,
})

function XrayServicePage() {
  return (
    <XDocLayout title='Xray 服务管理' description='远程安装/卸载 Xray 和 Nginx，服务启停控制'>
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>Xray 安装</h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-3'>在服务管理页面，点击服务器卡片上的「安装 Xray」按钮。</p>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li>- 安装过程通过 SSE 流式展示实时进度</li>
              <li>- 自动下载最新版 Xray-core 并配置为系统服务</li>
              <li>- 安装完成后自动触发证书部署（如有配置）</li>
              <li>- 安装完成后自动扫描并同步入站到节点表</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>Nginx 安装</h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-3'>Nginx 用于 TLS 伪装，将 443 端口的流量转发到 Xray。</p>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li>- 如果服务器配置了域名，安装时会自动配置 Nginx 反向代理</li>
              <li>- 支持 SSE 流式安装进度</li>
              <li>- 安装完成后自动触发证书部署</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>服务控制</h2>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead><tr className='border-b'><th className='text-left py-3 px-4'>操作</th><th className='text-left py-3 px-4'>说明</th></tr></thead>
            <tbody>
              <tr className='border-b'><td className='py-3 px-4'>启动</td><td className='py-3 px-4'>启动 Xray/Nginx 服务</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>停止</td><td className='py-3 px-4'>停止 Xray/Nginx 服务</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>重启</td><td className='py-3 px-4'>重启 Xray/Nginx 服务（配置变更后需要）</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>卸载</td><td className='py-3 px-4'>完全卸载 Xray/Nginx</td></tr>
              <tr><td className='py-3 px-4'>扫描</td><td className='py-3 px-4'>扫描服务状态和版本信息，同步入站到节点</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-4'>配置文件管理</h2>
        <p className='text-muted-foreground'>
          可以在服务器详情页直接查看和编辑 Xray/Nginx 的配置文件。支持多配置文件列表、在线编辑和保存。修改配置后需要重启对应服务生效。
        </p>
      </section>
    </XDocLayout>
  )
}
