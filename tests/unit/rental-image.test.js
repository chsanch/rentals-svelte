import { render, screen } from '@testing-library/svelte/svelte5';
import { expect, test } from 'vitest';
import RentalImnage from '$lib/components/rental/image.svelte';

test('renders rental image component', () => {
  render(RentalImnage);
  expect(screen.getByTestId('rental-image')).toBeInTheDocument();
});
