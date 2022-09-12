const prompt = require('prompt-sync')()

const num1 = parseInt(prompt('Bota ai o primeiro numero'))
const num2 = parseInt(prompt('Bota ai o segundo numero'))
const num3 = parseInt(prompt('Bota ai o terceiro numero'))

if (num1 > num2 && num2 > num3){ //1,2,3
    console.log(`A sequencia de números(Do maior para o menor) é : ${num1},${num2} e ${num3}`)
}   else if (num2 > num1 && num1 > num3){ //2 , 1 , 3
    console.log(`A sequencia de números(Do maior para o menor) é : ${num2},${num1} e ${num3}`)
}   else if (num3> num1 && num1 > num2){ //3 , 1, 2 
    console.log(`A sequencia de números(Do maior para o menor) é : ${num3},${num1} e ${num2}`)
}   else if (num1> num3 && num3 > num2){ // 1, 3, 2
    console.log(`A sequencia de números(Do maior para o menor) é : ${num1},${num3} e ${num2}`)
}   else if (num2> num3 && num3 > num1){ //2 ,3 ,1 
    console.log(`A sequencia de números(Do maior para o menor) é : ${num2},${num3} e ${num1}`)
}   else if (num3> num2 && num2 > num1){ // 3 , 2, 1
    console.log(`A sequencia de números(Do maior para o menor) é : ${num3},${num2} e ${num1}`)
}