<script>
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<section class="dark:bg-gray-900">
	<div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
		<div class="mr-auto place-self-center lg:col-span-7">
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
		</div>
		<div class="hidden lg:mt-0 lg:col-span-5 lg:flex lg:w-96 lg:h-96">
			<img src="images/teaching-tomster.png" alt="tomster" />
		</div>
		<Button href="/about" data-testid="about-us-button">About Us</Button>
	</div>
</section>
