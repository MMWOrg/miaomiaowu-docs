import { Link } from '@tanstack/react-router'
import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ThemeSwitch } from '@/components/theme-switch'
import { AnimatedX } from '@/components/animated-x'
import {
  Server,
  Shield,
  Network,
  Zap,
  BookOpen,
  ArrowRight,
  Globe,
  Lock,
  Activity,
  Users,
  ChevronDown,
  Github,
  Send,
  Home,
  Sparkles,
  FileText,
} from 'lucide-react'

export const Route = createFileRoute('/x/')({
  component: XHomePage,
})

const features = [
  {
    icon: Server,
    title: '远程服务器管理',
    description: 'Master-Agent 架构，集中管理多台远程服务器，支持 WebSocket/HTTP/Pull 多种连接模式',
  },
  {
    icon: Network,
    title: 'Xray 入站管理',
    description: '可视化入站向导，支持 VLESS/VMess/Trojan/SS/Hysteria2，17 种协议组合一键配置',
  },
  {
    icon: Shield,
    title: 'REALITY 支持',
    description: '无需域名和证书，自动生成 X25519 密钥对，最强抗检测能力',
  },
  {
    icon: Lock,
    title: '证书管理',
    description: 'ACME 自动申请续期 TLS 证书，支持 Cloudflare/阿里云/腾讯云等 DNS 提供商',
  },
  {
    icon: Activity,
    title: '流量监控',
    description: '实时采集 Xray 流量数据，按用户/节点统计，可视化图表展示',
  },
  {
    icon: Users,
    title: '用户与套餐',
    description: '多用户管理，套餐配额控制，订阅令牌分发，流量按月重置',
  },
  {
    icon: Globe,
    title: '多格式订阅',
    description: '支持 Clash/Surge/Loon/QX/Shadowrocket/SingBox 等 12 种客户端格式',
  },
  {
    icon: Zap,
    title: '节点自动同步',
    description: '入站变更自动触发节点同步，事件总线驱动，零手动操作',
  },
]

const quickLinks = [
  { title: '快速开始', description: '5 分钟部署妙妙屋X', href: '/x/docs/quick-start', icon: Zap },
  { title: '安装部署', description: 'Docker / 二进制安装', href: '/x/docs/install-docker', icon: Server },
  { title: '协议参考', description: '17 种协议组合详解', href: '/x/docs/protocol-matrix', icon: Network },
  { title: '完整文档', description: '查看所有文档', href: '/x/docs', icon: BookOpen },
]

const comparisonRows = [
  { feature: '订阅管理', mmw: true, mmwx: true },
  { feature: '多客户端格式（12+）', mmw: true, mmwx: true },
  { feature: '流量监控与探针', mmw: true, mmwx: true },
  { feature: '自定义规则与模板', mmw: true, mmwx: true },
  { feature: '远程服务器管理', mmw: false, mmwx: true },
  { feature: 'Xray 入站/出站管理', mmw: false, mmwx: true },
  { feature: 'ACME 证书管理', mmw: false, mmwx: true },
  { feature: '协议连通性测试', mmw: false, mmwx: true },
]

function XHomePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-[color:rgba(241,140,110,0.22)] bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.webp"
              alt="妙妙屋X Logo"
              className="h-10 w-10 border-2 border-[color:rgba(241,140,110,0.4)] shadow-[4px_4px_0_rgba(0,0,0,0.2)]"
            />
            <span className="pixel-text text-base">
              <span className="text-primary">妙妙屋</span>
              <AnimatedX size="sm" className="ml-1" />
            </span>
          </div>
          <nav className="flex items-center gap-2 sm:gap-4">
            <Link
              to="/"
              className="pixel-button inline-flex items-center gap-2 px-3 py-2 h-9 text-sm font-semibold uppercase tracking-widest bg-background/75 text-foreground border-[color:rgba(137,110,96,0.45)] hover:bg-accent/35 hover:text-accent-foreground transition-all"
            >
              <Home className="size-4" />
              <span className="hidden sm:inline">妙妙屋</span>
            </Link>
            <Link
              to="/x/docs"
              className="pixel-button inline-flex items-center gap-2 px-3 py-2 h-9 text-sm font-semibold uppercase tracking-widest bg-background/75 text-foreground border-[color:rgba(137,110,96,0.45)] hover:bg-accent/35 hover:text-accent-foreground transition-all"
            >
              <BookOpen className="size-4" />
              <span className="hidden sm:inline">文档</span>
            </Link>
            <Link
              to="/x/docs/changelog"
              className="pixel-button inline-flex items-center gap-2 px-3 py-2 h-9 text-sm font-semibold uppercase tracking-widest bg-background/75 text-foreground border-[color:rgba(137,110,96,0.45)] hover:bg-accent/35 hover:text-accent-foreground transition-all"
            >
              <FileText className="size-4" />
              <span className="hidden sm:inline">日志</span>
            </Link>
            <a
              href="https://github.com/iluobei/miaomiaowu"
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-button inline-flex items-center gap-2 px-3 py-2 h-9 text-sm font-semibold uppercase tracking-widest bg-background/75 text-foreground border-[color:rgba(137,110,96,0.45)] hover:bg-accent/35 hover:text-accent-foreground transition-all"
            >
              <Github className="size-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href="https://t.me/miaomiaowux"
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-button inline-flex items-center justify-center h-9 w-9 px-2 py-2 bg-background/75 text-foreground border-[color:rgba(137,110,96,0.45)] hover:bg-accent/35 transition-all"
              aria-label="Telegram"
            >
              <Send className="size-4" />
            </a>
            <ThemeSwitch />
          </nav>
        </div>
      </header>

      <section className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Sparkles className="size-4" />
            妙妙屋的进阶版本
          </div>

          <h1 className="pixel-text text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            <span className="text-primary">妙妙屋</span>
            <AnimatedX size="lg" className="ml-2" />
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-foreground/90 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            多服务器 Xray 管理与订阅平台
          </p>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            Master-Agent 架构，集中管理远程服务器。可视化 Xray 入站配置，
            支持 17 种协议组合，证书自动管理，节点自动同步。
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
            <Link to="/x/docs/quick-start">
              <Button size="lg" className="pixel-button w-full sm:w-auto px-8 py-6 text-lg font-semibold">
                <Zap className="size-5 mr-2" />
                快速开始
              </Button>
            </Link>
            <Link to="/x/docs">
              <Button variant="outline" size="lg" className="pixel-button w-full sm:w-auto px-8 py-6 text-lg font-semibold">
                <BookOpen className="size-5 mr-2" />
                查看文档
              </Button>
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <div className="pixel-card p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary">17</div>
              <div className="text-sm text-muted-foreground">协议组合</div>
            </div>
            <div className="pixel-card p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary">5</div>
              <div className="text-sm text-muted-foreground">协议支持</div>
            </div>
            <div className="pixel-card p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary">12+</div>
              <div className="text-sm text-muted-foreground">客户端格式</div>
            </div>
            <div className="pixel-card p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary">4</div>
              <div className="text-sm text-muted-foreground">连接模式</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <ChevronDown className="size-6 text-primary" />
          <ChevronDown className="size-6 text-primary/60 -mt-4" />
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="pixel-text text-3xl sm:text-4xl font-bold text-primary mb-4">核心能力</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              在妙妙屋的基础上，增加完整的远程服务器管理和 Xray 配置能力
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="pixel-card group hover:scale-[1.02] hover:shadow-[6px_6px_0_rgba(217,119,87,0.25)] transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 pixel-border flex items-center justify-center mb-3 bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="size-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="pixel-text text-3xl sm:text-4xl font-bold text-primary mb-4">与妙妙屋的区别</h2>
          </div>
          <div className="overflow-x-auto pixel-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-6">功能</th>
                  <th className="text-center py-4 px-6">妙妙屋</th>
                  <th className="text-center py-4 px-6">
                    <span className="font-bold">妙妙屋<AnimatedX size="sm" /></span>
                  </th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {comparisonRows.map((row, i) => (
                  <tr key={row.feature} className={i < comparisonRows.length - 1 ? 'border-b' : ''}>
                    <td className="py-3 px-6">{row.feature}</td>
                    <td className="text-center py-3 px-6">{row.mmw ? <span className="text-primary">&#10003;</span> : '-'}</td>
                    <td className="text-center py-3 px-6"><span className="text-primary">&#10003;</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="pixel-text text-3xl sm:text-4xl font-bold text-primary mb-4">快速导航</h2>
            <p className="text-lg text-muted-foreground">从这里开始探索妙妙屋X</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((item) => (
              <Link key={item.href} to={item.href}>
                <Card className="pixel-card group hover:scale-[1.02] hover:shadow-[6px_6px_0_rgba(217,119,87,0.25)] transition-all duration-300 h-full cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 pixel-border flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="size-5 text-primary" />
                      </div>
                      <ArrowRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    <CardTitle className="text-base mt-3">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-[color:rgba(241,140,110,0.22)] bg-background/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/images/logo.webp" alt="妙妙屋X" className="h-8 w-8 border-2 border-[color:rgba(241,140,110,0.4)] shadow-[4px_4px_0_rgba(0,0,0,0.2)]" />
              <span className="pixel-text text-sm">
                <span className="text-primary">妙妙屋</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-primary to-amber-500 ml-1">X</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">妙妙屋X — 多服务器 Xray 管理与订阅平台</p>
            <div className="flex items-center gap-3">
              <a href="https://github.com/iluobei/miaomiaowu" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github className="size-4" /></a>
              <a href="https://t.me/miaomiaowux" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Send className="size-4" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
