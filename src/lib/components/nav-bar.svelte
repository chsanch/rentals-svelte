<!--
	@component
	- A navigation bar component with links to the home, about, and contact pages. It will render a navigation bar with
		links to the home, about, and contact pages.

	@example
	<NavBar />
-->
<script>
	import { page } from '$app/stores';

	let active_class = 'text-white rounded-md px-3 py-2 text-m font-bold';
	let inactive_class = 'text-gray-300 hover:bg-orange-700 rounded-md px-3 py-2 text-m font-medium';
	let is_active = (/** @type {string} */ href) => href === $page.url.pathname;
	let link_class = (/** @type {string} */ href) => (is_active(href) ? active_class : inactive_class);
</script>

<nav class="bg-orange-400" data-testid="menu">
	<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		<div class="relative flex h-16 items-center justify-between">
			<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
				<div class="flex flex-shrink-0 items-center">
					<a href="/" data-testid="menu-home">
						<h1 class="text-white font-bold text-2xl">SuperRentals</h1>
					</a>
				</div>
				<div class="hidden sm:ml-6 sm:block">
					<div class="flex space-x-4">
						<a
							href="/about"
							class={link_class('/about')}
							aria-current={is_active('/about') ? 'page' : false}
							data-testid="menu-about"
						>
							About
						</a>
						<a
							href="/contact"
							class={link_class('/contact')}
							aria-current={is_active('/contact') ? 'page' : false}
							data-testid="menu-contact"
						>
							Contact
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</nav>
