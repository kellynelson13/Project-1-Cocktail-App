//cache all necessary html elements and assign them to variables
//create 4 event listeners for the 4 buttons
//create 4 functions to do the following:
////make the ajax call that returns a promise
////.then with 2 functions (one for success and one for error)
////in success functions render necessary data on the page and preventDefault
////for the randoms sour, marg, and martini, create random index 

console.log($.ajax('https://www.thecocktaildb.com/api/json/v1/1/random.php'))
console.log($.ajax('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'))
console.log($.ajax('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini'))
console.log($.ajax('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=sour'))

////////////////
///Cached Elements
///////////////
    //buttons//
const $marg = $('#marg')
const $martini = $('#martini')
const $sour = $('#sour')
const $random = $('#random')
    //elements to populate with APi info//
const $imgContainer = $('#picture') // Need to create img tag to append here
const $ingredients = $('#indredients') // Need to create ul and li tags to append here
const $instructions = $('#instructions') //Need to create ol and li tags to append here

