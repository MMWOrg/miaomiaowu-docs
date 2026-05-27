import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import {
  Network,
  Zap,
  Users,
  FileCode,
  Download,
  RefreshCw,
  Link as LinkIcon,
  Activity,
  EyeOff,
  ScrollText,
  Bell,
  Bug,
  DatabaseBackup,
  ShieldCheck,
  Wifi,
} from 'lucide-react'

// 导入客户端图标
import clashIcon from '@/assets/icons/clash_color.png'
import stashIcon from '@/assets/icons/stash_color.png'
import shadowrocketIcon from '@/assets/icons/shadowrocket_color.png'
import surfboardIcon from '@/assets/icons/surfboard_color.png'
import surgeIcon from '@/assets/icons/surge_color.png'
import surgeMacIcon from '@/assets/icons/surgeformac_icon_color.png'
import loonIcon from '@/assets/icons/loon_color.png'
import quanxIcon from '@/assets/icons/quanx_color.png'
import egernIcon from '@/assets/icons/egern_color.png'
import singboxIcon from '@/assets/icons/sing-box_color.png'
import v2rayIcon from '@/assets/icons/v2ray_color.png'
import uriIcon from '@/assets/icons/uri-color.svg'

const CLIENT_TYPES = [
  { type: 'clash', name: 'Clash', icon: clashIcon },
  { type: 'stash', name: 'Stash', icon: stashIcon },
  { type: 'shadowrocket', name: 'Shadowrocket', icon: shadowrocketIcon },
  { type: 'surfboard', name: 'Surfboard', icon: surfboardIcon },
  { type: 'surge', name: 'Surge', icon: surgeIcon },
  { type: 'surgemac', name: 'Surge Mac', icon: surgeMacIcon },
  { type: 'loon', name: 'Loon', icon: loonIcon },
  { type: 'qx', name: 'QuantumultX', icon: quanxIcon },
  { type: 'egern', name: 'Egern', icon: egernIcon },
  { type: 'sing-box', name: 'sing-box', icon: singboxIcon },
  { type: 'v2ray', name: 'V2Ray', icon: v2rayIcon },
  { type: 'uri', name: 'URI', icon: uriIcon },
]

export const Route = createFileRoute('/docs/features')({
  component: FeaturesPage,
})

