import { createFileRoute, Link } from '@tanstack/react-router'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import {
  Download,
  Terminal,
  CheckCircle,
  Github,
  Zap,
  AlertTriangle,
  ArrowRight,
} from 'lucide-react'

export const Route = createFileRoute('/docs/install-direct')({
  component: InstallDirectPage,
})

function InstallDirectPage() {
  return (
    <DocLayout
      title='直接安装'
      description='从源码编译或下载二进制文件安装妙妙屋'
    >
      {/* 一键安装脚本（推荐） */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Zap className='size-5 text-primary' />
          一键安装脚本（推荐）
        </h2>
        <Card className='bg-gradient-to-r from-primary/10 to-blue-500/10 border-primary/20'>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              使用一键安装脚本是最简单的安装方式，会自动下载并配置 systemd 服务：
            </p>

            <div className='bg-muted rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto'>
              <pre>{`# 下载并运行安装脚本
curl -sL https://raw.githubusercontent.com/Jimleerx/miaomiaowu/main/install.sh | bash`}</pre>
            </div>

            <p className='text-sm text-muted-foreground mb-4'>
              安装脚本会自动完成以下操作：
            </p>
            <ul className='space-y-2 text-sm text-muted-foreground mb-4'>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>下载最新版本的二进制文件</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>安装到 /etc/mmw 目录</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>创建并启用 systemd 服务</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>配置开机自启动</span>
              </li>
            </ul>

            <div className='space-y-3'>
              <div className='bg-muted/50 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>更新到最新版本</h4>
                <div className='bg-muted rounded-lg p-3 font-mono text-xs overflow-x-auto'>
                  <pre>curl -sL https://raw.githubusercontent.com/Jimleerx/miaomiaowu/main/install.sh | sudo bash -s update</pre>
                </div>
                <p className='text-xs text-muted-foreground mt-2'>
                  更多更新方式请参考
                  <Link to='/docs/update' className='text-primary hover:underline inline-flex items-center gap-1 mx-1'>
                    版本更新
                    <ArrowRight className='size-3' />
                  </Link>
                </p>
              </div>
              <div className='bg-muted/50 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>卸载服务</h4>
                <div className='bg-muted rounded-lg p-3 font-mono text-xs overflow-x-auto'>
                  <pre>{`# 卸载 systemd 服务（保留数据）
curl -sL https://raw.githubusercontent.com/Jimleerx/miaomiaowu/main/install.sh | sudo bash -s uninstall

# 完全清除数据
sudo rm -rf /etc/mmw`}</pre>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 简易安装 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Terminal className='size-5 text-primary' />
          简易安装（手动运行）
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              如果不需要 systemd 服务，可以使用简易安装脚本：
            </p>

            <div className='bg-muted rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto'>
              <pre>{`# 下载并运行简易安装脚本
curl -sL https://raw.githubusercontent.com/Jimleerx/miaomiaowu/main/quick-install.sh | bash

# 运行程序
./mmw`}</pre>
            </div>

            <p className='text-sm text-muted-foreground'>
              简易安装会下载二进制文件到当前目录，需要手动运行程序。
            </p>
          </CardContent>
        </Card>
      </section>

      {/* 注意事项 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <AlertTriangle className='size-5 text-orange-500' />
          注意事项
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-orange-500/10 rounded-lg p-4 border-l-4 border-orange-500'>
              <p className='text-sm text-muted-foreground'>
                <strong>0.1.1 版本提醒：</strong>从 0.1.1 版本开始，服务名称从 <code className='bg-muted px-1 rounded'>miaomiaowu</code> 更改为 <code className='bg-muted px-1 rounded'>mmw</code>。如果你之前安装过旧版本，请先卸载旧服务再安装新版本。
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 前提条件 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <CheckCircle className='size-5 text-primary' />
          前提条件（手动安装）
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              以下前提条件仅适用于手动下载或从源码编译的情况：
            </p>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>Go 1.21 或更高版本（从源码编译时需要）</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>Node.js 18 或更高版本（从源码编译前端时需要）</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>Git（从源码编译时需要）</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* 方式一：下载二进制文件 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Download className='size-5 text-primary' />
          方式一：下载二进制文件
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              从 GitHub Releases 下载预编译的二进制文件：
            </p>

            <h4 className='font-semibold mb-2'>1. 下载最新版本</h4>
            <div className='bg-muted rounded-lg p-4 mb-4'>
              <a
                href='https://github.com/Jimleerx/miaomiaowu/releases'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 text-primary hover:underline'
              >
                <Github className='size-4' />
                前往 GitHub Releases 下载
              </a>
            </div>

            <h4 className='font-semibold mb-2'>2. 解压并运行</h4>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto'>
              <pre>{`# 解压下载的文件
tar -xzf miaomiaowu-linux-amd64.tar.gz

# 添加执行权限
chmod +x miaomiaowu

# 运行
./miaomiaowu`}</pre>
            </div>

            <p className='text-sm text-muted-foreground'>
              支持的平台：Linux (amd64/arm64)、macOS (amd64/arm64)、Windows (amd64)
            </p>
          </CardContent>
        </Card>
      </section>

      {/* 方式二：从源码编译 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Terminal className='size-5 text-primary' />
          方式二：从源码编译
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <h4 className='font-semibold mb-2'>1. 克隆仓库</h4>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto'>
              <pre>{`git clone https://github.com/Jimleerx/miaomiaowu.git
cd miaomiaowu`}</pre>
            </div>

            <h4 className='font-semibold mb-2'>2. 编译前端</h4>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto'>
              <pre>{`cd miaomiaowu
npm install
npm run build
cd ..`}</pre>
            </div>

            <h4 className='font-semibold mb-2'>3. 编译后端</h4>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto'>
              <pre>{`go build -o miaomiaowu .`}</pre>
            </div>

            <h4 className='font-semibold mb-2'>4. 运行</h4>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto'>
              <pre>./miaomiaowu</pre>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 配置 systemd 服务（推荐） */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Terminal className='size-5 text-primary' />
          配置为 systemd 服务（推荐）
        </h2>
        <Card className='bg-gradient-to-r from-primary/10 to-blue-500/10 border-primary/20'>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              推荐在 Linux 系统上将妙妙屋配置为 systemd 服务，实现开机自启和自动重启：
            </p>

            <h4 className='font-semibold mb-2'>1. 创建安装目录并下载程序</h4>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto'>
              <pre>{`# 创建目录
sudo mkdir -p /etc/mmw

# 下载最新版本（以 linux-amd64 为例）
cd /etc/mmw
sudo curl -LO https://github.com/Jimleerx/miaomiaowu/releases/latest/download/mmw-linux-amd64
sudo chmod +x mmw-linux-amd64
sudo mv mmw-linux-amd64 mmw`}</pre>
            </div>

            <h4 className='font-semibold mb-2'>2. 创建服务文件</h4>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto'>
              <pre>{`sudo nano /etc/systemd/system/mmw.service`}</pre>
            </div>

            <h4 className='font-semibold mb-2'>3. 添加以下内容</h4>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto'>
              <pre>{`[Unit]
Description=MiaoMiaoWu
After=network.target

[Service]
Type=simple
User=root
WorkingDirectory=/etc/mmw
ExecStart=/etc/mmw/mmw
Restart=on-failure
RestartSec=5

[Install]
WantedBy=multi-user.target`}</pre>
            </div>

            <h4 className='font-semibold mb-2'>4. 启用并启动服务</h4>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto'>
              <pre>{`sudo systemctl daemon-reload
sudo systemctl enable mmw
sudo systemctl start mmw`}</pre>
            </div>

            <h4 className='font-semibold mb-2'>5. 查看服务状态</h4>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto'>
              <pre>sudo systemctl status mmw</pre>
            </div>

            <h4 className='font-semibold mb-2'>常用命令</h4>
            <div className='bg-muted/50 rounded-lg p-4'>
              <div className='space-y-2 text-sm'>
                <div className='flex gap-2'>
                  <code className='bg-muted px-2 py-1 rounded text-xs'>sudo systemctl stop mmw</code>
                  <span className='text-muted-foreground'>停止服务</span>
                </div>
                <div className='flex gap-2'>
                  <code className='bg-muted px-2 py-1 rounded text-xs'>sudo systemctl restart mmw</code>
                  <span className='text-muted-foreground'>重启服务</span>
                </div>
                <div className='flex gap-2'>
                  <code className='bg-muted px-2 py-1 rounded text-xs'>sudo journalctl -u mmw -f</code>
                  <span className='text-muted-foreground'>查看日志</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Windows 安装 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Download className='size-5 text-primary' />
          Windows 安装
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              Windows 用户可以从 Releases 下载预编译的可执行文件：
            </p>

            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-blue-500'>
              <div className='space-y-3 text-sm'>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>1</span>
                  <div>
                    <strong>下载文件</strong>
                    <p className='text-muted-foreground mt-1'>
                      从 <a href='https://github.com/Jimleerx/miaomiaowu/releases' target='_blank' rel='noopener noreferrer' className='text-primary hover:underline'>GitHub Releases</a> 下载 <code className='bg-muted px-1 rounded'>mmw-windows-amd64.exe</code>
                    </p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>2</span>
                  <div>
                    <strong>运行程序</strong>
                    <p className='text-muted-foreground mt-1'>
                      双击运行或在命令行执行 <code className='bg-muted px-1 rounded'>.\mmw-windows-amd64.exe</code>
                    </p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>3</span>
                  <div>
                    <strong>访问网页</strong>
                    <p className='text-muted-foreground mt-1'>
                      打开浏览器访问 <code className='bg-muted px-1 rounded'>http://localhost:8080</code>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 访问系统 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4'>访问系统</h2>
        <Card className='bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20'>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-2'>
              服务启动后，打开浏览器访问：
            </p>
            <div className='bg-background/50 rounded-lg p-4 font-mono text-lg text-center'>
              http://localhost:8080
            </div>
            <p className='text-sm text-muted-foreground mt-4'>
              首次访问会提示创建管理员账户。
            </p>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
