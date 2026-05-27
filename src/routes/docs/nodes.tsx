import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Plus,
  Upload,
  Eye,
  Pencil,
  Trash2,
  Sparkles,
  Shield,
  FileCode,
  Activity,
  RefreshCw,
  Smile,
  Tag,
  Copy,
  Clock,
  RotateCcw,
  Filter,
  MousePointerClick,
  ArrowUpDown,
} from 'lucide-react'
import IpIcon from '@/assets/icons/ip.svg'
import ExchangeIcon from '@/assets/icons/exchange.svg'

export const Route = createFileRoute('/docs/nodes')({
  component: NodesDocPage,
})

function NodesDocPage() {
  const { t } = useTranslation('docs')

  return (
    <DocLayout
      title={t('nodes.title')}
      description={t('nodes.description')}
    >
      {/* 功能介绍 */}
      <section className='mb-8'>
        <Card className='bg-muted/30'>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('nodes.intro')}
            </p>
            <div className='flex gap-2'>
              <Badge variant='destructive'>{t('nodes.adminFeature')}</Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 主要功能说明 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Sparkles className='size-5 text-primary' />
          {t('nodes.mainFeatures.heading')}
        </h2>
        <div className='grid gap-4 md:grid-cols-2'>
          <Card>
            <CardContent className='pt-4'>
              <div className='flex items-start gap-3'>
                <Plus className='size-5 text-primary mt-0.5' />
                <div>
                  <h4 className='font-semibold'>{t('nodes.mainFeatures.addTitle')}</h4>
                  <p className='text-sm text-muted-foreground'>{t('nodes.mainFeatures.addDesc')}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-4'>
              <div className='flex items-start gap-3'>
                <Upload className='size-5 text-primary mt-0.5' />
                <div>
                  <h4 className='font-semibold'>{t('nodes.mainFeatures.importTitle')}</h4>
                  <p className='text-sm text-muted-foreground'>{t('nodes.mainFeatures.importDesc')}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-4'>
              <div className='flex items-start gap-3'>
                <img src={IpIcon} alt='IP' className='size-5 mt-0.5' />
                <div>
                  <h4 className='font-semibold'>{t('nodes.mainFeatures.resolveIpTitle')}</h4>
                  <p className='text-sm text-muted-foreground'>{t('nodes.mainFeatures.resolveIpDesc')}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-4'>
              <div className='flex items-start gap-3'>
                <img src={ExchangeIcon} alt='Exchange' className='size-5 mt-0.5' />
                <div>
                  <h4 className='font-semibold'>{t('nodes.mainFeatures.chainProxyTitle')}</h4>
                  <p className='text-sm text-muted-foreground'>{t('nodes.mainFeatures.chainProxyDesc')}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-4'>
              <div className='flex items-start gap-3'>
                <ArrowUpDown className='size-5 text-primary mt-0.5' />
                <div>
                  <h4 className='font-semibold'>{t('nodes.mainFeatures.sortTitle')}</h4>
                  <p className='text-sm text-muted-foreground'>{t('nodes.mainFeatures.sortDesc')}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-4'>
              <div className='flex items-start gap-3'>
                <Eye className='size-5 text-primary mt-0.5' />
                <div>
                  <h4 className='font-semibold'>{t('nodes.mainFeatures.viewConfigTitle')}</h4>
                  <p className='text-sm text-muted-foreground'>{t('nodes.mainFeatures.viewConfigDesc')}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 筛选功能 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Filter className='size-5 text-primary' />
          {t('nodes.filter.heading')}
        </h2>
        <p className='text-muted-foreground mb-4'>{t('nodes.filter.desc')}</p>
        <div className='grid gap-4 md:grid-cols-2'>
          <Card>
            <CardContent className='pt-4'>
              <h4 className='font-semibold mb-2'>{t('nodes.filter.byProtocolTitle')}</h4>
              <p className='text-sm text-muted-foreground mb-3'>{t('nodes.filter.byProtocolDesc')}</p>
              <div className='flex flex-wrap gap-2'>
                <Badge variant='secondary'>{t('nodes.filter.all')}</Badge>
                <Badge variant='secondary' className='bg-purple-500/20 text-purple-400'>VLESS</Badge>
                <Badge variant='secondary' className='bg-blue-500/20 text-blue-400'>VMess</Badge>
                <Badge variant='secondary' className='bg-green-500/20 text-green-400'>SS</Badge>
                <Badge variant='secondary' className='bg-orange-500/20 text-orange-400'>Trojan</Badge>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-4'>
              <h4 className='font-semibold mb-2'>{t('nodes.filter.byTagTitle')}</h4>
              <p className='text-sm text-muted-foreground mb-3'>{t('nodes.filter.byTagDesc')}</p>
              <div className='flex flex-wrap gap-2'>
                <Badge variant='outline'>{t('nodes.filter.all')}</Badge>
                <Badge variant='outline'>{t('nodes.filter.manualInput')}</Badge>
                <Badge variant='outline'>{t('nodes.filter.externalSub')}</Badge>
                <Badge variant='outline'>{t('nodes.filter.chainProxy')}</Badge>
                <Badge variant='outline' className='border-primary/50 text-primary'>{t('nodes.filter.customTag')}</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 排序与批量操作 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <MousePointerClick className='size-5 text-primary' />
          {t('nodes.batchOps.heading')}
        </h2>
        <p className='text-muted-foreground mb-4'>
          {t('nodes.batchOps.descPrefix')}<strong>{t('nodes.batchOps.sortMode')}</strong>{t('nodes.batchOps.descSuffix')}
        </p>
        <div className='grid gap-3'>
          <Card>
            <CardContent className='pt-4'>
              <div className='grid gap-4 md:grid-cols-2'>
                <div className='flex items-start gap-3'>
                  <ArrowUpDown className='size-5 text-primary mt-0.5' />
                  <div>
                    <h4 className='font-semibold'>{t('nodes.batchOps.quickSortTitle')}</h4>
                    <p className='text-sm text-muted-foreground'>{t('nodes.batchOps.quickSortDesc')}</p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <RefreshCw className='size-5 text-primary mt-0.5' />
                  <div>
                    <h4 className='font-semibold'>{t('nodes.batchOps.syncTitle')}</h4>
                    <p className='text-sm text-muted-foreground'>{t('nodes.batchOps.syncDesc')}</p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <Smile className='size-5 text-primary mt-0.5' />
                  <div>
                    <h4 className='font-semibold'>{t('nodes.batchOps.emojiTitle')}</h4>
                    <p className='text-sm text-muted-foreground'>{t('nodes.batchOps.emojiDesc')}</p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <Pencil className='size-5 text-primary mt-0.5' />
                  <div>
                    <h4 className='font-semibold'>{t('nodes.batchOps.renameTitle')}</h4>
                    <p className='text-sm text-muted-foreground'>{t('nodes.batchOps.renameDesc')}</p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <Tag className='size-5 text-primary mt-0.5' />
                  <div>
                    <h4 className='font-semibold'>{t('nodes.batchOps.tagTitle')}</h4>
                    <p className='text-sm text-muted-foreground'>{t('nodes.batchOps.tagDesc')}</p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <Trash2 className='size-5 text-destructive mt-0.5' />
                  <div>
                    <h4 className='font-semibold'>{t('nodes.batchOps.batchDeleteTitle')}</h4>
                    <p className='text-sm text-muted-foreground'>{t('nodes.batchOps.batchDeleteDesc')}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className='border-orange-500/20'>
            <CardContent className='pt-4'>
              <div className='grid gap-4 md:grid-cols-2'>
                <div className='flex items-start gap-3'>
                  <Trash2 className='size-5 text-orange-500 mt-0.5' />
                  <div>
                    <h4 className='font-semibold text-orange-500'>{t('nodes.batchOps.clearAllTitle')}</h4>
                    <p className='text-sm text-muted-foreground'>{t('nodes.batchOps.clearAllDesc')}</p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <RotateCcw className='size-5 text-orange-500 mt-0.5' />
                  <div>
                    <h4 className='font-semibold text-orange-500'>{t('nodes.batchOps.removeDupTitle')}</h4>
                    <p className='text-sm text-muted-foreground'>{t('nodes.batchOps.removeDupDesc')}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 节点操作按钮详解 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Sparkles className='size-5 text-primary' />
          {t('nodes.nodeActions.heading')}
        </h2>
        <p className='text-muted-foreground mb-4'>{t('nodes.nodeActions.desc')}</p>
        <Card>
          <CardContent className='pt-4'>
            <div className='overflow-x-auto'>
              <table className='w-full text-sm'>
                <thead>
                  <tr className='border-b'>
                    <th className='p-3 text-left w-16'>{t('nodes.nodeActions.iconCol')}</th>
                    <th className='p-3 text-left w-32'>{t('nodes.nodeActions.nameCol')}</th>
                    <th className='p-3 text-left'>{t('nodes.nodeActions.descCol')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b'>
                    <td className='p-3'><Button size='icon' variant='ghost' className='size-7'><Pencil className='size-3.5' /></Button></td>
                    <td className='p-3 font-medium'>{t('nodes.nodeActions.editName')}</td>
                    <td className='p-3 text-muted-foreground'>{t('nodes.nodeActions.editNameDesc')}</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-3'><Button size='icon' variant='ghost' className='size-7'><img src={ExchangeIcon} alt='Exchange' className='size-3.5' /></Button></td>
                    <td className='p-3 font-medium'>{t('nodes.nodeActions.chainProxy')}</td>
                    <td className='p-3 text-muted-foreground'>{t('nodes.nodeActions.chainProxyDesc')}</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-3'><Button size='icon' variant='ghost' className='size-7'><Activity className='size-3.5' /></Button></td>
                    <td className='p-3 font-medium'>{t('nodes.nodeActions.bindProbe')}</td>
                    <td className='p-3 text-muted-foreground'>{t('nodes.nodeActions.bindProbeDesc')}</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-3'><Button size='icon' variant='ghost' className='size-7'><Smile className='size-3.5' /></Button></td>
                    <td className='p-3 font-medium'>{t('nodes.nodeActions.addEmoji')}</td>
                    <td className='p-3 text-muted-foreground'>{t('nodes.nodeActions.addEmojiDesc')}</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-3'><Button size='icon' variant='ghost' className='size-7'><img src={IpIcon} alt='IP' className='size-3.5' /></Button></td>
                    <td className='p-3 font-medium'>{t('nodes.nodeActions.resolveIp')}</td>
                    <td className='p-3 text-muted-foreground'>{t('nodes.nodeActions.resolveIpDesc')}</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-3'><Button size='icon' variant='ghost' className='size-7'><RotateCcw className='size-3.5' /></Button></td>
                    <td className='p-3 font-medium'>{t('nodes.nodeActions.restoreDomain')}</td>
                    <td className='p-3 text-muted-foreground'>{t('nodes.nodeActions.restoreDomainDesc')}</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-3'><Button size='icon' variant='ghost' className='size-7'><Eye className='size-3.5' /></Button></td>
                    <td className='p-3 font-medium'>{t('nodes.nodeActions.viewConfig')}</td>
                    <td className='p-3 text-muted-foreground'>{t('nodes.nodeActions.viewConfigDesc')}</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-3'><Button size='icon' variant='ghost' className='size-7'><Copy className='size-3.5' /></Button></td>
                    <td className='p-3 font-medium'>{t('nodes.nodeActions.copyUri')}</td>
                    <td className='p-3 text-muted-foreground'>{t('nodes.nodeActions.copyUriDesc')}</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-3'><Button size='icon' variant='ghost' className='size-7'><Clock className='size-3.5' /></Button></td>
                    <td className='p-3 font-medium'>{t('nodes.nodeActions.tempSub')}</td>
                    <td className='p-3 text-muted-foreground'>{t('nodes.nodeActions.tempSubDesc')}</td>
                  </tr>
                  <tr>
                    <td className='p-3'><Button size='icon' variant='ghost' className='size-7 text-destructive'><Trash2 className='size-3.5' /></Button></td>
                    <td className='p-3 font-medium'>{t('nodes.nodeActions.deleteNode')}</td>
                    <td className='p-3 text-muted-foreground'>{t('nodes.nodeActions.deleteNodeDesc')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 支持的协议 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Shield className='size-5 text-primary' />
          {t('nodes.protocols.heading')}
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
          {['VMess', 'VLESS', 'Trojan', 'Shadowsocks', 'Hysteria', 'Hysteria2', 'TUIC', 'ShadowsocksR', 'Socks5', 'WireGuard'].map((protocol) => (
            <Card key={protocol}>
              <CardContent className='py-3 text-center'>
                <span className='font-medium'>{protocol}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 添加节点步骤 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <FileCode className='size-5 text-primary' />
          {t('nodes.addSteps.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <ol className='space-y-4 text-sm'>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>1</span>
                <div>
                  <p className='font-medium'>{t('nodes.addSteps.step1Title')}</p>
                  <p className='text-muted-foreground'>{t('nodes.addSteps.step1Desc')}</p>
                </div>
              </li>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>2</span>
                <div>
                  <p className='font-medium'>{t('nodes.addSteps.step2Title')}</p>
                  <p className='text-muted-foreground'>{t('nodes.addSteps.step2Desc')}</p>
                </div>
              </li>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>3</span>
                <div>
                  <p className='font-medium'>{t('nodes.addSteps.step3Title')}</p>
                  <p className='text-muted-foreground'>{t('nodes.addSteps.step3Desc')}</p>
                </div>
              </li>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>4</span>
                <div>
                  <p className='font-medium'>{t('nodes.addSteps.step4Title')}</p>
                  <p className='text-muted-foreground'>{t('nodes.addSteps.step4Desc')}</p>
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
          {t('nodes.notes.heading')}
        </h2>
        <Card className='border-orange-500/20'>
          <CardContent className='pt-6'>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li className='flex items-start gap-2'>
                <span className='text-orange-500 mt-1'>⚠</span>
                <span><strong>{t('nodes.notes.accuracyTitle')}</strong>{t('nodes.notes.accuracyDesc')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-orange-500 mt-1'>⚠</span>
                <span><strong>{t('nodes.notes.deleteTitle')}</strong>{t('nodes.notes.deleteDesc')}</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-orange-500 mt-1'>⚠</span>
                <span><strong>{t('nodes.notes.subUpdateTitle')}</strong>{t('nodes.notes.subUpdateDesc')}</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
