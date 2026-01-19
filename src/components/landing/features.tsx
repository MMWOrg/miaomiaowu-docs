import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Network,
  Users,
  Zap,
  Link2,
  BarChart3,
  FileCode,
  Shield,
  Radar,
  RefreshCw,
  Globe,
  Settings,
  Layers,
} from 'lucide-react'

const features = [
  {
    icon: Globe,
    title: '多客户端支持',
    description: '支持 Clash、Surge、Shadowrocket、Loon、QuantumultX 等 12 种主流代理客户端',
  },
  {
    icon: Network,
    title: '节点管理',
    description: '支持 SS、SSR、VMess、VLess、Trojan、Hysteria2 等多种协议，批量导入导出',
  },
  {
    icon: Zap,
    title: '订阅生成',
    description: '一键生成订阅链接，支持自定义规则、节点筛选、排序等高级功能',
  },
  {
    icon: Link2,
    title: '链式代理',
    description: '支持多层代理转发，实现中转加速，提升连接质量和隐私保护',
  },
  {
    icon: BarChart3,
    title: '流量��计',
    description: '集成探针系统，精确统计各节点流量使用情况，可视化图表展示',
  },
  {
    icon: FileCode,
    title: '自定义规则',
    description: '支持自定义 DNS、分流规则、规则集，灵活配置代理策略',
  },
  {
    icon: Users,
    title: '多用户管理',
    description: '支持多用户系统，每个用户可分配独立的订阅配置和节点权限',
  },
  {
    icon: RefreshCw,
    title: '外部订阅',
    description: '支持导入机场订阅链接，自动同步节点，定时更新保持最新',
  },
  {
    icon: Layers,
    title: '模板系统',
    description: '内置多种配置模板，支持自定义模板，快速生成专业级订阅配置',
  },
  {
    icon: Shield,
    title: '安全可靠',
    description: '数据本地存储，支持备份恢复，无第三方依赖，完全掌控你的数据',
  },
  {
    icon: Radar,
    title: '探针监控',
    description: '实时监控节点状态和流量，支持多探针聚合，全面掌握网络情况',
  },
  {
    icon: Settings,
    title: '灵活配置',
    description: 'Docker 一键部署，支持多种部署方式，丰富的系统设置选项',
  },
]

export function Features() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="pixel-text text-3xl sm:text-4xl font-bold text-primary mb-4">
            核心功能
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            妙妙屋提供完整的代理订阅管理解决方案，满足各种使用场景
          </p>
        </div>

        {/* Features Grid */}
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
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
