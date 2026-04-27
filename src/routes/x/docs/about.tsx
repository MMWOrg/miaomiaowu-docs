import { createFileRoute, Link } from '@tanstack/react-router'
import { XDocLayout } from '@/components/docs/x-doc-layout'
import { Card, CardContent } from '@/components/ui/card'

export const Route = createFileRoute('/x/docs/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <XDocLayout title='关于妙妙屋X' description='妙妙屋X 是妙妙屋的增强版，专注于远程服务器管理和 Xray 配置'>
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>什么是妙妙屋X</h2>
        <p className='text-muted-foreground mb-4'>
          妙妙屋X（MMWX）是基于妙妙屋的增强版本，在保留原有订阅管理功能的基础上，新增了远程服务器管理、Xray 服务完整管理、证书管理、套餐管理等高级功能。
        </p>
        <p className='text-muted-foreground mb-4'>
          采用 Master-Agent 架构，主控端（Master）通过 WebSocket/HTTP 与远程服务器上的 Agent 通信，实现对多台服务器的统一管理。
        </p>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>架构概览</h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto'>
              <pre>{`┌─────────────────────────────────────────┐
│           妙妙屋X (Master)              │
│                                         │
│  ┌──────────┐  ┌──────────┐  ┌───────┐ │
│  │ 节点管理  │  │ 用户管理  │  │ 证书  │ │
│  └──────────┘  └──────────┘  └───────┘ │
│  ┌──────────┐  ┌──────────┐  ┌───────┐ │
│  │ 订阅生成  │  │ 套餐管理  │  │ 模板  │ │
│  └──────────┘  └──────────┘  └───────┘ │
│                                         │
│         WebSocket / HTTP / Pull         │
└────────┬──────────┬──────────┬──────────┘
         │          │          │
    ┌────▼───┐ ┌───▼────┐ ┌──▼─────┐
    │ Agent  │ │ Agent  │ │ Agent  │
    │ Server1│ │ Server2│ │ Server3│
    │ (Xray) │ │ (Xray) │ │ (Xray) │
    └────────┘ └────────┘ └────────┘`}</pre>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>与妙妙屋的区别</h2>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead>
              <tr className='border-b'>
                <th className='text-left py-3 px-4 font-semibold'>功能</th>
                <th className='text-center py-3 px-4 font-semibold'>妙妙屋</th>
                <th className='text-center py-3 px-4 font-semibold'>妙妙屋X</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b'><td className='py-3 px-4'>节点管理</td><td className='text-center'>手动添加/导入</td><td className='text-center'>手动 + 远程同步</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>远程服务器管理</td><td className='text-center'>-</td><td className='text-center'>Master-Agent 架构</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>Xray 入站/出站</td><td className='text-center'>-</td><td className='text-center'>可视化管理</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>证书管理</td><td className='text-center'>-</td><td className='text-center'>ACME 自动化</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>套餐管理</td><td className='text-center'>-</td><td className='text-center'>流量套餐</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>订阅生成</td><td className='text-center'>12种客户端</td><td className='text-center'>12种客户端</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>用户管理</td><td className='text-center'>基础</td><td className='text-center'>增强（套餐绑定）</td></tr>
              <tr><td className='py-3 px-4'>模板系统</td><td className='text-center'>V3 模板</td><td className='text-center'>V3 模板</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-4'>下一步</h2>
        <div className='flex gap-4'>
          <Link to='/x/docs/features' className='text-primary hover:underline'>→ 查看核心特性</Link>
          <Link to='/x/docs/quick-start' className='text-primary hover:underline'>→ 快速开始</Link>
        </div>
      </section>
    </XDocLayout>
  )
}
