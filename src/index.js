import express from "express";
import { getSteamData } from "./steam.js";
import { generateSVG } from "./svgTemplate.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for GitHub README embeds
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Cache-Control", "public, max-age=3600"); // Cache for 1 hour
  next();
});

// Health check endpoint
app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "Steam Status Card Generator",
    usage: "/card?steamid=YOUR_STEAM_ID_64"
  });
});

// Main card generation endpoint
app.get("/card", async (req, res) => {
  const steamid = req.query.steamid;
  
  if (!steamid) {
    return res.status(400).send(
      `<svg width="400" height="100" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="100" fill="#1b2838" rx="10"/>
        <text x="200" y="50" text-anchor="middle" fill="#ff4444" font-size="18" font-family="Arial">
          Error: Missing steamid parameter
        </text>
      </svg>`
    );
  }

  try {
    const data = await getSteamData(steamid);
    const svg = generateSVG(data);

    res.setHeader("Content-Type", "image/svg+xml");
    res.send(svg);
  } catch (error) {
    console.error("Error generating card:", error);
    
    res.status(500).send(
      `<svg width="400" height="100" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="100" fill="#1b2838" rx="10"/>
        <text x="200" y="50" text-anchor="middle" fill="#ff4444" font-size="16" font-family="Arial">
          Error: ${error.message}
        </text>
      </svg>`
    );
  }
});

app.listen(PORT, () => {
  console.log(`🎮 Steam Status Card server running on port ${PORT}`);
  console.log(`📊 Visit http://localhost:${PORT}/card?steamid=YOUR_STEAM_ID`);
});
