// get data from the route /api
const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

export async function load({ fetch }) {
	const res = await fetch('/api');
	let { data } = await res.json();

	const parsed = data.map((rental) => {
		let { id, attributes } = rental;
		let type;

		if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
			type = 'Community';
		} else {
			type = 'Standalone';
		}

		return { id, type, ...attributes };
	}); // return the data
	return { data: parsed };
}
