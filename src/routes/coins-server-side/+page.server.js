import { SECRET_TOKEN } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ fetch }) => {
	console.log('=====================');
	console.log(SECRET_TOKEN);
	console.log('=====================');
	const fetchCoins = async () => {
		const res = await fetch('https://api.coinlore.com/api/tickers/');
		const { data } = await res.json();
		return data;
	};

	return {
		currencies: fetchCoins(),
	};
};
