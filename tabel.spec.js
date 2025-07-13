import{ test,expect} from "@playwright/test"

test("pagination", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    const table= await page.locator("#productTable")

   const columns = await table.locator ("thead tr th")
   console.log ("no of columns:", await columns.count())
   
    const rows= await table.locator ("tbody tr")
    console.log ("no of row:", await rows.count())

    const pageloc = await page.locator(".pagination li a")
    console.log (await pageloc.count())

    for (let p=0; p<await pageloc.count();p++)
    {
        if (p>0)
        {
            await pageloc.nth(p).click()
        }

    for (let r=0 ;r<await rows.count(); r++)
    {
        const rowvalue= rows.nth(r);
        const rvalue = rowvalue.locator("td")
        
      
        for (let c=0;c<await rvalue.count()-1;c++)
        {
          console.log( await rvalue.nth(c).textContent())
            
        }

    }
   await page.waitForTimeout(3000);
    }
})

async function ProductNames(rows, page, name)

{
    const product = rows.filter ({
    has:page.locator("td"),
    hasText: name
    })
   await product.locator("input").check()
 
}