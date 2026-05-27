import { createFileRoute, Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import {
  ExternalLink,
  Sparkles,
  FileCode,
  Shield,
  ArrowRight,
  Activity,
  RefreshCw,
} from 'lucide-react'

export const Route = createFileRoute('/docs/external-subscriptions')({
  component: ExternalSubscriptionsPage,
})

function ExternalSubscriptionsPage() {
  const { t } = useTranslation('docs')

  return (
    <DocLayout
      title={t('externalSubscriptions.title')}
      description={t('externalSubscriptions.description')}
    >
      {/* 功能说明 */}
      <section className='mb-8'>
        <div className='flex items-center gap-2 mb-4'>
          <span className='px-2 py-1 bg-destructive/10 text-destructive rounded-md text-xs border border-destructive/20'>
            {t('externalSubscriptions.adminBadge')}
          </span>
        </div>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground'>
              {t('externalSubscriptions.intro')}
            </p>
          </CardContent>
        </Card>
      </section>

      {/* 主要功能 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Sparkles className='size-5 text-primary' />
          {t('externalSubscriptions.mainFeatures.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-blue-500'>
              <ul className='space-y-2 text-sm'>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span>{t('externalSubscriptions.mainFeatures.addSub')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span>{t('externalSubscriptions.mainFeatures.syncNodes')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span>{t('externalSubscriptions.mainFeatures.viewTraffic')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span>{t('externalSubscriptions.mainFeatures.deleteSub')}</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 添加外部订阅步骤 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <FileCode className='size-5 text-primary' />
          {t('externalSubscriptions.addSteps.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-green-500'>
              <div className='space-y-4 text-sm'>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>1</span>
                  <div>
                    <strong>{t('externalSubscriptions.addSteps.step1.title')}</strong>
                    <p className='text-muted-foreground mt-1'>{t('externalSubscriptions.addSteps.step1.desc')}</p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>2</span>
                  <div>
                    <strong>{t('externalSubscriptions.addSteps.step2.title')}</strong>
                    <p className='text-muted-foreground mt-1'>{t('externalSubscriptions.addSteps.step2.desc')}</p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>2</span>
                  <div>
                    <strong>{t('externalSubscriptions.addSteps.step2b.title')}</strong>
                    <p className='text-muted-foreground mt-1'>{t('externalSubscriptions.addSteps.step2b.desc')}</p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>3</span>
                  <div>
                    <strong>{t('externalSubscriptions.addSteps.step3.title')}</strong>
                    <p className='text-muted-foreground mt-1'>
                      {t('externalSubscriptions.addSteps.step3.desc')}
                    </p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>4</span>
                  <div>
                    <strong>{t('externalSubscriptions.addSteps.step4.title')}</strong>
                    <p className='text-muted-foreground mt-1'>{t('externalSubscriptions.addSteps.step4.desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 流量信息说明 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Activity className='size-5 text-primary' />
          {t('externalSubscriptions.trafficInfo.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('externalSubscriptions.trafficInfo.desc')}
            </p>
            <div className='grid md:grid-cols-2 gap-3'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('externalSubscriptions.trafficInfo.upload.title')}</h4>
                <p className='text-xs text-muted-foreground'>
                  {t('externalSubscriptions.trafficInfo.upload.desc')}
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('externalSubscriptions.trafficInfo.download.title')}</h4>
                <p className='text-xs text-muted-foreground'>
                  {t('externalSubscriptions.trafficInfo.download.desc')}
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('externalSubscriptions.trafficInfo.total.title')}</h4>
                <p className='text-xs text-muted-foreground'>
                  {t('externalSubscriptions.trafficInfo.total.desc')}
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('externalSubscriptions.trafficInfo.expiry.title')}</h4>
                <p className='text-xs text-muted-foreground'>
                  {t('externalSubscriptions.trafficInfo.expiry.desc')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 同步机制 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <RefreshCw className='size-5 text-primary' />
          {t('externalSubscriptions.syncMechanism.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='space-y-3'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('externalSubscriptions.syncMechanism.manual.title')}</h4>
                <p className='text-xs text-muted-foreground'>
                  {t('externalSubscriptions.syncMechanism.manual.desc')}
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('externalSubscriptions.syncMechanism.force.title')}</h4>
                <p className='text-xs text-muted-foreground'>
                  {t('externalSubscriptions.syncMechanism.force.desc')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 功能关联 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <ExternalLink className='size-5 text-primary' />
          {t('externalSubscriptions.relations.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='grid md:grid-cols-2 gap-3'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('externalSubscriptions.relations.toNodes.title')}</h4>
                <p className='text-xs text-muted-foreground'>
                  {t('externalSubscriptions.relations.toNodes.desc')}
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('externalSubscriptions.relations.toProxyProviders.title')}</h4>
                <p className='text-xs text-muted-foreground'>
                  {t('externalSubscriptions.relations.toProxyProviders.descPrefix')}
                  <Link to='/docs/proxy-providers' className='text-primary hover:underline inline-flex items-center gap-1 mx-1'>
                    {t('externalSubscriptions.relations.toProxyProviders.link')}
                    <ArrowRight className='size-3' />
                  </Link>
                  {t('externalSubscriptions.relations.toProxyProviders.descSuffix')}
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('externalSubscriptions.relations.toGenerator.title')}</h4>
                <p className='text-xs text-muted-foreground'>
                  {t('externalSubscriptions.relations.toGenerator.descPrefix')}
                  <Link to='/docs/generator' className='text-primary hover:underline inline-flex items-center gap-1 mx-1'>
                    {t('externalSubscriptions.relations.toGenerator.link')}
                    <ArrowRight className='size-3' />
                  </Link>
                  {t('externalSubscriptions.relations.toGenerator.descSuffix')}
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('externalSubscriptions.relations.toTraffic.title')}</h4>
                <p className='text-xs text-muted-foreground'>
                  {t('externalSubscriptions.relations.toTraffic.desc')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 注意事项 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Shield className='size-5 text-primary' />
          {t('externalSubscriptions.notes.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-orange-500'>
              <ul className='space-y-2 text-sm text-muted-foreground'>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span>{t('externalSubscriptions.notes.deleteNote')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span>{t('externalSubscriptions.notes.linkPrivacy')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span>{t('externalSubscriptions.notes.userAgent')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span>{t('externalSubscriptions.notes.trafficNote')}</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
