import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { XDocLayout } from '@/components/docs/x-doc-layout'

export const Route = createFileRoute('/x/docs/xray-outbounds')({
  component: XrayOutboundsPage,
})

function XrayOutboundsPage() {
  const { t } = useTranslation('xdocs')

  return (
    <XDocLayout title={t('xrayOutbounds.title')} description={t('xrayOutbounds.description')}>
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>{t('xrayOutbounds.configHeading')}</h2>
        <p className='text-muted-foreground mb-4'>{t('xrayOutbounds.configText')}</p>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead><tr className='border-b'><th className='text-left py-3 px-4'>{t('xrayOutbounds.typeCol')}</th><th className='text-left py-3 px-4'>{t('xrayOutbounds.descCol')}</th></tr></thead>
            <tbody>
              <tr className='border-b'><td className='py-3 px-4'>Freedom</td><td className='py-3 px-4'>{t('xrayOutbounds.freedomDesc')}</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>Blackhole</td><td className='py-3 px-4'>{t('xrayOutbounds.blackholeDesc')}</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>VLESS/VMess/Trojan/SS</td><td className='py-3 px-4'>{t('xrayOutbounds.proxyDesc')}</td></tr>
              <tr><td className='py-3 px-4'>Tunnel</td><td className='py-3 px-4'>{t('xrayOutbounds.tunnelDesc')}</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>{t('xrayOutbounds.routingHeading')}</h2>
        <p className='text-muted-foreground mb-4'>{t('xrayOutbounds.routingText')}</p>
        <ul className='space-y-2 text-sm text-muted-foreground'>
          <li>- {t('xrayOutbounds.routing1')}</li>
          <li>- {t('xrayOutbounds.routing2')}</li>
          <li>- {t('xrayOutbounds.routing3')}</li>
          <li>- {t('xrayOutbounds.routing4')}</li>
          <li>- {t('xrayOutbounds.routing5')}</li>
        </ul>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-4'>{t('xrayOutbounds.operationsHeading')}</h2>
        <p className='text-muted-foreground'>{t('xrayOutbounds.operationsText')}</p>
      </section>
    </XDocLayout>
  )
}
