/**
 * Generates an SVG profile card from Steam data
 * @param {Object} data - Profile data
 * @param {string} data.name - Steam username
 * @param {string} data.avatar - Avatar URL
 * @param {Array} data.games - Top games array
 * @returns {string} SVG markup
 */
export function generateSVG({ name, avatar, games }) {
  // Limit to top 3 games
  const topGames = games.slice(0, 3);
  
  // Generate game rows with proper spacing
  const gameRows = topGames
    .map((game, index) => {
      const yOffset = index * 70;
      const imageTag = game.logo 
        ? `<image xlink:href="${game.logo}" x="25" y="5" height="50" width="170" preserveAspectRatio="xMidYMid meet"/>`
        : '';
      return `
      <g transform="translate(0, ${yOffset})">
        <rect x="20" y="0" width="180" height="60" rx="8" fill="#1b2838"/>
        ${imageTag}
        <text x="220" y="25" font-size="20" fill="#fff" font-weight="600">${escapeXml(game.name)}</text>
        <text x="220" y="48" font-size="14" fill="#66c0f4">${game.hours} hours played</text>
      </g>
    `;
    })
    .join("");

  const cardHeight = 140 + (topGames.length * 70);

  return `
<svg width="600" height="${cardHeight}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1b2838;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#2a475e;stop-opacity:1" />
    </linearGradient>
    <clipPath id="avatarMask">
      <circle cx="60" cy="60" r="45"/>
    </clipPath>
  </defs>

  <rect width="600" height="${cardHeight}" rx="15" fill="url(#bg)"/>
  
  <g>
    <circle cx="60" cy="60" r="48" fill="#66c0f4" opacity="0.3"/>
    ${avatar ? `<image xlink:href="${avatar}" x="15" y="15" width="90" height="90" clip-path="url(#avatarMask)"/>` : ''}
    
    <text x="130" y="55" font-size="28" fill="#fff" font-weight="bold" font-family="Arial, sans-serif">${escapeXml(name)}</text>
    <text x="130" y="80" font-size="16" fill="#66c0f4" font-family="Arial, sans-serif">Top Played Games</text>
  </g>

  <line x1="20" y1="120" x2="580" y2="120" stroke="#66c0f4" stroke-width="2" opacity="0.3"/>

  <g transform="translate(10, 130)">
    ${gameRows}
  </g>

</svg>
  `.trim();
}

/**
 * Escape XML special characters
 * @param {string} str - String to escape
 * @returns {string} Escaped string
 */
function escapeXml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
