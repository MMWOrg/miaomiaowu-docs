import { createFileRoute } from '@tanstack/react-router'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import {
  Sparkles,
  FileCode,
  Network,
  Shield,
  Copy,
  QrCode,
  ExternalLink,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/docs/subscription-link')({
  component: SubscriptionLinkPage,
})

// 客户端类型配置
const CLIENT_TYPES = [
  { type: 'clash', name: 'Clash' },
  { type: 'stash', name: 'Stash' },
  { type: 'shadowrocket', name: 'Shadowrocket' },
  { type: 'surfboard', name: 'Surfboard' },
  { type: 'surge', name: 'Surge' },
  { type: 'surgemac', name: 'Surge Mac' },
  { type: 'loon', name: 'Loon' },
  { type: 'qx', name: 'QuantumultX' },
  { type: 'egern', name: 'Egern' },
  { type: 'sing-box', name: 'sing-box' },
  { type: 'v2ray', name: 'V2Ray' },
  { type: 'uri', name: 'URI' },
]

function SubscriptionLinkPage() {
  return (
    <DocLayout
      title='订阅链接'
      description='获取和管理您的订阅链接'
    >
      {/* 主要功能 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Sparkles className='size-5 text-primary' />
          主要功能
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              订阅链接页面提供便捷的订阅管理功能，支持多种客户端格式的订阅链接生成和导入。
            </p>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-blue-500'>
              <ul className='space-y-2 text-sm'>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>订阅卡片展示</strong>：显示管理员分配给您的所有订阅配置，包括订阅名称、描述、更新时间和版本号</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>订阅链接查看</strong>：每个订阅卡片都显示完整的订阅链接地址，支持直接复制</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>多客户端支持</strong>：点击"复制"按钮可选择不同的客户端格式（12种客户端）</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>一键导入 Clash</strong>：点击"导入 Clash"按钮可直接在 Clash 客户端中打开并导入订阅</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>二维码生成</strong>：点击订阅图标可显示二维码，方便在移动设备上扫码导入订阅</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 界面演示 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4'>界面预览</h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-sm text-muted-foreground mb-4'>
              以下是订阅卡片的示例展示：
            </p>

            {/* 模拟订阅卡片 */}
            <div className='bg-muted/30 rounded-lg p-4 space-y-4'>
              <div className='flex items-start justify-between'>
                <div>
                  <h4 className='font-semibold'>主订阅配置</h4>
                  <p className='text-sm text-muted-foreground'>包含香港、日本、新加坡节点</p>
                </div>
                <div className='text-xs text-muted-foreground'>
                  版本 v1.0.3
                </div>
              </div>

              <div className='bg-background rounded p-2 text-xs font-mono text-muted-foreground truncate'>
                https://example.com/api/subscribe/abc123...
              </div>

              <div className='flex gap-2 flex-wrap'>
                <Button size='sm' variant='outline' className='gap-1'>
                  <Copy className='size-3' />
                  复制
                </Button>
                <Button size='sm' variant='outline' className='gap-1'>
                  <ExternalLink className='size-3' />
                  导入 Clash
                </Button>
                <Button size='sm' variant='outline' className='gap-1'>
                  <QrCode className='size-3' />
                  二维码
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 使用步骤 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <FileCode className='size-5 text-primary' />
          使用步骤
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-green-500'>
              <div className='space-y-4 text-sm'>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>1</span>
                  <div>
                    <strong>选择订阅配置</strong>
                    <p className='text-muted-foreground mt-1'>从订阅卡片列表中选择需要使用的订阅配置</p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>2</span>
                  <div>
                    <strong>选择导入方式</strong>
                    <p className='text-muted-foreground mt-1'>
                      • <strong>PC端</strong>：点击"复制"按钮，选择对应的客户端格式<br/>
                      • <strong>移动端</strong>：点击二维码图标，使用手机客户端扫码导入<br/>
                      • <strong>Clash快捷导入</strong>：点击"导入 Clash"按钮直接打开
                    </p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>3</span>
                  <div>
                    <strong>在客户端中完成导入</strong>
                    <p className='text-muted-foreground mt-1'>根据客户端提示完成订阅导入和配置更新</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 支持的客户端格式 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Network className='size-5 text-primary' />
          支持的客户端格式
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-sm text-muted-foreground mb-4'>
              订阅链接支持以下12种客户端格式的自动转换：
            </p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
              {CLIENT_TYPES.map((client) => (
                <div
                  key={client.type}
                  className='bg-muted/30 rounded px-3 py-2 flex items-center gap-2 text-xs'
                >
                  <div className='size-4 rounded bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary'>
                    {client.name.charAt(0)}
                  </div>
                  <span className='font-medium'>{client.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 注意事项 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Shield className='size-5 text-primary' />
          注意事项
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-orange-500'>
              <ul className='space-y-2 text-sm text-muted-foreground'>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span>订阅链接包含您的个人认证信息，请勿分享给他人</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span>如果订阅列表为空，表示管理员尚未为您分配订阅，请联系管理员</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span>客户端转换功能基于 SubStore 实现，如遇到问题请联系开发者或提交 Issue</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span>建议定期更新订阅以获取最新的节点配置和规则</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span>机场有经常更换域名和IP的情况，可以在系统管理打开强制同步外部订阅</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
