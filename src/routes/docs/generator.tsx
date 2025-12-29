import { createFileRoute, Link } from '@tanstack/react-router'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import {
  Zap,
  Sparkles,
  FileCode,
  Network,
  Shield,
  ArrowRight,
} from 'lucide-react'

export const Route = createFileRoute('/docs/generator')({
  component: GeneratorPage,
})

function GeneratorPage() {
  return (
    <DocLayout
      title='生成订阅'
      description='创建和管理订阅配置文件（管理员功能）'
    >
      {/* 功能说明 */}
      <section className='mb-8'>
        <div className='flex items-center gap-2 mb-4'>
          <span className='px-2 py-1 bg-destructive/10 text-destructive rounded-md text-xs border border-destructive/20'>
            管理员功能
          </span>
        </div>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              生成订阅页面是管理员专用功能，用于创建和管理用于分发给用户的订阅配置文件。生成的订阅文件为 Clash 格式。
            </p>
          </CardContent>
        </Card>
      </section>

      {/* 主要功能 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Sparkles className='size-5 text-primary' />
          主要功能
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-blue-500'>
              <ul className='space-y-2 text-sm'>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>创建新订阅：</strong>通过"生成订阅"菜单创建全新的订阅配置</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>代理组配置：</strong>通过拖动的方式把节点分配给代理组</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>集成Sublink生成订阅：</strong>支持和sublink一样选择代理组后生成订阅文件</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>内置默认规则模板：</strong>内置了ACL4SSR 和 Aethersailor 模板</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>支持配置链式代理分组：</strong>添加🌄 落地节点和🌠 中转节点代理组</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 创建订阅步骤 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <FileCode className='size-5 text-primary' />
          创建订阅步骤
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-green-500'>
              <div className='space-y-4 text-sm'>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>1</span>
                  <div>
                    <strong>点击"生成订阅"菜单</strong>
                    <p className='text-muted-foreground mt-1'>进入订阅创建界面</p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>2</span>
                  <div>
                    <strong>选择节点</strong>
                    <p className='text-muted-foreground mt-1'>
                      选择订阅中要使用的节点，支持快速筛选，点击左上角的选择框可以全选
                    </p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>3</span>
                  <div>
                    <strong>选择使用模板或自定义规则</strong>
                    <p className='text-muted-foreground mt-1'>
                      • <strong>自定义规则：</strong>选择需要的代理组，点击生成订阅文件<br/>
                      • <strong>使用模板：</strong>选择模板，点击加载
                    </p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>4</span>
                  <div>
                    <strong>手动分组</strong>
                    <p className='text-muted-foreground mt-1'>
                      通过拖动方式将节点分配到代理组，详细操作请参考
                      <Link to='/docs/edit-nodes' className='text-primary hover:underline inline-flex items-center gap-1 mx-1'>
                        节点与代理组编辑
                        <ArrowRight className='size-3' />
                      </Link>
                      文档
                    </p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>5</span>
                  <div>
                    <strong>保存并发布</strong>
                    <p className='text-muted-foreground mt-1'>点击保存按钮创建订阅文件，系统会自动生成版本号</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 订阅类型说明 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Network className='size-5 text-primary' />
          订阅类型说明
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4'>
              <h4 className='font-semibold text-sm mb-2 flex items-center gap-2'>
                <span className='size-2 rounded-full bg-orange-500'></span>
                Clash 格式
              </h4>
              <p className='text-sm text-muted-foreground mb-3'>
                适用于 Clash 内核及其衍生版本，是目前最流行的代理配置格式之一。
              </p>
              <div className='text-xs space-y-2'>
                <p><strong>支持客户端：</strong></p>
                <p className='text-muted-foreground'>Clash、Clash Verge、ClashX Pro、Clash for Windows、Clash Meta for Android 等</p>
                <p className='mt-2'><strong>配置特点：</strong></p>
                <ul className='text-muted-foreground space-y-1 list-disc list-inside'>
                  <li>支持代理组（proxy-group）和规则（rules）配置</li>
                  <li>YAML 格式，易读易编辑</li>
                  <li>支持多种代理协议（SS、VMess、Trojan、VLESS 等）</li>
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
          注意事项
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-orange-500'>
              <ul className='space-y-2 text-sm text-muted-foreground'>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>配置格式：</strong>确保自定义配置格式正确，保持yaml的缩进格式</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>节点更新：</strong>系统设置里打开强制同步外部订阅后，使用的节点会与节点表自动同步</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>删除影响：</strong>删除订阅会影响已分配该订阅的所有用户，请谨慎操作</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>用户分配：</strong>创建订阅后，需要在"用户管理"中为用户分配订阅才能使用</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 最佳实践 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Zap className='size-5 text-primary' />
          最佳实践
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-emerald-500'>
              <ul className='space-y-2 text-sm text-muted-foreground'>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-1'>💡</span>
                  <span><strong>使用清晰的命名</strong>：订阅名称应简洁明了，如"clash-main"、"singbox-premium"</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-1'>💡</span>
                  <span><strong>添加详细描述</strong>：在描述中说明订阅的适用场景和特性</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-1'>💡</span>
                  <span><strong>测试后再分配</strong>：新建订阅后先在自己的客户端测试无误再分配给用户</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-1'>💡</span>
                  <span><strong>自动更新节点</strong>：如节点服务器地址或端口会发生变更，建议打开系统设置的强制更新外部订阅开关</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-1'>💡</span>
                  <span><strong>分场景创建订阅</strong>：可以创建不同场景的订阅（如游戏专用、流媒体专用等）</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
