# LuaTools Wiki

Documentation website for LuaTools, built with [Docusaurus](https://docusaurus.io/).

## Installation

```bash
npm install
```

## Local Development

```bash
npm start
```

Starts a local dev server at `http://localhost:3000`. Most changes reflect live without restarting.

> Note: search does not work in dev mode. Use `npm run build && npm run serve` to test search locally.

## Deploy

```powershell
$env:GIT_USER="madoiscool"; npm run deploy
```

Builds the site and pushes directly to the `gh-pages` branch. Live at [wiki.lua.tools](https://wiki.lua.tools).
