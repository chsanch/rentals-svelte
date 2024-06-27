<!-- 
	@component
	- A jumbotron component with a title, description, and an image. It will render
		a title and description in the left column and an image in the right column.

	@example
	<Jumbo>
		<h2 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
			Welcome to Ember Rentals
		</h2>
		<p>
			We help you find the best rentals in the world. We have properties all around the world that you can rent for your next vacation.
		</p>
	</Jumbo>
-->
<script>
	/** @type {{ children: import('svelte').Snippet }}*/
	let { children } = $props();
</script>
<section>
	<div class="grid max-w-screen-xl px-4 py-4 mx-auto md:gap-8 xl:gap-x-36 lg:grid-cols-12">
		<div class="mr-auto place-self-center lg:col-span-7" data-testid="jumbo-content">
			{@render children()}
		</div>
		<div class="hidden lg:mt-0 lg:col-span-5 lg:flex lg:w-80 lg:h-80" data-testid="jumbo-image">
			<img src="/images/teaching-tomster.png" alt="tomster" />
		</div>
	</div>
</section>
