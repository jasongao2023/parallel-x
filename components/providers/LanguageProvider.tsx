'use client'

import { createContext, useContext, useEffect } from 'react'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// 中文翻译
const zhTranslations = {
  nav: {
    home: '首页',
    features: '功能',
    demo: '演示',
    pricing: '定价',
    dashboard: '控制台'
  },
  auth: {
    signIn: '登录',
    signUp: '注册',
    signOut: '退出',
    email: '邮箱',
    password: '密码',
    confirmPassword: '确认密码',
    forgotPassword: '忘记密码？',
    noAccount: '还没有账号？',
    hasAccount: '已有账号？',
    signInWithGoogle: '使用Google登录',
    signInWithGitHub: '使用GitHub登录'
  },
  hero: {
    subtitle: '使用最先进的AI技术，将您的创意转化为独特的文化产品。从概念设计到市场销售，我们提供完整的商业化解决方案。',
    feature1: {
      title: 'AI智能生成',
      description: '先进的AI模型，快速生成高质量内容'
    },
    feature2: {
      title: '3D实时预览',
      description: '实时3D模型展示和交互体验'
    },
    feature3: {
      title: '全球商业化',
      description: '从创意到销售的完整商业链条'
    },
    cta: {
      primary: '免费开始创作',
      secondary: '观看演示'
    }
  },
  common: {
    loading: '加载中...',
    error: '出错了',
    success: '成功',
    cancel: '取消',
    confirm: '确认',
    save: '保存',
    delete: '删除',
    edit: '编辑',
    create: '创建',
    update: '更新'
  }
}

// 英文翻译
const enTranslations = {
  nav: {
    home: 'Home',
    features: 'Features',
    demo: 'Demo',
    pricing: 'Pricing',
    dashboard: 'Dashboard'
  },
  auth: {
    signIn: 'Sign In',
    signUp: 'Sign Up',
    signOut: 'Sign Out',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    forgotPassword: 'Forgot Password?',
    noAccount: "Don't have an account?",
    hasAccount: 'Already have an account?',
    signInWithGoogle: 'Sign in with Google',
    signInWithGitHub: 'Sign in with GitHub'
  },
  hero: {
    subtitle: 'Transform your creative ideas into unique cultural products using cutting-edge AI technology. From concept design to market sales, we provide complete commercialization solutions.',
    feature1: {
      title: 'AI Generation',
      description: 'Advanced AI models for high-quality content generation'
    },
    feature2: {
      title: '3D Preview',
      description: 'Real-time 3D model display and interactive experience'
    },
    feature3: {
      title: 'Global Commerce',
      description: 'Complete business chain from creativity to sales'
    },
    cta: {
      primary: 'Start Creating Free',
      secondary: 'Watch Demo'
    }
  },
  common: {
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    cancel: 'Cancel',
    confirm: 'Confirm',
    save: 'Save',
    delete: 'Delete',
    edit: 'Edit',
    create: 'Create',
    update: 'Update'
  }
}

// 初始化i18n
i18n
  .use(initReactI18next)
  .init({
    resources: {
      zh: { translation: zhTranslations },
      en: { translation: enTranslations }
    },
    lng: 'zh', // 默认语言
    fallbackLng: 'zh',
    interpolation: {
      escapeValue: false
    }
  })

const LanguageContext = createContext<{
  language: string
  changeLanguage: (lang: string) => void
} | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
    localStorage.setItem('language', lang)
  }

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage)
    }
  }, [])

  return (
    <LanguageContext.Provider value={{ 
      language: i18n.language, 
      changeLanguage 
    }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}