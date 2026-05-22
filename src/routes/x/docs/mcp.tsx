import { createFileRoute } from '@tanstack/react-router'
import { XDocLayout } from '@/components/docs/x-doc-layout'
import { Card, CardContent } from '@/components/ui/card'

export const Route = createFileRoute('/x/docs/mcp')({
  component: McpPage,
})

function McpPage() {
  return (
    <XDocLayout
      title='接入 AI Agent(MCP)'
      description='妙妙屋X 内置 MCP 服务,让 OpenClaw / Hermes 等 AI Agent 用自然语言运维你的主控'
    >
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>概述</h2>
        <p className='text-muted-foreground mb-4'>
          妙妙屋X 主控内置了一个 <strong>MCP(Model Context Protocol)服务</strong>,挂在{' '}
          <code className='bg-muted px-1 py-0.5 rounded'>/mcp</code> 路由上(streamable-HTTP)。
          任何兼容 MCP 的 AI Agent(OpenClaw、Hermes Agent、Claude Code、Cursor 等)都可以直连,
          从而用自然语言完成节点、订阅、流量、服务器、用户、套餐等运维。
        </p>
        <p className='text-muted-foreground'>
          工具调用复用主控现有的接口与鉴权,<strong>权限完全等同你的登录账号</strong>:
          管理员令牌可执行管理操作,普通用户令牌调管理员工具会被拒绝。
        </p>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>第一步:生成 API 令牌</h2>
        <Card>
          <CardContent className='pt-6 text-sm text-muted-foreground space-y-2'>
            <p>1. 登录主控,进入「设置 → API 令牌」。</p>
            <p>2. 填写名称(如 <code className='bg-muted px-1 py-0.5 rounded'>openclaw</code>)点「生成令牌」。</p>
            <p>3. <strong>明文仅显示一次</strong>,立即复制保存。页面同时给出可直接复制的客户端配置片段。</p>
            <p>令牌权限与当前账号一致;可随时在该页删除(吊销)。</p>
          </CardContent>
        </Card>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>第二步:在 AI Agent 里配置</h2>

        <h3 className='font-semibold mb-2'>OpenClaw(openclaw.json)</h3>
        <div className='bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto mb-6'>
          <pre>{`{
  "mcp": {
    "servers": {
      "miaomiaowux": {
        "url": "https://你的主控/mcp",
        "transport": "streamable-http",
        "headers": { "Authorization": "Bearer <你的 API 令牌>" }
      }
    }
  }
}`}</pre>
        </div>

        <h3 className='font-semibold mb-2'>Hermes Agent(~/.hermes/config.yaml,顶层加 mcp_servers)</h3>
        <div className='bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto mb-3'>
          <pre>{`mcp_servers:
  miaomiaowux:
    url: "https://你的主控/mcp"
    headers:
      Authorization: "Bearer <你的 API 令牌>"
    connect_timeout: 15
    timeout: 600        # 安装 xray/nginx 等工具会阻塞数分钟,超时给大点
    # 可选:只放开想用的工具
    # tools:
    #   include: [server_list, user_list, package_list, traffic_summary, node_list]`}</pre>
        </div>
        <p className='text-sm text-muted-foreground mb-4'>
          加完<strong>重启 Agent</strong>(MCP 在启动时连接)。成功后日志会出现
          <code className='bg-muted px-1 py-0.5 rounded'>registered 26 tool(s)</code>。
        </p>

        <Card>
          <CardContent className='pt-6 text-sm text-muted-foreground'>
            其它客户端(Claude Code、Cursor 等)同理:填 <code className='bg-muted px-1 py-0.5 rounded'>/mcp</code> 的 URL +{' '}
            <code className='bg-muted px-1 py-0.5 rounded'>Authorization: Bearer</code> 头即可。
          </CardContent>
        </Card>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>工具一览</h2>
        <p className='text-muted-foreground mb-4'>共 26 个工具,按能力域分组。写操作会标注,高危操作需显式确认。</p>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead><tr className='border-b'><th className='text-left py-2 px-3'>能力域</th><th className='text-left py-2 px-3'>代表工具</th></tr></thead>
            <tbody>
              <tr className='border-b'><td className='py-2 px-3'>节点</td><td className='py-2 px-3'>node_list、node_speedtest、tunnel_list、node_delete*</td></tr>
              <tr className='border-b'><td className='py-2 px-3'>订阅与流量</td><td className='py-2 px-3'>subscribe_file_list、traffic_summary、traffic_user_detail、temp_subscription_create</td></tr>
              <tr className='border-b'><td className='py-2 px-3'>服务器与服务</td><td className='py-2 px-3'>server_list、server_service_status/control、server_inbound_list/apply、server_xray_install*、server_sync_nodes</td></tr>
              <tr><td className='py-2 px-3'>用户与套餐</td><td className='py-2 px-3'>user_list/detail/create/set_status/set_limits/delete*、package_list/create/assign/unassign</td></tr>
            </tbody>
          </table>
        </div>
        <p className='text-xs text-muted-foreground mt-3'>
          * = 高危写操作,Agent 需在参数中带 <code className='bg-muted px-1 py-0.5 rounded'>confirm: true</code> 才执行,否则只返回确认提示。
          令牌重置、清空节点、卸载 xray/nginx、修改管理员凭据等极高危接口<strong>不对外暴露</strong>。
        </p>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>配套技能包(Skills)</h2>
        <p className='text-muted-foreground mb-4'>
          我们提供一组 Claude Agent Skills(<code className='bg-muted px-1 py-0.5 rounded'>SKILL.md</code>),
          教 Agent 如何组合调用上述工具完成常见运维。放入 Agent 的 skills 目录即可。
        </p>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead><tr className='border-b'><th className='text-left py-2 px-3'>技能</th><th className='text-left py-2 px-3'>用途</th></tr></thead>
            <tbody>
              <tr className='border-b'><td className='py-2 px-3'>mmwx-onboard-user</td><td className='py-2 px-3'>开通新用户全流程(建用户→套餐→绑定→订阅)</td></tr>
              <tr className='border-b'><td className='py-2 px-3'>mmwx-add-server</td><td className='py-2 px-3'>接入新服务器(登记→装 xray/nginx→同步节点)</td></tr>
              <tr className='border-b'><td className='py-2 px-3'>mmwx-traffic-report</td><td className='py-2 px-3'>流量巡检与超额名单</td></tr>
              <tr className='border-b'><td className='py-2 px-3'>mmwx-node-speedtest</td><td className='py-2 px-3'>批量测速并出报告</td></tr>
              <tr><td className='py-2 px-3'>mmwx-troubleshoot</td><td className='py-2 px-3'>节点离线/订阅异常排查</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>安全建议</h2>
        <Card>
          <CardContent className='pt-6 text-sm text-muted-foreground space-y-2'>
            <p>• 令牌权限随账号:把全权交给 Agent 前,确认该 Agent 与其入口(如 Telegram bot)可信。</p>
            <p>• 收紧爆炸半径:用客户端的工具过滤(如 Hermes 的 <code className='bg-muted px-1 py-0.5 rounded'>tools.include</code>)只放开只读工具,或改用普通用户令牌。</p>
            <p>• 令牌明文仅显示一次,泄露后到「设置 → API 令牌」删除即可吊销。</p>
            <p>• 高危操作的 <code className='bg-muted px-1 py-0.5 rounded'>confirm</code> 二次确认是兜底,不能替代访问控制。</p>
          </CardContent>
        </Card>
      </section>
    </XDocLayout>
  )
}
