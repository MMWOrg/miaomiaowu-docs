import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import {
  HelpCircle,
  MessageCircle,
  Bug,
  Github,
} from 'lucide-react'

export const Route = createFileRoute('/docs/faq')({
  component: FaqPage,
})

function FaqPage() {
  const { t } = useTranslation('docs')

  const faqs = [
    {
      question: t('faq.items.subNotShowing.q'),
      answer: t('faq.items.subNotShowing.a'),
    },
    {
      question: t('faq.items.importFailed.q'),
      answer: t('faq.items.importFailed.a'),
    },
    {
      question: t('faq.items.supportedFormats.q'),
      answer: t('faq.items.supportedFormats.a'),
    },
    {
      question: t('faq.items.addNodes.q'),
      answer: t('faq.items.addNodes.a'),
    },
    {
      question: t('faq.items.chainProxy.q'),
      answer: t('faq.items.chainProxy.a'),
    },
    {
      question: t('faq.items.trafficStats.q'),
      answer: t('faq.items.trafficStats.a'),
    },
    {
      question: t('faq.items.forgotAdminPwd.q'),
      answer: t('faq.items.forgotAdminPwd.a'),
    },
    {
      question: t('faq.items.updateNodes.q'),
      answer: t('faq.items.updateNodes.a'),
    },
    {
      question: t('faq.items.customRules.q'),
      answer: t('faq.items.customRules.a'),
    },
    {
      question: t('faq.items.backup.q'),
      answer: t('faq.items.backup.a'),
    },
  ]

  return (
    <DocLayout
      title={t('faq.title')}
      description={t('faq.description')}
    >
      {/* FAQ 列表 */}
      <section className='mb-8'>
        <div className='space-y-4'>
          {faqs.map((faq, index) => (
            <Card key={index}>
              <CardContent className='pt-6'>
                <h3 className='font-semibold mb-2 flex items-start gap-2'>
                  <HelpCircle className='size-5 text-primary mt-0.5 flex-shrink-0' />
                  {faq.question}
                </h3>
                <p className='text-sm text-muted-foreground whitespace-pre-line ml-7'>
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 获取帮助 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <MessageCircle className='size-5 text-primary' />
          {t('faq.help.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('faq.help.desc')}
            </p>
            <div className='grid gap-4 md:grid-cols-2'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold mb-2 flex items-center gap-2'>
                  <Github className='size-4' />
                  GitHub Issues
                </h4>
                <p className='text-sm text-muted-foreground mb-2'>
                  {t('faq.help.issues')}
                </p>
                <a
                  href='https://github.com/iluobei/miaomiaowu/issues'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm text-primary hover:underline'
                >
                  {t('faq.help.goToIssues')}
                </a>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold mb-2 flex items-center gap-2'>
                  <Bug className='size-4' />
                  {t('faq.help.reportBug')}
                </h4>
                <p className='text-sm text-muted-foreground mb-2'>
                  {t('faq.help.reportBugDesc')}
                </p>
                <a
                  href='https://github.com/iluobei/miaomiaowu/issues/new'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm text-primary hover:underline'
                >
                  {t('faq.help.submitBug')}
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
