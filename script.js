//cache all necessary html elements and assign them to variables
//create 4 event listeners for the 4 buttons
//create 4 functions to do the following:
////make the ajax call that returns a promise
////.then with 2 functions (one for success and one for error)
////in success functions render necessary data on the page and preventDefault
////for the randoms sour, marg, and martini, create random index 
console.log('https://www.thecocktaildb.com/api/json/v1/1/random.php')
// console.log($.ajax('https://www.thecocktaildb.com/api/json/v1/1/random.php'))
// console.log($.ajax('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'))
// console.log($.ajax('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini'))
// console.log($.ajax('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=sour'))

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
$marg.click(handleMarg);
$martini.click(handleMartini);
$sour.click(handleSour);
////////////////
////Functions
///////////////
function handleRandom (e){
    e.preventDefault();
    $('#recipe').addClass('recipe');
    $.ajax('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(function (data){
            //console.log(data)
            
            ///Adding title below/////
            $title.text(data.drinks[0].strDrink);
            //// Adding image below/////
            $imgContainer.html(`<img src="${data.drinks[0].strDrinkThumb}" alt="${data.drinks[0].strDrink}" />`)
             /////Adding ingredients below//////
            $ingredients.empty();

            if(data.drinks[0].strIngredient1 && data.drinks[0].strMeasure1){
                $ingredients.append(`Ingredients:<br><br><li>${data.drinks[0].strMeasure1} ${data.drinks[0].strIngredient1}</li>`)
            } else if(data.drinks[0].strIngredient1){
                $ingredients.append(`<li>${data.drinks[0].strIngredient1}</li>`)
            }        
            if(data.drinks[0].strIngredient2 && data.drinks[0].strMeasure2){
                $ingredients.append(`<li>${data.drinks[0].strMeasure2} ${data.drinks[0].strIngredient2}</li>`)
            } else if(data.drinks[0].strIngredient2){
                $ingredients.append(`<li>${data.drinks[0].strIngredient2}</li>`)
            }  
            if(data.drinks[0].strIngredient3 && data.drinks[0].strMeasure3){
                $ingredients.append(`<li>${data.drinks[0].strMeasure3} ${data.drinks[0].strIngredient3}</li>`)
            } else if(data.drinks[0].strIngredient3){
                $ingredients.append(`<li>${data.drinks[0].strIngredient3}</li>`)
            }    
            if(data.drinks[0].strIngredient4 && data.drinks[0].strMeasure4){
                $ingredients.append(`<li>${data.drinks[0].strMeasure4} ${data.drinks[0].strIngredient4}</li>`)
            } else if(data.drinks[0].strIngredient4){
                $ingredients.append(`<li>${data.drinks[0].strIngredient4}</li>`)
            }
            if(data.drinks[0].strIngredient5 && data.drinks[0].strMeasure5){
                $ingredients.append(`<li>${data.drinks[0].strMeasure5} ${data.drinks[0].strIngredient5}</li>`)
            } else if(data.drinks[0].strIngredient5){
                $ingredients.append(`<li>${data.drinks[0].strIngredient5}</li>`)
            }
            if(data.drinks[0].strIngredient6 && data.drinks[0].strMeasure6){
                $ingredients.append(`<li>${data.drinks[0].strMeasure6} ${data.drinks[0].strIngredient6}</li>`)
            } else if(data.drinks[0].strIngredient6){
                $ingredients.append(`<li>${data.drinks[0].strIngredient6}</li>`)
            }
            if(data.drinks[0].strIngredient7 && data.drinks[0].strMeasure7){
                $ingredients.append(`<li>${data.drinks[0].strMeasure7} ${data.drinks[0].strIngredient7}</li>`)
            } else if(data.drinks[0].strIngredient7){
                $ingredients.append(`<li>${data.drinks[0].strIngredient7}</li>`)
            }
            if(data.drinks[0].strIngredient8 && data.drinks[0].strMeasure8){
                $ingredients.append(`<li>${data.drinks[0].strMeasure8} ${data.drinks[0].strIngredient8}</li>`)
            } else if(data.drinks[0].strIngredient8){
                $ingredients.append(`<li>${data.drinks[0].strIngredient8}</li>`)
            }
            ///////Adding instruction below///////
            $instructions.html(`Instructions:<br><br>${data.drinks[0].strInstructions}`)

        }, function (error){
            console.log("Something is wrong")
        })
    }

