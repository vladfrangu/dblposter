const request = require("snekfetch");
const API_URL = `https://discordbots.org/api/bots/{id}/stats`;

module.exports = (client, token, DISCORDIE, paramName) => {
	if (DISCORDIE) {
		let totalGuilds = client.Guilds.size;
		let shardID = 0, shardCount = 1;
		if (client.options && client.options.shardId && client.options.shardCount) {
			shardID = client.options.shardId || 0;
			shardCount = client.options.shardCount || 1;
		}
		postData(shardID, shardCount, totalGuilds, token, client, true, paramName);
	} else {
		let totalGuilds = null;
		let shardID = 0, shardCount = 1;
		let DIO = false;
		let ERIS = false;
		if (client._shard) {
			DIO = true;
			shardID = client._shard[0];
			shardCount = client._shard[1];
		}
		if (!DIO) {
			if (client.shards && client.shards.size) {
				// This is dirty, but w/e
				if (client.options.firstShardID === client.options.lastShardID) {
					shardID = client.options.firstShardID;
				} else {
					ERIS = true;
				}
				shardCount = client.options.maxShards;
			} else if (client.shard) {
				shardID = client.shard.id;
				shardCount = client.shard.count;
			} else {
				shardID = 0;
				shardCount = 1;
			}
		}
		totalGuilds = client.servers ? Object.keys(client.servers).length : client.guilds.size;
		if (!ERIS) postData(shardID, shardCount, totalGuilds, token, client, false, paramName);
		else {
			client.shards.forEach(s => {
				const totalGuilds = client.guilds.filter(g => g.shard.id === s.id).length; // Thank Vlag for block-scoped variables
				postData(s.id, shardCount, totalGuilds, token, client, false, paramName);
			});
		}
	}
};

function postData (shardID, shardCount, guilds, token, client, discordIE, paramName) {
	if (shardID === null && shardCount === null) {
		request.post(API_URL.replace("{id}", client.user.id))
			.set("Authorization", token)
			.send({ server_count: Number(guilds) })
			.then(() => { client[paramName].emit("posted"); })
			.catch(e => { client[paramName].emit("error", e); });
	} else {
		request.post(API_URL.replace("{id}", discordIE ? client.User.id : client.id ? client.id : client.user.id))
			.set("Authorization", token)
			.send({ server_count: Number(guilds), shard_id: Number(shardID), shard_count: Number(shardCount) })
			.then(() => { client[paramName].emit("posted"); })
			.catch(e => { client[paramName].emit("error", e); });
	}
}
