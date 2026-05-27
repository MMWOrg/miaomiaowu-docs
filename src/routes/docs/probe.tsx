import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import {
  Sparkles,
  FileCode,
  Network,
  Shield,
  Activity,
  Search,
} from 'lucide-react'

export const Route = createFileRoute('/docs/probe')({
  component: ProbePage,
})

function ProbePage() {
  const { t } = useTranslation('docs')

  return (
    <DocLayout
      title={t('probe.title')}
      description={t('probe.description')}
    >
      {/* 功能说明 */}
      <section className='mb-8'>
        <div className='flex items-center gap-2 mb-4'>
          <span className='px-2 py-1 bg-destructive/10 text-destructive rounded-md text-xs border border-destructive/20'>
            {t('probe.adminFeature')}
          </span>
        </div>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground'>
              {t('probe.intro')}
            </p>
          </CardContent>
        </Card>
      </section>

      {/* 主要功能 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Sparkles className='size-5 text-primary' />
          {t('probe.mainFeatures.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-blue-500'>
              <ul className='space-y-2 text-sm'>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>{t('probe.mainFeatures.addTitle')}</strong>{t('probe.mainFeatures.addDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>{t('probe.mainFeatures.editTitle')}</strong>{t('probe.mainFeatures.editDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>{t('probe.mainFeatures.deleteTitle')}</strong>{t('probe.mainFeatures.deleteDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>{t('probe.mainFeatures.bindTitle')}</strong>{t('probe.mainFeatures.bindDesc')}</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 近期更新 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Search className='size-5 text-primary' />
          {t('probe.recentUpdates.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-primary'>
              <h4 className='font-semibold text-sm mb-2'>{t('probe.recentUpdates.searchScrollTitle')}</h4>
              <ul className='space-y-1 text-xs text-muted-foreground'>
                <li>• {t('probe.recentUpdates.searchScrollItem1')}</li>
                <li>• {t('probe.recentUpdates.searchScrollItem2')}</li>
                <li>• {t('probe.recentUpdates.searchScrollItem3')}</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 探针工作原理 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Network className='size-5 text-primary' />
          {t('probe.howItWorks.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('probe.howItWorks.desc')}
            </p>
            <div className='space-y-4'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('probe.howItWorks.flowTitle')}</h4>
                <ol className='space-y-2 text-xs text-muted-foreground'>
                  <li><strong>1.</strong> {t('probe.howItWorks.flow1')}</li>
                  <li><strong>2.</strong> {t('probe.howItWorks.flow2')}</li>
                  <li><strong>3.</strong> {t('probe.howItWorks.flow3')}</li>
                  <li><strong>4.</strong> {t('probe.howItWorks.flow4')}</li>
                  <li><strong>5.</strong> {t('probe.howItWorks.flow5')}</li>
                </ol>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('probe.howItWorks.advantagesTitle')}</h4>
                <ul className='space-y-1 text-xs text-muted-foreground'>
                  <li>• <strong>{t('probe.howItWorks.adv1Title')}</strong>{t('probe.howItWorks.adv1Desc')}</li>
                  <li>• <strong>{t('probe.howItWorks.adv2Title')}</strong>{t('probe.howItWorks.adv2Desc')}</li>
                  <li>• <strong>{t('probe.howItWorks.adv3Title')}</strong>{t('probe.howItWorks.adv3Desc')}</li>
                  <li>• <strong>{t('probe.howItWorks.adv4Title')}</strong>{t('probe.howItWorks.adv4Desc')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 配置步骤 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <FileCode className='size-5 text-primary' />
          {t('probe.configSteps.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-green-500'>
              <div className='space-y-4 text-sm'>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>1</span>
                  <div>
                    <strong>{t('probe.configSteps.step1Title')}</strong>
                    <p className='text-muted-foreground mt-1'>{t('probe.configSteps.step1Desc')}</p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>2</span>
                  <div>
                    <strong>{t('probe.configSteps.step2Title')}</strong>
                    <p className='text-muted-foreground mt-1'>
                      • <strong>{t('probe.configSteps.serverTypeLabel')}</strong>{t('probe.configSteps.serverTypeDesc')}<br/>
                      • <strong>{t('probe.configSteps.serverAddrLabel')}</strong>{t('probe.configSteps.serverAddrDesc')}
                    </p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>3</span>
                  <div>
                    <strong>{t('probe.configSteps.step3Title')}</strong>
                    <p className='text-muted-foreground mt-1'>{t('probe.configSteps.step3Desc')}</p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>4</span>
                  <div>
                    <strong>{t('probe.configSteps.step4Title')}</strong>
                    <p className='text-muted-foreground mt-1'>{t('probe.configSteps.step4Desc')}</p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>5</span>
                  <div>
                    <strong>{t('probe.configSteps.step5Title')}</strong>
                    <p className='text-muted-foreground mt-1'>{t('probe.configSteps.step5Desc')}</p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>6</span>
                  <div>
                    <strong>{t('probe.configSteps.step6Title')}</strong>
                    <p className='text-muted-foreground mt-1'>{t('probe.configSteps.step6Desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 流量统计说明 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Activity className='size-5 text-primary' />
          {t('probe.trafficStats.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('probe.trafficStats.desc')}
            </p>
            <div className='space-y-3'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('probe.trafficStats.unboundTitle')}</h4>
                <p className='text-xs text-muted-foreground'>
                  {t('probe.trafficStats.unboundDesc')}
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('probe.trafficStats.boundTitle')}</h4>
                <p className='text-xs text-muted-foreground mb-2'>
                  {t('probe.trafficStats.boundDesc')}
                </p>
                <ul className='text-xs text-muted-foreground space-y-1'>
                  <li>• {t('probe.trafficStats.bound1')}</li>
                  <li>• {t('probe.trafficStats.bound2')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 注意事项 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Shield className='size-5 text-primary' />
          {t('probe.notes.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-orange-500'>
              <ul className='space-y-2 text-sm text-muted-foreground'>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>{t('probe.notes.requirementTitle')}</strong>{t('probe.notes.requirementDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>{t('probe.notes.bindingTitle')}</strong>{t('probe.notes.bindingDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>{t('probe.notes.deleteTitle')}</strong>{t('probe.notes.deleteDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>{t('probe.notes.securityTitle')}</strong>{t('probe.notes.securityDesc')}</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
