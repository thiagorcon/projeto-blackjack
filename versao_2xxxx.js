/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 */
    
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
function iniciaJogo() {
         
         let confirmacao = confirm(" Boas vindas ao jogo de BlackJack! \n Quer iniciar uma nova rodada? \n (ok) - Para sim \n (cancelar) - Para não")

         let usuario1 = comprarCarta()
         let usuario2 = comprarCarta()
         let cpu1 = comprarCarta()
         let cpu2 = comprarCarta()

if((usuario1.valor === 'A') && (usuario2.valor === 'A') && (cpu2.valor === 'A') && (cpu2.valor === 'A')){
            alert(`Os pontos do usuário : ${somaUsuario} e os pontos do computador ${somaCpu}. Vamos inciar novamente!`)
         } else if (somaUsuario > somaCpu) {
                     alert(`O usuario venceu com ${somaUsuario} pontos`);
                   } else if (somaUsuario < somaCpu) {
                        alert(`O computador venceu com ${somaCpu} pontos`);
                   } else {
                        alert(`EMPATE - O fez ${somaUsuario} pontos e o computador fez ${somaCpu}`)

      }
   }


    iniciaJogo()
   //       if (somaUsuario > somaCpu) {
   //            alert(`O usuario venceu com ${somaUsuario} pontos`);
   //       } else if (somaUsuario < somaCpu) {
   //            alert(`O computador venceu com ${somaCpu} pontos`);
   //       } else {
   //            alert(`EMPATE - O fez ${somaUsuario} pontos e o computador fez ${somaCpu}`);
   //       }
    
   //  } else if (confirmacao === false) {
   //       alert('O jogo acabou!')
   //  }