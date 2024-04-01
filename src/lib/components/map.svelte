<script>
	import { PUBLIC_MAPBOX_ACCESS_TOKEN } from '$env/static/public';
	export let lat = 37.7749;
	export let lng = -122.4194;
	export let zoom = 10;
	export let width = 120;
	export let height = 150;
	const MAPBOX_API = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static';
	let src = `${MAPBOX_API}/pin-s+000(${lng},${lat})/${lng},${lat},${zoom}/${width}x${height}?access_token=${PUBLIC_MAPBOX_ACCESS_TOKEN}`;
</script>

<div class="text-center">
	<img
		data-testid="rental-map"
		alt={`Map centered at latitude ${lat} and longitude ${lng}`}
		class="w-48 h-auto mx-auto"
		src={src}
	/>
</div>
