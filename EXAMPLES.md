# 📖 Usage Examples

This guide shows how anyone can use the Steam Status Card service.

## 🚀 For End Users (No Installation Needed!)

Once this service is deployed, anyone can use it by simply adding an image tag to their GitHub README or website.

### Example 1: GitHub README

```markdown
## My Steam Profile

![My Steam Card](https://steam-status-your-domain.vercel.app/card?steamid=76561198764174260)
```

### Example 2: Multiple Players

```markdown
## Our Gaming Team

### Player 1 - rayo_asr
![Steam Card](https://steam-status-your-domain.vercel.app/card?steamid=76561198764174260)

### Player 2
![Steam Card](https://steam-status-your-domain.vercel.app/card?steamid=YOUR_STEAM_ID_HERE)
```

### Example 3: In HTML

```html
<div>
  <h2>My Gaming Profile</h2>
  <img src="https://steam-status-your-domain.vercel.app/card?steamid=76561198764174260" 
       alt="Steam Profile Card" />
</div>
```

### Example 4: With Link to Steam Profile

```markdown
[![Steam Profile](https://steam-status-your-domain.vercel.app/card?steamid=76561198764174260)](https://steamcommunity.com/profiles/76561198764174260)
```

Click the card to visit the Steam profile!

## 🔍 How to Get Your Steam ID

### Method 1: SteamID.io (Easiest)

1. Go to [https://steamid.io/](https://steamid.io/)
2. Enter your Steam profile URL or username
3. Copy the **steamID64** (17-digit number)

### Method 2: Direct from Profile URL

1. Visit your Steam profile
2. Look at the URL:
   - If it shows: `steamcommunity.com/profiles/76561198764174260/` 
   - Your Steam64 ID is: `76561198764174260`
   - If it shows: `steamcommunity.com/id/rayo_asr/`
   - Use Method 1 to convert your custom URL

### Method 3: XML Endpoint

Visit: `https://steamcommunity.com/id/YOUR_USERNAME/?xml=1`

The first line shows your Steam64 ID:
```xml
<steamID64>76561198764174260</steamID64>
```

## 🎨 Real Examples

### Example Profile: rayo_asr

**Steam ID:** 76561198764174260  
**Custom URL:** rayo_asr  
**Location:** Siwan, Bihar, India  

**Top Games:**
- Counter-Strike 2: 30 hours
- GRIS: 2.6 hours  
- Sheepy: A Short Adventure: 1.2 hours

**Usage:**
```markdown
![rayo_asr's Steam Profile](https://your-domain.vercel.app/card?steamid=76561198764174260)
```

## ⚙️ Advanced Usage

### Force Refresh (Bypass Cache)

Add a timestamp to always fetch fresh data:

```markdown
![Steam Card](https://your-domain.vercel.app/card?steamid=76561198764174260&t=TIMESTAMP)
```

Or use this in your README to auto-refresh:
```html
<img src="https://your-domain.vercel.app/card?steamid=76561198764174260" alt="Steam Card">
<!-- The card refreshes automatically every hour -->
```

### Testing Different Profiles

You can test the service with any public Steam profile:

```bash
# Test in browser
https://your-domain.vercel.app/card?steamid=76561198764174260
https://your-domain.vercel.app/card?steamid=76561197960435530  # Gabe Newell
```

## 🔒 Privacy Requirements

**Important:** Your Steam profile must be set to **PUBLIC** for the card to work.

To check/change privacy settings:
1. Go to Steam → Profile → Edit Profile
2. Click "Privacy Settings"
3. Set "My Profile" to **Public**
4. Set "Game Details" to **Public**

## 🌐 Public Service

This is a **public service** - once deployed, anyone can use it without:
- Installing anything
- Getting API keys
- Setting up their own server
- Writing any code

Just find your Steam ID and use the URL!

## 📱 Where to Use

- ✅ GitHub README.md
- ✅ GitLab README
- ✅ Personal websites
- ✅ Portfolio pages
- ✅ Discord server info
- ✅ Forums (if HTML/Markdown supported)
- ✅ Documentation sites

## 💡 Tips

1. **Update Frequency:** Cards are cached for 1 hour, then auto-refresh
2. **Image Size:** 600px wide, variable height based on games
3. **Dark Theme:** Card uses Steam's dark theme colors
4. **Mobile Friendly:** SVG scales perfectly on all devices

## 🐛 Troubleshooting

**Card shows error?**
- Check if your Steam profile is public
- Verify your Steam64 ID is correct (17 digits)
- Try opening `https://steamcommunity.com/profiles/YOUR_ID/?xml=1` in browser

**No games showing?**
- You need to have played games on Steam
- Game details must be public in privacy settings

**Card not updating?**
- Wait 1 hour for cache to expire
- Or force refresh your browser (Ctrl+F5)

---

**Questions?** Open an issue on GitHub!
