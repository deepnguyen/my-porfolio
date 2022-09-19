<script>
	// * Imports
	import '../app.css';
	import { onAuthStateChanged } from 'firebase/auth';
	import { navigating } from '$app/stores';
	import { onMount } from 'svelte';
	import { auth } from '../Firebase';
	import { getStores } from '$app/stores';
	// * Components
	import Nav from '../components/nav.svelte';
	// * Variables & Constants
	/** @type {import('./$types').LayoutData} */
	export let data;
	onMount(() => {
		onAuthStateChanged(
			auth,
			(user) => {
				data.user = user;
			},
			(error) => {
				data.user = null;
				console.log('error', error);
			}
		);
	});
</script>

{#if $navigating}
	<div class="radial-progress" />
{:else}
	<Nav {data} />

	<main>
		<slot />
	</main>

	<footer
		class="flex p-4 h-[10vh] items-center place-content-center p-10 bg-neutral text-neutral-content"
	>
		<h2>Lam Nguyen</h2>
	</footer>
{/if}
