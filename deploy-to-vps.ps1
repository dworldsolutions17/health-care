# Healthcare Website Deployment Script for Contabo VPS
# Instructions: Replace the variables below with your actual server details

$SERVER_IP = "YOUR_SERVER_IP"  # Replace with your Contabo server IP (e.g., "123.45.67.89")
$SERVER_USER = "root"           # Usually "root" for VPS
$SERVER_PATH = "/var/www/healthcare"  # Path where your site is hosted on the server

Write-Host "🚀 Starting Healthcare Website Deployment..." -ForegroundColor Cyan
Write-Host ""

# Step 1: Build the project
Write-Host "📦 Building project..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed! Please fix errors and try again." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build completed successfully!" -ForegroundColor Green
Write-Host ""

# Step 2: Upload files to server
Write-Host "📤 Uploading files to server..." -ForegroundColor Yellow
Write-Host "   Server: $SERVER_IP" -ForegroundColor Gray
Write-Host "   Path: $SERVER_PATH" -ForegroundColor Gray
Write-Host ""

scp -r dist/* ${SERVER_USER}@${SERVER_IP}:${SERVER_PATH}/

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Upload failed!" -ForegroundColor Red
    Write-Host "   Please check:" -ForegroundColor Yellow
    Write-Host "   - Server IP is correct" -ForegroundColor Yellow
    Write-Host "   - SSH connection is working" -ForegroundColor Yellow
    Write-Host "   - Server path exists" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ Files uploaded successfully!" -ForegroundColor Green
Write-Host ""

# Step 3: Fix permissions on server
Write-Host "🔧 Setting correct permissions on server..." -ForegroundColor Yellow
ssh ${SERVER_USER}@${SERVER_IP} "chown -R www-data:www-data ${SERVER_PATH} && chmod -R 755 ${SERVER_PATH} && systemctl reload nginx"

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Permissions updated and Nginx reloaded!" -ForegroundColor Green
    Write-Host ""
    Write-Host "🎉 Deployment Successful!" -ForegroundColor Green -BackgroundColor DarkGreen
    Write-Host ""
    Write-Host "🌐 Your site should be live at: https://healthcare.dworldsolutions.com" -ForegroundColor Cyan
    Write-Host ""
} else {
    Write-Host "⚠️  Files uploaded but permissions might need manual fix" -ForegroundColor Yellow
    Write-Host "   SSH into your server and run:" -ForegroundColor Yellow
    Write-Host "   chown -R www-data:www-data ${SERVER_PATH}" -ForegroundColor Gray
    Write-Host "   chmod -R 755 ${SERVER_PATH}" -ForegroundColor Gray
    Write-Host "   systemctl reload nginx" -ForegroundColor Gray
}

Write-Host ""
Write-Host "📝 What's New:" -ForegroundColor Cyan
Write-Host "   ✅ All navigation links working properly" -ForegroundColor Green
Write-Host "   ✅ Footer links redirect correctly" -ForegroundColor Green
Write-Host "   ✅ Social media links point to real platforms" -ForegroundColor Green
Write-Host "   ✅ Shopping cart with full checkout page" -ForegroundColor Green
Write-Host "   ✅ Add to cart functionality enabled" -ForegroundColor Green
Write-Host ""
