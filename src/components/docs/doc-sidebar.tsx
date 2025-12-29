import { Link, useLocation } from '@tanstack/react-router'
import { cn } from '@/lib/utils'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'
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

export const navItems: NavItem[] = [
  {
    id: 'introduction',
    label: '简介',
    icon: Home,
    children: [
      { id: 'about', label: '关于妙妙屋', href: '/docs/about', icon: BookOpen },
      { id: 'features', label: '核心特性', href: '/docs/features', icon: Sparkles },
      { id: 'quick-start', label: '快速开始', href: '/docs/quick-start', icon: Zap },
    ],
  },
  {
    id: 'installation',
    label: '安装',
    icon: Download,
    children: [
      { id: 'direct-install', label: '直接安装', href: '/docs/install-direct', icon: Download },
      { id: 'docker-install', label: 'Docker安装', href: '/docs/install-docker', icon: Download },
      { id: 'system-requirements', label: '系统要求', href: '/docs/system-requirements', icon: Settings },
      { id: 'client-setup', label: '客户端配置', href: '/docs/client-setup', icon: Settings },
      { id: 'import-subscription', label: '导入订阅', href: '/docs/import-subscription', icon: LinkIcon },
      { id: 'update', label: '版本更新', href: '/docs/update', icon: RefreshCw, badge: '新' },
    ],
  },
  {
    id: 'user-guide',
    label: '使用手册',
    icon: BookOpen,
    children: [
      { id: 'login', label: '登录', href: '/docs/login', icon: LogIn, badge: '新' },
      { id: 'traffic-info', label: '流量信息', href: '/docs/traffic-info', icon: Activity },
      { id: 'subscription-link', label: '订阅链接', href: '/docs/subscription-link', icon: LinkIcon },
      { id: 'settings', label: '用户设置', href: '/docs/settings', icon: UserCog, badge: '新' },
    ],
  },
  {
    id: 'admin-guide',
    label: '管理员功能',
    icon: Wrench,
    badge: '管理员',
    children: [
      { id: 'generator', label: '生成订阅', href: '/docs/generator', icon: Zap },
      { id: 'edit-nodes', label: '节点与代理组编辑', href: '/docs/edit-nodes', icon: GripVertical, badge: '新' },
      { id: 'nodes', label: '节点管理', href: '/docs/nodes', icon: Network },
      { id: 'probe', label: '探针管理', href: '/docs/probe', icon: Radar },
      { id: 'subscribe-files', label: '订阅文件', href: '/docs/subscribe-files', icon: Database },
      { id: 'external-subscriptions', label: '外部订阅', href: '/docs/external-subscriptions', icon: ExternalLink, badge: '新' },
      { id: 'proxy-providers', label: '代理集合', href: '/docs/proxy-providers', icon: Layers, badge: '新' },
      { id: 'users', label: '用户管理', href: '/docs/users', icon: Users },
      { id: 'templates', label: '模板管理', href: '/docs/templates', icon: LayoutTemplate, badge: '新' },
      { id: 'custom-rules', label: '自定义规则', href: '/docs/custom-rules', icon: FileCode },
      { id: 'system-settings', label: '系统设置', href: '/docs/system-settings', icon: Settings },
    ],
  },
  {
    id: 'advanced',
    label: '高级技巧',
    icon: Sparkles,
    children: [
      { id: 'chain-proxy', label: '链式代理', href: '/docs/chain-proxy', icon: Network },
      { id: 'proxy-providers-advanced', label: '代理集合', href: '/docs/proxy-providers-advanced', icon: Layers, badge: '新' },
    ],
  },
  {
    id: 'help',
    label: '帮助',
    icon: HelpCircle,
    children: [
      { id: 'faq', label: '常见问题', href: '/docs/faq', icon: HelpCircle },
    ],
  },
]

interface DocSidebarProps {
  className?: string
}

export function DocSidebar({ className }: DocSidebarProps) {
  const location = useLocation()
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  // Auto-expand the parent of the current page
  useEffect(() => {
    const currentPath = location.pathname
    navItems.forEach((item) => {
      if (item.children?.some((child) => child.href === currentPath)) {
        setExpandedItems((prev) => (prev.includes(item.id) ? prev : [...prev, item.id]))
      }
    })
  }, [location.pathname])

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
