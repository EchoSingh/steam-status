# 🚀 DEPLOYMENT GUIDE

Complete guide to deploy your Steam Status Card to Vercel with auto-updates.

## 📋 Prerequisites

- GitHub account
- Vercel account (free tier works great!)
- Your Steam64 ID

## 🌐 Step-by-Step Deployment

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Push to GitHub first:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/EchoSingh/steam-status.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy" (no configuration needed!)

3. **Get your URL:**
   - After deployment, you'll get a URL like: `https://steam-status-xyz.vercel.app`
   - Use it as: `https://steam-status-xyz.vercel.app/card?steamid=YOUR_STEAM_ID`

### Option 2: Deploy via CLI

1. **Login to Vercel:**
   ```bash
   vercel login
   ```

2. **Deploy:**
   ```bash
   vercel
   ```
   - Follow the prompts
   - Link to existing project or create new one
   - Accept defaults

3. **Deploy to Production:**
   ```bash
   vercel --prod
   ```

## 🔄 Auto-Update Setup (Daily IST)

The GitHub workflow is already created in `.github/workflows/daily-update.yml`

### Enable GitHub Actions:

1. **Push to GitHub** (if you haven't):
   ```bash
   git add .github/workflows/daily-update.yml
   git commit -m "Add daily update workflow"
   git push
   ```

2. **Enable Actions:**
   - Go to your GitHub repo
   - Click "Actions" tab
   - Enable workflows if prompted

3. **The workflow will:**
   - Run daily at 9:00 AM IST (3:30 AM UTC)
   - Can be manually triggered from Actions tab
   - Logs execution time in IST

### Manual Trigger:

- Go to **Actions** tab → **Update Steam Card Daily** → **Run workflow**

## 🎯 Using Your Card

### In GitHub README:

```markdown
## 🎮 Steam Profile

![Steam Card](https://your-domain.vercel.app/card?steamid=76561198XXXXXXXXX)
```

### With Auto-Refresh (bust cache):

```markdown
![Steam Card](https://your-domain.vercel.app/card?steamid=76561198XXXXXXXXX&t=${Date.now()})
```

### Multiple Cards:

```markdown
## Team Steam Profiles

![Player 1](https://your-domain.vercel.app/card?steamid=STEAM_ID_1)
![Player 2](https://your-domain.vercel.app/card?steamid=STEAM_ID_2)
```

## ⚙️ Configuration

### Adjust Update Time:

Edit `.github/workflows/daily-update.yml`:

```yaml
schedule:
  # Current: 9:00 AM IST (3:30 AM UTC)
  # For 6:00 PM IST (12:30 PM UTC): - cron: '30 12 * * *'
  # For midnight IST (6:30 PM UTC): - cron: '30 18 * * *'
  - cron: '30 3 * * *'
```

**IST to UTC Conversion:**
- IST is UTC +5:30
- 9:00 AM IST = 3:30 AM UTC
- 6:00 PM IST = 12:30 PM UTC
- Midnight IST = 6:30 PM UTC (previous day)

### Cache Duration:

Edit `src/index.js` to change cache time:

```javascript
res.header("Cache-Control", "public, max-age=3600"); // 1 hour
// For 6 hours: max-age=21600
// For 12 hours: max-age=43200
// For 1 day: max-age=86400
```

## 🔍 Verify Deployment

Test your endpoints:

```bash
# Health check
curl https://your-domain.vercel.app/

# Get your card
curl https://your-domain.vercel.app/card?steamid=YOUR_STEAM_ID
```

## 🐛 Troubleshooting

### Vercel CLI not found
```bash
npm install -g vercel
```

### Deployment fails
- Check that all files are committed
- Ensure `package.json` has correct dependencies
- Check Vercel dashboard logs

### Card not updating
- Check if Steam profile is public
- Verify Steam64 ID is correct
- Check browser cache (hard refresh: Ctrl+F5)

### GitHub Action not running
- Ensure Actions are enabled in repo settings
- Check workflow file syntax
- View logs in Actions tab

## 🌟 Pro Tips

1. **Custom Domain:**
   - Add in Vercel dashboard → Settings → Domains
   - Use: `https://steam.yourdomain.com/card?steamid=...`

2. **Environment Variables:**
   - Add in Vercel dashboard → Settings → Environment Variables
   - Access in code: `process.env.VARIABLE_NAME`

3. **Monitor Usage:**
   - Check Vercel dashboard for request counts
   - Free tier: 100GB bandwidth/month

4. **Multiple Workflows:**
   - Create separate workflows for different times
   - Use different trigger conditions

## 📊 Expected Behavior

- **First request:** Fetches fresh data from Steam
- **Cached requests:** Serves from cache (1 hour)
- **After cache expires:** Fetches fresh data again
- **GitHub Action:** Runs daily at 9 AM IST automatically

---

Need help? Check the [main README](README.md) or open an issue!
