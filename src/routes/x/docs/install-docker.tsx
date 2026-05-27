import { createFileRoute, Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { XDocLayout } from '@/components/docs/x-doc-layout'
import { Card, CardContent } from '@/components/ui/card'

export const Route = createFileRoute('/x/docs/install-docker')({
  component: InstallDockerPage,
})

function InstallDockerPage() {
  const { t } = useTranslation('xdocs')

  return (
    <XDocLayout title={t('installDocker.title')} description={t('installDocker.description')}>
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>{t('installDocker.quickDeploy.heading')}</h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto'>
              <pre>{`# 拉取镜像
docker pull ghcr.io/iluobei/miaomiaowux:latest

# 运行容器
docker run -d \\
  --name miaomiaowux \\
  -p 12889:12889 \\
  -v ./data:/app/data \\
  ghcr.io/iluobei/miaomiaowux:latest`}</pre>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>Docker Compose</h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto'>
              <pre>{`version: '3'
services:
  miaomiaowux:
    image: ghcr.io/iluobei/miaomiaowux:latest
    container_name: miaomiaowux
    restart: always
    ports:
      - "12889:12889"
    volumes:
      - ./data:/app/data
    environment:
      - PORT=12889
      - JWT_SECRET=your-secret-key`}</pre>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>{t('installDocker.dataPersistence.heading')}</h2>
        <p className='text-muted-foreground mb-4'>
          {t('installDocker.dataPersistence.text')}
        </p>
      </section>

      <section>
        <Link to='/x/docs/install-agent' className='text-primary hover:underline'>{t('installDocker.nextAgent')}</Link>
      </section>
    </XDocLayout>
  )
}
