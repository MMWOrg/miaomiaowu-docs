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
import { useTranslation } from 'react-i18next'

export function Features() {
  const { t } = useTranslation('landing')

  const features = [
    {
      icon: Globe,
      title: t('features.items.multiClient.title'),
      description: t('features.items.multiClient.desc'),
    },
    {
      icon: Network,
      title: t('features.items.nodeManagement.title'),
      description: t('features.items.nodeManagement.desc'),
    },
    {
      icon: Zap,
      title: t('features.items.subscriptionGen.title'),
      description: t('features.items.subscriptionGen.desc'),
    },
    {
      icon: Link2,
      title: t('features.items.chainProxy.title'),
      description: t('features.items.chainProxy.desc'),
    },
    {
      icon: BarChart3,
      title: t('features.items.trafficStats.title'),
      description: t('features.items.trafficStats.desc'),
    },
    {
      icon: FileCode,
      title: t('features.items.customRules.title'),
      description: t('features.items.customRules.desc'),
    },
    {
      icon: Users,
      title: t('features.items.multiUser.title'),
      description: t('features.items.multiUser.desc'),
    },
    {
      icon: RefreshCw,
      title: t('features.items.externalSub.title'),
      description: t('features.items.externalSub.desc'),
    },
    {
      icon: Layers,
      title: t('features.items.templates.title'),
      description: t('features.items.templates.desc'),
    },
    {
      icon: Shield,
      title: t('features.items.security.title'),
      description: t('features.items.security.desc'),
    },
    {
      icon: Radar,
      title: t('features.items.probe.title'),
      description: t('features.items.probe.desc'),
    },
    {
      icon: Settings,
      title: t('features.items.flexible.title'),
      description: t('features.items.flexible.desc'),
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="pixel-text text-3xl sm:text-4xl font-bold text-primary mb-4">
            {t('features.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('features.description')}
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
