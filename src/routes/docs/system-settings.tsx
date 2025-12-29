import { createFileRoute } from '@tanstack/react-router'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import {
  Settings,
  Database,
  Radar,
  Shield,
  Sparkles,
  ToggleRight,
  Link2,
  FileCode,
  Layers,
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
              系统设置页面是管理员专用功能，用于配置系统级别的全局设置，包括外部订阅同步、功能开关等核心功能的配置。
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
                <h4 className='font-semibold text-sm mb-2'>外部订阅同步设置</h4>
                <p className='text-xs text-muted-foreground'>
                  • <strong>开启后</strong>：每次用户获取订阅链接时，系统都会重新从外部订阅源拉取最新节点数据<br/>
                  • <strong>关闭后</strong>：使用缓存的外部订阅数据，不会实时更新<br/>
                  • <strong>注意</strong>：开启会增加订阅接口的响应时间
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>匹配规则</h4>
                <p className='text-xs text-muted-foreground mb-2'>
                  当开启外部订阅同步后，可选择节点匹配方式：
                </p>
                <ul className='text-xs text-muted-foreground space-y-1'>
                  <li>• <strong>节点名称</strong>：根据节点名称匹配并更新节点信息，适用于节点名称稳定的订阅源</li>
                  <li>• <strong>服务器:端口</strong>：根据服务器地址和端口匹配，适用于节点名称经常变更的订阅源</li>
                  <li>• <strong>类型:服务器:端口</strong>：根据协议类型、服务器地址和端口匹配，最严格的匹配方式</li>
                </ul>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>同步范围</h4>
                <p className='text-xs text-muted-foreground mb-2'>
                  控制同步哪些节点：
                </p>
                <ul className='text-xs text-muted-foreground space-y-1'>
                  <li>• <strong>仅同步已保存节点</strong>：只更新数据库中已存在的节点，不添加新节点</li>
                  <li>• <strong>同步所有节点</strong>：同步外部订阅中的所有节点，包括新增节点</li>
                </ul>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>保留当前节点名称</h4>
                <p className='text-xs text-muted-foreground'>
                  • <strong>开启后</strong>：同步时保留数据库中已有的节点名称，不使用外部订阅的节点名称<br/>
                  • <strong>关闭后</strong>：使用外部订阅中的节点名称覆盖本地名称
                </p>
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

      {/* 功能开关 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <ToggleRight className='size-5 text-primary' />
          功能开关
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              管理系统功能的启用状态，根据需要开启或关闭对应功能。
            </p>
            <div className='space-y-4'>
              {/* 节点探针服务器绑定 */}
              <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-blue-500'>
                <div className='flex items-center gap-2 mb-2'>
                  <Radar className='size-4 text-blue-500' />
                  <h4 className='font-semibold text-sm'>节点探针服务器绑定</h4>
                </div>
                <div className='space-y-2 text-xs text-muted-foreground'>
                  <p><strong>开启后：</strong></p>
                  <ul className='ml-4 space-y-1'>
                    <li>• 节点列表显示「探针」按钮</li>
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

              {/* 启用短链接 */}
              <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-green-500'>
                <div className='flex items-center gap-2 mb-2'>
                  <Link2 className='size-4 text-green-500' />
                  <h4 className='font-semibold text-sm'>启用短链接</h4>
                </div>
                <div className='space-y-2 text-xs text-muted-foreground'>
                  <p><strong>开启后：</strong></p>
                  <ul className='ml-4 space-y-1'>
                    <li>• 订阅链接页面将显示 6 位字符的短链接</li>
                    <li>• 短链接格式：<code className='bg-muted px-1 rounded'>https://your-domain.com/s/abc123</code></li>
                    <li>• 可在「个人设置」页面重置短链接</li>
                  </ul>
                  <p className='mt-2'><strong>关闭后：</strong></p>
                  <ul className='ml-4 space-y-1'>
                    <li>• 仅显示完整的订阅链接</li>
                  </ul>
                  <p className='mt-2 text-primary'>
                    <strong>💡 提示：</strong>短链接更便于分享和记忆，且不会暴露用户 ID 信息
                  </p>
                </div>
              </div>

              {/* 使用新模板系统 */}
              <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-purple-500'>
                <div className='flex items-center gap-2 mb-2'>
                  <FileCode className='size-4 text-purple-500' />
                  <h4 className='font-semibold text-sm'>使用新模板系统</h4>
                </div>
                <div className='space-y-2 text-xs text-muted-foreground'>
                  <p><strong>开启后（推荐）：</strong></p>
                  <ul className='ml-4 space-y-1'>
                    <li>• 使用数据库存储的模板</li>
                    <li>• 支持在网页端管理模板（创建、编辑、删除）</li>
                    <li>• 模板数据与数据库一起备份</li>
                  </ul>
                  <p className='mt-2'><strong>关闭后：</strong></p>
                  <ul className='ml-4 space-y-1'>
                    <li>• 使用 <code className='bg-muted px-1 rounded'>rule_templates</code> 目录下的模板文件</li>
                    <li>• 需要手动编辑文件来管理模板</li>
                    <li>• 适用于需要版本控制模板的场景</li>
                  </ul>
                </div>
              </div>

              {/* 启用节点集合 */}
              <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-orange-500'>
                <div className='flex items-center gap-2 mb-2'>
                  <Layers className='size-4 text-orange-500' />
                  <h4 className='font-semibold text-sm'>启用节点集合</h4>
                </div>
                <div className='space-y-2 text-xs text-muted-foreground'>
                  <p><strong>开启后：</strong></p>
                  <ul className='ml-4 space-y-1'>
                    <li>• 订阅文件页面显示「代理集合」管理功能</li>
                    <li>• 可以创建 Proxy Provider 配置</li>
                    <li>• 在「节点与代理组编辑」中可将节点集合拖入代理组</li>
                    <li>• 节点集合显示为紫色边框以区分普通节点</li>
                  </ul>
                  <p className='mt-2'><strong>关闭后：</strong></p>
                  <ul className='ml-4 space-y-1'>
                    <li>• 代理集合相关功能不显示</li>
                  </ul>
                  <p className='mt-2 text-primary'>
                    <strong>💡 提示：</strong>节点集合（Proxy Provider）允许从外部订阅动态加载节点，适合管理多个机场的场景
                  </p>
                </div>
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
                  管理员导入外部订阅链接作为节点来源 → 开启「外部订阅同步设置」 → 设置合适的缓存时间（如 30 分钟）→ 选择匹配规则 → 用户每次获取订阅时节点信息保持最新。
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>场景二：精确流量统计</h4>
                <p className='text-xs text-muted-foreground'>
                  在「探针管理」中添加探针服务器 → 在系统设置中开启「节点探针服务器绑定」 → 为每个节点绑定对应的探针 → 实现按节点精确统计流量使用。
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>场景三：简化订阅链接分享</h4>
                <p className='text-xs text-muted-foreground'>
                  开启「启用短链接」 → 用户可以使用 6 位字符的短链接 → 方便分享和记忆 → 需要时可在个人设置中重置短链接。
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>场景四：多机场节点管理</h4>
                <p className='text-xs text-muted-foreground'>
                  开启「启用节点集合」 → 创建代理集合按地域分裂节点 → 在代理组中使用节点集合 → 方便切换不同机场的节点。
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
                  <span><strong>匹配规则选择</strong>：如果外部订阅的节点名称经常变化，建议使用「服务器:端口」匹配</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>探针绑定前提</strong>：使用探针功能前需要先在「探针管理」中添加探针服务器</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>短链接安全</strong>：重置短链接后，旧的短链接将失效</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>模板系统切换</strong>：切换模板系统后，需要确认使用的模板是否正确</span>
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
                  <span><strong>按需开启功能</strong>：只开启实际需要的功能，避免不必要的复杂性</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-1'>💡</span>
                  <span><strong>使用新模板系统</strong>：推荐使用数据库模板，便于在网页端管理</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-1'>💡</span>
                  <span><strong>启用短链接</strong>：建议开启短链接功能，提升用户体验</span>
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
