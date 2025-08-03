'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import Demo from '@/components/sections/Demo'
import Pricing from '@/components/sections/Pricing'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

export default function HomePage() {
  const { t } = useTranslation()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading-spinner w-8 h-8"></div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Header />
      
      <main>
        <Hero />
        <Features />
        <Demo />
        <Pricing />
      </main>
      
      <Footer />
    </motion.div>
  )
}