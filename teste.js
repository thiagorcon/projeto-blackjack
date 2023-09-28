function iniciaJogo() {

     let confirmacao = confirm(" Boas vindas ao jogo de BlackJack! \n Quer iniciar uma nova rodada? \n (ok) - Para sim \n (cancelar) - Para não")

     if (confirmacao) {

          if (((usuario1.valor === 'A') && (usuario2.valor === 'A')) || ((cpu2.valor === 'A') && (cpu2.valor === 'A'))) {
               alert(`Os pontos do usuário : ${somaUsuario} e os pontos do computador ${somaCpu}. Vamos inciar novamente!`)
          } else {
               let usuario1 = comprarCarta()
               let usuario2 = comprarCarta()
               let cpu1 = comprarCarta()
               let cpu2 = comprarCarta()
               let somaUsuario = usuario1.valor + usuario2.valor
               let somaCpu = cpu1.valor + cpu2.valor
               console.log(somaUsuario);
               console.log(somaCpu);
               if ((somaUsuario <= 21) && (somaCpu <= 21)) {
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
               }
               if (pergunta1) {
                    let usuario3 = comprarCarta()
                    let cpu3 = comprarCarta()
                    somaUsuario = usuario1.valor + usuario2.valor + usuario3.valor
                    somaCpu = cpu1.valor + cpu2.valor + cpu3.valor
                    arrayCartasUsuario.push(usuario3.valor)
                    arrayCartasCpu.push(cpu3.valor)
                    console.log(arrayCartasUsuario);
                    console.log(arrayCartasCpu);
                    if ((somaUsuario <= 21) && (somaCpu <= 21)) {
                         let pergunta2 = confirm(`Suas cartas são ${usuario1.texto} , ${usuario2.texto} e ${usuario3.texto}  A carta revelada do computador é ${cpu1.texto} e ${cpu2.texto} ."
               "Deseja comprar mais uma carta?`)
                         if (pergunta2) {
                              arrayCartasUsuario = []
                              arrayCartasCpu = []
                              let usuario4 = comprarCarta()
                              let cpu4 = comprarCarta()
                              arrayCartasUsuario.push(usuario4.valor)
                              arrayCartasCpu.push(cpu4.valor)
                              //console.log(arrayCartasUsuario);
                              //console.log(arrayCartasCpu);
                              if (somaUsuario <= 21) {
                                   alert(`Parabéns o usuário venceu com ${somaUsuario}pontos.`)
                              } else { alert(`O computador venceu com ${somaCpu}pontos.`) }

                         }

                    }
               } else { alert('O jogo acabou!') }


          }}}


          iniciaJogo()