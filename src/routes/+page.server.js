// get data from the route /api
const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
	const res = await fetch('/api');
	/** @type {import('$lib/types').RentalsJson} */
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
	});

	/** @type {import('$lib/types').Rentals} */
	return { data: parsed };
}
