import { SECRET_TOKEN } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ fetch }) => {
	console.log('=====================');
	console.log(SECRET_TOKEN);
	console.log('=====================');
	const fetchCoins = async () => {
		const req = await fetch('https://api.coinlore.com/api/tickers/');
		const { data } = await req.json();
		return data;
	};

	return {
		currencies: fetchCoins(),
	};
};
