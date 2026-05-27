import { createFileRoute, Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import {
  Zap,
  Sparkles,
  FileCode,
  Network,
  Shield,
  ArrowRight,
} from 'lucide-react'

export const Route = createFileRoute('/docs/generator')({
  component: GeneratorPage,
})

function GeneratorPage() {
  const { t } = useTranslation('docs')

  return (
    <DocLayout
      title={t('generator.title')}
      description={t('generator.description')}
    >
      {/* 功能说明 */}
      <section className='mb-8'>
        <div className='flex items-center gap-2 mb-4'>
          <span className='px-2 py-1 bg-destructive/10 text-destructive rounded-md text-xs border border-destructive/20'>
            {t('generator.adminFeature')}
          </span>
        </div>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('generator.intro')}
            </p>
          </CardContent>
        </Card>
      </section>

      {/* 主要功能 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Sparkles className='size-5 text-primary' />
          {t('generator.mainFeatures.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-blue-500'>
              <ul className='space-y-2 text-sm'>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>{t('generator.mainFeatures.createNewTitle')}</strong>{t('generator.mainFeatures.createNewDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>{t('generator.mainFeatures.proxyGroupTitle')}</strong>{t('generator.mainFeatures.proxyGroupDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>{t('generator.mainFeatures.sublinkTitle')}</strong>{t('generator.mainFeatures.sublinkDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>{t('generator.mainFeatures.builtinTemplateTitle')}</strong>{t('generator.mainFeatures.builtinTemplateDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>{t('generator.mainFeatures.chainProxyTitle')}</strong>{t('generator.mainFeatures.chainProxyDesc')}</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 创建订阅步骤 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <FileCode className='size-5 text-primary' />
          {t('generator.steps.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-green-500'>
              <div className='space-y-4 text-sm'>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>1</span>
                  <div>
                    <strong>{t('generator.steps.step1Title')}</strong>
                    <p className='text-muted-foreground mt-1'>{t('generator.steps.step1Desc')}</p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>2</span>
                  <div>
                    <strong>{t('generator.steps.step2Title')}</strong>
                    <p className='text-muted-foreground mt-1'>
                      {t('generator.steps.step2Desc')}
                    </p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>3</span>
                  <div>
                    <strong>{t('generator.steps.step3Title')}</strong>
                    <p className='text-muted-foreground mt-1'>
                      • <strong>{t('generator.steps.step3CustomRulesTitle')}</strong>{t('generator.steps.step3CustomRulesDesc')}<br/>
                      • <strong>{t('generator.steps.step3UseTemplateTitle')}</strong>{t('generator.steps.step3UseTemplateDesc')}
                    </p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>4</span>
                  <div>
                    <strong>{t('generator.steps.step4Title')}</strong>
                    <p className='text-muted-foreground mt-1'>
                      {t('generator.steps.step4DescPrefix')}
                      <Link to='/docs/edit-nodes' className='text-primary hover:underline inline-flex items-center gap-1 mx-1'>
                        {t('generator.steps.step4LinkText')}
                        <ArrowRight className='size-3' />
                      </Link>
                      {t('generator.steps.step4DescSuffix')}
                    </p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>5</span>
                  <div>
                    <strong>{t('generator.steps.step5Title')}</strong>
                    <p className='text-muted-foreground mt-1'>{t('generator.steps.step5Desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 订阅类型说明 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Network className='size-5 text-primary' />
          {t('generator.subscriptionType.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4'>
              <h4 className='font-semibold text-sm mb-2 flex items-center gap-2'>
                <span className='size-2 rounded-full bg-orange-500'></span>
                {t('generator.subscriptionType.clashFormat')}
              </h4>
              <p className='text-sm text-muted-foreground mb-3'>
                {t('generator.subscriptionType.clashDesc')}
              </p>
              <div className='text-xs space-y-2'>
                <p><strong>{t('generator.subscriptionType.supportedClients')}</strong></p>
                <p className='text-muted-foreground'>{t('generator.subscriptionType.clientList')}</p>
                <p className='mt-2'><strong>{t('generator.subscriptionType.configFeatures')}</strong></p>
                <ul className='text-muted-foreground space-y-1 list-disc list-inside'>
                  <li>{t('generator.subscriptionType.feature1')}</li>
                  <li>{t('generator.subscriptionType.feature2')}</li>
                  <li>{t('generator.subscriptionType.feature3')}</li>
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
          {t('generator.notes.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-orange-500'>
              <ul className='space-y-2 text-sm text-muted-foreground'>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>{t('generator.notes.formatTitle')}</strong>{t('generator.notes.formatDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>{t('generator.notes.nodeUpdateTitle')}</strong>{t('generator.notes.nodeUpdateDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>{t('generator.notes.deleteTitle')}</strong>{t('generator.notes.deleteDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>{t('generator.notes.assignTitle')}</strong>{t('generator.notes.assignDesc')}</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 最佳实践 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Zap className='size-5 text-primary' />
          {t('generator.bestPractices.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-emerald-500'>
              <ul className='space-y-2 text-sm text-muted-foreground'>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-1'>💡</span>
                  <span><strong>{t('generator.bestPractices.namingTitle')}</strong>{t('generator.bestPractices.namingDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-1'>💡</span>
                  <span><strong>{t('generator.bestPractices.descriptionTitle')}</strong>{t('generator.bestPractices.descriptionDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-1'>💡</span>
                  <span><strong>{t('generator.bestPractices.testTitle')}</strong>{t('generator.bestPractices.testDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-1'>💡</span>
                  <span><strong>{t('generator.bestPractices.autoUpdateTitle')}</strong>{t('generator.bestPractices.autoUpdateDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-1'>💡</span>
                  <span><strong>{t('generator.bestPractices.scenarioTitle')}</strong>{t('generator.bestPractices.scenarioDesc')}</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
