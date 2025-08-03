'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'
import LanguageSwitch from '@/components/ui/LanguageSwitch'
import { useAuth } from '@/hooks/useAuth'

export default function Header() {
  const { t } = useTranslation()
  const { user, signOut } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.features'), href: '#features' },
    { name: t('nav.demo'), href: '#demo' },
    { name: t('nav.pricing'), href: '#pricing' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-xl font-bold text-gradient">Parallel-X</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitch />
            
            {user ? (
              <div className="flex items-center space-x-4">
                <Link href="/dashboard" className="nav-link">
                  {t('nav.dashboard')}
                </Link>
                <button
                  onClick={signOut}
                  className="btn-secondary"
                >
                  {t('auth.signOut')}
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link href="/auth/signin" className="btn-secondary">
                  {t('auth.signIn')}
                </Link>
                <Link href="/auth/signup" className="btn-primary">
                  {t('auth.signUp')}
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200 bg-white"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-gray-600 hover:text-primary-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <LanguageSwitch />
                  
                  {user ? (
                    <div className="mt-4 space-y-2">
                      <Link
                        href="/dashboard"
                        className="block px-3 py-2 text-gray-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {t('nav.dashboard')}
                      </Link>
                      <button
                        onClick={() => {
                          signOut()
                          setIsMenuOpen(false)
                        }}
                        className="block w-full text-left px-3 py-2 text-gray-600"
                      >
                        {t('auth.signOut')}
                      </button>
                    </div>
                  ) : (
                    <div className="mt-4 space-y-2">
                      <Link
                        href="/auth/signin"
                        className="block px-3 py-2 text-gray-600"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {t('auth.signIn')}
                      </Link>
                      <Link
                        href="/auth/signup"
                        className="block px-3 py-2 text-primary-600 font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {t('auth.signUp')}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}