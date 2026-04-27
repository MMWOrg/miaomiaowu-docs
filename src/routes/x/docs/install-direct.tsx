import { createFileRoute, Link } from '@tanstack/react-router'
import { XDocLayout } from '@/components/docs/x-doc-layout'
import { Card, CardContent } from '@/components/ui/card'

export const Route = createFileRoute('/x/docs/install-direct')({
  component: InstallDirectPage,
})

function InstallDirectPage() {
  return (
    <XDocLayout title='直接安装' description='通过二进制文件直接部署妙妙屋X'>
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>下载</h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>从 GitHub Releases 下载对应平台的二进制文件：</p>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto'>
              <pre>{`# Linux amd64
wget https://github.com/iluobei/miaomiaowux/releases/latest/download/mmwx-linux-amd64
chmod +x mmwx-linux-amd64

# 运行
./mmwx-linux-amd64`}</pre>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>配置</h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>可通过环境变量或配置文件自定义：</p>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto'>
              <pre>{`# 环境变量
export PORT=12889
export DATABASE_PATH=./data/traffic.db
export JWT_SECRET=your-secret-key

# 或使用配置文件
./mmwx-linux-amd64 -c config.yaml`}</pre>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>Systemd 服务</h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>推荐使用 systemd 管理服务：</p>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto'>
              <pre>{`[Unit]
Description=MiaomiaoWuX
After=network.target

[Service]
Type=simple
ExecStart=/opt/mmwx/mmwx-linux-amd64
WorkingDirectory=/opt/mmwx
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target`}</pre>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <Link to='/x/docs/install-docker' className='text-primary hover:underline'>→ 也可以使用 Docker 安装</Link>
      </section>
    </XDocLayout>
  )
}
