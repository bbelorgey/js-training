'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
function jadenCase(string){
    let tableau=string.split(' ');
    console.log(tableau);
    let lettre1 = '';
    let chaineModif="";
    let tabRetour= [];
    for(let i=0;i<tableau.length;i++){
        tabRetour = tableau[i];
        lettre1 = tabRetour[0].toUpperCase();
        console.log(lettre1);
        chaineModif = lettre1 + tabRetour.substr(1,tabRetour.length);
        tableau.splice(i,1,chaineModif);
        console.log(tableau);
    }
    return tableau.join(' ');
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, "function")
assert.strictEqual(jadenCase('bruno est grand'), 'Bruno Est Grand')
// assert.fail(jadenCase("How are you ?"),"How Are You ?")
// End of tests */
