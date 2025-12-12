import fetch from "node-fetch";
import { parseStringPromise } from "xml2js";

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

    return {
      name: profile.steamID || "Steam User",
      avatar: profile.avatarFull || profile.avatarMedium || "",
      games: games.map(game => ({
        name: game.gameName || "Unknown Game",
        logo: game.gameLogo || "",
        hours: game.hoursPlayed || "0"
      }))
    };
  } catch (error) {
    throw new Error(`Failed to fetch Steam data: ${error.message}`);
  }
}
