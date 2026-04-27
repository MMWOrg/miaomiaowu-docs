import { createFileRoute } from '@tanstack/react-router'
import { XDocLayout } from '@/components/docs/x-doc-layout'
import { Card, CardContent } from '@/components/ui/card'

export const Route = createFileRoute('/x/docs/nodes')({
  component: NodesPage,
})

function NodesPage() {
  return (
    <XDocLayout title='节点管理' description='管理和同步代理节点'>
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>概述</h2>
        <p className='text-muted-foreground'>节点是入站配置在订阅系统中的映射。每个入站创建后，系统会自动生成对应的节点，用于订阅分发。</p>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>节点来源</h2>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead><tr className='border-b'><th className='text-left py-3 px-4'>来源</th><th className='text-left py-3 px-4'>说明</th><th className='text-left py-3 px-4'>同步方式</th></tr></thead>
            <tbody>
              <tr className='border-b'><td className='py-3 px-4'>Xray 入站</td><td className='py-3 px-4'>通过入站向导创建的协议入站</td><td className='py-3 px-4'>自动同步</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>远程服务器入站</td><td className='py-3 px-4'>远程服务器上的入站配置</td><td className='py-3 px-4'>自动同步</td></tr>
              <tr><td className='py-3 px-4'>外部订阅导入</td><td className='py-3 px-4'>从外部订阅链接导入的节点</td><td className='py-3 px-4'>手动/定时</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>自动同步</h2>
        <p className='text-muted-foreground mb-4'>
          当入站配置发生变更时，系统通过事件总线自动触发节点同步。同步过程会将入站配置转换为 mihomo/Clash 兼容的代理节点格式。
        </p>
        <Card>
          <CardContent className='pt-6'>
            <div className='text-sm space-y-2 text-muted-foreground'>
              <p>同步触发条件：</p>
              <ul className='space-y-1 ml-4'>
                <li>- 创建新入站</li>
                <li>- 修改入站配置</li>
                <li>- 删除入站</li>
                <li>- 远程服务器入站变更</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>节点操作</h2>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead><tr className='border-b'><th className='text-left py-3 px-4'>操作</th><th className='text-left py-3 px-4'>说明</th></tr></thead>
            <tbody>
              <tr className='border-b'><td className='py-3 px-4'>启用/禁用</td><td className='py-3 px-4'>控制节点是否出现在订阅中</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>重命名</td><td className='py-3 px-4'>自定义节点在订阅中的显示名称</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>排序</td><td className='py-3 px-4'>调整节点在订阅中的顺序</td></tr>
              <tr><td className='py-3 px-4'>分组</td><td className='py-3 px-4'>将节点分配到不同的代理组</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-4'>注意事项</h2>
        <ul className='space-y-2 text-sm text-muted-foreground'>
          <li>- 由入站自动生成的节点，修改入站后会自动更新</li>
          <li>- 手动修改节点名称不会被自动同步覆盖</li>
          <li>- 禁用的节点不会出现在任何订阅输出中</li>
        </ul>
      </section>
    </XDocLayout>
  )
}
