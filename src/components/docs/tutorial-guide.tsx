import { useEffect, useState, useRef } from 'react'
import { X, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { TutorialStep } from '@/hooks/use-tutorial'

interface TutorialGuideProps {
  step: TutorialStep | null
  currentStep: number
  totalSteps: number
  progress: number
  isActive: boolean
  onNext: () => void
  onPrev: () => void
  onStop: () => void
  onReset: () => void
}

export function TutorialGuide({
  step,
  currentStep,
  totalSteps,
  progress,
  isActive,
  onNext,
  onPrev,
  onStop,
  onReset,
}: TutorialGuideProps) {
  const [position, setPosition] = useState({ top: 0, left: 0 })
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!step || !isActive) return

    const updatePosition = () => {
      const targetElement = document.querySelector(step.target)
      if (!targetElement) return

      const rect = targetElement.getBoundingClientRect()
      setTargetRect(rect)

      const tooltipWidth = tooltipRef.current?.offsetWidth || 320
      const tooltipHeight = tooltipRef.current?.offsetHeight || 200

      let top = 0
      let left = 0

      switch (step.position) {
        case 'top':
          top = rect.top - tooltipHeight - 12
          left = rect.left + rect.width / 2 - tooltipWidth / 2
          break
        case 'bottom':
          top = rect.bottom + 12
          left = rect.left + rect.width / 2 - tooltipWidth / 2
          break
        case 'left':
          top = rect.top + rect.height / 2 - tooltipHeight / 2
          left = rect.left - tooltipWidth - 12
          break
        case 'right':
          top = rect.top + rect.height / 2 - tooltipHeight / 2
          left = rect.right + 12
          break
      }

      // Keep within viewport
      const padding = 16
      top = Math.max(padding, Math.min(top, window.innerHeight - tooltipHeight - padding))
      left = Math.max(padding, Math.min(left, window.innerWidth - tooltipWidth - padding))

      setPosition({ top, left })

      // Scroll target into view if needed
      if (rect.top < 0 || rect.bottom > window.innerHeight) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }

    updatePosition()
    window.addEventListener('resize', updatePosition)
    window.addEventListener('scroll', updatePosition)

    return () => {
      window.removeEventListener('resize', updatePosition)
      window.removeEventListener('scroll', updatePosition)
    }
  }, [step, isActive])

  if (!step || !isActive) return null

  return (
    <>
      {/* Overlay */}
      <div className='fixed inset-0 z-50 pointer-events-none'>
        {/* Semi-transparent background */}
        <div className='absolute inset-0 bg-background/60 backdrop-blur-sm' />

        {/* Highlight cutout for target element */}
        {targetRect && step.highlight !== false && (
          <div
            className='absolute bg-transparent rounded-lg ring-4 ring-primary ring-offset-2 ring-offset-background pointer-events-auto'
            style={{
              top: targetRect.top - 4,
              left: targetRect.left - 4,
              width: targetRect.width + 8,
              height: targetRect.height + 8,
            }}
          />
        )}

        {/* Tooltip */}
        <div
          ref={tooltipRef}
          className='absolute z-50 w-80 bg-card border rounded-lg shadow-lg pointer-events-auto'
          style={{
            top: position.top,
            left: position.left,
          }}
        >
          {/* Progress bar */}
          <div className='h-1 bg-muted rounded-t-lg overflow-hidden'>
            <div
              className='h-full bg-primary transition-all duration-300'
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Header */}
          <div className='flex items-center justify-between px-4 pt-3 pb-2'>
            <span className='text-xs text-muted-foreground'>
              步骤 {currentStep + 1} / {totalSteps}
            </span>
            <button
              onClick={onStop}
              className='p-1 rounded hover:bg-accent transition-colors'
              aria-label='关闭教程'
            >
              <X className='size-4' />
            </button>
          </div>

          {/* Content */}
          <div className='px-4 pb-3'>
            <h4 className='font-semibold mb-2'>{step.title}</h4>
            <p className='text-sm text-muted-foreground mb-3'>{step.description}</p>
            {step.action && (
              <div className='text-xs text-primary bg-primary/10 rounded px-2 py-1 mb-3'>
                💡 {step.action}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className='flex items-center justify-between px-4 pb-4'>
            <Button
              variant='ghost'
              size='sm'
              onClick={onReset}
              className='text-muted-foreground'
            >
              <RotateCcw className='size-4 mr-1' />
              重新开始
            </Button>
            <div className='flex gap-2'>
              <Button
                variant='outline'
                size='sm'
                onClick={onPrev}
                disabled={currentStep === 0}
              >
                <ChevronLeft className='size-4 mr-1' />
                上一步
              </Button>
              <Button size='sm' onClick={onNext}>
                {currentStep === totalSteps - 1 ? '完成' : '下一步'}
                {currentStep < totalSteps - 1 && <ChevronRight className='size-4 ml-1' />}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
