<script>
	import * as Card from '$lib/components/ui/card';
	import RentalImage from '$lib/components/rental/image.svelte';
  import Map from '$lib/components/map.svelte';
  export let title;
  export let owner;
  export let location;
  export let category;
  export let bedrooms;
  export let city;
  export let description;
  export let image;

</script>

<Card.Root>
	<Card.Header>
		<Card.Title data-testid="rental-title">{title}</Card.Title>
	</Card.Header>
	<Card.Content class="md:flex">
		<RentalImage
			src={image}
			alt={`A picture of ${title}`}
		/>
		<div class="grid w-full items-center gap-4 md:grid-cols-2">
			<div class="flex flex-col space-y-1.5" data-testid="rental-owner">
				<span class="text-sm font-semibold text-gray-500">Owner:</span>
				<span class="text-sm italic">{owner}</span>
			</div>
			<div class="flex flex-col space-y-1.5" data-testid="rental-location">
				<span class="text-sm font-semibold text-gray-500">City:</span>
				<span class="text-sm italic">{city}</span>
			</div>
			<div class="flex flex-col space-y-1.5" data-testid="rental-type">
				<span class="text-sm font-semibold text-gray-500">Type:</span>
				<span class="text-sm italic">{category}</span>
			</div>
			<div class="flex flex-col space-y-1.5" data-testid="rental-bedrooms">
				<span class="text-sm font-semibold text-gray-500">Bedrooms:</span>
				<span class="text-sm italic">{bedrooms}</span>
			</div>
		</div>
    <Map lat={location.lat} lng={location.lng} zoom={10} width={120} height={150} />
	</Card.Content>
</Card.Root>
