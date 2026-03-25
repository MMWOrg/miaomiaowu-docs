import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Github, Zap, BookOpen, Send, ExternalLink, Download, Sparkles, FileText, ChevronDown } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { ThemeSwitch } from '@/components/theme-switch'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

export function Hero() {
  const [xPopoverOpen, setXPopoverOpen] = useState(false)

  return (
    <section className="relative min-h-[85vh] flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-[color:rgba(241,140,110,0.22)] bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.webp"
              alt="妙妙屋 Logo"
              className="h-10 w-10 border-2 border-[color:rgba(241,140,110,0.4)] shadow-[4px_4px_0_rgba(0,0,0,0.2)]"
            />
            <span className="pixel-text text-primary text-base hidden sm:inline">妙妙屋</span>
          </div>
          <nav className="flex items-center gap-2 sm:gap-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    to="/docs/install-docker"
                    className="pixel-button inline-flex items-center justify-center h-9 w-9 sm:w-auto sm:px-3 sm:gap-2 py-2 text-sm font-semibold uppercase tracking-widest bg-background/75 text-foreground border-[color:rgba(137,110,96,0.45)] hover:bg-accent/35 hover:text-accent-foreground transition-all"
                  >
                    <Download className="size-4" />
                    <span className="hidden sm:inline">安装</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="sm:hidden">安装部署</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    to="/changelog"
                    className="pixel-button inline-flex items-center justify-center h-9 w-9 sm:w-auto sm:px-3 sm:gap-2 py-2 text-sm font-semibold uppercase tracking-widest bg-background/75 text-foreground border-[color:rgba(137,110,96,0.45)] hover:bg-accent/35 hover:text-accent-foreground transition-all"
                  >
                    <FileText className="size-4" />
                    <span className="hidden sm:inline">日志</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="sm:hidden">更新日志</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Link
              to="/docs"
              className="pixel-button inline-flex items-center gap-2 px-3 py-2 h-9 text-sm font-semibold uppercase tracking-widest bg-background/75 text-foreground border-[color:rgba(137,110,96,0.45)] hover:bg-accent/35 hover:text-accent-foreground transition-all"
            >
              <BookOpen className="size-4" />
              <span className="hidden sm:inline">文档</span>
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
              className="pixel-button inline-flex items-center justify-center h-9 w-9 px-2 py-2 bg-background/75 text-foreground border-[color:rgba(137,110,96,0.45)] hover:bg-accent/35 transition-all relative"
              aria-label="Telegram 交流群组"
            >
              <Send className="size-4" />
            </a>
            {/* 妙妙屋X Button with animated border */}
            <Popover open={xPopoverOpen} onOpenChange={setXPopoverOpen}>
              <PopoverTrigger asChild>
                <button
                  className="relative h-9 px-3 text-sm group bg-background hover:bg-accent/35 transition-all animate-border-glow"
                  style={{
                    border: '2px solid transparent',
                    backgroundImage: 'linear-gradient(var(--background), var(--background)), linear-gradient(90deg, #f97316, var(--primary), #f59e0b, var(--primary), #f97316)',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box',
                    backgroundSize: '100% 100%, 200% 100%',
                    animation: 'gradient-border 3s linear infinite',
                  }}
                >
                  <span className="flex items-center gap-1.5 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-primary to-amber-500 font-semibold">
                    <Sparkles className="size-4 text-primary animate-pulse" />
                    <span className="hidden sm:inline">妙妙屋 X</span>
                  </span>
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-4 text-center" align="center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-lg font-bold">妙妙屋</span>
                  <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-primary to-amber-500">【 X 】</span>
                </div>
                <p className="text-sm text-muted-foreground">即将发布，敬请期待</p>
                <div className="mt-3 flex justify-center">
                  <Sparkles className="size-5 text-primary animate-bounce" />
                </div>
              </PopoverContent>
            </Popover>
            <ThemeSwitch />
          </nav>
        </div>
      </header>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h1 className="pixel-text text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            妙妙屋
          </h1>

          {/* Slogan */}
          <p className="text-xl sm:text-2xl md:text-3xl text-foreground/90 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            简单高效的代理订阅管理平台
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            支持 12 种主流代理客户端，一键生成订阅链接。
            节点管理、流量统计、链式代理、自定义规则，应有尽有。
          </p>

          {/* CTA Buttons - Primary Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Link to="/docs/quick-start">
              <Button size="lg" className="pixel-button w-full sm:w-auto px-8 py-6 text-lg font-semibold">
                <Zap className="size-5 mr-2" />
                快速开始
              </Button>
            </Link>
            <a
              href="https://demo.miaomiaowu.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="pixel-button w-full sm:w-auto px-8 py-6 text-lg font-semibold"
              >
                <ExternalLink className="size-5 mr-2" />
                在线演示
              </Button>
            </a>
            <a
              href="https://github.com/iluobei/miaomiaowu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="pixel-button w-full sm:w-auto px-8 py-6 text-lg font-semibold"
              >
                <Github className="size-5 mr-2" />
                查看源码
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
            <div className="pixel-card p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary">12+</div>
              <div className="text-sm text-muted-foreground">支持客户端</div>
            </div>
            <div className="pixel-card p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">代理协议</div>
            </div>
            <div className="pixel-card p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">开源免费</div>
            </div>
            <div className="pixel-card p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary">0</div>
              <div className="text-sm text-muted-foreground">外部依赖</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <ChevronDown className="size-6 text-primary" />
        <ChevronDown className="size-6 text-primary/60 -mt-4" />
      </div>

      {/* CSS for gradient animation */}
      <style>{`
        @keyframes gradient-border {
          0% { background-position: 100% 100%, 0% 50%; }
          50% { background-position: 100% 100%, 100% 50%; }
          100% { background-position: 100% 100%, 0% 50%; }
        }
      `}</style>
    </section>
  )
}
