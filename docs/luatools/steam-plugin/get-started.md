---
sidebar_position: 2
---

# Install LuaTools Plugin

## Install

:::info Windows only
The LuaTools app is available on Windows only.
:::

1. Get the app from https://lua.tools/app
2. Go to **Plugin**
3. **Install!**

## Usage

- **Add a game:**
  - Go to its **store page** → `"Add via LuaTools"` on the right → `"Restart Steam"`

- **Remove a game:**
  - Go to its **store page** → **LuaTools icon** → `"Remove via LuaTools"` → `"Restart Steam"`

- **Apply a fix**
  - Go to its **store page** → **LuaTools icon** → `"Fixes menu"`

## Legacy Millenium-Only Plugin (EOS)

:::warning
This is the old installation method and is **end-of-support**. Use the [app method above](#install) instead.
:::

Run this in **PowerShell** (or [execute this file](https://cdn.discordapp.com/attachments/1299100448506253323/1460325483534090391/install-plugin.ps1)):

```powershell
irm "https://luatools.vercel.app/install-plugin.ps1" | iex
```

> This will install SteamTools (asks before), the *plugin loader*, and the LuaTools plugin.
