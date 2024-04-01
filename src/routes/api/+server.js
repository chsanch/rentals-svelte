import { json } from '@sveltejs/kit';
import rentals from '$lib/data/api/rentals.json';
export function GET() {
	return json(rentals);
}
