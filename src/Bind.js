const sendData = require("./SendData");

let DISCORDIE = false;

module.exports = (client, apiKey, paramName) => {
	if (client.Dispatcher) DISCORDIE = true;
	const interval = setInterval(() => {
		sendData(client, apiKey, DISCORDIE, paramName);
	}, 120000);
	interval.unref();
	Object.defineProperty(client[paramName], "_interval", {
		value: interval,
		writable: false,
		enumerable: false,
	});
};
