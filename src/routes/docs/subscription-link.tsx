import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import {
  Sparkles,
  FileCode,
  Network,
  Shield,
  Copy,
  QrCode,
  ExternalLink,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/docs/subscription-link')({
  component: SubscriptionLinkPage,
})

// 客户端类型配置
const CLIENT_TYPES = [
  { type: 'clash', name: 'Clash' },
  { type: 'stash', name: 'Stash' },
  { type: 'shadowrocket', name: 'Shadowrocket' },
  { type: 'surfboard', name: 'Surfboard' },
  { type: 'surge', name: 'Surge' },
  { type: 'surgemac', name: 'Surge Mac' },
  { type: 'loon', name: 'Loon' },
  { type: 'qx', name: 'QuantumultX' },
  { type: 'egern', name: 'Egern' },
  { type: 'sing-box', name: 'sing-box' },
  { type: 'v2ray', name: 'V2Ray' },
  { type: 'uri', name: 'URI' },
]

function SubscriptionLinkPage() {
  const { t } = useTranslation('docs')

  return (
    <DocLayout
      title={t('subscriptionLink.title')}
      description={t('subscriptionLink.description')}
    >
      {/* 主要功能 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Sparkles className='size-5 text-primary' />
          {t('subscriptionLink.mainFeatures.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('subscriptionLink.mainFeatures.intro')}
            </p>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-blue-500'>
              <ul className='space-y-2 text-sm'>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>{t('subscriptionLink.mainFeatures.cardDisplayTitle')}</strong>{t('subscriptionLink.mainFeatures.cardDisplayDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>{t('subscriptionLink.mainFeatures.viewLinkTitle')}</strong>{t('subscriptionLink.mainFeatures.viewLinkDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>{t('subscriptionLink.mainFeatures.multiClientTitle')}</strong>{t('subscriptionLink.mainFeatures.multiClientDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>{t('subscriptionLink.mainFeatures.importClashTitle')}</strong>{t('subscriptionLink.mainFeatures.importClashDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>{t('subscriptionLink.mainFeatures.qrCodeTitle')}</strong>{t('subscriptionLink.mainFeatures.qrCodeDesc')}</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 界面演示 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4'>{t('subscriptionLink.preview.heading')}</h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-sm text-muted-foreground mb-4'>
              {t('subscriptionLink.preview.desc')}
            </p>

            {/* 模拟订阅卡片 */}
            <div className='bg-muted/30 rounded-lg p-4 space-y-4'>
              <div className='flex items-start justify-between'>
                <div>
                  <h4 className='font-semibold'>{t('subscriptionLink.preview.cardTitle')}</h4>
                  <p className='text-sm text-muted-foreground'>{t('subscriptionLink.preview.cardDesc')}</p>
                </div>
                <div className='text-xs text-muted-foreground'>
                  {t('subscriptionLink.preview.version')}
                </div>
              </div>

              <div className='bg-background rounded p-2 text-xs font-mono text-muted-foreground truncate'>
                https://example.com/api/subscribe/abc123...
              </div>

              <div className='flex gap-2 flex-wrap'>
                <Button size='sm' variant='outline' className='gap-1'>
                  <Copy className='size-3' />
                  {t('subscriptionLink.preview.copy')}
                </Button>
                <Button size='sm' variant='outline' className='gap-1'>
                  <ExternalLink className='size-3' />
                  {t('subscriptionLink.preview.importClash')}
                </Button>
                <Button size='sm' variant='outline' className='gap-1'>
                  <QrCode className='size-3' />
                  {t('subscriptionLink.preview.qrCode')}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 使用步骤 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <FileCode className='size-5 text-primary' />
          {t('subscriptionLink.steps.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-green-500'>
              <div className='space-y-4 text-sm'>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>1</span>
                  <div>
                    <strong>{t('subscriptionLink.steps.step1Title')}</strong>
                    <p className='text-muted-foreground mt-1'>{t('subscriptionLink.steps.step1Desc')}</p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>2</span>
                  <div>
                    <strong>{t('subscriptionLink.steps.step2Title')}</strong>
                    <p className='text-muted-foreground mt-1'>
                      • <strong>{t('subscriptionLink.steps.step2PcTitle')}</strong>{t('subscriptionLink.steps.step2PcDesc')}<br/>
                      • <strong>{t('subscriptionLink.steps.step2MobileTitle')}</strong>{t('subscriptionLink.steps.step2MobileDesc')}<br/>
                      • <strong>{t('subscriptionLink.steps.step2ClashTitle')}</strong>{t('subscriptionLink.steps.step2ClashDesc')}
                    </p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>3</span>
                  <div>
                    <strong>{t('subscriptionLink.steps.step3Title')}</strong>
                    <p className='text-muted-foreground mt-1'>{t('subscriptionLink.steps.step3Desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 支持的客户端格式 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Network className='size-5 text-primary' />
          {t('subscriptionLink.clientFormats.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-sm text-muted-foreground mb-4'>
              {t('subscriptionLink.clientFormats.desc')}
            </p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
              {CLIENT_TYPES.map((client) => (
                <div
                  key={client.type}
                  className='bg-muted/30 rounded px-3 py-2 flex items-center gap-2 text-xs'
                >
                  <div className='size-4 rounded bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary'>
                    {client.name.charAt(0)}
                  </div>
                  <span className='font-medium'>{client.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 注意事项 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Shield className='size-5 text-primary' />
          {t('subscriptionLink.notes.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-orange-500'>
              <ul className='space-y-2 text-sm text-muted-foreground'>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span>{t('subscriptionLink.notes.note1')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span>{t('subscriptionLink.notes.note2')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span>{t('subscriptionLink.notes.note3')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span>{t('subscriptionLink.notes.note4')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span>{t('subscriptionLink.notes.note5')}</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
