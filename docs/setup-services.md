# 🚀 Quick Setup Guide for AI Career Coach

Follow these steps to get all services set up quickly:

## 1. 🗄️ Database Setup (Neon - 2 minutes)

1. Go to [Neon Console](https://console.neon.tech/)
2. Click "Sign Up" → "Continue with GitHub"
3. Click "Create Project"
4. Choose a name: `ai-career-coach`
5. Copy the connection string (starts with `postgresql://...`)
6. Save it as `NEXT_PUBLIC_NEON_DB_CONNECTION_STRING`

## 2. 🔐 Authentication Setup (Clerk - 3 minutes)

1. Go to [Clerk Dashboard](https://dashboard.clerk.com/)
2. Click "Create Application"
3. Choose "Next.js" as framework
4. Application name: `AI Career Coach`
5. Go to "API Keys" tab
6. Copy:
   - **Publishable Key** → `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - **Secret Key** → `CLERK_SECRET_KEY`
7. Go to "Domains" tab and add your Vercel domain (after deployment)

## 3. 🤖 AI Services Setup (5 minutes)

### Google Gemini API
1. Go to [Google AI Studio](https://aistudio.google.com/)
2. Click "Get API Key"
3. Create new API key
4. Copy the key → `GEMINI_API_KEY`

### Hugging Face API
1. Go to [Hugging Face](https://huggingface.co/)
2. Sign up with GitHub
3. Go to Settings → Access Tokens
4. Click "New token"
5. Name: `ai-career-coach`
6. Select "Read" scope
7. Copy the token → `HUGGINGFACE_API_KEY`

## 4. ⚡ Background Jobs Setup (Inngest - 3 minutes)

1. Go to [Inngest Dashboard](https://app.inngest.com/)
2. Click "Create App"
3. App name: `ai-career-coach`
4. Copy:
   - **Server Host** → `INNGEST_SERVER_HOST`
   - **Signing Key** → `INNGEST_SIGNING_KEY`

## 5. 📁 File Upload Setup (ImageKit - 3 minutes)

1. Go to [ImageKit Dashboard](https://imagekit.io/)
2. Sign up with GitHub
3. Go to Developer Options → API Keys
4. Copy:
   - **Public Key** → `IMAGEKIT_PUBLIC_KEY`
   - **Private Key** → `IMAGEKIT_PRIVATE_KEY`
   - **URL Endpoint** → `IMAGE_ENDPOINT_URL`

## 6. 🚀 Deploy to Vercel (5 minutes)

1. Go to [Vercel Dashboard](https://vercel.com/)
2. Click "New Project"
3. Import your GitHub repository
4. Add all environment variables from above
5. Click "Deploy"

## 7. 🔧 Final Configuration

After deployment:
1. Copy your Vercel URL (e.g., `https://ai-career-coach-abc123.vercel.app`)
2. Go to Clerk Dashboard → Domains → Add your Vercel URL
3. Update Inngest with your Vercel function URL

## ✅ Test Your Deployment

Visit your Vercel URL and test:
- [ ] User registration/login works
- [ ] AI Career Chat responds
- [ ] Resume upload and analysis works
- [ ] Roadmap generation works
- [ ] Mock interview starts

## 🎯 Total Time: ~20 minutes

All services are free and your app will be live and ready for your resume!

## 📝 Resume Entry

**AI Career Coach** - Full-stack web application
- **Tech Stack**: Next.js, TypeScript, Tailwind CSS, Neon DB, Clerk Auth, AI APIs
- **Features**: AI-powered career guidance, resume analysis, interview prep, learning roadmaps
- **Live Demo**: https://anuj-kumar-ai-career-coach.vercel.app
- **GitHub**: https://github.com/AnujYadav-1915/AI_Career_Coach_Agent-main


