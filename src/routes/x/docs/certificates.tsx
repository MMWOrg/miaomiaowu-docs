import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { XDocLayout } from '@/components/docs/x-doc-layout'
import { Card, CardContent } from '@/components/ui/card'

export const Route = createFileRoute('/x/docs/certificates')({
  component: CertificatesPage,
})

function CertificatesPage() {
  const { t } = useTranslation('xdocs')

  return (
    <XDocLayout title={t('certificates.title')} description={t('certificates.description')}>
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>{t('certificates.overview.heading')}</h2>
        <p className='text-muted-foreground'>{t('certificates.overview.text')}</p>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>{t('certificates.dnsProviders.heading')}</h2>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead><tr className='border-b'><th className='text-left py-3 px-4'>{t('certificates.dnsProviders.providerCol')}</th><th className='text-left py-3 px-4'>{t('certificates.dnsProviders.credentialCol')}</th></tr></thead>
            <tbody>
              <tr className='border-b'><td className='py-3 px-4'>Cloudflare</td><td className='py-3 px-4'>API Token</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>{t('certificates.dnsProviders.aliyun')}</td><td className='py-3 px-4'>AccessKey ID + Secret</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>{t('certificates.dnsProviders.tencent')}</td><td className='py-3 px-4'>SecretId + SecretKey</td></tr>
              <tr><td className='py-3 px-4'>Namesilo</td><td className='py-3 px-4'>API Key</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>{t('certificates.applyCert.heading')}</h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='text-sm space-y-3 text-muted-foreground'>
              <p>{t('certificates.applyCert.step1')}</p>
              <p>{t('certificates.applyCert.step2')}</p>
              <p>{t('certificates.applyCert.step3')}</p>
              <p>{t('certificates.applyCert.step4')}</p>
              <p>{t('certificates.applyCert.step5')}</p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>{t('certificates.autoRenew.heading')}</h2>
        <p className='text-muted-foreground'>{t('certificates.autoRenew.text')}</p>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>{t('certificates.storage.heading')}</h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto'>
              <pre>{`证书文件路径（远程服务器）：
  证书: /root/cert/{domain}/fullchain.pem
  私钥: /root/cert/{domain}/privkey.pem`}</pre>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-4'>{t('certificates.useCases.heading')}</h2>
        <ul className='space-y-2 text-sm text-muted-foreground'>
          <li>{t('certificates.useCases.item1')}</li>
          <li>{t('certificates.useCases.item2')}</li>
          <li>{t('certificates.useCases.item3')}</li>
        </ul>
      </section>
    </XDocLayout>
  )
}
