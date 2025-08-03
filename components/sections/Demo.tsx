'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { PhotoIcon, CubeIcon, SparklesIcon } from '@heroicons/react/24/outline'
import AIGenerator from '@/components/features/AIGenerator'
import ModelViewer from '@/components/features/ModelViewer'

export default function Demo() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState('ai-generation')

  const tabs = [
    {
      id: 'ai-generation',
      name: 'AI图像生成',
      icon: SparklesIcon,
      description: '输入文字描述，AI为您生成独特的艺术作品'
    },
    {
      id: '3d-model',
      name: '3D模型展示',
      icon: CubeIcon,
      description: '实时3D模型预览，支持360度旋转和交互'
    },
    {
      id: 'gallery',
      name: '作品画廊',
      icon: PhotoIcon,
      description: '浏览社区创作的精彩作品和成功案例'
    }
  ]

  const demoImages = [
    {
      title: '赛博朋克城市',
      prompt: '未来主义城市，霓虹灯，赛博朋克风格',
      image: '/demo/cyberpunk-city.jpg'
    },
    {
      title: '梦幻森林',
      prompt: '魔法森林，发光的蘑菇，仙境风格',
      image: '/demo/fantasy-forest.jpg'
    },
    {
      title: '机械生物',
      prompt: '机械与生物结合的龙，蒸汽朋克风格',
      image: '/demo/mechanical-dragon.jpg'
    }
  ]

  return (
    <section id="demo" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              体验平台功能
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              立即体验AI创作的魅力，看看几秒钟内就能生成令人惊艳的作品
            </p>
          </motion.div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 m-2 rounded-lg font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl shadow-apple-lg p-8"
        >
          {activeTab === 'ai-generation' && (
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  AI图像生成演示
                </h3>
                <p className="text-gray-600">
                  输入您的创意描述，AI将为您生成独特的艺术作品
                </p>
              </div>
              <AIGenerator />
            </div>
          )}

          {activeTab === '3d-model' && (
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  3D模型展示
                </h3>
                <p className="text-gray-600">
                  实时3D模型预览，支持旋转、缩放和材质调整
                </p>
              </div>
              <ModelViewer />
            </div>
          )}

          {activeTab === 'gallery' && (
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  社区作品画廊
                </h3>
                <p className="text-gray-600">
                  浏览其他用户创作的精彩作品，获取创作灵感
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {demoImages.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="bg-gray-200 aspect-square rounded-lg overflow-hidden mb-4 group-hover:shadow-lg transition-shadow duration-200">
                      <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                        <div className="text-center">
                          <PhotoIcon className="w-12 h-12 text-primary-600 mx-auto mb-2" />
                          <p className="text-sm text-primary-700 font-medium">
                            {item.title}
                          </p>
                        </div>
                      </div>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      提示词: {item.prompt}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              准备开始您的创作之旅？
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              注册免费账号，立即体验AI创作的无限可能。每天免费生成20张图片，无需信用卡。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                免费开始创作
              </button>
              <button className="border border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-200">
                了解更多功能
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}