import { createFileRoute } from '@tanstack/react-router'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import {
  Users,
  Sparkles,
  FileCode,
  Shield,
} from 'lucide-react'

export const Route = createFileRoute('/docs/users')({
  component: UsersPage,
})

function UsersPage() {
  return (
    <DocLayout
      title='用户管理'
      description='管理平台用户账户和订阅分配（管理员功能）'
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
              用户管理页面是管理员专用功能，用于管理平台的所有用户账户，包括创建用户、编辑用户信息、分配订阅等核心管理功能。
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
                  <span><strong>用户列表查看</strong>：查看所有用户的基本信息</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>创建新用户</strong>：手动创建新用户账户，设置用户名、密码</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>编辑用户信息</strong>：修改用户的状态（启用|停用）</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>删除用户</strong>：删除不再需要的用户账户</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>订阅分配</strong>：为用户分配或取消分配订阅文件</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>重置密码</strong>：为用户重置登录密码</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>备注管理</strong>：为用户添加备注信息，便于识别和管理</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 创建用户步骤 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <FileCode className='size-5 text-primary' />
          创建用户步骤
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-green-500'>
              <div className='space-y-4 text-sm'>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>1</span>
                  <div>
                    <strong>点击"新增用户"按钮</strong>
                    <p className='text-muted-foreground mt-1'>打开用户创建对话框</p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>2</span>
                  <div>
                    <strong>填写用户基本信息</strong>
                    <p className='text-muted-foreground mt-1'>
                      • <strong>用户名</strong>：设置用户的登录用户名（唯一，不可重复）<br/>
                      • <strong>初始密码</strong>：设置用户的初始登录密码<br/>
                      • <strong>邮箱</strong>：用户的邮箱地址（可选）<br/>
                      • <strong>昵称</strong>：用户昵称<br/>
                      • <strong>备注</strong>：用户备注信息，便于识别和管理（可选）<br/>
                      • <strong>分配订阅</strong>：用户可以看到的订阅
                    </p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>3</span>
                  <div>
                    <strong>分配订阅（可选）</strong>
                    <p className='text-muted-foreground mt-1'>可以在创建时分配订阅，也可以稍后在"订阅管理"中分配</p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>4</span>
                  <div>
                    <strong>保存用户</strong>
                    <p className='text-muted-foreground mt-1'>点击保存按钮创建用户，用户即可使用账户登录</p>
                  </div>
                </div>
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
              <h4 className='font-semibold text-sm mb-2'>场景：新用户开通服务</h4>
              <p className='text-xs text-muted-foreground'>
                分享给朋友或家人时，管理员创建账户 → 分配对应的订阅 → 通知用户登录信息。
              </p>
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
                  <span><strong>用户名唯一性</strong>：用户名必须唯一且创建后不可修改，请谨慎设置</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>删除不可恢复</strong>：删除用户会永久删除其所有数据，无法恢复</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>密码安全</strong>：创建用户时设置的密码应足够复杂，建议包含字母、数字和符号</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>订阅分配</strong>：用户至少需要分配一个订阅才能正常使用服务</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 最佳实践 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Users className='size-5 text-primary' />
          最佳实践
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-emerald-500'>
              <ul className='space-y-2 text-sm text-muted-foreground'>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-1'>💡</span>
                  <span><strong>善用备注</strong>：为用户添加备注信息，如"张三的家人"、"VIP客户"等，便于识别管理</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-1'>💡</span>
                  <span><strong>规范命名</strong>：使用统一的用户名命名规范，如"user001"、"vip-zhangsan"等</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-1'>💡</span>
                  <span><strong>及时通知</strong>：用户创建后及时将登录信息（用户名、密码、登录地址）告知用户</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-emerald-500 mt-1'>💡</span>
                  <span><strong>数据备份</strong>：定期导出用户数据进行备份</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
