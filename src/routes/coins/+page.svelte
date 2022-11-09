<script>
	/** @type {import('./$types').PageData} */
	export let data;
	let { currencies } = data;
</script>

{#each currencies as coin}
	<a data-sveltekit-prefetch href={`/coins/${coin.id}`}>
		<h2>{coin.name}</h2>
	</a>
{/each}
<pre>{JSON.stringify(data, null, 2)}</pre>
