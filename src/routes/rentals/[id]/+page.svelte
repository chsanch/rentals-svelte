<script>
	export let data;
	import Jumbo from '$lib/components/jumbo.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import RentalImage from '$lib/components/rental/image.svelte';
	import Map from '$lib/components/map.svelte';
	import Rental from '$lib/components/rental.svelte';
</script>

<Jumbo>
	<h2
		class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl"
	>
		{data.title}
	</h2>
	<p>Nice find! This looks like a nice place to stay near {data.city}.</p>
	<Button href="#" class="mt-4">Share on Twitter</Button>
</Jumbo>
<article class="bg-white grid grid-rows max-w-screen-xl px-4 py-8 mx-auto">
	<div class="grid grid-rows md:grid-cols-2 gap-4">
        <div>
		<RentalImage src={data.image} alt={`A picture of ${data.title}`} />
        </div>
		<div>
			<h3 class="text-3xl font-bold md:text-4xl">About {data.title}</h3>
            <div class="flex-row mt-2"><span class="text-m md:text-l font-semibold text-gray-800">Owner:</span> <span class="text-m md:text-l italic">{data.owner}</span></div>
            <div class="flex-row mt-2"><span class="text-m md:text-l font-semibold text-gray-800">Type:</span> <span class="text-m md:text-l italic">{data.type} - {data.category}</span></div>
            <div class="flex-row mt-2"><span class="text-m md:text-l font-semibold text-gray-800">Location:</span> <span class="text-m md:text-l italic">{data.city}</span></div>
            <div class="flex-row mt-2"><span class="text-m md:text-l font-semibold text-gray-800">Number of Bedrooms:</span> <span class="text-m md:text-l italic">{data.bedrooms}</span></div>
            <div class="flex-row mt-3 italic">{data.description}</div>
		</div>
	</div>
    <div class="mx-auto">
    <Map lat={data.location.lat} lng={data.location.lng} zoom={12} width={894} height={600} />
    </div>
</article>
