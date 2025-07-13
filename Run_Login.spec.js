const {test,expect} = require('@playwright/test')

test ('hopePage',async({page})=>{

    await page.goto ('https://demoblaze.com/index.html');

    
    const pagetitle = await page.title();
    console.log (pagetitle);
    await expect(page).toHaveTitle('STORE');

    const pageurl = page.url();
    console.log (pageurl);
    await expect(page).toHaveURL('https://demoblaze.com/index.html')

    page.close();

});