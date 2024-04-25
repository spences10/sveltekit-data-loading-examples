export const load = async ({ fetch }) => {
	const [coinsReq, charactersReq] = await Promise.all([
		fetch('https://api.coinlore.com/api/tickers/'),
		fetch('https://rickandmortyapi.com/graphql/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
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
			`,
			}),
		}),
	]);
	const { data } = await coinsReq.json();

	const {
		data: {
			characters: { results },
		},
	} = await charactersReq.json();

	return {
		currencies: data,
		characters: results,
	};
};
