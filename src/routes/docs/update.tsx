import { createFileRoute, Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import {
  RefreshCw,
  Settings,
  Terminal,
  Container,
  Database,
  ArrowRight,
  Sparkles,
  FileText,
  Bug,
} from 'lucide-react'

export const Route = createFileRoute('/docs/update')({
  component: UpdatePage,
})

function UpdatePage() {
  const { t } = useTranslation('docs')

  return (
    <DocLayout
      title={t('update.title')}
      description={t('update.description')}
    >
      {/* 网页端更新提示 - 醒目展示 */}
      <section className='mb-8'>
        <Card className='bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-500/30'>
          <CardContent className='pt-6'>
            <div className='flex items-start gap-4'>
              <div className='flex-shrink-0'>
                <Sparkles className='size-10 text-green-500' />
              </div>
              <div className='flex-1'>
                <h2 className='text-2xl font-bold text-green-600 dark:text-green-400 mb-2'>
                  {t('update.webUpdate.heroTitle')}
                </h2>
                <p className='text-lg text-muted-foreground mb-4'>
                  {t('update.webUpdate.heroDesc')}
                </p>
                <div className='bg-background/50 rounded-lg p-4 border border-green-500/20'>
                  <div className='flex items-center gap-3'>
                    <Settings className='size-5 text-green-500' />
                    <span className='font-medium'>{t('update.webUpdate.howTo')}</span>
                  </div>
                  <p className='mt-2 text-muted-foreground'>
                    {t('update.webUpdate.howToSteps')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 近期文档同步 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Sparkles className='size-5 text-primary' />
          {t('update.recentSync.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('update.recentSync.desc')}
            </p>
            <div className='space-y-3 text-sm'>
              <div className='bg-muted/30 rounded-lg p-3 border-l-4 border-primary'>
                <p className='font-medium'>{t('update.recentSync.change1.title')}</p>
                <p className='text-xs text-muted-foreground mt-1'>
                  {t('update.recentSync.change1.desc')}
                  <code className='bg-muted px-1 rounded mx-1'>dialer-proxy-group</code>
                  {t('update.recentSync.change1.seeAlso')}
                  <Link to='/docs/chain-proxy' className='text-primary hover:underline ml-1'>{t('update.recentSync.change1.link')}</Link>
                  。
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-3 border-l-4 border-primary'>
                <p className='font-medium'>{t('update.recentSync.change2.title')}</p>
                <p className='text-xs text-muted-foreground mt-1'>
                  {t('update.recentSync.change2.desc')}
                  <Link to='/docs/edit-nodes' className='text-primary hover:underline ml-1'>{t('update.recentSync.change2.link')}</Link>
                  。
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-3 border-l-4 border-primary'>
                <p className='font-medium'>{t('update.recentSync.change3.title')}</p>
                <p className='text-xs text-muted-foreground mt-1'>
                  {t('update.recentSync.change3.desc')}
                  <Link to='/docs/probe' className='text-primary hover:underline ml-1'>{t('update.recentSync.change3.link')}</Link>
                  。
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-3 border-l-4 border-primary'>
                <p className='font-medium'>{t('update.recentSync.change4.title')}</p>
                <p className='text-xs text-muted-foreground mt-1'>
                  {t('update.recentSync.change4.desc')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 更新日志展示 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <FileText className='size-5 text-primary' />
          {t('update.changelog.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('update.changelog.desc')}
            </p>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('update.changelog.headings')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('update.changelog.lists')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('update.changelog.linksCode')}</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Debug 日志功能 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Bug className='size-5 text-primary' />
          {t('update.debugLog.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('update.debugLog.desc')}
            </p>
            <div className='space-y-4'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('update.debugLog.featuresHeading')}</h4>
                <ul className='text-xs text-muted-foreground space-y-1'>
                  <li>{t('update.debugLog.feature1')}</li>
                  <li>{t('update.debugLog.feature2')}</li>
                  <li>{t('update.debugLog.feature3')}</li>
                  <li>{t('update.debugLog.feature4')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 网页端更新详细步骤 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <RefreshCw className='size-5 text-primary' />
          {t('update.webUpdateSteps.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('update.webUpdateSteps.desc')}
            </p>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-green-500'>
              <div className='space-y-4 text-sm'>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>1</span>
                  <div>
                    <strong>{t('update.webUpdateSteps.step1.title')}</strong>
                    <p className='text-muted-foreground mt-1'>{t('update.webUpdateSteps.step1.desc')}</p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>2</span>
                  <div>
                    <strong>{t('update.webUpdateSteps.step2.title')}</strong>
                    <p className='text-muted-foreground mt-1'>{t('update.webUpdateSteps.step2.desc')}</p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>3</span>
                  <div>
                    <strong>{t('update.webUpdateSteps.step3.title')}</strong>
                    <p className='text-muted-foreground mt-1'>{t('update.webUpdateSteps.step3.desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Docker Compose 更新（推荐） */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <FileText className='size-5 text-primary' />
          {t('update.dockerCompose.heading')}
        </h2>
        <Card className='bg-gradient-to-r from-primary/10 to-blue-500/10 border-primary/20'>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('update.dockerCompose.desc')}
            </p>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto'>
              <pre>{`# 进入 docker-compose.yml 所在目录
cd /path/to/your/docker-compose

# 拉取最新镜像并重启服务
docker-compose pull && docker-compose up -d`}</pre>
            </div>
            <p className='text-sm text-muted-foreground'>
              {t('update.dockerCompose.note')}
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Docker Run 更新 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Container className='size-5 text-primary' />
          {t('update.dockerRun.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('update.dockerRun.desc')}
            </p>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto'>
              <pre>{`# 拉取最新镜像
docker pull ghcr.io/iluobei/miaomiaowu:latest

# 停止并删除旧容器
docker stop miaomiaowu && docker rm miaomiaowu

# 重新运行启动命令（使用原有的启动参数）
docker run -d \\
  --user root \\
  --name miaomiaowu \\
  -p 8080:8080 \\
  -v $(pwd)/mmw-data:/app/data \\
  -v $(pwd)/subscribes:/app/subscribes \\
  -v $(pwd)/rule_templates:/app/rule_templates \\
  ghcr.io/iluobei/miaomiaowu:latest`}</pre>
            </div>
            <p className='text-sm text-muted-foreground'>
              {t('update.dockerRun.note')}
            </p>
          </CardContent>
        </Card>
      </section>

      {/* 一键脚本更新 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Terminal className='size-5 text-primary' />
          {t('update.scriptUpdate.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('update.scriptUpdate.desc')}
            </p>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto'>
              <pre>curl -sL https://raw.githubusercontent.com/iluobei/miaomiaowu/main/install.sh | sudo bash -s update</pre>
            </div>
            <p className='text-sm text-muted-foreground'>
              {t('update.scriptUpdate.note')}
            </p>
          </CardContent>
        </Card>
      </section>

      {/* 简易安装更新 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Terminal className='size-5 text-primary' />
          {t('update.simpleUpdate.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('update.simpleUpdate.desc')}
            </p>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto'>
              <pre>curl -sL https://raw.githubusercontent.com/iluobei/miaomiaowu/main/quick-install.sh | bash -s update</pre>
            </div>
            <p className='text-sm text-muted-foreground'>
              {t('update.simpleUpdate.note')}
            </p>
          </CardContent>
        </Card>
      </section>

      {/* 数据备份 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Database className='size-5 text-primary' />
          {t('update.backup.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-orange-500/10 rounded-lg p-4 border-l-4 border-orange-500'>
              <p className='text-sm text-muted-foreground mb-3'>
                {t('update.backup.important')}
              </p>
              <div className='space-y-3'>
                <div className='bg-muted/50 rounded-lg p-3'>
                  <h4 className='font-semibold text-sm mb-2'>{t('update.backup.dockerDeploy')}</h4>
                  <div className='bg-muted rounded p-2 font-mono text-xs overflow-x-auto'>
                    <pre>{`cp -r ./mmw-data ./mmw-data-backup
cp -r ./subscribes ./subscribes-backup`}</pre>
                  </div>
                </div>
                <div className='bg-muted/50 rounded-lg p-3'>
                  <h4 className='font-semibold text-sm mb-2'>{t('update.backup.scriptInstall')}</h4>
                  <div className='bg-muted rounded p-2 font-mono text-xs overflow-x-auto'>
                    <pre>sudo cp -r /etc/mmw /etc/mmw-backup</pre>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 相关链接 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4'>{t('update.relatedDocs.heading')}</h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='grid md:grid-cols-2 gap-3'>
              <Link to='/docs/install-docker' className='bg-muted/30 rounded-lg p-4 hover:bg-muted/50 transition-colors block'>
                <h4 className='font-semibold text-sm mb-2 flex items-center gap-2'>
                  {t('update.relatedDocs.dockerInstall.title')}
                  <ArrowRight className='size-3' />
                </h4>
                <p className='text-xs text-muted-foreground'>
                  {t('update.relatedDocs.dockerInstall.desc')}
                </p>
              </Link>
              <Link to='/docs/install-direct' className='bg-muted/30 rounded-lg p-4 hover:bg-muted/50 transition-colors block'>
                <h4 className='font-semibold text-sm mb-2 flex items-center gap-2'>
                  {t('update.relatedDocs.directInstall.title')}
                  <ArrowRight className='size-3' />
                </h4>
                <p className='text-xs text-muted-foreground'>
                  {t('update.relatedDocs.directInstall.desc')}
                </p>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
