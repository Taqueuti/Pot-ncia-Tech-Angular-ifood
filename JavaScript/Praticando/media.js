const nota1 = 8;
const nota2 = 5;
const nota3 = 6;

var media = (nota1 + nota2 + nota3) / 3;
console.log('Sua média foi ' + media.toFixed(1)  );

if(media < 5){
    
    console.log('Você está reprovado!!');
}else if (media <= 7 && media >= 5){
    
    console.log('Você está de recuperação!!');
}else{
    
    console.log('Você esta aprovado!!');
}