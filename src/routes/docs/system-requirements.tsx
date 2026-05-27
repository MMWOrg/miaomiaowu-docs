import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import { Settings, Cpu, HardDrive, Wifi, Monitor } from 'lucide-react'

export const Route = createFileRoute('/docs/system-requirements')({
  component: SystemRequirementsPage,
})

const platforms = [
  {
    os: 'Windows',
    clients: ['Clash Verge', 'Clash for Windows', 'v2rayN'],
  },
  {
    os: 'macOS',
    clients: ['ClashX Pro', 'Shadowsocket', 'Clash Verge'],
  },
  {
    os: 'iOS / iPadOS',
    clients: ['Shadowrocket', 'clashmi', 'Quantumult'],
  },
  {
    os: 'Android',
    clients: ['Clash Meta for Android', 'v2rayNG', 'Clash Mi', 'FlClash'],
  },
]

function SystemRequirementsPage() {
  const { t } = useTranslation('docs')

  return (
    <DocLayout
      title={t('systemRequirements.title')}
      description={t('systemRequirements.description')}
    >
      {/* 服务器要求 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Settings className='size-5 text-primary' />
          {t('systemRequirements.server.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-blue-500'>
              <div className='grid gap-4 md:grid-cols-2'>
                <div className='flex items-start gap-3'>
                  <Cpu className='size-5 text-primary mt-0.5 flex-shrink-0' />
                  <div>
                    <h4 className='font-semibold'>CPU</h4>
                    <p className='text-sm text-muted-foreground'>{t('systemRequirements.server.cpu')}</p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <Monitor className='size-5 text-primary mt-0.5 flex-shrink-0' />
                  <div>
                    <h4 className='font-semibold'>{t('systemRequirements.server.memoryLabel')}</h4>
                    <p className='text-sm text-muted-foreground'>{t('systemRequirements.server.memory')}</p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <HardDrive className='size-5 text-primary mt-0.5 flex-shrink-0' />
                  <div>
                    <h4 className='font-semibold'>{t('systemRequirements.server.storageLabel')}</h4>
                    <p className='text-sm text-muted-foreground'>{t('systemRequirements.server.storage')}</p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <Wifi className='size-5 text-primary mt-0.5 flex-shrink-0' />
                  <div>
                    <h4 className='font-semibold'>{t('systemRequirements.server.networkLabel')}</h4>
                    <p className='text-sm text-muted-foreground'>{t('systemRequirements.server.network')}</p>
                  </div>
                </div>
              </div>
              <div className='mt-4 pt-4 border-t border-border/50'>
                <p className='text-sm text-muted-foreground'>
                  {t('systemRequirements.server.recommended')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 客户端支持 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Monitor className='size-5 text-primary' />
          {t('systemRequirements.clients.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='grid gap-4 md:grid-cols-2'>
              {platforms.map((platform) => (
                <div
                  key={platform.os}
                  className='bg-muted/30 rounded-lg p-4'
                >
                  <h4 className='font-semibold mb-2'>{platform.os}</h4>
                  <div className='flex flex-wrap gap-1'>
                    {platform.clients.map((client) => (
                      <span
                        key={client}
                        className='px-2 py-1 bg-background rounded text-xs'
                      >
                        {client}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 浏览器要求 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4'>{t('systemRequirements.browser.heading')}</h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('systemRequirements.browser.desc')}
            </p>
            <div className='flex flex-wrap gap-2'>
              <span className='px-3 py-1.5 bg-muted/50 rounded-md text-sm'>Chrome 90+</span>
              <span className='px-3 py-1.5 bg-muted/50 rounded-md text-sm'>Firefox 88+</span>
              <span className='px-3 py-1.5 bg-muted/50 rounded-md text-sm'>Safari 14+</span>
              <span className='px-3 py-1.5 bg-muted/50 rounded-md text-sm'>Edge 90+</span>
            </div>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
