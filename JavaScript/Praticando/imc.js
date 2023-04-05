const altura = 1.79;
const peso = 85;

var imc = peso / (altura * altura);
console.log('Seu imc está ' + imc.toFixed(1));

if(imc < 18.5){
    console.log('Você está abaixo do peso');
}else if(imc >= 18.5 && imc <= 25){
    console;log('Peso normal');
}else if(imc >= 25 && imc <= 30){
    console.log('Você está acima do peso');
}else if (imc >= 30 && imc <= 40){
    console.log('Você está obeso');
}else{
    console.log('Você com obesidade Grave');
}