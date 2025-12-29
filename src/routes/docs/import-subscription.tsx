import { createFileRoute } from '@tanstack/react-router'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import { FileCode, Lightbulb, Network } from 'lucide-react'

export const Route = createFileRoute('/docs/import-subscription')({
  component: ImportSubscriptionPage,
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

function ImportSubscriptionPage() {
  return (
    <DocLayout
      title='导入订阅'
      description='了解订阅格式和支持的客户端'
    >
      {/* 订阅格式支持 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <FileCode className='size-5 text-primary' />
          订阅格式支持
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-orange-500'>
              <h4 className='font-semibold mb-2 flex items-center gap-2'>
                <FileCode className='size-4' />
                Clash 格式
              </h4>
              <p className='text-sm text-muted-foreground mb-3'>
                妙妙屋生成的订阅文件为 Clash 格式，适用于 Clash 客户端，支持完整的代理组和规则配置。
              </p>
              <div className='flex gap-2 flex-wrap'>
                <span className='px-2 py-1 bg-background rounded text-xs'>Clash Verge</span>
                <span className='px-2 py-1 bg-background rounded text-xs'>ClashX Pro</span>
                <span className='px-2 py-1 bg-background rounded text-xs'>Clash Meta for Android</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 支持的客户端 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Network className='size-5 text-primary' />
          支持的客户端
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-blue-500 mb-4'>
              <p className='text-sm flex items-start gap-2'>
                <Lightbulb className='size-5 text-blue-500 flex-shrink-0 mt-0.5' />
                <span>
                  <strong>提示：</strong>以下客户端均支持导入妙妙屋的订阅节点配置，订阅链接支持自动转换为对应客户端格式。
                </span>
              </p>
            </div>
            <div className='grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
              {CLIENT_TYPES.map((client) => (
                <div
                  key={client.type}
                  className='bg-muted/30 rounded-lg p-3 flex items-center gap-2 hover:bg-muted/50 transition-colors'
                >
                  <div className='size-6 rounded bg-primary/10 flex items-center justify-center text-xs font-bold text-primary'>
                    {client.name.charAt(0)}
                  </div>
                  <span className='text-sm font-medium truncate'>{client.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 格式转换说明 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4'>格式转换说明</h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              妙妙屋集成了 SubStore 格式转换服务，可以将 Clash 格式的订阅自动转换为其他客户端格式。
            </p>
            <div className='space-y-3'>
              <div className='bg-muted/30 rounded-lg p-3'>
                <h4 className='font-semibold text-sm mb-1'>使用方式</h4>
                <p className='text-xs text-muted-foreground'>
                  在订阅链接页面点击"复制"按钮时，选择对应的客户端格式即可获取转换后的订阅链接。
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-3'>
                <h4 className='font-semibold text-sm mb-1'>支持的协议</h4>
                <div className='flex flex-wrap gap-1 mt-2'>
                  <span className='px-2 py-0.5 bg-background rounded text-xs'>VMess</span>
                  <span className='px-2 py-0.5 bg-background rounded text-xs'>VLESS</span>
                  <span className='px-2 py-0.5 bg-background rounded text-xs'>Trojan</span>
                  <span className='px-2 py-0.5 bg-background rounded text-xs'>Shadowsocks</span>
                  <span className='px-2 py-0.5 bg-background rounded text-xs'>Hysteria</span>
                  <span className='px-2 py-0.5 bg-background rounded text-xs'>Hysteria2</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
