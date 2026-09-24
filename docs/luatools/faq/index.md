---
sidebar_label: 'Troubleshooting'
sidebar_position: 1
slug : /luatools/faq/troubleshooting
---

# Troubleshooting FAQ

### I'm not able to add games!

Your ISP may be blocking connections, use [**Cloudflare WARP**](https://one.one.one.one/)

### I'm trying to download a game but it says No Internet Connection / Purchase Error / No License!

Reinstall BetterSteamTools from the luatools app. If it still doesn't work, use cloudflare warp.

### When trying to launch a game, I get error 51/54/86

Your game has steamstub (which is a type of DRM) which is directly linked to the executable. To bypass this, paste the following in your terminal as administrator and replace 'SETAPPID' to the appid of your game.
```
& ([scriptblock]::Create((irm "https://raw.githubusercontent.com/Peron4TheWin/ps1collection/refs/heads/main/steamless.ps1"))) -AppId SETAPPIDHERE
```

### My game doesn't have a fix/crack!

There is a 99% chance that you probably don't need a fix for smaller singleplayer games.

If the game has a different error / isn't launching / ABSOLUTELY needs a fix, try getting the game off a website traditionally like you normally would.

:::info Denuvo
If it's a denuvo game, join the denuvo activations [Discord](https://discord.gg/denuvo) server and follow the instructions there
:::

# My game has a powershell error

- [powershellerror](./powershellerror)