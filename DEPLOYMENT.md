# 🚀 Parallel-X 免费版部署指南

## 📋 部署前准备

确保您已经注册了以下免费账号：
- ✅ GitHub账号
- ✅ Vercel账号（用GitHub登录）
- ✅ Supabase账号（用GitHub登录）
- ✅ HuggingFace账号
- ✅ Upstash账号（用GitHub登录）

## 🔧 第一步：配置Supabase数据库

### 1. 创建Supabase项目
1. 登录 [Supabase](https://supabase.com)
2. 点击 "New Project"
3. 项目名称：`parallel-x-demo`
4. 数据库密码：设置一个强密码（记住它）
5. 地区选择：选择离您最近的地区
6. 点击 "Create new project"

### 2. 获取项目配置
项目创建完成后：
1. 进入项目设置 (Settings)
2. 点击 "API" 标签
3. 复制以下信息：
   - **Project URL**: `https://xxx.supabase.co`
   - **anon public key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

### 3. 创建数据库表
1. 点击左侧菜单 "SQL Editor"
2. 点击 "New query"
3. 复制粘贴以下SQL代码：

\`\`\`sql
-- 创建用户配置表
CREATE TABLE profiles (
  id UUID REFERENCES auth.users PRIMARY KEY,
  username TEXT UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- 创建内容表
CREATE TABLE contents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id),
  title TEXT NOT NULL,
  description TEXT,
  prompt TEXT,
  image_url TEXT,
  model_url TEXT,
  status TEXT DEFAULT 'draft',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- 创建项目表
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  content_id UUID REFERENCES contents(id),
  user_id UUID REFERENCES profiles(id),
  title TEXT NOT NULL,
  description TEXT,
  target_amount DECIMAL(10,2),
  current_amount DECIMAL(10,2) DEFAULT 0,
  status TEXT DEFAULT 'active',
  deadline TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- 启用行级安全策略
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE contents ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- 创建安全策略
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can view own contents" ON contents
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own contents" ON contents
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own contents" ON contents
  FOR UPDATE USING (auth.uid() = user_id);

-- 创建用户注册触发器
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, username, full_name, avatar_url)
  VALUES (new.id, new.raw_user_meta_data->>'username', new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();
\`\`\`

4. 点击 "Run" 执行SQL

## 🤖 第二步：配置HuggingFace AI服务

### 1. 获取API密钥
1. 登录 [HuggingFace](https://huggingface.co)
2. 点击右上角头像 → "Settings"
3. 点击左侧 "Access Tokens"
4. 点击 "New token"
5. 名称：`parallel-x-demo`
6. 类型选择：`Read`
7. 点击 "Generate a token"
8. 复制生成的token（以 `hf_` 开头）

## 💾 第三步：配置Upstash Redis

### 1. 创建Redis数据库
1. 登录 [Upstash](https://upstash.com)
2. 点击 "Create Database"
3. 名称：`parallel-x-cache`
4. 地区：选择离您最近的地区
5. 类型：选择 "Free" 
6. 点击 "Create"

### 2. 获取连接信息
1. 进入创建的数据库
2. 点击 "REST API" 标签
3. 复制以下信息：
   - **UPSTASH_REDIS_REST_URL**: `https://xxx.upstash.io`
   - **UPSTASH_REDIS_REST_TOKEN**: `AXXXxxx`

## 📁 第四步：上传代码到GitHub

### 方法1：使用GitHub网页界面（推荐新手）
1. 进入您创建的GitHub仓库
2. 点击 "uploading an existing file"
3. 将 `parallel-x-free` 文件夹中的所有文件拖拽到页面
4. 提交信息填写：`Initial commit - Parallel-X demo`
5. 点击 "Commit changes"

### 方法2：使用Git命令行
\`\`\`bash
# 克隆您的仓库
git clone https://github.com/your-username/parallel-x-demo.git
cd parallel-x-demo

# 复制项目文件到仓库目录
# (将parallel-x-free文件夹中的所有文件复制到这里)

# 添加文件
git add .
git commit -m "Initial commit - Parallel-X demo"
git push origin main
\`\`\`

## 🚀 第五步：部署到Vercel

### 1. 导入GitHub仓库
1. 登录 [Vercel](https://vercel.com)
2. 点击 "New Project"
3. 找到您的 `parallel-x-demo` 仓库
4. 点击 "Import"

### 2. 配置环境变量
在部署配置页面，点击 "Environment Variables"，添加以下变量：

\`\`\`
NEXT_PUBLIC_SUPABASE_URL = https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
HUGGINGFACE_API_KEY = hf_xxxxxxxxxx
UPSTASH_REDIS_REST_URL = https://xxx.upstash.io
UPSTASH_REDIS_REST_TOKEN = AXXXxxx
\`\`\`

### 3. 部署
1. 点击 "Deploy"
2. 等待部署完成（约2-3分钟）
3. 部署成功后会显示您的网站链接

## ✅ 第六步：测试功能

### 1. 访问网站
点击Vercel提供的链接，应该能看到：
- 精美的首页设计
- 功能介绍区域
- AI生成演示
- 定价方案

### 2. 测试用户注册
1. 点击 "免费开始创作"
2. 填写邮箱和密码注册
3. 检查邮箱验证邮件
4. 点击验证链接完成注册

### 3. 测试AI生成
1. 登录后进入AI生成页面
2. 输入描述文字
3. 点击生成（可能需要30秒）
4. 查看生成结果

## 🔧 常见问题解决

### 问题1：Supabase连接失败
- 检查环境变量是否正确配置
- 确认Supabase项目状态正常
- 检查API密钥是否有效

### 问题2：AI生成失败
- 检查HuggingFace API密钥
- 确认没有超出免费额度
- 尝试简化提示词

### 问题3：部署失败
- 检查所有环境变量是否配置
- 确认代码没有语法错误
- 查看Vercel部署日志

## 📊 使用限制监控

### 免费额度监控
- **Vercel**: 100GB带宽/月
- **Supabase**: 500MB数据库，50MB文件存储
- **HuggingFace**: 1000次API调用/月
- **Upstash**: 10,000次请求/天

### 超出限制时的处理
1. 系统会自动显示升级提示
2. 可以等待下个周期重置
3. 或升级到付费版本

## 🎉 完成！

恭喜！您的Parallel-X免费体验版已经成功部署！

现在您可以：
- 分享网站链接给朋友体验
- 测试所有功能
- 根据需要升级到付费版本
- 自定义和扩展功能

## 📞 获取帮助

如果遇到问题，可以：
- 查看项目README文档
- 在GitHub提交Issue
- 联系技术支持

---

🎊 享受您的AI创作之旅！