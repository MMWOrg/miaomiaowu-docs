import { createFileRoute, redirect } from '@tanstack/react-router'

// 文档项目首页 - 直接重定向到文档
export const Route = createFileRoute('/')({
  beforeLoad: () => {
    throw redirect({ to: '/docs' })
  },
  component: () => null,
})
