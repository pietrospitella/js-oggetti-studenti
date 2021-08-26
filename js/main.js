// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.

let student0 = {
    nome : "Gianni",
    cognome : "Rossi",
    eta : 20 
};

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

let h1 = "";   
for (let key in student0) {
    h1 = h1 + student0[key] + "<br>";
};

document.getElementById("student_0").innerHTML = h1;


// Creare un array di oggetti di studenti.

let myClass = [
    
    {
        nome : "Luca",
        cognome : "Verdi",
        eta : 21    
    },
    {
        nome : "Mario",
        cognome : "Bianchi",
        eta : 24    
    },
    {
        nome : "Andrea",
        cognome : "Marini",
        eta : 22    
    }
];

  
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

for (let i = 0; i < myClass.length; i++) {
        let nominativi = myClass[i];
        console.log(nominativi.nome, nominativi.cognome);
}


// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

let promptedName = prompt("dammi il tuo nome");
let promptedSurname = prompt("dammi il tuo cognome");
let promptedAge = prompt("dammi la tua età");

newStudent = {
    nome : promptedName,
    cognome : promptedSurname,
    eta : promptedAge
};

myClass.push(newStudent);

console.log(newStudent.nome, newStudent.cognome);
