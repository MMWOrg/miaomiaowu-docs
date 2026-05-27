import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { XDocLayout } from '@/components/docs/x-doc-layout'
import { Card, CardContent } from '@/components/ui/card'

export const Route = createFileRoute('/x/docs/faq')({
  component: FaqPage,
})

function FaqItem({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <Card className='mb-4'>
      <CardContent className='pt-6'>
        <h3 className='font-semibold mb-2'>{q}</h3>
        <div className='text-sm text-muted-foreground'>{children}</div>
      </CardContent>
    </Card>
  )
}

function FaqPage() {
  const { t } = useTranslation('xdocs')

  return (
    <XDocLayout title={t('faq.title')} description={t('faq.description')}>
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>{t('faq.installDeploy.heading')}</h2>
        <FaqItem q={t('faq.installDeploy.q1')}>
          <p>{t('faq.installDeploy.a1')}</p>
        </FaqItem>
        <FaqItem q={t('faq.installDeploy.q2')}>
          <p>{t('faq.installDeploy.a2')}</p>
        </FaqItem>
        <FaqItem q={t('faq.installDeploy.q3')}>
          <p>{t('faq.installDeploy.a3')}</p>
        </FaqItem>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>{t('faq.commonOps.heading')}</h2>
        <FaqItem q={t('faq.commonOps.q1')}>
          <p>{t('faq.commonOps.a1')}</p>
        </FaqItem>
        <FaqItem q={t('faq.commonOps.q2')}>
          <p>{t('faq.commonOps.a2')}</p>
        </FaqItem>
        <FaqItem q={t('faq.commonOps.q3')}>
          <p>{t('faq.commonOps.a3p1')}</p>
          <p>{t('faq.commonOps.a3p2')}</p>
          <p>{t('faq.commonOps.a3p3')}</p>
          <p>{t('faq.commonOps.a3p4')}</p>
        </FaqItem>
        <FaqItem q={t('faq.commonOps.q4')}>
          <p>{t('faq.commonOps.a4')}</p>
        </FaqItem>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>{t('faq.serverManagement.heading')}</h2>
        <FaqItem q={t('faq.serverManagement.q1')}>
          <p>{t('faq.serverManagement.a1')}</p>
        </FaqItem>
        <FaqItem q={t('faq.serverManagement.q2')}>
          <p>{t('faq.serverManagement.a2')}</p>
        </FaqItem>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>{t('faq.protocolInbound.heading')}</h2>
        <FaqItem q={t('faq.protocolInbound.q1')}>
          <p>{t('faq.protocolInbound.a1')}</p>
        </FaqItem>
        <FaqItem q={t('faq.protocolInbound.q2')}>
          <p>{t('faq.protocolInbound.a2')}</p>
        </FaqItem>
        <FaqItem q={t('faq.protocolInbound.q3')}>
          <p>{t('faq.protocolInbound.a3')}</p>
        </FaqItem>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-4'>{t('faq.subClient.heading')}</h2>
        <FaqItem q={t('faq.subClient.q1')}>
          <p>{t('faq.subClient.a1')}</p>
        </FaqItem>
        <FaqItem q={t('faq.subClient.q2')}>
          <p>{t('faq.subClient.a2')}</p>
        </FaqItem>
      </section>
    </XDocLayout>
  )
}
