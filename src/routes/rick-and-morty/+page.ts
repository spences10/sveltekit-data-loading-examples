export const load = async ({ fetch }) => {
	const req = await fetch('https://rickandmortyapi.com/graphql', {
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
	} = await req.json();

	return {
		characters: results,
	};
};
