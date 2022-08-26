const ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');

const pai = ondeVoceEsta.parentElement;
pai.style.color = 'red';

const primeiroFilhoDoFilho = ondeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = 'filho do filho, neto ?';

const primeiroFilho = pai.firstElementChild;
// const primeiroFilho = ondeVoceEsta.previousElementSibling;

const atencao = ondeVoceEsta.nextSibling;

const terceiroFilho = ondeVoceEsta.nextElementSibling;
// const terceiroFilho = pai.lastElementChild.previousElementSibling;

const irmaoOndeVoceEsta = document.createElement('p');
irmaoOndeVoceEsta.id = 'irmaoOndeVoceEsta';
pai.appendChild(irmaoOndeVoceEsta);

const filhoOndeVoceEsta = document.createElement('p');
filhoOndeVoceEsta.id = 'filhoOndeVoceEsta';
ondeVoceEsta.appendChild(filhoOndeVoceEsta);

const filhoPrimeiroFilhoDoFilho = document.createElement('p');
filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);




