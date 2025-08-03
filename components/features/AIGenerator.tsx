'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { SparklesIcon, PhotoIcon } from '@heroicons/react/24/outline'
import toast from 'react-hot-toast'

export default function AIGenerator() {
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedImage, setGeneratedImage] = useState<string | null>(null)
  const [generationCount, setGenerationCount] = useState(0)

  const examplePrompts = [
    '未来主义城市，霓虹灯，赛博朋克风格',
    '魔法森林，发光的蘑菇，仙境风格',
    '机械与生物结合的龙，蒸汽朋克风格',
    '宁静的日式庭院，樱花飘落，水墨画风格',
    '太空中的水晶城堡，星云背景，科幻风格'
  ]

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast.error('请输入描述文字')
      return
    }

    if (generationCount >= 20) {
      toast.error('今日免费生成次数已用完，请明天再试或升级到付费版本')
      return
    }

    setIsGenerating(true)
    
    try {
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 3000))
      
      // 模拟生成的图片（实际应该调用HuggingFace API）
      const mockImageUrl = `https://picsum.photos/512/512?random=${Date.now()}`
      setGeneratedImage(mockImageUrl)
      setGenerationCount(prev => prev + 1)
      
      toast.success('图片生成成功！')
    } catch (error) {
      toast.error('生成失败，请重试')
    } finally {
      setIsGenerating(false)
    }
  }

  const handleExampleClick = (examplePrompt: string) => {
    setPrompt(examplePrompt)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* 输入区域 */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              描述您想要生成的图片
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="例如：一只可爱的机器猫在未来城市中飞行，卡通风格，色彩鲜艳..."
              className="input-field h-32 resize-none"
              maxLength={500}
            />
            <div className="text-right text-sm text-gray-500 mt-1">
              {prompt.length}/500
            </div>
          </div>

          {/* 示例提示词 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              示例提示词
            </label>
            <div className="space-y-2">
              {examplePrompts.map((example, index) => (
                <button
                  key={index}
                  onClick={() => handleExampleClick(example)}
                  className="block w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm text-gray-700 transition-colors duration-200"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>

          {/* 生成按钮 */}
          <button
            onClick={handleGenerate}
            disabled={isGenerating || !prompt.trim()}
            className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {isGenerating ? (
              <>
                <div className="loading-spinner"></div>
                <span>生成中...</span>
              </>
            ) : (
              <>
                <SparklesIcon className="w-5 h-5" />
                <span>生成图片</span>
              </>
            )}
          </button>

          {/* 使用统计 */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">今日已使用:</span>
              <span className="font-medium text-gray-900">
                {generationCount}/20 次
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div 
                className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(generationCount / 20) * 100}%` }}
              ></div>
            </div>
            {generationCount >= 15 && (
              <p className="text-xs text-orange-600 mt-2">
                免费额度即将用完，
                <button className="underline hover:no-underline">
                  升级到付费版本
                </button>
                获得无限制使用
              </p>
            )}
          </div>
        </div>

        {/* 结果展示区域 */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              生成结果
            </label>
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              {isGenerating ? (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="loading-spinner w-8 h-8 mx-auto mb-4"></div>
                    <p className="text-gray-600">AI正在创作中...</p>
                    <p className="text-sm text-gray-500 mt-1">预计需要30秒</p>
                  </div>
                </div>
              ) : generatedImage ? (
                <motion.img
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  src={generatedImage}
                  alt="AI生成的图片"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <PhotoIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">生成的图片将显示在这里</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 操作按钮 */}
          {generatedImage && !isGenerating && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex space-x-3"
            >
              <button className="flex-1 btn-secondary">
                下载图片
              </button>
              <button className="flex-1 btn-primary">
                保存到画廊
              </button>
            </motion.div>
          )}

          {/* 参数调整 */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-3">生成参数</h4>
            <div className="space-y-3">
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  图片尺寸
                </label>
                <select className="w-full input-field">
                  <option value="512x512">正方形 (512×512)</option>
                  <option value="768x512">横向 (768×512)</option>
                  <option value="512x768">纵向 (512×768)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm text-gray-600 mb-1">
                  艺术风格
                </label>
                <select className="w-full input-field">
                  <option value="realistic">写实风格</option>
                  <option value="cartoon">卡通风格</option>
                  <option value="anime">动漫风格</option>
                  <option value="oil-painting">油画风格</option>
                  <option value="watercolor">水彩风格</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}