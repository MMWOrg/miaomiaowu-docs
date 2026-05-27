import { createFileRoute, Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { XDocLayout } from '@/components/docs/x-doc-layout'
import { Card, CardContent } from '@/components/ui/card'

export const Route = createFileRoute('/x/docs/about')({
  component: AboutPage,
})

function AboutPage() {
  const { t } = useTranslation('xdocs')

  return (
    <XDocLayout title={t('about.title')} description={t('about.description')}>
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>{t('about.whatIs.heading')}</h2>
        <p className='text-muted-foreground mb-4'>
          {t('about.whatIs.text1')}
        </p>
        <p className='text-muted-foreground mb-4'>
          {t('about.whatIs.text2')}
        </p>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>{t('about.architecture.heading')}</h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto'>
              <pre>{`┌─────────────────────────────────────────┐
│           妙妙屋X (Master)              │
│                                         │
│  ┌──────────┐  ┌──────────┐  ┌───────┐ │
│  │ 节点管理  │  │ 用户管理  │  │ 证书  │ │
│  └──────────┘  └──────────┘  └───────┘ │
│  ┌──────────┐  ┌──────────┐  ┌───────┐ │
│  │ 订阅生成  │  │ 套餐管理  │  │ 模板  │ │
│  └──────────┘  └──────────┘  └───────┘ │
│                                         │
│         WebSocket / HTTP / Pull         │
└────────┬──────────┬──────────┬──────────┘
         │          │          │
    ┌────▼───┐ ┌───▼────┐ ┌──▼─────┐
    │ Agent  │ │ Agent  │ │ Agent  │
    │ Server1│ │ Server2│ │ Server3│
    │ (Xray) │ │ (Xray) │ │ (Xray) │
    └────────┘ └────────┘ └────────┘`}</pre>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>{t('about.comparison.heading')}</h2>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead>
              <tr className='border-b'>
                <th className='text-left py-3 px-4 font-semibold'>{t('about.comparison.feature')}</th>
                <th className='text-center py-3 px-4 font-semibold'>{t('about.comparison.mmw')}</th>
                <th className='text-center py-3 px-4 font-semibold'>{t('about.comparison.mmwx')}</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b'><td className='py-3 px-4'>{t('about.comparison.nodeManagement')}</td><td className='text-center'>{t('about.comparison.nodeManagementMmw')}</td><td className='text-center'>{t('about.comparison.nodeManagementMmwx')}</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>{t('about.comparison.remoteServer')}</td><td className='text-center'>-</td><td className='text-center'>Master-Agent</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>{t('about.comparison.xrayInOut')}</td><td className='text-center'>-</td><td className='text-center'>{t('about.comparison.visualManagement')}</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>{t('about.comparison.certManagement')}</td><td className='text-center'>-</td><td className='text-center'>{t('about.comparison.acmeAuto')}</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>{t('about.comparison.packageManagement')}</td><td className='text-center'>-</td><td className='text-center'>{t('about.comparison.trafficPackage')}</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>{t('about.comparison.subGeneration')}</td><td className='text-center'>{t('about.comparison.twelveClients')}</td><td className='text-center'>{t('about.comparison.twelveClients')}</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>{t('about.comparison.userManagement')}</td><td className='text-center'>{t('about.comparison.basic')}</td><td className='text-center'>{t('about.comparison.enhanced')}</td></tr>
              <tr><td className='py-3 px-4'>{t('about.comparison.templateSystem')}</td><td className='text-center'>{t('about.comparison.v3Template')}</td><td className='text-center'>{t('about.comparison.v3Template')}</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-4'>{t('about.nextSteps.heading')}</h2>
        <div className='flex gap-4'>
          <Link to='/x/docs/features' className='text-primary hover:underline'>{t('about.nextSteps.viewFeatures')}</Link>
          <Link to='/x/docs/quick-start' className='text-primary hover:underline'>{t('about.nextSteps.quickStart')}</Link>
        </div>
      </section>
    </XDocLayout>
  )
}
