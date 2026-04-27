import { createFileRoute } from '@tanstack/react-router'
import { XDocLayout } from '@/components/docs/x-doc-layout'

export const Route = createFileRoute('/x/docs/xray-system-config')({
  component: XraySystemConfigPage,
})

function XraySystemConfigPage() {
  return (
    <XDocLayout title='Xray 系统配置' description='Xray 全局配置项：日志、DNS、策略等'>
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>概述</h2>
        <p className='text-muted-foreground mb-4'>
          Xray 系统配置包含全局级别的设置，影响所有入站和出站的行为。可在服务器详情页的「系统配置」标签页中管理。
        </p>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>配置项</h2>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead><tr className='border-b'><th className='text-left py-3 px-4'>配置</th><th className='text-left py-3 px-4'>说明</th></tr></thead>
            <tbody>
              <tr className='border-b'><td className='py-3 px-4'>日志级别</td><td className='py-3 px-4'>none / error / warning / info / debug</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>DNS</td><td className='py-3 px-4'>自定义 DNS 服务器配置</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>策略</td><td className='py-3 px-4'>连接策略、缓冲区大小等</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>统计</td><td className='py-3 px-4'>流量统计开关</td></tr>
              <tr><td className='py-3 px-4'>API</td><td className='py-3 px-4'>gRPC API 配置（用于流量统计）</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-4'>注意事项</h2>
        <ul className='space-y-2 text-sm text-muted-foreground'>
          <li>- 修改系统配置后需要重启 Xray 服务生效</li>
          <li>- 开启流量统计会略微增加内存占用</li>
          <li>- API 入站用于 gRPC 流量统计，请勿删除</li>
        </ul>
      </section>
    </XDocLayout>
  )
}
