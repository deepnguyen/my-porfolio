<script>
	// * Imports
	import '../app.css';
	import { onAuthStateChanged } from 'firebase/auth';
	import { navigating } from '$app/stores';
	import { onMount } from 'svelte';
	import { auth } from '../Firebase';
	import { page } from '$app/stores';
	// * Components
	import Nav from '../components/nav.svelte';
	import { error } from '@sveltejs/kit';
	// * Variables & Constants
	/** @type {import('./$types').LayoutData} */
	export let data;
	onMount(() => {
		onAuthStateChanged(
			auth,
			(user) => {
				data.user = user;
			},
			(err) => {
				data.user = null;
				console.log('error', err);
			}
		);
	});
	console.log($page.status);
</script>

{#if $navigating}
	<div class="radial-progress" />
{:else}
	{#if $page.status === 200}
		<Nav {data} />
	{/if}
	<main>
		<slot />
	</main>
	{#if $page.status === 200}
		<footer
			class="flex p-4 h-[10vh] items-center place-content-center p-10 bg-neutral text-neutral-content"
		>
			<h2>Lam Nguyen</h2>
		</footer>
	{/if}
{/if}
