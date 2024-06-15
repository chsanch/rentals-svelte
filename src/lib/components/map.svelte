<!--
	@component
	- A component that renders a map from Mapbox. It will render a map centered at a specific latitude and longitude with a specific zoom level.

	@example
	<Map lat={37.7749} lng={-122.4194} zoom={10} width={254} height={146} />
	
-->
<script>
	import { PUBLIC_MAPBOX_ACCESS_TOKEN } from '$env/static/public';
	/** @type {{lat?: number, lng?: any, zoom?: number, width: number, height: number}} */
	let {
		lat = 37.7749,
		lng = -122.4194,
		zoom = 10,
		width,
		height
	} = $props();
	const MAPBOX_API = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static';
	let src = `${MAPBOX_API}/pin-s+000(${lng},${lat})/${lng},${lat},${zoom}/${width}x${height}?access_token=${PUBLIC_MAPBOX_ACCESS_TOKEN}`;
</script>

	<img
		data-testid="rental-map"
		alt={`Map centered at latitude ${lat} and longitude ${lng}`}
		class="md:max-w-fit"
		src={src}
	/>
