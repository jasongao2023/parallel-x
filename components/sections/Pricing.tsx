'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function Pricing() {
  const { t } = useTranslation()

  const plans = [
    {
      name: '免费体验版',
      price: '¥0',
      period: '/月',
      description: '适合个人用户体验和小规模创作',
      features: [
        { name: 'AI图像生成', limit: '20张/天', included: true },
        { name: '3D模型展示', limit: '基础功能', included: true },
        { name: '用户注册登录', limit: '无限制', included: true },
        { name: '文件存储', limit: '100MB', included: true },
        { name: '众筹功能', limit: '演示版', included: true },
        { name: '多语言支持', limit: '中英文', included: true },
        { name: '社区支持', limit: '论坛', included: true },
        { name: '高级AI模型', limit: '', included: false },
        { name: '无限存储', limit: '', included: false },
        { name: '商业授权', limit: '', included: false },
        { name: '专属客服', limit: '', included: false }
      ],
      cta: '立即免费体验',
      popular: false,
      current: true
    },
    {
      name: '创作者版',
      price: '¥199',
      period: '/月',
      description: '适合专业创作者和小型工作室',
      features: [
        { name: 'AI图像生成', limit: '1000张/月', included: true },
        { name: '3D模型展示', limit: '高级功能', included: true },
        { name: '用户注册登录', limit: '无限制', included: true },
        { name: '文件存储', limit: '10GB', included: true },
        { name: '众筹功能', limit: '完整版', included: true },
        { name: '多语言支持', limit: '10种语言', included: true },
        { name: '邮件支持', limit: '48小时响应', included: true },
        { name: '高级AI模型', limit: '包含', included: true },
        { name: '商业授权', limit: '个人商用', included: true },
        { name: '数据分析', limit: '基础版', included: true },
        { name: '专属客服', limit: '', included: false }
      ],
      cta: '升级到创作者版',
      popular: true,
      current: false
    },
    {
      name: '企业版',
      price: '¥999',
      period: '/月',
      description: '适合大型企业和商业化运营',
      features: [
        { name: 'AI图像生成', limit: '无限制', included: true },
        { name: '3D模型展示', limit: '企业级', included: true },
        { name: '用户管理', limit: '多租户', included: true },
        { name: '文件存储', limit: '无限制', included: true },
        { name: '众筹功能', limit: '白标版', included: true },
        { name: '多语言支持', limit: '全球化', included: true },
        { name: '24/7技术支持', limit: '专属团队', included: true },
        { name: '高级AI模型', limit: '最新版本', included: true },
        { name: '商业授权', limit: '企业商用', included: true },
        { name: '高级分析', limit: '完整版', included: true },
        { name: 'API接入', limit: '完整API', included: true }
      ],
      cta: '联系销售',
      popular: false,
      current: false
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              选择适合您的方案
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              从免费体验到企业级解决方案，我们为不同需求的用户提供灵活的定价选项
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${
                plan.popular ? 'lg:-mt-4' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary-600 to-primary-800 text-white px-4 py-1 rounded-full text-sm font-medium">
                    最受欢迎
                  </span>
                </div>
              )}
              
              <div className={`card h-full ${
                plan.popular 
                  ? 'border-primary-200 shadow-apple-lg' 
                  : plan.current 
                    ? 'border-green-200 bg-green-50' 
                    : ''
              }`}>
                {plan.current && (
                  <div className="flex items-center justify-center mb-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      当前方案
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-1">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-gray-600">
                    {plan.description}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        {feature.included ? (
                          <CheckIcon className="w-5 h-5 text-green-500" />
                        ) : (
                          <XMarkIcon className="w-5 h-5 text-gray-300" />
                        )}
                      </div>
                      <div className="ml-3">
                        <span className={`text-sm ${
                          feature.included ? 'text-gray-900' : 'text-gray-400'
                        }`}>
                          {feature.name}
                        </span>
                        {feature.limit && (
                          <span className={`text-xs ml-2 ${
                            feature.included ? 'text-gray-600' : 'text-gray-400'
                          }`}>
                            ({feature.limit})
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  {plan.current ? (
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                      当前使用中
                    </button>
                  ) : (
                    <Link
                      href={plan.name === '企业版' ? '/contact' : '/auth/signup'}
                      className={`block w-full text-center font-semibold py-3 px-6 rounded-lg transition-colors duration-200 ${
                        plan.popular
                          ? 'bg-primary-600 hover:bg-primary-700 text-white'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                      }`}
                    >
                      {plan.cta}
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              常见问题
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                免费版有什么限制？
              </h4>
              <p className="text-gray-600 text-sm">
                免费版每天可生成20张AI图片，存储空间100MB，支持基础3D展示功能。适合个人体验和小规模创作。
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                可以随时升级或降级吗？
              </h4>
              <p className="text-gray-600 text-sm">
                是的，您可以随时升级到付费版本。降级需要在下个计费周期生效，已生成的内容会保留。
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                支持哪些支付方式？
              </h4>
              <p className="text-gray-600 text-sm">
                支持支付宝、微信支付、银行卡等多种支付方式。企业用户还支持对公转账。
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                数据安全如何保障？
              </h4>
              <p className="text-gray-600 text-sm">
                我们采用银行级加密技术，符合GDPR等国际数据保护标准，您的创作内容完全私有。
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}