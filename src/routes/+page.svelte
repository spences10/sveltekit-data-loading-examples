<script lang="ts">
	let pages = [
		{ route: `/coins`, name: `Bitcoins` },
		{ route: `/rick-and-morty`, name: `Rick and Morty characters` },
		{ route: `/waterfall`, name: `Waterfall` },
		{ route: `/promise-all`, name: `Promise all / parallel` },
		{ route: `/coins-server-side`, name: `Page server` },
		{ route: `/coins`, name: `Page parameters` },
	];
</script>

<h1>Data loading in <span class="text-primary">SvelteKit</span></h1>

<p>
	Getting data from two sources, Bitcoin data from the Cionlore API
	and Rick and Morty characters from the Rick and Morty API.
</p>

<ul>
	{#each pages as page}
		<li class="list-disc">
			<a class="link-hover link link-primary" href={page.route}>
				{page.name}
			</a>
		</li>
	{/each}
</ul>
