function iniciaJogo() {

     let confirmacao = confirm(" Boas vindas ao jogo de BlackJack! \n Quer iniciar uma nova rodada? \n (ok) - Para sim \n (cancelar) - Para não")

     if (confirmacao) {
          let usuario1 = comprarCarta()
          let usuario2 = comprarCarta()
          let usuario3 = comprarCarta()
          let usuario4 = comprarCarta()
          let cpu1 = comprarCarta()
          let cpu2 = comprarCarta()
          let cpu3 = comprarCarta()
          let cpu4 = comprarCarta()
          let arrayCartasUsuario = []
          let arrayCartasCpu = []
          let somaUsuario = usuario1.valor + usuario2.valor
          let somaCpu = cpu1.valor + cpu2.valor
          let pergunta1 = confirm(`Suas cartas são ${usuario1.texto} e ${usuario2.texto}. \n A carta revelada do computador é ${cpu1.texto} \n "Deseja comprar mais uma carta?`)
          let pergunta2 = confirm(`Suas cartas são ${usuario1.texto} , ${usuario2.texto} e ${usuario3.texto}  A carta revelada do computador é ${cpu1.texto} e ${cpu2.texto} \n Deseja comprar mais uma carta?`)
          let vitoriaUsuario = alert('Vitória do usuário')
          let vitoriaCpu = alert('Vitória do computador')

          while (somaUsuario < 22 && somaUsuario < 22) {
               if (((usuario1.valor === 11) && (usuario2.valor === 11)) || ((cpu2.valor === 11) && (cpu2.valor === 11))) {
                    let novoJogo = confirm(`Os pontos do usuário : ${somaUsuario} e os pontos do computador ${somaCpu}. Vamos inciar novamente!`)

               } else {
                    if (somaUsuario <= 21) { alert(`vitória do usuário na primeira roadada`) }
                    else if (somaCpu <= 21) { alert(`vitória do computador na primeira roadada`) }
                    else pergunta1

                    if (pergunta1) {
                         usuario3
                         cpu3
                         somaUsuario = usuario1.valor + usuario2.valor + usuario3.valor
                         somaCpu = cpu1.valor + cpu2.valor + cpu3.valor
                         arrayCartasUsuario.push(usuario3.valor)
                         arrayCartasCpu.push(cpu3.valor)
                         // alert(`Os pontos do usuário : ${somaUsuario} e os pontos do computador ${somaCpu}. Vamos inciar novamente!`)
                         pergunta2
                         console.log(arrayCartasUsuario);
                         console.log(arrayCartasCpu);
                         if (pergunta2 === true && somaUsuario <= 21 && somaCpu <= 21) {
                              usuario4
                              cpu4
                              somaUsuario = usuario1.valor + usuario2.valor + usuario3.valor + usuario4.valor
                              somaCpu = cpu1.valor + cpu2.valor + cpu3.valor + cpu4.valor
                              arrayCartasUsuario.push(usuario4.valor)
                              arrayCartasCpu.push(cpu4.valor)
                              // alert(`Os pontos do usuário : ${somaUsuario} e os pontos do computador ${somaCpu}. Vamos inciar novamente!`)
                              console.log(arrayCartasUsuario);
                              console.log(arrayCartasCpu);


                         } else {
                              alert('acabou jono na pergunta 2 prosseguir?')
                         }
                    } else {
                         alert('acabou jono na pergunta 1 prosseguir?')


                    }
               }
          }
     } else { alert('O jogo acabou!') }
}


// } else if (novoJogo == true) {

// }
// //console.log(`Os pontos do usuário são ${somaUsuario} e do computador são ${somaCpu}`);
// confirm(`Os pontos do usuário : ${somaUsuario} e os pontos do computador ${somaCpu}. Vamos inciar novamente!`)
// console.log(somaUsuario);
// console.log(somaCpu);
// }

// if ((somaUsuario <= 21) && (somaCpu > 21)) {
//      vitoriaUsuario
// } else if ((somaUsuario > 21) && (somaCpu <= 21)) {
//      vitoriaCpu
// } else if (pergunta2)
//      if (pergunta2) {
//           usuario4
//           cpu4
//           somaUsuario = usuario1.valor + usuario2.valor + usuario3.valor + usuario4.valor
//           somaCpu = cpu1.valor + cpu2.valor + cpu3.valor + cpu4.valor
//           arrayCartasUsuario.push(usuario4.valor)
//           arrayCartasCpu.push(cpu4.valor)
//           console.log(arrayCartasUsuario);
//           console.log(arrayCartasCpu);
//      } else {
//           if (somaUsuario <= 21) {
//                vitoriaUsuario
//           } else {
//                vitoriaCpu
//           }
//           // console.log(`Os pontos do usuário são ${somaUsuario} e do computador são ${somaCpu}`);
//           //console.log(somaUsuario);
//           //console.log(somaCpu);
//      }
// }



//      //                          } else { alert(`O computador venceu com ${somaCpu}pontos.`) }
// }
//      } 

// }







iniciaJogo()
// 
// } else if (somaUsuario > somaCpu) {
// alert(`O usuario venceu com ${somaUsuario} pontos`);
// } else if (somaUsuario < somaCpu) {
// alert(`O computador venceu com ${somaCpu} pontos`);
// } else {
// alert(`EMPATE - O fez ${somaUsuario} pontos e o computador fez ${somaCpu}`)
// }






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

//if (pergunta1) {

//      if ((somaUsuario <= 21) && (somaCpu <= 21)) {

//           "Deseja comprar mais uma carta?`)
//           if (pergunta2) {
//                arrayCartasUsuario = []
//                arrayCartasCpu = []
//                let usuario4 = comprarCarta()
//                let cpu4 = comprarCarta()
//                arrayCartasUsuario.push(usuario4.valor)
//                arrayCartasCpu.push(cpu4.valor)
//                //console.log(arrayCartasUsuario);
//                //console.log(arrayCartasCpu);
//                if (somaUsuario <= 21) {
//                     alert(`Parabéns o usuário venceu com ${somaUsuario}pontos.`)


