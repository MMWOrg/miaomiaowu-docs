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

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>限速与设备数</h2>
        <p className='text-muted-foreground mb-4'>
          套餐可设置<strong>限速(Mbps)</strong>与<strong>设备数上限</strong>;也可在用户管理里对单个用户单独设置(用户级覆盖套餐级)。
        </p>
        <div className='space-y-4'>
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-2'>限速</h3>
              <p className='text-sm text-muted-foreground'>
                以 Mbps 为单位设置上限,0 表示不限。设置后由 Agent 侧的限速层对该用户连接生效;界面会给出单位换算提示。
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-2'>自动限速 / 解除</h3>
              <p className='text-sm text-muted-foreground'>
                可开启<strong>超额自动限速</strong>:用户流量超额时自动降速(而非直接断订阅),次月流量重置或额度恢复后自动解除限速。
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-4'>流量统计与计费倍率</h2>
        <p className='text-muted-foreground mb-4'>
          系统通过 Xray 流量采集器实时统计每个用户的流量。当用户<strong>计费流量</strong>超出套餐配额时,订阅将自动停止返回节点(或按上面的自动限速降速)。
        </p>
        <ul className='space-y-2 text-sm text-muted-foreground mb-4'>
          <li>- 底层 user_traffic 表保存的是裸流量(上行 + 下行),按节点 / 用户分别统计</li>
          <li>- 套餐可选<strong>计费方向</strong>:单向(oneway,×1)或双向(twoway,×2)</li>
          <li>- <strong>计费流量 = 裸流量(上行+下行) × 倍率</strong>;是否超额按计费流量判断</li>
          <li>- 流量按自然月重置;管理员可手动重置用户流量</li>
        </ul>
        <Card>
          <CardContent className='pt-6 text-sm text-muted-foreground'>
            首页与用户列表展示的"已用流量"对管理员是各服务器计费口径(不限流量服务器单独标注),对用户是按其套餐倍率换算后的计费流量。
          </CardContent>
        </Card>
      </section>
    </XDocLayout>
  )
}
