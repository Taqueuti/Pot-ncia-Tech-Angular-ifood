


        /* Boolean */
 /* const camisetaAzul = true;
  const camisetaVermelha = false;*/

  
 
 
 
  
  var readlineSync = require('readline-sync');
  const precoGasolina = 6.10
  const precoEtanol = 5.79;

  const kmPorLitros = 12;
  const distanciaEmKm = 1580;
  const litrosConsumidos = distanciaEmKm / kmPorLitros;
   /* Pergunto do combustivel */
   
   var tipoDeCombustivel = readlineSync.question('Etanol ou Gasolina ? ');
    

   if(tipoDeCombustivel === 'Etanol'){
     
    console.log('Você escolheu '  + tipoDeCombustivel + ' !')   
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));

   }else{
    
    console.log('Você escolheu  '  + tipoDeCombustivel  + ' !')
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));

   }

  
  