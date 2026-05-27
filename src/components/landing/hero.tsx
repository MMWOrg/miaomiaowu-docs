import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Github, Zap, BookOpen, Send, ExternalLink, Download, FileText, ChevronDown } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { ThemeSwitch } from '@/components/theme-switch'
import { LanguageSwitch } from '@/components/language-switch'
import { AnimatedX } from '@/components/animated-x'
import { useTranslation } from 'react-i18next'

export function Hero() {
  const { t } = useTranslation('landing')

  return (
    <section className="relative min-h-[85vh] flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-[color:rgba(241,140,110,0.22)] bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.webp"
              alt={t('hero.logoAlt')}
              className="h-10 w-10 border-2 border-[color:rgba(241,140,110,0.4)] shadow-[4px_4px_0_rgba(0,0,0,0.2)]"
            />
            <span className="pixel-text text-primary text-base hidden sm:inline">{t('hero.title')}</span>
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
                    <span className="hidden sm:inline">{t('hero.navInstall')}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="sm:hidden">{t('hero.navInstallTooltip')}</TooltipContent>
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
                    <span className="hidden sm:inline">{t('hero.navChangelog')}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="sm:hidden">{t('hero.navChangelogTooltip')}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Link
              to="/docs"
              className="pixel-button inline-flex items-center gap-2 px-3 py-2 h-9 text-sm font-semibold uppercase tracking-widest bg-background/75 text-foreground border-[color:rgba(137,110,96,0.45)] hover:bg-accent/35 hover:text-accent-foreground transition-all"
            >
              <BookOpen className="size-4" />
              <span className="hidden sm:inline">{t('hero.navDocs')}</span>
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
              aria-label={t('hero.navTelegram')}
            >
              <Send className="size-4" />
            </a>
            {/* 妙妙屋X Button with animated border */}
            <Link
              to="/x"
              className="relative h-9 px-3 text-sm inline-flex items-center bg-background hover:bg-accent/35 transition-all"
              style={{
                border: '2px solid transparent',
                backgroundImage: 'linear-gradient(var(--background), var(--background)), linear-gradient(90deg, #f97316, var(--primary), #f59e0b, var(--primary), #f97316)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
                backgroundSize: '100% 100%, 200% 100%',
                animation: 'gradient-border 3s linear infinite',
              }}
            >
              <span className="flex items-center gap-1.5 font-semibold">
                <span className="hidden sm:inline text-primary">{t('hero.title')}</span>
                <AnimatedX size="sm" />
              </span>
            </Link>
            <LanguageSwitch />
            <ThemeSwitch />
          </nav>
        </div>
      </header>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h1 className="pixel-text text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {t('hero.title')}
          </h1>

          {/* Slogan */}
          <p className="text-xl sm:text-2xl md:text-3xl text-foreground/90 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            {t('hero.slogan')}
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            {t('hero.description')}
          </p>

          {/* CTA Buttons - Primary Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Link to="/docs/quick-start">
              <Button size="lg" className="pixel-button w-full sm:w-auto px-8 py-6 text-lg font-semibold">
                <Zap className="size-5 mr-2" />
                {t('hero.quickStart')}
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
                {t('hero.liveDemo')}
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
                {t('hero.viewSource')}
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
            <div className="pixel-card p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary">12+</div>
              <div className="text-sm text-muted-foreground">{t('hero.stats.clients')}</div>
            </div>
            <div className="pixel-card p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">{t('hero.stats.protocols')}</div>
            </div>
            <div className="pixel-card p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">{t('hero.stats.openSource')}</div>
            </div>
            <div className="pixel-card p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary">0</div>
              <div className="text-sm text-muted-foreground">{t('hero.stats.dependencies')}</div>
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
