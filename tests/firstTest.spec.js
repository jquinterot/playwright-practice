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

    //This assures that the page load after a redirection
    await Promise.all(
        [
            page.waitForNavigation(),
            signInBtn.click()
        ]
    )

    //This will work too because is using playwright api  and awits automatically different to allTextContents
    //console.log(await cardTittles.first().textContent());
    //console.log(await cardTittles.nth(1).textContent());

    //AllTextContents wont wait until element appears, you need before a textContent alone

    //doesnt work on win
    //await page.waitForLoadState('networkidle');
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