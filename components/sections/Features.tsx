'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { 
  SparklesIcon, 
  CubeIcon, 
  ShoppingBagIcon, 
  ShieldCheckIcon,
  GlobeAltIcon,
  CurrencyDollarIcon 
} from '@heroicons/react/24/outline'

export default function Features() {
  const { t } = useTranslation()

  const features = [
    {
      icon: SparklesIcon,
      title: 'AI内容生成',
      description: '使用最先进的AI模型生成高质量的图像和3D模型，支持文本描述和图像输入',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: CubeIcon,
      title: '3D模型展示',
      description: '实时3D模型预览和交互，支持材质调整、颜色变换和尺寸修改',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: ShoppingBagIcon,
      title: '众筹平台',
      description: '内置众筹功能，帮助创作者筹集生产资金，支持多种奖励层级设置',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: ShieldCheckIcon,
      title: '知识产权保护',
      description: '自动检测内容原创性，提供版权保护和IP授权管理服务',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: GlobeAltIcon,
      title: '全球分销',
      description: '连接全球工厂和销售渠道，实现从创意到产品的完整商业化流程',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: CurrencyDollarIcon,
      title: '智能定价',
      description: '基于市场数据和用户反馈的智能定价系统，最大化创作者收益',
      color: 'from-yellow-500 to-orange-500'
    }
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              强大的平台功能
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              从AI创作到商业化销售，Parallel-X提供完整的文化产品生命周期管理解决方案
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card hover:shadow-apple-lg transition-all duration-300 group-hover:-translate-y-1">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 统计数据 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">10,000+</div>
              <div className="text-primary-100">AI生成作品</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-primary-100">成功众筹项目</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-primary-100">合作工厂</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-primary-100">系统可用性</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}