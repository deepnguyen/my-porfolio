<script>
	import { page } from '$app/stores';
</script>

<div>
	<div class="hero hero-overlay flex place-content-center items-center h-[100vh] p-4 bg-red-900">
		<h1>{$page.status}: {$page.error.message}</h1>
	</div>
</div>
