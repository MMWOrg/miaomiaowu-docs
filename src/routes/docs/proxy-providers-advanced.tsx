import { createFileRoute, Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import {
  Layers,
  Sparkles,
  FileCode,
  Shield,
  ArrowRight,
} from 'lucide-react'

export const Route = createFileRoute('/docs/proxy-providers-advanced')({
  component: ProxyProvidersAdvancedPage,
})

function ProxyProvidersAdvancedPage() {
  const { t } = useTranslation('docs')

  return (
    <DocLayout
      title={t('proxyProvidersAdvanced.title')}
      description={t('proxyProvidersAdvanced.description')}
    >
      {/* 有什么作用 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Layers className='size-5 text-primary' />
          {t('proxyProvidersAdvanced.whatItDoes.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='space-y-4'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('proxyProvidersAdvanced.whatItDoes.autoManageTitle')}</h4>
                <p className='text-xs text-muted-foreground'>
                  {t('proxyProvidersAdvanced.whatItDoes.autoManageDesc')}
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('proxyProvidersAdvanced.whatItDoes.multiFilterTitle')}</h4>
                <p className='text-xs text-muted-foreground'>
                  {t('proxyProvidersAdvanced.whatItDoes.multiFilterDesc')}
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('proxyProvidersAdvanced.whatItDoes.quickSwitchTitle')}</h4>
                <p className='text-xs text-muted-foreground'>
                  {t('proxyProvidersAdvanced.whatItDoes.quickSwitchDesc')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 使用示例 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Sparkles className='size-5 text-primary' />
          {t('proxyProvidersAdvanced.example.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='space-y-4'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-3'>{t('proxyProvidersAdvanced.example.step1Title')}</h4>
                <p className='text-xs text-muted-foreground mb-3'>
                  {t('proxyProvidersAdvanced.example.step1Desc1')}
                  <Link to='/docs/proxy-providers' className='text-primary hover:underline inline-flex items-center gap-1 mx-1'>
                    {t('proxyProvidersAdvanced.example.step1Link')}
                    <ArrowRight className='size-3' />
                  </Link>
                  {t('proxyProvidersAdvanced.example.step1Desc2')}
                </p>
                <div className='bg-background rounded-lg p-3 space-y-1 text-xs font-mono'>
                  <div className='flex items-center gap-2'>
                    <span className='text-purple-500'>📦</span>
                    <span>宝可梦-🇭🇰香港节点</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <span className='text-purple-500'>📦</span>
                    <span>宝可梦-🇯🇵日本节点</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <span className='text-purple-500'>📦</span>
                    <span>宝可梦-🇺🇸美国节点</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <span className='text-purple-500'>📦</span>
                    <span>宝可梦-🇸🇬新加坡节点</span>
                  </div>
                </div>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-3'>{t('proxyProvidersAdvanced.example.step2Title')}</h4>
                <p className='text-xs text-muted-foreground mb-3'>
                  {t('proxyProvidersAdvanced.example.step2Desc1')}
                  <Link to='/docs/edit-nodes' className='text-primary hover:underline inline-flex items-center gap-1 mx-1'>
                    {t('proxyProvidersAdvanced.example.step2Link')}
                    <ArrowRight className='size-3' />
                  </Link>
                  {t('proxyProvidersAdvanced.example.step2Desc2')}
                </p>
                <div className='rounded-lg overflow-hidden border'>
                  <img
                    src='/images/proxy_providers_move.png'
                    alt={t('proxyProvidersAdvanced.example.step2ImgAlt')}
                    className='w-full'
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 两种处理模式对比 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <FileCode className='size-5 text-primary' />
          {t('proxyProvidersAdvanced.modeComparison.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('proxyProvidersAdvanced.modeComparison.desc')}
            </p>

            {/* 妙妙屋模式 */}
            <div className='mb-6'>
              <h4 className='font-semibold text-sm mb-3 flex items-center gap-2'>
                <span className='size-2 rounded-full bg-purple-500'></span>
                {t('proxyProvidersAdvanced.modeComparison.mmwTitle')}
              </h4>
              <p className='text-xs text-muted-foreground mb-3'>
                {t('proxyProvidersAdvanced.modeComparison.mmwDesc')}
              </p>
              <div className='bg-muted/30 rounded-lg p-4'>
                <div className='bg-background rounded p-3 font-mono text-xs space-y-1 overflow-x-auto'>
                  <div className='text-muted-foreground'># 节点直接写入 proxies</div>
                  <div>proxies:</div>
                  <div className='pl-2'>- name: 〖宝可梦〗🇭🇰【亚洲】香港01丨直连</div>
                  <div className='pl-4'>type: hysteria2</div>
                  <div className='pl-4'>server: hk.example.com</div>
                  <div className='pl-4'>port: 20000</div>
                  <div className='pl-4 text-muted-foreground'>...</div>
                  <div className='pl-2'>- name: 〖宝可梦〗🇭🇰【亚洲】香港02丨直连</div>
                  <div className='pl-4'>type: hysteria2</div>
                  <div className='pl-4 text-muted-foreground'>...</div>
                  <div className='mt-2'>proxy-groups:</div>
                  <div className='pl-2'>- name: 🚀 节点选择</div>
                  <div className='pl-4'>type: select</div>
                  <div className='pl-4'>proxies:</div>
                  <div className='pl-6'>- 宝可梦-🇭🇰香港节点</div>
                  <div className='pl-6'>- DIRECT</div>
                  <div className='pl-2'>- name: 宝可梦-🇭🇰香港节点</div>
                  <div className='pl-4'>type: select</div>
                  <div className='pl-4'>proxies:</div>
                  <div className='pl-6'>- 〖宝可梦〗🇭🇰【亚洲】香港01丨直连</div>
                  <div className='pl-6'>- 〖宝可梦〗🇭🇰【亚洲】香港02丨直连</div>
                  <div className='pl-6 text-muted-foreground'>...</div>
                </div>
              </div>
            </div>

            {/* 客户端模式 */}
            <div>
              <h4 className='font-semibold text-sm mb-3 flex items-center gap-2'>
                <span className='size-2 rounded-full bg-blue-500'></span>
                {t('proxyProvidersAdvanced.modeComparison.clientTitle')}
              </h4>
              <p className='text-xs text-muted-foreground mb-3'>
                {t('proxyProvidersAdvanced.modeComparison.clientDesc')}
              </p>
              <div className='bg-muted/30 rounded-lg p-4'>
                <div className='bg-background rounded p-3 font-mono text-xs space-y-1 overflow-x-auto'>
                  <div className='text-muted-foreground'># 使用 proxy-providers 动态加载</div>
                  <div>proxy-groups:</div>
                  <div className='pl-2'>- name: 🚀 节点选择</div>
                  <div className='pl-4'>type: select</div>
                  <div className='pl-4'>proxies:</div>
                  <div className='pl-6'>- 宝可梦-🇭🇰香港节点</div>
                  <div className='pl-6'>- DIRECT</div>
                  <div className='pl-2'>- name: 宝可梦-🇭🇰香港节点</div>
                  <div className='pl-4'>type: select</div>
                  <div className='pl-4 text-primary'>use:</div>
                  <div className='pl-6 text-primary'>- 宝可梦-🇭🇰香港节点</div>
                  <div className='mt-2 text-primary'>proxy-providers:</div>
                  <div className='pl-2 text-primary'>宝可梦-🇭🇰香港节点:</div>
                  <div className='pl-4'>type: http</div>
                  <div className='pl-4'>path: ./proxy_providers/宝可梦-🇭🇰香港节点.yaml</div>
                  <div className='pl-4'>interval: 3600</div>
                  <div className='pl-4'>url: https://sub.example.com/sub/xxxxxx</div>
                  <div className='pl-4'>header:</div>
                  <div className='pl-6'>User-Agent: Clash/v1.18.0</div>
                  <div className='pl-4'>health-check:</div>
                  <div className='pl-6'>enable: true</div>
                  <div className='pl-6'>url: https://www.gstatic.com/generate_204</div>
                  <div className='pl-6'>interval: 300</div>
                  <div className='pl-6'>timeout: 5000</div>
                  <div className='pl-6'>lazy: true</div>
                  <div className='pl-6'>expected-status: 204</div>
                  <div className='pl-4'>filter: 港|HK|hk|Hong Kong|HongKong|hongkong</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 模式选择建议 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Sparkles className='size-5 text-primary' />
          {t('proxyProvidersAdvanced.modeSuggestions.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='grid md:grid-cols-2 gap-4'>
              <div className='bg-purple-50 dark:bg-purple-950/30 rounded-lg p-4 border border-purple-200 dark:border-purple-800'>
                <h4 className='font-semibold text-sm mb-2 text-purple-700 dark:text-purple-300'>{t('proxyProvidersAdvanced.modeSuggestions.mmwTitle')}</h4>
                <ul className='text-xs text-muted-foreground space-y-1'>
                  <li>• {t('proxyProvidersAdvanced.modeSuggestions.mmw1')}</li>
                  <li>• {t('proxyProvidersAdvanced.modeSuggestions.mmw2')}</li>
                  <li>• {t('proxyProvidersAdvanced.modeSuggestions.mmw3')}</li>
                  <li>• {t('proxyProvidersAdvanced.modeSuggestions.mmw4')}</li>
                </ul>
              </div>
              <div className='bg-blue-50 dark:bg-blue-950/30 rounded-lg p-4 border border-blue-200 dark:border-blue-800'>
                <h4 className='font-semibold text-sm mb-2 text-blue-700 dark:text-blue-300'>{t('proxyProvidersAdvanced.modeSuggestions.clientTitle')}</h4>
                <ul className='text-xs text-muted-foreground space-y-1'>
                  <li>• {t('proxyProvidersAdvanced.modeSuggestions.client1')}</li>
                  <li>• {t('proxyProvidersAdvanced.modeSuggestions.client2')}</li>
                  <li>• {t('proxyProvidersAdvanced.modeSuggestions.client3')}</li>
                  <li>• {t('proxyProvidersAdvanced.modeSuggestions.client4')}</li>
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
          {t('proxyProvidersAdvanced.notes.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-orange-500'>
              <ul className='space-y-2 text-sm text-muted-foreground'>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>{t('proxyProvidersAdvanced.notes.settingTitle')}</strong>{t('proxyProvidersAdvanced.notes.settingDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>{t('proxyProvidersAdvanced.notes.perfTitle')}</strong>{t('proxyProvidersAdvanced.notes.perfDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>{t('proxyProvidersAdvanced.notes.compatTitle')}</strong>{t('proxyProvidersAdvanced.notes.compatDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>{t('proxyProvidersAdvanced.notes.geoipTitle')}</strong>{t('proxyProvidersAdvanced.notes.geoipDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>{t('proxyProvidersAdvanced.notes.filterTitle')}</strong>{t('proxyProvidersAdvanced.notes.filterDesc')}</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
