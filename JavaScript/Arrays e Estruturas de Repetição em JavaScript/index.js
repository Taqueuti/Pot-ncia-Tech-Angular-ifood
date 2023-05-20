// percorer uma lista de números e imprima cada número par encontrado

const numeros = [20, 60, 12, 11, 5, 6, 7, 6];


for (let i = 0; i < numeros.length; i++ ){
    const numero = numeros[i];

    if(numero % 2 === 0){
        console.log("Par:",numero);
  
    }
}