import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ThemeSwitch } from '@/components/theme-switch'
import { LanguageSwitch } from '@/components/language-switch'
import { useTranslation } from 'react-i18next'
import {
  FileText,
  ExternalLink,
  Loader2,
  AlertCircle,
  Sparkles,
  Wrench,
  ChevronDown,
  ArrowLeft,
  Github,
  BookOpen,
} from 'lucide-react'

export const Route = createFileRoute('/changelog')({
  component: ChangelogPage,
})

interface Release {
  tag_name: string
  name: string
  body: string
  published_at: string
  html_url: string
}

interface ChangelogItem {
  type: 'feature' | 'fix' | 'other'
  text: string
}

function parseChangelog(body: string): ChangelogItem[] {
  const items: ChangelogItem[] = []
  const lines = body.split('\n')

  for (const line of lines) {
    const trimmed = line.trim()
    if (trimmed.startsWith('- 🌈') || trimmed.startsWith('🌈')) {
      items.push({
        type: 'feature',
        text: trimmed.replace(/^-?\s*🌈\s*/, '').trim(),
      })
    } else if (
      trimmed.startsWith('- 🛠️') ||
      trimmed.startsWith('🛠️') ||
      trimmed.startsWith('- 🛠')
    ) {
      items.push({
        type: 'fix',
        text: trimmed
          .replace(/^-?\s*🛠️?\s*/, '')
          .replace(/^fix:?\s*/i, '')
          .trim(),
      })
    }
  }

  return items
}

