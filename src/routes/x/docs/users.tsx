import { createFileRoute } from '@tanstack/react-router'
import { XDocLayout } from '@/components/docs/x-doc-layout'
import { Card, CardContent } from '@/components/ui/card'

export const Route = createFileRoute('/x/docs/users')({
  component: UsersPage,
})

function UsersPage() {
  return (
    <XDocLayout title='用户管理' description='用户账户与权限管理'>
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>概述</h2>
        <p className='text-muted-foreground'>用户管理模块负责管理订阅用户的账户、权限和订阅令牌。支持管理员和普通用户两种角色。</p>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>用户角色</h2>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead><tr className='border-b'><th className='text-left py-3 px-4'>角色</th><th className='text-left py-3 px-4'>权限</th><th className='text-left py-3 px-4'>说明</th></tr></thead>
            <tbody>
              <tr className='border-b'><td className='py-3 px-4'>管理员</td><td className='py-3 px-4'>全部</td><td className='py-3 px-4'>系统管理、服务器管理、用户管理</td></tr>
              <tr><td className='py-3 px-4'>普通用户</td><td className='py-3 px-4'>订阅</td><td className='py-3 px-4'>查看订阅链接、个人信息</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>创建用户</h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='text-sm space-y-3 text-muted-foreground'>
              <p>1. 进入「用户管理」页面</p>
              <p>2. 点击「添加用户」</p>
              <p>3. 填写用户名和密码</p>
              <p>4. 选择角色（管理员/普通用户）</p>
              <p>5. 绑定套餐（可选）</p>
              <p>6. 保存后系统自动生成订阅令牌</p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>订阅令牌</h2>
        <p className='text-muted-foreground mb-4'>
          每个用户拥有唯一的订阅令牌（Token），用于订阅链接的身份验证。令牌可重新生成，旧令牌立即失效。
        </p>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-4'>认证方式</h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='text-sm space-y-2 text-muted-foreground'>
              <p>系统使用 JWT 进行 API 认证：</p>
              <ul className='space-y-1 ml-4'>
                <li>- 登录后获取 JWT Token</li>
                <li>- 请求头 <code className='bg-muted px-1.5 py-0.5 rounded'>MM-Authorization</code> 携带 Token</li>
                <li>- Token 过期后需重新登录</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>
    </XDocLayout>
  )
}
