import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/components/landing/hero'
import { Features } from '@/components/landing/features'
import { Clients } from '@/components/landing/clients'
import { DemoPreview } from '@/components/landing/demo-preview'
import { Footer } from '@/components/landing/footer'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Features />
      <DemoPreview />
      <Clients />
      <Footer />
    </div>
  )
}
