'use client'

import { useSupabase } from '@/components/providers/SupabaseProvider'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export function useAuth() {
  const { supabase, user, loading } = useSupabase()
  const router = useRouter()

  const signUp = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`
        }
      })

      if (error) {
        throw error
      }

      if (data.user && !data.session) {
        toast.success('请检查您的邮箱并点击确认链接完成注册')
      } else {
        toast.success('注册成功！')
        router.push('/dashboard')
      }

      return { data, error: null }
    } catch (error: any) {
      toast.error(error.message || '注册失败')
      return { data: null, error }
    }
  }

  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (error) {
        throw error
      }

      toast.success('登录成功！')
      router.push('/dashboard')
      return { data, error: null }
    } catch (error: any) {
      toast.error(error.message || '登录失败')
      return { data: null, error }
    }
  }

  const signInWithProvider = async (provider: 'google' | 'github') => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback`
        }
      })

      if (error) {
        throw error
      }

      return { data, error: null }
    } catch (error: any) {
      toast.error(error.message || '登录失败')
      return { data: null, error }
    }
  }

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      
      if (error) {
        throw error
      }

      toast.success('已退出登录')
      router.push('/')
    } catch (error: any) {
      toast.error(error.message || '退出失败')
    }
  }

  const resetPassword = async (email: string) => {
    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`
      })

      if (error) {
        throw error
      }

      toast.success('密码重置邮件已发送，请检查您的邮箱')
      return { data, error: null }
    } catch (error: any) {
      toast.error(error.message || '发送失败')
      return { data: null, error }
    }
  }

  const updatePassword = async (password: string) => {
    try {
      const { data, error } = await supabase.auth.updateUser({
        password
      })

      if (error) {
        throw error
      }

      toast.success('密码更新成功')
      return { data, error: null }
    } catch (error: any) {
      toast.error(error.message || '更新失败')
      return { data: null, error }
    }
  }

  return {
    user,
    loading,
    signUp,
    signIn,
    signInWithProvider,
    signOut,
    resetPassword,
    updatePassword
  }
}