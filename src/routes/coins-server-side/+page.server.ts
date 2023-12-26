import { env } from '$env/dynamic/private'

export const load = async ({ fetch }) => {
	/**
	 * This will run only server side
	 */
	console.log('=====================')
	console.log(env.SECRET_TOKEN)
	console.log('=====================')
	const fetchCoins = async () => {
		const req = await fetch('https://api.coinlore.com/api/tickers/')
		const { data } = await req.json()
		return data
	}

	return {
		currencies: fetchCoins()
	}
}
