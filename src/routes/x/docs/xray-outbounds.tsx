import { createFileRoute } from '@tanstack/react-router'
import { XDocLayout } from '@/components/docs/x-doc-layout'

export const Route = createFileRoute('/x/docs/xray-outbounds')({
  component: XrayOutboundsPage,
})

function XrayOutboundsPage() {
  return (
    <XDocLayout title='Xray 出站管理' description='管理 Xray 出站配置和路由规则'>
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>出站配置</h2>
        <p className='text-muted-foreground mb-4'>
          出站定义了流量从 Xray 发出的方式。默认包含 freedom（直连）和 blackhole（阻断）两个出站。
        </p>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead><tr className='border-b'><th className='text-left py-3 px-4'>类型</th><th className='text-left py-3 px-4'>说明</th></tr></thead>
            <tbody>
              <tr className='border-b'><td className='py-3 px-4'>Freedom</td><td className='py-3 px-4'>直连出站，流量直接发送到目标</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>Blackhole</td><td className='py-3 px-4'>阻断出站，丢弃所有流量</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>VLESS/VMess/Trojan/SS</td><td className='py-3 px-4'>代理出站，流量通过另一个代理服务器转发</td></tr>
              <tr><td className='py-3 px-4'>Tunnel</td><td className='py-3 px-4'>隧道出站</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>路由规则</h2>
        <p className='text-muted-foreground mb-4'>
          路由规则决定入站流量如何分配到不同的出站。可以基于域名、IP、协议等条件进行分流。
        </p>
        <ul className='space-y-2 text-sm text-muted-foreground'>
          <li>- 支持域名匹配（domain, full, regexp）</li>
          <li>- 支持 IP 匹配（CIDR, GeoIP）</li>
          <li>- 支持协议匹配</li>
          <li>- 支持端口匹配</li>
          <li>- 支持入站 tag 匹配</li>
        </ul>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-4'>操作</h2>
        <p className='text-muted-foreground'>
          在服务器详情页的「出站」和「路由」标签页中管理。支持添加、编辑、删除出站和路由规则。修改后需要重启 Xray 服务生效。
        </p>
      </section>
    </XDocLayout>
  )
}
