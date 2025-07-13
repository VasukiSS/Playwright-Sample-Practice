import{test,expect} from "@playwright/test"

test('radiobutton',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')


    //await page.locator('#country').selectOption({label:'India'})
    //await page.locator("#country").selectoption('India');
     //await page.locator('#country').selectOption({value: 'india'});
     //await page.selectOption("#country",'India');
     //await page.locator("#country").selectOption({index: 1});
    
    //const options = await page.locator('#country option')
    //await expect(options).toHaveCount(10)

   //const options = await page.$$("#country option")
   //await expect(options.length).toBe(10);
   //console.log('count of option :', options.length);

  //const presence = await page.locator("#country").textContent()
  //await expect(presence.includes('France')).toBeTruthy()

  /*const optionpresence = await page.$$("#country option")
  let status = false
  for (const optionvalue of optionpresence)
  {

     let value=await optionvalue.textContent();
     if (value.includes("France"))
     {
       let status = true;   
       break;
     }
  }*/

 const countryopt = await page.$$("#country option")

 for ( const countrysel of countryopt)
 {

  let value = await countrysel.textContent();
 if (value.includes("United Kingdom"))

  {
    await page.locator("#country").click()
    await page.selectOption("#country",{value});
    break;

  }

}
})

    


