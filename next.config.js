/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'supabase.co',
      'huggingface.co',
      'cloudinary.com'
    ],
  }
}

module.exports = nextConfig
