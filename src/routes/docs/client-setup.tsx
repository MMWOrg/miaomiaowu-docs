import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import { Settings, Lightbulb, CheckCircle } from 'lucide-react'

export const Route = createFileRoute('/docs/client-setup')({
  component: ClientSetupPage,
})

function ClientSetupPage() {
  const { t } = useTranslation('docs')

  return (
    <DocLayout
      title={t('clientSetup.title')}
      description={t('clientSetup.description')}
    >
      {/* 通用导入步骤 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Settings className='size-5 text-primary' />
          {t('clientSetup.generalSteps.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-green-500'>
              <ol className='space-y-3 text-sm'>
                <li className='flex items-start gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>
                    1
                  </span>
                  <span>{t('clientSetup.generalSteps.step1')}</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>
                    2
                  </span>
                  <span>{t('clientSetup.generalSteps.step2')}</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>
                    3
                  </span>
                  <span>{t('clientSetup.generalSteps.step3')}</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>
                    4
                  </span>
                  <span>{t('clientSetup.generalSteps.step4')}</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>
                    5
                  </span>
                  <span>{t('clientSetup.generalSteps.step5')}</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>
                    6
                  </span>
                  <span>{t('clientSetup.generalSteps.step6')}</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>
                    7
                  </span>
                  <span>{t('clientSetup.generalSteps.step7')}</span>
                </li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 提示 */}
      <section className='mb-8'>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-yellow-500'>
              <p className='text-sm flex items-start gap-2'>
                <Lightbulb className='size-5 text-yellow-500 flex-shrink-0 mt-0.5' />
                <span>
                  {t('clientSetup.tip')}
                </span>
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 各客户端配置 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4'>{t('clientSetup.clients.heading')}</h2>
        <div className='space-y-4'>
          {/* Clash Verge */}
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3'>Clash Verge (Windows/macOS/Linux)</h3>
              <ol className='space-y-2 text-sm text-muted-foreground'>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='size-4 text-green-500 mt-0.5 flex-shrink-0' />
                  <span>{t('clientSetup.clients.clashVerge.step1')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='size-4 text-green-500 mt-0.5 flex-shrink-0' />
                  <span>{t('clientSetup.clients.clashVerge.step2')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='size-4 text-green-500 mt-0.5 flex-shrink-0' />
                  <span>{t('clientSetup.clients.clashVerge.step3')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='size-4 text-green-500 mt-0.5 flex-shrink-0' />
                  <span>{t('clientSetup.clients.clashVerge.step4')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='size-4 text-green-500 mt-0.5 flex-shrink-0' />
                  <span>{t('clientSetup.clients.clashVerge.step5')}</span>
                </li>
              </ol>
            </CardContent>
          </Card>

          {/* Shadowrocket */}
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3'>Shadowrocket (iOS)</h3>
              <ol className='space-y-2 text-sm text-muted-foreground'>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='size-4 text-green-500 mt-0.5 flex-shrink-0' />
                  <span>{t('clientSetup.clients.shadowrocket.step1')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='size-4 text-green-500 mt-0.5 flex-shrink-0' />
                  <span>{t('clientSetup.clients.shadowrocket.step2')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='size-4 text-green-500 mt-0.5 flex-shrink-0' />
                  <span>{t('clientSetup.clients.shadowrocket.step3')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='size-4 text-green-500 mt-0.5 flex-shrink-0' />
                  <span>{t('clientSetup.clients.shadowrocket.step4')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='size-4 text-green-500 mt-0.5 flex-shrink-0' />
                  <span>{t('clientSetup.clients.shadowrocket.step5')}</span>
                </li>
              </ol>
            </CardContent>
          </Card>

          {/* Clash Meta for Android */}
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3'>Clash Meta for Android</h3>
              <ol className='space-y-2 text-sm text-muted-foreground'>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='size-4 text-green-500 mt-0.5 flex-shrink-0' />
                  <span>{t('clientSetup.clients.clashMeta.step1')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='size-4 text-green-500 mt-0.5 flex-shrink-0' />
                  <span>{t('clientSetup.clients.clashMeta.step2')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='size-4 text-green-500 mt-0.5 flex-shrink-0' />
                  <span>{t('clientSetup.clients.clashMeta.step3')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='size-4 text-green-500 mt-0.5 flex-shrink-0' />
                  <span>{t('clientSetup.clients.clashMeta.step4')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='size-4 text-green-500 mt-0.5 flex-shrink-0' />
                  <span>{t('clientSetup.clients.clashMeta.step5')}</span>
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </section>
    </DocLayout>
  )
}
