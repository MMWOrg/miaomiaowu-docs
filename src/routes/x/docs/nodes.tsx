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

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>Tunnel(任意门转发)管理</h2>
        <p className='text-muted-foreground mb-4'>
          Tunnel(dokodemo-door)入站用于把一台服务器的某端口流量转发到另一节点。Tunnel 本身不进节点列表,
          统一在节点管理顶部的「Tunnel 管理」入口里查看与删除(跨所有远程 / 分享服务器聚合)。
        </p>
        <div className='space-y-4'>
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-2'>转发已有节点(推荐)</h3>
              <p className='text-sm text-muted-foreground'>
                添加入站时选择 <strong>Tunnel</strong> 协议,再选「转发已有节点」,会自动按所选节点填好转发地址 / 端口 / 网络类型等。
                创建后会自动生成一个配套节点:名称为<strong>「原节点名 | Tunnel」</strong>,入站标识为该 tunnel 的 tag,
                clash 配置克隆原节点,但服务器地址与端口改为 <strong>tunnel 服务器的 IP 与监听端口</strong>——这样客户端连 tunnel 服务器即走转发链路。
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-2'>「被 tunnel 转发」标识</h3>
              <p className='text-sm text-muted-foreground'>
                若某节点正被某个 tunnel 转发,它在节点列表里会显示一个「被 tunnel 转发」标签,鼠标悬停可看到是哪台服务器的哪个 tunnel。
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-6 text-sm text-muted-foreground'>
              Tunnel 管理为管理员功能;对接收到的<strong>分享服务器</strong>同样可用。删除 tunnel 会一并清理其配套节点。
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-4'>注意事项</h2>
        <ul className='space-y-2 text-sm text-muted-foreground'>
          <li>- 由入站自动生成的节点，修改入站后会自动更新</li>
          <li>- 手动修改节点名称不会被自动同步覆盖</li>
          <li>- 禁用的节点不会出现在任何订阅输出中</li>
          <li>- 节点解析为 IP 后可一键「恢复域名」,恢复的是解析前的原始域名(不影响节点所属服务器)</li>
        </ul>
      </section>
    </XDocLayout>
  )
}
