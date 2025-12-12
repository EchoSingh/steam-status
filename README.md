# 🎮 Steam Status Card

Generate beautiful SVG profile cards from your public Steam profile data. Display your Steam name, avatar, and top played games with hours — perfect for GitHub READMEs!

> **🌍 Public Service:** Once deployed, anyone can use this service with their own Steam ID. No installation needed for end users!

## ✨ Features

- 🎯 **No API Key Required** - Uses public Steam XML endpoint
- 🎨 **Beautiful SVG Cards** - Steam-themed design with gradient backgrounds
- 📊 **Top Games Display** - Shows your most played games with hours
- 🚀 **Easy to Deploy** - Works on Vercel, Render, or any Node.js host
- ⚡ **Fast & Cached** - 1-hour cache for optimal performance

## 🖼️ Preview

Once deployed, your card will look like this:

![Steam Card](https://your-domain.vercel.app/card?steamid=76561198764174260)

> **Note:** Anyone can use this service! Just replace the `steamid` parameter with your own Steam64 ID.

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/EchoSingh/steam-status.git
cd steam-status
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Locally

```bash
npm start
```

Visit `http://localhost:3000/card?steamid=YOUR_STEAM_ID_64`

### 4. Development Mode (Auto-reload)

```bash
npm run dev
```

## 🔍 Finding Your Steam ID

You need your **Steam64 ID** (17-digit number). Here's how to find it:

1. Go to your Steam profile
2. Use a service like [SteamID.io](https://steamid.io/) or [SteamRep](https://steamrep.com/)
3. Enter your profile URL
4. Copy your **steamID64**

**Example:** `76561198764174260`

### Quick Method:
Your Steam profile URL: `https://steamcommunity.com/profiles/76561198764174260/?xml=1`

The 17-digit number in the URL is your Steam64 ID!

## 📝 Usage

### Basic Usage

**Example with actual Steam ID:**
```markdown
![Steam Card](https://your-domain.vercel.app/card?steamid=76561198764174260)
```

**Use with your own Steam ID:**
```markdown
![Steam Card](https://your-domain.vercel.app/card?steamid=YOUR_STEAM_ID_64)
```

### HTML

```html
<!-- Replace with your Steam ID -->
<img src="https://your-domain.vercel.app/card?steamid=YOUR_STEAM_ID_64" alt="Steam Card">
```

## 🌐 Deployment

### Quick Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/EchoSingh/steam-status)

**Step-by-step guide:**

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/EchoSingh/steam-status.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Visit [vercel.com](https://vercel.com) and sign in
   - Click "New Project" → Import your repository
   - Click "Deploy" (zero configuration needed!)
   - Get your URL: `https://your-project.vercel.app`

3. **Use your card:**
   ```markdown
   ![Steam Card](https://your-project.vercel.app/card?steamid=YOUR_STEAM_ID)
   ```

📖 **Full deployment guide:** See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

### 🔄 Auto-Update (Daily at 9 AM IST)

GitHub Action is included to refresh cards daily:

- **Automatic:** Runs daily at 9:00 AM IST
- **Manual:** Trigger from GitHub Actions tab
- **File:** `.github/workflows/daily-update.yml`

**Customize update time:** Edit the cron schedule in the workflow file.

### Deploy to Render (Alternative)

1. Create new Web Service on [Render](https://render.com)
2. Connect your GitHub repository
3. Set build command: `npm install`
4. Set start command: `npm start`

### Environment Variables

No environment variables needed! The app uses public Steam XML data.

## 🛠️ Project Structure

```
steam-status/
├── src/
│   ├── index.js          # Express server
│   ├── steam.js          # Steam XML fetcher
│   └── svgTemplate.js    # SVG card generator
├── package.json
├── vercel.json           # Vercel config
└── README.md
```

## 🎨 Customization

Want to customize the card design? Edit `src/svgTemplate.js`:

- Change colors in the gradient definitions
- Adjust card dimensions
- Modify font sizes and styles
- Add more game entries

## 📊 API Endpoints

### `GET /`
Health check and usage information

**Response:**
```json
{
  "status": "ok",
  "message": "Steam Status Card Generator",
  "usage": "/card?steamid=YOUR_STEAM_ID_64"
}
```

### `GET /card?steamid={STEAM_ID}`
Generate SVG profile card

**Parameters:**
- `steamid` (required): Your Steam64 ID

**Response:** SVG image

## ⚠️ Requirements

- **Node.js** 18+ (for native fetch support and ES modules)
- **Public Steam Profile** - Your profile must be set to public for XML access

## 🔒 Privacy Note

This tool only accesses **publicly available** Steam data. If your profile is private, the card generation will fail. To make your profile public:

1. Go to Steam → Profile → Edit Profile
2. Set "My Profile" to **Public**

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest new features
- Submit pull requests

## 📄 License

MIT License - feel free to use this project however you'd like!

## 💡 Tips

- The card updates automatically based on your Steam profile
- Cards are cached for 1 hour to improve performance
- Make sure your Steam profile is public
- The card shows your top 3 most played games

## 🐛 Troubleshooting

**Card shows "Missing steamid parameter"**
- Make sure you included `?steamid=YOUR_ID` in the URL

**Card shows an error**
- Verify your Steam profile is public
- Check that your Steam64 ID is correct
- Ensure the Steam Community site is accessible

**Games not showing**
- You might not have played any games yet
- Your game details might be private

## 🌟 Star This Repo

If you find this useful, please give it a star ⭐ on GitHub!

---

Made with ❤️ for the Steam community
