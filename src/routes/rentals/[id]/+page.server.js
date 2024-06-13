const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
	const res = await fetch(`/api/${params.id}`);
	let { data } = await res.json();
	let { id, attributes } = data;
	let type;

	if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
		type = 'Community';
	} else {
		type = 'Standalone';
	}

	/** @type {import('$lib/types').Rental} */
	return { id, type, ...attributes };
}
