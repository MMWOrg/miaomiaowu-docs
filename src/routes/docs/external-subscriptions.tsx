import { createFileRoute, Link } from '@tanstack/react-router'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import {
  ExternalLink,
  Sparkles,
  FileCode,
  Shield,
  ArrowRight,
  Activity,
  RefreshCw,
} from 'lucide-react'

export const Route = createFileRoute('/docs/external-subscriptions')({
  component: ExternalSubscriptionsPage,
})

function ExternalSubscriptionsPage() {
  return (
    <DocLayout
      title='外部订阅管理'
      description='导入和管理第三方订阅源，同步节点信息（管理员功能）'
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
            <p className='text-muted-foreground'>
              外部订阅管理用于导入第三方订阅链接（如机场订阅），系统会自动解析并同步订阅中的节点信息到节点表。支持查看订阅的流量使用情况和过期时间。
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
                  <span><strong>添加外部订阅</strong>：输入订阅链接、标签和 User-Agent</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>同步节点</strong>：自动或手动同步外部订阅中的节点到节点表</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>查看流量信息</strong>：显示订阅的上传/下载/总流量和过期时间</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>删除订阅</strong>：移除不再需要的外部订阅</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 添加外部订阅步骤 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <FileCode className='size-5 text-primary' />
          添加外部订阅步骤
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-green-500'>
              <div className='space-y-4 text-sm'>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>1</span>
                  <div>
                    <strong>进入节点管理页面</strong>
                    <p className='text-muted-foreground mt-1'>点击菜单栏的「节点管理」菜单</p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>2</span>
                  <div>
                    <strong>点击「导入节点」按钮</strong>
                    <p className='text-muted-foreground mt-1'>展开导入节点卡片</p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>2</span>
                  <div>
                    <strong>点击「订阅导入」按钮</strong>
                    <p className='text-muted-foreground mt-1'>显示外部订阅导入卡片</p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>3</span>
                  <div>
                    <strong>填写外部订阅信息</strong>
                    <p className='text-muted-foreground mt-1'>
                      • <strong>节点标签</strong>：为订阅设置一个易于识别的名称（默认为外部订阅响应头中的content-disposition，如果没有默认使用host）<br/>
                      • <strong>订阅链接</strong>：粘贴机场或其他订阅提供商的订阅链接<br/>
                      • <strong>User-Agent</strong>：可选，某些订阅需要特定的 UA 才能获取节点
                    </p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>4</span>
                  <div>
                    <strong>导入、保存节点</strong>
                    <p className='text-muted-foreground mt-1'>点击导入节点后系统会自动同步订阅中的节点到节点表，点击保存后保存到数据库。</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 流量信息说明 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Activity className='size-5 text-primary' />
          流量信息说明
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              外部订阅的流量信息从订阅响应头中解析获取，需要在系统设置中开启「同步外部订阅流量信息」开关。
            </p>
            <div className='grid md:grid-cols-2 gap-3'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>上传流量</h4>
                <p className='text-xs text-muted-foreground'>
                  已使用的上传流量，从订阅响应头 subscription-userinfo 中获取
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>下载流量</h4>
                <p className='text-xs text-muted-foreground'>
                  已使用的下载流量，通常这是主要的流量消耗
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>总流量</h4>
                <p className='text-xs text-muted-foreground'>
                  订阅的总可用流量额度
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>过期时间</h4>
                <p className='text-xs text-muted-foreground'>
                  订阅的到期时间，过期后节点将无法使用
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 同步机制 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <RefreshCw className='size-5 text-primary' />
          同步机制
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='space-y-3'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>手动同步</h4>
                <p className='text-xs text-muted-foreground'>
                  点击外部订阅卡片上的同步按钮，立即从订阅源拉取最新节点
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>强制同步（系统设置）</h4>
                <p className='text-xs text-muted-foreground'>
                  开启「强制同步外部订阅」后，每次用户获取订阅时都会自动同步外部订阅的节点信息。适用于节点地址或端口经常变化的情况。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 功能关联 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <ExternalLink className='size-5 text-primary' />
          功能关联
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='grid md:grid-cols-2 gap-3'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>外部订阅 → 节点管理</h4>
                <p className='text-xs text-muted-foreground'>
                  同步的节点会出现在节点管理列表中，可以进行编辑或删除
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>外部订阅 → 代理集合</h4>
                <p className='text-xs text-muted-foreground'>
                  可以基于外部订阅创建
                  <Link to='/docs/proxy-providers' className='text-primary hover:underline inline-flex items-center gap-1 mx-1'>
                    代理集合
                    <ArrowRight className='size-3' />
                  </Link>
                  配置
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>外部订阅 → 生成订阅</h4>
                <p className='text-xs text-muted-foreground'>
                  同步的节点可以在
                  <Link to='/docs/generator' className='text-primary hover:underline inline-flex items-center gap-1 mx-1'>
                    生成订阅
                    <ArrowRight className='size-3' />
                  </Link>
                  中选择使用
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>外部订阅 → 流量信息</h4>
                <p className='text-xs text-muted-foreground'>
                  用户登录后可以在「流量信息」页面查看外部订阅的流量使用情况
                </p>
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
                  <span><strong>删除不影响节点</strong>：删除外部订阅不会删除已同步的节点，节点需要在节点管理中单独删除</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>链接保密</strong>：订阅链接包含敏感信息，请勿分享给他人</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>User-Agent</strong>：某些订阅需要特定的 User-Agent 才能正确解析，如 clash、surge 等</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>流量信息</strong>：流量信息依赖订阅提供商返回的响应头，部分订阅可能不支持</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
