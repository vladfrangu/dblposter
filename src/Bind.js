const sendData = require("./SendData");

let DISCORDIE = false;

module.exports = (client, paramName) => {
	if (client.Dispatcher) DISCORDIE = true;
	sendData.send(client, paramName, DISCORDIE);
	const interval = setInterval(() => {
		sendData.send(client, paramName, DISCORDIE);
	}, 1800000);
	interval.unref();
	Object.defineProperty(client[paramName], "_interval", {
		value: interval,
		writable: true,
		enumerable: false,
	});
};
