<script>
	let pages = [
		{ route: `/coins`, name: `Coins` },
		{ route: `/waterfall`, name: `Waterfall` },
		{ route: `/parallel`, name: `Parallel` },
		{ route: `/promise-all`, name: `Promise all` },
		{ route: `/coins-server-side`, name: `Page server` },
		{ route: `/coins`, name: `Page parameters` },
	];
</script>

<h1>Data loading in <span class="text-primary">SvelteKit</span></h1>

<ul>
	{#each pages as page}
		<li class="list-disc">
			<a
				class="link link-primary link-hover"
				href={page.route}
				data-sveltekit-prefetch>{page.name}</a
			>
		</li>
	{/each}
</ul>
