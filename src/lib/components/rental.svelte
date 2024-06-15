<!--
	@component
	- A rental component with a title, owner, location, type, bedrooms, city, and an image. It will render
		a title, owner, location, type, bedrooms, city, and an image in the left column and a map in the right column.
	
	@example
	<Rental
		title="Modern, Clean, and Spacious"
		owner="Mike Smith"
		location={{ lat: 37.7749, lng: -122.4194 }}
		type="Private Room"
		bedrooms={3}
		city="San Francisco"
		image="/images/rentals/rental-1.jpg"
	/>
	
-->
<script>
	import * as Card from '$lib/components/ui/card';
	import RentalImage from '$lib/components/rental/image.svelte';
	import Map from '$lib/components/map.svelte';
	/** @type {import('$lib/types').Rental} */
	let { id, title, owner, location, category, bedrooms, city, image, type } = $props();
	let url = `rentals/${id}`;
</script>

<Card.Root class="mb-4 md:mb-2">
	<Card.Header>
		<Card.Title
			data-testid="rental-title"
			class="text-3xl font-bold px-2 mb-0 text-center md:text-left"
			><a href={url}>{title}</a></Card.Title
		>
	</Card.Header>
	<Card.Content class="md:flex">
		<RentalImage src={image} alt={`A picture of ${title}`} />
		<div class="grid w-full md:max-h-48 mt-0 md:grid-cols-2 md:grid-rows-4 md:ml-3">
			<div class="flex flex-col mb-2" data-testid="rental-owner">
				<span class="font-semibold text-gray-800">Owner:</span>
				<span class="italic">{owner}</span>
			</div>
			<div class="flex flex-col mb-2" data-testid="rental-location">
				<span class="font-semibold text-gray-800">City:</span>
				<span class="italic">{city}</span>
			</div>
			<div class="flex flex-col mb-2" data-testid="rental-type">
				<span class="font-semibold text-gray-800">Type:</span>
				<span class="italic">{type} - {category}</span>
			</div>
			<div class="flex flex-col mb-2" data-testid="rental-bedrooms">
				<span class="font-semibold text-gray-800">Bedrooms:</span>
				<span class="italic">{bedrooms}</span>
			</div>
		</div>
		<div class="mt-1 mx-auto">
			<Map lat={location.lat} lng={location.lng} zoom={10} width={254} height={146} />
		</div>
	</Card.Content>
</Card.Root>
