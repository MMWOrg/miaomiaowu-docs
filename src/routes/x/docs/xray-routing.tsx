import { createFileRoute, Link } from '@tanstack/react-router'
import { XDocLayout } from '@/components/docs/x-doc-layout'
import { Card, CardContent } from '@/components/ui/card'

export const Route = createFileRoute('/x/docs/xray-routing')({
  component: XrayRoutingPage,
})

function XrayRoutingPage() {
  return (
    <XDocLayout title='Xray 路由管理' description='管理 Xray 路由规则，控制流量转发策略'>
      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>概述</h2>
        <p className='text-muted-foreground mb-4'>
          Xray 路由模块基于 first-match 语义：规则从上到下依次匹配，命中第一条即停止，未匹配的流量走默认出站（outbounds[0]）。
          妙妙屋X 提供两个入口管理路由规则：
        </p>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead><tr className='border-b'><th className='text-left py-3 px-4'>入口</th><th className='text-left py-3 px-4'>位置</th><th className='text-left py-3 px-4'>说明</th></tr></thead>
            <tbody>
              <tr className='border-b'><td className='py-3 px-4'>节点路由</td><td className='py-3 px-4'>节点管理页 → 节点操作按钮</td><td className='py-3 px-4'>查看和管理单个节点（入站）的路由规则</td></tr>
              <tr><td className='py-3 px-4'>路由面板</td><td className='py-3 px-4'>Xray 服务器 → 路由 Tab</td><td className='py-3 px-4'>管理服务器全部路由规则，支持拖拽排序</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>路由匹配语义</h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='text-sm space-y-3 text-muted-foreground'>
              <p>Xray 路由规则遵循以下语义：</p>
              <ul className='space-y-2 ml-4'>
                <li>- 规则按顺序从上到下匹配，命中第一条即停止（first-match）</li>
                <li>- 单条规则内多个条件为 AND 关系（如 domain + protocol 需同时满足）</li>
                <li>- 只有 <code className='bg-muted px-1.5 py-0.5 rounded'>inboundTag</code> + <code className='bg-muted px-1.5 py-0.5 rounded'>outboundTag</code> 而无其他条件的规则 = catch-all，匹配该入站 100% 流量</li>
                <li>- catch-all 之后的全局规则对该入站不再生效</li>
                <li>- 无规则匹配时走 <code className='bg-muted px-1.5 py-0.5 rounded'>outbounds[0]</code>（默认出站）</li>
              </ul>
              <p className='mt-3'>因此，规则顺序非常重要。更具体的规则应放在前面，catch-all 规则放在最后。</p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>节点路由</h2>
        <p className='text-muted-foreground mb-4'>
          在节点管理页面，每个远程服务器节点旁有路由按钮，点击打开节点路由 Dialog。
        </p>
        <div className='space-y-4'>
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3'>专属规则与全局规则</h3>
              <div className='text-sm text-muted-foreground space-y-2'>
                <p>Dialog 将路由规则分为两类：</p>
                <ul className='space-y-1 ml-4'>
                  <li>- 专属规则：包含当前节点 <code className='bg-muted px-1.5 py-0.5 rounded'>inboundTag</code> 的规则，仅对此入站生效</li>
                  <li>- 全局规则：无 <code className='bg-muted px-1.5 py-0.5 rounded'>inboundTag</code> 的规则，对所有入站生效</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3'>Catch-all 检测</h3>
              <div className='text-sm text-muted-foreground space-y-2'>
                <p>
                  如果专属规则中存在 catch-all 规则（仅有 inboundTag + outboundTag，无 domain/ip/protocol 等条件），
                  系统会自动隐藏全局规则和默认出站区域，并显示提示：
                </p>
                <div className='bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-md p-3 text-amber-600 dark:text-amber-400 text-xs mt-2'>
                  ⚠ 全部流量已被路由到 [outboundTag]，后续全局规则和默认出站不再生效
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3'>出站名称解析</h3>
              <p className='text-sm text-muted-foreground'>
                路由规则中的 outboundTag 会自动解析为对应的节点名称。系统通过匹配出站配置中的 server:port 与节点的 clash_config 地址来完成映射。
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>路由面板</h2>
        <p className='text-muted-foreground mb-4'>
          在 Xray 服务器管理页面的「路由」Tab 中，可以管理远程服务器的全部路由规则。
        </p>
        <div className='space-y-4'>
          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3'>左右分栏布局</h3>
              <div className='text-sm text-muted-foreground space-y-2'>
                <p>路由面板采用左右分栏设计：</p>
                <ul className='space-y-1 ml-4'>
                  <li>- 左侧（40%）：规则列表，可拖拽排序，点击选中</li>
                  <li>- 右侧（60%）：选中规则的详细字段展示 + JSON 预览 + 删除按钮</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <h3 className='font-semibold mb-3'>拖拽排序</h3>
              <div className='text-sm text-muted-foreground space-y-2'>
                <p>
                  由于 Xray 路由是 first-match 语义，规则顺序直接影响匹配结果。
                  拖拽规则卡片左侧的手柄即可调整顺序，松手后自动保存并重启 Xray。
                </p>
                <p>排序通过 <code className='bg-muted px-1.5 py-0.5 rounded'>action: 'set'</code> 整体替换路由规则实现，API 规则（outboundTag 为 api）会自动保留在最前面。</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>快捷规则</h2>
        <p className='text-muted-foreground mb-4'>
          系统内置了常用的快捷规则，点击即可一键添加：
        </p>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead><tr className='border-b'><th className='text-left py-3 px-4'>规则</th><th className='text-left py-3 px-4'>匹配条件</th><th className='text-left py-3 px-4'>出站</th><th className='text-left py-3 px-4'>说明</th></tr></thead>
            <tbody>
              <tr className='border-b'><td className='py-3 px-4'>禁止 BT</td><td className='py-3 px-4 font-mono text-xs'>protocol: bittorrent</td><td className='py-3 px-4'>block</td><td className='py-3 px-4'>阻止 BT 下载流量</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>禁止访问大陆 IP</td><td className='py-3 px-4 font-mono text-xs'>ip: geoip:cn</td><td className='py-3 px-4'>block</td><td className='py-3 px-4'>阻止访问中国大陆 IP</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>OpenAI 直连</td><td className='py-3 px-4 font-mono text-xs'>domain: geosite:openai</td><td className='py-3 px-4'>direct</td><td className='py-3 px-4'>OpenAI 相关域名直连</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>禁止内网访问</td><td className='py-3 px-4 font-mono text-xs'>ip: geoip:private</td><td className='py-3 px-4'>block</td><td className='py-3 px-4'>阻止访问内网地址</td></tr>
              <tr className='border-b'><td className='py-3 px-4'>RFC EMBY</td><td className='py-3 px-4 font-mono text-xs'>domain: rfc.uhdnow.com</td><td className='py-3 px-4'>需选择</td><td className='py-3 px-4'>EMBY 解锁，需指定出站</td></tr>
              <tr><td className='py-3 px-4'>抖音解锁</td><td className='py-3 px-4 font-mono text-xs'>domain: geosite:tiktok</td><td className='py-3 px-4'>需选择</td><td className='py-3 px-4'>TikTok 解锁，需指定出站</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>自定义规则</h2>
        <p className='text-muted-foreground mb-4'>
          自定义规则支持 Xray 路由的所有字段，空字段不会提交。多个值用逗号分隔。
        </p>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead><tr className='border-b'><th className='text-left py-3 px-4'>字段</th><th className='text-left py-3 px-4'>类型</th><th className='text-left py-3 px-4'>示例</th><th className='text-left py-3 px-4'>说明</th></tr></thead>
            <tbody>
              <tr className='border-b'><td className='py-3 px-4 font-mono text-xs'>domain</td><td className='py-3 px-4'>数组</td><td className='py-3 px-4 font-mono text-xs'>geosite:openai, example.com</td><td className='py-3 px-4'>域名匹配，支持 geosite:、domain:、full:、regexp:</td></tr>
              <tr className='border-b'><td className='py-3 px-4 font-mono text-xs'>ip</td><td className='py-3 px-4'>数组</td><td className='py-3 px-4 font-mono text-xs'>geoip:cn, 10.0.0.0/8</td><td className='py-3 px-4'>IP 匹配，支持 geoip:、CIDR、纯 IP</td></tr>
              <tr className='border-b'><td className='py-3 px-4 font-mono text-xs'>protocol</td><td className='py-3 px-4'>数组</td><td className='py-3 px-4 font-mono text-xs'>bittorrent, http, tls</td><td className='py-3 px-4'>协议匹配</td></tr>
              <tr className='border-b'><td className='py-3 px-4 font-mono text-xs'>port</td><td className='py-3 px-4'>字符串</td><td className='py-3 px-4 font-mono text-xs'>80, 443, 1000-2000</td><td className='py-3 px-4'>目标端口，支持范围</td></tr>
              <tr className='border-b'><td className='py-3 px-4 font-mono text-xs'>sourcePort</td><td className='py-3 px-4'>字符串</td><td className='py-3 px-4 font-mono text-xs'>1234</td><td className='py-3 px-4'>来源端口</td></tr>
              <tr className='border-b'><td className='py-3 px-4 font-mono text-xs'>network</td><td className='py-3 px-4'>字符串</td><td className='py-3 px-4 font-mono text-xs'>tcp / udp / tcp,udp</td><td className='py-3 px-4'>网络类型</td></tr>
              <tr className='border-b'><td className='py-3 px-4 font-mono text-xs'>source</td><td className='py-3 px-4'>数组</td><td className='py-3 px-4 font-mono text-xs'>10.0.0.1</td><td className='py-3 px-4'>来源 IP</td></tr>
              <tr className='border-b'><td className='py-3 px-4 font-mono text-xs'>user</td><td className='py-3 px-4'>数组</td><td className='py-3 px-4 font-mono text-xs'>user@example.com</td><td className='py-3 px-4'>用户标识</td></tr>
              <tr className='border-b'><td className='py-3 px-4 font-mono text-xs'>inboundTag</td><td className='py-3 px-4'>数组</td><td className='py-3 px-4 font-mono text-xs'>inbound-tag-1</td><td className='py-3 px-4'>入站标签，限定规则作用范围</td></tr>
              <tr><td className='py-3 px-4 font-mono text-xs'>attrs</td><td className='py-3 px-4'>字符串</td><td className='py-3 px-4 font-mono text-xs'>attrs[':method'] == 'GET'</td><td className='py-3 px-4'>属性匹配表达式</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>自动重启</h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-sm text-muted-foreground'>
              对远程服务器的路由规则进行添加、删除或排序操作后，系统会自动重启 Xray 使配置生效。
              操作完成后会显示 toast 提示。
            </p>
          </CardContent>
        </Card>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>API 参考</h2>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead><tr className='border-b'><th className='text-left py-3 px-4'>接口</th><th className='text-left py-3 px-4'>方法</th><th className='text-left py-3 px-4'>说明</th></tr></thead>
            <tbody>
              <tr className='border-b'><td className='py-3 px-4 font-mono text-xs'>/api/admin/remote/routing?server_id=N</td><td className='py-3 px-4'>GET</td><td className='py-3 px-4'>获取远程服务器路由配置</td></tr>
              <tr className='border-b'><td className='py-3 px-4 font-mono text-xs'>/api/admin/remote/routing?server_id=N</td><td className='py-3 px-4'>POST</td><td className='py-3 px-4'>修改路由：add_rule / remove_rule / set</td></tr>
              <tr className='border-b'><td className='py-3 px-4 font-mono text-xs'>/api/admin/remote/outbounds?server_id=N</td><td className='py-3 px-4'>GET</td><td className='py-3 px-4'>获取远程服务器出站列表</td></tr>
              <tr><td className='py-3 px-4 font-mono text-xs'>/api/admin/remote/services/control?server_id=N</td><td className='py-3 px-4'>POST</td><td className='py-3 px-4'>服务控制（重启 Xray）</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <div className='flex gap-4'>
          <Link to='/x/docs/xray-outbounds' className='text-primary hover:underline'>← Xray 出站管理</Link>
          <Link to='/x/docs/xray-system-config' className='text-primary hover:underline'>→ Xray 系统配置</Link>
        </div>
      </section>
    </XDocLayout>
  )
}
