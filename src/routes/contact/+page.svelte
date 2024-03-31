<script>
	import { Button } from '$lib/components/ui/button/index.js';
	import Jumbo from '$lib/components/jumbo.svelte';
</script>
<Jumbo>
	<h1
		class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
		data-testid="contact-heading"
	>
		Contact Us
	</h1>
	<p
		class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
		data-testid="contact-paragraph"
	>
		Super Rentals Representatives would love to help you<br />
		choose a destination or answer any questions you may have.
	</p>
	<address>
		Super Rentals HQ
		<p>
			1212 Test Address Avenue<br />
			Testington, OR 97233
		</p>
		<a class="font-medium text-blue-600 hover:underline" href="tel:503.555.1212"
			>+1 (503) 555-1212</a
		><br />
		<a class="font-medium text-cyan-600 hover:underline" href="mailto:superrentalsrep@emberjs.com"
			>superrentalsrep@emberjs.com</a
		>
	</address>
	<Button href="/about" data-testid="about-us-button" class="mt-4">About Us</Button>
</Jumbo>
