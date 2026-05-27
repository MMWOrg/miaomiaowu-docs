import { Link, useLocation } from '@tanstack/react-router'
import { cn } from '@/lib/utils'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { useState, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Home,
  BookOpen,
  Download,
  Settings,
  Users,
  Zap,
  HelpCircle,
  Activity,
  Link as LinkIcon,
  Network,
  Radar,
  Database,
  FileCode,
  Wrench,
  Sparkles,
  LogIn,
  LayoutTemplate,
  UserCog,
  GripVertical,
  ExternalLink,
  Layers,
  RefreshCw,
} from 'lucide-react'

export type NavItem = {
  id: string
  label: string
  href?: string
  icon: React.ComponentType<{ className?: string }>
  children?: NavItem[]
  badge?: string
}

type NavItemDef = {
  id: string
  icon: React.ComponentType<{ className?: string }>
  href?: string
  badgeKey?: string
  children?: NavItemDef[]
}

const navStructure: NavItemDef[] = [
  {
    id: 'introduction',
    icon: Home,
    children: [
      { id: 'about', href: '/docs/about', icon: BookOpen },
      { id: 'features', href: '/docs/features', icon: Sparkles },
      { id: 'quick-start', href: '/docs/quick-start', icon: Zap },
    ],
  },
  {
    id: 'installation',
    icon: Download,
    children: [
      { id: 'direct-install', href: '/docs/install-direct', icon: Download },
      { id: 'docker-install', href: '/docs/install-docker', icon: Download },
      { id: 'system-requirements', href: '/docs/system-requirements', icon: Settings },
      { id: 'client-setup', href: '/docs/client-setup', icon: Settings },
      { id: 'import-subscription', href: '/docs/import-subscription', icon: LinkIcon },
      { id: 'update', href: '/docs/update', icon: RefreshCw, badgeKey: 'new' },
    ],
  },
  {
    id: 'user-guide',
    icon: BookOpen,
    children: [
      { id: 'login', href: '/docs/login', icon: LogIn, badgeKey: 'new' },
      { id: 'traffic-info', href: '/docs/traffic-info', icon: Activity },
      { id: 'subscription-link', href: '/docs/subscription-link', icon: LinkIcon },
      { id: 'settings', href: '/docs/settings', icon: UserCog, badgeKey: 'new' },
    ],
  },
  {
    id: 'admin-guide',
    icon: Wrench,
    badgeKey: 'admin',
    children: [
      { id: 'generator', href: '/docs/generator', icon: Zap },
      { id: 'edit-nodes', href: '/docs/edit-nodes', icon: GripVertical, badgeKey: 'new' },
      { id: 'nodes', href: '/docs/nodes', icon: Network },
      { id: 'node-speedtest', href: '/docs/node-speedtest', icon: Zap, badgeKey: 'new' },
      { id: 'probe', href: '/docs/probe', icon: Radar },
      { id: 'subscribe-files', href: '/docs/subscribe-files', icon: Database },
      { id: 'external-subscriptions', href: '/docs/external-subscriptions', icon: ExternalLink, badgeKey: 'new' },
      { id: 'proxy-providers', href: '/docs/proxy-providers', icon: Layers, badgeKey: 'new' },
      { id: 'users', href: '/docs/users', icon: Users },
      { id: 'templates', href: '/docs/templates', icon: LayoutTemplate },
      { id: 'templatesV3', href: '/docs/templatesV3', icon: LayoutTemplate, badgeKey: 'new' },
      { id: 'custom-rules', href: '/docs/custom-rules', icon: FileCode },
      { id: 'system-settings', href: '/docs/system-settings', icon: Settings },
    ],
  },
  {
    id: 'advanced',
    icon: Sparkles,
    children: [
      { id: 'chain-proxy', href: '/docs/chain-proxy', icon: Network },
      { id: 'proxy-providers-advanced', href: '/docs/proxy-providers-advanced', icon: Layers, badgeKey: 'new' },
    ],
  },
  {
    id: 'help',
    icon: HelpCircle,
    children: [
      { id: 'faq', href: '/docs/faq', icon: HelpCircle },
    ],
  },
]

export { navStructure }

function translateNav(structure: NavItemDef[], t: (key: string) => string): NavItem[] {
  return structure.map((item) => ({
    id: item.id,
    label: t(`mmw.${item.id}`),
    icon: item.icon,
    href: item.href,
    badge: item.badgeKey ? t(`badges.${item.badgeKey}`) : undefined,
    children: item.children ? translateNav(item.children, t) : undefined,
  }))
}

export function useDocNavItems(): NavItem[] {
  const { t } = useTranslation('sidebar')
  return useMemo(() => translateNav(navStructure, t), [t])
}

interface DocSidebarProps {
  className?: string
}

export function DocSidebar({ className }: DocSidebarProps) {
  const location = useLocation()
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const navItems = useDocNavItems()

  useEffect(() => {
    const currentPath = location.pathname
    navItems.forEach((item) => {
      if (item.children?.some((child) => child.href === currentPath)) {
        setExpandedItems((prev) => (prev.includes(item.id) ? prev : [...prev, item.id]))
      }
    })
  }, [location.pathname, navItems])

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const isActive = (href?: string) => {
    if (!href) return false
    return location.pathname === href
  }

  return (
    <nav className={cn('space-y-1', className)}>
      {navItems.map((item) => (
        <div key={item.id}>
          <button
            onClick={() => toggleExpand(item.id)}
            className={cn(
              'flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors',
              'hover:bg-accent hover:text-accent-foreground',
              expandedItems.includes(item.id) && 'bg-accent/50'
            )}
          >
            <span className='flex items-center gap-2'>
              <item.icon className='size-4' />
              {item.label}
              {item.badge && (
                <span className='rounded-full bg-destructive/10 px-2 py-0.5 text-xs text-destructive'>
                  {item.badge}
                </span>
              )}
            </span>
            {expandedItems.includes(item.id) ? (
              <ChevronDown className='size-4' />
            ) : (
              <ChevronRight className='size-4' />
            )}
          </button>

          {expandedItems.includes(item.id) && item.children && (
            <div className='ml-4 mt-1 space-y-1 border-l border-border/50 pl-2'>
              {item.children.map((child) => (
                <Link
                  key={child.id}
                  to={child.href || '/docs'}
                  className={cn(
                    'flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors',
                    'hover:bg-accent hover:text-accent-foreground',
                    isActive(child.href) && 'bg-primary/10 text-primary font-medium'
                  )}
                >
                  <child.icon className='size-4' />
                  {child.label}
                  {child.badge && (
                    <span className='rounded-full bg-primary/10 px-1.5 py-0.5 text-xs text-primary'>
                      {child.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}
