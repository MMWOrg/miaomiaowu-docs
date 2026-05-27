import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import ExchangeIcon from '@/assets/icons/exchange.svg'
import {
  Network,
  Sparkles,
  FileCode,
  Shield,
  ArrowRight,
  Settings2,
  ChevronDown,
  X,
} from 'lucide-react'

export const Route = createFileRoute('/docs/chain-proxy')({
  component: ChainProxyPage,
})

const relayGroupOptions = [
  '🌠 中转节点',
  '🇭🇰 香港中转',
  '🇯🇵 日本中转',
  '🇸🇬 新加坡中转',
]

function ChainProxyPage() {
  const { t } = useTranslation('docs')
  const [selectedType, setSelectedType] = useState('select')
  const [selectedRelayGroup, setSelectedRelayGroup] = useState('🌠 中转节点')

  const groupTypes = [
    { value: 'select', label: t('chainProxy.groupTypes.select') },
    { value: 'url-test', label: t('chainProxy.groupTypes.urlTest') },
    { value: 'fallback', label: t('chainProxy.groupTypes.fallback') },
    { value: 'load-balance', label: t('chainProxy.groupTypes.loadBalance') },
  ]

  return (
    <DocLayout
      title={t('chainProxy.title')}
      description={t('chainProxy.description')}
    >
      {/* 什么是链式代理 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Network className='size-5 text-primary' />
          {t('chainProxy.whatIs.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('chainProxy.whatIs.desc')}
            </p>
            <div className='bg-muted/30 rounded-lg p-4'>
              <p className='text-sm text-muted-foreground mb-3'>
                {t('chainProxy.whatIs.example')}
              </p>
              <div className='bg-background rounded-lg p-4 font-mono text-sm flex items-center justify-center gap-2 flex-wrap'>
                <span className='px-2 py-1 bg-primary/10 rounded'>{t('chainProxy.whatIs.client')}</span>
                <ArrowRight className='size-4 text-muted-foreground' />
                <span className='px-2 py-1 bg-blue-500/10 rounded'>{t('chainProxy.whatIs.relay')}</span>
                <ArrowRight className='size-4 text-muted-foreground' />
                <span className='px-2 py-1 bg-green-500/10 rounded'>{t('chainProxy.whatIs.landing')}</span>
                <ArrowRight className='size-4 text-muted-foreground' />
                <span className='px-2 py-1 bg-orange-500/10 rounded'>{t('chainProxy.whatIs.target')}</span>
              </div>
              <p className='text-xs text-muted-foreground mt-3'>
                {t('chainProxy.whatIs.techDesc')}
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 应用场景 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Sparkles className='size-5 text-primary' />
          {t('chainProxy.scenarios.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='space-y-4'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('chainProxy.scenarios.accelerateTitle')}</h4>
                <p className='text-xs text-muted-foreground'>
                  {t('chainProxy.scenarios.accelerateDesc')}
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('chainProxy.scenarios.hideIpTitle')}</h4>
                <p className='text-xs text-muted-foreground'>
                  {t('chainProxy.scenarios.hideIpDesc')}
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('chainProxy.scenarios.bypassTitle')}</h4>
                <p className='text-xs text-muted-foreground'>
                  {t('chainProxy.scenarios.bypassDesc')}
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('chainProxy.scenarios.loadBalanceTitle')}</h4>
                <p className='text-xs text-muted-foreground'>
                  {t('chainProxy.scenarios.loadBalanceDesc')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 配置方法 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <FileCode className='size-5 text-primary' />
          {t('chainProxy.configMethod.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('chainProxy.configMethod.desc')}
            </p>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-green-500'>
              <div className='space-y-4 text-sm'>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>1</span>
                  <div>
                    <strong>{t('chainProxy.configMethod.step1Title')}</strong>
                    <p className='text-muted-foreground mt-1'>{t('chainProxy.configMethod.step1Desc')}</p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>2</span>
                  <div>
                    <strong>{t('chainProxy.configMethod.step2Title')}</strong>
                    <p className='text-muted-foreground mt-1'>{t('chainProxy.configMethod.step2Desc')}</p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>3</span>
                  <div>
                    <strong>{t('chainProxy.configMethod.step3Title')}</strong>
                    <p className='text-muted-foreground mt-1'>{t('chainProxy.configMethod.step3Desc')}</p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>4</span>
                  <div>
                    <strong>{t('chainProxy.configMethod.step4Title')}</strong>
                    <p className='text-muted-foreground mt-1'>{t('chainProxy.configMethod.step4Desc')}</p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>5</span>
                  <div>
                    <strong>{t('chainProxy.configMethod.step5Title')}</strong>
                    <p className='text-muted-foreground mt-1'>{t('chainProxy.configMethod.step5Desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 代理组配置 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Network className='size-5 text-primary' />
          {t('chainProxy.groupConfig.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('chainProxy.groupConfig.desc')}
            </p>
            <div className='space-y-3'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('chainProxy.groupConfig.landingTitle')}</h4>
                <p className='text-xs text-muted-foreground'>
                  {t('chainProxy.groupConfig.landingDesc')}
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('chainProxy.groupConfig.relayTitle')}</h4>
                <p className='text-xs text-muted-foreground'>
                  {t('chainProxy.groupConfig.relayDesc')}
                </p>
              </div>
            </div>
            <p className='text-xs text-muted-foreground mt-4'>
              {t('chainProxy.groupConfig.note')}
            </p>
          </CardContent>
        </Card>
      </section>

      {/* 节点管理配置 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Network className='size-5 text-primary' />
          {t('chainProxy.singleNode.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('chainProxy.singleNode.desc1')}
              <img src={ExchangeIcon} alt={t('chainProxy.title')} className='h-4 w-4 inline [filter:invert(63%)_sepia(45%)_saturate(1068%)_hue-rotate(327deg)_brightness(95%)_contrast(88%)]' />
              {t('chainProxy.singleNode.desc2')}
            </p>
            <div className='rounded-xl border border-[#6d5954] bg-[linear-gradient(135deg,#0a1226,#111f38)] p-4 shadow-lg'>
              <div className='mb-4 flex items-start justify-between gap-3'>
                <div>
                  <p className='text-xl font-semibold text-white'>{t('chainProxy.singleNode.demoLanding')}</p>
                  <p className='text-sm text-slate-300'>
                    {groupTypes.find(item => item.value === selectedType)?.label} ({t('chainProxy.singleNode.demoNodeCount', { count: 6 })})
                  </p>
                </div>
                <div className='flex items-center gap-2'>
                  <button
                    type='button'
                    className='inline-flex size-8 items-center justify-center rounded-md border border-[#6d5954] bg-black/25 text-slate-200'
                    aria-label={t('chainProxy.singleNode.switchTypeLabel')}
                  >
                    <Settings2 className='size-4' />
                  </button>
                  <button
                    type='button'
                    className='inline-flex size-8 items-center justify-center rounded-md border border-[#6d5954] bg-black/25 text-slate-200'
                    aria-label={t('chainProxy.singleNode.closeLabel')}
                  >
                    <X className='size-4' />
                  </button>
                </div>
              </div>

              <div className='rounded-lg border border-[#273047] bg-[#050b1d]/95 p-3'>
                <div className='space-y-1'>
                  {groupTypes.map(item => (
                    <button
                      key={item.value}
                      type='button'
                      onClick={() => setSelectedType(item.value)}
                      className={`w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                        selectedType === item.value
                          ? 'bg-[#e88d70] font-semibold text-black'
                          : 'text-slate-100 hover:bg-slate-700/40'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                <div className='mt-3 border-t border-[#273047] pt-3'>
                  <p className='mb-2 text-xs text-slate-400'>{t('chainProxy.singleNode.relayGroupLabel')}</p>
                  <div className='rounded-md border border-[#2f3a53] bg-[#10192e] p-2'>
                    <Select value={selectedRelayGroup} onValueChange={setSelectedRelayGroup}>
                      <SelectTrigger className='h-9 border-[#3b4867] bg-[#18243f] text-slate-100'>
                        <SelectValue placeholder={t('chainProxy.singleNode.selectRelayPlaceholder')} />
                      </SelectTrigger>
                      <SelectContent>
                        {relayGroupOptions.map(group => (
                          <SelectItem key={group} value={group}>
                            {group}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <p className='mt-2 flex items-center gap-1 text-xs text-slate-400'>
                    {t('chainProxy.singleNode.currentBinding')}
                    <ChevronDown className='size-3 rotate-[-90deg]' />
                    <span className='text-slate-200'>{selectedRelayGroup}</span>
                  </p>
                </div>
              </div>
            </div>
            <p className='text-xs text-muted-foreground mt-4'>
              {t('chainProxy.singleNode.demoNote')}
            </p>
          </CardContent>
        </Card>
      </section>

      {/* 技术原理 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4'>{t('chainProxy.techPrinciple.heading')}</h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('chainProxy.techPrinciple.desc')}
            </p>
            <div className='bg-muted/30 rounded-lg p-4'>
              <div className='bg-background rounded p-3 font-mono text-xs space-y-1'>
                <div>- name: "链式代理节点"</div>
                <div>  type: vmess</div>
                <div>  server: us-node.example.com</div>
                <div>  port: 443</div>
                <div>  # ... 其他配置</div>
                <div className='text-primary'>  dialer-proxy: "香港中转节点"</div>
              </div>
              <p className='text-xs text-muted-foreground mt-3'>
                {t('chainProxy.techPrinciple.explanation')}
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 注意事项 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Shield className='size-5 text-primary' />
          {t('chainProxy.notes.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-orange-500'>
              <ul className='space-y-2 text-sm text-muted-foreground'>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>{t('chainProxy.notes.latencyTitle')}</strong>{t('chainProxy.notes.latencyDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>{t('chainProxy.notes.stabilityTitle')}</strong>{t('chainProxy.notes.stabilityDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>{t('chainProxy.notes.bandwidthTitle')}</strong>{t('chainProxy.notes.bandwidthDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>{t('chainProxy.notes.loopTitle')}</strong>{t('chainProxy.notes.loopDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>{t('chainProxy.notes.protocolTitle')}</strong>{t('chainProxy.notes.protocolDesc')}</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
