const puppeteer = require('puppeteer');
const readlinesync = require('readline-sync')


console.log("jesus te ama muito");

async function tiposRobos() {
    const navegador = await puppeteer.launch({ headless: true });
    const paginaWeb = await navegador.newPage();
    const moedaBase = readlinesync.question("digite a moeda base: ")  || 'dolar';
    const moedafinal =  readlinesync.question("digite a moeda base: ")  || 'real';
    const UrlGoogle = `https://www.google.com/search?q=${moedaBase}+para+${moedafinal}&oq=${moedaBase}++para+${moedafinal}&gs_lcrp=EgZjaHJvbWUqCggBEAAYsQMYgAQyBggAEEUYOTIKCAEQABixAxiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDQ3NjFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8`;

    console.log(UrlGoogle);

    await paginaWeb.goto(UrlGoogle);
    
    // Aguardar 2 segundos após o carregamento da página
    await paginaWeb.waitForTimeout(2000);
    
    const resultado = await paginaWeb.evaluate(() => {
        // Utilize o querySelector para obter o valor do elemento desejado
        const valor = document.querySelector('.lWzCpb.a61j6').value;
        return valor;
    });

    console.log(`O valor de ${moedaBase} em ${moedafinal} é de ${resultado}`);
    await paginaWeb.screenshot({ path: 'foto001.png' });
    await navegador.close();
}

tiposRobos();
