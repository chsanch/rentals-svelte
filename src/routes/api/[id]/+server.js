import { json } from '@sveltejs/kit';
// import { rentals } from '../../../lib/data/api/rentals/downtown-charm.json'

export async function GET({ params }) {
    // Dynamically import the file based on params.id
    // need to pass the whole route due vite limitations
    // https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations
    const rental = await import(`../../../lib/data/api/rentals/${params.id}.json`);

    return json(rental);
}
