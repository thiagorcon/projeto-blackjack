/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log('Boas vindas ao jogo de BlackJack!')
let confirmacao = confirm("Quer iniciar uma nova rodada? \n (ok) - Para sim \n (cancelar) - Para não")

if (confirmacao === true) {
     alert('Oba, vamos jogar, abra o console!')

     let usuario1 = comprarCarta()
     let usuario2 = comprarCarta()
     let cpu1 = comprarCarta()
     let cpu2 = comprarCarta()


     //console.log(`${usuario1.valor} e ${usuario1.texto}`);
     //console.log(`${usuario2.valor} e ${usuario2.texto}`);
     //console.log(`${usuario2.valor} e ${usuario2.texto}`);
     //console.log(`${cpu1.valor} e ${cpu1.texto}`);
     //console.log(`${cpu2.valor} e ${cpu2.texto}`);

     let somaUsuario = usuario1.valor + usuario2.valor
     let somaCpu = cpu1.valor + cpu2.valor
     console.log(`usuário cartas : ${usuario1.valor} ${usuario1.texto} e ${usuario2.valor} ${usuario2.texto} = ${somaUsuario}`);
     console.log(`computador cartas : ${cpu1.valor} ${cpu1.texto} e ${cpu2.valor} ${cpu2.texto} = ${somaCpu}`);

     if (somaUsuario > somaCpu) {
          console.log(`O usuario venceu com ${somaUsuario} pontos`);
     } else if (somaUsuario < somaCpu) {
          console.log(`O computador venceu com ${somaCpu} pontos`);
     } else {
          console.log(`EMPATE - O fez ${somaUsuario} pontos e o computador fez ${somaCpu}`);
     }

} else if (confirmacao === false) {
     console.log('O jogo acabou!')
}