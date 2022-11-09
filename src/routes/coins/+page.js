/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch }) => {
	const fetchCoins = async () => {
		const req = await fetch('https://api.coinlore.com/api/tickers/');
		const { data } = await req.json();
		return data;
	};

	return {
		currencies: fetchCoins(),
	};
};
