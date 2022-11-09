import { PUBLIC_TOKEN } from '$env/static/public';

/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch }) => {
	/**
	 * This will run browser and server side
	 */
	console.log('=====================');
	console.log(PUBLIC_TOKEN);
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
