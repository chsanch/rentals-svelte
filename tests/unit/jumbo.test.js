import { render, screen } from '@testing-library/svelte/svelte5';
import { expect, test } from 'vitest';
import Jumbo from '$lib/components/jumbo.svelte';

  test('renders jumbo component', () => {
    render(Jumbo);
    expect(screen.getByTestId('jumbo-content')).toBeInTheDocument();
    expect(screen.getByTestId('jumbo-image')).toBeInTheDocument();
  });

