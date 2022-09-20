<script>
	// * Imports
	import { goto } from '$app/navigation';
	import { auth } from '../../../Firebase';
	import { signInWithEmailAndPassword } from 'firebase/auth';
	// import { setDoc } from "firebase/firestore/lite";
	// * Components
	import SignIn from '../../../components/auth/sign_in_form.svelte';
	import Toast from '../../../components/toast/toast.svelte';
	// * Variables & Constants
	let errors;
	// * Functions
	async function signIn(event) {
		errors = false;
		try {
			const user = await signInWithEmailAndPassword(
				auth,
				event.detail.email,
				event.detail.password
			);
			// await setDoc(userDoc(auth.currentUser.uid), { username: user.user.displayName, email: user.user.email })
			await goto('/');
		} catch (error) {
			console.log('error signin in', error);
			errors = error;
		}
	}
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

{#if errors}
	<Toast alertType="error" onClose={() => (errors = false)}>
		{errors}
	</Toast>
{/if}
<div>
	<div class="hero min-h-[20vh] bg-base-200">
		<h1>Login</h1>
	</div>
	<div class="hero min-h-[60vh]">
		<div class="hero-content min-h-[40vh] w-full text-center flex-col place-content-between">
			<SignIn on:login={signIn} />
			<div>Already have an account? <a class="link" href="/auth/register">Sign Up</a></div>
		</div>
	</div>
</div>
