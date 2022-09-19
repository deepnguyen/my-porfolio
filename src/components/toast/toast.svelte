<script>
	// * Props
	export let onClose;
	export let alertType;
	// * Functions
	function getAlertClass() {
		if (alertType === 'error') return 'alert-error';
		if (alertType === 'success') return 'alert-success';
		if (alertType === 'warning') return 'alert-warning';
		return 'alert-info';
	}
</script>

<div class="toast toast-top toast-end">
	<div class="alert {getAlertClass()} flex-row">
		<div class="my-auto space-x-5">
			<slot />
			<div on:click={onClose} class="cursor-pointer">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-4 h-4 "
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</div>
		</div>
	</div>
</div>
