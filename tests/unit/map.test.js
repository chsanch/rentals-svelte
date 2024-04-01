import { render, screen, cleanup } from '@testing-library/svelte/svelte5';
import { expect, test } from 'vitest';
import Map from '$lib/components/map.svelte';

test('renders default map component', () => {
  render(Map);
  expect(screen.getByTestId('rental-map')).toBeInTheDocument();
  expect(screen.getByTestId('rental-map')).toHaveAttribute(
    'alt',
    'Map centered at latitude 37.7749 and longitude -122.4194'
  );
  // remove component
  cleanup(); 
});

test('renders map component with coordinates', () => {
  render(Map, { lat: 40.7128, lng: -74.0060 });
  expect(screen.getByTestId('rental-map')).toBeInTheDocument();
  expect(screen.getByTestId('rental-map')).toHaveAttribute(
    'alt',
    'Map centered at latitude 40.7128 and longitude -74.006'
  );
  // remove component
  cleanup(); 
});
