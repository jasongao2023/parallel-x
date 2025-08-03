'use client'

import { useState, useEffect } from 'react'

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Parallel-X
              </span>
            </div>
            <div className="flex space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                开始创作
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              AI驱动
            </span>
            的
            <br />
            新文化创意产业平台
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            使用最先进的AI技术，将您的创意转化为独特的文化产品。从概念设计到市场销售，我们提供完整的商业化解决方案。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg px-8 py-3 rounded-lg transition-colors duration-200">
              免费开始创作
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-900 font-medium text-lg px-8 py-3 rounded-lg border border-gray-300 transition-colors duration-200">
              观看演示
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              强大的平台功能
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              从AI创作到商业化销售，Parallel-X提供完整的文化产品生命周期管理解决方案
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'AI内容生成',
                description: '使用最先进的AI模型生成高质量的图像和3D模型',
                color: 'from-purple-500 to-pink-500'
              },
              {
                title: '3D模型展示',
                description: '实时3D模型预览和交互，支持材质调整',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: '众筹平台',
                description: '内置众筹功能，帮助创作者筹集生产资金',
                color: 'from-green-500 to-emerald-500'
              },
              {
                title: '知识产权保护',
                description: '自动检测内容原创性，提供版权保护',
                color: 'from-orange-500 to-red-500'
              },
              {
                title: '全球分销',
                description: '连接全球工厂和销售渠道',
                color: 'from-indigo-500 to-purple-500'
              },
              {
                title: '智能定价',
                description: '基于市场数据的智能定价系统',
                color: 'from-yellow-500 to-orange-500'
              }
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                    <div className="w-6 h-6 bg-white rounded opacity-80"></div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold">Parallel-X</span>
            </div>
            
            <p className="text-gray-400 mb-6">
              AI驱动的新文化创意产业平台
            </p>
            
            <div className="text-gray-400 text-sm">
              © 2024 Parallel-X. 保留所有权利。
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
