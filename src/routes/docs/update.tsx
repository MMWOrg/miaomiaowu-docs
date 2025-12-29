import { createFileRoute, Link } from '@tanstack/react-router'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import {
  RefreshCw,
  Settings,
  Terminal,
  Container,
  Database,
  ArrowRight,
  Sparkles,
  FileText,
} from 'lucide-react'

export const Route = createFileRoute('/docs/update')({
  component: UpdatePage,
})

function UpdatePage() {
  return (
    <DocLayout
      title='版本更新'
      description='更新妙妙屋到最新版本的多种方式'
    >
      {/* 网页端更新提示 - 醒目展示 */}
      <section className='mb-8'>
        <Card className='bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-500/30'>
          <CardContent className='pt-6'>
            <div className='flex items-start gap-4'>
              <div className='flex-shrink-0'>
                <Sparkles className='size-10 text-green-500' />
              </div>
              <div className='flex-1'>
                <h2 className='text-2xl font-bold text-green-600 dark:text-green-400 mb-2'>
                  支持网页端自动更新！
                </h2>
                <p className='text-lg text-muted-foreground mb-4'>
                  从 <span className='font-bold text-primary'>0.3.5 版本</span> 开始，可以在网页端直接检查并更新应用。
                </p>
                <div className='bg-background/50 rounded-lg p-4 border border-green-500/20'>
                  <div className='flex items-center gap-3'>
                    <Settings className='size-5 text-green-500' />
                    <span className='font-medium'>操作方法：</span>
                  </div>
                  <p className='mt-2 text-muted-foreground'>
                    进入 <strong>「个人设置」</strong> 菜单 → 点击 <strong>「检查更新」</strong> 按钮 → 确认更新
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 网页端更新详细步骤 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <RefreshCw className='size-5 text-primary' />
          网页端更新（0.3.5+）
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              适用于已安装 0.3.5 及以上版本的用户：
            </p>
            <div className='bg-muted/30 rounded-lg p-4 border-l-4 border-green-500'>
              <div className='space-y-4 text-sm'>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>1</span>
                  <div>
                    <strong>进入个人设置</strong>
                    <p className='text-muted-foreground mt-1'>点击页面右上角的用户头像，选择「个人设置」</p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>2</span>
                  <div>
                    <strong>点击检查更新</strong>
                    <p className='text-muted-foreground mt-1'>在设置页面中找到「检查更新」按钮并点击</p>
                  </div>
                </div>
                <div className='flex gap-3'>
                  <span className='flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/20 text-primary font-semibold text-xs'>3</span>
                  <div>
                    <strong>确认更新</strong>
                    <p className='text-muted-foreground mt-1'>如果有新版本，按照提示确认并等待更新完成</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Docker Compose 更新（推荐） */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <FileText className='size-5 text-primary' />
          Docker Compose 更新（推荐）
        </h2>
        <Card className='bg-gradient-to-r from-primary/10 to-blue-500/10 border-primary/20'>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              使用 Docker Compose 部署的用户，更新非常简单：
            </p>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto'>
              <pre>{`# 进入 docker-compose.yml 所在目录
cd /path/to/your/docker-compose

# 拉取最新镜像并重启服务
docker-compose pull && docker-compose up -d`}</pre>
            </div>
            <p className='text-sm text-muted-foreground'>
              Docker Compose 会自动处理容器的停止、删除和重建，数据会保留在挂载的卷中。
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Docker Run 更新 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Container className='size-5 text-primary' />
          Docker Run 更新
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              使用 Docker Run 部署的用户，需要手动执行以下步骤：
            </p>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto'>
              <pre>{`# 拉取最新镜像
docker pull ghcr.io/jimleerx/miaomiaowu:latest

# 停止并删除旧容器
docker stop miaomiaowu && docker rm miaomiaowu

# 重新运行启动命令（使用原有的启动参数）
docker run -d \\
  --user root \\
  --name miaomiaowu \\
  -p 8080:8080 \\
  -v $(pwd)/mmw-data:/app/data \\
  -v $(pwd)/subscribes:/app/subscribes \\
  -v $(pwd)/rule_templates:/app/rule_templates \\
  ghcr.io/jimleerx/miaomiaowu:latest`}</pre>
            </div>
            <p className='text-sm text-muted-foreground'>
              请确保使用与初次安装时相同的卷挂载路径，以保留数据。
            </p>
          </CardContent>
        </Card>
      </section>

      {/* 一键脚本更新 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Terminal className='size-5 text-primary' />
          一键脚本更新
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              使用一键安装脚本安装的用户，可以使用以下命令更新：
            </p>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto'>
              <pre>curl -sL https://raw.githubusercontent.com/Jimleerx/miaomiaowu/main/install.sh | sudo bash -s update</pre>
            </div>
            <p className='text-sm text-muted-foreground'>
              脚本会自动下载最新版本并重启服务。
            </p>
          </CardContent>
        </Card>
      </section>

      {/* 简易安装更新 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Terminal className='size-5 text-primary' />
          简易安装更新
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              使用简易安装的用户，可以使用以下命令更新：
            </p>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto'>
              <pre>curl -sL https://raw.githubusercontent.com/Jimleerx/miaomiaowu/main/quick-install.sh | bash -s update</pre>
            </div>
            <p className='text-sm text-muted-foreground'>
              更新后需要手动重新启动程序。
            </p>
          </CardContent>
        </Card>
      </section>

      {/* 数据备份 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Database className='size-5 text-primary' />
          数据备份建议
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='bg-orange-500/10 rounded-lg p-4 border-l-4 border-orange-500'>
              <p className='text-sm text-muted-foreground mb-3'>
                <strong>重要：</strong>在更新前建议备份数据目录，以防更新过程中出现问题。
              </p>
              <div className='space-y-3'>
                <div className='bg-muted/50 rounded-lg p-3'>
                  <h4 className='font-semibold text-sm mb-2'>Docker 部署</h4>
                  <div className='bg-muted rounded p-2 font-mono text-xs overflow-x-auto'>
                    <pre>{`cp -r ./mmw-data ./mmw-data-backup
cp -r ./subscribes ./subscribes-backup`}</pre>
                  </div>
                </div>
                <div className='bg-muted/50 rounded-lg p-3'>
                  <h4 className='font-semibold text-sm mb-2'>一键脚本安装</h4>
                  <div className='bg-muted rounded p-2 font-mono text-xs overflow-x-auto'>
                    <pre>sudo cp -r /etc/mmw /etc/mmw-backup</pre>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 相关链接 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4'>相关文档</h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='grid md:grid-cols-2 gap-3'>
              <Link to='/docs/install-docker' className='bg-muted/30 rounded-lg p-4 hover:bg-muted/50 transition-colors block'>
                <h4 className='font-semibold text-sm mb-2 flex items-center gap-2'>
                  Docker 安装
                  <ArrowRight className='size-3' />
                </h4>
                <p className='text-xs text-muted-foreground'>
                  查看完整的 Docker 部署配置
                </p>
              </Link>
              <Link to='/docs/install-direct' className='bg-muted/30 rounded-lg p-4 hover:bg-muted/50 transition-colors block'>
                <h4 className='font-semibold text-sm mb-2 flex items-center gap-2'>
                  直接安装
                  <ArrowRight className='size-3' />
                </h4>
                <p className='text-xs text-muted-foreground'>
                  查看一键脚本和手动安装方式
                </p>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
