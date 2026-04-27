import { createFileRoute } from '@tanstack/react-router'
import { XDocLayout } from '@/components/docs/x-doc-layout'

export const Route = createFileRoute('/x/docs/system-requirements')({
  component: SystemRequirementsPage,
})

function SystemRequirementsPage() {
  return (
    <XDocLayout title='系统要求' description='部署妙妙屋X的系统要求和端口说明'>
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>主控端要求</h2>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead><tr className='border-b'><th className='text-left py-3 px-4'>项目</th><th className='text-left py-3 px-4'>要求</th></tr></thead>
            <tbody>
              <tr className='border-b'><td className='py-3 px-4'>操作系统</td><td className='py-3 px-4'>Linux (amd64/arm64) / Windows</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>内存</td><td className='py-3 px-4'>128MB+</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>磁盘</td><td className='py-3 px-4'>100MB+（含数据库）</td></tr>
              <tr><td className='py-3 px-4'>端口</td><td className='py-3 px-4'>12889（默认，可配置）</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>Agent 端要求</h2>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead><tr className='border-b'><th className='text-left py-3 px-4'>项目</th><th className='text-left py-3 px-4'>要求</th></tr></thead>
            <tbody>
              <tr className='border-b'><td className='py-3 px-4'>操作系统</td><td className='py-3 px-4'>Linux (amd64/arm64)</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>内存</td><td className='py-3 px-4'>64MB+</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>端口</td><td className='py-3 px-4'>23889（Agent API，默认）</td></tr>
              <tr><td className='py-3 px-4'>网络</td><td className='py-3 px-4'>能访问主控端（WebSocket 模式）或被主控端访问（HTTP 模式）</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-4'>防火墙端口</h2>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead><tr className='border-b'><th className='text-left py-3 px-4'>端口</th><th className='text-left py-3 px-4'>用途</th><th className='text-left py-3 px-4'>位置</th></tr></thead>
            <tbody>
              <tr className='border-b'><td className='py-3 px-4'>12889</td><td className='py-3 px-4'>主控端 Web 面板和 API</td><td className='py-3 px-4'>主控端</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>23889</td><td className='py-3 px-4'>Agent API（HTTP 模式需要）</td><td className='py-3 px-4'>远程服务器</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>443</td><td className='py-3 px-4'>TLS/REALITY 入站（Nginx 伪装）</td><td className='py-3 px-4'>远程服务器</td></tr>
              <tr><td className='py-3 px-4'>自定义</td><td className='py-3 px-4'>Xray 入站端口</td><td className='py-3 px-4'>远程服务器</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </XDocLayout>
  )
}
