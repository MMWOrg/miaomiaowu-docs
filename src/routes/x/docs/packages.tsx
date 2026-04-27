import { createFileRoute } from '@tanstack/react-router'
import { XDocLayout } from '@/components/docs/x-doc-layout'
import { Card, CardContent } from '@/components/ui/card'

export const Route = createFileRoute('/x/docs/packages')({
  component: PackagesPage,
})

function PackagesPage() {
  return (
    <XDocLayout title='套餐管理' description='用户套餐与流量配额'>
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>概述</h2>
        <p className='text-muted-foreground'>套餐定义了用户可使用的流量配额、有效期和可访问的节点范围。每个用户可绑定一个套餐。</p>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>套餐属性</h2>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead><tr className='border-b'><th className='text-left py-3 px-4'>属性</th><th className='text-left py-3 px-4'>说明</th></tr></thead>
            <tbody>
              <tr className='border-b'><td className='py-3 px-4'>名称</td><td className='py-3 px-4'>套餐显示名称</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>流量配额</td><td className='py-3 px-4'>每月可用流量（GB），0 表示不限</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>有效期</td><td className='py-3 px-4'>套餐有效天数</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>节点权限</td><td className='py-3 px-4'>可访问的节点/节点组</td></tr>
              <tr><td className='py-3 px-4'>速率限制</td><td className='py-3 px-4'>带宽限制（可选）</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>创建套餐</h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='text-sm space-y-3 text-muted-foreground'>
              <p>1. 进入「套餐管理」页面</p>
              <p>2. 点击「添加套餐」</p>
              <p>3. 填写套餐名称和各项配额</p>
              <p>4. 选择可访问的节点范围</p>
              <p>5. 保存套餐</p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-4'>流量统计</h2>
        <p className='text-muted-foreground mb-4'>
          系统通过 Xray 流量采集器实时统计每个用户的流量使用情况。当用户流量超出套餐配额时，订阅将自动停止返回节点。
        </p>
        <ul className='space-y-2 text-sm text-muted-foreground'>
          <li>- 流量按自然月重置</li>
          <li>- 上行和下行流量分别统计</li>
          <li>- 管理员可手动重置用户流量</li>
        </ul>
      </section>
    </XDocLayout>
  )
}
