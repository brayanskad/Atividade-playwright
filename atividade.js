const { test, expect } = require('@playwright/test');

test.use({ launchOptions: { slowMo: 3000 } });

test('Deve fazer login no github', async ({ page }) => {
 
  const urlLogin = 'https://github.com/login';
 
  console.log(' Iniciando a navegação (em câmera lenta)...');
  await page.goto(urlLogin);

  const inputEmail = page.locator('input[type="text"], input[name="username"], #username');
  const inputSenha = page.locator('input[type="password"], input[name="password"], #password');
 
  console.log(' Inserindo e-mail e senha...');
  await inputEmail.fill('brayanskad');
  await inputSenha.fill('Narg1l3bb2!');

  const botaoLogin = page.locator('input[type="submit"],  button[type="submit"], button[name="commit"]');
  console.log(' Clicando no botão de login...');
  await botaoLogin.click();

  const barraPesquisa = page.locator('input[type="search"], input[name="q"], #search');
 
  console.log(' Buscando pela seção " Todos os repositorios"...');
  await barraPesquisa.fill('repositorios');
  await barraPesquisa.press('Enter');

  console.log(' Pausa final para o aluno admirar a tela...');
  await page.waitForTimeout(5000);

  await page.screenshot({ path: 'resultado_busca_livro.png', fullPage: true });
  console.log(' Screenshot da busca salvo!');
});