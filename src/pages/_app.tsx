import '@/styles/globals.css'
import '@/styles/design-tokens.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import CustomCursor from '@/components/common/CustomCursor'
import ScrollProgress from '@/components/common/ScrollProgress'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {mounted && (
        <>
          <CustomCursor />
          <ScrollProgress showPercentage={false} position="top" height={3} />
        </>
      )}
      <AnimatePresence mode="wait">
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  )
}