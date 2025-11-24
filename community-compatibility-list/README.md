# Community Compatibility List

This directory contains JSON files for game compatibility information submitted by the community.

## How to Contribute

1. Create a new JSON file named after the game (e.g., `my-game.json`)
2. Follow the example structure below
3. Submit a pull request

## JSON Structure

```json
{
  "gameName": "Game Name",
  "appId": 123456,
  "bypassRequired": true,
  "online": false,
  "notes": "Additional notes about compatibility"
}
```

## Fields

- `gameName`: The name of the game
- `appId`: Steam App ID (numeric)
- `bypassRequired`: Boolean indicating if a bypass is required
- `online`: Boolean indicating if online features work
- `notes`: Additional information or notes about the game

