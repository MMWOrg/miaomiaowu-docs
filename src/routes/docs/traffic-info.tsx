import { createFileRoute } from '@tanstack/react-router'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import { Activity, Calendar, TrendingUp, Database, HardDrive, Percent, BarChart3 } from 'lucide-react'

export const Route = createFileRoute('/docs/traffic-info')({
  component: TrafficInfoPage,
})

function TrafficInfoPage() {
  return (
    <DocLayout
      title='流量信息'
      description='查看当前用户的流量使用情况和订阅有效期信息'
    >
      {/* 功能介绍 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Activity className='size-5 text-primary' />
          功能介绍
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              流量信息页面展示当前登录用户的流量使用情况和订阅有效期信息，帮助用户了解自己的服务状态。
            </p>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-primary'>
              <h3 className='font-semibold mb-3'>主要功能</h3>
              <ul className='space-y-2 text-sm'>
                <li className='flex items-start gap-2'>
                  <Database className='size-4 text-primary mt-0.5 flex-shrink-0' />
                  <span>显示总流量配额、已用流量、剩余流量</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Percent className='size-4 text-primary mt-0.5 flex-shrink-0' />
                  <span>流量使用率百分比展示</span>
                </li>
                <li className='flex items-start gap-2'>
                  <BarChart3 className='size-4 text-primary mt-0.5 flex-shrink-0' />
                  <span>每日流量消耗趋势图表</span>
                </li>
                <li className='flex items-start gap-2'>
                  <Calendar className='size-4 text-primary mt-0.5 flex-shrink-0' />
                  <span>显示订阅有效期信息</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 演示卡片 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4'>界面预览</h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-sm text-muted-foreground mb-4'>
              以下是流量信息页面的示例展示：
            </p>

            {/* 模拟的流量信息界面 */}
            <div className='bg-muted/30 rounded-lg p-6 space-y-6'>
              {/* 四个统计卡片 */}
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                {/* 总流量配额 */}
                <div className='bg-background rounded-lg p-4 border'>
                  <div className='flex items-center gap-2 mb-2'>
                    <Database className='size-4 text-blue-500' />
                    <span className='text-xs text-muted-foreground'>总流量配额</span>
                  </div>
                  <p className='text-2xl font-bold'>5.92 TB</p>
                </div>

                {/* 已用流量 */}
                <div className='bg-background rounded-lg p-4 border'>
                  <div className='flex items-center gap-2 mb-2'>
                    <TrendingUp className='size-4 text-orange-500' />
                    <span className='text-xs text-muted-foreground'>已用流量</span>
                  </div>
                  <p className='text-2xl font-bold'>465.25 GB</p>
                </div>

                {/* 剩余流量 */}
                <div className='bg-background rounded-lg p-4 border'>
                  <div className='flex items-center gap-2 mb-2'>
                    <HardDrive className='size-4 text-green-500' />
                    <span className='text-xs text-muted-foreground'>剩余流量</span>
                  </div>
                  <p className='text-2xl font-bold'>5.46 TB</p>
                </div>

                {/* 使用率 */}
                <div className='bg-background rounded-lg p-4 border'>
                  <div className='flex items-center gap-2 mb-2'>
                    <Percent className='size-4 text-purple-500' />
                    <span className='text-xs text-muted-foreground'>使用率</span>
                  </div>
                  <p className='text-2xl font-bold'>7.68%</p>
                </div>
              </div>

              {/* 每日流量消耗图表 */}
              <div className='bg-background rounded-lg p-4 border'>
                <div className='flex items-center gap-2 mb-4'>
                  <BarChart3 className='size-4 text-primary' />
                  <span className='font-medium'>每日流量消耗</span>
                </div>
                {/* 模拟面积图 */}
                <div className='h-48 flex items-end gap-1'>
                  {[35, 42, 28, 55, 48, 62, 45, 38, 52, 68, 72, 58, 45, 52].map((height, index) => (
                    <div
                      key={index}
                      className='flex-1 bg-gradient-to-t from-primary/60 to-primary/20 rounded-t'
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <div className='flex justify-between mt-2 text-xs text-muted-foreground'>
                  <span>12-15</span>
                  <span>12-22</span>
                  <span>12-29</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 数据来源说明 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4'>数据来源</h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='space-y-4'>
              <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-blue-500'>
                <h4 className='font-semibold mb-2'>探针服务器统计</h4>
                <p className='text-sm text-muted-foreground'>
                  流量数据来自探针服务器的实时统计。管理员需要在"探针管理"中配置探针服务器，并为节点绑定对应的探针，系统才能准确统计流量。
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-purple-500'>
                <h4 className='font-semibold mb-2'>外部订阅流量</h4>
                <p className='text-sm text-muted-foreground'>
                  如果管理员在系统设置中开启了"同步外部订阅流量信息"，流量数据还会包含外部订阅源的流量信息。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
