<script lang="ts">
	const { data } = $props();
</script>

<a href="/coins">&larr; Back</a>

<pre class="mockup-code">{JSON.stringify(data, null, 2)}</pre>
