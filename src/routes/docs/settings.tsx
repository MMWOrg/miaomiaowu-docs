import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  UserCog,
  User,
  Mail,
  Lock,
  Save,
  Shield,
  Sparkles,
  ShieldCheck,
  Bug,
} from 'lucide-react'

export const Route = createFileRoute('/docs/settings')({
  component: SettingsDocPage,
})

function SettingsDocPage() {
  const { t } = useTranslation('docs')

  return (
    <DocLayout
      title={t('settings.title')}
      description={t('settings.description')}
    >
      {/* 功能介绍 */}
      <section className='mb-8'>
        <Card className='bg-muted/30'>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground'>
              {t('settings.intro')}
            </p>
          </CardContent>
        </Card>
      </section>

      {/* 主要功能 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Sparkles className='size-5 text-primary' />
          {t('settings.mainFeatures.heading')}
        </h2>
        <div className='grid gap-4 md:grid-cols-2'>
          <Card>
            <CardContent className='pt-4'>
              <div className='flex items-start gap-3'>
                <User className='size-5 text-primary mt-0.5' />
                <div>
                  <h4 className='font-semibold'>{t('settings.mainFeatures.nicknameTitle')}</h4>
                  <p className='text-sm text-muted-foreground'>
                    {t('settings.mainFeatures.nicknameDesc')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-4'>
              <div className='flex items-start gap-3'>
                <Mail className='size-5 text-primary mt-0.5' />
                <div>
                  <h4 className='font-semibold'>{t('settings.mainFeatures.emailTitle')}</h4>
                  <p className='text-sm text-muted-foreground'>
                    {t('settings.mainFeatures.emailDesc')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-4'>
              <div className='flex items-start gap-3'>
                <Lock className='size-5 text-primary mt-0.5' />
                <div>
                  <h4 className='font-semibold'>{t('settings.mainFeatures.passwordTitle')}</h4>
                  <p className='text-sm text-muted-foreground'>
                    {t('settings.mainFeatures.passwordDesc')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-4'>
              <div className='flex items-start gap-3'>
                <ShieldCheck className='size-5 text-primary mt-0.5' />
                <div>
                  <h4 className='font-semibold'>{t('settings.mainFeatures.twoFaTitle')}</h4>
                  <p className='text-sm text-muted-foreground'>
                    {t('settings.mainFeatures.twoFaDesc')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-4'>
              <div className='flex items-start gap-3'>
                <Bug className='size-5 text-primary mt-0.5' />
                <div>
                  <h4 className='font-semibold'>{t('settings.mainFeatures.debugTitle')}</h4>
                  <p className='text-sm text-muted-foreground'>
                    {t('settings.mainFeatures.debugDesc')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 设置页面演示 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <UserCog className='size-5 text-primary' />
          {t('settings.settingsPage.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='max-w-lg mx-auto space-y-6'>
              {/* 个人信息 */}
              <div className='space-y-4'>
                <h3 className='font-semibold'>{t('settings.settingsPage.personalInfo')}</h3>
                <div className='space-y-4'>
                  <div className='space-y-2'>
                    <Label htmlFor='demo-username'>{t('settings.settingsPage.usernameLabel')}</Label>
                    <Input id='demo-username' value='demo_user' disabled />
                    <p className='text-xs text-muted-foreground'>{t('settings.settingsPage.usernameNote')}</p>
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='demo-nickname'>{t('settings.settingsPage.nicknameLabel')}</Label>
                    <Input id='demo-nickname' placeholder={t('settings.settingsPage.nicknamePlaceholder')} defaultValue={t('settings.settingsPage.nicknameDefault')} />
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='demo-email'>{t('settings.settingsPage.emailLabel')}</Label>
                    <Input id='demo-email' type='email' placeholder={t('settings.settingsPage.emailPlaceholder')} defaultValue='demo@example.com' />
                  </div>
                </div>
                <Button disabled className='gap-2'>
                  <Save className='size-4' />
                  {t('settings.settingsPage.saveInfo')}
                </Button>
              </div>

              <hr />

              {/* 修改密码 */}
              <div className='space-y-4'>
                <h3 className='font-semibold'>{t('settings.settingsPage.changePassword')}</h3>
                <div className='space-y-4'>
                  <div className='space-y-2'>
                    <Label htmlFor='demo-old-password'>{t('settings.settingsPage.currentPwdLabel')}</Label>
                    <Input id='demo-old-password' type='password' placeholder={t('settings.settingsPage.currentPwdPlaceholder')} />
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='demo-new-password'>{t('settings.settingsPage.newPwdLabel')}</Label>
                    <Input id='demo-new-password' type='password' placeholder={t('settings.settingsPage.newPwdPlaceholder')} />
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='demo-confirm-password'>{t('settings.settingsPage.confirmPwdLabel')}</Label>
                    <Input id='demo-confirm-password' type='password' placeholder={t('settings.settingsPage.confirmPwdPlaceholder')} />
                  </div>
                </div>
                <Button disabled className='gap-2'>
                  <Lock className='size-4' />
                  {t('settings.settingsPage.changePasswordBtn')}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 修改步骤 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4'>{t('settings.editInfo.heading')}</h2>
        <Card>
          <CardContent className='pt-6'>
            <ol className='space-y-4 text-sm'>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>1</span>
                <div>
                  <p className='font-medium'>{t('settings.editInfo.step1Title')}</p>
                  <p className='text-muted-foreground'>{t('settings.editInfo.step1Desc')}</p>
                </div>
              </li>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>2</span>
                <div>
                  <p className='font-medium'>{t('settings.editInfo.step2Title')}</p>
                  <p className='text-muted-foreground'>{t('settings.editInfo.step2Desc')}</p>
                </div>
              </li>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>3</span>
                <div>
                  <p className='font-medium'>{t('settings.editInfo.step3Title')}</p>
                  <p className='text-muted-foreground'>{t('settings.editInfo.step3Desc')}</p>
                </div>
              </li>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>4</span>
                <div>
                  <p className='font-medium'>{t('settings.editInfo.step4Title')}</p>
                  <p className='text-muted-foreground'>{t('settings.editInfo.step4Desc')}</p>
                </div>
              </li>
            </ol>
          </CardContent>
        </Card>
      </section>

      {/* 修改密码步骤 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4'>{t('settings.changePwd.heading')}</h2>
        <Card>
          <CardContent className='pt-6'>
            <ol className='space-y-4 text-sm'>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>1</span>
                <div>
                  <p className='font-medium'>{t('settings.changePwd.step1Title')}</p>
                  <p className='text-muted-foreground'>{t('settings.changePwd.step1Desc')}</p>
                </div>
              </li>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>2</span>
                <div>
                  <p className='font-medium'>{t('settings.changePwd.step2Title')}</p>
                  <p className='text-muted-foreground'>{t('settings.changePwd.step2Desc')}</p>
                </div>
              </li>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>3</span>
                <div>
                  <p className='font-medium'>{t('settings.changePwd.step3Title')}</p>
                  <p className='text-muted-foreground'>{t('settings.changePwd.step3Desc')}</p>
                </div>
              </li>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>4</span>
                <div>
                  <p className='font-medium'>{t('settings.changePwd.step4Title')}</p>
                  <p className='text-muted-foreground'>{t('settings.changePwd.step4Desc')}</p>
                </div>
              </li>
            </ol>
          </CardContent>
        </Card>
      </section>

      {/* 双因素认证 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <ShieldCheck className='size-5 text-primary' />
          {t('settings.twoFa.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('settings.twoFa.desc')}
            </p>
            <div className='space-y-4'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('settings.twoFa.setupTitle')}</h4>
                <ol className='text-xs text-muted-foreground space-y-2'>
                  <li>{t('settings.twoFa.setup1')}</li>
                  <li>{t('settings.twoFa.setup2')}</li>
                  <li>{t('settings.twoFa.setup3')}</li>
                  <li>{t('settings.twoFa.setup4')}</li>
                </ol>
              </div>
              <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-orange-500'>
                <h4 className='font-semibold text-sm mb-2'>{t('settings.twoFa.recoveryTitle')}</h4>
                <p className='text-xs text-muted-foreground'>
                  {t('settings.twoFa.recoveryDesc')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 调试日志 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Bug className='size-5 text-primary' />
          {t('settings.debugLog.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('settings.debugLog.desc')}
            </p>
            <div className='space-y-4'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('settings.debugLog.usageTitle')}</h4>
                <ul className='text-xs text-muted-foreground space-y-1'>
                  <li>• {t('settings.debugLog.usage1')}</li>
                  <li>• {t('settings.debugLog.usage2')}</li>
                  <li>• {t('settings.debugLog.usage3')}</li>
                  <li>• {t('settings.debugLog.usage4')}</li>
                  <li>• {t('settings.debugLog.usage5')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 注意事项 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Shield className='size-5 text-orange-500' />
          {t('settings.notes.heading')}
        </h2>
        <Card className='border-orange-500/20'>
          <CardContent className='pt-6'>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li className='flex items-start gap-2'>
                <span className='text-orange-500 mt-1'>⚠</span>
                <span><strong>{t('settings.notes.usernameTitle')}</strong>{t('settings.notes.usernameDesc')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-orange-500 mt-1'>⚠</span>
                <span><strong>{t('settings.notes.passwordTitle')}</strong>{t('settings.notes.passwordDesc')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-orange-500 mt-1'>⚠</span>
                <span><strong>{t('settings.notes.afterChangeTitle')}</strong>{t('settings.notes.afterChangeDesc')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-orange-500 mt-1'>⚠</span>
                <span><strong>{t('settings.notes.forgotTitle')}</strong>{t('settings.notes.forgotDesc')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-orange-500 mt-1'>⚠</span>
                <span><strong>{t('settings.notes.twoFaTitle')}</strong>{t('settings.notes.twoFaDesc')}</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
