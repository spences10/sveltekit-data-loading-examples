<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<main class="prose-xl container mx-auto mt-10 max-w-3xl px-4">
	{@render children()}
</main>
