<script>
	import { Button } from '$lib/components/ui/button/index.js';
	import Jumbo from '$lib/components/jumbo.svelte';
	import Rental from '$lib/components/rental.svelte';
	export let data;
</script>

<Jumbo>
	<h1
		class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
		data-testid="welcome-heading"
	>
		Welcome to Super Rentals!
	</h1>
	<p
		class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
		data-testid="welcome-paragraph"
	>
		We hope you find exactly what you're looking for in a place to stay.
	</p>
	<Button href="/about" data-testid="about-us-button" class="mt-4">About Us</Button>
</Jumbo>

<div class="md:grid grid-rows max-w-screen-xl md:px-4 md:py-4 mx-auto gap-3">
	{#each data.data as rental}
		<Rental {...rental} />
	{/each}
</div>
