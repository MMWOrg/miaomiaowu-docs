import { createFileRoute } from '@tanstack/react-router'
import { XDocLayout } from '@/components/docs/x-doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import { AlertTriangle, Info } from 'lucide-react'

export const Route = createFileRoute('/x/docs/system-settings')({
  component: SystemSettingsPage,
})

function SystemSettingsPage() {
  return (
    <XDocLayout title='系统设置' description='妙妙屋X 系统设置的每个配置项详解'>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>概述</h2>
        <p className='text-muted-foreground mb-4'>
          系统设置页面包含四个主要配置区域：外部订阅同步设置、功能开关、通知推送配置、代理组配置同步。所有设置修改后立即生效，无需重启服务。
        </p>
        <div className='flex items-start gap-2 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20'>
          <Info className='size-4 text-blue-500 mt-0.5 shrink-0' />
          <p className='text-sm text-blue-700 dark:text-blue-400'>系统设置仅管理员可见，普通用户无法访问此页面。</p>
        </div>
      </section>

      {/* 外部订阅同步设置 */}
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>外部订阅同步设置</h2>
        <p className='text-muted-foreground mb-4'>
          配置外部订阅（机场订阅）的同步行为。当系统导入了外部订阅链接时，这些设置控制如何获取和更新外部节点。
        </p>

        <div className='space-y-6'>
          {/* 同步外部订阅流量信息 */}
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-2'>同步外部订阅流量信息</h3>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm'>
                  <tbody>
                    <tr className='border-b'><td className='py-2 pr-4 font-medium w-28'>类型</td><td className='py-2'>开关</td></tr>
                    <tr className='border-b'><td className='py-2 pr-4 font-medium'>默认值</td><td className='py-2'>关闭</td></tr>
                    <tr><td className='py-2 pr-4 font-medium'>说明</td><td className='py-2'>开启后，流量信息页面的数据将包含外部订阅的流量信息。系统会在获取订阅时读取外部订阅的 <code className='bg-muted px-1.5 py-0.5 rounded text-xs'>subscription-userinfo</code> 响应头，并将流量数据合并到总流量统计中。</td></tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* 节点名称追加订阅信息 */}
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-2'>节点名称追加订阅信息</h3>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm'>
                  <tbody>
                    <tr className='border-b'><td className='py-2 pr-4 font-medium w-28'>类型</td><td className='py-2'>开关</td></tr>
                    <tr className='border-b'><td className='py-2 pr-4 font-medium'>默认值</td><td className='py-2'>关闭</td></tr>
                    <tr><td className='py-2 pr-4 font-medium'>说明</td><td className='py-2'>开启后，同步外部订阅时会在节点名称后追加剩余流量和剩余天数。例如：<code className='bg-muted px-1.5 py-0.5 rounded text-xs'>节点名 398.22GB 26Days</code>。方便用户在客户端直接查看各订阅的流量和有效期信息。</td></tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* 节点名称过滤 */}
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-2'>节点名称过滤</h3>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm'>
                  <tbody>
                    <tr className='border-b'><td className='py-2 pr-4 font-medium w-28'>类型</td><td className='py-2'>文本输入（正则表达式）</td></tr>
                    <tr className='border-b'><td className='py-2 pr-4 font-medium'>默认值</td><td className='py-2'><code className='bg-muted px-1.5 py-0.5 rounded text-xs'>{'剩余|流量|到期|订阅|时间|重置'}</code></td></tr>
                    <tr><td className='py-2 pr-4 font-medium'>说明</td><td className='py-2'>使用正则表达式匹配节点名称，匹配成功的节点会在同步时被过滤掉。常用于过滤机场订阅中的流量信息节点、公告节点等非代理节点。留空则不进行任何过滤。</td></tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* 强制同步外部订阅 */}
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-2'>外部订阅同步</h3>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm'>
                  <tbody>
                    <tr className='border-b'><td className='py-2 pr-4 font-medium w-28'>类型</td><td className='py-2'>开关</td></tr>
                    <tr className='border-b'><td className='py-2 pr-4 font-medium'>默认值</td><td className='py-2'>关闭</td></tr>
                    <tr><td className='py-2 pr-4 font-medium'>说明</td><td className='py-2'>开启后，每次用户通过订阅链接获取订阅时，系统都会重新拉取外部订阅链接的最新节点并更新数据库。关闭时仅使用数据库中已保存的节点。</td></tr>
                  </tbody>
                </table>
              </div>
              <div className='flex items-start gap-2 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 mt-4'>
                <AlertTriangle className='size-4 text-amber-500 mt-0.5 shrink-0' />
                <p className='text-sm text-amber-700 dark:text-amber-400'>开启后会增加获取订阅接口的响应时间，因为每次都需要访问外部订阅链接。建议配合缓存过期时间使用。</p>
              </div>

              <p className='text-sm text-muted-foreground mt-4 mb-3'>开启后展开以下子配置：</p>
              <div className='space-y-4 bg-muted/30 rounded-lg p-4 border'>
                <div>
                  <h4 className='text-sm font-medium mb-1'>匹配规则</h4>
                  <p className='text-xs text-muted-foreground mb-2'>控制同步时如何匹配本地节点和远程节点的对应关系。</p>
                  <div className='overflow-x-auto'>
                    <table className='w-full text-sm'>
                      <thead><tr className='border-b'><th className='text-left py-2 pr-4 font-medium'>选项</th><th className='text-left py-2 font-medium'>说明</th></tr></thead>
                      <tbody>
                        <tr className='border-b'><td className='py-2 pr-4'><code className='bg-muted px-1.5 py-0.5 rounded text-xs'>节点名称</code></td><td className='py-2'>通过节点名称匹配（默认），适合节点名称稳定的订阅</td></tr>
                        <tr className='border-b'><td className='py-2 pr-4'><code className='bg-muted px-1.5 py-0.5 rounded text-xs'>服务器:端口</code></td><td className='py-2'>通过服务器地址和端口匹配，适合节点名称经常变化的订阅</td></tr>
                        <tr><td className='py-2 pr-4'><code className='bg-muted px-1.5 py-0.5 rounded text-xs'>类型:服务器:端口</code></td><td className='py-2'>通过协议类型+服务器+端口匹配，最精确的匹配方式</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className='border-t pt-4'>
                  <h4 className='text-sm font-medium mb-1'>同步范围</h4>
                  <p className='text-xs text-muted-foreground mb-2'>控制同步时更新哪些节点。</p>
                  <div className='overflow-x-auto'>
                    <table className='w-full text-sm'>
                      <thead><tr className='border-b'><th className='text-left py-2 pr-4 font-medium'>选项</th><th className='text-left py-2 font-medium'>说明</th></tr></thead>
                      <tbody>
                        <tr className='border-b'><td className='py-2 pr-4'><code className='bg-muted px-1.5 py-0.5 rounded text-xs'>仅同步已保存节点</code></td><td className='py-2'>只更新数据库中已存在的节点信息（默认），不会自动添加新节点</td></tr>
                        <tr><td className='py-2 pr-4'><code className='bg-muted px-1.5 py-0.5 rounded text-xs'>同步所有节点</code></td><td className='py-2'>同步远程订阅的所有节点，新增的节点会自动添加到数据库</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className='border-t pt-4'>
                  <h4 className='text-sm font-medium mb-1'>保留当前节点名称</h4>
                  <div className='overflow-x-auto'>
                    <table className='w-full text-sm'>
                      <tbody>
                        <tr className='border-b'><td className='py-2 pr-4 font-medium w-28'>默认值</td><td className='py-2'>开启</td></tr>
                        <tr><td className='py-2 pr-4 font-medium'>说明</td><td className='py-2'>开启后，同步时保留数据库中的节点名称，不使用外部订阅的节点名称。适合已手动修改过节点名称的场景。</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className='border-t pt-4'>
                  <h4 className='text-sm font-medium mb-1'>缓存过期时间（分钟）</h4>
                  <div className='overflow-x-auto'>
                    <table className='w-full text-sm'>
                      <tbody>
                        <tr className='border-b'><td className='py-2 pr-4 font-medium w-28'>默认值</td><td className='py-2'>0（每次都重新拉取）</td></tr>
                        <tr><td className='py-2 pr-4 font-medium'>说明</td><td className='py-2'>设置为 0 表示每次获取订阅时都重新拉取外部订阅。设置大于 0 时，只有距离上次拉取超过设定的分钟数才会重新拉取。建议设置为 30-60 分钟以平衡数据新鲜度和响应速度。</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 功能开关 */}
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>功能开关</h2>
        <p className='text-muted-foreground mb-4'>
          管理系统各功能模块的启用状态。
        </p>

        <div className='space-y-6'>
          {/* 静默模式 */}
          <Card className='border-orange-200 dark:border-orange-900'>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-2'>静默模式</h3>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm'>
                  <tbody>
                    <tr className='border-b'><td className='py-2 pr-4 font-medium w-28'>类型</td><td className='py-2'>开关</td></tr>
                    <tr className='border-b'><td className='py-2 pr-4 font-medium'>默认值</td><td className='py-2'>关闭</td></tr>
                    <tr><td className='py-2 pr-4 font-medium'>说明</td><td className='py-2'>开启后，妙妙屋X 服务对所有请求返回 404 页面，隐藏面板的真实存在。当用户通过订阅链接获取一次订阅后，服务器恢复正常访问，恢复时长由「恢复访问时长」设置决定。超时后重新进入静默状态。</td></tr>
                  </tbody>
                </table>
              </div>
              <div className='flex items-start gap-2 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 mt-4'>
                <AlertTriangle className='size-4 text-amber-500 mt-0.5 shrink-0' />
                <p className='text-sm text-amber-700 dark:text-amber-400'>静默模式开启后你将无法直接访问面板，只有获取一次订阅才能临时恢复。请确保已正确配置好订阅链接后再开启。</p>
              </div>

              <div className='bg-muted/30 rounded-lg p-4 border mt-4'>
                <h4 className='text-sm font-medium mb-1'>恢复访问时长（分钟）</h4>
                <div className='overflow-x-auto'>
                  <table className='w-full text-sm'>
                    <tbody>
                      <tr className='border-b'><td className='py-2 pr-4 font-medium w-28'>默认值</td><td className='py-2'>15 分钟</td></tr>
                      <tr className='border-b'><td className='py-2 pr-4 font-medium'>范围</td><td className='py-2'>1 ~ 1440 分钟</td></tr>
                      <tr><td className='py-2 pr-4 font-medium'>说明</td><td className='py-2'>用户通过订阅链接获取订阅后，服务器恢复正常访问的持续时长。超时后重新进入 404 静默状态。</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 短链接 */}
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-2'>启用短链接</h3>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm'>
                  <tbody>
                    <tr className='border-b'><td className='py-2 pr-4 font-medium w-28'>类型</td><td className='py-2'>开关</td></tr>
                    <tr className='border-b'><td className='py-2 pr-4 font-medium'>默认值</td><td className='py-2'>关闭</td></tr>
                    <tr><td className='py-2 pr-4 font-medium'>说明</td><td className='py-2'>开启后，订阅链接页面会额外显示一个 6 位字符的短链接。短链接更便于分享和输入。用户可在个人设置页面重置短链接。</td></tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* 客户端兼容模式 */}
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-2'>客户端兼容模式</h3>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm'>
                  <tbody>
                    <tr className='border-b'><td className='py-2 pr-4 font-medium w-28'>类型</td><td className='py-2'>开关</td></tr>
                    <tr className='border-b'><td className='py-2 pr-4 font-medium'>默认值</td><td className='py-2'>关闭</td></tr>
                    <tr><td className='py-2 pr-4 font-medium'>说明</td><td className='py-2'>开启后，生成订阅时会自动过滤目标客户端不支持的节点类型（如 Clash 不支持的 WireGuard 节点），仅记录日志而不报错。关闭时遇到不兼容节点会输出错误信息。</td></tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* 覆写脚本 */}
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-2'>覆写脚本</h3>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm'>
                  <tbody>
                    <tr className='border-b'><td className='py-2 pr-4 font-medium w-28'>类型</td><td className='py-2'>开关</td></tr>
                    <tr className='border-b'><td className='py-2 pr-4 font-medium'>默认值</td><td className='py-2'>关闭</td></tr>
                    <tr><td className='py-2 pr-4 font-medium'>说明</td><td className='py-2'>开启后，覆写管理页面会显示脚本功能入口。可使用 JavaScript 脚本对订阅配置进行二次修改，例如修改节点属性、添加自定义字段、调整代理组结构等。适合有高级定制需求的用户。</td></tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* 探针服务器绑定 */}
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-2'>探针服务器绑定</h3>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm'>
                  <tbody>
                    <tr className='border-b'><td className='py-2 pr-4 font-medium w-28'>类型</td><td className='py-2'>开关</td></tr>
                    <tr className='border-b'><td className='py-2 pr-4 font-medium'>默认值</td><td className='py-2'>关闭</td></tr>
                    <tr><td className='py-2 pr-4 font-medium'>说明</td><td className='py-2'>开启后，节点管理列表中每个节点会显示探针绑定按钮，可将节点绑定到特定的探针服务器。绑定后，流量统计只汇总该节点绑定的探针数据，实现更精确的流量归属统计。</td></tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* 启用代理集合 */}
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-2'>启用代理集合</h3>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm'>
                  <tbody>
                    <tr className='border-b'><td className='py-2 pr-4 font-medium w-28'>类型</td><td className='py-2'>开关</td></tr>
                    <tr className='border-b'><td className='py-2 pr-4 font-medium'>默认值</td><td className='py-2'>关闭</td></tr>
                    <tr><td className='py-2 pr-4 font-medium'>说明</td><td className='py-2'>代理集合（Proxy Provider）允许从外部订阅动态加载节点。开启后可在订阅文件页面配置代理集合，并在编辑代理组时将代理集合拖入代理组。适合需要混合使用本地节点和外部机场节点的场景。</td></tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* 模板版本 */}
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-2'>模板版本</h3>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm'>
                  <tbody>
                    <tr className='border-b'><td className='py-2 pr-4 font-medium w-28'>类型</td><td className='py-2'>单选</td></tr>
                    <tr className='border-b'><td className='py-2 pr-4 font-medium'>默认值</td><td className='py-2'>v2（通用后端）</td></tr>
                    <tr><td className='py-2 pr-4 font-medium'>说明</td><td className='py-2'>选择订阅生成时使用的模板引擎版本。不同版本的模板语法和功能不同。</td></tr>
                  </tbody>
                </table>
              </div>
              <div className='overflow-x-auto mt-4'>
                <table className='w-full text-sm'>
                  <thead><tr className='border-b'><th className='text-left py-2 pr-4 font-medium'>版本</th><th className='text-left py-2 pr-4 font-medium'>名称</th><th className='text-left py-2 font-medium'>说明</th></tr></thead>
                  <tbody>
                    <tr className='border-b'>
                      <td className='py-2 pr-4'><code className='bg-muted px-1.5 py-0.5 rounded text-xs'>v1</code></td>
                      <td className='py-2 pr-4'>旧版</td>
                      <td className='py-2'>使用 <code className='bg-muted px-1.5 py-0.5 rounded text-xs'>rule_templates</code> 目录下的文件模板，直接编辑 YAML 文件</td>
                    </tr>
                    <tr className='border-b'>
                      <td className='py-2 pr-4'><code className='bg-muted px-1.5 py-0.5 rounded text-xs'>v2</code></td>
                      <td className='py-2 pr-4'>通用后端</td>
                      <td className='py-2'>使用数据库存储模板，支持网页端可视化管理，兼容通用后端模板格式</td>
                    </tr>
                    <tr>
                      <td className='py-2 pr-4'><code className='bg-muted px-1.5 py-0.5 rounded text-xs'>v3</code></td>
                      <td className='py-2 pr-4'>新版</td>
                      <td className='py-2'>新版模板系统，类 mihomo 配置风格，支持可视化编辑代理组和规则</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* 订阅响应头流量信息 */}
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-2'>订阅响应头流量信息</h3>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm'>
                  <tbody>
                    <tr className='border-b'><td className='py-2 pr-4 font-medium w-28'>类型</td><td className='py-2'>开关</td></tr>
                    <tr className='border-b'><td className='py-2 pr-4 font-medium'>默认值</td><td className='py-2'>开启</td></tr>
                    <tr><td className='py-2 pr-4 font-medium'>说明</td><td className='py-2'>开启后，用户获取订阅时系统会读取探针和外部订阅的流量数据，并在 HTTP 响应头中写入 <code className='bg-muted px-1.5 py-0.5 rounded text-xs'>subscription-userinfo</code> 信息。客户端（如 Clash、Stash）会据此显示流量用量和到期时间。关闭后跳过流量数据读取，不写入响应头。</td></tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* 订阅序列化格式 */}
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-2'>订阅序列化格式</h3>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm'>
                  <tbody>
                    <tr className='border-b'><td className='py-2 pr-4 font-medium w-28'>类型</td><td className='py-2'>单选</td></tr>
                    <tr className='border-b'><td className='py-2 pr-4 font-medium'>默认值</td><td className='py-2'>YAML</td></tr>
                    <tr className='border-b'><td className='py-2 pr-4 font-medium'>可选值</td><td className='py-2'><code className='bg-muted px-1.5 py-0.5 rounded text-xs'>YAML</code> / <code className='bg-muted px-1.5 py-0.5 rounded text-xs'>JSON</code></td></tr>
                    <tr><td className='py-2 pr-4 font-medium'>说明</td><td className='py-2'>选择 Clash 订阅的输出格式。默认 YAML 格式，选择 JSON 后 Clash 订阅将以 JSON 格式输出。此设置仅影响 Clash 格式的订阅，不影响其他客户端格式（Surge、Sing-Box、Shadowrocket 等）。</td></tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* 订阅信息节点 */}
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-2'>订阅信息节点</h3>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm'>
                  <tbody>
                    <tr className='border-b'><td className='py-2 pr-4 font-medium w-28'>类型</td><td className='py-2'>开关</td></tr>
                    <tr className='border-b'><td className='py-2 pr-4 font-medium'>默认值</td><td className='py-2'>关闭</td></tr>
                    <tr><td className='py-2 pr-4 font-medium'>说明</td><td className='py-2'>开启后，订阅输出时会在节点列表顶部额外添加两个信息节点，分别显示过期时间和剩余流量。这些节点并非真实代理节点，仅用于在客户端节点列表中直观展示订阅信息。</td></tr>
                  </tbody>
                </table>
              </div>

              <p className='text-sm text-muted-foreground mt-4 mb-3'>开启后可自定义信息节点的前缀文本：</p>
              <div className='bg-muted/30 rounded-lg p-4 border space-y-3'>
                <div>
                  <h4 className='text-sm font-medium mb-1'>过期时间前缀</h4>
                  <div className='overflow-x-auto'>
                    <table className='w-full text-sm'>
                      <tbody>
                        <tr className='border-b'><td className='py-2 pr-4 font-medium w-28'>默认值</td><td className='py-2'>📅过期时间</td></tr>
                        <tr><td className='py-2 pr-4 font-medium'>示例输出</td><td className='py-2'><code className='bg-muted px-1.5 py-0.5 rounded text-xs'>📅过期时间：2025-12-31</code></td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className='border-t pt-3'>
                  <h4 className='text-sm font-medium mb-1'>剩余流量前缀</h4>
                  <div className='overflow-x-auto'>
                    <table className='w-full text-sm'>
                      <tbody>
                        <tr className='border-b'><td className='py-2 pr-4 font-medium w-28'>默认值</td><td className='py-2'>⌛剩余流量</td></tr>
                        <tr><td className='py-2 pr-4 font-medium'>示例输出</td><td className='py-2'><code className='bg-muted px-1.5 py-0.5 rounded text-xs'>⌛剩余流量：156.8 GB</code></td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 通知推送配置 */}
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>通知推送配置</h2>
        <p className='text-muted-foreground mb-4'>
          通过 Telegram Bot 推送系统关键事件通知。
        </p>

        <div className='space-y-6'>
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-2'>启用通知推送</h3>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm'>
                  <tbody>
                    <tr className='border-b'><td className='py-2 pr-4 font-medium w-28'>类型</td><td className='py-2'>开关</td></tr>
                    <tr className='border-b'><td className='py-2 pr-4 font-medium'>默认值</td><td className='py-2'>关闭</td></tr>
                    <tr><td className='py-2 pr-4 font-medium'>说明</td><td className='py-2'>开启后，系统会通过 Telegram Bot 发送事件通知。需要先在功能开关卡片中的通知推送旁点击齿轮图标配置 Bot Token 和 Chat ID。</td></tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-2'>Telegram Bot 配置</h3>
              <p className='text-sm text-muted-foreground mb-4'>点击通知推送开关旁的齿轮图标展开配置面板。</p>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm'>
                  <thead><tr className='border-b'><th className='text-left py-2 pr-4 font-medium'>配置项</th><th className='text-left py-2 pr-4 font-medium'>格式</th><th className='text-left py-2 font-medium'>说明</th></tr></thead>
                  <tbody>
                    <tr className='border-b'>
                      <td className='py-2 pr-4'>Bot Token</td>
                      <td className='py-2 pr-4'><code className='bg-muted px-1.5 py-0.5 rounded text-xs'>123456:ABC-DEF...</code></td>
                      <td className='py-2'>从 @BotFather 创建 Bot 后获取的 API Token</td>
                    </tr>
                    <tr>
                      <td className='py-2 pr-4'>Chat ID</td>
                      <td className='py-2 pr-4'><code className='bg-muted px-1.5 py-0.5 rounded text-xs'>-1001234567890</code></td>
                      <td className='py-2'>接收通知的 Telegram 聊天 ID，可以是个人、群组或频道</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='flex items-start gap-2 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 mt-4'>
                <Info className='size-4 text-blue-500 mt-0.5 shrink-0' />
                <p className='text-sm text-blue-700 dark:text-blue-400'>配置完成后可点击「发送测试通知」按钮验证配置是否正确。</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-2'>通知事件</h3>
              <p className='text-sm text-muted-foreground mb-4'>可独立开关每种通知事件：</p>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm'>
                  <thead><tr className='border-b'><th className='text-left py-2 pr-4 font-medium'>事件</th><th className='text-left py-2 pr-4 font-medium'>默认</th><th className='text-left py-2 font-medium'>说明</th></tr></thead>
                  <tbody>
                    <tr className='border-b'>
                      <td className='py-2 pr-4'>订阅获取通知</td>
                      <td className='py-2 pr-4'>开启</td>
                      <td className='py-2'>用户通过订阅链接获取订阅时发送通知，包含用户名、客户端类型和 IP 地址</td>
                    </tr>
                    <tr className='border-b'>
                      <td className='py-2 pr-4'>登录通知</td>
                      <td className='py-2 pr-4'>开启</td>
                      <td className='py-2'>用户登录面板时发送通知，包含用户名和 IP 地址</td>
                    </tr>
                    <tr className='border-b'>
                      <td className='py-2 pr-4'>IP 封禁通知</td>
                      <td className='py-2 pr-4'>开启</td>
                      <td className='py-2'>IP 因多次错误请求被系统自动封禁时发送通知</td>
                    </tr>
                    <tr className='border-b'>
                      <td className='py-2 pr-4'>静默模式通知</td>
                      <td className='py-2 pr-4'>开启</td>
                      <td className='py-2'>静默模式状态变更（进入/退出 404 状态）时发送通知</td>
                    </tr>
                    <tr className='border-b'>
                      <td className='py-2 pr-4'>订阅到期通知</td>
                      <td className='py-2 pr-4'>开启</td>
                      <td className='py-2'>用户订阅即将到期时发送提醒通知</td>
                    </tr>
                    <tr>
                      <td className='py-2 pr-4'>每日流量通知</td>
                      <td className='py-2 pr-4'>关闭</td>
                      <td className='py-2'>每日定时发送流量统计报告。开启后可设置发送时间（默认 08:00），格式为 24 小时制 HH:MM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 代理组配置同步 */}
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>代理组配置同步</h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='overflow-x-auto'>
              <table className='w-full text-sm'>
                <tbody>
                  <tr className='border-b'><td className='py-2 pr-4 font-medium w-28'>说明</td><td className='py-2'>从远程地址同步最新的预设代理组配置。代理组配置包含常用规则分类和对应的 rule-providers 设置。同步后将更新生成订阅页面的规则选择器和预置代理组。</td></tr>
                  <tr className='border-b'><td className='py-2 pr-4 font-medium'>远程配置地址</td><td className='py-2'>可自定义远程配置的 URL 地址。留空使用系统默认地址或环境变量配置的地址。</td></tr>
                  <tr><td className='py-2 pr-4 font-medium'>操作</td><td className='py-2'>点击「同步代理组配置」按钮手动触发同步。同步成功后页面会显示确认提示。</td></tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Master 端配置文件 */}
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>Master 端配置文件</h2>
        <p className='text-muted-foreground mb-4'>
          Master 端（主控）的服务配置通过配置文件或环境变量进行设置，与 Web UI 中的系统设置相互独立。
        </p>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto'>
              <pre>{`# config.yaml
port: 12889
database_path: data/traffic.db
jwt_secret: your-secret-key
log_level: info
allowed_origins: "*"`}</pre>
            </div>
            <p className='mt-4 text-sm text-muted-foreground'>
              配置文件通过 <code className='bg-muted px-1.5 py-0.5 rounded'>-c config.yaml</code> 指定，也可通过环境变量覆盖。
            </p>
          </CardContent>
        </Card>

        <div className='overflow-x-auto mt-6'>
          <table className='w-full text-sm'>
            <thead><tr className='border-b'><th className='text-left py-3 px-4'>配置</th><th className='text-left py-3 px-4'>说明</th><th className='text-left py-3 px-4'>默认值</th></tr></thead>
            <tbody>
              <tr className='border-b'><td className='py-3 px-4 font-mono text-xs'>port</td><td className='py-3 px-4'>后端 HTTP 服务监听端口</td><td className='py-3 px-4'>12889</td></tr>
              <tr className='border-b'><td className='py-3 px-4 font-mono text-xs'>database_path</td><td className='py-3 px-4'>SQLite 数据库文件路径</td><td className='py-3 px-4'>data/traffic.db</td></tr>
              <tr className='border-b'><td className='py-3 px-4 font-mono text-xs'>jwt_secret</td><td className='py-3 px-4'>JWT 签名密钥，用于用户认证</td><td className='py-3 px-4'>-</td></tr>
              <tr className='border-b'><td className='py-3 px-4 font-mono text-xs'>log_level</td><td className='py-3 px-4'>系统日志级别（debug / info / warn / error）</td><td className='py-3 px-4'>info</td></tr>
              <tr><td className='py-3 px-4 font-mono text-xs'>allowed_origins</td><td className='py-3 px-4'>CORS 允许的来源，<code className='bg-muted px-1.5 py-0.5 rounded text-xs'>*</code> 表示允许所有</td><td className='py-3 px-4'>*</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Master 端环境变量 */}
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>Master 端环境变量</h2>
        <p className='text-muted-foreground mb-4'>环境变量会覆盖 config.yaml 中的同名配置：</p>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead><tr className='border-b'><th className='text-left py-3 px-4'>变量</th><th className='text-left py-3 px-4'>说明</th></tr></thead>
            <tbody>
              <tr className='border-b'><td className='py-3 px-4 font-mono text-xs'>PORT</td><td className='py-3 px-4'>服务端口</td></tr>
              <tr className='border-b'><td className='py-3 px-4 font-mono text-xs'>DATABASE_PATH</td><td className='py-3 px-4'>SQLite 数据库路径</td></tr>
              <tr className='border-b'><td className='py-3 px-4 font-mono text-xs'>JWT_SECRET</td><td className='py-3 px-4'>JWT 签名密钥</td></tr>
              <tr className='border-b'><td className='py-3 px-4 font-mono text-xs'>LOG_LEVEL</td><td className='py-3 px-4'>日志级别</td></tr>
              <tr><td className='py-3 px-4 font-mono text-xs'>ALLOWED_ORIGINS</td><td className='py-3 px-4'>CORS 允许的来源</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Agent 端连接配置 */}
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>Agent 端连接配置</h2>
        <p className='text-muted-foreground mb-4'>
          Agent 部署在远程代理服务器上，需要配置与 Master 的连接方式。
        </p>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto'>
              <pre>{`# config.yaml (Agent 端)
master_url: "https://your-master-domain.com"
token: "your-server-token"
listen_port: "23889"
connection_mode: "auto"
traffic_report_interval: "1m"
speed_report_interval: "3s"
restart_method: "auto"
restart_command: ""`}</pre>
            </div>
          </CardContent>
        </Card>

        <div className='overflow-x-auto mt-6'>
          <table className='w-full text-sm'>
            <thead><tr className='border-b'><th className='text-left py-3 px-4'>配置</th><th className='text-left py-3 px-4'>说明</th><th className='text-left py-3 px-4'>默认值</th></tr></thead>
            <tbody>
              <tr className='border-b'><td className='py-3 px-4 font-mono text-xs'>master_url</td><td className='py-3 px-4'>Master 主控服务器地址</td><td className='py-3 px-4'>-</td></tr>
              <tr className='border-b'><td className='py-3 px-4 font-mono text-xs'>token</td><td className='py-3 px-4'>服务器认证 Token</td><td className='py-3 px-4'>-</td></tr>
              <tr className='border-b'><td className='py-3 px-4 font-mono text-xs'>listen_port</td><td className='py-3 px-4'>Agent API 监听端口</td><td className='py-3 px-4'>23889</td></tr>
              <tr className='border-b'><td className='py-3 px-4 font-mono text-xs'>connection_mode</td><td className='py-3 px-4'>连接模式（见下方说明）</td><td className='py-3 px-4'>auto</td></tr>
              <tr className='border-b'><td className='py-3 px-4 font-mono text-xs'>traffic_report_interval</td><td className='py-3 px-4'>流量数据上报间隔</td><td className='py-3 px-4'>1m</td></tr>
              <tr className='border-b'><td className='py-3 px-4 font-mono text-xs'>speed_report_interval</td><td className='py-3 px-4'>网速数据上报间隔</td><td className='py-3 px-4'>3s</td></tr>
              <tr className='border-b'><td className='py-3 px-4 font-mono text-xs'>restart_method</td><td className='py-3 px-4'>Xray 重启方式（auto / systemctl / 自定义命令）</td><td className='py-3 px-4'>auto</td></tr>
              <tr><td className='py-3 px-4 font-mono text-xs'>restart_command</td><td className='py-3 px-4'>自定义重启命令（restart_method 非 auto 时生效）</td><td className='py-3 px-4'>-</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 连接模式 */}
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>连接模式</h2>
        <p className='text-muted-foreground mb-4'>
          Agent 与 Master 之间支持多种通信方式，可根据网络环境选择最合适的模式。
        </p>
        <Card>
          <CardContent className='pt-6'>
            <div className='space-y-4'>
              <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-blue-500'>
                <h4 className='font-semibold text-sm mb-2'>auto（推荐）</h4>
                <p className='text-xs text-muted-foreground'>
                  自动选择最佳连接方式。优先使用 WebSocket，失败后降级到 HTTP，再降级到 Pull 模式。支持指数退避自动重连。
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-green-500'>
                <h4 className='font-semibold text-sm mb-2'>websocket</h4>
                <p className='text-xs text-muted-foreground'>
                  全双工 WebSocket 连接，支持实时双向通信。心跳间隔 30 秒，空闲超时 5 分钟。适合网络稳定的环境。
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-orange-500'>
                <h4 className='font-semibold text-sm mb-2'>http</h4>
                <p className='text-xs text-muted-foreground'>
                  通过 HTTP POST 主动推送数据到 Master。适用于无法建立长连接的网络环境。
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-purple-500'>
                <h4 className='font-semibold text-sm mb-2'>pull</h4>
                <p className='text-xs text-muted-foreground'>
                  被动模式，由 Master 主动拉取 Agent 数据。Agent 仅暴露本地 API，无需主动连接 Master。适用于 Agent 在内网或无法主动出站的场景。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Agent 端环境变量 */}
      <section>
        <h2 className='text-2xl font-bold mb-4'>Agent 端环境变量</h2>
        <p className='text-muted-foreground mb-4'>
          环境变量会覆盖 config.yaml 中的同名配置：
        </p>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead><tr className='border-b'><th className='text-left py-3 px-4'>变量</th><th className='text-left py-3 px-4'>说明</th></tr></thead>
            <tbody>
              <tr className='border-b'><td className='py-3 px-4 font-mono text-xs'>MMWX_MASTER_URL</td><td className='py-3 px-4'>Master 主控地址</td></tr>
              <tr className='border-b'><td className='py-3 px-4 font-mono text-xs'>MMWX_TOKEN</td><td className='py-3 px-4'>服务器认证 Token</td></tr>
              <tr className='border-b'><td className='py-3 px-4 font-mono text-xs'>MMWX_CONNECTION_MODE</td><td className='py-3 px-4'>连接模式（auto / websocket / http / pull）</td></tr>
              <tr className='border-b'><td className='py-3 px-4 font-mono text-xs'>MMWX_LISTEN_PORT</td><td className='py-3 px-4'>Agent API 监听端口</td></tr>
              <tr className='border-b'><td className='py-3 px-4 font-mono text-xs'>MMWX_XRAY_CONFIG</td><td className='py-3 px-4'>Xray 配置文件路径（config.json）</td></tr>
              <tr className='border-b'><td className='py-3 px-4 font-mono text-xs'>MMWX_XRAY_CONFDIR</td><td className='py-3 px-4'>Xray 配置目录路径（多文件模式）</td></tr>
              <tr className='border-b'><td className='py-3 px-4 font-mono text-xs'>MMWX_TRAFFIC_INTERVAL</td><td className='py-3 px-4'>流量上报间隔（如 1m、30s）</td></tr>
              <tr className='border-b'><td className='py-3 px-4 font-mono text-xs'>MMWX_SPEED_INTERVAL</td><td className='py-3 px-4'>网速上报间隔（如 3s、5s）</td></tr>
              <tr className='border-b'><td className='py-3 px-4 font-mono text-xs'>MMWX_RESTART_METHOD</td><td className='py-3 px-4'>Xray 重启方式</td></tr>
              <tr><td className='py-3 px-4 font-mono text-xs'>MMWX_RESTART_COMMAND</td><td className='py-3 px-4'>自定义 Xray 重启命令</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </XDocLayout>
  )
}
