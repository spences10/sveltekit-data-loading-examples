<script>
	/** @type {import('./$types').PageData} */
	export let data;
	let { currencies } = data;
</script>

<a href="/">&larr; Back</a>

{#each currencies as coin}
	<a class="link link-primary link-hover" data-sveltekit-prefetch href={`/coins/${coin.id}`}>
		<h2>{coin.name}</h2>
	</a>
{/each}

