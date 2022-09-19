<script>
	// * Imports
	import { createEventDispatcher } from 'svelte';
	// * Variables & Constants
	let email;
	let password;
	const dispatcher = createEventDispatcher();
	// * Functions
	export function login() {
		dispatcher('login', {
			email,
			password
		});
	}
</script>

<div class="form-control flex-col w-full max-w-md ">
	<div class="hero-content min-h-[30vh] flex-col w-full max-w-md">
		<input
			type="email"
			class="input input-bordered w-full"
			bind:value={email}
			placeholder="Enter your email"
			name="email"
		/>
		<input
			type="password"
			class="input input-bordered w-full"
			bind:value={password}
			placeholder="Enter password"
			name="password"
		/>
	</div>
	<div>
		<button class="btn btn-primary w-2/3" on:click={login}>Sign In</button>
	</div>
</div>
