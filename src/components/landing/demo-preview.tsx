import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Network, Link2, Users, Zap, GripVertical } from 'lucide-react'
import { NodesDemo } from '@/components/interactive/nodes-demo'
import { SubscriptionDemo } from '@/components/interactive/subscription-demo'
import { UsersDemo } from '@/components/interactive/users-demo'
import { GeneratorDemo } from '@/components/interactive/generator-demo'
import { EditNodesDemo } from '@/components/interactive/edit-nodes-demo'
import { useTranslation } from 'react-i18next'

export function DemoPreview() {
  const { t } = useTranslation('landing')

  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="pixel-text text-3xl sm:text-4xl font-bold text-primary mb-4">
            {t('demo.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('demo.description')}
          </p>
        </div>

        {/* Demo Tabs */}
        <Tabs defaultValue="nodes" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8 h-auto p-1">
            <TabsTrigger
              value="nodes"
              className="flex items-center gap-2 py-3 data-[state=active]:bg-primary/10"
            >
              <Network className="size-4" />
              <span className="hidden sm:inline">{t('demo.tabs.nodesFull')}</span>
              <span className="sm:hidden">{t('demo.tabs.nodesShort')}</span>
            </TabsTrigger>
            <TabsTrigger
              value="subscription"
              className="flex items-center gap-2 py-3 data-[state=active]:bg-primary/10"
            >
              <Link2 className="size-4" />
              <span className="hidden sm:inline">{t('demo.tabs.subscriptionsFull')}</span>
              <span className="sm:hidden">{t('demo.tabs.subscriptionsShort')}</span>
            </TabsTrigger>
            <TabsTrigger
              value="generator"
              className="flex items-center gap-2 py-3 data-[state=active]:bg-primary/10"
            >
              <Zap className="size-4" />
              <span className="hidden sm:inline">{t('demo.tabs.generateFull')}</span>
              <span className="sm:hidden">{t('demo.tabs.generateShort')}</span>
            </TabsTrigger>
            <TabsTrigger
              value="edit-nodes"
              className="flex items-center gap-2 py-3 data-[state=active]:bg-primary/10"
            >
              <GripVertical className="size-4" />
              <span className="hidden sm:inline">{t('demo.tabs.editFull')}</span>
              <span className="sm:hidden">{t('demo.tabs.editShort')}</span>
            </TabsTrigger>
            <TabsTrigger
              value="users"
              className="flex items-center gap-2 py-3 data-[state=active]:bg-primary/10"
            >
              <Users className="size-4" />
              <span className="hidden sm:inline">{t('demo.tabs.usersFull')}</span>
              <span className="sm:hidden">{t('demo.tabs.usersShort')}</span>
            </TabsTrigger>
          </TabsList>

          <div className="pixel-card p-4 sm:p-6">
            <TabsContent value="nodes" className="mt-0">
              <NodesDemo />
            </TabsContent>
            <TabsContent value="subscription" className="mt-0">
              <SubscriptionDemo />
            </TabsContent>
            <TabsContent value="generator" className="mt-0">
              <GeneratorDemo />
            </TabsContent>
            <TabsContent value="edit-nodes" className="mt-0">
              <EditNodesDemo />
            </TabsContent>
            <TabsContent value="users" className="mt-0">
              <UsersDemo />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  )
}
