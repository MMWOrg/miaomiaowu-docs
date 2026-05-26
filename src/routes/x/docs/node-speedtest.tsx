import { createFileRoute } from '@tanstack/react-router'
import { XDocLayout } from '@/components/docs/x-doc-layout'
import { Card, CardContent } from '@/components/ui/card'

export const Route = createFileRoute('/x/docs/node-speedtest')({
  component: NodeSpeedtestPage,
})

function NodeSpeedtestPage() {
  return (
    <XDocLayout
      title='节点测速'
      description='用 mihomo 内核对节点测下行速度与真连接延迟,支持主控本机与家用测速端、单/多线程切换'
    >
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>概述</h2>
        <p className='text-muted-foreground mb-4'>
          节点测速通过 mihomo 内核以单节点代理实测下行吞吐与延迟。测速来源、线程数、测试类型可自由组合,结果保存在服务端可回看历史。
        </p>
        <div className='grid gap-4 md:grid-cols-2'>
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-2'>🖥️ 主控本机</h3>
              <p className='text-sm text-muted-foreground'>
                主控自动下载 mihomo 内核,在主控所在网络环境测速。开箱即用,适合主控部署在家里或目标网络的场景。
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-2'>🏠 家用测速端</h3>
              <p className='text-sm text-muted-foreground'>
                在你家里的电脑/服务器跑一个测速端,反向 WebSocket 连入主控,从真实家庭网络视角测速。适合主控在机房、但想知道家庭出口实测速度的场景。
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>两种测试类型</h2>
        <div className='grid gap-4 md:grid-cols-2'>
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-2'>⚡ 测速(下行 + 延迟)</h3>
              <p className='text-sm text-muted-foreground mb-2'>
                经代理下载 Google 大文件约 8 秒,按真实字节 / 耗时算 Mbps;同时测一次 <code className='bg-muted px-1 py-0.5 rounded text-xs'>www.gstatic.com/generate_204</code> 延迟。
              </p>
              <p className='text-xs text-muted-foreground'>触发:点行内 Gauge 图标(橙色)或顶部「批量测速」按钮。</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-2'>🔌 真连接延迟</h3>
              <p className='text-sm text-muted-foreground mb-2'>
                只跑 Cloudflare 204 多采样(<code className='bg-muted px-1 py-0.5 rounded text-xs'>cp.cloudflare.com/generate_204</code>),3 次取最快 2 个的均值,去掉首包冷启动。不下载文件,几秒即出结果。
              </p>
              <p className='text-xs text-muted-foreground'>触发:点延迟列里的 Zap 图标按钮。再次点击重测。</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>使用步骤</h2>
        <div className='space-y-4'>
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3'>发起测速</h3>
              <ol className='text-sm text-muted-foreground space-y-2 list-decimal pl-5'>
                <li>进入「节点管理」,点顶部的「节点测速」按钮,打开测速工作台。</li>
                <li>顶部选择<strong>测速来源</strong>(默认「主控本机」;若配过家用测速端可选对应测速端)。<strong>选择会保留在浏览器本地</strong>,下次打开自动恢复。</li>
                <li>选择<strong>线程</strong>(单线程 / 多线程,8 路并发):单线程接近最差路径表现;多线程聚合带宽,接近真实可用带宽。线程选择也会本地缓存。</li>
                <li>表格每行显示协议 / 节点名 / 服务器 / 速度 / 延迟 / 出口 IP。
                  <ul className='list-disc pl-5 mt-1 space-y-1'>
                    <li>点行内 <strong>Gauge 图标</strong>跑速度测试(含延迟)。</li>
                    <li>点<strong>延迟列里的 Zap 按钮</strong>跑真连接延迟(Cloudflare 204);测过的会显示 ms,可再次点击重测。</li>
                    <li>勾选多个 + 点顶部「批量测速」一次发起多个速度测试。</li>
                  </ul>
                </li>
                <li>测速是<strong>异步</strong>的:点完立即返回,运行中显示 spinner,完成自动刷新结果(轮询 1.5s,基本"秒级"反应)。离开页面再回来仍可看到。</li>
                <li>点行内「History」可查看该节点的历次测速记录。</li>
              </ol>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-6 text-sm text-muted-foreground'>
              测速工作台被点击外部 / 按 Esc 时会<strong>收起到屏幕右侧</strong>的悬浮按钮(防止误关丢失进度),点它重新展开;点右上角 × 才真正关闭。再次打开会回到主视图(不会停在"管理测速端"子页)。
            </CardContent>
          </Card>
        </div>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>配置家用测速端</h2>
        <div className='space-y-4'>
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3'>步骤</h3>
              <ol className='text-sm text-muted-foreground space-y-2 list-decimal pl-5'>
                <li>测速工作台点「测速端管理」→ 填一个名称 → 点「创建」,得到一次性<strong>配对令牌</strong>和一键安装命令(Linux/macOS + Windows 各一份)。<strong>令牌只显示一次</strong>,务必先复制保存。</li>
                <li>在你家里的机器上运行命令:
                  <pre className='bg-muted text-xs p-3 rounded mt-2 overflow-x-auto'>{`# Linux / macOS
curl -fsSL <脚本URL>/install.sh | bash -s -- \\
  -master https://你的主控.example.com -token <令牌>

# Windows PowerShell
irm <脚本URL>/install.ps1 -OutFile install.ps1
.\\install.ps1 -Master https://你的主控.example.com -Token <令牌>`}</pre>
                </li>
                <li>测速端启动后自动反向连入主控(WSS),<strong>不需要家里有公网 IP</strong>。连上后在测速来源里会显示这个测速端为「在线」,选它即可。</li>
                <li>测速端断连后会自动重连,标记为「离线」时不可选择(已选中会自动回落到主控本机)。</li>
              </ol>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3'>测速端支持的能力</h3>
              <p className='text-sm text-muted-foreground'>
                家用测速端跟主控本机一致,完整支持:下行速度测试 + 真连接延迟测试 + 单/多线程切换 + 出口 IP 回显。
                所有能力都通过同一条 WebSocket 反向连接派发任务,结果回传后写入主控历史表。
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className='pt-6 text-sm text-muted-foreground'>
              测速端二进制在 <a href='https://github.com/MMWOrg/mmwX-plugins/releases/latest' target='_blank' rel='noopener noreferrer' className='text-primary underline'>mmwX-plugins releases</a> 发布,支持 Linux / Windows / macOS;一键安装脚本会自动下载对应平台二进制 + 配置 systemd(Linux)或开机自启(Windows)。
            </CardContent>
          </Card>
        </div>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>典型场景对照</h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='overflow-x-auto'>
              <table className='w-full text-sm'>
                <thead className='text-muted-foreground'>
                  <tr className='border-b'>
                    <th className='py-2 text-left font-normal'>想知道什么</th>
                    <th className='py-2 text-left font-normal'>选择</th>
                    <th className='py-2 text-left font-normal'>说明</th>
                  </tr>
                </thead>
                <tbody className='[&_td]:py-2'>
                  <tr className='border-b'>
                    <td>节点在主控机房的最高带宽</td>
                    <td>主控 + 多线程 + 测速</td>
                    <td>聚合 8 路下载,接近物理带宽上限</td>
                  </tr>
                  <tr className='border-b'>
                    <td>单流应用(看视频/拷文件)能跑多快</td>
                    <td>主控 + 单线程 + 测速</td>
                    <td>反映单 TCP 连接受拥塞控制限的真实速度</td>
                  </tr>
                  <tr className='border-b'>
                    <td>家里实际看 YouTube 多卡</td>
                    <td>家用测速端 + 多线程 + 测速</td>
                    <td>从家庭出口经代理实测,最贴近用户体感</td>
                  </tr>
                  <tr className='border-b'>
                    <td>只想快速看看延迟,别等 8 秒下载</td>
                    <td>点延迟列 Zap 按钮(真连接延迟)</td>
                    <td>3 次 Cloudflare 204 取最快 2 个均值,2-4 秒出结果</td>
                  </tr>
                  <tr>
                    <td>验证落地 IP 是不是预期</td>
                    <td>任意测速跑完看「出口 IP」列</td>
                    <td>经代理回显的真实出站 IP</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>注意事项</h2>
        <Card>
          <CardContent className='pt-6 text-sm text-muted-foreground space-y-2'>
            <p>• 同一个测速来源(主控或某个测速端)内所有任务<strong>串行</strong>执行,避免并发抢带宽导致结果失真;批量测速节点很多时耗时较长。</p>
            <p>• 速度测试默认按时长(约 8 秒)而非固定大小,慢节点不会因为字节没下完就超时报错。</p>
            <p>• 真连接延迟用 Cloudflare 204(全球边缘节点),覆盖比 gstatic 更广;首次测试 mihomo 还要冷启动,所以采样会去掉最慢一个,结果更稳。</p>
            <p>• 节点测速是 PRO 功能,需要有效的 <a href='/x/docs/about' className='text-primary underline'>许可证</a>。</p>
            <p>• 历史记录按节点累积,可在节点行内点 History 查看;支持按速度/延迟/时间排序。</p>
          </CardContent>
        </Card>
      </section>
    </XDocLayout>
  )
}
