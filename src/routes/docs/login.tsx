import { createFileRoute } from '@tanstack/react-router'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  LogIn,
  User,
  Lock,
  Shield,
  AlertCircle,
  CheckCircle,
  KeyRound,
} from 'lucide-react'

export const Route = createFileRoute('/docs/login')({
  component: LoginDocPage,
})

function LoginDocPage() {
  return (
    <DocLayout
      title='登录'
      description='了解妙妙屋的登录流程和账户管理'
    >
      {/* 登录页面说明 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <LogIn className='size-5 text-primary' />
          登录页面
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              访问妙妙屋时，如果尚未登录，会自动跳转到登录页面。
            </p>

            {/* 登录表单演示 */}
            <div className='max-w-sm mx-auto p-6 border rounded-lg bg-muted/20'>
              <div className='text-center mb-6'>
                <span className='text-3xl'>🏠</span>
                <h3 className='text-lg font-semibold mt-2'>妙妙屋</h3>
                <p className='text-sm text-muted-foreground'>登录您的账户</p>
              </div>
              <div className='space-y-4'>
                <div className='space-y-2'>
                  <Label htmlFor='demo-username'>用户名</Label>
                  <Input id='demo-username' placeholder='请输入用户名' disabled />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='demo-password'>密码</Label>
                  <Input id='demo-password' type='password' placeholder='请输入密码' disabled />
                </div>
                <Button className='w-full' disabled>
                  登录
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 首次访问 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <KeyRound className='size-5 text-primary' />
          首次访问 - 初始化管理员
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              首次访问妙妙屋时，系统会要求创建管理员账户：
            </p>

            <ol className='space-y-4 text-sm'>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>
                  1
                </span>
                <div>
                  <p className='font-medium'>设置管理员用户名</p>
                  <p className='text-muted-foreground'>
                    建议使用不易被猜到的用户名，避免使用 admin、root 等常见名称
                  </p>
                </div>
              </li>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>
                  2
                </span>
                <div>
                  <p className='font-medium'>设置管理员密码</p>
                  <p className='text-muted-foreground'>
                    建议使用包含大小写字母、数字和特殊字符的强密码
                  </p>
                </div>
              </li>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>
                  3
                </span>
                <div>
                  <p className='font-medium'>完成初始化</p>
                  <p className='text-muted-foreground'>
                    点击确认按钮完成管理员账户创建，之后将自动跳转到登录页面
                  </p>
                </div>
              </li>
            </ol>
          </CardContent>
        </Card>
      </section>

      {/* 用户类型 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <User className='size-5 text-primary' />
          用户类型
        </h2>
        <div className='grid gap-4 md:grid-cols-2'>
          <Card className='border-destructive/30'>
            <CardContent className='pt-6'>
              <div className='flex items-start gap-3'>
                <Shield className='size-5 text-destructive mt-0.5' />
                <div>
                  <h3 className='font-semibold text-destructive'>管理员</h3>
                  <ul className='mt-2 space-y-1 text-sm text-muted-foreground'>
                    <li>• 可以访问所有功能</li>
                    <li>• 管理节点、订阅、用户</li>
                    <li>• 配置系统设置</li>
                    <li>• 查看和修改所有数据</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-6'>
              <div className='flex items-start gap-3'>
                <User className='size-5 text-primary mt-0.5' />
                <div>
                  <h3 className='font-semibold'>普通用户</h3>
                  <ul className='mt-2 space-y-1 text-sm text-muted-foreground'>
                    <li>• 查看分配的订阅链接</li>
                    <li>• 查看流量使用情况</li>
                    <li>• 修改个人信息和密码</li>
                    <li>• 无法访问管理功能</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 登录后导航 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <CheckCircle className='size-5 text-primary' />
          登录后
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              登录成功后，会根据用户角色跳转到相应页面：
            </p>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span><strong>管理员：</strong>跳转到首页，可以看到流量统计和所有管理菜单</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span><strong>普通用户：</strong>跳转到首页，可以看到流量使用情况和订阅链接</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Token 管理 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Lock className='size-5 text-primary' />
          Token 管理
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              妙妙屋使用 JWT Token 进行身份验证：
            </p>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span><strong>自动保存：</strong>登录成功后 Token 会保存在浏览器中</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span><strong>自动刷新：</strong>系统会在 Token 过期前自动刷新</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span><strong>退出登录：</strong>点击右上角用户菜单中的"退出登录"可以清除 Token</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* 常见问题 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <AlertCircle className='size-5 text-orange-500' />
          常见问题
        </h2>
        <Card className='border-orange-500/20'>
          <CardContent className='pt-6'>
            <div className='space-y-4'>
              <div>
                <h4 className='font-semibold mb-2'>忘记密码怎么办？</h4>
                <p className='text-sm text-muted-foreground'>
                  请联系管理员重置密码。管理员可以在"用户管理"页面为用户重置密码。
                </p>
              </div>
              <div>
                <h4 className='font-semibold mb-2'>忘记管理员密码怎么办？</h4>
                <p className='text-sm text-muted-foreground'>
                  需要直接修改数据库或删除数据库重新初始化。请参考项目文档了解详细步骤。
                </p>
              </div>
              <div>
                <h4 className='font-semibold mb-2'>登录后自动退出？</h4>
                <p className='text-sm text-muted-foreground'>
                  可能是 Token 过期或被清除。请检查浏览器是否禁用了 Cookie，或尝试清除浏览器缓存后重新登录。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
