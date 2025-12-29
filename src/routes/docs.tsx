import { createFileRoute, Outlet } from '@tanstack/react-router'

// 文档根路由 - 作为所有文档页面的父路由
export const Route = createFileRoute('/docs')({
  component: DocsLayout,
})

function DocsLayout() {
  return <Outlet />
}
