import { createFileRoute, Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import {
  Terminal,
  FileText,
  Folder,
  CheckCircle,
  Settings,
  ArrowRight,
} from 'lucide-react'

export const Route = createFileRoute('/docs/install-docker')({
  component: InstallDockerPage,
})

function InstallDockerPage() {
  const { t } = useTranslation('docs')

  return (
    <DocLayout
      title={t('installDocker.title')}
      description={t('installDocker.description')}
    >
      {/* 前提条件 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <CheckCircle className='size-5 text-primary' />
          {t('installDocker.prerequisites.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('installDocker.prerequisites.docker')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('installDocker.prerequisites.dockerCompose')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('installDocker.prerequisites.memory')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('installDocker.prerequisites.port')}</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* 方式一：Docker Compose（推荐） */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <FileText className='size-5 text-primary' />
          {t('installDocker.compose.heading')}
        </h2>
        <Card className='bg-gradient-to-r from-primary/10 to-blue-500/10 border-primary/20'>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('installDocker.compose.desc')}
            </p>

            <h4 className='font-semibold mb-2'>{t('installDocker.compose.step1')}</h4>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto'>
              <pre>{`version: '3.8'

services:
  miaomiaowu:
    image: ghcr.io/iluobei/miaomiaowu:latest
    container_name: miaomiaowu
    restart: unless-stopped
    user: root
    environment:
      - PORT=8080
      - DATABASE_PATH=/app/data/traffic.db
      - LOG_LEVEL=info
    ports:
      - "8080:8080"
    volumes:
      - ./data:/app/data
      - ./subscribes:/app/subscribes
      - ./rule_templates:/app/rule_templates
    healthcheck:
      test: ["CMD", "wget", "--no-verbose", "--tries=1", "--spider", "http://localhost:8080/"]
      interval: 30s
      timeout: 3s
      start_period: 5s
      retries: 3`}</pre>
            </div>

            <h4 className='font-semibold mb-2'>{t('installDocker.compose.step2')}</h4>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto'>
              <pre>docker-compose up -d</pre>
            </div>

            <h4 className='font-semibold mb-2'>{t('installDocker.compose.step3')}</h4>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto'>
              <pre>docker-compose logs -f</pre>
            </div>

            <h4 className='font-semibold mb-2'>{t('installDocker.compose.step4')}</h4>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto'>
              <pre>docker-compose pull && docker-compose up -d</pre>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 方式二：Docker Run */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Terminal className='size-5 text-primary' />
          {t('installDocker.dockerRun.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('installDocker.dockerRun.desc')}
            </p>

            <h4 className='font-semibold mb-2'>{t('installDocker.dockerRun.step1')}</h4>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto'>
              <pre>docker pull ghcr.io/iluobei/miaomiaowu:latest</pre>
            </div>

            <h4 className='font-semibold mb-2'>{t('installDocker.dockerRun.step2')}</h4>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto'>
              <pre>{`docker run -d \\
  --user root \\
  --name miaomiaowu \\
  -p 8080:8080 \\
  -v $(pwd)/mmw-data:/app/data \\
  -v $(pwd)/subscribes:/app/subscribes \\
  -v $(pwd)/rule_templates:/app/rule_templates \\
  ghcr.io/iluobei/miaomiaowu:latest`}</pre>
            </div>

            <h4 className='font-semibold mb-2'>{t('installDocker.dockerRun.paramsHeading')}</h4>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li className='flex items-start gap-2'>
                <code className='bg-muted px-1 rounded'>-d</code>
                <span>{t('installDocker.dockerRun.params.d')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <code className='bg-muted px-1 rounded'>--user root</code>
                <span>{t('installDocker.dockerRun.params.user')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <code className='bg-muted px-1 rounded'>--name miaomiaowu</code>
                <span>{t('installDocker.dockerRun.params.name')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <code className='bg-muted px-1 rounded'>-p 8080:8080</code>
                <span>{t('installDocker.dockerRun.params.port')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <code className='bg-muted px-1 rounded'>-v $(pwd)/mmw-data:/app/data</code>
                <span>{t('installDocker.dockerRun.params.dataVol')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <code className='bg-muted px-1 rounded'>-v $(pwd)/subscribes:/app/subscribes</code>
                <span>{t('installDocker.dockerRun.params.subVol')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <code className='bg-muted px-1 rounded'>-v $(pwd)/rule_templates:/app/rule_templates</code>
                <span>{t('installDocker.dockerRun.params.ruleVol')}</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* 环境变量 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Settings className='size-5 text-primary' />
          {t('installDocker.envVars.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='space-y-3'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>
                  <code className='bg-muted px-1.5 py-0.5 rounded'>PORT</code>
                </h4>
                <p className='text-xs text-muted-foreground'>
                  {t('installDocker.envVars.port')}
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>
                  <code className='bg-muted px-1.5 py-0.5 rounded'>DATABASE_PATH</code>
                </h4>
                <p className='text-xs text-muted-foreground'>
                  {t('installDocker.envVars.dbPath')}
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>
                  <code className='bg-muted px-1.5 py-0.5 rounded'>LOG_LEVEL</code>
                </h4>
                <p className='text-xs text-muted-foreground'>
                  {t('installDocker.envVars.logLevel')}
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>
                  <code className='bg-muted px-1.5 py-0.5 rounded'>JWT_SECRET</code>
                </h4>
                <p className='text-xs text-muted-foreground'>
                  {t('installDocker.envVars.jwtSecret')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 数据目录 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Folder className='size-5 text-primary' />
          {t('installDocker.dataDirs.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('installDocker.dataDirs.desc')}
            </p>
            <div className='space-y-3'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>
                  <code className='bg-muted px-1.5 py-0.5 rounded'>/app/data</code>
                </h4>
                <p className='text-xs text-muted-foreground'>
                  {t('installDocker.dataDirs.data')}
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>
                  <code className='bg-muted px-1.5 py-0.5 rounded'>/app/subscribes</code>
                </h4>
                <p className='text-xs text-muted-foreground'>
                  {t('installDocker.dataDirs.subscribes')}
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>
                  <code className='bg-muted px-1.5 py-0.5 rounded'>/app/rule_templates</code>
                </h4>
                <p className='text-xs text-muted-foreground'>
                  {t('installDocker.dataDirs.ruleTemplates')}
                </p>
              </div>
            </div>
            <p className='text-sm text-muted-foreground mt-4'>
              {t('installDocker.dataDirs.important')}
            </p>
          </CardContent>
        </Card>
      </section>

      {/* 常用命令 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Terminal className='size-5 text-primary' />
          {t('installDocker.commands.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='space-y-4'>
              <div>
                <h4 className='font-semibold mb-2'>{t('installDocker.commands.stop')}</h4>
                <div className='bg-muted rounded-lg p-3 font-mono text-sm'>
                  docker stop miaomiaowu
                </div>
              </div>
              <div>
                <h4 className='font-semibold mb-2'>{t('installDocker.commands.start')}</h4>
                <div className='bg-muted rounded-lg p-3 font-mono text-sm'>
                  docker start miaomiaowu
                </div>
              </div>
              <div>
                <h4 className='font-semibold mb-2'>{t('installDocker.commands.restart')}</h4>
                <div className='bg-muted rounded-lg p-3 font-mono text-sm'>
                  docker restart miaomiaowu
                </div>
              </div>
              <div>
                <h4 className='font-semibold mb-2'>{t('installDocker.commands.logs')}</h4>
                <div className='bg-muted rounded-lg p-3 font-mono text-sm'>
                  docker logs -f miaomiaowu
                </div>
              </div>
              <div>
                <h4 className='font-semibold mb-2'>{t('installDocker.commands.updateImage')}</h4>
                <div className='bg-muted rounded-lg p-3 font-mono text-sm overflow-x-auto'>
                  <pre>{`docker pull ghcr.io/iluobei/miaomiaowu:latest
docker stop miaomiaowu && docker rm miaomiaowu
# 然后重新运行上面的启动命令`}</pre>
                </div>
                <p className='text-xs text-muted-foreground mt-2'>
                  {t('installDocker.commands.moreUpdate')}
                  <Link to='/docs/update' className='text-primary hover:underline inline-flex items-center gap-1 mx-1'>
                    {t('installDocker.commands.versionUpdate')}
                    <ArrowRight className='size-3' />
                  </Link>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 访问系统 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4'>{t('installDocker.accessSystem.heading')}</h2>
        <Card className='bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20'>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-2'>
              {t('installDocker.accessSystem.desc')}
            </p>
            <div className='bg-background/50 rounded-lg p-4 font-mono text-lg text-center'>
              http://localhost:8080
            </div>
            <p className='text-sm text-muted-foreground mt-4'>
              {t('installDocker.accessSystem.firstVisit')}
            </p>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
