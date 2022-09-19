<script>
	// * Imports
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	// * Variables & Constants
	const themes = [
		'light',
		'dark',
		'cupcake',
		'bumblebee',
		'emerald',
		'corporate',
		'synthwave',
		'retro',
		'cyberpunk',
		'valentine',
		'halloween',
		'garden',
		'forest',
		'aqua',
		'lofi',
		'pastel',
		'fantasy',
		'wireframe',
		'black',
		'luxury',
		'dracula',
		'cmyk',
		'autumn',
		'business',
		'acid',
		'lemonade',
		'night',
		'coffee',
		'winter'
	];
	// * Functions
	onMount(() => {
		themeChange(false);
	});
</script>

<div class="dropdown dropdown-end">
	<label for="theme-dropdown" tabindex="0" class="btn btn-outline">
		<svg
			width="20"
			height="20"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			class="inline-block h-4 w-4 stroke-current mr-1"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
			/>
		</svg>
		Change Theme
	</label>
	<div
		tabindex="0"
		class="menu dropdown-content shadow bg-base-content rounded-box flex items-stretch p-1 mt-2 h-[50vh] overflow-y-auto"
	>
		{#each themes as theme}
			<div data-set-theme={theme} data-act-class="outline" class=" p-1">
				<div
					data-theme={theme}
					class="cursor-pointer w-full flex flex-row space-x-6 p-2 place-content-between rounded-box"
				>
					<div class="text-sm ">{theme}</div>
					<div class="flex space-x-1">
						<div class="bg-primary w-2 rounded" />
						<div class="bg-secondary w-2 rounded" />
						<div class="bg-accent w-2 rounded" />
						<div class="bg-neutral w-2 rounded" />
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
