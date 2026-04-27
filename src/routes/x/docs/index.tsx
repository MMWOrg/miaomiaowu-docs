import { createFileRoute, Link } from '@tanstack/react-router'
import { XDocLayout } from '@/components/docs/x-doc-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Download,
  Zap,
  Network,
  Server,
  Shield,
  ArrowRight,
  Sparkles,
  Github,
  FileText,
  Layers,
  Users,
} from 'lucide-react'

export const Route = createFileRoute('/x/docs/')({
  component: XDocsIndexPage,
})

function XDocsIndexPage() {
  return (
    <XDocLayout>
      <div className='text-center mb-12'>
        <h1 className='text-4xl font-bold tracking-tight mb-4'>
          欢迎使用妙妙屋X文档
        </h1>
        <p className='text-xl text-muted-foreground max-w-2xl mx-auto mb-8'>
          妙妙屋X 是妙妙屋的增强版，支持远程服务器管理、Xray 入站/出站配置、证书管理等高级功能，采用 Master-Agent 架构实现多服务器统一管理。
        </p>
        <div className='flex items-center justify-center gap-4'>
          <Link to='/x/docs/quick-start'>
            <Button size='lg'>
              <Zap className='size-4 mr-2' />
              快速开始
            </Button>
          </Link>
          <a href='https://github.com/iluobei/miaomiaowu' target='_blank' rel='noopener noreferrer'>
            <Button variant='outline' size='lg'>
              <Github className='size-4 mr-2' />
              GitHub
            </Button>
          </a>
        </div>
      </div>

      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12'>
        <Card className='group hover:shadow-lg transition-shadow'>
          <CardHeader>
            <Server className='size-8 text-primary mb-2' />
            <CardTitle>远程服务器</CardTitle>
            <CardDescription>Master-Agent 架构，统一管理多台远程服务器</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to='/x/docs/remote-servers'>
              <Button variant='ghost' className='group-hover:text-primary'>了解更多 <ArrowRight className='size-4 ml-2' /></Button>
            </Link>
          </CardContent>
        </Card>

        <Card className='group hover:shadow-lg transition-shadow'>
          <CardHeader>
            <Network className='size-8 text-primary mb-2' />
            <CardTitle>Xray 入站管理</CardTitle>
            <CardDescription>可视化配置入站，支持全协议矩阵</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to='/x/docs/xray-inbounds'>
              <Button variant='ghost' className='group-hover:text-primary'>了解更多 <ArrowRight className='size-4 ml-2' /></Button>
            </Link>
          </CardContent>
        </Card>

        <Card className='group hover:shadow-lg transition-shadow'>
          <CardHeader>
            <Layers className='size-8 text-primary mb-2' />
            <CardTitle>协议参考</CardTitle>
            <CardDescription>完整的协议×传输×安全组合文档</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to='/x/docs/protocol-matrix'>
              <Button variant='ghost' className='group-hover:text-primary'>了解更多 <ArrowRight className='size-4 ml-2' /></Button>
            </Link>
          </CardContent>
        </Card>

        <Card className='group hover:shadow-lg transition-shadow'>
          <CardHeader>
            <Shield className='size-8 text-primary mb-2' />
            <CardTitle>证书管理</CardTitle>
            <CardDescription>ACME 自动化证书申请与部署</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to='/x/docs/certificates'>
              <Button variant='ghost' className='group-hover:text-primary'>了解更多 <ArrowRight className='size-4 ml-2' /></Button>
            </Link>
          </CardContent>
        </Card>

        <Card className='group hover:shadow-lg transition-shadow'>
          <CardHeader>
            <Users className='size-8 text-primary mb-2' />
            <CardTitle>用户与套餐</CardTitle>
            <CardDescription>用户管理、流量套餐配置</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to='/x/docs/users'>
              <Button variant='ghost' className='group-hover:text-primary'>了解更多 <ArrowRight className='size-4 ml-2' /></Button>
            </Link>
          </CardContent>
        </Card>

        <Card className='group hover:shadow-lg transition-shadow'>
          <CardHeader>
            <Download className='size-8 text-primary mb-2' />
            <CardTitle>安装部署</CardTitle>
            <CardDescription>多种部署方式，含 Agent 安装</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to='/x/docs/install-docker'>
              <Button variant='ghost' className='group-hover:text-primary'>查看安装 <ArrowRight className='size-4 ml-2' /></Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className='bg-muted/30 rounded-lg p-8 mb-12'>
        <h2 className='text-2xl font-bold mb-6 flex items-center gap-2'>
          <Sparkles className='size-6 text-primary' />
          与妙妙屋的区别
        </h2>
        <div className='grid gap-4 md:grid-cols-2'>
          <div className='flex items-start gap-3'>
            <div className='size-2 rounded-full bg-primary mt-2' />
            <div>
              <h3 className='font-semibold'>远程服务器管理</h3>
              <p className='text-sm text-muted-foreground'>Master-Agent 架构，通过 WebSocket/HTTP 管理多台远程服务器</p>
            </div>
          </div>
          <div className='flex items-start gap-3'>
            <div className='size-2 rounded-full bg-primary mt-2' />
            <div>
              <h3 className='font-semibold'>Xray 完整管理</h3>
              <p className='text-sm text-muted-foreground'>入站/出站/路由/系统配置的可视化管理</p>
            </div>
          </div>
          <div className='flex items-start gap-3'>
            <div className='size-2 rounded-full bg-primary mt-2' />
            <div>
              <h3 className='font-semibold'>证书管理</h3>
              <p className='text-sm text-muted-foreground'>ACME 证书自动申请，支持多 DNS 提供商，自动部署到远程服务器</p>
            </div>
          </div>
          <div className='flex items-start gap-3'>
            <div className='size-2 rounded-full bg-primary mt-2' />
            <div>
              <h3 className='font-semibold'>套餐管理</h3>
              <p className='text-sm text-muted-foreground'>流量套餐配置，用户流量限额管理</p>
            </div>
          </div>
        </div>
      </div>

      <div className='border-t pt-8'>
        <h2 className='text-xl font-semibold mb-4 flex items-center gap-2'>
          <FileText className='size-5' />
          快速导航
        </h2>
        <div className='grid gap-2 md:grid-cols-3'>
          <Link to='/x/docs/quick-start' className='text-sm text-muted-foreground hover:text-primary transition-colors'>→ 快速开始</Link>
          <Link to='/x/docs/install-docker' className='text-sm text-muted-foreground hover:text-primary transition-colors'>→ Docker 安装</Link>
          <Link to='/x/docs/remote-servers' className='text-sm text-muted-foreground hover:text-primary transition-colors'>→ 远程服务器</Link>
          <Link to='/x/docs/xray-inbounds' className='text-sm text-muted-foreground hover:text-primary transition-colors'>→ 入站管理</Link>
          <Link to='/x/docs/protocol-matrix' className='text-sm text-muted-foreground hover:text-primary transition-colors'>→ 协议矩阵</Link>
          <Link to='/x/docs/faq' className='text-sm text-muted-foreground hover:text-primary transition-colors'>→ 常见问题</Link>
        </div>
      </div>
    </XDocLayout>
  )
}
