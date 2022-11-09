/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch }) => {
	const fetchCoins = async () => {
		const res = await fetch('https://api.coinlore.com/api/tickers/');
		const { data } = await res.json();
		return data;
	};

	return {
		currencies: fetchCoins(),
	};
};
