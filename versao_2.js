function iniciaJogo() {

     let confirmacao = confirm(" Boas vindas ao jogo de BlackJack! \n Quer iniciar uma nova rodada? \n (ok) - Para sim \n (cancelar) - Para não")
     let usuario1 = comprarCarta()
     let usuario2 = comprarCarta()
     let usuario3 = comprarCarta()
     let cpu1 = comprarCarta()
     let cpu2 = comprarCarta()
     let cpu3 = comprarCarta()
     let somaUsuario = usuario1.valor + usuario2.valor
     let somaCpu = cpu1.valor + cpu2.valor
     console.log(somaUsuario);
     console.log(somaCpu);
     let pergunta1 = ''
     let pergunta2 = ''
     let pergunta3 = ''
     let arrayCartasUsuario = []
     let arrayCartasCpu = []
     arrayCartasUsuario.push(usuario1.valor)
     arrayCartasUsuario.push(usuario2.valor)
     arrayCartasUsuario.push(usuario3.valor)
     arrayCartasCpu.push(cpu1.valor)
     arrayCartasCpu.push(cpu2.valor)
     arrayCartasCpu.push(cpu3.valor)
     //console.log(arrayCartasUsuario);
     //console.log(arrayCartasCpu);


     if (confirmacao) {
          pergunta1 = confirm(`Pergunta 1 -Suas cartas são ${usuario1.texto} e ${usuario2.texto}. \n A carta revelada do computador é ${cpu1.texto}."
      "Deseja comprar mais uma carta?`)
          if (pergunta1) {
               if ((somaUsuario <= 21) && (somaCpu <= 21)) {
                    //let pergunta2 = confirm(`Suas cartas são ${usuario1.texto} , ${usuario2.texto} e ${usuario3.texto}  A carta revelada do computador é ${cpu1.texto} e ${cpu2.texto} \n Deseja comprar mais uma carta?`)
                    pergunta2 = confirm(`Suas cartas são ${usuario1.texto} , ${usuario2.texto} e ${usuario3.texto}  A carta revelada do computador é ${cpu1.texto} e ${cpu2.texto} \n Deseja comprar mais uma carta?`)
                    somaUsuario += usuario3.valor
                    somaCpu += cpu3.valor
                    if (pergunta2) {
                         if ((somaUsuario <= 21) && (somaCpu <= 21)) {
                              //let pergunta2 = confirm(`Suas cartas são ${usuario1.texto} , ${usuario2.texto} e ${usuario3.texto}  A carta revelada do computador é ${cpu1.texto} e ${cpu2.texto} \n Deseja comprar mais uma carta?`)
                              pergunta3 = confirm(`Suas cartas são ${usuario1.texto} , ${usuario2.texto} e ${usuario3.texto}  A carta revelada do computador é ${cpu1.texto} e ${cpu2.texto} \n Deseja comprar mais uma carta?`)
                              somaUsuario += usuario3.valor
                              somaCpu += cpu3.valor
                         }
                         else {
                              if ((somaUsuario <= 21) || (somaCpu > 22)) {
                                   alert(`Usuario venceu`)
                              } else if ((somaUsuario > 22) || (somaCpu >= 21)) {
                                   alert(`Comutador venceu`)
                              }
                         }


                    } else {
                         if ((somaUsuario <= 21) || (somaCpu > 22)) {
                              alert(`Usuario venceu`)
                              console.log(arrayCartasUsuario);
                              console.log(arrayCartasCpu);
                         } else if ((somaUsuario > 22) || (somaCpu >= 21)) {
                              alert(`Comutador venceu`)
                              console.log(arrayCartasUsuario);
                              console.log(arrayCartasCpu);
                         }

                    }
               } else if ((somaUsuario < somaCpu) && (somaUsuario <= 21)) {
                    alert(alert('Vitória do usuário'))
                    console.log(arrayCartasUsuario);
                    console.log(arrayCartasCpu);
               } else if ((somaUsuario > somaCpu) && (somaCpu <= 21)) {
                    alert(alert('Vitória do computador'))
                    console.log(arrayCartasUsuario);
                    console.log(arrayCartasCpu);
               }
               else if (somaUsuario === somaCpu) {
                    alert(`EMPATE - suas cartas foram ${somaUsuario} e do computador ${somaCpu}. Reinicie o jogo`)
                    console.log(arrayCartasUsuario);
                    console.log(arrayCartasCpu);
               }

          }
          else if ((somaUsuario < somaCpu) && (somaUsuario <= 21)) {
               alert(alert('Vitória do usuário'))
               console.log(arrayCartasUsuario);
               console.log(arrayCartasCpu);
          } else if ((somaUsuario > somaCpu) && (somaCpu <= 21)) {
               alert(alert('Vitória do computador'))
               console.log(arrayCartasUsuario);
               console.log(arrayCartasCpu);
          }
          else if (somaUsuario === somaCpu) {
               alert(`EMPATE - suas cartas foram ${somaUsuario} e do computador ${somaCpu}. Reinicie o jogo`)
               console.log(arrayCartasUsuario);
               console.log(arrayCartasCpu);
          }
     } else if ((somaUsuario < somaCpu) && (somaUsuario <= 21)) {
          alert(alert('Vitória do usuário'))
          console.log(arrayCartasUsuario);
          console.log(arrayCartasCpu);
     } else if ((somaUsuario > somaCpu) && (somaCpu <= 21)) {
          alert(alert('Vitória do computador'))
          console.log(arrayCartasUsuario);
          console.log(arrayCartasCpu);
     }
     else if (somaUsuario === somaCpu) {
          alert(`EMPATE - suas cartas foram ${somaUsuario} e do computador ${somaCpu}. Reinicie o jogo`)
          console.log(arrayCartasUsuario);
          console.log(arrayCartasCpu);
     }

     else {
          alert('sair do jogo pergunta 1 da condicao')
     }

}


iniciaJogo()