function FeaturesPage() {
  const { t } = useTranslation('docs')

  return (
    <DocLayout
      title={t('features.title')}
      description={t('features.description')}
    >
      {/* 多客户端支持 */}
      <section id='multi-client' className='mb-10'>
        <h2 className='text-2xl font-bold mb-4 flex items-center gap-2'>
          <Download className='size-6 text-primary' />
          {t('features.multiClient.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('features.multiClient.desc')}
            </p>
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3'>
              {CLIENT_TYPES.map((client) => (
                <div
                  key={client.type}
                  className='flex flex-col items-center gap-2 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors'
                >
                  <img src={client.icon} alt={client.name} className='size-8' />
                  <span className='text-xs font-medium text-center'>{client.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 节点管理 */}
      <section id='node-management' className='mb-10'>
        <h2 className='text-2xl font-bold mb-4 flex items-center gap-2'>
          <Network className='size-6 text-primary' />
          {t('features.nodeManagement.heading')}
        </h2>
        <div className='space-y-4'>
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3'>{t('features.nodeManagement.protocols')}</h3>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                {['VMess', 'VLESS', 'Trojan', 'Shadowsocks', 'Hysteria', 'Hysteria2', 'TUIC', 'WireGuard'].map((protocol) => (
                  <div
                    key={protocol}
                    className='px-3 py-2 rounded bg-primary/10 text-primary text-sm font-medium text-center'
                  >
                    {protocol}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3'>{t('features.nodeManagement.functionsHeading')}</h3>
              <ul className='space-y-2 text-sm text-muted-foreground'>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span>{t('features.nodeManagement.manualAdd')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span>{t('features.nodeManagement.subImport')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span>{t('features.nodeManagement.dnsResolve')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span>{t('features.nodeManagement.chainProxy')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span>{t('features.nodeManagement.probeBind')}</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 订阅生成 */}
      <section id='subscription-generator' className='mb-10'>
        <h2 className='text-2xl font-bold mb-4 flex items-center gap-2'>
          <Zap className='size-6 text-primary' />
          {t('features.subGenerator.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <ul className='space-y-3 text-sm text-muted-foreground'>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('features.subGenerator.visualConfig')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('features.subGenerator.builtinTemplates')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('features.subGenerator.chainProxyGroup')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('features.subGenerator.versionControl')}</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* 用户管理 */}
      <section id='user-management' className='mb-10'>
        <h2 className='text-2xl font-bold mb-4 flex items-center gap-2'>
          <Users className='size-6 text-primary' />
          {t('features.userManagement.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <ul className='space-y-3 text-sm text-muted-foreground'>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('features.userManagement.createUser')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('features.userManagement.assignSub')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('features.userManagement.statusMgmt')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('features.userManagement.resetPwd')}</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* 流量统计 */}
      <section id='traffic-statistics' className='mb-10'>
        <h2 className='text-2xl font-bold mb-4 flex items-center gap-2'>
          <Activity className='size-6 text-primary' />
          {t('features.trafficStats.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('features.trafficStats.desc')}
            </p>
            <ul className='space-y-3 text-sm text-muted-foreground'>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('features.trafficStats.multiProbe')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('features.trafficStats.nodeLevel')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('features.trafficStats.flexConfig')}</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* 自定义规则 */}
      <section id='custom-rules' className='mb-10'>
        <h2 className='text-2xl font-bold mb-4 flex items-center gap-2'>
          <FileCode className='size-6 text-primary' />
          {t('features.customRules.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <ul className='space-y-3 text-sm text-muted-foreground'>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('features.customRules.dns')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('features.customRules.ruleList')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('features.customRules.ruleProvider')}</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* 外部订阅同步 */}
      <section id='external-sync' className='mb-10'>
        <h2 className='text-2xl font-bold mb-4 flex items-center gap-2'>
          <RefreshCw className='size-6 text-primary' />
          {t('features.externalSync.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <ul className='space-y-3 text-sm text-muted-foreground'>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('features.externalSync.autoSync')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('features.externalSync.cache')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('features.externalSync.matchRules')}</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* 链式代理 */}
      <section id='chain-proxy' className='mb-10'>
        <h2 className='text-2xl font-bold mb-4 flex items-center gap-2'>
          <LinkIcon className='size-6 text-primary' />
          {t('features.chainProxy.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('features.chainProxy.desc')}
            </p>
            <div className='bg-muted/30 rounded-lg p-4 font-mono text-sm mb-4'>
              {t('features.chainProxy.diagram')}
            </div>
            <ul className='space-y-3 text-sm text-muted-foreground'>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('features.chainProxy.relay')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('features.chainProxy.privacy')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('features.chainProxy.flexCombo')}</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
      {/* 安全功能 */}
      <section id='security' className='mb-10'>
        <h2 className='text-2xl font-bold mb-4 flex items-center gap-2'>
          <ShieldCheck className='size-6 text-primary' />
          {t('features.security.heading')}
        </h2>
        <div className='space-y-4'>
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3 flex items-center gap-2'>
                <EyeOff className='size-4' />
                {t('features.security.silentMode.title')}
              </h3>
              <ul className='space-y-2 text-sm text-muted-foreground'>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span>{t('features.security.silentMode.panelHide')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span>{t('features.security.silentMode.tempWindow')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span>{t('features.security.silentMode.configTimeout')}</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3'>{t('features.security.twoFa.title')}</h3>
              <ul className='space-y-2 text-sm text-muted-foreground'>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span>{t('features.security.twoFa.totp')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span>{t('features.security.twoFa.recovery')}</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 覆写脚本 */}
      <section id='override-scripts' className='mb-10'>
        <h2 className='text-2xl font-bold mb-4 flex items-center gap-2'>
          <ScrollText className='size-6 text-primary' />
          {t('features.overrideScripts.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <ul className='space-y-3 text-sm text-muted-foreground'>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('features.overrideScripts.jsScript')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('features.overrideScripts.hooks')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('features.overrideScripts.orderControl')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('features.overrideScripts.toggle')}</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Telegram 通知 */}
      <section id='notifications' className='mb-10'>
        <h2 className='text-2xl font-bold mb-4 flex items-center gap-2'>
          <Bell className='size-6 text-primary' />
          {t('features.telegram.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <ul className='space-y-3 text-sm text-muted-foreground'>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('features.telegram.multiEvent')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('features.telegram.dailyReport')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('features.telegram.expiryReminder')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>{t('features.telegram.toggle')}</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* 运维工具 */}
      <section id='ops-tools' className='mb-10'>
        <h2 className='text-2xl font-bold mb-4 flex items-center gap-2'>
          <Wifi className='size-6 text-primary' />
          {t('features.opsTools.heading')}
        </h2>
        <div className='space-y-4'>
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3 flex items-center gap-2'>
                <Bug className='size-4' />
                {t('features.opsTools.debugLog.title')}
              </h3>
              <ul className='space-y-2 text-sm text-muted-foreground'>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span>{t('features.opsTools.debugLog.tempEnable')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span>{t('features.opsTools.debugLog.download')}</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3'>TCP Ping</h3>
              <ul className='space-y-2 text-sm text-muted-foreground'>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span>{t('features.opsTools.tcpPing.speedTest')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span>{t('features.opsTools.tcpPing.timeout')}</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3 flex items-center gap-2'>
                <DatabaseBackup className='size-4' />
                {t('features.opsTools.backup.title')}
              </h3>
              <ul className='space-y-2 text-sm text-muted-foreground'>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span>{t('features.opsTools.backup.fullBackup')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span>{t('features.opsTools.backup.oneClickRestore')}</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </DocLayout>
  )
}
