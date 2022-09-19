<script>
	// * Imports
	import { signOut } from 'firebase/auth';
	import { auth } from '../Firebase';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	// * Components
	import ThemePicker from './themePicker.svelte';
	// * Variables & Constants
	/** @type {import('./$types').PageData} */
	export let data;
	console.log('data', data);
	// * Functions
	async function logOut() {
		await signOut(auth);
		await goto('/');
	}
</script>

<nav class="min-h-[10vh] flex items-center place-content-between px-4">
	<h2>
		{#if data.user !== null}
			Welcome <span class="badge"> {data?.user?.displayName || ''}</span>
		{:else}
			Not Logged In
		{/if}
	</h2>
	<ul class="space-x-1 flex">
		{#if data.user !== null}
			<li>
				<button class="btn" on:click={logOut}>Log Out</button>
			</li>
			<li class="flex items-center">
				<a class="link" href="/404">Create a new post</a>
			</li>
		{:else}
			<li>
				<a class="btn btn-primary" href="/auth/login">Login</a>
			</li>
			<li>
				<a class="btn btn-secondary" href="/auth/register">Sign Up</a>
			</li>
		{/if}
		<ThemePicker />
	</ul>
</nav>
