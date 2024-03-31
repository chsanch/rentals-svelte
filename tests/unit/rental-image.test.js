import { render, screen, cleanup } from '@testing-library/svelte/svelte5';
import { expect, test, vi } from 'vitest';
import RentalImnage from '$lib/components/rental/image.svelte';
import userEvent from '@testing-library/user-event';

test('renders rental image component', () => {
  render(RentalImnage);
  expect(screen.getByTestId('rental-image')).toBeInTheDocument();
  // remove component
  cleanup(); 
});

test('renders rental image component with image', async () => {
	const user = userEvent.setup();
	const onClick = vi.fn();
	const { component } = render(RentalImnage, { src: 'https://example.com/image.jpg' });

	expect(screen.getByTestId('rental-image')).toBeInTheDocument();
	expect(screen.getByTestId('rental-image')).toHaveAttribute(
		'src',
		'https://example.com/image.jpg'
	);

	component.$on('click', onClick);

	const button = screen.getByTestId('rental-image-button');
	await user.click(button);

	expect(screen.getByTestId('rental-image-larger')).toBeInTheDocument();
  cleanup(); 
});
