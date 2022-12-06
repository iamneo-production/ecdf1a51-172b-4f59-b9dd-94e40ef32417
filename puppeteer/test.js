const puppeteer = require('puppeteer');

(async () => {

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try {
    await page.goto('https://8081-aceefbccfdfadfaadaceabcddfdacbfedfac.examlyiopb.examly.io');
  await page.setViewport({
    width:1200,
    height:800,
  })
  await page.click('[data-testid="logout"]');
  await page.click('[data-testid="signup"]');
  await page.type('[data-testid="email"]', 'test@gmail.com');
  await page.type('[data-testid="username"]', 'test');
  await page.type('[data-testid="mobileNumber"]', '9999999999');
  await page.type('[data-testid="role"]', 'USER');
  await page.type('[data-testid="password"]', 'test');
  await page.type('[data-testid="confirmpassword"]', 'test');
  await page.click('[data-testid="signup"]');
  await page.waitForSelector('[data-testid="navigation"]',{timeout:1500});
  // await page.waitForSelector('[data-testid="navigation"]',{timeout:1500});
  console.log('TESTCASE:test_case6:success');
  } catch(e) {
    console.log('TESTCASE:test_case6:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-aceefbccfdfadfaadaceabcddfdacbfedfac.examlyiopb.examly.io');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.click('[data-testid="logout"]');
    await page.type('[data-testid="email"]', 'test@gmail.com');
    await page.type('[data-testid="password"]', '123');

    await page.click('[data-testid="login"]');
    //await page.screenshot({path: 'example.png'});
      await page.waitForSelector('[data-testid="navigation"]',{timeout:1500});
      console.log('TESTCASE:test_case7:success');
    }
     catch(e){
      console.log('TESTCASE:test_case7:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
  })();