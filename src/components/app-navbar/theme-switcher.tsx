'use client'

import { useEffect, useState } from 'react'

import { Switch } from '@nextui-org/react'
import { IconMoon, IconSun } from '@tabler/icons-react'

import useSystemTheme from '@/hooks/use-system-theme'

export function ThemeSwitcher({
  showLabel,
}: Readonly<{ showLabel?: boolean }>) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useSystemTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Switch
      isSelected={theme === 'light'}
      onValueChange={() =>
        theme === 'dark' ? setTheme('light') : setTheme('dark')
      }
      color="success"
      endContent={<IconMoon />}
      size="lg"
      startContent={<IconSun />}
    >
      {showLabel && 'Theme'}
    </Switch>
  )
}
