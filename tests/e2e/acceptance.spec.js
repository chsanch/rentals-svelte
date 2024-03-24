import { expect, test } from '@playwright/test';

test('visiting /', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveURL('/');
	await expect(page.getByTestId('welcome-heading')).toHaveText('Welcome to Super Rentals!');
	await expect(page.getByTestId('welcome-paragraph')).toHaveText(
		`We hope you find exactly what you're looking for in a place to stay.`
	);
	await expect(page.getByTestId('about-us-button')).toHaveText('About Us');
	await page.getByTestId('about-us-button').click();
	await expect(page).toHaveURL('/about');
});

test('visiting /about', async ({ page }) => {
	await page.goto('/about');
	await expect(page).toHaveURL('/about');
	await expect(page.getByTestId('about-heading')).toHaveText('About Super Rentals');
	await expect(page.getByTestId('about-paragraph'))
		.toHaveText(`The Super Rentals website is a delightful project created to explore Svelte. By building a
				property rental site, we can simultaneously imagine traveling AND building Svelte
				applications.
`);
	await expect(page.getByTestId('contact-us-button')).toHaveText('Contact Us');
	await page.getByTestId('contact-us-button').click();
	await expect(page).toHaveURL('/contact');
});

test('visiting /contact', async ({ page }) => {
	await page.goto('/contact');
	await expect(page).toHaveURL('/contact');
	await expect(page.getByTestId('contact-heading')).toHaveText('Contact Us');
	await expect(page.getByTestId('contact-paragraph')).toHaveText(
		` Super Rentals Representatives would love to help you choose a destination or answer any questions you may have.
			`
	);
  await expect(page.getByTestId('about-us-button')).toHaveText('About Us');
  await page.getByTestId('about-us-button').click();
  await expect(page).toHaveURL('/about');
});

test('visitin /getting-in-touch', async ({ page }) => {
  await page.goto('/getting-in-touch');
  await expect(page).toHaveURL('/contact');
});
