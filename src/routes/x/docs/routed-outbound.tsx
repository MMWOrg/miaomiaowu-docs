import { createFileRoute } from '@tanstack/react-router'
import { XDocLayout } from '@/components/docs/x-doc-layout'
import { Card, CardContent } from '@/components/ui/card'

export const Route = createFileRoute('/x/docs/routed-outbound')({
  component: RoutedOutboundPage,
})

function RoutedOutboundPage() {
  return (
    <XDocLayout
      title='路由出站'
      description='用户级路由出站：在同一个入站上实现"不同用户走不同出口"的精细化分流'
    >
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>出站的两种配置方式</h2>
        <p className='text-muted-foreground mb-4'>
          在节点管理页面，每个节点行右侧的 <code className='bg-muted px-1.5 py-0.5 rounded'>🛣</code> 按钮可以打开「新增落地节点」对话框。
          对话框顶部「作用范围」提供两种完全不同的能力：
        </p>
        <Card className='mb-4 border-amber-200 dark:border-amber-800'>
          <CardContent className='pt-6 text-sm text-muted-foreground space-y-2'>
            <p>
              <strong className='text-foreground'>使用前提（普通用户）</strong>：路由出站对普通用户是一个<strong>需要管理员开启的功能</strong>。
              管理员在「系统设置 → 妙妙屋功能设置」找到「允许用户创建路由出站」开关。
              开关右侧可配置 <strong>数量上限</strong>（默认 2）和 <strong>每日操作次数</strong>（默认 5），未开启时两个输入框都被禁用。
            </p>
            <p>未开启时，普通用户的节点行不会出现 🛣 按钮；如果通过其他途径调用接口：</p>
            <ul className='ml-4 space-y-1'>
              <li>- 功能未启用 → 后端返回 <code className='bg-muted px-1 py-0.5 rounded mx-1'>403</code>「路由出站功能未开放,请联系管理员开启」</li>
              <li>- 数量达上限 → <code className='bg-muted px-1 py-0.5 rounded mx-1'>403</code>「已达到路由出站数量上限 (N/M)」</li>
              <li>- 今日操作次数达上限 → <code className='bg-muted px-1 py-0.5 rounded mx-1'>429</code>「今日操作次数已达上限 (N/M),请明天再试」</li>
            </ul>
          </CardContent>
        </Card>
        <p className='text-muted-foreground mb-4'>对话框「作用范围」两种模式：</p>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead>
              <tr className='border-b'>
                <th className='text-left py-3 px-4'>作用范围</th>
                <th className='text-left py-3 px-4'>影响</th>
                <th className='text-left py-3 px-4'>是否新增节点</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b'>
                <td className='py-3 px-4 font-medium'>整个节点</td>
                <td className='py-3 px-4'>源 inbound 的全部用户共享同一出站</td>
                <td className='py-3 px-4'>否，仅改源节点出站</td>
              </tr>
              <tr>
                <td className='py-3 px-4 font-medium'>按用户（路由出站）</td>
                <td className='py-3 px-4'>仅套餐里勾选该子节点的用户走此出口</td>
                <td className='py-3 px-4'>是，生成一个路由出站子节点</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className='text-sm text-muted-foreground mt-4'>
          本文档重点讲解「按用户」模式，即 <strong>路由出站</strong>。
        </p>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>整个节点（节点级）</h2>
        <Card>
          <CardContent className='pt-6 text-sm text-muted-foreground space-y-2'>
            <p>源节点的入站流量整体路由到一个出口，该 inbound 下所有用户共享同一出站。</p>
            <p>底层动作（写入源服务器 xray 配置）：</p>
            <ul className='space-y-1 ml-4'>
              <li>1. 加 outbound，tag = <code className='bg-muted px-1.5 py-0.5 rounded'>landing-&lt;源 inbound tag&gt;-&lt;时间戳&gt;</code></li>
              <li>2. 加 routing 规则：<code className='bg-muted px-1.5 py-0.5 rounded'>{`{inboundTag: [源 inbound], outboundTag: 上一步 tag}`}</code></li>
            </ul>
            <p className='mt-3'>
              <strong>适用场景</strong>：所有用户都该走同一出口，例如"前端入口机 → 后端落地机"统一中转、统一出口接管。
            </p>
          </CardContent>
        </Card>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>路由出站解决了什么问题？</h2>
        <p className='text-muted-foreground mb-4'>
          在没有「用户」维度的 routing 系统里，一个
          <code className='bg-muted px-1.5 py-0.5 rounded mx-1'>inboundTag → outboundTag</code>
          的关系只能有一个版本，<strong>无法实现"不同用户走不同出口"</strong>。
        </p>

        <p className='text-muted-foreground mb-3'>下面用一个具体例子说明。本文档统一使用以下三个节点：</p>
        <div className='overflow-x-auto mb-6'>
          <table className='w-full text-sm'>
            <thead>
              <tr className='border-b'>
                <th className='text-left py-3 px-4'>类型</th>
                <th className='text-left py-3 px-4'>节点名</th>
                <th className='text-left py-3 px-4'>地址 / 备注</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b'>
                <td className='py-3 px-4'>落地</td>
                <td className='py-3 px-4 font-mono text-xs'>HKT</td>
                <td className='py-3 px-4 font-mono text-xs'>hkt.example.com</td>
              </tr>
              <tr className='border-b'>
                <td className='py-3 px-4'>落地</td>
                <td className='py-3 px-4 font-mono text-xs'>HINET</td>
                <td className='py-3 px-4 font-mono text-xs'>hinet.example.com</td>
              </tr>
              <tr>
                <td className='py-3 px-4'>中转</td>
                <td className='py-3 px-4 font-mono text-xs'>HK直连</td>
                <td className='py-3 px-4 font-mono text-xs'>hkdirect.example.com（vless reality vision，443）</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Card>
          <CardContent className='pt-6 text-sm text-muted-foreground space-y-3'>
            <p>
              假设管理员希望「访问 AI 服务的流量走 HINET 出口」，写一条 routing 规则：
            </p>
            <pre className='bg-muted/50 border rounded-md p-3 text-xs overflow-x-auto'>{`{
  "type": "field",
  "domain": ["geosite:openai"],
  "inboundTag": ["HK直连"],
  "outboundTag": "HINET"
}`}</pre>
            <p>
              但用户 A 有自己的 Seednet 落地机，希望「<strong>自己</strong>的 AI 流量走 Seednet」。
              传统做法只能再加一条同 inbound 不同 outbound 的规则——xray routing 按顺序匹配，
              <strong>第一条命中即停止</strong>，后加的永远不生效。
            </p>
            <p className='font-medium text-foreground'>
              根本问题：没有任何手段区分这两条规则要应用到"谁的流量"。
            </p>
          </CardContent>
        </Card>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>路由出站的做法</h2>
        <Card>
          <CardContent className='pt-6 text-sm text-muted-foreground space-y-3'>
            <p>
              妙妙屋X 为每个用户在父 inbound 里注册一个<strong>专属 client（独立 email）</strong>，
              对应的 routing 规则带上
              <code className='bg-muted px-1.5 py-0.5 rounded mx-1'>user</code>
              字段限定。不同用户的 email 不同，所以可以并存多条「同 inbound、不同 outbound」的规则。
            </p>
            <div className='bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-md p-3 text-amber-700 dark:text-amber-300 text-xs mt-2'>
              ⚠ 当前路由出站只能由<strong>管理员</strong>创建（接口
              <code className='bg-amber-100 dark:bg-amber-900 px-1 py-0.5 rounded mx-1'>POST /api/admin/routed-outbound</code>）。
              文档中"用户 A 走 Seednet"是指<strong>管理员为用户 A 创建一个路由出站子节点</strong>，
              并把 A 在套餐里分配到该节点，而不是用户自助配置 routing。
            </div>
          </CardContent>
        </Card>

        <h3 className='text-lg font-semibold mt-6 mb-3'>具体步骤</h3>
        <Card>
          <CardContent className='pt-6 text-sm text-muted-foreground space-y-2'>
            <ol className='space-y-2 ml-4 list-decimal'>
              <li>在节点管理页面，找到中转节点 <strong>HK直连</strong>，点击行尾的 🛣 按钮</li>
              <li>「作用范围」选择 <strong>按用户（路由出站）</strong></li>
              <li>填写 <strong>Label</strong>（仅允许 <code className='bg-muted px-1.5 py-0.5 rounded'>[a-zA-Z0-9-]</code>，长度 2-32），例如 <code className='bg-muted px-1.5 py-0.5 rounded'>rout-hinet</code></li>
              <li>选择目标落地节点（如 HINET），点击「创建路由出站」</li>
              <li>系统在节点列表新增子节点 <code className='bg-muted px-1.5 py-0.5 rounded'>HK直连-rout-hinet</code>，<code className='bg-muted px-1.5 py-0.5 rounded'>node_type = routed</code></li>
              <li>在套餐管理中勾选这个子节点，分配给指定用户即可生效</li>
            </ol>
          </CardContent>
        </Card>

        <h3 className='text-lg font-semibold mt-6 mb-3'>生成的 routing 规则示例</h3>
        <Card>
          <CardContent className='pt-6 text-sm text-muted-foreground space-y-3'>
            <p>管理员创建 <code className='bg-muted px-1.5 py-0.5 rounded'>HK直连-rout-hinet</code>（落地 HINET）和 <code className='bg-muted px-1.5 py-0.5 rounded'>HK直连-rout-seednet</code>（落地 Seednet）两个路由出站子节点后：</p>
            <pre className='bg-muted/50 border rounded-md p-3 text-xs overflow-x-auto'>{`// 管理员占位规则(尚无用户分配时也存在,user 是占位 admin email)
{
  "type": "field",
  "user": ["_admin__a1b2c3__hinet"],
  "domain": ["geosite:openai"],
  "inboundTag": ["HK直连"],
  "outboundTag": "HINET"
}

// 用户 A 被套餐分配到 HK直连-rout-seednet 后,
// A 的子账号 email 会被自动加进这条规则的 user 列表
{
  "type": "field",
  "user": ["userA__d4e5f6__seednet"],
  "domain": ["geosite:openai"],
  "inboundTag": ["HK直连"],
  "outboundTag": "Seednet"
}`}</pre>
            <p className='text-xs'>
              email 实际格式：<code className='bg-muted px-1.5 py-0.5 rounded'>&lt;username&gt;__&lt;short&gt;__&lt;label&gt;</code>，
              管理员占位为 <code className='bg-muted px-1.5 py-0.5 rounded'>_admin__&lt;short&gt;__&lt;label&gt;</code>。
              <code className='bg-muted px-1.5 py-0.5 rounded mx-1'>short</code> 是创建路由出站时随机生成的标识，
              用于在同 label 多次创建时区分。
            </p>
          </CardContent>
        </Card>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>普通用户视角（按用户私有路由出站）</h2>
        <p className='text-muted-foreground mb-4'>
          管理员在「系统设置」开启「允许用户创建路由出站」后，普通用户可以为自己创建专属出口，<strong>不依赖套餐分配，创建即生效</strong>。
          与管理员路径的差异：跳过 admin 占位，<code className='bg-muted px-1.5 py-0.5 rounded mx-1'>rule.user</code> 创建时直接是用户本人的子账号 email；节点 <code className='bg-muted px-1.5 py-0.5 rounded mx-1'>routed_owner = 'user'</code>，仅创建者可见可删。
        </p>

        <h3 className='text-lg font-semibold mb-3'>开关与配额</h3>
        <Card className='mb-4'>
          <CardContent className='pt-6 text-sm text-muted-foreground space-y-2'>
            <p>位置：管理员账号登录 → 「系统设置」 → 「妙妙屋功能设置」卡片 → 「允许用户创建路由出站」一行。</p>
            <ul className='space-y-1 ml-4'>
              <li>- <strong>关闭（默认）</strong>：普通用户节点行不显示 🛣 按钮；接口 POST 返回 403。</li>
              <li>- <strong>开启</strong>：右侧 Switch 打开后，「数量」「每日次数」两个输入框启用。</li>
              <li>- <strong>数量</strong>：当前持有的路由出站上限。默认 2；可调到任意 ≥1 的整数。<em>不支持"不限"</em>（每条路由出站都会在 xray 上新增 outbound + routing rule，无限制可能导致配置膨胀）。</li>
              <li>- <strong>每日次数</strong>：今日内 create + delete 操作次数总和上限。默认 5；可调到任意 ≥1 的整数。<em>不支持"不限"</em>。<br />
                <span className='text-xs'>设计原因：xray routing 不支持 gRPC 动态加载，每次新增 / 删除路由出站后 agent 都会自动重启 xray。频繁触发重启会影响其他用户连接，所以"按操作次数限速"。</span>
              </li>
              <li>- <strong>计数窗口</strong>：按主控服务器本地时区当日 0:00 起算，到 24:00 重置；不滚动。</li>
              <li>- <strong>修改即生效</strong>：Switch 切换 / 输入框失焦时立即保存到 system_settings 表。</li>
            </ul>
          </CardContent>
        </Card>

        <h3 className='text-lg font-semibold mb-3'>创建步骤</h3>
        <Card className='mb-4'>
          <CardContent className='pt-6 text-sm text-muted-foreground space-y-2'>
            <ol className='space-y-2 ml-4 list-decimal'>
              <li>普通用户在节点管理页面，找到自己可见的中转节点（套餐分配的节点或自己导入的），点击行尾 🛣 按钮</li>
              <li>对话框只显示「路由出站（按用户）」模式（管理员的「整个节点」radio + 服务器 Tab 都不显示）</li>
              <li>从「从已有节点选」Tab 选一个落地节点</li>
              <li>Label 自动填 <code className='bg-muted px-1.5 py-0.5 rounded'>rout-&lt;目标 slug&gt;</code>，可手动改</li>
              <li>点「创建路由出站」</li>
            </ol>
            <p className='mt-3'>
              系统在节点列表新增一行 <code className='bg-muted px-1.5 py-0.5 rounded'>&lt;中转节点&gt;-&lt;label&gt;</code>，
              该行只对创建者本人可见，并自动进入用户订阅。
            </p>
          </CardContent>
        </Card>

        <h3 className='text-lg font-semibold mb-3'>删除自己的路由出站</h3>
        <Card className='mb-4'>
          <CardContent className='pt-6 text-sm text-muted-foreground'>
            创建的路由出站节点行右侧会显示一个 🗑 删除按钮（仅创建者可见）。
            点击后会清理 xray 上对应的 outbound、routing rule、用户 client，以及 DB 中的节点行 + user_subaccounts 记录。
            <strong>删除不受 enabled 开关限制</strong>——即使管理员关闭了开关，用户仍能清理已存在的路由出站。
          </CardContent>
        </Card>

        <h3 className='text-lg font-semibold mb-3'>暂停 / 恢复</h3>
        <Card>
          <CardContent className='pt-6 text-sm text-muted-foreground space-y-2'>
            以下三种情况触发用户私有路由出站<strong>自动暂停</strong>（拆 rule + client，保留 outbound + 凭据）：
            <ul className='space-y-1 ml-4'>
              <li>- 管理员在用户管理停用该用户（<code className='bg-muted px-1.5 py-0.5 rounded'>is_active=false</code>）</li>
              <li>- 套餐到期（<code className='bg-muted px-1.5 py-0.5 rounded'>package_end_date &lt; now</code>）</li>
              <li>- 流量超限（traffic limit enforcer 拉黑）</li>
            </ul>
            对应<strong>恢复</strong>触发点（重建 rule + 加回 client）：
            <ul className='space-y-1 ml-4'>
              <li>- 启用用户</li>
              <li>- 流量恢复到限额以下</li>
            </ul>
            <p>注意：套餐到期时由于失去对父 inbound 的访问权，路由出站会被自动暂停，但不会自动恢复（要求重新绑定套餐）。</p>
          </CardContent>
        </Card>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>进阶：一中转多落地的流量拼车</h2>
        <p className='text-muted-foreground mb-4'>
          同一个中转 inbound 上挂多个出站，<strong>复用中转的端口、UUID、Reality 配置</strong>，
          套餐里直接发给用户。适合用一台中转机做多区域分流的场景。
        </p>

        <h3 className='text-lg font-semibold mb-3'>场景</h3>
        <p className='text-muted-foreground mb-3'>
          一台 HK直连 中转机 + 两个落地（HKT、HINET），通过路由出站创建出两个 routed 子节点：
        </p>
        <div className='overflow-x-auto mb-6'>
          <table className='w-full text-sm'>
            <thead>
              <tr className='border-b'>
                <th className='text-left py-3 px-4'>子节点名</th>
                <th className='text-left py-3 px-4'>父 inbound</th>
                <th className='text-left py-3 px-4'>出站</th>
                <th className='text-left py-3 px-4'>outbound tag</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b'>
                <td className='py-3 px-4 font-mono text-xs'>HK直连-rout-hkt</td>
                <td className='py-3 px-4'>HK直连</td>
                <td className='py-3 px-4'>HKT</td>
                <td className='py-3 px-4 font-mono text-xs'>routed:p&lt;父 id&gt;:rout-hkt</td>
              </tr>
              <tr>
                <td className='py-3 px-4 font-mono text-xs'>HK直连-rout-hinet</td>
                <td className='py-3 px-4'>HK直连</td>
                <td className='py-3 px-4'>HINET</td>
                <td className='py-3 px-4 font-mono text-xs'>routed:p&lt;父 id&gt;:rout-hinet</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className='text-lg font-semibold mb-3'>效果</h3>
        <Card>
          <CardContent className='pt-6 text-sm text-muted-foreground space-y-2'>
            <p>套餐里同时勾选这两个子节点发给用户，用户订阅里就看到两条线路，<strong>底层共用同一个中转 inbound</strong>：</p>
            <ul className='space-y-1 ml-4'>
              <li>✓ 节省中转机端口与 Reality 配置（不用为每个落地各开一个入站）</li>
              <li>✓ 中转 inbound 维度的流量自然聚合（便于查看中转机总进出口压力）</li>
              <li>✓ 用户级流量仍按子账号 email 独立计费</li>
              <li>✓ 用户对中转换落地无感切换，体验上等同两条独立线路</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>底层实现要点</h2>
        <div className='space-y-4'>
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3'>创建路由出站时</h3>
              <div className='text-sm text-muted-foreground space-y-1 ml-4'>
                <p>1. 在父物理节点的 inbound 里加一个占位 admin client（email = <code className='bg-muted px-1.5 py-0.5 rounded'>_admin__&lt;short&gt;__&lt;label&gt;</code>）</p>
                <p>2. 在源服务器上加一个 outbound，tag = <code className='bg-muted px-1.5 py-0.5 rounded'>routed:p&lt;父节点 id&gt;:&lt;label&gt;</code></p>
                <p>3. 在 routing 规则数组顶部 prepend 一条带 marktag 的规则，<code className='bg-muted px-1.5 py-0.5 rounded'>user = [admin_email]</code></p>
                <p>4. 在主控数据库 nodes 表写入子节点行（<code className='bg-muted px-1.5 py-0.5 rounded'>node_type=routed</code>，<code className='bg-muted px-1.5 py-0.5 rounded'>parent_node_id</code>，<code className='bg-muted px-1.5 py-0.5 rounded'>routed_outbound_tag</code>）</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3'>套餐分配用户到该子节点时</h3>
              <div className='text-sm text-muted-foreground space-y-1 ml-4'>
                <p>1. 为用户在父 inbound 中加一个子账号 client（email = <code className='bg-muted px-1.5 py-0.5 rounded'>&lt;username&gt;__&lt;short&gt;__&lt;label&gt;</code>，UUID 独立生成）</p>
                <p>2. 把该 email 追加到 routing 规则的 <code className='bg-muted px-1.5 py-0.5 rounded'>user[]</code> 数组</p>
                <p>3. 凭据写入 <code className='bg-muted px-1.5 py-0.5 rounded'>user_subaccounts</code> 表，续费 / 恢复时复用同一组凭据</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3'>订阅生成时</h3>
              <div className='text-sm text-muted-foreground space-y-2'>
                <p>
                  路由出站子节点的 clash_config 来自父 inbound，订阅生成时把节点中的 UUID 替换为该用户的子账号 UUID，
                  节点名替换为子节点配置的 <code className='bg-muted px-1.5 py-0.5 rounded'>NodeName</code>。
                  这样客户端连入时使用子账号 email，xray 命中带 user 限定的 routing 规则，被转到指定 outbound。
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3'>流量统计与 email 反查</h3>
              <div className='text-sm text-muted-foreground space-y-2'>
                <p>
                  xray stats 上报的 <code className='bg-muted px-1.5 py-0.5 rounded'>user.&lt;email&gt;</code> 指标，
                  会通过 <code className='bg-muted px-1.5 py-0.5 rounded'>user_subaccounts.email → username</code> 反查到 mmwx 用户名，
                  最终归集到该用户的总流量。
                </p>
                <p>因此即使一个用户有多个子账号（订阅了多条路由出站子节点），流量也能正确合并到其主账号。</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>对比：节点级 vs 用户级</h2>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead>
              <tr className='border-b'>
                <th className='text-left py-3 px-4'>维度</th>
                <th className='text-left py-3 px-4'>整个节点（节点级）</th>
                <th className='text-left py-3 px-4'>按用户（路由出站）</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b'>
                <td className='py-3 px-4'>影响范围</td>
                <td className='py-3 px-4'>源 inbound 全员</td>
                <td className='py-3 px-4'>仅套餐勾选的用户</td>
              </tr>
              <tr className='border-b'>
                <td className='py-3 px-4'>是否新增订阅节点</td>
                <td className='py-3 px-4'>否</td>
                <td className='py-3 px-4'>是（一个 routed 子节点）</td>
              </tr>
              <tr className='border-b'>
                <td className='py-3 px-4'>多用户差异化出口</td>
                <td className='py-3 px-4'>✗</td>
                <td className='py-3 px-4'>✓</td>
              </tr>
              <tr className='border-b'>
                <td className='py-3 px-4'>一中转挂多落地</td>
                <td className='py-3 px-4'>✗</td>
                <td className='py-3 px-4'>✓</td>
              </tr>
              <tr className='border-b'>
                <td className='py-3 px-4'>是否触发 xray 重启</td>
                <td className='py-3 px-4'>是</td>
                <td className='py-3 px-4'>是（首次创建及每次新增用户）</td>
              </tr>
              <tr>
                <td className='py-3 px-4'>流量统计粒度</td>
                <td className='py-3 px-4'>inbound 整体</td>
                <td className='py-3 px-4'>按用户 email 独立</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>常见问题</h2>
        <div className='space-y-4'>
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-2'>路由出站子节点能否删除？</h3>
              <p className='text-sm text-muted-foreground'>
                可以。在节点管理页或顶部「路由出站」面板里删除。删除时系统会清理父 inbound 上的占位 client、所有用户子账号 client、以及 routing 规则。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-2'>同一个父节点能创建几条路由出站？</h3>
              <p className='text-sm text-muted-foreground'>
                无硬性限制。每条用不同的 Label 区分。常见用法是为每个落地各创建一条。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-2'>用户同时分配到多个路由出站子节点会怎样？</h3>
              <p className='text-sm text-muted-foreground'>
                用户在父 inbound 上会有多个子账号 client（每条路由出站各一个），订阅里看到多条线路。
                xray routing 按规则顺序匹配，每个子账号 email 命中各自的规则，互不影响。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-2'>普通用户能不能自己加 routing 规则？</h3>
              <p className='text-sm text-muted-foreground'>
                直接加 routing 规则不行（那是 admin 接口）。
                但管理员可以在「系统设置 → 妙妙屋功能设置」打开「允许用户创建路由出站」开关，
                之后普通用户即可在自己可见的节点上自助创建私有路由出站（受配额限制，默认 2）。
                这条接口路径是 <code className='bg-muted px-1.5 py-0.5 rounded'>POST /api/user/routed-outbound</code>。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-2'>开关关掉后，已有的用户路由出站会怎样？</h3>
              <p className='text-sm text-muted-foreground'>
                <strong>保留</strong>，已配置好的 outbound 和 rule 不会自动拆除，订阅里的节点仍能正常使用。
                关掉的只是"创建新的"能力。用户仍然可以删除已有节点（删除接口不受 enabled 开关限制）。
                如需"全清"，管理员可以在用户管理删除该用户，会级联清理其全部私有路由出站。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-2'>数量限制为什么没有"不限"选项？</h3>
              <p className='text-sm text-muted-foreground'>
                用户私有路由出站每条都会在 xray 配置里新增一个 outbound + 一条 routing rule。
                如果允许"不限"，恶意用户或脚本能在短时间内塞满 xray 配置导致重启缓慢甚至 OOM。
                默认 2、上限由 admin 显式配置，是一种压舱设计。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-2'>为什么要限制"每日操作次数"？</h3>
              <p className='text-sm text-muted-foreground'>
                xray 的 routing 模块不支持 gRPC 动态加载规则——任何 rule 变更（新增、删除、改 <code className='bg-muted px-1.5 py-0.5 rounded'>user[]</code>）都必须重启 xray 进程才能生效。
                所以每次普通用户 create/delete 路由出站，agent 都会自动重启同节点上的 xray，会瞬间打断同机器上其他用户的连接（重连即可恢复，但体验受影响）。
                "数量上限"防的是<strong>累积持有</strong>，"每日操作次数"防的是<strong>短时频繁变动</strong>，两者是互补的。
                默认 5 次/天足够普通用户日常切换出口节点；超额返回 <code className='bg-muted px-1.5 py-0.5 rounded mx-1'>429 Too Many Requests</code>。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-2'>每日次数是怎么计数的？</h3>
              <p className='text-sm text-muted-foreground'>
                主控数据库新建了一张表 <code className='bg-muted px-1.5 py-0.5 rounded'>user_routed_outbound_actions(username, action, created_at)</code>，
                每次 POST/DELETE 成功（不含被校验拒绝的请求）都会写一条 <code className='bg-muted px-1.5 py-0.5 rounded'>create</code> 或 <code className='bg-muted px-1.5 py-0.5 rounded'>delete</code> 日志。
                校验时按主控服务器<strong>本地时区</strong>当日 0:00 起的行数计算；不是滚动 24 小时窗口。
                跨日后自动归零。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-2'>admin 创建路径会受这两个限制吗？</h3>
              <p className='text-sm text-muted-foreground'>
                不会。<code className='bg-muted px-1.5 py-0.5 rounded'>/api/admin/routed-outbound</code> 是给管理员管理"套餐路由出站池"用的，不受用户配额 / 每日次数限制约束。
                两条接口的内部行为也不同：admin 路径有占位 admin client，用户路径没有（详见上文「整个节点 vs 按用户」对比）。
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </XDocLayout>
  )
}
