function iniciaJogo() {

     let confirmacao = confirm(" Boas vindas ao jogo de BlackJack! \n Quer iniciar uma nova rodada? \n (ok) - Para sim \n (cancelar) - Para não")

     if (confirmacao == true) {
          let usuario1 = comprarCarta()
     let usuario2 = comprarCarta()
     let cpu1 = comprarCarta()
     let cpu2 = comprarCarta()
     let somaUsuario = usuario1.valor + usuario2.valor
     let somaCpu = cpu1.valor + cpu2.valor
     let pergunta1 = confirm(`Suas cartas são ${usuario1.texto} e ${usuario2.texto} A carta revelada do computador é ${cpu1.texto}."
     "Deseja comprar mais uma carta?`)
     let arrayCartasUsuario = []
          let arrayCartasCpu = []
          arrayCartasUsuario.push(usuario1.valor) 
          arrayCartasUsuario.push(usuario2.valor) 
          arrayCartasCpu.push(cpu1.valor) 
          arrayCartasCpu.push(cpu2.valor) 
          //console.log(arrayCartasUsuario);
          //console.log(arrayCartasCpu);
     if (pergunta1) {
          let usuario3 = comprarCarta()
          let cpu3 = comprarCarta()
          somaUsuario = usuario1.valor + usuario2.valor + usuario3.valor
          somaCpu = cpu1.valor + cpu2.valor + cpu3.valor
          arrayCartasUsuario.push(usuario3.valor) 
          arrayCartasCpu.push(cpu3.valor)
          console.log(arrayCartasUsuario);
          console.log(arrayCartasCpu);          
     }
     } else {
          alert('O jogo acabou!')
     }

     
     
     // if ((usuario1.valor === 'A') && (usuario2.valor === 'A') && (cpu2.valor === 'A') && (cpu2.valor === 'A')) {
     // alert(`Os pontos do usuário : ${somaUsuario} e os pontos do computador ${somaCpu}. Vamos inciar novamente!`)
     // } else if (somaUsuario > somaCpu) {
     // alert(`O usuario venceu com ${somaUsuario} pontos`);
     // } else if (somaUsuario < somaCpu) {
     // alert(`O computador venceu com ${somaCpu} pontos`);
     // } else {
     // alert(`EMPATE - O fez ${somaUsuario} pontos e o computador fez ${somaCpu}`)
     // }  
                
} 


iniciaJogo()

/*if (confirmacao === true) {
         alert('Oba, vamos jogar!')
    
         let usuario1 = comprarCarta()
         let usuario2 = comprarCarta()
         let cpu1 = comprarCarta()
         let cpu2 = comprarCarta()
        
         let somaUsuario = usuario1.valor + usuario2.valor
         let somaCpu = cpu1.valor + cpu2.valor
         alert(`usuário cartas : ${usuario1.texto} ${usuario1.valor} e ${usuario2.texto} ${usuario2.valor} = ${somaUsuario}`);
         alert(`computador cartas : ${cpu1.texto} ${cpu1.valor} e ${cpu2.texto} ${cpu2.valor} = ${somaCpu}`);
*/

//       if (somaUsuario > somaCpu) {
   //            alert(`O usuario venceu com ${somaUsuario} pontos`);
   //       } else if (somaUsuario < somaCpu) {
   //            alert(`O computador venceu com ${somaCpu} pontos`);
   //       } else {
   //            alert(`EMPATE - O fez ${somaUsuario} pontos e o computador fez ${somaCpu}`);
   //       }
    
   