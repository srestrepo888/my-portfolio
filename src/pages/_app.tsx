import '@/styles/globals.css'
import '@/styles/design-tokens.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import UltraLuxuryCursor from '@/components/effects/UltraLuxuryCursor'
import ScrollProgress from '@/components/common/ScrollProgress'
import WebVitals from '@/components/common/WebVitals'
import LoadingScreen from '@/components/common/LoadingScreen'
import { AnimatePresence } from 'framer-motion'

const SmoothScroll = dynamic(() => import('@/components/effects/SmoothScroll'), { 
  ssr: false,
  loading: () => null 
})

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false)
  const router = useRouter()
  const [enableSmoothScroll, setEnableSmoothScroll] = useState(true)
  
  useEffect(() => {
    setMounted(true)
    
    // Disable smooth scroll on project detail pages for better performance
    const isProjectPage = router.pathname.includes('/projects/[id]')
    setEnableSmoothScroll(!isProjectPage)
  }, [router.pathname])

  return (
    <>
      <WebVitals />
      <LoadingScreen />
      {mounted && (
        <>
          <UltraLuxuryCursor />
          <ScrollProgress showPercentage={false} position="top" height={3} />
        </>
      )}
      <AnimatePresence mode="wait">
        {mounted && enableSmoothScroll ? (
          <SmoothScroll>
            <Component {...pageProps} />
          </SmoothScroll>
        ) : (
          <Component {...pageProps} />
        )}
      </AnimatePresence>
    </>
  )
}