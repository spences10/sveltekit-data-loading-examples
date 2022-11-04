/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch }) => {
	const resCoins = await fetch(
		'https://api.coinlore.com/api/tickers/'
	);
	const { data } = await resCoins.json();

	const resCharacters = await fetch(
		'https://rickandmortyapi.com/graphql/',
		{
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
		}
	);
	const {
		data: {
			characters: { results },
		},
	} = await resCharacters.json();

	return {
		currencies: data,
		characters: results,
	};
};
