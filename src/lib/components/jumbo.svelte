<section>
	<div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-x-36 lg:py-16 lg:grid-cols-12">
		<div class="mr-auto place-self-center lg:col-span-7" data-testid="jumbo-content">
			<slot />
		</div>
		<div class="hidden lg:mt-0 lg:col-span-5 lg:flex lg:w-80 lg:h-80" data-testid="jumbo-image">
			<img src="/images/teaching-tomster.png" alt="tomster" />
		</div>
	</div>
</section>
