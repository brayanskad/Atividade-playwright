const { test, expect } = require('@playwright/test');

test.use({ launchOptions: { slowMo: 3000 } });

test('Deve fazer login no github', async ({ page }) => {
 
  const urlLogin = 'https://github.com/login';
 
  console.log(' Iniciando a navegação (em câmera lenta)...');
  await page.goto(urlLogin);

  const inputEmail = page.locator('input[name="login"], #login_field');
  const inputSenha = page.locator('input[name="password"], #password');
 
  console.log(' Inserindo e-mail e senha...');
  await inputEmail.fill('brayanskad');
  await inputSenha.fill('Narg1l3bb2!');

  const botaoLogin = page.locator('input[type="submit"], input[value="Sign in"]');
  console.log(' Clicando no botão de login...');
  await botaoLogin.click();
  
  console.log(' Pausa');
  await page.waitForTimeout(2000);

  await page.screenshot({ path: 'github_menu.png', fullPage: true });
  console.log(' Screenshot do site salvo!');
});