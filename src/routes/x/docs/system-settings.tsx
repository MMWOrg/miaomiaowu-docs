import { createFileRoute } from '@tanstack/react-router'
import { XDocLayout } from '@/components/docs/x-doc-layout'
import { Card, CardContent } from '@/components/ui/card'

export const Route = createFileRoute('/x/docs/system-settings')({
  component: SystemSettingsPage,
})

function SystemSettingsPage() {
  return (
    <XDocLayout title='系统设置' description='全局系统配置项'>
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>概述</h2>
        <p className='text-muted-foreground'>系统设置包含全局配置项，影响整个系统的行为。修改后立即生效，无需重启。</p>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>配置项</h2>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead><tr className='border-b'><th className='text-left py-3 px-4'>配置</th><th className='text-left py-3 px-4'>说明</th><th className='text-left py-3 px-4'>默认值</th></tr></thead>
            <tbody>
              <tr className='border-b'><td className='py-3 px-4'>站点名称</td><td className='py-3 px-4'>显示在页面标题和订阅信息中</td><td className='py-3 px-4'>妙妙屋X</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>服务端口</td><td className='py-3 px-4'>后端 HTTP 服务监听端口</td><td className='py-3 px-4'>12889</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>代理组 URL</td><td className='py-3 px-4'>代理组配置的远程 URL</td><td className='py-3 px-4'>-</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>流量采集间隔</td><td className='py-3 px-4'>从 Xray 采集流量数据的间隔</td><td className='py-3 px-4'>60s</td></tr>
              <tr><td className='py-3 px-4'>日志级别</td><td className='py-3 px-4'>系统日志输出级别</td><td className='py-3 px-4'>info</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>配置文件</h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto'>
              <pre>{`# config.yaml
port: 12889
database_path: data/traffic.db
jwt_secret: your-secret-key
log_level: info
allowed_origins: "*"`}</pre>
            </div>
            <p className='mt-4 text-sm text-muted-foreground'>
              配置文件通过 <code className='bg-muted px-1.5 py-0.5 rounded'>-c config.yaml</code> 指定，也可通过环境变量覆盖。
            </p>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-4'>环境变量</h2>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead><tr className='border-b'><th className='text-left py-3 px-4'>变量</th><th className='text-left py-3 px-4'>说明</th></tr></thead>
            <tbody>
              <tr className='border-b'><td className='py-3 px-4 font-mono text-xs'>PORT</td><td className='py-3 px-4'>服务端口</td></tr>
              <tr className='border-b'><td className='py-3 px-4 font-mono text-xs'>DATABASE_PATH</td><td className='py-3 px-4'>SQLite 数据库路径</td></tr>
              <tr className='border-b'><td className='py-3 px-4 font-mono text-xs'>JWT_SECRET</td><td className='py-3 px-4'>JWT 签名密钥</td></tr>
              <tr className='border-b'><td className='py-3 px-4 font-mono text-xs'>LOG_LEVEL</td><td className='py-3 px-4'>日志级别</td></tr>
              <tr><td className='py-3 px-4 font-mono text-xs'>ALLOWED_ORIGINS</td><td className='py-3 px-4'>CORS 允许的来源</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </XDocLayout>
  )
}
