<div>
	<br />
	<p>
		<a href="https://www.npmjs.com/package/dblposter"><img src="https://img.shields.io/npm/v/dblposter.svg?maxAge=3600" alt="NPM version" /></a>
		<a href="https://www.npmjs.com/package/dblposter"><img src="https://img.shields.io/npm/dt/dblposter.svg?maxAge=3600" alt="NPM downloads" /></a>
		<a href="https://david-dm.org/KingDGrizzle/dblposter"><img src="https://img.shields.io/david/KingDGrizzle/dblposter.svg?maxAge=3600" alt="Dependencies" /></a>
	</p>
	<p>
    		<a href="https://nodei.co/npm/dblposter/"><img src="https://nodei.co/npm/dblposter.png?downloads=true&stars=true" alt="NPM info"></a>
  	</p>
</div>

# DBLPoster
A simple to use poster for DiscordBotList stats.

## How to use

```js
const dbl = require("dblposter");

// Then, whatever your client is (Discordie, Discord.JS, Eris or Discord.io)
const dblPoster = new dbl(`API KEY GOES HERE`, client);

// Then somewhere in your code, like in READY
dblPoster.bind();
```

That will bind the poster to your client automatically and handle the stat posting on ready, guild create or delete.

That function also adds the poster to the client, with the default name of `dblPoster` (accessible using `client.dblPoster`). That is an instance of EventEmitter, and it can emit 2 events:

- posted
	- Means the stat posting for the shard was successful
	- Returns nothing
- error
	- Means there was an error at post.
	- Returns the snekfetch error object.

If for any reason you want to change the name of the newly added property, it's as easy as:
```js
dblPoster.bind("mySpecialVariableName");
```

Then, access it with `client.mySpecialVariableName`
