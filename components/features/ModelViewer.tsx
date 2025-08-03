'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  CubeIcon, 
  ArrowPathIcon, 
  MagnifyingGlassPlusIcon,
  MagnifyingGlassMinusIcon,
  SwatchIcon 
} from '@heroicons/react/24/outline'

export default function ModelViewer() {
  const [selectedModel, setSelectedModel] = useState('robot')
  const [isLoading, setIsLoading] = useState(false)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [selectedMaterial, setSelectedMaterial] = useState('default')
  const viewerRef = useRef<HTMLDivElement>(null)

  const models = [
    {
      id: 'robot',
      name: '机器人模型',
      description: '科幻风格的人形机器人',
      thumbnail: '/models/robot-thumb.jpg'
    },
    {
      id: 'dragon',
      name: '中国龙',
      description: '传统文化元素的3D龙模型',
      thumbnail: '/models/dragon-thumb.jpg'
    },
    {
      id: 'building',
      name: '未来建筑',
      description: '现代主义风格建筑模型',
      thumbnail: '/models/building-thumb.jpg'
    }
  ]

  const materials = [
    { id: 'default', name: '默认材质', color: '#888888' },
    { id: 'metal', name: '金属', color: '#C0C0C0' },
    { id: 'gold', name: '黄金', color: '#FFD700' },
    { id: 'plastic', name: '塑料', color: '#FF6B6B' },
    { id: 'glass', name: '玻璃', color: '#87CEEB' }
  ]

  const handleModelChange = (modelId: string) => {
    setIsLoading(true)
    setSelectedModel(modelId)
    
    // 模拟模型加载
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.2, 3))
  }

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.2, 0.5))
  }

  const handleReset = () => {
    setRotation({ x: 0, y: 0 })
    setZoom(1)
  }

  // 模拟鼠标拖拽旋转
  const handleMouseDown = (e: React.MouseEvent) => {
    const startX = e.clientX
    const startY = e.clientY
    const startRotation = { ...rotation }

    const handleMouseMove = (e: MouseEvent) => {
      const deltaX = e.clientX - startX
      const deltaY = e.clientY - startY
      
      setRotation({
        x: startRotation.x + deltaY * 0.5,
        y: startRotation.y + deltaX * 0.5
      })
    }

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* 模型选择 */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              选择3D模型
            </h3>
            <div className="space-y-3">
              {models.map((model) => (
                <button
                  key={model.id}
                  onClick={() => handleModelChange(model.id)}
                  className={`w-full p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                    selectedModel === model.id
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                      <CubeIcon className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {model.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {model.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 材质选择 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              材质设置
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {materials.map((material) => (
                <button
                  key={material.id}
                  onClick={() => setSelectedMaterial(material.id)}
                  className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                    selectedMaterial === material.id
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: material.color }}
                    ></div>
                    <span className="text-sm font-medium">
                      {material.name}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 控制按钮 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              视图控制
            </h3>
            <div className="space-y-3">
              <div className="flex space-x-2">
                <button
                  onClick={handleZoomIn}
                  className="flex-1 btn-secondary flex items-center justify-center space-x-2"
                >
                  <MagnifyingGlassPlusIcon className="w-4 h-4" />
                  <span>放大</span>
                </button>
                <button
                  onClick={handleZoomOut}
                  className="flex-1 btn-secondary flex items-center justify-center space-x-2"
                >
                  <MagnifyingGlassMinusIcon className="w-4 h-4" />
                  <span>缩小</span>
                </button>
              </div>
              
              <button
                onClick={handleReset}
                className="w-full btn-secondary flex items-center justify-center space-x-2"
              >
                <ArrowPathIcon className="w-4 h-4" />
                <span>重置视图</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3D查看器 */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-900">
                  3D模型查看器
                </h3>
                <div className="text-sm text-gray-600">
                  缩放: {Math.round(zoom * 100)}%
                </div>
              </div>
            </div>
            
            <div 
              ref={viewerRef}
              className="model-viewer cursor-grab active:cursor-grabbing"
              onMouseDown={handleMouseDown}
              style={{ height: '500px' }}
            >
              {isLoading ? (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="loading-spinner w-8 h-8 mx-auto mb-4"></div>
                    <p className="text-gray-600">加载3D模型中...</p>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <motion.div
                    animate={{
                      rotateX: rotation.x,
                      rotateY: rotation.y,
                      scale: zoom
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    className="w-64 h-64 bg-gradient-to-br from-gray-300 to-gray-500 rounded-lg shadow-lg flex items-center justify-center"
                    style={{
                      background: `linear-gradient(45deg, ${materials.find(m => m.id === selectedMaterial)?.color || '#888888'}, #666666)`
                    }}
                  >
                    <div className="text-center text-white">
                      <CubeIcon className="w-16 h-16 mx-auto mb-2" />
                      <p className="font-medium">
                        {models.find(m => m.id === selectedModel)?.name}
                      </p>
                      <p className="text-sm opacity-75">
                        {selectedMaterial} 材质
                      </p>
                    </div>
                  </motion.div>
                </div>
              )}
            </div>
            
            <div className="bg-gray-50 px-4 py-3 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>拖拽旋转 • 滚轮缩放</span>
                <div className="flex items-center space-x-4">
                  <span>X: {Math.round(rotation.x)}°</span>
                  <span>Y: {Math.round(rotation.y)}°</span>
                </div>
              </div>
            </div>
          </div>

          {/* 模型信息 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6 bg-white rounded-lg shadow p-6"
          >
            <h4 className="font-semibold text-gray-900 mb-3">
              模型详情
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">模型名称:</span>
                <span className="ml-2 font-medium">
                  {models.find(m => m.id === selectedModel)?.name}
                </span>
              </div>
              <div>
                <span className="text-gray-600">当前材质:</span>
                <span className="ml-2 font-medium">
                  {materials.find(m => m.id === selectedMaterial)?.name}
                </span>
              </div>
              <div>
                <span className="text-gray-600">文件格式:</span>
                <span className="ml-2 font-medium">GLB</span>
              </div>
              <div>
                <span className="text-gray-600">文件大小:</span>
                <span className="ml-2 font-medium">2.5 MB</span>
              </div>
            </div>
            
            <div className="mt-4 flex space-x-3">
              <button className="btn-primary">
                下载模型
              </button>
              <button className="btn-secondary">
                分享链接
              </button>
              <button className="btn-secondary">
                添加到项目
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}