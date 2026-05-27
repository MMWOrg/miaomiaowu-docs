import { createFileRoute, Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'
import {
  Plus,
  Pencil,
  Trash2,
  Download,
  Sparkles,
  Shield,
  FileCode,
  Globe,
  Settings,
  Database,
  FolderOpen,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from 'lucide-react'

export const Route = createFileRoute('/docs/templates')({
  component: TemplatesDocPage,
})

// 新模板示例（subconverter ini 格式）
const newTemplateExample = `;Telegram 通知频道：https://t.me/custom_openclash_rules

;轻量版分流规则
;仅包含基本的国内/国外分流功能，包含一些基本的直连规则，其余网站和IP全部代理
;适合不需要解锁和分流需求的用户

[custom]
;设置规则标志位
;以下规则，按照从上往下的顺序遍历，优先命中上位规则，规则重复无影响
;修改顺序会影响分流效果

;本地地址和域名直连
ruleset=🎯 全球直连,[]GEOSITE,private
ruleset=🎯 全球直连,[]GEOIP,private,no-resolve
;本项目收录的直连规则
ruleset=🎯 全球直连,clash-domain:https://testingcf.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Direct_Domain.yaml,28800
ruleset=🎯 全球直连,clash-classic:https://testingcf.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Direct_Classical_IP.yaml,28800
;本项目收录的代理规则
ruleset=🚀 手动选择,clash-domain:https://testingcf.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Proxy_Domain.yaml,28800
ruleset=🚀 手动选择,clash-classic:https://testingcf.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Proxy_Classical_IP.yaml,28800
;谷歌在国内可用的域名直连
ruleset=🎯 全球直连,[]GEOSITE,google-cn
;国内游戏域名直连
ruleset=🎯 全球直连,[]GEOSITE,category-games@cn
;Steam 下载 CDN 直连
ruleset=🎯 全球直连,clash-classic:https://testingcf.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Steam_CDN_Classical.yaml,2880
;各大游戏平台下载域名直连
ruleset=🎯 全球直连,[]GEOSITE,category-game-platforms-download
;BT Tracker 相关域名直连
ruleset=🎯 全球直连,[]GEOSITE,category-public-tracker
ruleset=🚀 GitHub,[]GEOSITE,github
ruleset=🚀 测速工具,[]GEOSITE,category-speedtest
ruleset=🍎 苹果服务,[]GEOSITE,apple
ruleset=🎮 Steam,[]GEOSITE,steam
ruleset=Ⓜ️ 微软服务,[]GEOSITE,microsoft
ruleset=📢 谷歌FCM,[]GEOSITE,googlefcm
ruleset=🇬 谷歌服务,[]GEOSITE,google
ruleset=🚀 手动选择,[]GEOSITE,gfw
ruleset=🎮 游戏平台,[]GEOSITE,category-games
ruleset=🇬 谷歌服务,[]GEOIP,google,no-resolve
;由于 OpenClash 使用的大陆白名单收录不全，此处留有 geosite:cn 作为国内域名兜底
ruleset=🎯 全球直连,[]GEOSITE,cn
;由于 OpenClash 使用的大陆白名单收录不全，此处留有 geoip:cn 作为国内 IP 兜底
ruleset=🎯 全球直连,[]GEOIP,cn,no-resolve
;以上兜底规则会根据实际情况随时取消
;PT/BT 优化开启会使 80/443 以外端口的流量直连
ruleset=🔀 非标端口,clash-classic:https://testingcf.jsdelivr.net/gh/Aethersailor/Custom_OpenClash_Rules@main/rule/Custom_Port_Direct.yaml,28800
;国内冷门域名会命中漏网之鱼，如影响使用，请设置漏网之鱼直连
;漏网之鱼直连时，无法通过 DNS 泄露测试，但是并不存在泄露
ruleset=🐟 漏网之鱼,[]FINAL
;设置规则标志位结束

;设置节点分组标志位
;节点地区分组参考本项目推荐机场而设立
custom_proxy_group=🚀 手动选择\`select\`[]♻️ 自动选择\`[]🇭🇰 香港节点\`[]🇺🇸 美国节点\`[]🇯🇵 日本节点\`.*
custom_proxy_group=♻️ 自动选择\`url-test\`.*\`https://www.gstatic.com/generate_204\`300,,50
custom_proxy_group=🚀 GitHub\`select\`[]🚀 手动选择\`[]♻️ 自动选择\`[]🎯 全球直连\`.*
custom_proxy_group=🍎 苹果服务\`select\`[]🎯 全球直连\`[]🚀 手动选择\`[]♻️ 自动选择\`.*
custom_proxy_group=Ⓜ️ 微软服务\`select\`[]🎯 全球直连\`[]🚀 手动选择\`[]♻️ 自动选择\`.*
custom_proxy_group=🎮 游戏平台\`select\`[]🎯 全球直连\`[]🚀 手动选择\`[]♻️ 自动选择\`.*
custom_proxy_group=🎮 Steam\`select\`[]🎯 全球直连\`[]🚀 手动选择\`[]♻️ 自动选择\`.*
custom_proxy_group=🐟 漏网之鱼\`select\`[]🚀 手动选择\`[]♻️ 自动选择\`[]🎯 全球直连\`.*
custom_proxy_group=🇭🇰 香港节点\`url-test\`(港|HK|hk|Hong Kong)\`https://www.gstatic.com/generate_204\`300,,50
custom_proxy_group=🇺🇸 美国节点\`url-test\`(美|US|United States)\`https://www.gstatic.com/generate_204\`300,,50
custom_proxy_group=🇯🇵 日本节点\`url-test\`(日本|JP|Japan)\`https://www.gstatic.com/generate_204\`300,,50
custom_proxy_group=🎯 全球直连\`select\`[]DIRECT
;设置分组标志位

;下方参数请勿修改
enable_rule_generator=true
overwrite_original_rules=true`

// 旧模板示例（Clash YAML 格式）
const oldTemplateExample = `port: 7890
socks-port: 7891
allow-lan: true
mode: rule
log-level: info
external-controller: 127.0.0.1:9090
dns:
  enable: true
  ipv6: true
  respect-rules: true
  enhanced-mode: fake-ip
  nameserver:
    - "https://120.53.53.53/dns-query"
    - "https://223.5.5.5/dns-query"
  proxy-server-nameserver:
    - "https://120.53.53.53/dns-query"
    - "https://223.5.5.5/dns-query"
  nameserver-policy:
    geosite:cn,private:
      - "https://120.53.53.53/dns-query"
      - "https://223.5.5.5/dns-query"
    geosite:geolocation-!cn:
      - "https://dns.cloudflare.com/dns-query"
      - "https://dns.google/dns-query"
proxies:
proxy-groups:
  - name: 🚀 节点选择
    type: select
    proxies:
      - ♻️ 自动选择
      - DIRECT
  - name: ♻️ 自动选择
    type: url-test
    url: http://www.gstatic.com/generate_204
    interval: 300
    tolerance: 50
    proxies:
  - name: 🎯 全球直连
    type: select
    proxies:
      - DIRECT
      - 🚀 节点选择
      - ♻️ 自动选择
  - name: 🛑 全球拦截
    type: select
    proxies:
      - REJECT
      - DIRECT
  - name: 🐟 漏网之鱼
    type: select
    proxies:
      - 🚀 节点选择
      - 🎯 全球直连
      - ♻️ 自动选择
rules:
  - RULE-SET,LocalAreaNetwork,🎯 全球直连
  - RULE-SET,BanAD,🛑 全球拦截
  - RULE-SET,BanProgramAD,🛑 全球拦截
  - RULE-SET,GoogleCN,🎯 全球直连
  - RULE-SET,SteamCN,🎯 全球直连
  - RULE-SET,Telegram,🚀 节点选择
  - RULE-SET,ProxyMedia,🚀 节点选择
  - RULE-SET,ProxyLite,🚀 节点选择
  - RULE-SET,ChinaDomain,🎯 全球直连
  - RULE-SET,ChinaCompanyIp,🎯 全球直连
  - GEOIP,CN,🎯 全球直连
  - MATCH,🐟 漏网之鱼
rule-providers:
  LocalAreaNetwork:
    type: http
    behavior: classical
    url: https://api.dler.io/getruleset?type=6&url=...
    path: ./providers/LocalAreaNetwork.yaml
    interval: 86400
  BanAD:
    type: http
    behavior: classical
    url: https://api.dler.io/getruleset?type=6&url=...
    path: ./providers/BanAD.yaml
    interval: 86400
  # ... 更多 rule-providers`

function CollapsibleCode({ title, code, language }: { title: string; code: string; language: string }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className='border rounded-lg overflow-hidden'>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className='w-full flex items-center justify-between p-3 bg-muted/50 hover:bg-muted/70 transition-colors text-left'
      >
        <span className='font-medium text-sm'>{title}</span>
        {isExpanded ? <ChevronUp className='size-4' /> : <ChevronDown className='size-4' />}
      </button>
      {isExpanded && (
        <div className='max-h-96 overflow-auto'>
          <pre className='p-4 text-xs bg-muted/30 overflow-x-auto'>
            <code className={`language-${language}`}>{code}</code>
          </pre>
        </div>
      )}
    </div>
  )
}

function TemplatesDocPage() {
  const { t } = useTranslation('docs')

  return (
    <DocLayout
      title={t('templates.title')}
      description={t('templates.description')}
    >
      {/* 功能介绍 */}
      <section className='mb-8'>
        <Card className='bg-muted/30'>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('templates.intro')}
            </p>
            <div className='flex gap-2'>
              <Badge variant='destructive'>{t('templates.adminFeature')}</Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 模板系统切换 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Settings className='size-5 text-primary' />
          {t('templates.systemSwitch.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('templates.systemSwitch.desc')}
              <Link to='/docs/system-settings' className='text-primary hover:underline mx-1'>
                {t('templates.systemSwitch.settingsLink')}
              </Link>
              {t('templates.systemSwitch.descSuffix')}
            </p>
            <div className='space-y-4'>
              <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-green-500'>
                <div className='flex items-center gap-2 mb-2'>
                  <Database className='size-4 text-green-500' />
                  <h4 className='font-semibold text-sm'>{t('templates.systemSwitch.newTitle')}</h4>
                </div>
                <p className='text-xs text-muted-foreground'>
                  {t('templates.systemSwitch.newDesc')}
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-blue-500'>
                <div className='flex items-center gap-2 mb-2'>
                  <FolderOpen className='size-4 text-blue-500' />
                  <h4 className='font-semibold text-sm'>{t('templates.systemSwitch.oldTitle')}</h4>
                </div>
                <p className='text-xs text-muted-foreground'>
                  {t('templates.systemSwitch.oldDesc')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 模板V2 新模板（数据库模板） */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Database className='size-5 text-primary' />
          {t('templates.newTemplate.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('templates.newTemplate.desc')}
            </p>
            <div className='bg-muted/30 rounded-lg p-4 mb-4'>
              <h4 className='font-semibold text-sm mb-2 flex items-center gap-2'>
                <ExternalLink className='size-4' />
                {t('templates.newTemplate.resourceTitle')}
              </h4>
              <ul className='text-xs text-muted-foreground space-y-1'>
                <li>• <strong>ACL4SSR</strong>：<code className='bg-muted px-1 rounded'>https://github.com/ACL4SSR/ACL4SSR/tree/master/Clash/config</code></li>
                <li>• <strong>Aethersailor</strong>：<code className='bg-muted px-1 rounded'>https://github.com/Aethersailor/Custom_OpenClash_Rules</code></li>
              </ul>
            </div>
            <div className='space-y-4'>
              <div className='bg-primary/5 rounded-lg p-4 border border-primary/20'>
                <h4 className='font-semibold text-sm mb-2'>{t('templates.newTemplate.formatTitle')}</h4>
                <p className='text-xs text-muted-foreground mb-2'>
                  {t('templates.newTemplate.formatDesc')}
                </p>
                <ul className='text-xs text-muted-foreground space-y-1'>
                  <li>• <code className='bg-muted px-1 rounded'>[custom]</code>{t('templates.newTemplate.formatCustom')}</li>
                  <li>• <code className='bg-muted px-1 rounded'>ruleset=</code>{t('templates.newTemplate.formatRuleset')}</li>
                  <li>• <code className='bg-muted px-1 rounded'>custom_proxy_group=</code>{t('templates.newTemplate.formatProxyGroup')}</li>
                  <li>• <code className='bg-muted px-1 rounded'>enable_rule_generator=true</code>{t('templates.newTemplate.formatRuleGen')}</li>
                  <li>• <code className='bg-muted px-1 rounded'>overwrite_original_rules=true</code>{t('templates.newTemplate.formatOverwrite')}</li>
                </ul>
              </div>
              <CollapsibleCode
                title={t('templates.newTemplate.exampleTitle')}
                code={newTemplateExample}
                language='ini'
              />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 模板V1 旧模板（文件模板） */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <FolderOpen className='size-5 text-primary' />
          {t('templates.oldTemplate.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('templates.oldTemplate.desc')}
            </p>
            <div className='space-y-4'>
              <div className='bg-primary/5 rounded-lg p-4 border border-primary/20'>
                <h4 className='font-semibold text-sm mb-2'>{t('templates.oldTemplate.formatTitle')}</h4>
                <p className='text-xs text-muted-foreground mb-2'>
                  {t('templates.oldTemplate.formatDesc')}
                </p>
                <ul className='text-xs text-muted-foreground space-y-1'>
                  <li>• <code className='bg-muted px-1 rounded'>port/socks-port</code>{t('templates.oldTemplate.formatPort')}</li>
                  <li>• <code className='bg-muted px-1 rounded'>dns</code>{t('templates.oldTemplate.formatDns')}</li>
                  <li>• <code className='bg-muted px-1 rounded'>proxies</code>{t('templates.oldTemplate.formatProxies')}</li>
                  <li>• <code className='bg-muted px-1 rounded'>proxy-groups</code>{t('templates.oldTemplate.formatProxyGroups')}</li>
                  <li>• <code className='bg-muted px-1 rounded'>rules</code>{t('templates.oldTemplate.formatRules')}</li>
                  <li>• <code className='bg-muted px-1 rounded'>rule-providers</code>{t('templates.oldTemplate.formatRuleProviders')}</li>
                </ul>
              </div>
              <CollapsibleCode
                title={t('templates.oldTemplate.exampleTitle')}
                code={oldTemplateExample}
                language='yaml'
              />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 主要功能 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Sparkles className='size-5 text-primary' />
          {t('templates.mainFeatures.heading')}
        </h2>
        <div className='grid gap-4 md:grid-cols-2'>
          <Card>
            <CardContent className='pt-4'>
              <div className='flex items-start gap-3'>
                <Plus className='size-5 text-primary mt-0.5' />
                <div>
                  <h4 className='font-semibold'>{t('templates.mainFeatures.createTitle')}</h4>
                  <p className='text-sm text-muted-foreground'>
                    {t('templates.mainFeatures.createDesc')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-4'>
              <div className='flex items-start gap-3'>
                <Pencil className='size-5 text-primary mt-0.5' />
                <div>
                  <h4 className='font-semibold'>{t('templates.mainFeatures.editTitle')}</h4>
                  <p className='text-sm text-muted-foreground'>
                    {t('templates.mainFeatures.editDesc')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-4'>
              <div className='flex items-start gap-3'>
                <Trash2 className='size-5 text-primary mt-0.5' />
                <div>
                  <h4 className='font-semibold'>{t('templates.mainFeatures.deleteTitle')}</h4>
                  <p className='text-sm text-muted-foreground'>
                    {t('templates.mainFeatures.deleteDesc')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-4'>
              <div className='flex items-start gap-3'>
                <Download className='size-5 text-primary mt-0.5' />
                <div>
                  <h4 className='font-semibold'>{t('templates.mainFeatures.loadTitle')}</h4>
                  <p className='text-sm text-muted-foreground'>
                    {t('templates.mainFeatures.loadDesc')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 内置模板 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <FileCode className='size-5 text-primary' />
          {t('templates.builtIn.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('templates.builtIn.desc')}
            </p>
            <div className='space-y-4'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold mb-2'>{t('templates.builtIn.acl4ssrTitle')}</h4>
                <p className='text-sm text-muted-foreground mb-2'>
                  {t('templates.builtIn.acl4ssrDesc')}
                </p>
                <ul className='text-sm text-muted-foreground space-y-1 ml-4'>
                  <li>• <strong>ACL4SSR_Online_Full</strong>{t('templates.builtIn.acl4ssrFull')}</li>
                  <li>• <strong>ACL4SSR_Online_Full_NoAuto</strong>{t('templates.builtIn.acl4ssrFullNoAuto')}</li>
                  <li>• <strong>ACL4SSR_Online_Mini</strong>{t('templates.builtIn.acl4ssrMini')}</li>
                  <li>• <strong>ACL4SSR_Online</strong>{t('templates.builtIn.acl4ssrDefault')}</li>
                </ul>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold mb-2'>{t('templates.builtIn.aethersailorTitle')}</h4>
                <p className='text-sm text-muted-foreground mb-2'>
                  {t('templates.builtIn.aethersailorDesc')}
                </p>
                <ul className='text-sm text-muted-foreground space-y-1 ml-4'>
                  <li>• <strong>Aethersailor Full</strong>{t('templates.builtIn.aethersailorFull')}</li>
                  <li>• <strong>Aethersailor Lite</strong>{t('templates.builtIn.aethersailorLite')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 创建模板步骤 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <FileCode className='size-5 text-primary' />
          {t('templates.createSteps.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-green-500/10 rounded-lg p-4 mb-4 border border-green-500/20'>
              <h4 className='font-semibold text-sm mb-2 text-green-600'>{t('templates.createSteps.newSystemTitle')}</h4>
              <ol className='space-y-3 text-sm'>
                <li className='flex gap-3'>
                  <span className='flex-shrink-0 size-5 rounded-full bg-green-500/20 text-green-600 flex items-center justify-center text-xs font-semibold'>
                    1
                  </span>
                  <span className='text-muted-foreground'>{t('templates.createSteps.newStep1')}</span>
                </li>
                <li className='flex gap-3'>
                  <span className='flex-shrink-0 size-5 rounded-full bg-green-500/20 text-green-600 flex items-center justify-center text-xs font-semibold'>
                    2
                  </span>
                  <span className='text-muted-foreground'>
                    {t('templates.createSteps.newStep2')}
                  </span>
                </li>
                <li className='flex gap-3'>
                  <span className='flex-shrink-0 size-5 rounded-full bg-green-500/20 text-green-600 flex items-center justify-center text-xs font-semibold'>
                    3
                  </span>
                  <span className='text-muted-foreground'>
                    {t('templates.createSteps.newStep3')}
                  </span>
                </li>
                <li className='flex gap-3'>
                  <span className='flex-shrink-0 size-5 rounded-full bg-green-500/20 text-green-600 flex items-center justify-center text-xs font-semibold'>
                    4
                  </span>
                  <span className='text-muted-foreground'>{t('templates.createSteps.newStep4')}</span>
                </li>
              </ol>
            </div>
            <div className='bg-blue-500/10 rounded-lg p-4 border border-blue-500/20'>
              <h4 className='font-semibold text-sm mb-2 text-blue-600'>{t('templates.createSteps.oldSystemTitle')}</h4>
              <ol className='space-y-3 text-sm'>
                <li className='flex gap-3'>
                  <span className='flex-shrink-0 size-5 rounded-full bg-blue-500/20 text-blue-600 flex items-center justify-center text-xs font-semibold'>
                    1
                  </span>
                  <span className='text-muted-foreground'>
                    {t('templates.createSteps.oldStep1')}
                  </span>
                </li>
                <li className='flex gap-3'>
                  <span className='flex-shrink-0 size-5 rounded-full bg-blue-500/20 text-blue-600 flex items-center justify-center text-xs font-semibold'>
                    2
                  </span>
                  <span className='text-muted-foreground'>
                    {t('templates.createSteps.oldStep2')}
                  </span>
                </li>
                <li className='flex gap-3'>
                  <span className='flex-shrink-0 size-5 rounded-full bg-blue-500/20 text-blue-600 flex items-center justify-center text-xs font-semibold'>
                    3
                  </span>
                  <span className='text-muted-foreground'>{t('templates.createSteps.oldStep3')}</span>
                </li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 使用模板 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Globe className='size-5 text-primary' />
          {t('templates.useTemplate.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('templates.useTemplate.desc')}
            </p>
            <ol className='space-y-4 text-sm'>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>
                  1
                </span>
                <div>
                  <p className='font-medium'>{t('templates.useTemplate.step1Title')}</p>
                  <p className='text-muted-foreground'>{t('templates.useTemplate.step1Desc')}</p>
                </div>
              </li>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>
                  2
                </span>
                <div>
                  <p className='font-medium'>{t('templates.useTemplate.step2Title')}</p>
                  <p className='text-muted-foreground'>{t('templates.useTemplate.step2Desc')}</p>
                </div>
              </li>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>
                  3
                </span>
                <div>
                  <p className='font-medium'>{t('templates.useTemplate.step3Title')}</p>
                  <p className='text-muted-foreground'>{t('templates.useTemplate.step3Desc')}</p>
                </div>
              </li>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>
                  4
                </span>
                <div>
                  <p className='font-medium'>{t('templates.useTemplate.step4Title')}</p>
                  <p className='text-muted-foreground'>{t('templates.useTemplate.step4Desc')}</p>
                </div>
              </li>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>
                  5
                </span>
                <div>
                  <p className='font-medium'>{t('templates.useTemplate.step5Title')}</p>
                  <p className='text-muted-foreground'>{t('templates.useTemplate.step5Desc')}</p>
                </div>
              </li>
            </ol>
          </CardContent>
        </Card>
      </section>

      {/* 注意事项 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Shield className='size-5 text-orange-500' />
          {t('templates.notes.heading')}
        </h2>
        <Card className='border-orange-500/20'>
          <CardContent className='pt-6'>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li className='flex items-start gap-2'>
                <span className='text-orange-500 mt-1'>⚠</span>
                <span><strong>{t('templates.notes.formatTitle')}</strong>{t('templates.notes.formatDesc')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-orange-500 mt-1'>⚠</span>
                <span><strong>{t('templates.notes.urlTitle')}</strong>{t('templates.notes.urlDesc')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-orange-500 mt-1'>⚠</span>
                <span><strong>{t('templates.notes.proxyTitle')}</strong>{t('templates.notes.proxyDesc')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-orange-500 mt-1'>⚠</span>
                <span><strong>{t('templates.notes.switchTitle')}</strong>{t('templates.notes.switchDesc')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-orange-500 mt-1'>⚠</span>
                <span><strong>{t('templates.notes.deleteTitle')}</strong>{t('templates.notes.deleteDesc')}</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
