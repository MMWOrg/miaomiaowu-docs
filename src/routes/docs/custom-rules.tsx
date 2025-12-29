import { createFileRoute } from '@tanstack/react-router'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import {
  FileCode,
  Sparkles,
  Network,
  Shield,
  Database,
  Settings,
} from 'lucide-react'

export const Route = createFileRoute('/docs/custom-rules')({
  component: CustomRulesPage,
})

function CustomRulesPage() {
  return (
    <DocLayout
      title='自定义规则'
      description='管理代理规则集（管理员功能）'
    >
      {/* 功能说明 */}
      <section className='mb-8'>
        <div className='flex items-center gap-2 mb-4'>
          <span className='px-2 py-1 bg-destructive/10 text-destructive rounded-md text-xs border border-destructive/20'>
            管理员功能
          </span>
        </div>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground'>
              自定义规则页面是管理员专用功能，用于管理代理规则集。支持创建、编辑、删除规则文件，这些规则可以在订阅配置中引用，实现灵活的流量分流和路由控制。
            </p>
          </CardContent>
        </Card>
      </section>

      {/* 主要功能 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Sparkles className='size-5 text-primary' />
          主要功能
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-blue-500'>
              <ul className='space-y-2 text-sm'>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>规则列表查看</strong>：查看所有已创建的自定义规则文件及其基本信息</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>创建规则</strong>：新建规则文件，支持DNS(dns)、规则(rules)、规则集(rule-providers)</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>编辑规则</strong>：修改规则的名称、类型、行为和规则内容</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>删除规则</strong>：移除不再使用的规则文件</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>规则行为设置</strong>：替换或追加</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 规则类型说明 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Network className='size-5 text-primary' />
          规则类型说明
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              自定义规则支持多种规则类型，用于不同的匹配场景：
            </p>
            <div className='grid md:grid-cols-3 gap-3'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>DNS</h4>
                <p className='text-xs text-muted-foreground'>
                  替换配置文件中dns:这一整段
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>规则</h4>
                <p className='text-xs text-muted-foreground'>
                  替换或追加配置文件中rules:的内容
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>规则集</h4>
                <p className='text-xs text-muted-foreground'>
                  替换或追加配置文件中rule-providers:的内容
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 创建规则步骤 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <FileCode className='size-5 text-primary' />
          创建规则步骤
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-green-500'>
              <div className='space-y-4 text-sm'>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>1</span>
                  <div>
                    <strong>点击"新建规则"按钮</strong>
                    <p className='text-muted-foreground mt-1'>打开规则创建对话框</p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>2</span>
                  <div>
                    <strong>填写规则基本信息</strong>
                    <p className='text-muted-foreground mt-1'>
                      • <strong>规则名称</strong>：为规则设置一个唯一的名称<br/>
                      • <strong>规则类型</strong>：DNS、规则、规则集<br/>
                      • <strong>规则行为</strong>：替换或追加
                    </p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>3</span>
                  <div>
                    <strong>编写规则内容</strong>
                    <p className='text-muted-foreground mt-1'>
                      在编辑器中编写规则，每行一条规则。示例：<br/>
                      <code className='bg-muted px-2 py-0.5 rounded text-xs'>DOMAIN-SUFFIX,google.com</code>
                    </p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>4</span>
                  <div>
                    <strong>保存规则</strong>
                    <p className='text-muted-foreground mt-1'>点击保存按钮创建规则，规则可在订阅配置中引用</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 规则应用场景 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Sparkles className='size-5 text-primary' />
          规则应用场景
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='grid md:grid-cols-2 gap-4'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>广告屏蔽</h4>
                <div className='bg-background rounded p-2 font-mono text-xs space-y-1'>
                  <div>DOMAIN-SUFFIX,doubleclick.net</div>
                  <div>DOMAIN-SUFFIX,googleadservices.com</div>
                  <div>DOMAIN-KEYWORD,advertisement</div>
                </div>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>国内直连</h4>
                <div className='bg-background rounded p-2 font-mono text-xs space-y-1'>
                  <div>DOMAIN-SUFFIX,baidu.com</div>
                  <div>DOMAIN-SUFFIX,taobao.com</div>
                  <div>GEOIP,CN</div>
                </div>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>流媒体代理</h4>
                <div className='bg-background rounded p-2 font-mono text-xs space-y-1'>
                  <div>DOMAIN-SUFFIX,netflix.com</div>
                  <div>DOMAIN-SUFFIX,youtube.com</div>
                  <div>DOMAIN-KEYWORD,spotify</div>
                </div>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>局域网直连</h4>
                <div className='bg-background rounded p-2 font-mono text-xs space-y-1'>
                  <div>IP-CIDR,192.168.0.0/16</div>
                  <div>IP-CIDR,10.0.0.0/8</div>
                  <div>IP-CIDR,172.16.0.0/12</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 在订阅中引用规则 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Database className='size-5 text-primary' />
          在订阅中引用规则
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              创建规则后，需要在"生成订阅"的配置中引用才能生效：
            </p>
            <div className='space-y-4'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>规则类型示例</h4>
                <div className='bg-background rounded p-3 font-mono text-xs space-y-1'>
                  <div>rules:</div>
                  <div className='ml-4'>- RULE-SET,reject,🐟 漏网之鱼</div>
                  <div className='ml-4'>- GEOIP,CN,DIRECT</div>
                  <div className='ml-4'>- MATCH,PROXY</div>
                </div>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>规则优先级</h4>
                <p className='text-xs text-muted-foreground'>
                  规则按照在配置中出现的顺序匹配，越靠前的规则优先级越高。建议顺序：<br/>
                  1. 特定规则（如广告屏蔽）<br/>
                  2. 国内直连规则<br/>
                  3. 代理规则<br/>
                  4. 兜底规则（MATCH）
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 注意事项 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Shield className='size-5 text-primary' />
          注意事项
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-orange-500'>
              <ul className='space-y-2 text-sm text-muted-foreground'>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>规则格式</strong>：yaml的缩进必须正确</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>代理组必须存在</strong>：RULES的规则使用的代理组必须存在</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 规则维护建议 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Settings className='size-5 text-primary' />
          规则维护建议
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='space-y-3'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>定期检查</h4>
                <p className='text-xs text-muted-foreground'>
                  定期检查规则的有效性，移除已失效的域名和 IP 段，保持规则集的精简和高效。
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>用户反馈</h4>
                <p className='text-xs text-muted-foreground'>
                  关注用户反馈，根据实际使用情况调整规则。例如某些网站无法访问，可能需要添加直连规则。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
