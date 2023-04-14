export const load = async ({ fetch }) => {
	const reqCoins = await fetch(
		'https://api.coinlore.com/api/tickers/'
	)
	const { data } = await reqCoins.json()

	const reqCharacters = await fetch(
		'https://rickandmortyapi.com/graphql/',
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				query: `
					query AllCharacters {
						characters {
							results {
								name
								id
								image
							}
						}
					}
			`
			})
		}
	)
	const {
		data: {
			characters: { results }
		}
	} = await reqCharacters.json()

	return {
		currencies: data,
		characters: results
	}
}
