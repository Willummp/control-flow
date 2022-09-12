const prompt = require('prompt-sync')()

const num1 = parseInt(prompt('Bota ai o primeiro numero'))
const num2 = parseInt(prompt('Bota ai o segundo numero'))
const num3 = parseInt(prompt('Bota ai o terceiro numero'))

if (num1 > num2 && num1 > num3){ 
    console.log (`A sequencia de números(Do maior para o menor) é : ${num1}`)
}   else if (num2 > num1 && num2 > num3){ 
    console.log (`A sequencia de números(Do maior para o menor) é : ${num2}`)
}   else if (num3> num1 && num3 > num2){
    console.log(`A sequencia de números(Do maior para o menor) é : ${num3}`)
} 