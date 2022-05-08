import { pinata_api_key, pinata_secret_api_key } from "./apiConfig";

export default function handler(req, res) {
	const axios = require("axios");
	const url = `https://api.pinata.cloud/data/pinList?status=pinned`;
	axios
		.get(url, {
			headers: {
				pinata_api_key: pinata_api_key,
				pinata_secret_api_key: pinata_secret_api_key,
			},
		})
		.then((response) => res.status(200).json({ data: response.data }))
		.catch(function (error) {
			console.log(error);
		});
}
