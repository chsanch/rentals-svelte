import { render, screen } from '@testing-library/svelte/svelte5';
import { expect, test } from 'vitest';
import Rental from '$lib/components/rental.svelte';

test('renders rental component', () => {
	render(Rental, {
		title: 'Grand Old Mansion',
		owner: 'Veruca Salt',
		city: 'San Francisco',
		location: { lat: 37.7749, lng: -122.4194 },
		category: 'Standalone',
		bedrooms: 15,
		image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
	});
	expect(screen.getByTestId('rental-title')).toHaveTextContent('Grand Old Mansion');
	expect(screen.getByTestId('rental-owner')).toHaveTextContent('Veruca Salt');
	expect(screen.getByTestId('rental-type')).toHaveTextContent('Standalone');
	expect(screen.getByTestId('rental-location')).toHaveTextContent('San Francisco');
	expect(screen.getByTestId('rental-bedrooms')).toHaveTextContent('15');
	expect(screen.getByTestId('rental-image')).toBeInTheDocument();
});
