'use client'

import { useRouter } from 'next/navigation'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const router = useRouter()
  return (
    <NextUIProvider
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      navigate={router.push}
      className="flex h-full w-full flex-col"
    >
      <NextThemesProvider attribute="class">{children}</NextThemesProvider>
    </NextUIProvider>
  )
}