function ChangelogPage() {
  const { t, i18n } = useTranslation('landing')
  const [releases, setReleases] = useState<Release[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showAll, setShowAll] = useState(false)

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    return date.toLocaleDateString(i18n.language === 'zh' ? 'zh-CN' : 'en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
  }

  const getRelativeTime = (dateString: string): string => {
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

    if (diffDays === 0) return t('changelog.relativeTime.today')
    if (diffDays === 1) return t('changelog.relativeTime.yesterday')
    if (diffDays < 7) return t('changelog.relativeTime.daysAgo', { count: diffDays })
    if (diffDays < 30) return t('changelog.relativeTime.weeksAgo', { count: Math.floor(diffDays / 7) })
    if (diffDays < 365) return t('changelog.relativeTime.monthsAgo', { count: Math.floor(diffDays / 30) })
    return t('changelog.relativeTime.yearsAgo', { count: Math.floor(diffDays / 365) })
  }

  useEffect(() => {
    const fetchReleases = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch(
          'https://api.github.com/repos/iluobei/miaomiaowu/releases'
        )
        if (!response.ok) {
          throw new Error('Failed to fetch releases')
        }
        const data = await response.json()
        setReleases(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    fetchReleases()
  }, [])

  const displayedReleases = showAll ? releases : releases.slice(0, 10)

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-[color:rgba(241,140,110,0.22)] bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="size-4" />
              <span className="hidden sm:inline">{t('changelog.backToHome')}</span>
            </Link>
          </div>
          <nav className="flex items-center gap-2 sm:gap-4">
            <Link
              to="/docs"
              className="pixel-button inline-flex items-center gap-2 px-3 py-2 h-9 text-sm font-semibold uppercase tracking-widest bg-background/75 text-foreground border-[color:rgba(137,110,96,0.45)] hover:bg-accent/35 hover:text-accent-foreground transition-all"
            >
              <BookOpen className="size-4" />
              <span className="hidden sm:inline">{t('changelog.docs')}</span>
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
            <LanguageSwitch />
            <ThemeSwitch />
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FileText className="size-10 text-primary" />
            <h1 className="pixel-text text-3xl sm:text-4xl font-bold text-primary">
              {t('changelog.title')}
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            {t('changelog.subtitle')}
          </p>
          <a
            href="https://github.com/iluobei/miaomiaowu/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            {t('changelog.viewOnGithub')}
            <ExternalLink className="size-3" />
          </a>
        </div>

        {loading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="size-10 animate-spin text-primary" />
          </div>
        )}

        {error && (
          <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
            <AlertCircle className="size-10 mb-4" />
            <p className="text-lg mb-2">{t('changelog.loadFailed')}</p>
            <p className="text-sm mb-6">{error}</p>
            <Button variant="outline" onClick={() => window.location.reload()}>
              {t('changelog.retry')}
            </Button>
          </div>
        )}

        {!loading && !error && (
          <div className="relative">
            <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-border" />

            <div className="space-y-8">
              {displayedReleases.map((release, index) => {
                const changes = parseChangelog(release.body)
                const features = changes.filter((c) => c.type === 'feature')
                const fixes = changes.filter((c) => c.type === 'fix')
                const isLatest = index === 0

                return (
                  <div
                    key={release.tag_name}
                    className="relative pl-12 sm:pl-16"
                  >
                    <div
                      className={`absolute left-2 sm:left-4 top-1 w-5 h-5 rounded-full border-2 ${
                        isLatest
                          ? 'bg-primary border-primary'
                          : 'bg-background border-muted-foreground/40'
                      }`}
                    >
                      {isLatest && (
                        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
                      )}
                    </div>

                    <div
                      className={`pixel-card p-6 ${isLatest ? 'border-primary/50' : ''}`}
                    >
                      <div className="flex items-center gap-3 flex-wrap mb-4">
                        <Badge
                          variant={isLatest ? 'default' : 'secondary'}
                          className={`font-mono text-base px-3 py-1 ${isLatest ? 'bg-primary' : ''}`}
                        >
                          {release.tag_name}
                        </Badge>
                        {isLatest && (
                          <Badge
                            variant="outline"
                            className="text-green-600 border-green-600/50 bg-green-500/10"
                          >
                            {t('changelog.latest')}
                          </Badge>
                        )}
                        <div className="flex-1" />
                        <div className="text-sm text-muted-foreground">
                          <span>{formatDate(release.published_at)}</span>
                          <span className="mx-2">·</span>
                          <span className="text-muted-foreground/60">
                            {getRelativeTime(release.published_at)}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {features.length > 0 && (
                          <div>
                            <h3 className="text-sm font-semibold text-amber-600 dark:text-amber-400 mb-2 flex items-center gap-2">
                              <Sparkles className="size-4" />
                              {t('changelog.newFeatures')}
                            </h3>
                            <ul className="space-y-2">
                              {features.map((item, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-3 text-foreground/90"
                                >
                                  <span className="text-amber-500 mt-1">•</span>
                                  <span>{item.text}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {fixes.length > 0 && (
                          <div>
                            <h3 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-2">
                              <Wrench className="size-4" />
                              {t('changelog.bugFixes')}
                            </h3>
                            <ul className="space-y-2">
                              {fixes.map((item, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-3 text-muted-foreground"
                                >
                                  <span className="text-blue-500 mt-1">•</span>
                                  <span>{item.text}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {features.length === 0 && fixes.length === 0 && (
                          <p className="text-muted-foreground italic">
                            {t('changelog.viewDetails')}{' '}
                            <a
                              href={release.html_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              GitHub Release
                            </a>
                          </p>
                        )}
                      </div>

                      <div className="mt-4 pt-4 border-t border-border/50">
                        <a
                          href={release.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {t('changelog.viewFullNotes')}
                          <ExternalLink className="size-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {!showAll && releases.length > 10 && (
              <div className="mt-10 text-center">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setShowAll(true)}
                  className="pixel-button gap-2"
                >
                  <ChevronDown className="size-5" />
                  {t('changelog.loadMore', { count: releases.length - 10 })}
                </Button>
              </div>
            )}

            <div className="relative pl-12 sm:pl-16 mt-8">
              <div className="absolute left-2 sm:left-4 top-1 w-5 h-5 rounded-full bg-muted border-2 border-muted-foreground/20" />
              <p className="text-sm text-muted-foreground italic py-2">
                {t('changelog.historyStart')}
              </p>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t py-8 mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center text-sm text-muted-foreground">
          <p>
            {t('changelog.footerDesc')} ·{' '}
            <a
              href="https://github.com/iluobei/miaomiaowu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              GitHub
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
