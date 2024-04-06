<script>
	let dialogOpen = $state(false);
	let { ...imgProps } = $props();
	import * as Dialog from '$lib/components/ui/dialog';
</script>

<div class="text-center md:space-y-4 md:p-2">
	<img
		data-testid="rental-image"
		class="md:min-w-48 md:max-w-64 md:min-auto mx-auto pr-4"
		loading="lazy"
		{...imgProps}
	/>
	<button 
		on:click={() => (dialogOpen = true)} 
		class="invisible md:visible md:text-xs md:display-block" 
		data-testid="rental-image-button"
	>
		View Larger
	</button>
</div>
<Dialog.Root bind:open={dialogOpen}>
	<Dialog.Content class="sm:max-w-[825px]">
		<img
			data-testid="rental-image-larger"
			class="w-full h-auto mx-auto pr-4"
			loading="lazy"
			{...imgProps}
		/>
	</Dialog.Content>
	<Dialog.Trigger />
</Dialog.Root>
