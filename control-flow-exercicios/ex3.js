const prompt = require('prompt-sync')()

const idade = parseInt(prompt('Bota ai a sua idade (de 10 até 25)  '));

if (idade >= 10 && idade <= 14 ){ 
    console.log(`Vc vai pro grupo Infantil`);
}   else if (idade > 14 && idade < 18){
    console.log(`Vc vai pro grupo JUVENIL`);
}   else if (idade >= 18 && idade <= 25){ 
    console.log(`Vc vai pro grupo ADULTO`);
}   else{
    console.log(`Valor inválido `);
}