import {test,expect} from "@playwright/test"

test ("datepickers",async({page})=>{

await page.goto ("https://testautomationpractice.blogspot.com/")


const date ="1"
const month ="Jul"
const year ="2025"
await page.locator("#txtDate").click()

while (true)
{
   const currentmonth = page.locator(".ui-datepicker-month").textContent()
   const currentyear = page.locator(".ui-datepicker-year").textContent()

   if(currentmonth == month && currentyear == year)

    {
       break;
    }
  await page.locator ('[title="Prev"]').click()
  }

  const dt= await page.$$("//a[@class='ui-state-default']")

  for (const dt of date )
{

   if (await dt.textContent==date)

    {
       await dt.click()
       break;
    }
    
}

await page.waitForTimeout(3000)

})