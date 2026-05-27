import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import {
  Users,
  Sparkles,
  FileCode,
  Shield,
} from 'lucide-react'

export const Route = createFileRoute('/docs/users')({
  component: UsersPage,
})

function UsersPage() {
  const { t } = useTranslation('docs')

  return (
    <DocLayout
      title={t('users.title')}
      description={t('users.description')}
    >
      {/* 功能说明 */}
      <section className='mb-8'>
        <div className='flex items-center gap-2 mb-4'>
          <span className='px-2 py-1 bg-destructive/10 text-destructive rounded-md text-xs border border-destructive/20'>
            {t('users.adminFeature')}
          </span>
        </div>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground'>
              {t('users.intro')}
            </p>
          </CardContent>
        </Card>
      </section>

      {/* 主要功能 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Sparkles className='size-5 text-primary' />
          {t('users.mainFeatures.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-blue-500'>
              <ul className='space-y-2 text-sm'>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>{t('users.mainFeatures.viewListTitle')}</strong>{t('users.mainFeatures.viewListDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>{t('users.mainFeatures.createTitle')}</strong>{t('users.mainFeatures.createDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>{t('users.mainFeatures.editTitle')}</strong>{t('users.mainFeatures.editDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>{t('users.mainFeatures.deleteTitle')}</strong>{t('users.mainFeatures.deleteDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>{t('users.mainFeatures.assignSubTitle')}</strong>{t('users.mainFeatures.assignSubDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>{t('users.mainFeatures.resetPwdTitle')}</strong>{t('users.mainFeatures.resetPwdDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>{t('users.mainFeatures.remarkTitle')}</strong>{t('users.mainFeatures.remarkDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>{t('users.mainFeatures.customLinkTitle')}</strong>{t('users.mainFeatures.customLinkDesc')}</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 创建用户步骤 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <FileCode className='size-5 text-primary' />
          {t('users.createSteps.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-green-500'>
              <div className='space-y-4 text-sm'>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>1</span>
                  <div>
                    <strong>{t('users.createSteps.step1Title')}</strong>
                    <p className='text-muted-foreground mt-1'>{t('users.createSteps.step1Desc')}</p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>2</span>
                  <div>
                    <strong>{t('users.createSteps.step2Title')}</strong>
                    <p className='text-muted-foreground mt-1'>
                      • <strong>{t('users.createSteps.usernameLabel')}</strong>{t('users.createSteps.usernameDesc')}<br/>
                      • <strong>{t('users.createSteps.passwordLabel')}</strong>{t('users.createSteps.passwordDesc')}<br/>
                      • <strong>{t('users.createSteps.emailLabel')}</strong>{t('users.createSteps.emailDesc')}<br/>
                      • <strong>{t('users.createSteps.nicknameLabel')}</strong>{t('users.createSteps.nicknameDesc')}<br/>
                      • <strong>{t('users.createSteps.remarkLabel')}</strong>{t('users.createSteps.remarkDesc')}<br/>
                      • <strong>{t('users.createSteps.assignSubLabel')}</strong>{t('users.createSteps.assignSubDesc')}
                    </p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>3</span>
                  <div>
                    <strong>{t('users.createSteps.step3Title')}</strong>
                    <p className='text-muted-foreground mt-1'>{t('users.createSteps.step3Desc')}</p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>4</span>
                  <div>
                    <strong>{t('users.createSteps.step4Title')}</strong>
                    <p className='text-muted-foreground mt-1'>{t('users.createSteps.step4Desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 典型使用场景 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Sparkles className='size-5 text-primary' />
          {t('users.typicalScenario.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4'>
              <h4 className='font-semibold text-sm mb-2'>{t('users.typicalScenario.newUserTitle')}</h4>
              <p className='text-xs text-muted-foreground'>
                {t('users.typicalScenario.newUserDesc')}
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 注意事项 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Shield className='size-5 text-primary' />
          {t('users.notes.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-orange-500'>
              <ul className='space-y-2 text-sm text-muted-foreground'>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>{t('users.notes.uniqueTitle')}</strong>{t('users.notes.uniqueDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>{t('users.notes.deleteTitle')}</strong>{t('users.notes.deleteDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>{t('users.notes.passwordTitle')}</strong>{t('users.notes.passwordDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>{t('users.notes.assignTitle')}</strong>{t('users.notes.assignDesc')}</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 最佳实践 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Users className='size-5 text-primary' />
          {t('users.bestPractices.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-emerald-500'>
              <ul className='space-y-2 text-sm text-muted-foreground'>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-1'>💡</span>
                  <span><strong>{t('users.bestPractices.remarkTitle')}</strong>{t('users.bestPractices.remarkDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-1'>💡</span>
                  <span><strong>{t('users.bestPractices.namingTitle')}</strong>{t('users.bestPractices.namingDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-1'>💡</span>
                  <span><strong>{t('users.bestPractices.notifyTitle')}</strong>{t('users.bestPractices.notifyDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-1'>💡</span>
                  <span><strong>{t('users.bestPractices.backupTitle')}</strong>{t('users.bestPractices.backupDesc')}</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
