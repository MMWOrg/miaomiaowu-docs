import { createFileRoute } from '@tanstack/react-router'
import { XDocLayout } from '@/components/docs/x-doc-layout'
import { Card, CardContent } from '@/components/ui/card'

export const Route = createFileRoute('/x/docs/remote-servers')({
  component: RemoteServersPage,
})

function RemoteServersPage() {
  return (
    <XDocLayout title='远程服务器' description='添加和管理远程服务器，Master-Agent 架构说明'>
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>概述</h2>
        <p className='text-muted-foreground mb-4'>
          妙妙屋X 采用 Master-Agent 架构。主控端通过网络与远程服务器上的 Agent 通信，实现 Xray/Nginx 的远程安装、配置和管理。
        </p>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>添加服务器</h2>
        <Card>
          <CardContent className='pt-6'>
            <ol className='space-y-3 text-sm'>
              <li>1. 进入「服务管理」页面，点击「添加服务器」</li>
              <li>2. 填写服务器名称（用于标识）</li>
              <li>3. 填写服务器 IP 地址</li>
              <li>4. 填写域名（可选，用于 TLS 证书和 Nginx 伪装）</li>
              <li>5. 选择偷取模式（tunnel/steal，影响节点端口生成）</li>
              <li>6. 系统自动生成 Server Token 和 Agent Token</li>
              <li>7. 使用 Token 在远程服务器上部署 Agent</li>
            </ol>
          </CardContent>
        </Card>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>连接模式</h2>
        <div className='grid gap-4 md:grid-cols-2'>
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-2'>WebSocket（推荐）</h3>
              <p className='text-sm text-muted-foreground'>Agent 主动连接主控端，保持长连接。实时双向通信，支持扫描结果推送。</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-2'>HTTP</h3>
              <p className='text-sm text-muted-foreground'>主控端直接调用 Agent HTTP API。需要 Agent 端口（默认 23889）对主控端可达。</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-2'>Pull</h3>
              <p className='text-sm text-muted-foreground'>Agent 定期从主控端拉取指令。适合 NAT 或防火墙受限环境。</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-2'>Auto</h3>
              <p className='text-sm text-muted-foreground'>自动尝试 WebSocket → HTTP → Pull 回退链，选择最优连接方式。</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>Token 管理</h2>
        <p className='text-muted-foreground mb-4'>每台服务器有两个 Token：</p>
        <ul className='space-y-2 text-sm text-muted-foreground'>
          <li>- Server Token：Agent 用于连接主控端的凭证</li>
          <li>- Agent Token：主控端用于调用 Agent API 的凭证</li>
        </ul>
        <p className='text-sm text-muted-foreground mt-4'>
          可在服务器详情页重置 Token。重置后 Agent 会通过 WebSocket 自动接收新 Token。
        </p>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-4'>服务器状态</h2>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead><tr className='border-b'><th className='text-left py-3 px-4'>状态</th><th className='text-left py-3 px-4'>说明</th></tr></thead>
            <tbody>
              <tr className='border-b'><td className='py-3 px-4 font-mono text-green-600'>connected</td><td className='py-3 px-4'>Agent 已连接，可正常管理</td></tr>
              <tr className='border-b'><td className='py-3 px-4 font-mono text-yellow-600'>disconnected</td><td className='py-3 px-4'>Agent 断开连接</td></tr>
              <tr><td className='py-3 px-4 font-mono text-gray-500'>pending</td><td className='py-3 px-4'>等待 Agent 首次连接</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </XDocLayout>
  )
}
