import fetch from "node-fetch";
import { parseStringPromise } from "xml2js";

/**
 * Convert image URL to base64 data URI
 * @param {string} url - Image URL
 * @returns {Promise<string>} Base64 data URI
 */
async function imageToBase64(url) {
  try {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    const base64 = Buffer.from(buffer).toString('base64');
    const contentType = response.headers.get('content-type') || 'image/jpeg';
    return `data:${contentType};base64,${base64}`;
  } catch (error) {
    return ''; // Return empty string on error
  }
}

/**
 * Fetches Steam profile data from public XML endpoint
 * @param {string} steamid64 - Steam 64-bit ID
 * @returns {Object} Profile data with name, avatar, and games
 */
export async function getSteamData(steamid64) {
  const url = `https://steamcommunity.com/profiles/${steamid64}/?xml=1`;
  
  try {
    const response = await fetch(url);
    const xml = await response.text();
    
    // Parse XML to JSON
    const data = await parseStringPromise(xml, { explicitArray: false });
    const profile = data.profile;

    // Handle case where mostPlayedGames might not exist or be empty
    let games = [];
    if (profile.mostPlayedGames?.mostPlayedGame) {
      // If single game, wrap in array
      games = Array.isArray(profile.mostPlayedGames.mostPlayedGame)
        ? profile.mostPlayedGames.mostPlayedGame
        : [profile.mostPlayedGames.mostPlayedGame];
    }

    // Convert avatar to base64
    const avatarBase64 = profile.avatarFull || profile.avatarMedium 
      ? await imageToBase64(profile.avatarFull || profile.avatarMedium)
      : '';

    // Convert game logos to base64
    const gamesWithBase64 = await Promise.all(
      games.map(async (game) => ({
        name: game.gameName || "Unknown Game",
        logo: game.gameLogo ? await imageToBase64(game.gameLogo) : "",
        hours: game.hoursPlayed || "0"
      }))
    );

    return {
      name: profile.steamID || "Steam User",
      avatar: avatarBase64,
      games: gamesWithBase64
    };
  } catch (error) {
    throw new Error(`Failed to fetch Steam data: ${error.message}`);
  }
}
