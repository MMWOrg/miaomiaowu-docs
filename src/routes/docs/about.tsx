import { createFileRoute } from '@tanstack/react-router'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import {
  Sparkles,
  Shield,
  Zap,
  Users,
  Network,
  FileCode,
  Github,
  Heart,
} from 'lucide-react'

export const Route = createFileRoute('/docs/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <DocLayout
      title='关于妙妙屋'
      description='了解妙妙屋的设计理念和核心功能'
    >
      {/* 项目介绍 */}
      <section className='mb-8'>
        <Card className='bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20'>
          <CardContent className='pt-6'>
            <div className='flex items-start gap-4'>
              <span className='text-4xl'>🏠</span>
              <div>
                <h2 className='text-xl font-bold mb-2'>妙妙屋 (MiaoMiaoWu)</h2>
                <p className='text-muted-foreground'>
                  妙妙屋是一个专为自建代理服务设计的用户管理系统。它提供了完整的节点管理、订阅生成、用户管理和流量统计功能，让您能够轻松管理自己的代理服务。
                </p>
                <p className='text-muted-foreground'>
                  同时，妙妙屋也支持接管外部订阅，实现外部订阅节点和自建的统一管理和分发。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 设计理念 */}
      <section className='mb-8'>
        <h2 className='text-2xl font-bold mb-4 flex items-center gap-2'>
          <Heart className='size-6 text-primary' />
          设计理念
        </h2>
        <div className='space-y-4 text-muted-foreground'>
          <p>
            妙妙屋的设计理念是<strong>简单、高效、安全</strong>。我们希望用户能够：
          </p>
          <ul className='space-y-2 ml-4'>
            <li className='flex items-start gap-2'>
              <span className='text-primary mt-1'>•</span>
              <span>通过简洁的界面快速完成节点管理和订阅配置</span>
            </li>
            <li className='flex items-start gap-2'>
              <span className='text-primary mt-1'>•</span>
              <span>无需复杂的技术背景即可部署和使用</span>
            </li>
            <li className='flex items-start gap-2'>
              <span className='text-primary mt-1'>•</span>
              <span>享受安全可靠的代理服务管理体验</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 核心功能 */}
      <section className='mb-8'>
        <h2 className='text-2xl font-bold mb-4 flex items-center gap-2'>
          <Sparkles className='size-6 text-primary' />
          核心功能
        </h2>
        <div className='grid gap-4 md:grid-cols-2'>
          <Card>
            <CardContent className='pt-6'>
              <div className='flex items-start gap-3'>
                <Network className='size-5 text-primary mt-1' />
                <div>
                  <h3 className='font-semibold mb-1'>节点管理</h3>
                  <p className='text-sm text-muted-foreground'>
                    支持手动添加和外部订阅导入节点，支持多种协议（VMess、VLESS、Trojan、Shadowsocks 等）
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <div className='flex items-start gap-3'>
                <Zap className='size-5 text-primary mt-1' />
                <div>
                  <h3 className='font-semibold mb-1'>订阅生成</h3>
                  <p className='text-sm text-muted-foreground'>
                    可视化配置代理组和规则，支持多种模板，生成标准 Clash 格式订阅
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <div className='flex items-start gap-3'>
                <Users className='size-5 text-primary mt-1' />
                <div>
                  <h3 className='font-semibold mb-1'>用户管理</h3>
                  <p className='text-sm text-muted-foreground'>
                    创建和管理用户账户，为不同用户分配不同的订阅配置
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <div className='flex items-start gap-3'>
                <Shield className='size-5 text-primary mt-1' />
                <div>
                  <h3 className='font-semibold mb-1'>流量统计</h3>
                  <p className='text-sm text-muted-foreground'>
                    集成探针系统，无需安装额外组件，监控节点流量使用情况
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <div className='flex items-start gap-3'>
                <FileCode className='size-5 text-primary mt-1' />
                <div>
                  <h3 className='font-semibold mb-1'>自定义规则</h3>
                  <p className='text-sm text-muted-foreground'>
                    支持自定义 DNS 配置、规则列表和规则集提供商
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <div className='flex items-start gap-3'>
                <Network className='size-5 text-primary mt-1' />
                <div>
                  <h3 className='font-semibold mb-1'>链式代理</h3>
                  <p className='text-sm text-muted-foreground'>
                    支持创建多层代理链路，实现中转加速和隐私保护
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 技术栈 */}
      <section className='mb-8'>
        <h2 className='text-2xl font-bold mb-4'>技术栈</h2>
        <div className='grid gap-4 md:grid-cols-2'>
          <div className='bg-muted/30 rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>后端</h3>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>• Go 语言</li>
              <li>• SQLite 数据库</li>
              <li>• RESTful API</li>
            </ul>
          </div>
          <div className='bg-muted/30 rounded-lg p-4'>
            <h3 className='font-semibold mb-2'>前端</h3>
            <ul className='text-sm text-muted-foreground space-y-1'>
              <li>• React 19</li>
              <li>• TanStack Router</li>
              <li>• Tailwind CSS</li>
              <li>• shadcn/ui</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 开源信息 */}
      <section className='mb-8'>
        <h2 className='text-2xl font-bold mb-4 flex items-center gap-2'>
          <Github className='size-6' />
          开源信息
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              妙妙屋是一个开源项目，遵循 MIT 许可证。欢迎社区贡献代码和提交问题。
            </p>
            <div className='flex gap-4'>
              <a
                href='https://github.com/Jimleerx/miaomiaowu'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 text-primary hover:underline'
              >
                <Github className='size-4' />
                GitHub 仓库
              </a>
            </div>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
