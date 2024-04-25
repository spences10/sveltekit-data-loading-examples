export const load = async ({ fetch, params }) => {
	let { coinid } = params;
	const fetchCoin = async () => {
		const req = await fetch(
			`https://api.coinlore.com/api/ticker/?id=${coinid}`
		);
		const data = await req.json();
		return data;
	};

	return {
		// top level promises in SvelteKit no awaited
		coin: await fetchCoin(),
	};
};
