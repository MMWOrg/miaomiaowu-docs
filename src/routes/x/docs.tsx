import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/x/docs')({
  component: () => <Outlet />,
})