function handleMarg(e){
    e.preventDefault();
    $('#recipe').addClass('recipe');
    $.ajax('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
        .then(function(data){
            render(data);
        }, function (error){
            console.log("Something went wrong")
        })
    }

function handleMartini(e) {
    e.preventDefault();
    $('#recipe').addClass('recipe');
    $.ajax('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini')
        .then(function(data) {
            render(data);
        }, function(error) {
            console.log("Something went wrong")
        })
    }

function handleSour(e) {
    e.preventDefault();
    $('#recipe').addClass('recipe');
    $.ajax('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=sour')
        .then(function(data) {
            render(data);
        }, function(error) {
            console.log("Something went wrong")
        })
}

function render (data) {
    const randIndex = Math.floor(Math.random() * data.drinks.length)
            ///Adding title below/////
            $title.text(data.drinks[randIndex].strDrink);
            //// Adding image below/////
            $imgContainer.html(`<img src="${data.drinks[randIndex].strDrinkThumb}" alt="${data.drinks[randIndex].strDrink}" />`)
             /////Adding ingredients below//////
             $ingredients.empty();

             if(data.drinks[0].strIngredient1 && data.drinks[randIndex].strMeasure1){
                $ingredients.append(`Ingredients:<br><br><li>${data.drinks[randIndex].strMeasure1} ${data.drinks[randIndex].strIngredient1}</li>`)
            } else if(data.drinks[randIndex].strIngredient1){
                $ingredients.append(`<li>${data.drinks[randIndex].strIngredient1}</li>`)
            }        
            if(data.drinks[randIndex].strIngredient2 && data.drinks[randIndex].strMeasure2){
                $ingredients.append(`<li>${data.drinks[randIndex].strMeasure2} ${data.drinks[randIndex].strIngredient2}</li>`)
            } else if(data.drinks[randIndex].strIngredient2){
                $ingredients.append(`<li>${data.drinks[randIndex].strIngredient2}</li>`)
            }  
            if(data.drinks[randIndex].strIngredient3 && data.drinks[randIndex].strMeasure3){
                $ingredients.append(`<li>${data.drinks[randIndex].strMeasure3} ${data.drinks[randIndex].strIngredient3}</li>`)
            } else if(data.drinks[randIndex].strIngredient3){
                $ingredients.append(`<li>${data.drinks[randIndex].strIngredient3}</li>`)
            }    
            if(data.drinks[randIndex].strIngredient4 && data.drinks[randIndex].strMeasure4){
                $ingredients.append(`<li>${data.drinks[randIndex].strMeasure4} ${data.drinks[randIndex].strIngredient4}</li>`)
            } else if(data.drinks[randIndex].strIngredient4){
                $ingredients.append(`<li>${data.drinks[randIndex].strIngredient4}</li>`)
            }
            if(data.drinks[randIndex].strIngredient5 && data.drinks[randIndex].strMeasure5){
                $ingredients.append(`<li>${data.drinks[randIndex].strMeasure5} ${data.drinks[randIndex].strIngredient5}</li>`)
            } else if(data.drinks[randIndex].strIngredient5){
                $ingredients.append(`<li>${data.drinks[randIndex].strIngredient5}</li>`)
            }
            if(data.drinks[randIndex].strIngredient6 && data.drinks[randIndex].strMeasure6){
                $ingredients.append(`<li>${data.drinks[randIndex].strMeasure6} ${data.drinks[randIndex].strIngredient6}</li>`)
            } else if(data.drinks[randIndex].strIngredient6){
                $ingredients.append(`<li>${data.drinks[randIndex].strIngredient6}</li>`)
            }
            if(data.drinks[randIndex].strIngredient7 && data.drinks[randIndex].strMeasure7){
                $ingredients.append(`<li>${data.drinks[randIndex].strMeasure7} ${data.drinks[randIndex].strIngredient7}</li>`)
            } else if(data.drinks[randIndex].strIngredient7){
                $ingredients.append(`<li>${data.drinks[randIndex].strIngredient7}</li>`)
            }
            if(data.drinks[randIndex].strIngredient8 && data.drinks[randIndex].strMeasure8){
                $ingredients.append(`<li>${data.drinks[randIndex].strMeasure8} ${data.drinks[randIndex].strIngredient8}</li>`)
            } else if(data.drinks[randIndex].strIngredient8){
                $ingredients.append(`<li>${data.drinks[randIndex].strIngredient8}</li>`)
            }
            ///////Adding instruction below///////
           $instructions.html(`Instructions:<br><br>${data.drinks[randIndex].strInstructions}`)

}