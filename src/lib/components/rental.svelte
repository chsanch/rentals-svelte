<script>
	import * as Card from '$lib/components/ui/card';
	import RentalImage from '$lib/components/rental/image.svelte';
</script>

<Card.Root>
	<Card.Header>
		<Card.Title data-testid="rental-title">Grand Old Mansion</Card.Title>
	</Card.Header>
	<Card.Content class="md:flex">
		<RentalImage
			src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg"
			alt="A picture of Grand Old Mansion"
		/>
		<div class="grid w-full items-center gap-4 md:grid-cols-2">
			<div class="flex flex-col space-y-1.5" data-testid="rental-owner">
				<span class="text-sm font-semibold text-gray-500">Owner:</span>
				<span class="text-sm italic">Veruca Salt</span>
			</div>
			<div class="flex flex-col space-y-1.5" data-testid="rental-location">
				<span class="text-sm font-semibold text-gray-500">City:</span>
				<span class="text-sm italic">San Francisco</span>
			</div>
			<div class="flex flex-col space-y-1.5" data-testid="rental-type">
				<span class="text-sm font-semibold text-gray-500">Type:</span>
				<span class="text-sm italic">Standalone</span>
			</div>
			<div class="flex flex-col space-y-1.5" data-testid="rental-bedrooms">
				<span class="text-sm font-semibold text-gray-500">Bedrooms:</span>
				<span class="text-sm italic">15</span>
			</div>
		</div>
	</Card.Content>
</Card.Root>
