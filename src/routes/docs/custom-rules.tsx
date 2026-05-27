import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import {
  FileCode,
  Sparkles,
  Network,
  Shield,
  Database,
  Settings,
} from 'lucide-react'

export const Route = createFileRoute('/docs/custom-rules')({
  component: CustomRulesPage,
})

function CustomRulesPage() {
  const { t } = useTranslation('docs')

  return (
    <DocLayout
      title={t('customRules.title')}
      description={t('customRules.description')}
    >
      <section className='mb-8'>
        <div className='flex items-center gap-2 mb-4'>
          <span className='px-2 py-1 bg-destructive/10 text-destructive rounded-md text-xs border border-destructive/20'>
            {t('customRules.adminFeature')}
          </span>
        </div>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground'>{t('customRules.intro')}</p>
          </CardContent>
        </Card>
      </section>

      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Sparkles className='size-5 text-primary' />
          {t('customRules.mainFeatures.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-blue-500'>
              <ul className='space-y-2 text-sm'>
                <li className='flex items-start gap-2'><span className='text-primary mt-1'>•</span><span><strong>{t('customRules.mainFeatures.viewTitle')}</strong>{t('customRules.mainFeatures.viewDesc')}</span></li>
                <li className='flex items-start gap-2'><span className='text-primary mt-1'>•</span><span><strong>{t('customRules.mainFeatures.createTitle')}</strong>{t('customRules.mainFeatures.createDesc')}</span></li>
                <li className='flex items-start gap-2'><span className='text-primary mt-1'>•</span><span><strong>{t('customRules.mainFeatures.editTitle')}</strong>{t('customRules.mainFeatures.editDesc')}</span></li>
                <li className='flex items-start gap-2'><span className='text-primary mt-1'>•</span><span><strong>{t('customRules.mainFeatures.deleteTitle')}</strong>{t('customRules.mainFeatures.deleteDesc')}</span></li>
                <li className='flex items-start gap-2'><span className='text-primary mt-1'>•</span><span><strong>{t('customRules.mainFeatures.behaviorTitle')}</strong>{t('customRules.mainFeatures.behaviorDesc')}</span></li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Network className='size-5 text-primary' />
          {t('customRules.ruleTypes.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>{t('customRules.ruleTypes.desc')}</p>
            <div className='grid md:grid-cols-3 gap-3'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>DNS</h4>
                <p className='text-xs text-muted-foreground'>{t('customRules.ruleTypes.dnsDesc')}</p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('customRules.ruleTypes.rulesLabel')}</h4>
                <p className='text-xs text-muted-foreground'>{t('customRules.ruleTypes.rulesDesc')}</p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('customRules.ruleTypes.ruleProvidersLabel')}</h4>
                <p className='text-xs text-muted-foreground'>{t('customRules.ruleTypes.ruleProvidersDesc')}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <FileCode className='size-5 text-primary' />
          {t('customRules.createSteps.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-green-500'>
              <div className='space-y-4 text-sm'>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>1</span>
                  <div><strong>{t('customRules.createSteps.step1Title')}</strong><p className='text-muted-foreground mt-1'>{t('customRules.createSteps.step1Desc')}</p></div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>2</span>
                  <div>
                    <strong>{t('customRules.createSteps.step2Title')}</strong>
                    <p className='text-muted-foreground mt-1'>
                      • <strong>{t('customRules.createSteps.ruleNameLabel')}</strong>{t('customRules.createSteps.ruleNameDesc')}<br/>
                      • <strong>{t('customRules.createSteps.ruleTypeLabel')}</strong>{t('customRules.createSteps.ruleTypeDesc')}<br/>
                      • <strong>{t('customRules.createSteps.ruleBehaviorLabel')}</strong>{t('customRules.createSteps.ruleBehaviorDesc')}
                    </p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>3</span>
                  <div>
                    <strong>{t('customRules.createSteps.step3Title')}</strong>
                    <p className='text-muted-foreground mt-1'>
                      {t('customRules.createSteps.step3Desc')}<br/>
                      <code className='bg-muted px-2 py-0.5 rounded text-xs'>DOMAIN-SUFFIX,google.com</code>
                    </p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>4</span>
                  <div><strong>{t('customRules.createSteps.step4Title')}</strong><p className='text-muted-foreground mt-1'>{t('customRules.createSteps.step4Desc')}</p></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Sparkles className='size-5 text-primary' />
          {t('customRules.scenarios.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='grid md:grid-cols-2 gap-4'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('customRules.scenarios.adBlockTitle')}</h4>
                <div className='bg-background rounded p-2 font-mono text-xs space-y-1'>
                  <div>DOMAIN-SUFFIX,doubleclick.net</div>
                  <div>DOMAIN-SUFFIX,googleadservices.com</div>
                  <div>DOMAIN-KEYWORD,advertisement</div>
                </div>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('customRules.scenarios.directTitle')}</h4>
                <div className='bg-background rounded p-2 font-mono text-xs space-y-1'>
                  <div>DOMAIN-SUFFIX,baidu.com</div>
                  <div>DOMAIN-SUFFIX,taobao.com</div>
                  <div>GEOIP,CN</div>
                </div>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('customRules.scenarios.streamingTitle')}</h4>
                <div className='bg-background rounded p-2 font-mono text-xs space-y-1'>
                  <div>DOMAIN-SUFFIX,netflix.com</div>
                  <div>DOMAIN-SUFFIX,youtube.com</div>
                  <div>DOMAIN-KEYWORD,spotify</div>
                </div>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('customRules.scenarios.lanTitle')}</h4>
                <div className='bg-background rounded p-2 font-mono text-xs space-y-1'>
                  <div>IP-CIDR,192.168.0.0/16</div>
                  <div>IP-CIDR,10.0.0.0/8</div>
                  <div>IP-CIDR,172.16.0.0/12</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Database className='size-5 text-primary' />
          {t('customRules.referenceInSub.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>{t('customRules.referenceInSub.desc')}</p>
            <div className='space-y-4'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('customRules.referenceInSub.exampleTitle')}</h4>
                <div className='bg-background rounded p-3 font-mono text-xs space-y-1'>
                  <div>rules:</div>
                  <div className='ml-4'>- RULE-SET,reject,🐟 漏网之鱼</div>
                  <div className='ml-4'>- GEOIP,CN,DIRECT</div>
                  <div className='ml-4'>- MATCH,PROXY</div>
                </div>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('customRules.referenceInSub.priorityTitle')}</h4>
                <p className='text-xs text-muted-foreground'>{t('customRules.referenceInSub.priorityDesc')}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Shield className='size-5 text-primary' />
          {t('customRules.notes.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-orange-500'>
              <ul className='space-y-2 text-sm text-muted-foreground'>
                <li className='flex items-start gap-2'><span className='text-orange-500 mt-1'>⚠</span><span><strong>{t('customRules.notes.formatTitle')}</strong>{t('customRules.notes.formatDesc')}</span></li>
                <li className='flex items-start gap-2'><span className='text-orange-500 mt-1'>⚠</span><span><strong>{t('customRules.notes.groupExistTitle')}</strong>{t('customRules.notes.groupExistDesc')}</span></li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Settings className='size-5 text-primary' />
          {t('customRules.maintenance.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='space-y-3'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('customRules.maintenance.checkTitle')}</h4>
                <p className='text-xs text-muted-foreground'>{t('customRules.maintenance.checkDesc')}</p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('customRules.maintenance.feedbackTitle')}</h4>
                <p className='text-xs text-muted-foreground'>{t('customRules.maintenance.feedbackDesc')}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
