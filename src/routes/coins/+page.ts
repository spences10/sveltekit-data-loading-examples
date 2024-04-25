import { env } from '$env/dynamic/public';

export const load = async ({ fetch }) => {
	/**
	 * This will run browser and server side
	 */
	console.log('=====================');
	console.log(env.PUBLIC_TOKEN);
	console.log('=====================');
	const fetchCoins = async () => {
		const req = await fetch('https://api.coinlore.com/api/tickers/');
		const { data } = await req.json();
		return data;
	};

	return {
		// top level promises in SvelteKit no awaited
		currencies: await fetchCoins(),
	};
};
