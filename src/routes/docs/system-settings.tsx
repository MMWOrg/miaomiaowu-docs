import { createFileRoute } from '@tanstack/react-router'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import {
  Settings,
  Database,
  Radar,
  FileCode,
  Shield,
  Sparkles,
} from 'lucide-react'

export const Route = createFileRoute('/docs/system-settings')({
  component: SystemSettingsPage,
})

function SystemSettingsPage() {
  return (
    <DocLayout
      title='系统设置'
      description='配置系统级别的全局设置（管理员功能）'
    >
      {/* 功能说明 */}
      <section className='mb-8'>
        <div className='flex items-center gap-2 mb-4'>
          <span className='px-2 py-1 bg-destructive/10 text-destructive rounded-md text-xs border border-destructive/20'>
            管理员功能
          </span>
        </div>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground'>
              系统设置页面是管理员专用功能，用于配置系统级别的全局设置，包括外部订阅同步、节点探针绑定和自定义规则等核心功能的开关和参数。
            </p>
          </CardContent>
        </Card>
      </section>

      {/* 外部订阅同步设置 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Database className='size-5 text-primary' />
          外部订阅同步设置
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              配置外部订阅链接的同步行为，控制节点数据的更新策略和缓存机制。
            </p>
            <div className='space-y-4'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>同步外部订阅流量信息</h4>
                <p className='text-xs text-muted-foreground'>
                  • <strong>开启后</strong>：流量信息数据包含外部订阅的流量信息<br/>
                  • <strong>关闭后</strong>：仅统计本地管理的节点流量
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>强制同步外部订阅</h4>
                <p className='text-xs text-muted-foreground'>
                  • <strong>开启后</strong>：每次用户获取订阅链接时，系统都会重新从外部订阅源拉取最新节点数据<br/>
                  • <strong>关闭后</strong>：使用缓存的外部订阅数据，不会实时更新<br/>
                  • <strong>注意</strong>：开启会增加订阅接口的响应时间
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>匹配规则</h4>
                <p className='text-xs text-muted-foreground mb-2'>
                  <strong>选项</strong>：节点名称 / 服务器:端口
                </p>
                <ul className='text-xs text-muted-foreground space-y-1'>
                  <li>• <strong>节点名称</strong>：根据节点名称匹配并更新节点信息，适用于节点名称稳定的订阅源</li>
                  <li>• <strong>服务器:端口</strong>：根据服务器地址和端口匹配，适用于节点名称经常变更的订阅源</li>
                </ul>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>缓存过期时间（分钟）</h4>
                <p className='text-xs text-muted-foreground'>
                  • <strong>设置为 0</strong>：每次获取订阅时都重新拉取外部订阅节点（实时更新）<br/>
                  • <strong>大于 0</strong>：只有距离上次同步时间超过设置的分钟数才会重新拉取<br/>
                  • <strong>⚠️ 警告</strong>：设置为 0 会影响获取订阅接口的响应速度
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 节点流量设置 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Radar className='size-5 text-primary' />
          节点流量设置
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              配置节点与探针服务器的绑定关系，实现精确的流量统计。
            </p>
            <div className='bg-muted/30 rounded-lg p-4'>
              <h4 className='font-semibold text-sm mb-2'>节点探针服务器绑定</h4>
              <p className='text-xs text-muted-foreground mb-3'>
                <strong>开关设置</strong>：开启 / 关闭
              </p>
              <div className='space-y-2 text-xs text-muted-foreground'>
                <p><strong>开启后：</strong></p>
                <ul className='ml-4 space-y-1'>
                  <li>• 节点列表显示"探针"按钮</li>
                  <li>• 可以为每个节点绑定特定的探针服务器</li>
                  <li>• 流量统计只会汇总绑定了节点的探针服务器流量</li>
                </ul>
                <p className='mt-2'><strong>关闭后：</strong></p>
                <ul className='ml-4 space-y-1'>
                  <li>• 探针按钮不显示</li>
                  <li>• 流量统计会汇总所有探针服务器的流量</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 自定义规则设置 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <FileCode className='size-5 text-primary' />
          自定义规则设置
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              配置自定义 DNS、规则和规则集功能，实现高级的流量分流控制。
            </p>
            <div className='bg-muted/30 rounded-lg p-4'>
              <h4 className='font-semibold text-sm mb-2'>启用自定义规则</h4>
              <p className='text-xs text-muted-foreground mb-3'>
                <strong>开关设置</strong>：开启 / 关闭
              </p>
              <div className='space-y-2 text-xs text-muted-foreground'>
                <p><strong>开启后：</strong></p>
                <ul className='ml-4 space-y-1'>
                  <li>• 导航栏显示"自定义规则"菜单项</li>
                  <li>• 可以创建 DNS 配置、规则列表和规则集提供商</li>
                  <li>• 生成订阅时自动应用已启用的自定义规则</li>
                </ul>
                <p className='mt-2'><strong>关闭后：</strong></p>
                <ul className='ml-4 space-y-1'>
                  <li>• 自定义规则菜单不显示</li>
                  <li>• 订阅使用默认配置生成</li>
                  <li>• 已创建的自定义规则不会被删除，只是不生效</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 典型使用场景 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Sparkles className='size-5 text-primary' />
          典型使用场景
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='space-y-3'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>场景一：使用外部订阅源</h4>
                <p className='text-xs text-muted-foreground'>
                  管理员导入外部订阅链接作为节点来源 → 开启"强制同步外部订阅" → 设置合适的缓存时间（如 30 分钟）→ 选择匹配规则 → 用户每次获取订阅时节点信息保持最新。
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>场景二：精确流量统计</h4>
                <p className='text-xs text-muted-foreground'>
                  在"探针管理"中添加探针服务器 → 在系统设置中开启"节点探针服务器绑定" → 为每个节点绑定对应的探针 → 实现按节点精确统计流量使用。
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>场景三：高级分流配置</h4>
                <p className='text-xs text-muted-foreground'>
                  开启"自定义规则" → 创建 DNS 配置实现智能 DNS 分流 → 添加广告屏蔽规则 → 配置国内直连规则 → 生成订阅时自动应用这些规则。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 注意事项 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Shield className='size-5 text-primary' />
          注意事项
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-orange-500'>
              <ul className='space-y-2 text-sm text-muted-foreground'>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>性能影响</strong>：将缓存时间设置为 0 会显著增加订阅接口的响应时间</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>匹配规则选择</strong>：如果外部订阅的节点名称经常变化，建议使用"服务器:端口"匹配</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>探针绑定前提</strong>：使用探针功能前需要先在"探针管理"中添加探针服务器</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>自定义规则测试</strong>：启用自定义规则后建议先测试订阅是否正常工作</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>设置即时生效</strong>：所有设置修改后立即生效，无需重启服务</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 最佳实践 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Settings className='size-5 text-primary' />
          最佳实践
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-emerald-500'>
              <ul className='space-y-2 text-sm text-muted-foreground'>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-1'>💡</span>
                  <span><strong>合理设置缓存</strong>：根据节点更新频率设置缓存时间，建议 15-60 分钟</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-1'>💡</span>
                  <span><strong>按需开启功能</strong>：只开启实际需要的功能，避免不必要的性能开销</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-1'>💡</span>
                  <span><strong>测试后部署</strong>：修改系统设置后先进行测试，确认无误后再正式使用</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-1'>💡</span>
                  <span><strong>定期检查</strong>：定期检查外部订阅同步是否正常，探针服务器是否在线</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
