<script>
	import { Button } from '$lib/components/ui/button/index.js';
	import Jumbo from '$lib/components/jumbo.svelte';
</script>

<Jumbo>
	<h1
		class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
		data-testid="about-heading"
	>
		About Super Rentals
	</h1>
	<p
		class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
		data-testid="about-paragraph"
	>
		The Super Rentals website is a delightful project created to explore Svelte. By building a
		property rental site, we can simultaneously imagine traveling AND building Svelte applications.
	</p>
	<Button href="/contact" data-testid="contact-us-button" class="mt-4">Contact Us</Button>
</Jumbo>
