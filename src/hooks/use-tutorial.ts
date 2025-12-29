import { useState, useCallback } from 'react'

export interface TutorialStep {
  id: string
  target: string // CSS selector for the target element
  title: string
  description: string
  position: 'top' | 'bottom' | 'left' | 'right'
  action?: string // Expected action description
  highlight?: boolean // Whether to highlight the target element
}

export interface UseTutorialOptions {
  steps: TutorialStep[]
  onComplete?: () => void
  autoStart?: boolean
}

export interface UseTutorialReturn {
  currentStep: number
  currentStepData: TutorialStep | null
  isActive: boolean
  totalSteps: number
  progress: number
  start: () => void
  stop: () => void
  next: () => void
  prev: () => void
  goToStep: (step: number) => void
  reset: () => void
}

export function useTutorial({
  steps,
  onComplete,
  autoStart = false,
}: UseTutorialOptions): UseTutorialReturn {
  const [currentStep, setCurrentStep] = useState(autoStart ? 0 : -1)
  const [isActive, setIsActive] = useState(autoStart)

  const totalSteps = steps.length
  const progress = isActive ? ((currentStep + 1) / totalSteps) * 100 : 0
  const currentStepData = isActive && currentStep >= 0 ? steps[currentStep] : null

  const start = useCallback(() => {
    setCurrentStep(0)
    setIsActive(true)
  }, [])

  const stop = useCallback(() => {
    setIsActive(false)
    setCurrentStep(-1)
  }, [])

  const next = useCallback(() => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1)
    } else {
      setIsActive(false)
      setCurrentStep(-1)
      onComplete?.()
    }
  }, [currentStep, totalSteps, onComplete])

  const prev = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }, [currentStep])

  const goToStep = useCallback(
    (step: number) => {
      if (step >= 0 && step < totalSteps) {
        setCurrentStep(step)
        if (!isActive) {
          setIsActive(true)
        }
      }
    },
    [totalSteps, isActive]
  )

  const reset = useCallback(() => {
    setCurrentStep(0)
    setIsActive(true)
  }, [])

  return {
    currentStep,
    currentStepData,
    isActive,
    totalSteps,
    progress,
    start,
    stop,
    next,
    prev,
    goToStep,
    reset,
  }
}
