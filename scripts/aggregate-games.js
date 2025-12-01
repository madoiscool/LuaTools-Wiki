const fs = require('fs');
const path = require('path');

const COMPATIBILITY_DIR = path.join(__dirname, '..', 'community-compatibility-list');
const OUTPUT_FILE = path.join(COMPATIBILITY_DIR, 'all-games.json');
const STATIC_OUTPUT_DIR = path.join(__dirname, '..', 'static', 'community-compatibility-list');
const STATIC_OUTPUT_FILE = path.join(STATIC_OUTPUT_DIR, 'all-games.json');
const EXCLUDE_FILES = ['all-games.json', 'README.md'];

function validateGameData(game) {
  const required = ['gameName', 'appId', 'bypassRequired', 'online', 'notes'];
  const missing = required.filter(field => !(field in game));
  
  if (missing.length > 0) {
    throw new Error(`Missing required fields: ${missing.join(', ')}`);
  }
  
  if (typeof game.appId !== 'number') {
    throw new Error('appId must be a number');
  }
  
  if (typeof game.bypassRequired !== 'boolean') {
    throw new Error('bypassRequired must be a boolean');
  }
  
  if (typeof game.online !== 'boolean') {
    throw new Error('online must be a boolean');
  }
  
  return true;
}

function aggregateGames() {
  console.log('Aggregating game compatibility files...');
  
  const files = fs.readdirSync(COMPATIBILITY_DIR);
  const jsonFiles = files.filter(file => 
    file.endsWith('.json') && !EXCLUDE_FILES.includes(file)
  );
  
  console.log(`Found ${jsonFiles.length} game JSON files`);
  
  const games = [];
  const errors = [];
  
  for (const file of jsonFiles) {
    const filePath = path.join(COMPATIBILITY_DIR, file);
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const game = JSON.parse(content);
      
      validateGameData(game);
      games.push(game);
      console.log(`✓ Processed ${file}`);
    } catch (error) {
      const errorMsg = `Error processing ${file}: ${error.message}`;
      console.error(`✗ ${errorMsg}`);
      errors.push(errorMsg);
    }
  }
  
  if (errors.length > 0) {
    console.error('\nErrors encountered:');
    errors.forEach(err => console.error(`  - ${err}`));
    process.exit(1);
  }
  
  // Sort by game name
  games.sort((a, b) => a.gameName.localeCompare(b.gameName));
  
  // Write aggregated file
  const output = JSON.stringify(games, null, 2);
  fs.writeFileSync(OUTPUT_FILE, output + '\n', 'utf8');
  
  // Also copy to static folder for deployment
  if (!fs.existsSync(STATIC_OUTPUT_DIR)) {
    fs.mkdirSync(STATIC_OUTPUT_DIR, { recursive: true });
  }
  fs.writeFileSync(STATIC_OUTPUT_FILE, output + '\n', 'utf8');
  
  console.log(`\n✓ Successfully aggregated ${games.length} games into all-games.json`);
  console.log(`✓ Copied to static folder for deployment`);
  return games.length;
}

if (require.main === module) {
  aggregateGames();
}

module.exports = { aggregateGames };

