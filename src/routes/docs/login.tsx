import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  LogIn,
  User,
  Lock,
  Shield,
  AlertCircle,
  CheckCircle,
  KeyRound,
} from 'lucide-react'

export const Route = createFileRoute('/docs/login')({
  component: LoginDocPage,
})

function LoginDocPage() {
  const { t } = useTranslation('docs')

  return (
    <DocLayout
      title={t('login.title')}
      description={t('login.description')}
    >
      {/* 登录页面说明 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <LogIn className='size-5 text-primary' />
          {t('login.loginPage.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('login.loginPage.desc')}
            </p>

            {/* 登录表单演示 */}
            <div className='max-w-sm mx-auto p-6 border rounded-lg bg-muted/20'>
              <div className='text-center mb-6'>
                <span className='text-3xl'>🏠</span>
                <h3 className='text-lg font-semibold mt-2'>{t('login.loginPage.demo.appName')}</h3>
                <p className='text-sm text-muted-foreground'>{t('login.loginPage.demo.loginPrompt')}</p>
              </div>
              <div className='space-y-4'>
                <div className='space-y-2'>
                  <Label htmlFor='demo-username'>{t('login.loginPage.demo.username')}</Label>
                  <Input id='demo-username' placeholder={t('login.loginPage.demo.usernamePlaceholder')} disabled />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='demo-password'>{t('login.loginPage.demo.password')}</Label>
                  <Input id='demo-password' type='password' placeholder={t('login.loginPage.demo.passwordPlaceholder')} disabled />
                </div>
                <Button className='w-full' disabled>
                  {t('login.loginPage.demo.loginBtn')}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 首次访问 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <KeyRound className='size-5 text-primary' />
          {t('login.firstVisit.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('login.firstVisit.desc')}
            </p>

            <ol className='space-y-4 text-sm'>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>
                  1
                </span>
                <div>
                  <p className='font-medium'>{t('login.firstVisit.step1.title')}</p>
                  <p className='text-muted-foreground'>
                    {t('login.firstVisit.step1.desc')}
                  </p>
                </div>
              </li>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>
                  2
                </span>
                <div>
                  <p className='font-medium'>{t('login.firstVisit.step2.title')}</p>
                  <p className='text-muted-foreground'>
                    {t('login.firstVisit.step2.desc')}
                  </p>
                </div>
              </li>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>
                  3
                </span>
                <div>
                  <p className='font-medium'>{t('login.firstVisit.step3.title')}</p>
                  <p className='text-muted-foreground'>
                    {t('login.firstVisit.step3.desc')}
                  </p>
                </div>
              </li>
            </ol>
          </CardContent>
        </Card>
      </section>

      {/* 用户类型 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <User className='size-5 text-primary' />
          {t('login.userTypes.heading')}
        </h2>
        <div className='grid gap-4 md:grid-cols-2'>
          <Card className='border-destructive/30'>
            <CardContent className='pt-6'>
              <div className='flex items-start gap-3'>
                <Shield className='size-5 text-destructive mt-0.5' />
                <div>
                  <h3 className='font-semibold text-destructive'>{t('login.userTypes.admin.title')}</h3>
                  <ul className='mt-2 space-y-1 text-sm text-muted-foreground'>
                    <li>{t('login.userTypes.admin.perm1')}</li>
                    <li>{t('login.userTypes.admin.perm2')}</li>
                    <li>{t('login.userTypes.admin.perm3')}</li>
                    <li>{t('login.userTypes.admin.perm4')}</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-6'>
              <div className='flex items-start gap-3'>
                <User className='size-5 text-primary mt-0.5' />
                <div>
                  <h3 className='font-semibold'>{t('login.userTypes.user.title')}</h3>
                  <ul className='mt-2 space-y-1 text-sm text-muted-foreground'>
                    <li>{t('login.userTypes.user.perm1')}</li>
                    <li>{t('login.userTypes.user.perm2')}</li>
                    <li>{t('login.userTypes.user.perm3')}</li>
                    <li>{t('login.userTypes.user.perm4')}</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 登录后导航 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <CheckCircle className='size-5 text-primary' />
          {t('login.afterLogin.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('login.afterLogin.desc')}
            </p>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('login.afterLogin.adminRedirect')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('login.afterLogin.userRedirect')}</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Token 管理 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Lock className='size-5 text-primary' />
          {t('login.tokenManagement.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('login.tokenManagement.desc')}
            </p>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('login.tokenManagement.autoSave')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('login.tokenManagement.autoRefresh')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('login.tokenManagement.logout')}</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* 常见问题 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <AlertCircle className='size-5 text-orange-500' />
          {t('login.faq.heading')}
        </h2>
        <Card className='border-orange-500/20'>
          <CardContent className='pt-6'>
            <div className='space-y-4'>
              <div>
                <h4 className='font-semibold mb-2'>{t('login.faq.forgotPassword.q')}</h4>
                <p className='text-sm text-muted-foreground'>
                  {t('login.faq.forgotPassword.a')}
                </p>
              </div>
              <div>
                <h4 className='font-semibold mb-2'>{t('login.faq.forgotAdminPassword.q')}</h4>
                <p className='text-sm text-muted-foreground'>
                  {t('login.faq.forgotAdminPassword.a')}
                </p>
              </div>
              <div>
                <h4 className='font-semibold mb-2'>{t('login.faq.autoLogout.q')}</h4>
                <p className='text-sm text-muted-foreground'>
                  {t('login.faq.autoLogout.a')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
