import { Github, Send, Heart } from 'lucide-react'
import { Link } from '@tanstack/react-router'

export function Footer() {
  return (
    <footer className="border-t border-[color:rgba(241,140,110,0.22)] bg-background/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo.webp"
                alt="妙妙屋"
                className="h-10 w-10 border-2 border-[color:rgba(241,140,110,0.4)] shadow-[4px_4px_0_rgba(0,0,0,0.2)]"
              />
              <span className="pixel-text text-primary text-lg">妙妙屋</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md mb-4">
              简单高效的代理订阅管理平台，支持 12 种主流代理客户端，一键生成订阅链接。
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Jimleerx/miaomiaowu"
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-button inline-flex items-center justify-center h-9 w-9 px-2 py-2 bg-background/75 text-foreground border-[color:rgba(137,110,96,0.45)] hover:bg-accent/35 transition-all"
                aria-label="GitHub"
              >
                <Github className="size-4" />
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
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/docs/quick-start"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  快速开始
                </Link>
              </li>
              <li>
                <Link
                  to="/docs/install-docker"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Docker 安装
                </Link>
              </li>
              <li>
                <Link
                  to="/docs/nodes"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  节点管理
                </Link>
              </li>
              <li>
                <Link
                  to="/docs/generator"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  生成订阅
                </Link>
              </li>
            </ul>
          </div>

          {/* More */}
          <div>
            <h3 className="font-semibold mb-4">更多</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/docs/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  关于妙妙屋
                </Link>
              </li>
              <li>
                <Link
                  to="/docs/faq"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  常见问题
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/Jimleerx/miaomiaowu/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  问题反馈
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[color:rgba(241,140,110,0.15)]">
          <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-1">
            Made with <Heart className="size-3 text-primary fill-primary" /> by
            <a
              href="https://github.com/Jimleerx"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Jimleerx
            </a>
            · MIT License
          </p>
        </div>
      </div>
    </footer>
  )
}
