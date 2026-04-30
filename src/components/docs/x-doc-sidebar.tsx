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
  Network,
  Server,
  Wrench,
  Sparkles,
  Shield,
  Package,
  LayoutTemplate,
  Database,
  FileCode,
  Globe,
  Radio,
  RefreshCw,
  Layers,
  Lock,
  Route,
  GraduationCap,
} from 'lucide-react'

export type XNavItem = {
  id: string
  label: string
  href?: string
  icon: React.ComponentType<{ className?: string }>
  children?: XNavItem[]
  badge?: string
}

export const xNavItems: XNavItem[] = [
  {
    id: 'introduction',
    label: '简介',
    icon: Home,
    children: [
      { id: 'about', label: '关于妙妙屋X', href: '/x/docs/about', icon: BookOpen },
      { id: 'features', label: '核心特性', href: '/x/docs/features', icon: Sparkles },
      { id: 'quick-start', label: '快速开始', href: '/x/docs/quick-start', icon: Zap },
      { id: 'tutorial', label: '使用教程', href: '/x/docs/tutorial', icon: GraduationCap },
    ],
  },
  {
    id: 'installation',
    label: '安装部署',
    icon: Download,
    children: [
      { id: 'install-direct', label: '直接安装', href: '/x/docs/install-direct', icon: Download },
      { id: 'install-docker', label: 'Docker 安装', href: '/x/docs/install-docker', icon: Download },
      { id: 'install-agent', label: 'Agent 部署', href: '/x/docs/install-agent', icon: Radio, badge: '新' },
      { id: 'system-requirements', label: '系统要求', href: '/x/docs/system-requirements', icon: Settings },
      { id: 'update', label: '版本更新', href: '/x/docs/update', icon: RefreshCw },
    ],
  },
  {
    id: 'server-manage',
    label: '服务管理',
    icon: Server,
    badge: '核心',
    children: [
      { id: 'remote-servers', label: '远程服务器', href: '/x/docs/remote-servers', icon: Globe },
      { id: 'xray-service', label: 'Xray 服务管理', href: '/x/docs/xray-service', icon: Server },
      { id: 'xray-inbounds', label: 'Xray 入站管理', href: '/x/docs/xray-inbounds', icon: Network },
      { id: 'xray-outbounds', label: 'Xray 出站管理', href: '/x/docs/xray-outbounds', icon: Route },
      { id: 'xray-routing', label: 'Xray 路由管理', href: '/x/docs/xray-routing', icon: Route, badge: '新' },
      { id: 'xray-system-config', label: 'Xray 系统配置', href: '/x/docs/xray-system-config', icon: Settings },
    ],
  },
  {
    id: 'protocol-ref',
    label: '协议参考',
    icon: Layers,
    children: [
      { id: 'protocol-matrix', label: '协议矩阵', href: '/x/docs/protocol-matrix', icon: Layers },
      { id: 'protocol-vless', label: 'VLESS', href: '/x/docs/protocol-vless', icon: Lock },
      { id: 'protocol-vmess', label: 'VMess', href: '/x/docs/protocol-vmess', icon: Lock },
      { id: 'protocol-trojan', label: 'Trojan', href: '/x/docs/protocol-trojan', icon: Lock },
      { id: 'protocol-shadowsocks', label: 'Shadowsocks', href: '/x/docs/protocol-shadowsocks', icon: Lock },
      { id: 'protocol-hysteria2', label: 'Hysteria2', href: '/x/docs/protocol-hysteria2', icon: Lock },
    ],
  },
  {
    id: 'nodes-subscription',
    label: '节点与订阅',
    icon: Network,
    children: [
      { id: 'nodes', label: '节点管理', href: '/x/docs/nodes', icon: Network },
      { id: 'generator', label: '生成订阅', href: '/x/docs/generator', icon: Zap },
      { id: 'subscribe-files', label: '订阅文件', href: '/x/docs/subscribe-files', icon: Database },
      { id: 'templates', label: '模板管理', href: '/x/docs/templates', icon: LayoutTemplate },
    ],
  },
  {
    id: 'certificates',
    label: '证书管理',
    icon: Shield,
    children: [
      { id: 'certificates', label: '证书管理', href: '/x/docs/certificates', icon: Shield },
    ],
  },
  {
    id: 'users-packages',
    label: '用户与套餐',
    icon: Users,
    children: [
      { id: 'users', label: '用户管理', href: '/x/docs/users', icon: Users },
      { id: 'packages', label: '套餐管理', href: '/x/docs/packages', icon: Package },
    ],
  },
  {
    id: 'system',
    label: '系统配置',
    icon: Wrench,
    children: [
      { id: 'system-settings', label: '系统设置', href: '/x/docs/system-settings', icon: Settings },
      { id: 'custom-rules', label: '自定义规则', href: '/x/docs/custom-rules', icon: FileCode },
    ],
  },
  {
    id: 'help',
    label: '帮助',
    icon: HelpCircle,
    children: [
      { id: 'faq', label: '常见问题', href: '/x/docs/faq', icon: HelpCircle },
      { id: 'changelog', label: '更新日志', href: '/x/docs/changelog', icon: RefreshCw },
    ],
  },
]

interface XDocSidebarProps {
  className?: string
}

export function XDocSidebar({ className }: XDocSidebarProps) {
  const location = useLocation()
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  useEffect(() => {
    const currentPath = location.pathname
    xNavItems.forEach((item) => {
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
      {xNavItems.map((item) => (
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
                  to={child.href || '/x/docs'}
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
