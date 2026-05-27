import { Github, Send, Heart } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation('landing')

  return (
    <footer className="border-t border-[color:rgba(241,140,110,0.22)] bg-background/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo.webp"
                alt={t('common:brand')}
                className="h-10 w-10 border-2 border-[color:rgba(241,140,110,0.4)] shadow-[4px_4px_0_rgba(0,0,0,0.2)]"
              />
              <span className="pixel-text text-primary text-lg">{t('common:brand')}</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md mb-4">
              {t('footer.brandDesc')}
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/iluobei/miaomiaowu"
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
            <h3 className="font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/docs/quick-start"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('footer.quickStart')}
                </Link>
              </li>
              <li>
                <Link
                  to="/docs/install-docker"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('footer.dockerInstall')}
                </Link>
              </li>
              <li>
                <Link
                  to="/docs/nodes"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('footer.nodeManagement')}
                </Link>
              </li>
              <li>
                <Link
                  to="/docs/generator"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('footer.generateSub')}
                </Link>
              </li>
            </ul>
          </div>

          {/* More */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.more')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/docs/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('footer.about')}
                </Link>
              </li>
              <li>
                <Link
                  to="/docs/faq"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('footer.faq')}
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/iluobei/miaomiaowu/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('footer.feedback')}
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
              href="https://github.com/iluobei"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              iluobei
            </a>
            · MIT License
          </p>
        </div>
      </div>
    </footer>
  )
}
