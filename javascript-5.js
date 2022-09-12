const ageString = prompt(`Digite a sua idade `);
const age = Number(ageString);

    document.write('<br>')
if(age >= 18) {
    document.write('Então você é adulto.')
    console.log(`Vc e adulto`)
}   else if(age > 12 ){
    document.write('Você é adolescente ')
    console.log(`Vc e adolescente`)
}   else {
    document.write(`vc eh criançaaa`)
    console.log(`Vc eh kid `)
}
