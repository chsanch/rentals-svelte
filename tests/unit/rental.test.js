import { render, screen } from '@testing-library/svelte/svelte5';
import { expect, test } from 'vitest';
import Rental from '$lib/components/rental.svelte';

test('renders rental component', () => {
	render(Rental);
  expect(screen.getByTestId('rental-title')).toHaveTextContent('Grand Old Mansion');
  expect(screen.getByTestId('rental-owner')).toHaveTextContent('Veruca Salt');
  expect(screen.getByTestId('rental-type')).toHaveTextContent('Standalone');
  expect(screen.getByTestId('rental-location')).toHaveTextContent('San Francisco'); 
  expect(screen.getByTestId('rental-bedrooms')).toHaveTextContent('15');
  expect(screen.getByTestId('rental-image')).toBeInTheDocument();
});
