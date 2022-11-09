/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch, params }) => {
	let { coinid } = params;
	const fetchCoin = async (/** @type {string} */ id) => {
		const res = await fetch(
			`https://api.coinlore.com/api/ticker/?id=${coinid}`
		);
		const data = await res.json();
		return data;
	};

	return {
		coin: fetchCoin(coinid),
	};
};
