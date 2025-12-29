import { createFileRoute } from '@tanstack/react-router'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import { Settings, Lightbulb, CheckCircle } from 'lucide-react'

export const Route = createFileRoute('/docs/client-setup')({
  component: ClientSetupPage,
})

function ClientSetupPage() {
  return (
    <DocLayout
      title='客户端配置'
      description='在代理客户端中配置妙妙屋订阅'
    >
      {/* 通用导入步骤 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Settings className='size-5 text-primary' />
          通用导入步骤
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-green-500'>
              <ol className='space-y-3 text-sm'>
                <li className='flex items-start gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>
                    1
                  </span>
                  <span>登录妙妙屋，进入"订阅链接"页面</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>
                    2
                  </span>
                  <span>复制您的订阅链接</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>
                    3
                  </span>
                  <span>打开代理客户端</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>
                    4
                  </span>
                  <span>找到"配置"或"订阅"设置</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>
                    5
                  </span>
                  <span>添加订阅并粘贴链接</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>
                    6
                  </span>
                  <span>更新订阅并选择节点</span>
                </li>
                <li className='flex items-start gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>
                    7
                  </span>
                  <span>开启系统代理即可使用</span>
                </li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 提示 */}
      <section className='mb-8'>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-yellow-500'>
              <p className='text-sm flex items-start gap-2'>
                <Lightbulb className='size-5 text-yellow-500 flex-shrink-0 mt-0.5' />
                <span>
                  <strong>提示：</strong>部分客户端支持扫描二维码导入，您可以在订阅链接页面点击订阅图标生成二维码。
                </span>
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 各客户端配置 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4'>常用客户端配置</h2>
        <div className='space-y-4'>
          {/* Clash Verge */}
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3'>Clash Verge (Windows/macOS/Linux)</h3>
              <ol className='space-y-2 text-sm text-muted-foreground'>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='size-4 text-green-500 mt-0.5 flex-shrink-0' />
                  <span>打开 Clash Verge，点击左侧"配置"菜单</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='size-4 text-green-500 mt-0.5 flex-shrink-0' />
                  <span>点击右上角"新建"按钮，选择"Remote"</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='size-4 text-green-500 mt-0.5 flex-shrink-0' />
                  <span>粘贴订阅链接，点击"保存"</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='size-4 text-green-500 mt-0.5 flex-shrink-0' />
                  <span>右键点击新添加的配置，选择"使用"</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='size-4 text-green-500 mt-0.5 flex-shrink-0' />
                  <span>在左侧"代理"菜单中选择节点和代理模式</span>
                </li>
              </ol>
            </CardContent>
          </Card>

          {/* Shadowrocket */}
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3'>Shadowrocket (iOS)</h3>
              <ol className='space-y-2 text-sm text-muted-foreground'>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='size-4 text-green-500 mt-0.5 flex-shrink-0' />
                  <span>在妙妙屋订阅链接页面，点击复制按钮选择"Shadowrocket"格式</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='size-4 text-green-500 mt-0.5 flex-shrink-0' />
                  <span>打开 Shadowrocket，点击右上角"+"</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='size-4 text-green-500 mt-0.5 flex-shrink-0' />
                  <span>选择"类型"为"Subscribe"</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='size-4 text-green-500 mt-0.5 flex-shrink-0' />
                  <span>粘贴订阅链接并保存</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='size-4 text-green-500 mt-0.5 flex-shrink-0' />
                  <span>选择节点后开启代理开关</span>
                </li>
              </ol>
            </CardContent>
          </Card>

          {/* Clash Meta for Android */}
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3'>Clash Meta for Android</h3>
              <ol className='space-y-2 text-sm text-muted-foreground'>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='size-4 text-green-500 mt-0.5 flex-shrink-0' />
                  <span>打开 Clash Meta，点击"配置"</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='size-4 text-green-500 mt-0.5 flex-shrink-0' />
                  <span>点击右上角"+"，选择"URL"</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='size-4 text-green-500 mt-0.5 flex-shrink-0' />
                  <span>粘贴订阅链接，点击右上角保存</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='size-4 text-green-500 mt-0.5 flex-shrink-0' />
                  <span>选中新添加的配置</span>
                </li>
                <li className='flex items-start gap-2'>
                  <CheckCircle className='size-4 text-green-500 mt-0.5 flex-shrink-0' />
                  <span>返回主页点击"启动"开关</span>
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </section>
    </DocLayout>
  )
}
