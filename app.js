// SPREAD DESTRUCTURE FUNCTIONS EXERCISE 

//1a)
const jPDinos = [
    "Velociraptors",
    "Tryannosaurus Rex",
    "Dilophasaurus"
];

//1b)
   // with SPREAD and REST
function seeDinos(a, ...b){ 
                    //(a, ...b) using ...rest (in parameter)to display item 'a' and then the rest of the array among item b
    console.log(a);
    console.log(b);
}
seeDinos(...jPDinos);
                // to ...spread the remainder of array among 'b' parameter

                        // Velociraptors
                        // [ 'Tryannosaurus Rex', 'Dilophasaurus' ]

    //with spread
/*
function seeDinos(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}
seeDinos(...jPDinos);
*/
    // spreads array across a, b, c, parameters
                        // Velociraptors
                        // Tryannosaurus Rex
                        // Dilophasaurus


//2a)
const jPCharacters = {
    alanGrant: "Sam Neill",
    ellieSattlet: "Laura Dern",
    ianMalcolm: "Jeff Goldblum"
};

//2b)
    // without destructuring
// function seeCharacters(name){
//     console.log(name.ellieSattlet);
// }
// seeCharacters(jPCharacters);
                        // Laura Dern
 
    // with destructuring
function seeCharacters({ellieSattlet}){
    console.log(ellieSattlet);
}
seeCharacters(jPCharacters);
                        // Laura Dern


// BONUS
const jurassicParkMovies = [
    {one: "Jurassic Park",
    two: "The Lost World",
    three: "Jurassic Park III"},


    {four: "Jurassic World",
    five: "Jurassic World: Fallen Kingdom"}
];

function jPMovies({one, two, three}, {four, five}){
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
}
jPMovies(...jurassicParkMovies);
                        // Jurassic Park
                        // The Lost World
                        // Jurassic Park III
                        // Jurassic World
                        // Jurassic World: Fallen Kingdom