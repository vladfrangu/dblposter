<div align="center">
  
# topggposter

**Simple to use, automatic statistics poster for Top.GG

[![GitHub](https://img.shields.io/github/license/vladfrangu/topggposter)](https://github.com/vladfrangu/topggposter/blob/master/LICENSE.md)
[![Language grade: JavaScript/TypeScript](https://img.shields.io/lgtm/grade/javascript/g/vladfrangu/topggposter.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/vladfrangu/topggposter/context:javascript)
[![Patreon Donate](https://img.shields.io/badge/patreon-donate-brightgreen.svg?label=Donate%20with%20Patreon&logo=patreon&colorB=F96854&link=https://www.patreon.com/vladfrangu)](https://www.patreon.com/vladfrangu)

</div>

# topggposter

A simple to use poster for Top.GG (previously DiscordBotList) stats, when you just want to post stats without much fussing around!

## Installation

Install with [npm](https://www.npmjs.com/) / [yarn](https://yarnpkg.com) / [pnpm](https://pnpm.js.org/):

```sh
npm install topggposter
yarn add topggposter
pnpm add topggposter
```

## Usage

Usage is very straight forward, you just bind the client to the poster via the included function! This will start a 15 minute interval that posts your bot statistics automatically!

```ts
// This example is for discord.js. You can use this for the eris client as well!
import { bindClient } from 'topggposter';
import { Client } from 'discord.js';

const client = new Client();

bindClient(client, 'TOP.GG token for your bot goes here');
// That's all!
```

For JS users, it's the same

```js
const { bindClient } = require('topggposter');
const { Client } = require('discord.js');

const client = new Client();

bindClient(client, 'TOP.GG token for your bot goes here');
```

## Manually send statistics

While our internal interval runs every 15 minutes or so, you may want to send statistics *now*. We export the `sendStatistics` function which you can use to manually send statistics

```ts
import { sendStatistics } from 'topggposter';

sendStatistics(client, 'TOP.GG token for your bot goes here');
```
