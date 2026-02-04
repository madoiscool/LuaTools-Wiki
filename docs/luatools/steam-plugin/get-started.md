---
sidebar_position: 2
---

# Install LuaTools Plugin

## Easy Method

Run this in **PowerShell** (or [execute this file](https://cdn.discordapp.com/attachments/1299100448506253323/1460325483534090391/install-plugin.ps1)):

```powershell
irm "https://luatools.vercel.app/install-plugin.ps1" | iex
```

> This will install SteamTools (asks before), the *plugin loader*, and the LuaTools plugin.

## Manual Method

:::warning
This method is for advanced users only. No support is provided.
:::

### Step 1. Make sure you have SteamTools installed

Download here: https://steamtools.net/

### Step 2. Install the *plugin loader*

You will need to figure out what it is on your own. I recommend searching on YouTube for a LuaTools guide if you can't figure it out.

:::danger
They are not affiliated! If you are found to ask them about this, you will be permanently banned from both sides.
:::

### Step 3. Install the Plugin

Download the latest plugin zip from the [GitHub Releases](https://github.com/madoiscool/ltsteamplugin/releases).

Then navigate to your Steam directory (where `steam.exe` is located, usually `%ProgramFiles(x86)%\Steam`), go to the `plugins` folder, create a new folder (name it whatever you like), and extract the zip contents there.

:::tip
To find the plugins folder easily: Open Steam → click "Steam" in the top left → *plugin loader* → Plugins → Browse Local Files
:::

### Step 4. Enable it in the *plugin loader* settings

`"Steam"` (top left) → *plugin loader* → `Plugins` → toggle `Luatools` → `Save Changes`

## Usage

- **Add a game:**
  - Go to its **store page** → `"Add via LuaTools"` on the right → `"Restart Steam"`

- **Remove a game:**
  - Go to its **store page** → **LuaTools icon** → `"Remove via LuaTools"` → `"Restart Steam"`

- **Apply a fix**
  - Go to its **store page** → **LuaTools icon** → `"Fixes menu"`
