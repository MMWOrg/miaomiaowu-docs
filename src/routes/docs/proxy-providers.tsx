import { createFileRoute, Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import {
  Sparkles,
  FileCode,
  Shield,
  ArrowRight,
  Settings,
  Zap,
} from 'lucide-react'

export const Route = createFileRoute('/docs/proxy-providers')({
  component: ProxyProvidersPage,
})

function ProxyProvidersPage() {
  const { t } = useTranslation('docs')

  return (
    <DocLayout
      title={t('proxyProviders.title')}
      description={t('proxyProviders.description')}
    >
      {/* 功能说明 */}
      <section className='mb-8'>
        <div className='flex items-center gap-2 mb-4'>
          <span className='px-2 py-1 bg-destructive/10 text-destructive rounded-md text-xs border border-destructive/20'>
            {t('proxyProviders.adminFeature')}
          </span>
          <span className='px-2 py-1 bg-primary/10 text-primary rounded-md text-xs border border-primary/20'>
            {t('proxyProviders.requiresSetting')}
          </span>
        </div>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('proxyProviders.intro')}
            </p>
            <div className='bg-muted/30 rounded-lg p-3 border border-border'>
              <p className='text-sm'>
                <strong>{t('proxyProviders.prerequisiteLabel')}</strong>{t('proxyProviders.prerequisiteDesc')}
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 主要功能 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Sparkles className='size-5 text-primary' />
          {t('proxyProviders.mainFeatures.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-blue-500'>
              <ul className='space-y-2 text-sm'>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>{t('proxyProviders.mainFeatures.createTitle')}</strong>{t('proxyProviders.mainFeatures.createDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>{t('proxyProviders.mainFeatures.modesTitle')}</strong>{t('proxyProviders.mainFeatures.modesDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>{t('proxyProviders.mainFeatures.filterTitle')}</strong>{t('proxyProviders.mainFeatures.filterDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>{t('proxyProviders.mainFeatures.batchTitle')}</strong>{t('proxyProviders.mainFeatures.batchDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>{t('proxyProviders.mainFeatures.healthTitle')}</strong>{t('proxyProviders.mainFeatures.healthDesc')}</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 处理模式说明 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Settings className='size-5 text-primary' />
          {t('proxyProviders.processingModes.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='space-y-4'>
              <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-blue-500'>
                <h4 className='font-semibold text-sm mb-2 flex items-center gap-2'>
                  <span className='size-2 rounded-full bg-blue-500'></span>
                  {t('proxyProviders.processingModes.clientTitle')}
                </h4>
                <p className='text-sm text-muted-foreground mb-2'>
                  {t('proxyProviders.processingModes.clientDesc')}
                </p>
                <ul className='text-xs text-muted-foreground space-y-1 list-disc list-inside'>
                  <li>{t('proxyProviders.processingModes.clientPro')}</li>
                  <li>{t('proxyProviders.processingModes.clientCon')}</li>
                </ul>
              </div>
              <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-purple-500'>
                <h4 className='font-semibold text-sm mb-2 flex items-center gap-2'>
                  <span className='size-2 rounded-full bg-purple-500'></span>
                  {t('proxyProviders.processingModes.mmwTitle')}
                </h4>
                <p className='text-sm text-muted-foreground mb-2'>
                  {t('proxyProviders.processingModes.mmwDesc')}
                </p>
                <ul className='text-xs text-muted-foreground space-y-1 list-disc list-inside'>
                  <li>{t('proxyProviders.processingModes.mmwPro')}</li>
                  <li>{t('proxyProviders.processingModes.mmwCon')}</li>
                </ul>
                <div className='mt-3 p-2 bg-purple-500/10 rounded border border-purple-500/20'>
                  <p className='text-xs text-purple-600 dark:text-purple-400'>
                    {t('proxyProviders.processingModes.mmwPreview')}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 创建代理集合步骤 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <FileCode className='size-5 text-primary' />
          {t('proxyProviders.createSteps.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-green-500'>
              <div className='space-y-4 text-sm'>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>1</span>
                  <div>
                    <strong>{t('proxyProviders.createSteps.step1Title')}</strong>
                    <p className='text-muted-foreground mt-1'>
                      {t('proxyProviders.createSteps.step1Desc')}
                      <Link to='/docs/external-subscriptions' className='text-primary hover:underline inline-flex items-center gap-1 mx-1'>
                        {t('proxyProviders.createSteps.step1Link')}
                        <ArrowRight className='size-3' />
                      </Link>
                      {t('proxyProviders.createSteps.step1Suffix')}
                    </p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>2</span>
                  <div>
                    <strong>{t('proxyProviders.createSteps.step2Title')}</strong>
                    <p className='text-muted-foreground mt-1'>{t('proxyProviders.createSteps.step2Desc')}</p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>3</span>
                  <div>
                    <strong>{t('proxyProviders.createSteps.step3Title')}</strong>
                    <p className='text-muted-foreground mt-1'>{t('proxyProviders.createSteps.step3Desc')}</p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>4</span>
                  <div>
                    <strong>{t('proxyProviders.createSteps.step4Title')}</strong>
                    <p className='text-muted-foreground mt-1'>
                      {t('proxyProviders.createSteps.step4Desc')}
                    </p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>5</span>
                  <div>
                    <strong>{t('proxyProviders.createSteps.step5Title')}</strong>
                    <p className='text-muted-foreground mt-1'>
                      {t('proxyProviders.createSteps.step5Desc')}
                    </p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>6</span>
                  <div>
                    <strong>{t('proxyProviders.createSteps.step6Title')}</strong>
                    <p className='text-muted-foreground mt-1'>{t('proxyProviders.createSteps.step6Desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>


      {/* 初级模式 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Zap className='size-5 text-primary' />
          {t('proxyProviders.basicMode.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('proxyProviders.basicMode.desc')}
              <Link to='/docs/proxy-providers-advanced' className='text-primary hover:underline inline-flex items-center gap-1'>
                {t('proxyProviders.basicMode.advancedLink')}
                <ArrowRight className='size-3' />
              </Link>
              {t('proxyProviders.basicMode.descSuffix')}
            </p>
            <div className='grid md:grid-cols-2 gap-3'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('proxyProviders.basicMode.byRegionTitle')}</h4>
                <p className='text-xs text-muted-foreground'>
                  {t('proxyProviders.basicMode.byRegionDesc')}
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('proxyProviders.basicMode.byProtocolTitle')}</h4>
                <p className='text-xs text-muted-foreground'>
                  {t('proxyProviders.basicMode.byProtocolDesc')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 自定义创建说明 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Zap className='size-5 text-primary' />
          {t('proxyProviders.advancedMode.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('proxyProviders.advancedMode.desc')}
              <a style={{ textDecoration: 'underline' , color: 'orange'}} href='https://wiki.metacubex.one/config/proxy-providers/'>{t('proxyProviders.advancedMode.docLink')}</a>
              {t('proxyProviders.advancedMode.descSuffix')}
            </p>
          </CardContent>
        </Card>
      </section>

      {/* 使用场景 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Sparkles className='size-5 text-primary' />
          {t('proxyProviders.scenarios.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='space-y-3'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('proxyProviders.scenarios.editNodesTitle')}</h4>
                <p className='text-xs text-muted-foreground'>
                  {t('proxyProviders.scenarios.editNodesDesc1')}
                  <Link to='/docs/edit-nodes' className='text-primary hover:underline inline-flex items-center gap-1 mx-1'>
                    {t('proxyProviders.scenarios.editNodesLink')}
                    <ArrowRight className='size-3' />
                  </Link>
                  {t('proxyProviders.scenarios.editNodesDesc2')}
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('proxyProviders.scenarios.simplifyTitle')}</h4>
                <p className='text-xs text-muted-foreground'>
                  {t('proxyProviders.scenarios.simplifyDesc')}
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('proxyProviders.scenarios.autoUpdateTitle')}</h4>
                <p className='text-xs text-muted-foreground'>
                  {t('proxyProviders.scenarios.autoUpdateDesc')}
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
          {t('proxyProviders.notes.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-orange-500'>
              <ul className='space-y-2 text-sm text-muted-foreground'>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>{t('proxyProviders.notes.settingTitle')}</strong>{t('proxyProviders.notes.settingDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>{t('proxyProviders.notes.compatTitle')}</strong>{t('proxyProviders.notes.compatDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>{t('proxyProviders.notes.filterTitle')}</strong>{t('proxyProviders.notes.filterDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>{t('proxyProviders.notes.geoipTitle')}</strong>{t('proxyProviders.notes.geoipDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>{t('proxyProviders.notes.deleteTitle')}</strong>{t('proxyProviders.notes.deleteDesc')}</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
