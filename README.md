# Steam Status Card

Generate SVG profile cards from public Steam profile data.

![Steam Card](https://steam-status-one.vercel.app/card?steamid=76561198764174260)

## Features

- No API key required
- Uses public Steam XML endpoint
- SVG output with Steam-themed design
- Shows top 3 played games with hours
- Auto-refreshes every hour

## Usage

Replace `YOUR_STEAM_ID_64` with your Steam64 ID:

```markdown
![Steam Card](https://steam-status-one.vercel.app/card?steamid=YOUR_STEAM_ID_64)
```

## Find Your Steam ID

1. Visit [steamid.io](https://steamid.io)
2. Enter your Steam profile URL
3. Copy your steamID64 (17-digit number)

Example: `76561198764174260`

## Installation

```bash
git clone https://github.com/EchoSingh/steam-status.git
cd steam-status
npm install
npm start
```

Visit `http://localhost:3000/card?steamid=YOUR_STEAM_ID_64`

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/EchoSingh/steam-status)

Or manually:

```bash
git push origin main
# Then import on vercel.com
```

## API

### GET /card?steamid={STEAM_ID}

Returns SVG profile card.

**Parameters:**
- `steamid` (required): Steam64 ID

**Example:**
```
https://steam-status-one.vercel.app/card?steamid=76561198764174260
```

## Requirements

- Node.js 18+
- Public Steam profile (Settings → Privacy → Public)

## Auto-Update

Included GitHub Action runs daily at 9:00 AM IST.

Edit `.github/workflows/daily-update.yml` to change schedule.

## Project Structure

```
steam-status/
├── src/
│   ├── index.js          # Express server
│   ├── steam.js          # Steam XML fetcher
│   └── svgTemplate.js    # SVG generator
├── package.json
└── vercel.json
```

## License

MIT
