import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import {
  Sparkles,
  Shield,
  Zap,
  Users,
  Network,
  FileCode,
  Github,
  Heart,
} from 'lucide-react'

export const Route = createFileRoute('/docs/about')({
  component: AboutPage,
})

function AboutPage() {
  const { t } = useTranslation('docs')

  return (
    <DocLayout
      title={t('about.title')}
      description={t('about.description')}
    >
      {/* 项目介绍 */}
      <section className='mb-8'>
        <Card className='bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20'>
          <CardContent className='pt-6'>
            <div className='flex items-start gap-4'>
              <span className='text-4xl'>🏠</span>
              <div>
                <h2 className='text-xl font-bold mb-2'>{t('about.intro.name')}</h2>
                <p className='text-muted-foreground'>
                  {t('about.intro.text1')}
                </p>
                <p className='text-muted-foreground'>
                  {t('about.intro.text2')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 设计理念 */}
      <section className='mb-8'>
        <h2 className='text-2xl font-bold mb-4 flex items-center gap-2'>
          <Heart className='size-6 text-primary' />
          {t('about.designPhilosophy.heading')}
        </h2>
        <div className='space-y-4 text-muted-foreground'>
          <p>
            {t('about.designPhilosophy.text')}
          </p>
          <ul className='space-y-2 ml-4'>
            <li className='flex items-start gap-2'>
              <span className='text-primary mt-1'>•</span>
              <span>{t('about.designPhilosophy.item1')}</span>
            </li>
            <li className='flex items-start gap-2'>
              <span className='text-primary mt-1'>•</span>
              <span>{t('about.designPhilosophy.item2')}</span>
            </li>
            <li className='flex items-start gap-2'>
              <span className='text-primary mt-1'>•</span>
              <span>{t('about.designPhilosophy.item3')}</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 核心功能 */}
      <section className='mb-8'>
        <h2 className='text-2xl font-bold mb-4 flex items-center gap-2'>
          <Sparkles className='size-6 text-primary' />
          {t('about.coreFeatures.heading')}
        </h2>
        <div className='grid gap-4 md:grid-cols-2'>
          <Card>
            <CardContent className='pt-6'>
              <div className='flex items-start gap-3'>
                <Network className='size-5 text-primary mt-1' />
                <div>
                  <h3 className='font-semibold mb-1'>{t('about.coreFeatures.nodeManagement.title')}</h3>
                  <p className='text-sm text-muted-foreground'>
                    {t('about.coreFeatures.nodeManagement.desc')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <div className='flex items-start gap-3'>
                <Zap className='size-5 text-primary mt-1' />
                <div>
                  <h3 className='font-semibold mb-1'>{t('about.coreFeatures.subscriptionGeneration.title')}</h3>
                  <p className='text-sm text-muted-foreground'>
                    {t('about.coreFeatures.subscriptionGeneration.desc')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <div className='flex items-start gap-3'>
                <Users className='size-5 text-primary mt-1' />
                <div>
                  <h3 className='font-semibold mb-1'>{t('about.coreFeatures.userManagement.title')}</h3>
                  <p className='text-sm text-muted-foreground'>
                    {t('about.coreFeatures.userManagement.desc')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <div className='flex items-start gap-3'>
                <Shield className='size-5 text-primary mt-1' />
                <div>
                  <h3 className='font-semibold mb-1'>{t('about.coreFeatures.trafficStats.title')}</h3>
                  <p className='text-sm text-muted-foreground'>
                    {t('about.coreFeatures.trafficStats.desc')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <div className='flex items-start gap-3'>
                <FileCode className='size-5 text-primary mt-1' />
                <div>
                  <h3 className='font-semibold mb-1'>{t('about.coreFeatures.customRules.title')}</h3>
                  <p className='text-sm text-muted-foreground'>
                    {t('about.coreFeatures.customRules.desc')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <div className='flex items-start gap-3'>
                <Network className='size-5 text-primary mt-1' />
                <div>
                  <h3 className='font-semibold mb-1'>{t('about.coreFeatures.chainProxy.title')}</h3>
                  <p className='text-sm text-muted-foreground'>
                    {t('about.coreFeatures.chainProxy.desc')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 技术栈 */}
      <section className='mb-8'>
        <h2 className='text-2xl font-bold mb-4'>{t('about.techStack.heading')}</h2>
        <div className='grid gap-4 md:grid-cols-2'>
          <div className='bg-muted/30 rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>{t('about.techStack.backend')}</h3>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>{t('about.techStack.goLang')}</li>
              <li>{t('about.techStack.sqlite')}</li>
              <li>• RESTful API</li>
            </ul>
          </div>
          <div className='bg-muted/30 rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>{t('about.techStack.frontend')}</h3>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>• React 19</li>
              <li>• TanStack Router</li>
              <li>• Tailwind CSS</li>
              <li>• shadcn/ui</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 开源信息 */}
      <section className='mb-8'>
        <h2 className='text-2xl font-bold mb-4 flex items-center gap-2'>
          <Github className='size-6' />
          {t('about.openSource.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('about.openSource.text')}
            </p>
            <div className='flex gap-4'>
              <a
                href='https://github.com/iluobei/miaomiaowu'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 text-primary hover:underline'
              >
                <Github className='size-4' />
                {t('about.openSource.repo')}
              </a>
            </div>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
