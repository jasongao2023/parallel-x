import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import { SupabaseProvider } from '@/components/providers/SupabaseProvider'
import { LanguageProvider } from '@/components/providers/LanguageProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Parallel-X | AI文化产品生成平台',
  description: '使用AI创造文化产品，从创意到商业化的完整平台',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        <SupabaseProvider>
          <LanguageProvider>
            {children}
            <Toaster position="top-right" />
          </LanguageProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}