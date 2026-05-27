import { createFileRoute, Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import {
  Sparkles,
  FileCode,
  Network,
  Shield,
  ArrowRight,
  Tags,
  Zap,
  ArrowUpDown,
} from 'lucide-react'

export const Route = createFileRoute('/docs/subscribe-files')({
  component: SubscribeFilesPage,
})

function SubscribeFilesPage() {
  const { t } = useTranslation('docs')

  return (
    <DocLayout
      title={t('subscribeFiles.title')}
      description={t('subscribeFiles.description')}
    >
      {/* 功能说明 */}
      <section className='mb-8'>
        <div className='flex items-center gap-2 mb-4'>
          <span className='px-2 py-1 bg-destructive/10 text-destructive rounded-md text-xs border border-destructive/20'>
            {t('subscribeFiles.adminFeature')}
          </span>
        </div>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground'>
              {t('subscribeFiles.intro')}
            </p>
          </CardContent>
        </Card>
      </section>

      {/* 主要功能 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Sparkles className='size-5 text-primary' />
          {t('subscribeFiles.mainFeatures.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-blue-500'>
              <ul className='space-y-2 text-sm'>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>{t('subscribeFiles.mainFeatures.viewListTitle')}</strong>{t('subscribeFiles.mainFeatures.viewListDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>{t('subscribeFiles.mainFeatures.sortTitle')}</strong>{t('subscribeFiles.mainFeatures.sortDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>{t('subscribeFiles.mainFeatures.importTitle')}</strong>{t('subscribeFiles.mainFeatures.importDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>{t('subscribeFiles.mainFeatures.uploadTitle')}</strong>{t('subscribeFiles.mainFeatures.uploadDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>{t('subscribeFiles.mainFeatures.generateTitle')}</strong>{t('subscribeFiles.mainFeatures.generateDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>{t('subscribeFiles.mainFeatures.editConfigTitle')}</strong>{t('subscribeFiles.mainFeatures.editConfigDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>{t('subscribeFiles.mainFeatures.applyRulesTitle')}</strong>{t('subscribeFiles.mainFeatures.applyRulesDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span>
                    <strong>{t('subscribeFiles.mainFeatures.editNodesTitle')}</strong>{t('subscribeFiles.mainFeatures.editNodesDesc')}
                    <Link to='/docs/edit-nodes' className='text-primary hover:underline inline-flex items-center gap-1 mx-1'>
                      {t('subscribeFiles.mainFeatures.editNodesLink')}
                      <ArrowRight className='size-3' />
                    </Link>
                  </span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>{t('subscribeFiles.mainFeatures.bindV3Title')}</strong>{t('subscribeFiles.mainFeatures.bindV3Desc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>{t('subscribeFiles.mainFeatures.tagFilterTitle')}</strong>{t('subscribeFiles.mainFeatures.tagFilterDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-primary mt-1'>•</span>
                  <span><strong>{t('subscribeFiles.mainFeatures.customLinkTitle')}</strong>{t('subscribeFiles.mainFeatures.customLinkDesc')}</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 排序与批量操作 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <ArrowUpDown className='size-5 text-primary' />
          {t('subscribeFiles.sorting.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('subscribeFiles.sorting.desc')}
            </p>
            <div className='bg-muted/30 rounded-lg p-4'>
              <h4 className='font-semibold text-sm mb-2'>{t('subscribeFiles.sorting.methodTitle')}</h4>
              <p className='text-xs text-muted-foreground'>
                {t('subscribeFiles.sorting.methodDescPrefix')}<ArrowUpDown className='size-3 inline align-middle mx-1' />{t('subscribeFiles.sorting.methodDescSuffix')}
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 页面布局 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Network className='size-5 text-primary' />
          {t('subscribeFiles.layout.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('subscribeFiles.layout.desc')}
            </p>
            <div className='grid md:grid-cols-2 gap-3'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('subscribeFiles.layout.leftTitle')}</h4>
                <p className='text-xs text-muted-foreground'>
                  {t('subscribeFiles.layout.leftDesc')}
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('subscribeFiles.layout.rightTitle')}</h4>
                <p className='text-xs text-muted-foreground'>
                  {t('subscribeFiles.layout.rightDesc')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 版本管理 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <FileCode className='size-5 text-primary' />
          {t('subscribeFiles.versionMgmt.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('subscribeFiles.versionMgmt.desc')}
            </p>
            <div className='space-y-3'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('subscribeFiles.versionMgmt.infoTitle')}</h4>
                <ul className='space-y-1 text-xs text-muted-foreground'>
                  <li>• <strong>{t('subscribeFiles.versionMgmt.versionNumber')}</strong>{t('subscribeFiles.versionMgmt.versionNumberDesc')}</li>
                  <li>• <strong>{t('subscribeFiles.versionMgmt.createTime')}</strong>{t('subscribeFiles.versionMgmt.createTimeDesc')}</li>
                  <li>• <strong>{t('subscribeFiles.versionMgmt.currentVersion')}</strong>{t('subscribeFiles.versionMgmt.currentVersionDesc')}</li>
                </ul>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('subscribeFiles.versionMgmt.rollbackTitle')}</h4>
                <p className='text-xs text-muted-foreground'>
                  {t('subscribeFiles.versionMgmt.rollbackDesc')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 绑定 V3 模板 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Zap className='size-5 text-primary' />
          {t('subscribeFiles.bindV3.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('subscribeFiles.bindV3.desc')}
            </p>
            <div className='space-y-3'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('subscribeFiles.bindV3.methodTitle')}</h4>
                <p className='text-xs text-muted-foreground'>
                  {t('subscribeFiles.bindV3.methodDesc')}
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('subscribeFiles.bindV3.effectTitle')}</h4>
                <ul className='space-y-1 text-xs text-muted-foreground'>
                  <li>• {t('subscribeFiles.bindV3.effect1')}</li>
                  <li>• {t('subscribeFiles.bindV3.effect2')}</li>
                  <li>• {t('subscribeFiles.bindV3.effect3')}</li>
                  <li>• {t('subscribeFiles.bindV3.effect4')}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 标签筛选 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Tags className='size-5 text-primary' />
          {t('subscribeFiles.tagFilter.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('subscribeFiles.tagFilter.desc')}
            </p>
            <div className='space-y-3'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('subscribeFiles.tagFilter.usageTitle')}</h4>
                <ul className='space-y-1 text-xs text-muted-foreground'>
                  <li>• {t('subscribeFiles.tagFilter.usage1')}</li>
                  <li>• {t('subscribeFiles.tagFilter.usage2')}</li>
                  <li>• {t('subscribeFiles.tagFilter.usage3')}</li>
                </ul>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('subscribeFiles.tagFilter.scenarioTitle')}</h4>
                <p className='text-xs text-muted-foreground'>
                  {t('subscribeFiles.tagFilter.scenarioDesc')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 典型使用场景 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Sparkles className='size-5 text-primary' />
          {t('subscribeFiles.typicalScenario.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4'>
              <h4 className='font-semibold text-sm mb-2'>{t('subscribeFiles.typicalScenario.newNodeTitle')}</h4>
              <p className='text-xs text-muted-foreground'>
                {t('subscribeFiles.typicalScenario.newNodeDesc')}
                <Link to='/docs/edit-nodes' className='text-primary hover:underline inline-flex items-center gap-1 mx-1'>
                  {t('subscribeFiles.typicalScenario.editNodesLink')}
                  <ArrowRight className='size-3' />
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 功能关联 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Network className='size-5 text-primary' />
          {t('subscribeFiles.relations.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              {t('subscribeFiles.relations.desc')}
            </p>
            <div className='grid md:grid-cols-2 gap-3'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('subscribeFiles.relations.genToSubTitle')}</h4>
                <p className='text-xs text-muted-foreground'>
                  {t('subscribeFiles.relations.genToSubDesc')}
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('subscribeFiles.relations.subToUserTitle')}</h4>
                <p className='text-xs text-muted-foreground'>
                  {t('subscribeFiles.relations.subToUserDesc')}
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('subscribeFiles.relations.nodeToSubTitle')}</h4>
                <p className='text-xs text-muted-foreground'>
                  {t('subscribeFiles.relations.nodeToSubDesc')}
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>{t('subscribeFiles.relations.subToLinkTitle')}</h4>
                <p className='text-xs text-muted-foreground'>
                  {t('subscribeFiles.relations.subToLinkDesc')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 注意事项 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Shield className='size-5 text-primary' />
          {t('subscribeFiles.notes.heading')}
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-orange-500'>
              <ul className='space-y-2 text-sm text-muted-foreground'>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>{t('subscribeFiles.notes.nodeModTitle')}</strong>{t('subscribeFiles.notes.nodeModDesc')}</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='text-orange-500 mt-1'>⚠</span>
                  <span><strong>{t('subscribeFiles.notes.deleteTitle')}</strong>{t('subscribeFiles.notes.deleteDesc')}</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
