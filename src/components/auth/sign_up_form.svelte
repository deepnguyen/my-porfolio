<script>
	// * Imports
	import { createEventDispatcher } from 'svelte';
	// * Variables & Constants
	let dispatch = createEventDispatcher();
	let username, email, password;
	// * Functions
	function signup() {
		dispatch('signup', {
			username,
			email,
			password
		});
	}
</script>

<div class="form-control flex-col w-full max-w-md ">
	<div class="hero-content min-h-[30vh] flex-col w-full max-w-md">
		<input
			type="text"
			class="input input-bordered w-full"
			bind:value={username}
			placeholder="Enter your username"
			name="username"
		/>
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
		<button class="btn btn-primary w-2/3" on:click={signup}>Sign Up</button>
	</div>
</div>
