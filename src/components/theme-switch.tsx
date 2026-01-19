import { useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/context/theme-provider'
import { Button } from '@/components/ui/button'

export function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme()

  /* Update theme-color meta tag
   * when theme is updated */
  useEffect(() => {
    const themeColor = resolvedTheme === 'dark' ? '#020817' : '#fff'
    const metaThemeColor = document.querySelector("meta[name='theme-color']")
    if (metaThemeColor) metaThemeColor.setAttribute('content', themeColor)
  }, [resolvedTheme])

  // 切换: light <-> dark
  const toggleTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
  }

  const Icon = resolvedTheme === 'light' ? Sun : Moon
  const label = resolvedTheme === 'light' ? '浅色模式' : '深色模式'

  return (
    <Button
      variant='outline'
      size='icon'
      aria-label={label}
      title={label}
      className='h-9 w-9'
      onClick={toggleTheme}
    >
      <Icon className='size-[18px]' />
      <span className='sr-only'>{label}</span>
    </Button>
  )
}
