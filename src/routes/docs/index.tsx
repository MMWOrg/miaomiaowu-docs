import { createFileRoute, Link } from '@tanstack/react-router'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  BookOpen,
  Download,
  Zap,
  Network,
  Users,
  Settings,
  ArrowRight,
  Sparkles,
  Github,
  FileText,
} from 'lucide-react'

export const Route = createFileRoute('/docs/')({
  component: DocsIndexPage,
})

function DocsIndexPage() {
  return (
    <DocLayout>
      {/* Hero Section */}
      <div className='text-center mb-12'>
        <h1 className='text-4xl font-bold tracking-tight mb-4'>
          欢迎使用妙妙屋文档
        </h1>
        <p className='text-xl text-muted-foreground max-w-2xl mx-auto mb-8'>
          妙妙屋是一个自建机场/翻墙平台的用户管理系统，通过简单的配置即可快速部署使用。
        </p>
        <div className='flex items-center justify-center gap-4'>
          <Link to='/docs/quick-start'>
            <Button size='lg'>
              <Zap className='size-4 mr-2' />
              快速开始
            </Button>
          </Link>
          <a
            href='https://github.com/Jimleerx/miaomiaowu'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button variant='outline' size='lg'>
              <Github className='size-4 mr-2' />
              GitHub
            </Button>
          </a>
        </div>
      </div>

      {/* Feature Cards */}
      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12'>
        <Card className='group hover:shadow-lg transition-shadow'>
          <CardHeader>
            <BookOpen className='size-8 text-primary mb-2' />
            <CardTitle>简介</CardTitle>
            <CardDescription>
              了解妙妙屋的核心功能和特性
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link to='/docs/about'>
              <Button variant='ghost' className='group-hover:text-primary'>
                开始阅读
                <ArrowRight className='size-4 ml-2' />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className='group hover:shadow-lg transition-shadow'>
          <CardHeader>
            <Download className='size-8 text-primary mb-2' />
            <CardTitle>安装指南</CardTitle>
            <CardDescription>
              多种安装方式，快速部署妙妙屋
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link to='/docs/install-docker'>
              <Button variant='ghost' className='group-hover:text-primary'>
                查看安装
                <ArrowRight className='size-4 ml-2' />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className='group hover:shadow-lg transition-shadow'>
          <CardHeader>
            <Network className='size-8 text-primary mb-2' />
            <CardTitle>节点管理</CardTitle>
            <CardDescription>
              添加、编辑和管理代理节点
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link to='/docs/nodes'>
              <Button variant='ghost' className='group-hover:text-primary'>
                了解更多
                <ArrowRight className='size-4 ml-2' />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className='group hover:shadow-lg transition-shadow'>
          <CardHeader>
            <Users className='size-8 text-primary mb-2' />
            <CardTitle>用户管理</CardTitle>
            <CardDescription>
              创建用户并分配订阅配置
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link to='/docs/users'>
              <Button variant='ghost' className='group-hover:text-primary'>
                了解更多
                <ArrowRight className='size-4 ml-2' />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className='group hover:shadow-lg transition-shadow'>
          <CardHeader>
            <Zap className='size-8 text-primary mb-2' />
            <CardTitle>生成订阅</CardTitle>
            <CardDescription>
              创建和配置订阅文件
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link to='/docs/generator'>
              <Button variant='ghost' className='group-hover:text-primary'>
                了解更多
                <ArrowRight className='size-4 ml-2' />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className='group hover:shadow-lg transition-shadow'>
          <CardHeader>
            <Settings className='size-8 text-primary mb-2' />
            <CardTitle>系统设置</CardTitle>
            <CardDescription>
              配置系统参数和高级选项
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link to='/docs/system-settings'>
              <Button variant='ghost' className='group-hover:text-primary'>
                了解更多
                <ArrowRight className='size-4 ml-2' />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Highlights */}
      <div className='bg-muted/30 rounded-lg p-8 mb-12'>
        <h2 className='text-2xl font-bold mb-6 flex items-center gap-2'>
          <Sparkles className='size-6 text-primary' />
          核心特性
        </h2>
        <div className='grid gap-4 md:grid-cols-2'>
          <div className='flex items-start gap-3'>
            <div className='size-2 rounded-full bg-primary mt-2' />
            <div>
              <h3 className='font-semibold'>多客户端支持</h3>
              <p className='text-sm text-muted-foreground'>
                支持 Clash、Stash、Shadowrocket、Surge 等12种客户端
              </p>
            </div>
          </div>
          <div className='flex items-start gap-3'>
            <div className='size-2 rounded-full bg-primary mt-2' />
            <div>
              <h3 className='font-semibold'>链式代理</h3>
              <p className='text-sm text-muted-foreground'>
                支持多层代理转发，实现中转加速
              </p>
            </div>
          </div>
          <div className='flex items-start gap-3'>
            <div className='size-2 rounded-full bg-primary mt-2' />
            <div>
              <h3 className='font-semibold'>流量统计</h3>
              <p className='text-sm text-muted-foreground'>
                集成探针系统，精确统计节点流量
              </p>
            </div>
          </div>
          <div className='flex items-start gap-3'>
            <div className='size-2 rounded-full bg-primary mt-2' />
            <div>
              <h3 className='font-semibold'>自定义规则</h3>
              <p className='text-sm text-muted-foreground'>
                支持自定义 DNS、规则和规则集
              </p>
            </div>
          </div>
          <div className='flex items-start gap-3'>
            <div className='size-2 rounded-full bg-primary mt-2' />
            <div>
              <h3 className='font-semibold'>外部订阅导入</h3>
              <p className='text-sm text-muted-foreground'>
                支持导入机场订阅，自动同步节点
              </p>
            </div>
          </div>
          <div className='flex items-start gap-3'>
            <div className='size-2 rounded-full bg-primary mt-2' />
            <div>
              <h3 className='font-semibold'>模板系统</h3>
              <p className='text-sm text-muted-foreground'>
                内置多种配置模板，快速生成订阅
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className='border-t pt-8'>
        <h2 className='text-xl font-semibold mb-4 flex items-center gap-2'>
          <FileText className='size-5' />
          快速导航
        </h2>
        <div className='grid gap-2 md:grid-cols-3'>
          <Link
            to='/docs/quick-start'
            className='text-sm text-muted-foreground hover:text-primary transition-colors'
          >
            → 快速开始
          </Link>
          <Link
            to='/docs/install-docker'
            className='text-sm text-muted-foreground hover:text-primary transition-colors'
          >
            → Docker 安装
          </Link>
          <Link
            to='/docs/nodes'
            className='text-sm text-muted-foreground hover:text-primary transition-colors'
          >
            → 节点管理
          </Link>
          <Link
            to='/docs/generator'
            className='text-sm text-muted-foreground hover:text-primary transition-colors'
          >
            → 生成订阅
          </Link>
          <Link
            to='/docs/chain-proxy'
            className='text-sm text-muted-foreground hover:text-primary transition-colors'
          >
            → 链式代理
          </Link>
          <Link
            to='/docs/faq'
            className='text-sm text-muted-foreground hover:text-primary transition-colors'
          >
            → 常见问题
          </Link>
        </div>
      </div>
    </DocLayout>
  )
}
