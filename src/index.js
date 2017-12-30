const bind = require("./Bind");
const { EventEmitter } = require("events");

class DBLPoster extends EventEmitter {
	constructor (apiKey) {
		super();
		Object.defineProperty(this, "apiKey", {
			value: apiKey,
			writable: false,
			enumerable: false,
		});
	}

	bind (client, paramName = "dblPoster") {
		if (this.apiKey === "" || this.apiKey === null || !this.apiKey || typeof this.apiKey !== "string") {
			throw new Error(`The API key is either not specified, or is not a string.`);
		}
		Object.defineProperty(client, paramName, {
			value: this,
			writable: false,
		});
		return bind(client, this.apiKey, paramName);
	}
}

module.exports = DBLPoster;
