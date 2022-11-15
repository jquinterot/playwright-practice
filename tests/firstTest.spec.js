import { expect, test } from '@playwright/test';

test('First test case', async ({page}) => {
   // const context = browser.newContext();
    // const page  = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator('#username');
    const signInBtn =  page.locator('#signInBtn');
    const cardTittles = page.locator('.card-body a');

    console.log(await page.title())
    await page.locator('#username').type('johany');
    await page.locator('[type=password]').type('learning');
    await signInBtn.click();
    //Playwright will wait until it appears
    const blockText = await page.locator(`[style*='block']`).textContent();

    await expect(page.locator(`[style*='block']`)).toContainText('Incorrect username/password')
    await userName.fill('');
    await userName.fill('rahulshettyacademy');
    await signInBtn.click();

    console.log(cardTittles.first().textContent());
    console.log(cardTittles.nth(1).textContent());

    const allTittles = await cardTittles.allTextContents();
    console.log(allTittles);
});

test('Second test case', async ({page}) => {
    // const context = browser.newContext();
     // const page  = await context.newPage();
     await page.goto("https://google.com/");
     await page.title();
     console.log( await page.title())
     await expect( page).toHaveTitle('Google')
 });