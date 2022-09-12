const prompt = require('prompt-sync')()

const num1 = parseInt(prompt('Bota ai o numero  '))

if (num1 %  2 == 0) {
    const num1Var = Math.sqrt(num1)
    console.log(`O número ${num1} é par e a raiz quadrada é ${num1Var}`)
}   else {
    const num1Pow = Math.pow(num1,2)
    console.log(`O número ${num1} é impar e a potencia ao quadrado é ${num1Pow}`)
}