<script>
	import { PUBLIC_MAPBOX_ACCESS_TOKEN } from '$env/static/public';
	export let lat = 37.7749;
	export let lng = -122.4194;
	export let zoom = 10;
	export let width = 150;
	export let height = 120;
	const MAPBOX_API = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static';
	let src = `${MAPBOX_API}/pin-s+000(${lng},${lat})/${lng},${lat},${zoom}/${width}x${height}?access_token=${PUBLIC_MAPBOX_ACCESS_TOKEN}`;
</script>

	<img
		data-testid="rental-map"
		alt={`Map centered at latitude ${lat} and longitude ${lng}`}
		class={ `w-[${width}px] h-[${height}px]` }
		src={src}
	/>
