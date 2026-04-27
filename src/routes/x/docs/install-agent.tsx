import { createFileRoute, Link } from '@tanstack/react-router'
import { XDocLayout } from '@/components/docs/x-doc-layout'
import { Card, CardContent } from '@/components/ui/card'

export const Route = createFileRoute('/x/docs/install-agent')({
  component: InstallAgentPage,
})

function InstallAgentPage() {
  return (
    <XDocLayout title='Agent 部署' description='通过一键命令在远程服务器上部署 MMWX Agent'>
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>概述</h2>
        <p className='text-muted-foreground mb-4'>
          远程服务器的 Agent 部署无需手动下载或配置。在主控端添加服务器后，系统会自动生成一键安装命令，
          在远程服务器上执行即可完成全部部署。
        </p>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>一键安装（推荐）</h2>
        <div className='space-y-4'>
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3'>步骤 1：在主控端添加服务器</h3>
              <div className='text-sm text-muted-foreground space-y-2'>
                <p>1. 登录主控端管理面板</p>
                <p>2. 进入「Xray 服务器」页面</p>
                <p>3. 点击「添加服务器」，填写服务器名称和 IP</p>
                <p>4. 保存后，系统自动生成该服务器的安装命令</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3'>步骤 2：复制一键安装命令</h3>
              <p className='text-sm text-muted-foreground mb-4'>
                在服务器详情中找到「一键安装命令」，点击复制按钮。命令格式如下：
              </p>
              <div className='bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto'>
                <pre>{`curl -fsSL https://your-domain.com/api/remote/install.sh?token=SERVER_TOKEN | bash`}</pre>
              </div>
              <p className='text-xs text-muted-foreground mt-3'>
                每台服务器的 Token 唯一，命令中已自动包含该服务器的认证信息和主控端地址。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3'>步骤 3：在远程服务器上执行</h3>
              <p className='text-sm text-muted-foreground mb-4'>
                SSH 登录到远程服务器，以 root 权限执行复制的命令。脚本会自动完成以下 6 个步骤：
              </p>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm'>
                  <thead><tr className='border-b'><th className='text-left py-2 px-3'>步骤</th><th className='text-left py-2 px-3'>操作</th><th className='text-left py-2 px-3'>说明</th></tr></thead>
                  <tbody>
                    <tr className='border-b'><td className='py-2 px-3'>1/6</td><td className='py-2 px-3'>停止旧服务</td><td className='py-2 px-3'>如有已运行的 mmwx 服务，先停止</td></tr>
                    <tr className='border-b'><td className='py-2 px-3'>2/6</td><td className='py-2 px-3'>创建配置</td><td className='py-2 px-3'>生成 <code className='bg-muted px-1 py-0.5 rounded'>/etc/mmwx/config.yaml</code></td></tr>
                    <tr className='border-b'><td className='py-2 px-3'>3/6</td><td className='py-2 px-3'>创建 systemd 服务</td><td className='py-2 px-3'>注册为系统服务，开机自启</td></tr>
                    <tr className='border-b'><td className='py-2 px-3'>4/6</td><td className='py-2 px-3'>下载二进制</td><td className='py-2 px-3'>自动检测架构（amd64/arm64），从 GitHub 下载</td></tr>
                    <tr className='border-b'><td className='py-2 px-3'>5/6</td><td className='py-2 px-3'>启动服务</td><td className='py-2 px-3'>启用并启动 mmwx 服务</td></tr>
                    <tr><td className='py-2 px-3'>6/6</td><td className='py-2 px-3'>验证安装</td><td className='py-2 px-3'>检查服务状态，输出结果</td></tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>自动安装 Xray</h2>
        <p className='text-muted-foreground mb-4'>
          添加服务器时如果勾选了「自动安装 Xray」，一键命令会在 Agent 部署完成后自动安装 Xray-core。
          如果服务器上已安装 Xray，则跳过。
        </p>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto'>
              <pre>{`# 脚本自动执行的 Xray 安装命令
bash -c "$(curl -L https://github.com/XTLS/Xray-install/raw/main/install-release.sh)" @ install`}</pre>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>生成的配置文件</h2>
        <Card>
          <CardContent className='pt-6'>
            <h3 className='font-semibold mb-2'>/etc/mmwx/config.yaml</h3>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto'>
              <pre>{`mode: remote
master_server: https://your-domain.com
remote_token: SERVER_TOKEN
connection_mode: websocket`}</pre>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>生成的 systemd 服务</h2>
        <Card>
          <CardContent className='pt-6'>
            <h3 className='font-semibold mb-2'>/etc/systemd/system/mmwx.service</h3>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto'>
              <pre>{`[Unit]
Description=MMWX Remote Server
After=network.target

[Service]
Type=simple
ExecStart=/usr/local/bin/mmwx -c /etc/mmwx/config.yaml
Restart=always
RestartSec=5
WorkingDirectory=/var/lib/mmwx

[Install]
WantedBy=multi-user.target`}</pre>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>连接模式</h2>
        <p className='text-muted-foreground mb-4'>
          一键安装默认使用 WebSocket 连接模式。如需更改，可编辑 <code className='bg-muted px-1.5 py-0.5 rounded'>/etc/mmwx/config.yaml</code> 中的 <code className='bg-muted px-1.5 py-0.5 rounded'>connection_mode</code> 字段。
        </p>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead><tr className='border-b'><th className='text-left py-3 px-4'>模式</th><th className='text-left py-3 px-4'>值</th><th className='text-left py-3 px-4'>说明</th></tr></thead>
            <tbody>
              <tr className='border-b'><td className='py-3 px-4'>WebSocket</td><td className='py-3 px-4 font-mono text-xs'>websocket</td><td className='py-3 px-4'>推荐，Agent 主动连接主控端，保持长连接</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>HTTP</td><td className='py-3 px-4 font-mono text-xs'>http</td><td className='py-3 px-4'>主控端直接调用 Agent API，需 Agent 端口可达</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>Pull</td><td className='py-3 px-4 font-mono text-xs'>pull</td><td className='py-3 px-4'>Agent 定期拉取指令，适合 NAT 后的环境</td></tr>
              <tr><td className='py-3 px-4'>Auto</td><td className='py-3 px-4 font-mono text-xs'>auto</td><td className='py-3 px-4'>自动尝试 WebSocket → HTTP → Pull 回退链</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>常用运维命令</h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto'>
              <pre>{`# 查看服务状态
systemctl status mmwx

# 查看实时日志
journalctl -u mmwx -f

# 重启服务
systemctl restart mmwx

# 停止服务
systemctl stop mmwx`}</pre>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>重新安装</h2>
        <p className='text-muted-foreground mb-4'>
          如果 Agent 出现问题，可以在服务器详情中找到「重新安装命令」，再次执行即可。
          脚本会自动停止旧服务、覆盖安装并重新启动。
        </p>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>支持的架构</h2>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead><tr className='border-b'><th className='text-left py-3 px-4'>架构</th><th className='text-left py-3 px-4'>uname -m</th><th className='text-left py-3 px-4'>下载文件</th></tr></thead>
            <tbody>
              <tr className='border-b'><td className='py-3 px-4'>x86_64</td><td className='py-3 px-4 font-mono text-xs'>x86_64</td><td className='py-3 px-4 font-mono text-xs'>mmwx-linux-amd64</td></tr>
              <tr><td className='py-3 px-4'>ARM64</td><td className='py-3 px-4 font-mono text-xs'>aarch64 / arm64</td><td className='py-3 px-4 font-mono text-xs'>mmwx-linux-arm64</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <Link to='/x/docs/remote-servers' className='text-primary hover:underline'>→ 在主控端管理远程服务器</Link>
      </section>
    </XDocLayout>
  )
}
