//cache all necessary html elements and assign them to variables
//create 4 event listeners for the 4 buttons
//create 4 functions to do the following:
////make the ajax call that returns a promise
////.then with 2 functions (one for success and one for error)
////in success functions render necessary data on the page and preventDefault
////for the randoms sour, marg, and martini, create random index 
console.log('https://www.thecocktaildb.com/api/json/v1/1/random.php')
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
const $ingredients = $('#ingredients') // This is a ul tag. Need li tags to append here
const $instructions = $('#instructions') //Need to create ol and li tags to append here
const $title = $('#title')



///////////////
// Event Listeners
/////////////////
$random.click(handleRandom);
////////////////
////Functions
///////////////
function handleRandom (e){
    e.preventDefault();
    $.ajax('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(function (data){
            console.log(data)
            $title.text(data.drinks[0].strDrink);
            /////Adding ingredients below//////
            $imgContainer.html(`<img src="${data.drinks[0].strDrinkThumb}" alt="${data.drinks[0].strDrink}" />`)
            if(data.drinks[0].strIngredient1){
                $ingredients.html(`<li>${data.drinks[0].strIngredient1}</li>`)
            }
            if(data.drinks[0].strIngredient2){
                $ingredients.append(`<li>${data.drinks[0].strIngredient2}</li>`)
            }
            if(data.drinks[0].strIngredient3){
                $ingredients.append(`<li>${data.drinks[0].strIngredient3}</li>`)
            }
            if(data.drinks[0].strIngredient4){
                $ingredients.append(`<li>${data.drinks[0].strIngredient4}</li>`)
            }
            if(data.drinks[0].strIngredient5){
                $ingredients.append(`<li>${data.drinks[0].strIngredient5}</li>`)
            }
            if(data.drinks[0].strIngredient6){
                $ingredients.append(`<li>${data.drinks[0].strIngredient6}</li>`)
            }
            if(data.drinks[0].strIngredient7){
                $ingredients.append(`<li>${data.drinks[0].strIngredient7}</li>`)
            }
            ///////Adding instruction below///////
        }, function (err){
            console.log("Something is terribly wrong")
        })
}

