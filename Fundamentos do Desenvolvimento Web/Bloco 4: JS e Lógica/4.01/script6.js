// let a = 15;
// let b = 15;

// // console.log(a+b);
// // console.log(a-b);
// // console.log(a*b);
// // console.log(a/b);
// // console.log(a%b);

// const a = 20
// const b = 5
// const c = 33

// if (a>b){
//     console.log(a)
// }
// else{
//     console.log(b)

// if (a>(b,c)){
//     console.log(a)
// }
// else if (b>(a,c)){
//     console.log(b)
// }
// else {
//     console.log(c)
// }

// const a = -20

// if (a<0){
//     console.log('negative')
// }
// else if (a>0){
//     console.log('positive')
// }
// else if (a=0){
//     console.log('zero')
// }

// let a =80;
// let b =70;
// let c =20;

// if ((a+b+c)==180){
//     console.log('true')
// }
// else if (a<0 || b<0 || c<0){
//     console.log('ta doido mermao?')
// }
// else if((a+b+c)!==180){
//     console.log('false')
// }

// const peça = 'eu'

// switch (peça) {
//     case 'peão':
//         console.log('Peão--> 2 casas no primeiro movimento, após, 1 casa por movimento')
//         break;
//     case 'rainha':
//         console.log('Rainha--> qualquer direção e qualquer número de casas')
//         break;
//     case 'rei':
//         console.log('Rei--> qualquer direção e apenas uma casa ')
//         break;
//     case 'cavalo':
//         console.log('Cavalo --> movimento em forma de "L"')
//         break;
//     case 'bispo':
//         console.log('Bispo --> diagonais, qualquer número de casas')
//         break;
//     case 'torre':
//         console.log('Torre --> para frente e para trás, qualquer número de casas')
//         break;
//     default:
//         console.log('Erro,peça não existe')
//         break;
// }

// const nota = 100
// let resultado;


// if (nota >= 90){
//     resultado = 'A';
// }
// else if(nota >=80){
//     resultado = 'B';
// }
// else if(nota >=70){
//     resultado = 'C';
// }
// else if(nota >=60){
//     resultado = 'D';
// }
// else if(nota >=50){
//     resultado = 'E';
// }
// else if(nota <50){
//     resultado = 'F';
// }

// console.log(resultado)

// const a = 32
// const b = 50
// const c = 23

// if (a % 2 !== 0 || b % 2 !== 0 || c %2 !== 0){
//     console.log(true);
// }
// else {
//     console.log(false)
// }

// const custo = -10;
// const valor = 500;
// let custoTotal = custo * 1.2;
// let lucro = valor - custoTotal;

// if (valor >= 0 && custo >=0){
//     let lucroDeMilUnd = ((lucro) * 1000);
//     console.log(lucroDeMilUnd);
// }
// else{
//     console.log('Erro, valores negativos não são aceitos');
// }

let inss;
let ir;

const salarioBruto = 5000;
console.log('Salário Bruto:' + salarioBruto)

if(salarioBruto <=1556.94){
    inss = salarioBruto * 0.08;
    console.log('inss:'+ inss);
} else if (salarioBruto >1556.95 && salarioBruto <=2594.92){
    inss = salarioBruto * 0.09;
    console.log('inss:'+ inss);
} else if (salarioBruto >2594.93 && salarioBruto <=5189.82){
   inss = salarioBruto * 0.11;
    console.log('inss:'+ inss);
}else if (salarioBruto >5189.83 ){
    inss = salarioBruto - 570.88;
    console.log('inss:'+ inss);
}
 const salarioBase = salarioBruto - inss;
 console.log('Salário base:'+ salarioBase);

 if (salarioBase <= 1903.98){
    ir = 0;
    console.log('ir:'+ ir);
 } else if (salarioBase <=2826.65){
    ir = (salarioBase * 0.075) - 142.80;
    console.log('ir:'+ ir);
 } else if (salarioBase <= 3751.05){
    ir = (salarioBase * 0.15) - 354.80;
    console.log('ir:'+ ir);
} else if (salarioBase <=4664.68 ){
    ir = (salarioBase * 0.225) - 636.13;
    console.log('ir:'+ ir);
}else {
    ir = (salarioBase * 0.275) - 869.36;
    console.log('ir:'+ ir)
};

console.log('Salário Líquido:' + (salarioBase - ir));


    

























 













