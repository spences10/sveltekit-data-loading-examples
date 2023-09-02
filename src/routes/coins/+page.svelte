<script lang="ts">
	export let data
	let { currencies } = data

	/**
	 * +page.svelte gets it's `data` from a `load` function
	 *
	 * Load functions are defined in:
	 * 	 +page.js, +layout.js, +page.server.js or +layout.server.js
	 *
	 * +page.js, +layout.js will run on both the browser and the server
	 *
	 * +page.server.js, +layout.server.js will only run on the server
	 */
</script>

<a href="/">&larr; Back</a>

<ul>
	{#each currencies as coin}
		<li>
			<a
				class="link link-primary link-hover"
				href={`/coins/${coin.id}`}
			>
				<h2>{coin.name}</h2>
			</a>
		</li>
	{/each}
</ul>
