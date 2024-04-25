<script lang="ts">
	const { children } = $props();

	import '../app.pcss';
</script>

<main class="container prose-xl mx-auto mt-10 max-w-3xl px-4">
	{@render children()}
</main>
