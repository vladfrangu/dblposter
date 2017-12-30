const sendData = require("./SendData");

let DISCORDIE;

module.exports = (client, apiKey) => {
	if (client.Dispatcher) DISCORDIE = true;

	if (DISCORDIE) {
		client.Dispatcher.on("GATEWAY_READY", () => {
			sendData(client, apiKey, DISCORDIE);
		});
		client.Dispatcher.on("GUILD_CREATE", () => {
			sendData(client, apiKey, DISCORDIE);
		});
		client.Dispatcher.on("GUILD_DELETE", () => {
			sendData(client, apiKey, DISCORDIE);
		});
	} else {
		client.on("ready", () => {
			sendData(client, apiKey, DISCORDIE);
		});

		client.on("guildCreate", () => {
			sendData(client, apiKey, DISCORDIE);
		});

		client.on("guildDelete", () => {
			sendData(client, apiKey, DISCORDIE);
		});
	}
};
