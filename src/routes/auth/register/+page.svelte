<script>
	// * Imports
	import { goto } from '$app/navigation';
	import { auth } from '../../../Firebase';
	import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
	// import { setDoc } from 'firebase/firestore/lite';
	// * Components
	import SignUp from '../../../components/auth/sign_up_form.svelte';
	import Toast from '../../../components/toast/toast.svelte';
	// * Variables & Constants
	let errors;
	// * Functions
	async function signUp(event) {
		try {
			let user = await createUserWithEmailAndPassword(
				auth,
				event.detail.email,
				event.detail.password
			);
			await updateProfile(user.user, { displayName: event.detail.username });
			// await setDoc(userDoc(auth.currentUser.uid), {
			// 	username: user.user.displayName,
			// 	email: user.user.email
			// });
			await goto('/');
		} catch (e) {
			console.log('error from creating user', e);
			errors = e;
		}
	}
</script>

<svelte:head>
	<title>Register</title>
</svelte:head>

{#if errors}
	<Toast alertType="error" onClose={() => (errors = false)}>
		{errors}
	</Toast>
{/if}
<div>
	<div class="hero min-h-[20vh] bg-base-200">
		<h1>Sign Up</h1>
	</div>
	<div class="hero min-h-[60vh]">
		<div class="hero-content min-h-[40vh] w-full text-center flex-col place-content-between">
			<SignUp on:signup={signUp} />
			<div>Already have an account? <a class="link" href="/auth/login">Sign In</a></div>
		</div>
	</div>
</div>
