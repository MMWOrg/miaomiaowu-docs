import { createFileRoute, Link } from '@tanstack/react-router'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { StepIndicator } from '@/components/docs/step-indicator'
import {
  ArrowRight,
  Terminal,
  Globe,
} from 'lucide-react'

export const Route = createFileRoute('/docs/quick-start')({
  component: QuickStartPage,
})

function QuickStartPage() {
  const steps = ['安装部署', '初始化', '添加节点', '生成订阅', '分配用户']

  return (
    <DocLayout
      title='快速开始'
      description='5分钟内完成妙妙屋的部署和基本配置'
    >
      {/* 步骤指示器 */}
      <div className='mb-8 overflow-x-auto pb-4'>
        <StepIndicator currentStep={0} totalSteps={5} labels={steps} />
      </div>

      {/* 步骤1: 安装部署 */}
      <section id='step-1' className='mb-10'>
        <h2 className='text-2xl font-bold mb-4 flex items-center gap-3'>
          <div className='size-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold'>
            1
          </div>
          安装部署
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              推荐使用 Docker 方式部署，简单快捷：
            </p>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto'>
              <pre>{`# 拉取镜像
docker pull Jimleerx/miaomiaowu:latest

# 运行容器
docker run -d \\
  --name miaomiaowu \\
  -p 8080:8080 \\
  -v ./data:/app/data \\
  Jimleerx/miaomiaowu:latest`}</pre>
            </div>
            <p className='text-sm text-muted-foreground'>
              更多安装方式请参考{' '}
              <Link to='/docs/install-docker' className='text-primary hover:underline'>
                Docker 安装
              </Link>{' '}
              或{' '}
              <Link to='/docs/install-direct' className='text-primary hover:underline'>
                直接安装
              </Link>
            </p>
          </CardContent>
        </Card>
      </section>

      {/* 步骤2: 初始化设置 */}
      <section id='step-2' className='mb-10'>
        <h2 className='text-2xl font-bold mb-4 flex items-center gap-3'>
          <div className='size-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold'>
            2
          </div>
          初始化设置
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <ol className='space-y-4 text-sm'>
              <li className='flex items-start gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>
                  a
                </span>
                <div>
                  <p className='font-medium'>访问系统</p>
                  <p className='text-muted-foreground'>
                    打开浏览器访问 <code className='bg-muted px-1 rounded'>http://localhost:8080</code>
                  </p>
                </div>
              </li>
              <li className='flex items-start gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>
                  b
                </span>
                <div>
                  <p className='font-medium'>初始化管理员</p>
                  <p className='text-muted-foreground'>
                    首次访问时会提示创建管理员账户，设置用户名和密码
                  </p>
                </div>
              </li>
              <li className='flex items-start gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>
                  c
                </span>
                <div>
                  <p className='font-medium'>登录系统</p>
                  <p className='text-muted-foreground'>
                    使用刚创建的管理员账户登录
                  </p>
                </div>
              </li>
            </ol>
          </CardContent>
        </Card>
      </section>

      {/* 步骤3: 添加节点 */}
      <section id='step-3' className='mb-10'>
        <h2 className='text-2xl font-bold mb-4 flex items-center gap-3'>
          <div className='size-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold'>
            3
          </div>
          添加节点
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              进入"节点管理"页面，添加代理节点：
            </p>
            <div className='space-y-4'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold mb-2 flex items-center gap-2'>
                  <Terminal className='size-4' />
                  方式一：手动添加
                </h4>
                <p className='text-sm text-muted-foreground'>
                  输入节点链接（如 vmess://、vless://），每行一个节点
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold mb-2 flex items-center gap-2'>
                  <Globe className='size-4' />
                  方式二：订阅导入
                </h4>
                <p className='text-sm text-muted-foreground'>
                  输入外部机场订阅链接，自动解析并导入所有节点
                </p>
              </div>
            </div>
            <div className='mt-4'>
              <Link to='/docs/nodes'>
                <Button variant='outline' size='sm'>
                  查看详细文档
                  <ArrowRight className='size-4 ml-2' />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 步骤4: 生成订阅 */}
      <section id='step-4' className='mb-10'>
        <h2 className='text-2xl font-bold mb-4 flex items-center gap-3'>
          <div className='size-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold'>
            4
          </div>
          生成订阅
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <ol className='space-y-4 text-sm'>
              <li className='flex items-start gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>
                  a
                </span>
                <div>
                  <p className='font-medium'>进入"生成订阅"页面</p>
                  <p className='text-muted-foreground'>
                    选择需要包含在订阅中的节点
                  </p>
                </div>
              </li>
              <li className='flex items-start gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>
                  b
                </span>
                <div>
                  <p className='font-medium'>选择模板或自定义规则</p>
                  <p className='text-muted-foreground'>
                    可以使用内置模板（ACL4SSR、Aethersailor）或自定义代理组
                  </p>
                </div>
              </li>
              <li className='flex items-start gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>
                  c
                </span>
                <div>
                  <p className='font-medium'>配置代理组（可选）</p>
                  <p className='text-muted-foreground'>
                    通过拖拽将节点分配到不同的代理组
                  </p>
                </div>
              </li>
              <li className='flex items-start gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>
                  d
                </span>
                <div>
                  <p className='font-medium'>保存订阅</p>
                  <p className='text-muted-foreground'>
                    输入订阅名称，点击保存生成订阅文件
                  </p>
                </div>
              </li>
            </ol>
            <div className='mt-4'>
              <Link to='/docs/generator'>
                <Button variant='outline' size='sm'>
                  查看详细文档
                  <ArrowRight className='size-4 ml-2' />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 步骤5: 分配给用户 */}
      <section id='step-5' className='mb-10'>
        <h2 className='text-2xl font-bold mb-4 flex items-center gap-3'>
          <div className='size-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold'>
            5
          </div>
          分配给用户
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <ol className='space-y-4 text-sm'>
              <li className='flex items-start gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>
                  a
                </span>
                <div>
                  <p className='font-medium'>创建用户（可选）</p>
                  <p className='text-muted-foreground'>
                    在"用户管理"页面创建新用户，或使用已有用户
                  </p>
                </div>
              </li>
              <li className='flex items-start gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>
                  b
                </span>
                <div>
                  <p className='font-medium'>分配订阅</p>
                  <p className='text-muted-foreground'>
                    为用户分配刚创建的订阅配置
                  </p>
                </div>
              </li>
              <li className='flex items-start gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>
                  c
                </span>
                <div>
                  <p className='font-medium'>获取订阅链接</p>
                  <p className='text-muted-foreground'>
                    用户登录后在"订阅链接"页面可以看到分配的订阅
                  </p>
                </div>
              </li>
            </ol>
            <div className='mt-4'>
              <Link to='/docs/users'>
                <Button variant='outline' size='sm'>
                  查看详细文档
                  <ArrowRight className='size-4 ml-2' />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 完成 */}
      <section className='mb-10'>
        <Card className='bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20'>
          <CardContent className='pt-6'>
            <h2 className='text-xl font-bold mb-2 flex items-center gap-2'>
              🎉 恭喜完成！
            </h2>
            <p className='text-muted-foreground mb-4'>
              您已经完成了妙妙屋的基本配置。用户现在可以在客户端中导入订阅链接开始使用了。
            </p>
            <div className='flex gap-2 flex-wrap'>
              <Link to='/docs/subscription-link'>
                <Button variant='outline' size='sm'>
                  了解订阅链接
                </Button>
              </Link>
              <Link to='/docs/client-setup'>
                <Button variant='outline' size='sm'>
                  客户端配置
                </Button>
              </Link>
              <Link to='/docs/chain-proxy'>
                <Button variant='outline' size='sm'>
                  高级：链式代理
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
