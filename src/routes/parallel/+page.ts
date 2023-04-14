export const load = async ({ fetch }) => {
	const fetchCoins = async () => {
		const req = await fetch('https://api.coinlore.com/api/tickers/')
		const { data } = await req.json()
		return data
	}
	const fetchCharacters = async () => {
		const req = await fetch('https://rickandmortyapi.com/graphql/', {
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
		})
		const {
			data: {
				characters: { results }
			}
		} = await req.json()
		return results
	}

	return {
		currencies: fetchCoins(),
		characters: fetchCharacters()
	}
}
