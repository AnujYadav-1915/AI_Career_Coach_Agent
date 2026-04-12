# AI Career Coach - Deployment Script (PowerShell)
Write-Host "🚀 AI Career Coach Deployment Script" -ForegroundColor Green
Write-Host "=====================================" -ForegroundColor Green

# Check if git is initialized
if (-not (Test-Path ".git")) {
    Write-Host "📦 Initializing Git repository..." -ForegroundColor Yellow
    git init
    git add .
    git commit -m "Initial commit - AI Career Coach"
    Write-Host "✅ Git repository initialized" -ForegroundColor Green
} else {
    Write-Host "✅ Git repository already exists" -ForegroundColor Green
}

# Check if .env.local exists
if (-not (Test-Path ".env.local")) {
    Write-Host "📝 Creating .env.local template..." -ForegroundColor Yellow
    $envContent = @"
# Database
NEXT_PUBLIC_NEON_DB_CONNECTION_STRING=

# Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# AI Services
GEMINI_API_KEY=
HUGGINGFACE_API_KEY=

# Background Jobs
INNGEST_SERVER_HOST=
INNGEST_SIGNING_KEY=

# File Upload
IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
IMAGE_ENDPOINT_URL=

# Optional
NEXT_PUBLIC_DID_API_KEY=
FALCON_FINETUNED_MODEL=
"@
    $envContent | Out-File -FilePath ".env.local" -Encoding UTF8
    Write-Host "✅ .env.local template created" -ForegroundColor Green
    Write-Host "⚠️  Please fill in your environment variables in .env.local" -ForegroundColor Yellow
} else {
    Write-Host "✅ .env.local already exists" -ForegroundColor Green
}

# Check if .env.example exists
if (-not (Test-Path ".env.example")) {
    Write-Host "📝 Creating .env.example..." -ForegroundColor Yellow
    Copy-Item ".env.local" ".env.example"
    Write-Host "✅ .env.example created" -ForegroundColor Green
} else {
    Write-Host "✅ .env.example already exists" -ForegroundColor Green
}

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
npm install

# Build the project to check for errors
Write-Host "🔨 Building project..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build successful!" -ForegroundColor Green
} else {
    Write-Host "❌ Build failed! Please fix the errors above." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "🎉 Project is ready for deployment!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Push your code to GitHub:" -ForegroundColor White
Write-Host "   git remote add origin https://github.com/AnujYadav-1915/AI_Career_Coach_Agent-main.git" -ForegroundColor Gray
Write-Host "   git push -u origin main" -ForegroundColor Gray
Write-Host ""
Write-Host "2. Set up your services (see setup-services.md)" -ForegroundColor White
Write-Host ""
Write-Host "3. Deploy to Vercel:" -ForegroundColor White
Write-Host "   - Go to https://vercel.com/" -ForegroundColor Gray
Write-Host "   - Import your GitHub repository" -ForegroundColor Gray
Write-Host "   - Add environment variables" -ForegroundColor Gray
Write-Host "   - Deploy!" -ForegroundColor Gray
Write-Host ""
Write-Host "4. Update service configurations with your Vercel URL" -ForegroundColor White
Write-Host ""
Write-Host "📚 For detailed instructions, see DEPLOYMENT_GUIDE.md" -ForegroundColor Cyan