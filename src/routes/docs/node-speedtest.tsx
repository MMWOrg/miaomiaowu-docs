import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'

export const Route = createFileRoute('/docs/node-speedtest')({
  component: NodeSpeedtestPage,
})

function NodeSpeedtestPage() {
  const { t } = useTranslation('docs')

  return (
    <DocLayout
      title={t('nodeSpeedtest.title')}
      description={t('nodeSpeedtest.description')}
    >
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>{t('nodeSpeedtest.overview.heading')}</h2>
        <p className='text-muted-foreground mb-4'>
          {t('nodeSpeedtest.overview.desc')}
        </p>
        <div className='grid gap-4 md:grid-cols-2'>
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-2'>{t('nodeSpeedtest.overview.local.title')}</h3>
              <p className='text-sm text-muted-foreground'>
                {t('nodeSpeedtest.overview.local.desc')}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-2'>{t('nodeSpeedtest.overview.home.title')}</h3>
              <p className='text-sm text-muted-foreground'>
                {t('nodeSpeedtest.overview.home.desc')}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>{t('nodeSpeedtest.startTest.heading')}</h2>
        <div className='space-y-4'>
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3'>{t('nodeSpeedtest.startTest.stepsHeading')}</h3>
              <div className='text-sm text-muted-foreground space-y-2'>
                <p>{t('nodeSpeedtest.startTest.step1')}</p>
                <p>{t('nodeSpeedtest.startTest.step2')}</p>
                <p>{t('nodeSpeedtest.startTest.step3')}</p>
                <p>{t('nodeSpeedtest.startTest.step4')}</p>
                <p>{t('nodeSpeedtest.startTest.step5')}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-6 text-sm text-muted-foreground'>
              {t('nodeSpeedtest.startTest.collapseNote')}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>{t('nodeSpeedtest.results.heading')}</h2>
        <Card>
          <CardContent className='pt-6 text-sm text-muted-foreground space-y-2'>
            <p>{t('nodeSpeedtest.results.speed')}</p>
            <p>{t('nodeSpeedtest.results.latency')}</p>
            <p>{t('nodeSpeedtest.results.exitIp')}</p>
          </CardContent>
        </Card>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>{t('nodeSpeedtest.homeSetup.heading')}</h2>
        <div className='space-y-4'>
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3'>{t('nodeSpeedtest.homeSetup.stepsHeading')}</h3>
              <div className='text-sm text-muted-foreground space-y-2'>
                <p>{t('nodeSpeedtest.homeSetup.step1')}</p>
                <p>{t('nodeSpeedtest.homeSetup.step2')}</p>
                <p>{t('nodeSpeedtest.homeSetup.step3')}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-6 text-sm text-muted-foreground space-y-2'>
              <p>{t('nodeSpeedtest.homeSetup.note1')}</p>
              <p>{t('nodeSpeedtest.homeSetup.note2')}</p>
              <p>{t('nodeSpeedtest.homeSetup.note3')}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>{t('nodeSpeedtest.mihomo.heading')}</h2>
        <Card>
          <CardContent className='pt-6 text-sm text-muted-foreground space-y-2'>
            <p>{t('nodeSpeedtest.mihomo.dep')}</p>
            <p>{t('nodeSpeedtest.mihomo.detectOrder')}</p>
            <p>{t('nodeSpeedtest.mihomo.manual')}</p>
          </CardContent>
        </Card>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>{t('nodeSpeedtest.notes.heading')}</h2>
        <Card>
          <CardContent className='pt-6 text-sm text-muted-foreground space-y-2'>
            <p>{t('nodeSpeedtest.notes.serial')}</p>
            <p>{t('nodeSpeedtest.notes.duration')}</p>
            <p>{t('nodeSpeedtest.notes.port')}</p>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
