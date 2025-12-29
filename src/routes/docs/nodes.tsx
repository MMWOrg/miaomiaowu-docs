import { createFileRoute } from '@tanstack/react-router'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Plus,
  Upload,
  Eye,
  Pencil,
  Trash2,
  Sparkles,
  Shield,
  FileCode,
  Activity,
  RefreshCw,
  Smile,
  Tag,
  Link2,
  Copy,
  Clock,
  RotateCcw,
  Filter,
  MousePointerClick,
} from 'lucide-react'
import IpIcon from '@/assets/icons/ip.svg'
import ExchangeIcon from '@/assets/icons/exchange.svg'

export const Route = createFileRoute('/docs/nodes')({
  component: NodesDocPage,
})

function NodesDocPage() {
  return (
    <DocLayout
      title='节点管理'
      description='管理代理节点，支持添加、编辑、删除和导入节点'
    >
      {/* 功能介绍 */}
      <section className='mb-8'>
        <Card className='bg-muted/30'>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              节点管理页面是管理员专用功能，用于管理所有代理节点。支持添加、编辑、删除自建节点和外部订阅节点。
            </p>
            <div className='flex gap-2'>
              <Badge variant='destructive'>管理员功能</Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 主要功能说明 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Sparkles className='size-5 text-primary' />
          主要功能
        </h2>
        <div className='grid gap-4 md:grid-cols-2'>
          <Card>
            <CardContent className='pt-4'>
              <div className='flex items-start gap-3'>
                <Plus className='size-5 text-primary mt-0.5' />
                <div>
                  <h4 className='font-semibold'>添加节点</h4>
                  <p className='text-sm text-muted-foreground'>
                    手动输入 vless://、vmess:// 等链接添加节点
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-4'>
              <div className='flex items-start gap-3'>
                <Upload className='size-5 text-primary mt-0.5' />
                <div>
                  <h4 className='font-semibold'>导入节点</h4>
                  <p className='text-sm text-muted-foreground'>
                    从外部订阅链接批量导入节点
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-4'>
              <div className='flex items-start gap-3'>
                <img src={IpIcon} alt='IP' className='size-5 mt-0.5' />
                <div>
                  <h4 className='font-semibold'>解析为IP</h4>
                  <p className='text-sm text-muted-foreground'>
                    将节点域名解析为固定IP，支持IPv4和IPv6
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-4'>
              <div className='flex items-start gap-3'>
                <img src={ExchangeIcon} alt='Exchange' className='size-5 mt-0.5' />
                <div>
                  <h4 className='font-semibold'>创建链式代理</h4>
                  <p className='text-sm text-muted-foreground'>
                    为节点指定前置节点，生成链式代理节点
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-4'>
              <div className='flex items-start gap-3'>
                <Activity className='size-5 text-primary mt-0.5' />
                <div>
                  <h4 className='font-semibold'>绑定探针服务器</h4>
                  <p className='text-sm text-muted-foreground'>
                    节点绑定探针，精确统计流量信息
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-4'>
              <div className='flex items-start gap-3'>
                <Eye className='size-5 text-primary mt-0.5' />
                <div>
                  <h4 className='font-semibold'>查看配置</h4>
                  <p className='text-sm text-muted-foreground'>
                    显示节点的详细 Clash 配置信息
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 筛选功能 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Filter className='size-5 text-primary' />
          筛选功能
        </h2>
        <p className='text-muted-foreground mb-4'>
          节点列表支持多种筛选方式，帮助您快速找到所需节点。
        </p>
        <div className='grid gap-4 md:grid-cols-2'>
          <Card>
            <CardContent className='pt-4'>
              <h4 className='font-semibold mb-2'>按协议筛选</h4>
              <p className='text-sm text-muted-foreground mb-3'>
                点击协议标签可以筛选显示指定协议类型的节点。
              </p>
              <div className='flex flex-wrap gap-2'>
                <Badge variant='secondary'>全部</Badge>
                <Badge variant='secondary' className='bg-purple-500/20 text-purple-400'>VLESS</Badge>
                <Badge variant='secondary' className='bg-blue-500/20 text-blue-400'>VMess</Badge>
                <Badge variant='secondary' className='bg-green-500/20 text-green-400'>SS</Badge>
                <Badge variant='secondary' className='bg-orange-500/20 text-orange-400'>Trojan</Badge>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-4'>
              <h4 className='font-semibold mb-2'>按标签筛选</h4>
              <p className='text-sm text-muted-foreground mb-3'>
                点击标签可以筛选显示指定来源的节点。
              </p>
              <div className='flex flex-wrap gap-2'>
                <Badge variant='outline'>全部</Badge>
                <Badge variant='outline'>手动输入</Badge>
                <Badge variant='outline'>外部订阅</Badge>
                <Badge variant='outline'>链式代理</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 批量操作 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <MousePointerClick className='size-5 text-primary' />
          批量操作
        </h2>
        <p className='text-muted-foreground mb-4'>
          选中多个节点后，可以使用以下批量操作功能：
        </p>
        <div className='grid gap-3'>
          <Card>
            <CardContent className='pt-4'>
              <div className='grid gap-4 md:grid-cols-2'>
                <div className='flex items-start gap-3'>
                  <RefreshCw className='size-5 text-primary mt-0.5' />
                  <div>
                    <h4 className='font-semibold'>同步外部订阅</h4>
                    <p className='text-sm text-muted-foreground'>
                      从外部订阅源同步更新节点，保持节点信息最新
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <Smile className='size-5 text-primary mt-0.5' />
                  <div>
                    <h4 className='font-semibold'>添加 Emoji</h4>
                    <p className='text-sm text-muted-foreground'>
                      为选中节点批量添加地区 emoji（如 🇭🇰、🇯🇵）
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <Pencil className='size-5 text-primary mt-0.5' />
                  <div>
                    <h4 className='font-semibold'>修改名称</h4>
                    <p className='text-sm text-muted-foreground'>
                      批量修改选中节点的名称，支持模板替换
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <Tag className='size-5 text-primary mt-0.5' />
                  <div>
                    <h4 className='font-semibold'>修改标签</h4>
                    <p className='text-sm text-muted-foreground'>
                      批量修改选中节点的标签分类
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <Link2 className='size-5 text-primary mt-0.5' />
                  <div>
                    <h4 className='font-semibold'>生成临时订阅</h4>
                    <p className='text-sm text-muted-foreground'>
                      将选中节点生成临时订阅链接，方便分享
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <Trash2 className='size-5 text-destructive mt-0.5' />
                  <div>
                    <h4 className='font-semibold'>批量删除</h4>
                    <p className='text-sm text-muted-foreground'>
                      删除所有选中的节点
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className='border-orange-500/20'>
            <CardContent className='pt-4'>
              <div className='grid gap-4 md:grid-cols-2'>
                <div className='flex items-start gap-3'>
                  <Trash2 className='size-5 text-orange-500 mt-0.5' />
                  <div>
                    <h4 className='font-semibold text-orange-500'>清空所有</h4>
                    <p className='text-sm text-muted-foreground'>
                      清空所有节点（危险操作，需二次确认）
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <RotateCcw className='size-5 text-orange-500 mt-0.5' />
                  <div>
                    <h4 className='font-semibold text-orange-500'>删除重复</h4>
                    <p className='text-sm text-muted-foreground'>
                      自动检测并删除重复的节点
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 节点操作按钮详解 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Sparkles className='size-5 text-primary' />
          节点操作按钮详解
        </h2>
        <p className='text-muted-foreground mb-4'>
          每个节点行都有一系列操作图标按钮，用于快速操作单个节点：
        </p>
        <Card>
          <CardContent className='pt-4'>
            <div className='overflow-x-auto'>
              <table className='w-full text-sm'>
                <thead>
                  <tr className='border-b'>
                    <th className='p-3 text-left w-16'>图标</th>
                    <th className='p-3 text-left w-32'>功能名称</th>
                    <th className='p-3 text-left'>功能说明</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b'>
                    <td className='p-3'>
                      <Button size='icon' variant='ghost' className='size-7'>
                        <Pencil className='size-3.5' />
                      </Button>
                    </td>
                    <td className='p-3 font-medium'>编辑节点名称</td>
                    <td className='p-3 text-muted-foreground'>快速修改节点的显示名称</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-3'>
                      <Button size='icon' variant='ghost' className='size-7'>
                        <img src={ExchangeIcon} alt='Exchange' className='size-3.5' />
                      </Button>
                    </td>
                    <td className='p-3 font-medium'>创建链式代理</td>
                    <td className='p-3 text-muted-foreground'>为节点指定前置代理，流量经过前置节点再转发</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-3'>
                      <Button size='icon' variant='ghost' className='size-7'>
                        <Activity className='size-3.5' />
                      </Button>
                    </td>
                    <td className='p-3 font-medium'>绑定探针</td>
                    <td className='p-3 text-muted-foreground'>绑定探针服务器，精确统计节点流量使用情况</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-3'>
                      <Button size='icon' variant='ghost' className='size-7'>
                        <Smile className='size-3.5' />
                      </Button>
                    </td>
                    <td className='p-3 font-medium'>添加地区 Emoji</td>
                    <td className='p-3 text-muted-foreground'>根据节点 IP 自动识别地区并添加国旗 emoji</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-3'>
                      <Button size='icon' variant='ghost' className='size-7'>
                        <img src={IpIcon} alt='IP' className='size-3.5' />
                      </Button>
                    </td>
                    <td className='p-3 font-medium'>解析 IP 地址</td>
                    <td className='p-3 text-muted-foreground'>将节点域名解析为 IP 地址，避免 DNS 泄露</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-3'>
                      <Button size='icon' variant='ghost' className='size-7'>
                        <RotateCcw className='size-3.5' />
                      </Button>
                    </td>
                    <td className='p-3 font-medium'>恢复原始域名</td>
                    <td className='p-3 text-muted-foreground'>将已解析的 IP 恢复为原始域名</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-3'>
                      <Button size='icon' variant='ghost' className='size-7'>
                        <Eye className='size-3.5' />
                      </Button>
                    </td>
                    <td className='p-3 font-medium'>查看/修改配置</td>
                    <td className='p-3 text-muted-foreground'>查看或编辑节点的完整 YAML 配置信息</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-3'>
                      <Button size='icon' variant='ghost' className='size-7'>
                        <Copy className='size-3.5' />
                      </Button>
                    </td>
                    <td className='p-3 font-medium'>复制 URI</td>
                    <td className='p-3 text-muted-foreground'>复制节点的分享链接（如 vless://...）</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-3'>
                      <Button size='icon' variant='ghost' className='size-7'>
                        <Clock className='size-3.5' />
                      </Button>
                    </td>
                    <td className='p-3 font-medium'>生成临时订阅</td>
                    <td className='p-3 text-muted-foreground'>为单个节点生成临时订阅链接</td>
                  </tr>
                  <tr>
                    <td className='p-3'>
                      <Button size='icon' variant='ghost' className='size-7 text-destructive'>
                        <Trash2 className='size-3.5' />
                      </Button>
                    </td>
                    <td className='p-3 font-medium'>删除节点</td>
                    <td className='p-3 text-muted-foreground'>删除当前节点</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 支持的协议 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Shield className='size-5 text-primary' />
          支持的协议类型
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
          {['VMess', 'VLESS', 'Trojan', 'Shadowsocks', 'Hysteria', 'Hysteria2', 'TUIC', 'ShadowsocksR', 'Socks5', 'WireGuard'].map((protocol) => (
            <Card key={protocol}>
              <CardContent className='py-3 text-center'>
                <span className='font-medium'>{protocol}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 添加节点步骤 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <FileCode className='size-5 text-primary' />
          添加节点步骤
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <ol className='space-y-4 text-sm'>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>
                  1
                </span>
                <div>
                  <p className='font-medium'>点击"节点管理"菜单</p>
                  <p className='text-muted-foreground'>选择添加方式：手动输入或订阅导入</p>
                </div>
              </li>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>
                  2
                </span>
                <div>
                  <p className='font-medium'>输入节点信息</p>
                  <p className='text-muted-foreground'>
                    手动输入：类似 vless:// 的链接，一行一个<br/>
                    订阅导入：输入机场提供的订阅链接
                  </p>
                </div>
              </li>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>
                  3
                </span>
                <div>
                  <p className='font-medium'>查看解析结果</p>
                  <p className='text-muted-foreground'>
                    节点表格展示节点类型、名称、标签、服务器地址等信息
                  </p>
                </div>
              </li>
              <li className='flex gap-3'>
                <span className='flex-shrink-0 size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-semibold'>
                  4
                </span>
                <div>
                  <p className='font-medium'>保存节点</p>
                  <p className='text-muted-foreground'>点击保存按钮，节点将添加到节点列表中</p>
                </div>
              </li>
            </ol>
          </CardContent>
        </Card>
      </section>

      {/* 注意事项 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Shield className='size-5 text-orange-500' />
          注意事项
        </h2>
        <Card className='border-orange-500/20'>
          <CardContent className='pt-6'>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li className='flex items-start gap-2'>
                <span className='text-orange-500 mt-1'>⚠</span>
                <span><strong>配置准确性：</strong>节点配置信息必须准确无误，错误的配置会导致节点无法连接</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-orange-500 mt-1'>⚠</span>
                <span><strong>删除影响：</strong>删除节点不会影响引用该节点的订阅配置</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-orange-500 mt-1'>⚠</span>
                <span><strong>订阅导入的节点更新：</strong>设置中打开开关后，每次获取订阅时根据过期时间同步外部订阅节点</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
