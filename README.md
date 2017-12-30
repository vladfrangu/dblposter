# DBLPoster
A simple to use poster for DiscordBotList stats.

## How to use

```js
const dbl = require("dblposter");

const dblPoster = new dbl(`API KEY GOES HERE`);

// Then, whatever your client is (Discordie, Discord.JS, Eris or Discord.io)
dblPoster.bind(client);
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
dblPoster.bind(client, "mySpecialVariableName");
```
