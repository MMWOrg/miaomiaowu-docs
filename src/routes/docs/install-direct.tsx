import { createFileRoute, Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
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
  const { t } = useTranslation('docs')

  return (
    <DocLayout
      title={t('installDirect.title')}
      description={t('installDirect.description')}
    >
      {/* 一键安装脚本（推荐） */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Zap className='size-5 text-primary' />
          {t('installDirect.oneClick.heading')}
        </h2>
        <Card className='bg-gradient-to-r from-primary/10 to-blue-500/10 border-primary/20'>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('installDirect.oneClick.desc')}
            </p>

            <div className='bg-muted rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto'>
              <pre>{`# 下载并运行安装脚本
curl -sL https://raw.githubusercontent.com/iluobei/miaomiaowu/main/install.sh | bash`}</pre>
            </div>

            <p className='text-sm text-muted-foreground mb-4'>
              {t('installDirect.oneClick.autoOps')}
            </p>
            <ul className='space-y-2 text-sm text-muted-foreground mb-4'>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('installDirect.oneClick.op1')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('installDirect.oneClick.op2')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('installDirect.oneClick.op3')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('installDirect.oneClick.op4')}</span>
              </li>
            </ul>

            <div className='space-y-3'>
              <div className='bg-muted/50 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('installDirect.oneClick.updateHeading')}</h4>
                <div className='bg-muted rounded-lg p-3 font-mono text-xs overflow-x-auto'>
                  <pre>curl -sL https://raw.githubusercontent.com/iluobei/miaomiaowu/main/install.sh | sudo bash -s update</pre>
                </div>
                <p className='text-xs text-muted-foreground mt-2'>
                  {t('installDirect.oneClick.moreUpdate')}
                  <Link to='/docs/update' className='text-primary hover:underline inline-flex items-center gap-1 mx-1'>
                    {t('installDirect.oneClick.versionUpdate')}
                    <ArrowRight className='size-3' />
                  </Link>
                </p>
              </div>
              <div className='bg-muted/50 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('installDirect.oneClick.uninstallHeading')}</h4>
                <div className='bg-muted rounded-lg p-3 font-mono text-xs overflow-x-auto'>
                  <pre>{`# 卸载 systemd 服务（保留数据）
curl -sL https://raw.githubusercontent.com/iluobei/miaomiaowu/main/install.sh | sudo bash -s uninstall

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
          {t('installDirect.simple.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('installDirect.simple.desc')}
            </p>

            <div className='bg-muted rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto'>
              <pre>{`# 下载并运行简易安装脚本
curl -sL https://raw.githubusercontent.com/iluobei/miaomiaowu/main/quick-install.sh | bash

# 运行程序
./mmw`}</pre>
            </div>

            <p className='text-sm text-muted-foreground'>
              {t('installDirect.simple.note')}
            </p>
          </CardContent>
        </Card>
      </section>

      {/* 注意事项 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <AlertTriangle className='size-5 text-orange-500' />
          {t('installDirect.notice.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-orange-500/10 rounded-lg p-4 border-l-4 border-orange-500'>
              <p className='text-sm text-muted-foreground'>
                {t('installDirect.notice.versionNote')}
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 前提条件 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <CheckCircle className='size-5 text-primary' />
          {t('installDirect.prerequisites.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('installDirect.prerequisites.desc')}
            </p>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('installDirect.prerequisites.go')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('installDirect.prerequisites.node')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('installDirect.prerequisites.git')}</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* 方式一：下载二进制文件 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Download className='size-5 text-primary' />
          {t('installDirect.binary.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('installDirect.binary.desc')}
            </p>

            <h4 className='font-semibold mb-2'>{t('installDirect.binary.step1')}</h4>
            <div className='bg-muted rounded-lg p-4 mb-4'>
              <a
                href='https://github.com/iluobei/miaomiaowu/releases'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 text-primary hover:underline'
              >
                <Github className='size-4' />
                {t('installDirect.binary.goToReleases')}
              </a>
            </div>

            <h4 className='font-semibold mb-2'>{t('installDirect.binary.step2')}</h4>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto'>
              <pre>{`# 解压下载的文件
tar -xzf miaomiaowu-linux-amd64.tar.gz

# 添加执行权限
chmod +x miaomiaowu

# 运行
./miaomiaowu`}</pre>
            </div>

            <p className='text-sm text-muted-foreground'>
              {t('installDirect.binary.platforms')}
            </p>
          </CardContent>
        </Card>
      </section>

      {/* 方式二：从源码编译 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Terminal className='size-5 text-primary' />
          {t('installDirect.source.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <h4 className='font-semibold mb-2'>{t('installDirect.source.step1')}</h4>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto'>
              <pre>{`git clone https://github.com/iluobei/miaomiaowu.git
cd miaomiaowu`}</pre>
            </div>

            <h4 className='font-semibold mb-2'>{t('installDirect.source.step2')}</h4>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto'>
              <pre>{`cd miaomiaowu
npm install
npm run build
cd ..`}</pre>
            </div>

            <h4 className='font-semibold mb-2'>{t('installDirect.source.step3')}</h4>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto'>
              <pre>{`go build -o miaomiaowu .`}</pre>
            </div>

            <h4 className='font-semibold mb-2'>{t('installDirect.source.step4')}</h4>
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
          {t('installDirect.systemd.heading')}
        </h2>
        <Card className='bg-gradient-to-r from-primary/10 to-blue-500/10 border-primary/20'>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('installDirect.systemd.desc')}
            </p>

            <h4 className='font-semibold mb-2'>{t('installDirect.systemd.step1')}</h4>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto'>
              <pre>{`# 创建目录
sudo mkdir -p /etc/mmw

# 下载最新版本（以 linux-amd64 为例）
cd /etc/mmw
sudo curl -LO https://github.com/iluobei/miaomiaowu/releases/latest/download/mmw-linux-amd64
sudo chmod +x mmw-linux-amd64
sudo mv mmw-linux-amd64 mmw`}</pre>
            </div>

            <h4 className='font-semibold mb-2'>{t('installDirect.systemd.step2')}</h4>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto'>
              <pre>{`sudo nano /etc/systemd/system/mmw.service`}</pre>
            </div>

            <h4 className='font-semibold mb-2'>{t('installDirect.systemd.step3')}</h4>
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

            <h4 className='font-semibold mb-2'>{t('installDirect.systemd.step4')}</h4>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto'>
              <pre>{`sudo systemctl daemon-reload
sudo systemctl enable mmw
sudo systemctl start mmw`}</pre>
            </div>

            <h4 className='font-semibold mb-2'>{t('installDirect.systemd.step5')}</h4>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto'>
              <pre>sudo systemctl status mmw</pre>
            </div>

            <h4 className='font-semibold mb-2'>{t('installDirect.systemd.commonCmds')}</h4>
            <div className='bg-muted/50 rounded-lg p-4'>
              <div className='space-y-2 text-sm'>
                <div className='flex gap-2'>
                  <code className='bg-muted px-2 py-1 rounded text-xs'>sudo systemctl stop mmw</code>
                  <span className='text-muted-foreground'>{t('installDirect.systemd.cmdStop')}</span>
                </div>
                <div className='flex gap-2'>
                  <code className='bg-muted px-2 py-1 rounded text-xs'>sudo systemctl restart mmw</code>
                  <span className='text-muted-foreground'>{t('installDirect.systemd.cmdRestart')}</span>
                </div>
                <div className='flex gap-2'>
                  <code className='bg-muted px-2 py-1 rounded text-xs'>sudo journalctl -u mmw -f</code>
                  <span className='text-muted-foreground'>{t('installDirect.systemd.cmdLogs')}</span>
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
          {t('installDirect.windows.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('installDirect.windows.desc')}
            </p>

            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-blue-500'>
              <div className='space-y-3 text-sm'>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>1</span>
                  <div>
                    <strong>{t('installDirect.windows.step1.title')}</strong>
                    <p className='text-muted-foreground mt-1'>
                      {t('installDirect.windows.step1.desc')} <a href='https://github.com/iluobei/miaomiaowu/releases' target='_blank' rel='noopener noreferrer' className='text-primary hover:underline'>GitHub Releases</a> {t('installDirect.windows.step1.download')} <code className='bg-muted px-1 rounded'>mmw-windows-amd64.exe</code>
                    </p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>2</span>
                  <div>
                    <strong>{t('installDirect.windows.step2.title')}</strong>
                    <p className='text-muted-foreground mt-1'>
                      {t('installDirect.windows.step2.desc')} <code className='bg-muted px-1 rounded'>.\mmw-windows-amd64.exe</code>
                    </p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>3</span>
                  <div>
                    <strong>{t('installDirect.windows.step3.title')}</strong>
                    <p className='text-muted-foreground mt-1'>
                      {t('installDirect.windows.step3.desc')} <code className='bg-muted px-1 rounded'>http://localhost:8080</code>
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
        <h2 className='text-xl font-bold mb-4'>{t('installDirect.accessSystem.heading')}</h2>
        <Card className='bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20'>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-2'>
              {t('installDirect.accessSystem.desc')}
            </p>
            <div className='bg-background/50 rounded-lg p-4 font-mono text-lg text-center'>
              http://localhost:8080
            </div>
            <p className='text-sm text-muted-foreground mt-4'>
              {t('installDirect.accessSystem.firstVisit')}
            </p>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
