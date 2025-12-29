import { createFileRoute } from '@tanstack/react-router'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Plus,
  Pencil,
  Trash2,
  Download,
  Sparkles,
  Shield,
  FileCode,
  Globe,
} from 'lucide-react'

export const Route = createFileRoute('/docs/templates')({
  component: TemplatesDocPage,
})

function TemplatesDocPage() {
  return (
    <DocLayout
      title='模板管理'
      description='管理订阅配置模板，快速生成订阅文件'
    >
      {/* 功能介绍 */}
      <section className='mb-8'>
        <Card className='bg-muted/30'>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              模板管理页面是管理员专用功能，用于管理订阅配置模板。通过模板可以快速生成标准化的订阅配置文件。
            </p>
            <div className='flex gap-2'>
              <Badge variant='destructive'>管理员功能</Badge>
              <Badge className='bg-primary/10 text-primary'>新功能</Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 主要功能 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Sparkles className='size-5 text-primary' />
          主要功能
        </h2>
        <div className='grid gap-4 md:grid-cols-2'>
          <Card>
            <CardContent className='pt-4'>
              <div className='flex items-start gap-3'>
                <Plus className='size-5 text-primary mt-0.5' />
                <div>
                  <h4 className='font-semibold'>创建模板</h4>
                  <p className='text-sm text-muted-foreground'>
                    从外部模板 URL 创建新的配置模板
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
                  <h4 className='font-semibold'>编辑模板</h4>
                  <p className='text-sm text-muted-foreground'>
                    修改模板名称、URL 和其他配置
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
                  <h4 className='font-semibold'>删除模板</h4>
                  <p className='text-sm text-muted-foreground'>
                    移除不再使用的模板配置
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
                  <h4 className='font-semibold'>加载模板</h4>
                  <p className='text-sm text-muted-foreground'>
                    在生成订阅时快速加载模板配置
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
          内置模板
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              妙妙屋内置了多种常用的配置模板，可以直接使用：
            </p>
            <div className='space-y-4'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold mb-2'>ACL4SSR 系列</h4>
                <p className='text-sm text-muted-foreground mb-2'>
                  基于 ACL4SSR 规则的配置模板，提供多种规则集组合：
                </p>
                <ul className='text-sm text-muted-foreground space-y-1 ml-4'>
                  <li>• <strong>ACL4SSR_Online_Full</strong>：全分组完整版</li>
                  <li>• <strong>ACL4SSR_Online_Full_NoAuto</strong>：完整版无自动测速</li>
                  <li>• <strong>ACL4SSR_Online_Mini</strong>：精简版</li>
                  <li>• <strong>ACL4SSR_Online</strong>：默认版本</li>
                </ul>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold mb-2'>Aethersailor 系列</h4>
                <p className='text-sm text-muted-foreground mb-2'>
                  Aethersailor 提供的配置模板：
                </p>
                <ul className='text-sm text-muted-foreground space-y-1 ml-4'>
                  <li>• <strong>Aethersailor Full</strong>：完整版规则</li>
                  <li>• <strong>Aethersailor Lite</strong>：精简版规则</li>
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
          创建模板步骤
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <ol className='space-y-4 text-sm'>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>
                  1
                </span>
                <div>
                  <p className='font-medium'>进入模板管理页面</p>
                  <p className='text-muted-foreground'>点击导航栏的"模板管理"菜单</p>
                </div>
              </li>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>
                  2
                </span>
                <div>
                  <p className='font-medium'>点击"添加模板"按钮</p>
                  <p className='text-muted-foreground'>打开模板创建对话框</p>
                </div>
              </li>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>
                  3
                </span>
                <div>
                  <p className='font-medium'>填写模板信息</p>
                  <p className='text-muted-foreground'>
                    • <strong>模板名称：</strong>便于识别的模板名称<br/>
                    {/* • <strong>模板类别：</strong>选择 Clash 或 Surge<br/> */}
                    • <strong>模板 URL：</strong>外部模板文件的链接地址<br/>
                    {/* • <strong>规则来源：</strong>可选的规则来源说明<br/> */}
                    • <strong>使用代理：</strong>是否通过代理获取模板<br/>
                    {/* • <strong>Include All：</strong>是否包含所有节点 */}
                  </p>
                </div>
              </li>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>
                  4
                </span>
                <div>
                  <p className='font-medium'>保存模板</p>
                  <p className='text-muted-foreground'>点击保存按钮完成模板创建</p>
                </div>
              </li>
            </ol>
          </CardContent>
        </Card>
      </section>

      {/* 使用模板 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Globe className='size-5 text-primary' />
          使用模板
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              在"生成订阅"页面可以使用已创建的模板：
            </p>
            <ol className='space-y-4 text-sm'>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>
                  1
                </span>
                <div>
                  <p className='font-medium'>进入生成订阅页面</p>
                  <p className='text-muted-foreground'>选择需要包含的节点</p>
                </div>
              </li>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>
                  2
                </span>
                <div>
                  <p className='font-medium'>选择模板</p>
                  <p className='text-muted-foreground'>从下拉菜单中选择要使用的模板</p>
                </div>
              </li>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>
                  3
                </span>
                <div>
                  <p className='font-medium'>点击"加载"按钮</p>
                  <p className='text-muted-foreground'>系统将从模板 URL 加载配置并应用</p>
                </div>
              </li>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>
                  4
                </span>
                <div>
                  <p className='font-medium'>调整配置（可选）</p>
                  <p className='text-muted-foreground'>根据需要调整代理组和节点分配</p>
                </div>
              </li>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>
                  5
                </span>
                <div>
                  <p className='font-medium'>保存订阅</p>
                  <p className='text-muted-foreground'>输入订阅名称并保存</p>
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
          注意事项
        </h2>
        <Card className='border-orange-500/20'>
          <CardContent className='pt-6'>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li className='flex items-start gap-2'>
                <span className='text-orange-500 mt-1'>⚠</span>
                <span><strong>模板 URL：</strong>确保模板 URL 可以正常访问，否则加载会失败</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-orange-500 mt-1'>⚠</span>
                <span><strong>模板格式：</strong>模板文件必须是有效的 Clash/Surge 配置格式</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-orange-500 mt-1'>⚠</span>
                <span><strong>代理设置：</strong>如果模板 URL 被墙，需要开启"使用代理"选项</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-orange-500 mt-1'>⚠</span>
                <span><strong>删除影响：</strong>删除模板不会影响已使用该模板生成的订阅</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
