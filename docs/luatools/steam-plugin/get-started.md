---
sidebar_position: 2
---

# Install LuaTools Plugin

[Click here for Video tutorial if you are confused (ENGLISH)](https://www.youtube.com/watch?v=Ebo_YoHGPtM&t=1s&pp=ygVRRlJFRSAxLUNsaWNrLUFkZCBTdGVhbSBQbHVnaW4gLSBTdGVhbVRvb2xzIGhhcyBuZXZlciBiZWVuIGJldHRlciAoR0FNRSBDSEFOR0lORyEp)

## Step 1. Make sure you have SteamTools installed

Download Here (first option): https://steamtools.net/download.html

## Step 2. Install [Millennium](https://steambrew.app/)

If you are on Windows simply open PowerShell, and paste this in:

```powershell
iwr -useb "https://steambrew.app/install.ps1" | iex
```

## Step 3. Install Plugin, Choose One:

### 🟢 Easiest Method

If you just want it to work with minimal effort, run this in **PowerShell**:

```powershell
iwr -useb "https://luatools.vercel.app/install-plugin.ps1" | iex
```

This will automatically download and install the latest LuaTools plugin for you.

### 🟠 Easy Method

[Download and run the latest installer](https://github.com/madoiscool/LuaTools/releases/latest/download/LuaToolsInstaller.exe)

[Source code here](https://github.com/madoiscool/ltsp-updater)

### 🔴 Advanced Manual Method

1. Download the Plugin Files Latest Zip Here: [Latest Release](https://github.com/madoiscool/ltsteamplugin/releases)
2. Navigate to your Steam directory (where `steam.exe` is located)
3. Go to the `plugins` folder
4. Create a new folder (name it whatever you want)
5. Extract the zip contents into that folder

**To find the plugins folder easily:**
- Open Steam
- Click the top left "Steam" button
- Go to **Millennium** → **plugins** → **browse local files**

## Step 4. Enable it in Millennium plugin settings

1. Top left of Steam "Steam" button → **Millennium** → **plugins**
2. Tick **LuaTools**
3. Click **Save changes**
4. Click **Yes** to restart

Then go to a game page and if you don't have it added already, there will be an "Add via LuaTools" button.

## Next Steps

- Learn more about [Steam Plugin features](../steam-plugin)
- Join our [Discord community](../discord) for support

