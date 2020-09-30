import fetch from 'node-fetch';

export async function sendStatistics(client: import('discord.js').Client | import('eris').Client, token: string) {
	const shardData = generateShardData(client);
	for (const { id, guilds } of shardData.shards) {
		await postData({
			body: JSON.stringify({
				server_count: guilds,
				shard_id: id,
				shard_count: shardData.shardCount,
			}),
			token,
		});
	}
}

function generateShardData(client: import('discord.js').Client | import('eris').Client) {
	return {
		shardCount: 123,
		shards: [{ id: 1, guilds: 456 }],
	};
}

async function postData({ body, token }: { body: string; token: string }) {
	const res = await fetch('https://top.gg/api/bots/stats', {
		method: 'POST',
		headers: { Authorization: token },
		body,
	});

	if (res.status === 429) {
		const retryAfter = Number(res.headers.get('retry-after')!);
		await new Promise((resolve) => setTimeout(resolve, retryAfter));
		return postData({ body, token });
	}
}
