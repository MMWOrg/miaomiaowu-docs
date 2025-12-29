import { createFileRoute } from '@tanstack/react-router'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import {
  HelpCircle,
  MessageCircle,
  Bug,
  Github,
} from 'lucide-react'

export const Route = createFileRoute('/docs/faq')({
  component: FaqPage,
})

const faqs = [
  {
    question: '订阅链接不显示订阅怎么办？',
    answer: '检查以下几点：\n1. 管理员是否已给用户绑定订阅\n2. 用户账户是否已启用\n3. 订阅配置是否正确创建',
  },
  {
    question: '客户端导入订阅失败怎么办？',
    answer: '请检查：\n1. 订阅链接是否可以正常访问\n2. 选择的客户端格式是否正确\n3. 如果问题持续，请提供报错信息联系开发者或提交 Issue',
  },
  {
    question: '支持哪些订阅格式？',
    answer: '妙妙屋目前保存为 Clash 订阅格式，可以转换为其他客户端格式，包括：Clash、Stash、Shadowrocket、Surge、Surfboard、Loon、QuantumultX、Egern、sing-box、V2Ray、URI 等12种格式。',
  },
  {
    question: '如何添加节点？',
    answer: '有两种方式：\n1. 手动添加：输入 vmess://、vless://、trojan:// 等格式的链接\n2. 订阅导入：输入机场提供的订阅链接，自动解析并导入节点',
  },
  {
    question: '什么是链式代理？',
    answer: '链式代理是指将多个代理节点串联起来，让流量依次通过多个代理服务器。例如：客户端 → 中转节点 → 落地节点 → 目标网站。可以用于中转加速或隐藏真实IP。',
  },
  {
    question: '如何统计流量？',
    answer: '需要配置探针服务器：\n1. 在"探针管理"中添加探针服务器（支持哪吒、Dstatus、Komari）\n2. 在"节点管理"中为节点绑定探针服务器\n3. 系统会自动统计绑定节点的流量',
  },
  {
    question: '忘记管理员密码怎么办？',
    answer: '需要直接操作数据库或删除数据库文件重新初始化。具体步骤：\n1. 停止服务\n2. 删除或备份 data/miaomiaowu.db 文件\n3. 重新启动服务\n4. 访问系统重新创建管理员账户',
  },
  {
    question: '如何更新节点信息？',
    answer: '对于从外部订阅导入的节点：\n1. 在系统设置中开启"强制同步外部订阅"\n2. 设置合适的缓存过期时间\n3. 用户获取订阅时会自动同步最新节点信息',
  },
  {
    question: '自定义规则如何使用？',
    answer: '1. 在系统设置中开启"启用自定义规则"\n2. 进入"自定义规则"页面\n3. 可以配置 DNS、规则列表和规则集提供商\n4. 生成订阅时会自动应用已启用的自定义规则',
  },
  {
    question: '如何备份数据？',
    answer: '妙妙屋使用 SQLite 数据库，备份非常简单：\n1. 停止服务（可选，但推荐）\n2. 复制 data/miaomiaowu.db 文件\n3. 保存到安全位置\n\n恢复时只需将备份文件复制回原位置即可。',
  },
]

function FaqPage() {
  return (
    <DocLayout
      title='常见问题'
      description='查看常见问题的解答'
    >
      {/* FAQ 列表 */}
      <section className='mb-8'>
        <div className='space-y-4'>
          {faqs.map((faq, index) => (
            <Card key={index}>
              <CardContent className='pt-6'>
                <h3 className='font-semibold mb-2 flex items-start gap-2'>
                  <HelpCircle className='size-5 text-primary mt-0.5 flex-shrink-0' />
                  {faq.question}
                </h3>
                <p className='text-sm text-muted-foreground whitespace-pre-line ml-7'>
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 获取帮助 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <MessageCircle className='size-5 text-primary' />
          获取更多帮助
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              如果您的问题未在上述列表中找到答案，可以通过以下方式获取帮助：
            </p>
            <div className='grid gap-4 md:grid-cols-2'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold mb-2 flex items-center gap-2'>
                  <Github className='size-4' />
                  GitHub Issues
                </h4>
                <p className='text-sm text-muted-foreground mb-2'>
                  提交问题或功能请求
                </p>
                <a
                  href='https://github.com/Jimleerx/miaomiaowu/issues'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm text-primary hover:underline'
                >
                  前往 GitHub Issues →
                </a>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold mb-2 flex items-center gap-2'>
                  <Bug className='size-4' />
                  报告 Bug
                </h4>
                <p className='text-sm text-muted-foreground mb-2'>
                  发现问题？请提交详细的错误报告
                </p>
                <a
                  href='https://github.com/Jimleerx/miaomiaowu/issues/new'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm text-primary hover:underline'
                >
                  提交 Bug 报告 →
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
