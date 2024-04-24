//declaration + affectation
let renom = 'gael';

let age = 37;

let enligne = true;

let choix = null;

console.log(typeof prenom);
console.log(typeof age);
console.log(typeof enligne);
console.log(typeof choix);

//concatenation
console.log(renom +''+age+ 'ans');
console.log(`je m'appelle ${prenom},j'ai ${age} ans`);

//Echapper un carratere antisiash
console.log(`il fait "beau aujourd\'hui"`);

//Declaration et affectation d'une constante
const willw = 'Rouen'; 

//Arrey
let tab = [`pommes`, 30, true,['bleu','rouge'],prenom];
//Grandeur du tableau
console.log(tab.length);
//Index 1
console.log(tab[1]);
//mot rouge
console.log(tab[3][1]);

//object 
let personne = {
    prenom: 'Gael',
    age: 37,
    adress: {
        rue: '12 rue de la Mare',
        ville: 'Rouen'
    }
};

console.log(personne.prenom);
console.log(personne['prenom']);
console.log(personne.adress.rue);

let a = 5;
let b =2;

//Addition 
console.log( a + b);
//Soustraction
console.log(a - b);
//Muliplication
console.log(a * b);
//division 
console.log(a / b);
//Modulo
console.log(a % b);

//Incrementer
a = a + 1; //a++ equivaut à : a = a +1
console.log

//Decrementer 
b -= 1; //b--equivaut à : b = b -1  
console.log(b);



