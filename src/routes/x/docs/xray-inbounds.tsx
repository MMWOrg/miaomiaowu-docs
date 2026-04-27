import { createFileRoute, Link } from '@tanstack/react-router'
import { XDocLayout } from '@/components/docs/x-doc-layout'
import { Card, CardContent } from '@/components/ui/card'

export const Route = createFileRoute('/x/docs/xray-inbounds')({
  component: XrayInboundsPage,
})

function XrayInboundsPage() {
  return (
    <XDocLayout title='Xray 入站管理' description='使用入站向导创建和管理 Xray 入站配置'>
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>入站向导</h2>
        <p className='text-muted-foreground mb-4'>
          入站向导提供可视化的配置流程，按步骤选择协议、传输、安全层和参数，自动生成完整的 Xray 入站配置。
        </p>
        <Card>
          <CardContent className='pt-6'>
            <ol className='space-y-3 text-sm'>
              <li>1. 选择协议：VLESS / VMess / Trojan / Shadowsocks / Hysteria2</li>
              <li>2. 选择传输：TCP / WebSocket / gRPC / XHTTP</li>
              <li>3. 选择安全层：TLS / REALITY / None / XTLS-Vision</li>
              <li>4. 配置端口（自动检测冲突）</li>
              <li>5. 配置协议参数（UUID/密码自动生成）</li>
              <li>6. 预览并创建</li>
            </ol>
          </CardContent>
        </Card>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>支持的组合</h2>
        <p className='text-muted-foreground mb-4'>
          不同协议支持不同的传输和安全层组合。详细的组合矩阵请参考 <Link to='/x/docs/protocol-matrix' className='text-primary hover:underline'>协议矩阵</Link>。
        </p>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead><tr className='border-b'><th className='text-left py-3 px-4'>协议</th><th className='text-left py-3 px-4'>传输</th><th className='text-left py-3 px-4'>安全层</th></tr></thead>
            <tbody>
              <tr className='border-b'><td className='py-3 px-4'>VLESS</td><td className='py-3 px-4'>TCP, WS, gRPC, XHTTP</td><td className='py-3 px-4'>TLS, REALITY, XTLS-Vision</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>VMess</td><td className='py-3 px-4'>TCP, WS</td><td className='py-3 px-4'>TLS, None</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>Trojan</td><td className='py-3 px-4'>TCP, gRPC</td><td className='py-3 px-4'>TLS, REALITY</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>Shadowsocks</td><td className='py-3 px-4'>TCP</td><td className='py-3 px-4'>None</td></tr>
              <tr><td className='py-3 px-4'>Hysteria2</td><td className='py-3 px-4'>UDP</td><td className='py-3 px-4'>TLS</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>入站操作</h2>
        <ul className='space-y-2 text-sm text-muted-foreground'>
          <li>- 创建入站后自动同步为节点（可在节点管理中查看）</li>
          <li>- 删除入站时自动删除对应节点</li>
          <li>- 支持查看入站的完整 JSON 配置</li>
          <li>- 过滤：自动隐藏 API 入站和空 tag 的运行时入站</li>
        </ul>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-4'>自动同步</h2>
        <p className='text-muted-foreground'>
          入站创建/删除时会通过事件总线自动同步到节点表。同步过程会自动将 Xray 入站配置转换为 mihomo/Clash 兼容的代理配置格式。
        </p>
      </section>
    </XDocLayout>
  )
}
