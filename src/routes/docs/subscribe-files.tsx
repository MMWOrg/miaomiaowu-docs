import { createFileRoute, Link } from '@tanstack/react-router'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import {
  Sparkles,
  FileCode,
  Network,
  Shield,
  ArrowRight,
} from 'lucide-react'

export const Route = createFileRoute('/docs/subscribe-files')({
  component: SubscribeFilesPage,
})

function SubscribeFilesPage() {
  return (
    <DocLayout
      title='订阅管理'
      description='管理订阅文件版本和用户分配（管理员功能）'
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
              订阅管理页面是管理员专用功能，用于管理订阅文件的版本、查看订阅详情，以及为用户分配订阅配置。支持多版本管理和用户订阅分配。
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
                  <span><strong>订阅列表查看</strong>：查看所有已创建的订阅文件及其基本信息</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>导入订阅</strong>：直接导入外部订阅，可以编辑外部订阅的规则</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>上传文件</strong>：上传本地使用的订阅文件生成订阅链接</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>生成订阅</strong>：同生成订阅菜单</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>编辑配置</strong>：直接编辑订阅的配置文件</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>编辑配置 - 应用自定义规则</strong>：使用自定义规则覆盖配置文件的规则</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span>
                    <strong>编辑配置 - 编辑节点</strong>：给已生成的订阅添加或删除节点，详细操作请参考
                    <Link to='/docs/edit-nodes' className='text-primary hover:underline inline-flex items-center gap-1 mx-1'>
                      节点与代理组编辑
                      <ArrowRight className='size-3' />
                    </Link>
                  </span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 页面布局 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Network className='size-5 text-primary' />
          编辑页面布局
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              采用双列布局，便于拖动节点：
            </p>
            <div className='grid md:grid-cols-2 gap-3'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>左侧 - 代理组</h4>
                <p className='text-xs text-muted-foreground'>
                  显示配置文件里的所有代理组卡片
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>右侧 - 可用节点</h4>
                <p className='text-xs text-muted-foreground'>
                  显示节点表里所有可用节点
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 版本管理 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <FileCode className='size-5 text-primary' />
          版本管理
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              订阅文件支持多版本管理，每次在"生成订阅"中编辑保存订阅配置时，系统会自动创建新版本。
            </p>
            <div className='space-y-3'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>版本信息</h4>
                <ul className='space-y-1 text-xs text-muted-foreground'>
                  <li>• <strong>版本号</strong>：每个版本都有唯一的版本编号，按创建时间递增</li>
                  <li>• <strong>创建时间</strong>：记录版本的创建时间</li>
                  <li>• <strong>当前版本</strong>：标识用户当前使用的版本</li>
                </ul>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>版本回退 (TODO)</h4>
                <p className='text-xs text-muted-foreground'>
                  如果新版本出现问题，可以回退到之前的稳定版本。此功能正在开发中。
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
          典型使用场景
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4'>
              <h4 className='font-semibold text-sm mb-2'>场景：添加了新节点</h4>
              <p className='text-xs text-muted-foreground'>
                点击编辑节点，在可用节点里把新增的节点拖到左侧代理组中。详细操作请参考
                <Link to='/docs/edit-nodes' className='text-primary hover:underline inline-flex items-center gap-1 mx-1'>
                  节点与代理组编辑
                  <ArrowRight className='size-3' />
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 功能关联 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Network className='size-5 text-primary' />
          功能关联
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              订阅管理与其他功能模块紧密关联，形成完整的订阅服务流程：
            </p>
            <div className='grid md:grid-cols-2 gap-3'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>生成订阅 → 订阅管理</h4>
                <p className='text-xs text-muted-foreground'>
                  在"生成订阅"中创建或编辑订阅配置后，可在"订阅管理"中查看版本历史
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>订阅管理 → 用户管理</h4>
                <p className='text-xs text-muted-foreground'>
                  可以从"用户管理"快速跳转查看特定用户的订阅分配情况
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>节点管理 → 订阅管理</h4>
                <p className='text-xs text-muted-foreground'>
                  订阅配置引用"节点管理"中的节点，节点变化会影响订阅内容
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>订阅管理 → 订阅链接</h4>
                <p className='text-xs text-muted-foreground'>
                  用户在"订阅链接"页面看到的订阅，就是管理员分配给他们的
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
                  <span><strong>节点修改</strong>：在节点管理对节点编辑后，会自动同步到订阅中</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>订阅删除</strong>：在"生成订阅"中删除订阅文件会同时删除所有版本和用户分配关系</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
