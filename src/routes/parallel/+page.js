/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch }) => {
	const fetchCoins = async () => {
		const res = await fetch('https://api.coinlore.com/api/tickers/');
		const { data } = await res.json();
		return data;
	};
	const fetchCharacters = async () => {
		const res = await fetch('https://rickandmortyapi.com/graphql/', {
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
		});
		const {
			data: {
				characters: { results },
			},
		} = await res.json();
		return results;
	};

	return {
		currencies: fetchCoins(),
		characters: fetchCharacters(),
	};
};
