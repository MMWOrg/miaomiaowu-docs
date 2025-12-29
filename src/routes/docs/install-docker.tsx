import { createFileRoute, Link } from '@tanstack/react-router'
import { DocLayout } from '@/components/docs/doc-layout'
import { Card, CardContent } from '@/components/ui/card'
import {
  Terminal,
  FileText,
  Folder,
  CheckCircle,
  Settings,
  ArrowRight,
} from 'lucide-react'

export const Route = createFileRoute('/docs/install-docker')({
  component: InstallDockerPage,
})

function InstallDockerPage() {
  return (
    <DocLayout
      title='Docker 安装'
      description='使用 Docker 快速部署妙妙屋'
    >
      {/* 前提条件 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <CheckCircle className='size-5 text-primary' />
          前提条件
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>已安装 Docker（版本 20.10 或更高）</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>已安装 Docker Compose（推荐，用于 docker-compose 方式部署）</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>至少 512MB 可用内存</span>
              </li>
              <li className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span>开放端口 8080（可自定义）</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* 方式一：Docker Compose（推荐） */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <FileText className='size-5 text-primary' />
          方式一：Docker Compose（推荐）
        </h2>
        <Card className='bg-gradient-to-r from-primary/10 to-blue-500/10 border-primary/20'>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              推荐使用 Docker Compose 部署，便于管理、更新和维护：
            </p>

            <h4 className='font-semibold mb-2'>1. 创建 docker-compose.yml</h4>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto'>
              <pre>{`version: '3.8'

services:
  miaomiaowu:
    image: ghcr.io/jimleerx/miaomiaowu:latest
    container_name: miaomiaowu
    restart: unless-stopped
    user: root
    environment:
      - PORT=8080
      - DATABASE_PATH=/app/data/traffic.db
      - LOG_LEVEL=info
    ports:
      - "8080:8080"
    volumes:
      - ./data:/app/data
      - ./subscribes:/app/subscribes
      - ./rule_templates:/app/rule_templates
    healthcheck:
      test: ["CMD", "wget", "--no-verbose", "--tries=1", "--spider", "http://localhost:8080/"]
      interval: 30s
      timeout: 3s
      start_period: 5s
      retries: 3`}</pre>
            </div>

            <h4 className='font-semibold mb-2'>2. 启动服务</h4>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto'>
              <pre>docker-compose up -d</pre>
            </div>

            <h4 className='font-semibold mb-2'>3. 查看日志</h4>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto'>
              <pre>docker-compose logs -f</pre>
            </div>

            <h4 className='font-semibold mb-2'>4. 更新服务</h4>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto'>
              <pre>docker-compose pull && docker-compose up -d</pre>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 方式二：Docker Run */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Terminal className='size-5 text-primary' />
          方式二：Docker Run
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              快速启动方式，使用一条命令即可运行：
            </p>

            <h4 className='font-semibold mb-2'>1. 拉取镜像</h4>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto'>
              <pre>docker pull ghcr.io/jimleerx/miaomiaowu:latest</pre>
            </div>

            <h4 className='font-semibold mb-2'>2. 运行容器</h4>
            <div className='bg-muted rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto'>
              <pre>{`docker run -d \\
  --user root \\
  --name miaomiaowu \\
  -p 8080:8080 \\
  -v $(pwd)/mmw-data:/app/data \\
  -v $(pwd)/subscribes:/app/subscribes \\
  -v $(pwd)/rule_templates:/app/rule_templates \\
  ghcr.io/jimleerx/miaomiaowu:latest`}</pre>
            </div>

            <h4 className='font-semibold mb-2'>参数说明</h4>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li className='flex items-start gap-2'>
                <code className='bg-muted px-1 rounded'>-d</code>
                <span>后台运行容器</span>
              </li>
              <li className='flex items-start gap-2'>
                <code className='bg-muted px-1 rounded'>--user root</code>
                <span>以 root 用户运行，确保文件权限正确</span>
              </li>
              <li className='flex items-start gap-2'>
                <code className='bg-muted px-1 rounded'>--name miaomiaowu</code>
                <span>容器名称</span>
              </li>
              <li className='flex items-start gap-2'>
                <code className='bg-muted px-1 rounded'>-p 8080:8080</code>
                <span>端口映射，左侧为主机端口，右侧为容器端口</span>
              </li>
              <li className='flex items-start gap-2'>
                <code className='bg-muted px-1 rounded'>-v $(pwd)/mmw-data:/app/data</code>
                <span>数据库持久化目录</span>
              </li>
              <li className='flex items-start gap-2'>
                <code className='bg-muted px-1 rounded'>-v $(pwd)/subscribes:/app/subscribes</code>
                <span>订阅文件目录</span>
              </li>
              <li className='flex items-start gap-2'>
                <code className='bg-muted px-1 rounded'>-v $(pwd)/rule_templates:/app/rule_templates</code>
                <span>规则模板目录</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* 环境变量 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Settings className='size-5 text-primary' />
          环境变量说明
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='space-y-3'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>
                  <code className='bg-muted px-1.5 py-0.5 rounded'>PORT</code>
                </h4>
                <p className='text-xs text-muted-foreground'>
                  服务端口，默认为 8080
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>
                  <code className='bg-muted px-1.5 py-0.5 rounded'>DATABASE_PATH</code>
                </h4>
                <p className='text-xs text-muted-foreground'>
                  SQLite 数据库路径，默认为 /app/data/traffic.db
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>
                  <code className='bg-muted px-1.5 py-0.5 rounded'>LOG_LEVEL</code>
                </h4>
                <p className='text-xs text-muted-foreground'>
                  日志级别，可选 debug、info、warn、error，默认为 info
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>
                  <code className='bg-muted px-1.5 py-0.5 rounded'>JWT_SECRET</code>
                </h4>
                <p className='text-xs text-muted-foreground'>
                  可选，配置 JWT token 密钥，用于用户认证
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 数据目录 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Folder className='size-5 text-primary' />
          数据目录说明
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-4'>
              需要持久化的数据目录：
            </p>
            <div className='space-y-3'>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>
                  <code className='bg-muted px-1.5 py-0.5 rounded'>/app/data</code>
                </h4>
                <p className='text-xs text-muted-foreground'>
                  SQLite 数据库目录，存储用户、节点、订阅等数据
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>
                  <code className='bg-muted px-1.5 py-0.5 rounded'>/app/subscribes</code>
                </h4>
                <p className='text-xs text-muted-foreground'>
                  订阅文件目录，存储生成的订阅配置文件
                </p>
              </div>
              <div className='bg-muted/30 rounded-lg p-4'>
                <h4 className='font-semibold text-sm mb-2'>
                  <code className='bg-muted px-1.5 py-0.5 rounded'>/app/rule_templates</code>
                </h4>
                <p className='text-xs text-muted-foreground'>
                  规则模板目录，存储自定义的规则模板文件
                </p>
              </div>
            </div>
            <p className='text-sm text-muted-foreground mt-4'>
              <strong>重要：</strong>请确保将这些目录映射到主机，以便在容器重建后保留数据。
            </p>
          </CardContent>
        </Card>
      </section>

      {/* 常用命令 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4 flex items-center gap-2'>
          <Terminal className='size-5 text-primary' />
          常用命令
        </h2>
        <Card>
          <CardContent className='pt-6'>
            <div className='space-y-4'>
              <div>
                <h4 className='font-semibold mb-2'>停止服务</h4>
                <div className='bg-muted rounded-lg p-3 font-mono text-sm'>
                  docker stop miaomiaowu
                </div>
              </div>
              <div>
                <h4 className='font-semibold mb-2'>启动服务</h4>
                <div className='bg-muted rounded-lg p-3 font-mono text-sm'>
                  docker start miaomiaowu
                </div>
              </div>
              <div>
                <h4 className='font-semibold mb-2'>重启服务</h4>
                <div className='bg-muted rounded-lg p-3 font-mono text-sm'>
                  docker restart miaomiaowu
                </div>
              </div>
              <div>
                <h4 className='font-semibold mb-2'>查看日志</h4>
                <div className='bg-muted rounded-lg p-3 font-mono text-sm'>
                  docker logs -f miaomiaowu
                </div>
              </div>
              <div>
                <h4 className='font-semibold mb-2'>更新镜像</h4>
                <div className='bg-muted rounded-lg p-3 font-mono text-sm overflow-x-auto'>
                  <pre>{`docker pull ghcr.io/jimleerx/miaomiaowu:latest
docker stop miaomiaowu && docker rm miaomiaowu
# 然后重新运行上面的启动命令`}</pre>
                </div>
                <p className='text-xs text-muted-foreground mt-2'>
                  更多更新方式请参考
                  <Link to='/docs/update' className='text-primary hover:underline inline-flex items-center gap-1 mx-1'>
                    版本更新
                    <ArrowRight className='size-3' />
                  </Link>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 访问系统 */}
      <section className='mb-8'>
        <h2 className='text-xl font-bold mb-4'>访问系统</h2>
        <Card className='bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20'>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground mb-2'>
              容器启动后，打开浏览器访问：
            </p>
            <div className='bg-background/50 rounded-lg p-4 font-mono text-lg text-center'>
              http://localhost:8080
            </div>
            <p className='text-sm text-muted-foreground mt-4'>
              首次访问会提示创建管理员账户。
            </p>
          </CardContent>
        </Card>
      </section>
    </DocLayout>
  )
}
