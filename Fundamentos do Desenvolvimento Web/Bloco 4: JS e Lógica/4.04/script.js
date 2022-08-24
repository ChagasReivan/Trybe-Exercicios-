// let player = {
//     name: 'Larissa',
//     ultimoNome: 'Silva',
//     idade: 34,
//     bestInTheWorld:[2006, 2007, 2008, 2009, 2010, 2018],
//     medalhas:{
//         golden: 2,
//         silver: 3,
//     }
    
//     }


// console.log('A jogadora ' + player.name + ' ' + player.ultimoNome + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes ')

// console.log('A jogadora ' + player.name + ' ' + player.ultimoNome + ' possui ' + player.medalhas.golden + ' medalhas de ouro ' + ' e ' + player.medalhas.silver + ' medalhas de prata ')

// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };

//   for (let pessoas in names){
//     console.log(' Ola ' + names[pessoas]);
//   }

// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };

// for( produto in car ){
//     console.log(produto, car[produto])
// }

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'Sim',
// };

// let info2 ={
//     personagem: 'Tio Patinhas',
//     origem:'Dells four color comics #178',
//     nota:'O ulitmo MacPatinhas',
//     recorrente: 'Sim',
// };

// for(let propriedades in info){
//    if( propriedades === 'recorrente' && info[propriedades] === 'Sim' &&  info2[propriedades] === 'Sim'){
//     console.log('Ambos recorrentes')
//    } else {
//     console.log(info[propriedades] + ' e ' + info2[propriedades]) 
//    }
// }

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,

    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
     
};


 

  console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo )

  leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editor: 'Rocco',
  })


  
   

   
  