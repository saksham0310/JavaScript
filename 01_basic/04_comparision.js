// console.log(2>1)
console.log("2">1); //true but not to use

console.log(null>0);
console.log(null==0);
console.log(null>=0); // here the js convert null to 0 because there is little differnce btw < && = optors
// in undefind it always show false;

// === is strict change also check datatype

//**************  summmary    *************** */


// 1) primitive data types:-
// it always call by values , we use the copy of this not there orginal values.
// 7 types : String, Nummber , Booleran, null, undefined , Symbole (use to make vaules unqiue) ,BigInt ( use in big values).

const id=Symbol('123')
const anothore_id=Symbol('123') 
console.log(id===anothore_id); // not same

const bigNumber=216675631313n;

// 2) Reference (Non primitive) :-
// in this the refrence are allocated 
// Arrays, Objects, Functions 
// funation objet 
// Is javaScript is key type static lanuage or dynamic language

///++++++++++++++++++++++++++++++++++++++

// Stack ( primitive ), Heap (Non-primitive)
