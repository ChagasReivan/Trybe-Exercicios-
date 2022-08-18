const nota = 90;
let resultado ;

if(nota >= 80){
    resultado = 'Parabéns pela aprovação';
}
else if(nota < 80 && nota >= 60){
    resultado = 'Lista de Espera';
}
else {
    resultado = 'Reprovado';
}

console.log(resultado)