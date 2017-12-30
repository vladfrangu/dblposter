const sendData = require("./SendData");

let DISCORDIE;

module.exports = (client, apiKey, paramName) => {
	if (client.Dispatcher) DISCORDIE = true;

	if (DISCORDIE) {
		client.Dispatcher.on("GATEWAY_READY", () => {
			sendData(client, apiKey, DISCORDIE, paramName);
		});
		client.Dispatcher.on("GUILD_CREATE", () => {
			sendData(client, apiKey, DISCORDIE, paramName);
		});
		client.Dispatcher.on("GUILD_DELETE", () => {
			sendData(client, apiKey, DISCORDIE, paramName);
		});
	} else {
		client.on("ready", () => {
			sendData(client, apiKey, DISCORDIE, paramName);
		});

		client.on("guildCreate", () => {
			sendData(client, apiKey, DISCORDIE, paramName);
		});

		client.on("guildDelete", () => {
			sendData(client, apiKey, DISCORDIE, paramName);
		});
	}
};
