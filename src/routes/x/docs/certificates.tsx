import { createFileRoute } from '@tanstack/react-router'
import { XDocLayout } from '@/components/docs/x-doc-layout'
import { Card, CardContent } from '@/components/ui/card'

export const Route = createFileRoute('/x/docs/certificates')({
  component: CertificatesPage,
})

function CertificatesPage() {
  return (
    <XDocLayout title='证书管理' description='TLS 证书申请与自动续期'>
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>概述</h2>
        <p className='text-muted-foreground'>证书管理模块通过 ACME 协议自动申请和续期 TLS 证书。支持多种 DNS 提供商，证书自动同步到远程服务器。</p>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>支持的 DNS 提供商</h2>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead><tr className='border-b'><th className='text-left py-3 px-4'>提供商</th><th className='text-left py-3 px-4'>所需凭证</th></tr></thead>
            <tbody>
              <tr className='border-b'><td className='py-3 px-4'>Cloudflare</td><td className='py-3 px-4'>API Token</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>阿里云 DNS</td><td className='py-3 px-4'>AccessKey ID + Secret</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>腾讯云 DNSPod</td><td className='py-3 px-4'>SecretId + SecretKey</td></tr>
              <tr><td className='py-3 px-4'>Namesilo</td><td className='py-3 px-4'>API Key</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>申请证书</h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='text-sm space-y-3 text-muted-foreground'>
              <p>1. 进入「证书管理」页面</p>
              <p>2. 点击「申请证书」</p>
              <p>3. 选择 DNS 提供商并填写凭证</p>
              <p>4. 输入域名（支持通配符，如 <code className='bg-muted px-1.5 py-0.5 rounded'>*.example.com</code>）</p>
              <p>5. 提交后系统自动完成 DNS 验证和证书签发</p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>自动续期</h2>
        <p className='text-muted-foreground'>证书到期前系统自动续期。续期成功后，证书文件自动更新到所有使用该证书的远程服务器。</p>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>证书存储</h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto'>
              <pre>{`证书文件路径（远程服务器）：
  证书: /root/cert/{domain}/fullchain.pem
  私钥: /root/cert/{domain}/privkey.pem`}</pre>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className='text-2xl font-bold mb-4'>使用场景</h2>
        <ul className='space-y-2 text-sm text-muted-foreground'>
          <li>- VLESS/VMess/Trojan + TLS 入站需要 TLS 证书</li>
          <li>- Hysteria2 入站需要 TLS 证书</li>
          <li>- REALITY 入站不需要证书（使用目标站点证书）</li>
        </ul>
      </section>
    </XDocLayout>
  )
}
