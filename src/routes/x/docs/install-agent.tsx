import { createFileRoute, Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { XDocLayout } from '@/components/docs/x-doc-layout'
import { Card, CardContent } from '@/components/ui/card'

export const Route = createFileRoute('/x/docs/install-agent')({
  component: InstallAgentPage,
})

function InstallAgentPage() {
  const { t } = useTranslation('xdocs')

  return (
    <XDocLayout title={t('installAgent.title')} description={t('installAgent.description')}>
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>{t('installAgent.overview.heading')}</h2>
        <p className='text-muted-foreground mb-4'>
          {t('installAgent.overview.text')}
        </p>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>{t('installAgent.oneClick.heading')}</h2>
        <div className='space-y-4'>
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3'>{t('installAgent.oneClick.step1.heading')}</h3>
              <div className='text-sm text-muted-foreground space-y-2'>
                <p>{t('installAgent.oneClick.step1.item1')}</p>
                <p>{t('installAgent.oneClick.step1.item2')}</p>
                <p>{t('installAgent.oneClick.step1.item3')}</p>
                <p>{t('installAgent.oneClick.step1.item4')}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3'>{t('installAgent.oneClick.step2.heading')}</h3>
              <p className='text-sm text-muted-foreground mb-4'>
                {t('installAgent.oneClick.step2.text')}
              </p>
              <div className='bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto'>
                <pre>{`curl -fsSL https://your-domain.com/api/remote/install.sh?token=SERVER_TOKEN | bash`}</pre>
              </div>
              <p className='text-xs text-muted-foreground mt-3'>
                {t('installAgent.oneClick.step2.note')}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3'>{t('installAgent.oneClick.step3.heading')}</h3>
              <p className='text-sm text-muted-foreground mb-4'>
                {t('installAgent.oneClick.step3.text')}
              </p>
              <div className='overflow-x-auto'>
                <table className='w-full text-sm'>
                  <thead><tr className='border-b'><th className='text-left py-2 px-3'>{t('installAgent.oneClick.step3.stepCol')}</th><th className='text-left py-2 px-3'>{t('installAgent.oneClick.step3.operationCol')}</th><th className='text-left py-2 px-3'>{t('installAgent.oneClick.step3.descCol')}</th></tr></thead>
                  <tbody>
                    <tr className='border-b'><td className='py-2 px-3'>1/6</td><td className='py-2 px-3'>{t('installAgent.oneClick.step3.op1')}</td><td className='py-2 px-3'>{t('installAgent.oneClick.step3.desc1')}</td></tr>
                    <tr className='border-b'><td className='py-2 px-3'>2/6</td><td className='py-2 px-3'>{t('installAgent.oneClick.step3.op2')}</td><td className='py-2 px-3'>{t('installAgent.oneClick.step3.desc2')}</td></tr>
                    <tr className='border-b'><td className='py-2 px-3'>3/6</td><td className='py-2 px-3'>{t('installAgent.oneClick.step3.op3')}</td><td className='py-2 px-3'>{t('installAgent.oneClick.step3.desc3')}</td></tr>
                    <tr className='border-b'><td className='py-2 px-3'>4/6</td><td className='py-2 px-3'>{t('installAgent.oneClick.step3.op4')}</td><td className='py-2 px-3'>{t('installAgent.oneClick.step3.desc4')}</td></tr>
                    <tr className='border-b'><td className='py-2 px-3'>5/6</td><td className='py-2 px-3'>{t('installAgent.oneClick.step3.op5')}</td><td className='py-2 px-3'>{t('installAgent.oneClick.step3.desc5')}</td></tr>
                    <tr><td className='py-2 px-3'>6/6</td><td className='py-2 px-3'>{t('installAgent.oneClick.step3.op6')}</td><td className='py-2 px-3'>{t('installAgent.oneClick.step3.desc6')}</td></tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>{t('installAgent.autoXray.heading')}</h2>
        <p className='text-muted-foreground mb-4'>
          {t('installAgent.autoXray.text')}
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
        <h2 className='text-2xl font-bold mb-4'>{t('installAgent.configFile.heading')}</h2>
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
        <h2 className='text-2xl font-bold mb-4'>{t('installAgent.systemdService.heading')}</h2>
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
        <h2 className='text-2xl font-bold mb-4'>{t('installAgent.connectionMode.heading')}</h2>
        <p className='text-muted-foreground mb-4'>
          {t('installAgent.connectionMode.text')}
        </p>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead><tr className='border-b'><th className='text-left py-3 px-4'>{t('installAgent.connectionMode.modeCol')}</th><th className='text-left py-3 px-4'>{t('installAgent.connectionMode.valueCol')}</th><th className='text-left py-3 px-4'>{t('installAgent.connectionMode.descCol')}</th></tr></thead>
            <tbody>
              <tr className='border-b'><td className='py-3 px-4'>WebSocket</td><td className='py-3 px-4 font-mono text-xs'>websocket</td><td className='py-3 px-4'>{t('installAgent.connectionMode.wsDesc')}</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>HTTP</td><td className='py-3 px-4 font-mono text-xs'>http</td><td className='py-3 px-4'>{t('installAgent.connectionMode.httpDesc')}</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>Pull</td><td className='py-3 px-4 font-mono text-xs'>pull</td><td className='py-3 px-4'>{t('installAgent.connectionMode.pullDesc')}</td></tr>
              <tr><td className='py-3 px-4'>Auto</td><td className='py-3 px-4 font-mono text-xs'>auto</td><td className='py-3 px-4'>{t('installAgent.connectionMode.autoDesc')}</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>{t('installAgent.opsCommands.heading')}</h2>
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
        <h2 className='text-2xl font-bold mb-4'>{t('installAgent.reinstall.heading')}</h2>
        <p className='text-muted-foreground mb-4'>
          {t('installAgent.reinstall.text')}
        </p>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>{t('installAgent.supportedArch.heading')}</h2>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead><tr className='border-b'><th className='text-left py-3 px-4'>{t('installAgent.supportedArch.archCol')}</th><th className='text-left py-3 px-4'>uname -m</th><th className='text-left py-3 px-4'>{t('installAgent.supportedArch.downloadCol')}</th></tr></thead>
            <tbody>
              <tr className='border-b'><td className='py-3 px-4'>x86_64</td><td className='py-3 px-4 font-mono text-xs'>x86_64</td><td className='py-3 px-4 font-mono text-xs'>mmwx-linux-amd64</td></tr>
              <tr><td className='py-3 px-4'>ARM64</td><td className='py-3 px-4 font-mono text-xs'>aarch64 / arm64</td><td className='py-3 px-4 font-mono text-xs'>mmwx-linux-arm64</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <Link to='/x/docs/remote-servers' className='text-primary hover:underline'>{t('installAgent.manageRemote')}</Link>
      </section>
    </XDocLayout>
  )
}
