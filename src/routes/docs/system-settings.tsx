import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import {
  Settings,
  Database,
  Radar,
  Shield,
  Sparkles,
  ToggleRight,
  Link2,
  FileCode,
  Layers,
  Info,
  EyeOff,
  Monitor,
  ScrollText,
  Bell,
  ArrowDownToLine,
} from 'lucide-react'

export const Route = createFileRoute('/docs/system-settings')({
  component: SystemSettingsPage,
})

function SystemSettingsPage() {
  const { t } = useTranslation('docs')

  return (
    <DocLayout
      title={t('systemSettings.title')}
      description={t('systemSettings.description')}
    >
      {/* 功能说明 */}
      <section className='mb-8'>
        <div className='flex items-center gap-2 mb-4'>
          <span className='px-2 py-1 bg-destructive/10 text-destructive rounded-md text-xs border border-destructive/20'>
            {t('systemSettings.adminFeature')}
          </span>
        </div>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground'>
              {t('systemSettings.intro')}
            </p>
          </CardContent>
        </Card>
      </section>

      {/* 外部订阅同步设置 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Database className='size-5 text-primary' />
          {t('systemSettings.externalSync.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('systemSettings.externalSync.desc')}
            </p>
            <div className='space-y-4'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('systemSettings.externalSync.trafficTitle')}</h4>
                <p className='text-xs text-muted-foreground'>
                  {t('systemSettings.externalSync.trafficDesc')}
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('systemSettings.externalSync.syncTitle')}</h4>
                <p className='text-xs text-muted-foreground'>
                  {t('systemSettings.externalSync.syncDesc')}
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('systemSettings.externalSync.matchTitle')}</h4>
                <p className='text-xs text-muted-foreground mb-2'>
                  {t('systemSettings.externalSync.matchDesc')}
                </p>
                <ul className='text-xs text-muted-foreground space-y-1'>
                  <li>• <strong>{t('systemSettings.externalSync.matchNameLabel')}</strong>{t('systemSettings.externalSync.matchNameDesc')}</li>
                  <li>• <strong>{t('systemSettings.externalSync.matchServerLabel')}</strong>{t('systemSettings.externalSync.matchServerDesc')}</li>
                  <li>• <strong>{t('systemSettings.externalSync.matchTypeLabel')}</strong>{t('systemSettings.externalSync.matchTypeDesc')}</li>
                </ul>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('systemSettings.externalSync.scopeTitle')}</h4>
                <p className='text-xs text-muted-foreground mb-2'>
                  {t('systemSettings.externalSync.scopeDesc')}
                </p>
                <ul className='text-xs text-muted-foreground space-y-1'>
                  <li>• <strong>{t('systemSettings.externalSync.scopeSavedLabel')}</strong>{t('systemSettings.externalSync.scopeSavedDesc')}</li>
                  <li>• <strong>{t('systemSettings.externalSync.scopeAllLabel')}</strong>{t('systemSettings.externalSync.scopeAllDesc')}</li>
                </ul>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('systemSettings.externalSync.keepNameTitle')}</h4>
                <p className='text-xs text-muted-foreground'>
                  {t('systemSettings.externalSync.keepNameDesc')}
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('systemSettings.externalSync.cacheTitle')}</h4>
                <p className='text-xs text-muted-foreground'>
                  {t('systemSettings.externalSync.cacheDesc')}
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('systemSettings.externalSync.excludeTitle')}</h4>
                <p className='text-xs text-muted-foreground'>
                  {t('systemSettings.externalSync.excludeDesc')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 功能开关 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <ToggleRight className='size-5 text-primary' />
          {t('systemSettings.featureSwitches.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('systemSettings.featureSwitches.desc')}
            </p>
            <div className='space-y-4'>
              {/* 节点探针服务器绑定 */}
              <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-blue-500'>
                <div className='flex items-center gap-2 mb-2'>
                  <Radar className='size-4 text-blue-500' />
                  <h4 className='font-semibold text-sm'>{t('systemSettings.featureSwitches.probeTitle')}</h4>
                </div>
                <div className='space-y-2 text-xs text-muted-foreground'>
                  <p><strong>{t('systemSettings.featureSwitches.probeOnLabel')}</strong></p>
                  <ul className='ml-4 space-y-1'>
                    <li>• {t('systemSettings.featureSwitches.probeOn1')}</li>
                    <li>• {t('systemSettings.featureSwitches.probeOn2')}</li>
                    <li>• {t('systemSettings.featureSwitches.probeOn3')}</li>
                  </ul>
                  <p className='mt-2'><strong>{t('systemSettings.featureSwitches.probeOffLabel')}</strong></p>
                  <ul className='ml-4 space-y-1'>
                    <li>• {t('systemSettings.featureSwitches.probeOff1')}</li>
                    <li>• {t('systemSettings.featureSwitches.probeOff2')}</li>
                  </ul>
                </div>
              </div>

              {/* 启用短链接 */}
              <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-green-500'>
                <div className='flex items-center gap-2 mb-2'>
                  <Link2 className='size-4 text-green-500' />
                  <h4 className='font-semibold text-sm'>{t('systemSettings.featureSwitches.shortLinkTitle')}</h4>
                </div>
                <div className='space-y-2 text-xs text-muted-foreground'>
                  <p><strong>{t('systemSettings.featureSwitches.shortLinkOnLabel')}</strong></p>
                  <ul className='ml-4 space-y-1'>
                    <li>• {t('systemSettings.featureSwitches.shortLinkOn1')}</li>
                    <li>• {t('systemSettings.featureSwitches.shortLinkOn2')}</li>
                    <li>• {t('systemSettings.featureSwitches.shortLinkOn3')}</li>
                  </ul>
                  <p className='mt-2'><strong>{t('systemSettings.featureSwitches.shortLinkOffLabel')}</strong></p>
                  <ul className='ml-4 space-y-1'>
                    <li>• {t('systemSettings.featureSwitches.shortLinkOff1')}</li>
                  </ul>
                  <p className='mt-2 text-primary'>
                    {t('systemSettings.featureSwitches.shortLinkTip')}
                  </p>
                </div>
              </div>

              {/* 使用新模板系统 */}
              <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-purple-500'>
                <div className='flex items-center gap-2 mb-2'>
                  <FileCode className='size-4 text-purple-500' />
                  <h4 className='font-semibold text-sm'>{t('systemSettings.featureSwitches.newTemplateTitle')}</h4>
                </div>
                <div className='space-y-2 text-xs text-muted-foreground'>
                  <p><strong>{t('systemSettings.featureSwitches.newTemplateOnLabel')}</strong></p>
                  <ul className='ml-4 space-y-1'>
                    <li>• {t('systemSettings.featureSwitches.newTemplateOn1')}</li>
                    <li>• {t('systemSettings.featureSwitches.newTemplateOn2')}</li>
                    <li>• {t('systemSettings.featureSwitches.newTemplateOn3')}</li>
                  </ul>
                  <p className='mt-2'><strong>{t('systemSettings.featureSwitches.newTemplateOffLabel')}</strong></p>
                  <ul className='ml-4 space-y-1'>
                    <li>• {t('systemSettings.featureSwitches.newTemplateOff1')}</li>
                    <li>• {t('systemSettings.featureSwitches.newTemplateOff2')}</li>
                    <li>• {t('systemSettings.featureSwitches.newTemplateOff3')}</li>
                  </ul>
                </div>
              </div>

              {/* 启用节点集合 */}
              <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-orange-500'>
                <div className='flex items-center gap-2 mb-2'>
                  <Layers className='size-4 text-orange-500' />
                  <h4 className='font-semibold text-sm'>{t('systemSettings.featureSwitches.proxyProviderTitle')}</h4>
                </div>
                <div className='space-y-2 text-xs text-muted-foreground'>
                  <p><strong>{t('systemSettings.featureSwitches.proxyProviderOnLabel')}</strong></p>
                  <ul className='ml-4 space-y-1'>
                    <li>• {t('systemSettings.featureSwitches.proxyProviderOn1')}</li>
                    <li>• {t('systemSettings.featureSwitches.proxyProviderOn2')}</li>
                    <li>• {t('systemSettings.featureSwitches.proxyProviderOn3')}</li>
                    <li>• {t('systemSettings.featureSwitches.proxyProviderOn4')}</li>
                  </ul>
                  <p className='mt-2'><strong>{t('systemSettings.featureSwitches.proxyProviderOffLabel')}</strong></p>
                  <ul className='ml-4 space-y-1'>
                    <li>• {t('systemSettings.featureSwitches.proxyProviderOff1')}</li>
                  </ul>
                  <p className='mt-2 text-primary'>
                    {t('systemSettings.featureSwitches.proxyProviderTip')}
                  </p>
                </div>
              </div>
              {/* 订阅信息节点 */}
              <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-cyan-500'>
                <div className='flex items-center gap-2 mb-2'>
                  <Info className='size-4 text-cyan-500' />
                  <h4 className='font-semibold text-sm'>{t('systemSettings.featureSwitches.subInfoTitle')}</h4>
                </div>
                <div className='space-y-2 text-xs text-muted-foreground'>
                  <p><strong>{t('systemSettings.featureSwitches.subInfoOnLabel')}</strong></p>
                  <ul className='ml-4 space-y-1'>
                    <li>• {t('systemSettings.featureSwitches.subInfoOn1')}</li>
                    <li>• {t('systemSettings.featureSwitches.subInfoOn2')}</li>
                    <li>• {t('systemSettings.featureSwitches.subInfoOn3')}</li>
                  </ul>
                  <p className='mt-2'><strong>{t('systemSettings.featureSwitches.subInfoOffLabel')}</strong></p>
                  <ul className='ml-4 space-y-1'>
                    <li>• {t('systemSettings.featureSwitches.subInfoOff1')}</li>
                  </ul>
                </div>
              </div>

              {/* 静默模式 */}
              <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-red-500'>
                <div className='flex items-center gap-2 mb-2'>
                  <EyeOff className='size-4 text-red-500' />
                  <h4 className='font-semibold text-sm'>{t('systemSettings.featureSwitches.silentTitle')}</h4>
                </div>
                <div className='space-y-2 text-xs text-muted-foreground'>
                  <p><strong>{t('systemSettings.featureSwitches.silentOnLabel')}</strong></p>
                  <ul className='ml-4 space-y-1'>
                    <li>• {t('systemSettings.featureSwitches.silentOn1')}</li>
                    <li>• {t('systemSettings.featureSwitches.silentOn2')}</li>
                    <li>• {t('systemSettings.featureSwitches.silentOn3')}</li>
                  </ul>
                  <p className='mt-2'><strong>{t('systemSettings.featureSwitches.silentOffLabel')}</strong></p>
                  <ul className='ml-4 space-y-1'>
                    <li>• {t('systemSettings.featureSwitches.silentOff1')}</li>
                  </ul>
                  <p className='mt-2'><strong>{t('systemSettings.featureSwitches.silentTimeoutLabel')}</strong></p>
                  <ul className='ml-4 space-y-1'>
                    <li>• {t('systemSettings.featureSwitches.silentTimeout1')}</li>
                    <li>• {t('systemSettings.featureSwitches.silentTimeout2')}</li>
                  </ul>
                  <p className='mt-2 text-destructive'>
                    {t('systemSettings.featureSwitches.silentWarning')}
                  </p>
                </div>
              </div>

              {/* 客户端兼容模式 */}
              <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-amber-500'>
                <div className='flex items-center gap-2 mb-2'>
                  <Monitor className='size-4 text-amber-500' />
                  <h4 className='font-semibold text-sm'>{t('systemSettings.featureSwitches.clientCompatTitle')}</h4>
                </div>
                <div className='space-y-2 text-xs text-muted-foreground'>
                  <p><strong>{t('systemSettings.featureSwitches.clientCompatOnLabel')}</strong></p>
                  <ul className='ml-4 space-y-1'>
                    <li>• {t('systemSettings.featureSwitches.clientCompatOn1')}</li>
                    <li>• {t('systemSettings.featureSwitches.clientCompatOn2')}</li>
                  </ul>
                  <p className='mt-2'><strong>{t('systemSettings.featureSwitches.clientCompatOffLabel')}</strong></p>
                  <ul className='ml-4 space-y-1'>
                    <li>• {t('systemSettings.featureSwitches.clientCompatOff1')}</li>
                  </ul>
                </div>
              </div>

              {/* 订阅响应头流量信息 */}
              <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-teal-500'>
                <div className='flex items-center gap-2 mb-2'>
                  <ArrowDownToLine className='size-4 text-teal-500' />
                  <h4 className='font-semibold text-sm'>{t('systemSettings.featureSwitches.responseHeaderTitle')}</h4>
                </div>
                <div className='space-y-2 text-xs text-muted-foreground'>
                  <p><strong>{t('systemSettings.featureSwitches.responseHeaderOnLabel')}</strong></p>
                  <ul className='ml-4 space-y-1'>
                    <li>• {t('systemSettings.featureSwitches.responseHeaderOn1')}</li>
                    <li>• {t('systemSettings.featureSwitches.responseHeaderOn2')}</li>
                  </ul>
                  <p className='mt-2'><strong>{t('systemSettings.featureSwitches.responseHeaderOffLabel')}</strong></p>
                  <ul className='ml-4 space-y-1'>
                    <li>• {t('systemSettings.featureSwitches.responseHeaderOff1')}</li>
                  </ul>
                </div>
              </div>

              {/* 启用覆写脚本 */}
              <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-violet-500'>
                <div className='flex items-center gap-2 mb-2'>
                  <ScrollText className='size-4 text-violet-500' />
                  <h4 className='font-semibold text-sm'>{t('systemSettings.featureSwitches.overrideScriptTitle')}</h4>
                </div>
                <div className='space-y-2 text-xs text-muted-foreground'>
                  <p><strong>{t('systemSettings.featureSwitches.overrideScriptOnLabel')}</strong></p>
                  <ul className='ml-4 space-y-1'>
                    <li>• {t('systemSettings.featureSwitches.overrideScriptOn1')}</li>
                    <li>• {t('systemSettings.featureSwitches.overrideScriptOn2')}</li>
                    <li>• {t('systemSettings.featureSwitches.overrideScriptOn3')}</li>
                    <li>• {t('systemSettings.featureSwitches.overrideScriptOn4')}</li>
                  </ul>
                  <p className='mt-2'><strong>{t('systemSettings.featureSwitches.overrideScriptOffLabel')}</strong></p>
                  <ul className='ml-4 space-y-1'>
                    <li>• {t('systemSettings.featureSwitches.overrideScriptOff1')}</li>
                  </ul>
                </div>
              </div>

              {/* 自定义订阅连接 */}
              <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-pink-500'>
                <div className='flex items-center gap-2 mb-2'>
                  <Link2 className='size-4 text-pink-500' />
                  <h4 className='font-semibold text-sm'>{t('systemSettings.featureSwitches.customSubLinkTitle')}</h4></div>
                <div className='space-y-2 text-xs text-muted-foreground'>
                  <p>{t('systemSettings.featureSwitches.customSubLinkDesc')}</p>
                  <ul className='ml-4 space-y-1'>
                    <li>• <strong>{t('systemSettings.featureSwitches.customSubLink1Label')}</strong>{t('systemSettings.featureSwitches.customSubLink1Desc')}</li>
                    <li>• <strong>{t('systemSettings.featureSwitches.customSubLink2Label')}</strong>{t('systemSettings.featureSwitches.customSubLink2Desc')}</li>
                    <li>• {t('systemSettings.featureSwitches.customSubLink3')}</li>
                    <li>• {t('systemSettings.featureSwitches.customSubLink4')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 通知系统 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Bell className='size-5 text-primary' />
          {t('systemSettings.notification.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('systemSettings.notification.desc')}
            </p>
            <div className='space-y-4'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('systemSettings.notification.configTitle')}</h4>
                <ul className='text-xs text-muted-foreground space-y-1'>
                  <li>• <strong>{t('systemSettings.notification.enableLabel')}</strong>{t('systemSettings.notification.enableDesc')}</li>
                  <li>• <strong>{t('systemSettings.notification.tokenLabel')}</strong>{t('systemSettings.notification.tokenDesc')}</li>
                  <li>• <strong>{t('systemSettings.notification.chatIdLabel')}</strong>{t('systemSettings.notification.chatIdDesc')}</li>
                  <li>• {t('systemSettings.notification.testDesc')}</li>
                </ul>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('systemSettings.notification.eventsTitle')}</h4>
                <p className='text-xs text-muted-foreground mb-2'>
                  {t('systemSettings.notification.eventsDesc')}
                </p>
                <ul className='text-xs text-muted-foreground space-y-1'>
                  <li>• <strong>{t('systemSettings.notification.subFetchLabel')}</strong>{t('systemSettings.notification.subFetchDesc')}</li>
                  <li>• <strong>{t('systemSettings.notification.loginLabel')}</strong>{t('systemSettings.notification.loginDesc')}</li>
                  <li>• <strong>{t('systemSettings.notification.ipBanLabel')}</strong>{t('systemSettings.notification.ipBanDesc')}</li>
                  <li>• <strong>{t('systemSettings.notification.silentLabel')}</strong>{t('systemSettings.notification.silentDesc')}</li>
                  <li>• <strong>{t('systemSettings.notification.dailyLabel')}</strong>{t('systemSettings.notification.dailyDesc')}</li>
                  <li>• <strong>{t('systemSettings.notification.expiryLabel')}</strong>{t('systemSettings.notification.expiryDesc')}</li>
                </ul>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('systemSettings.notification.dailyTimeTitle')}</h4>
                <p className='text-xs text-muted-foreground'>
                  {t('systemSettings.notification.dailyTimeDesc')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 典型使用场景 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Sparkles className='size-5 text-primary' />
          {t('systemSettings.typicalScenarios.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='space-y-3'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('systemSettings.typicalScenarios.s1Title')}</h4>
                <p className='text-xs text-muted-foreground'>{t('systemSettings.typicalScenarios.s1Desc')}</p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('systemSettings.typicalScenarios.s2Title')}</h4>
                <p className='text-xs text-muted-foreground'>{t('systemSettings.typicalScenarios.s2Desc')}</p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('systemSettings.typicalScenarios.s3Title')}</h4>
                <p className='text-xs text-muted-foreground'>{t('systemSettings.typicalScenarios.s3Desc')}</p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('systemSettings.typicalScenarios.s4Title')}</h4>
                <p className='text-xs text-muted-foreground'>{t('systemSettings.typicalScenarios.s4Desc')}</p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('systemSettings.typicalScenarios.s5Title')}</h4>
                <p className='text-xs text-muted-foreground'>{t('systemSettings.typicalScenarios.s5Desc')}</p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('systemSettings.typicalScenarios.s6Title')}</h4>
                <p className='text-xs text-muted-foreground'>{t('systemSettings.typicalScenarios.s6Desc')}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 注意事项 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Shield className='size-5 text-primary' />
          {t('systemSettings.notes.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-orange-500'>
              <ul className='space-y-2 text-sm text-muted-foreground'>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>{t('systemSettings.notes.perfTitle')}</strong>{t('systemSettings.notes.perfDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>{t('systemSettings.notes.matchTitle')}</strong>{t('systemSettings.notes.matchDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>{t('systemSettings.notes.probeTitle')}</strong>{t('systemSettings.notes.probeDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>{t('systemSettings.notes.shortLinkTitle')}</strong>{t('systemSettings.notes.shortLinkDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>{t('systemSettings.notes.templateTitle')}</strong>{t('systemSettings.notes.templateDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>{t('systemSettings.notes.silentTitle')}</strong>{t('systemSettings.notes.silentDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>{t('systemSettings.notes.scriptTitle')}</strong>{t('systemSettings.notes.scriptDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>{t('systemSettings.notes.immediateTitle')}</strong>{t('systemSettings.notes.immediateDesc')}</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 最佳实践 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Settings className='size-5 text-primary' />
          {t('systemSettings.bestPractices.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-emerald-500'>
              <ul className='space-y-2 text-sm text-muted-foreground'>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-1'>💡</span>
                  <span><strong>{t('systemSettings.bestPractices.cacheTitle')}</strong>{t('systemSettings.bestPractices.cacheDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-1'>💡</span>
                  <span><strong>{t('systemSettings.bestPractices.onDemandTitle')}</strong>{t('systemSettings.bestPractices.onDemandDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-1'>💡</span>
                  <span><strong>{t('systemSettings.bestPractices.newTemplateTitle')}</strong>{t('systemSettings.bestPractices.newTemplateDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-1'>💡</span>
                  <span><strong>{t('systemSettings.bestPractices.shortLinkTitle')}</strong>{t('systemSettings.bestPractices.shortLinkDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-1'>💡</span>
                  <span><strong>{t('systemSettings.bestPractices.checkTitle')}</strong>{t('systemSettings.bestPractices.checkDesc')}</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
