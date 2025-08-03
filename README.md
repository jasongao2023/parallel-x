# Parallel-X 免费体验版

🚀 AI驱动的文化产品生成平台 - 免费体验版

## 项目简介

Parallel-X是一个创新的AI驱动平台，专门用于生成文化产品，包括3D模型和数字艺术。该平台支持基于现有IP的二次创作和全新IP创建，提供完整的产品生命周期管理。

## 功能特点

- 🎨 **AI图像生成** - 使用Stable Diffusion生成高质量图像
- 🎯 **3D模型展示** - 实时3D模型预览和交互
- 👥 **用户系统** - 完整的注册登录和用户管理
- 🌍 **多语言支持** - 中英文界面切换
- 📱 **响应式设计** - 完美适配PC和移动设备
- 💰 **众筹功能** - 内置项目众筹和支付系统

## 技术栈

- **前端**: Next.js 14 + React 18 + TypeScript
- **样式**: Tailwind CSS + Framer Motion
- **数据库**: Supabase (PostgreSQL)
- **认证**: Supabase Auth
- **AI服务**: HuggingFace Inference API
- **缓存**: Upstash Redis
- **部署**: Vercel

## 免费服务配置

本项目使用100%免费的云服务：

- **Vercel**: 前端部署 (100GB带宽/月)
- **Supabase**: 数据库+认证 (500MB数据库)
- **HuggingFace**: AI服务 (1000次/月)
- **Upstash**: Redis缓存 (10K请求/天)

## 快速开始

### 1. 克隆项目
\`\`\`bash
git clone https://github.com/your-username/parallel-x-demo.git
cd parallel-x-demo
\`\`\`

### 2. 安装依赖
\`\`\`bash
npm install
\`\`\`

### 3. 环境配置
复制 \`.env.example\` 为 \`.env.local\` 并填入您的API密钥：

\`\`\`bash
cp .env.example .env.local
\`\`\`

### 4. 启动开发服务器
\`\`\`bash
npm run dev
\`\`\`

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

## 环境变量配置

在 \`.env.local\` 文件中配置以下变量：

\`\`\`env
# Supabase配置
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# HuggingFace AI服务
HUGGINGFACE_API_KEY=your_huggingface_api_key

# Upstash Redis缓存
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
\`\`\`

## 部署到Vercel

1. 将代码推送到GitHub
2. 在Vercel中导入GitHub仓库
3. 配置环境变量
4. 点击部署

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/parallel-x-demo)

## 功能限制（免费版）

- AI图像生成：20张/天/用户
- 文件存储：100MB总容量
- 并发用户：50个
- 数据库：500MB

## 升级路径

- **创作者版** (¥199/月): 1000张/月，10GB存储
- **企业版** (¥999/月): 无限制使用，完整功能

## 项目结构

\`\`\`
parallel-x-demo/
├── app/                    # Next.js 13+ App Router
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 首页
├── components/            # React组件
│   ├── features/          # 功能组件
│   ├── layout/            # 布局组件
│   ├── providers/         # Context提供者
│   ├── sections/          # 页面区块
│   └── ui/                # UI组件
├── hooks/                 # 自定义Hooks
├── public/                # 静态资源
└── package.json           # 项目配置
\`\`\`

## 贡献指南

欢迎提交Issue和Pull Request！

## 许可证

MIT License

## 联系我们

- 邮箱: contact@parallel-x.com
- 官网: https://parallel-x.com
- 社区: https://community.parallel-x.com

---

⭐ 如果这个项目对您有帮助，请给我们一个Star！