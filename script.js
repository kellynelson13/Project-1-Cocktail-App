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
            render(data, 0);
        }, function (error){
            console.log("Something is wrong")
        })
    }

function handleMarg(e){
    e.preventDefault();
    $('#recipe').addClass('recipe');
    $.ajax('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
        .then(function(data){
            const randIndex = Math.floor(Math.random() * data.drinks.length)
            render(data, randIndex);
        }, function (error){
            console.log("Something went wrong")
        })
    }

function handleMartini(e) {
    e.preventDefault();
    $('#recipe').addClass('recipe');
    $.ajax('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini')
        .then(function(data) {
            const randIndex = Math.floor(Math.random() * data.drinks.length)
            render(data, randIndex);
        }, function(error) {
            console.log("Something went wrong")
        })
    }

function handleSour(e) {
    e.preventDefault();
    $('#recipe').addClass('recipe');
    $.ajax('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=sour')
        .then(function(data) {
            const randIndex = Math.floor(Math.random() * data.drinks.length)
            render(data, randIndex);
        }, function(error) {
            console.log("Something went wrong")
        })
}

function render (data, index) {
            ///Adding title below/////
            $title.text(data.drinks[index].strDrink);
            //// Adding image below/////
            $imgContainer.html(`<img src="${data.drinks[index].strDrinkThumb}" alt="${data.drinks[index].strDrink}" />`)
             /////Adding ingredients below//////
             $ingredients.empty();

             if(data.drinks[0].strIngredient1 && data.drinks[index].strMeasure1){
                $ingredients.append(`Ingredients:<br><br><li>${data.drinks[index].strMeasure1} ${data.drinks[index].strIngredient1}</li>`)
            } else if(data.drinks[index].strIngredient1){
                $ingredients.append(`<li>${data.drinks[index].strIngredient1}</li>`)
            }        
            if(data.drinks[index].strIngredient2 && data.drinks[index].strMeasure2){
                $ingredients.append(`<li>${data.drinks[index].strMeasure2} ${data.drinks[index].strIngredient2}</li>`)
            } else if(data.drinks[index].strIngredient2){
                $ingredients.append(`<li>${data.drinks[index].strIngredient2}</li>`)
            }  
            if(data.drinks[index].strIngredient3 && data.drinks[index].strMeasure3){
                $ingredients.append(`<li>${data.drinks[index].strMeasure3} ${data.drinks[index].strIngredient3}</li>`)
            } else if(data.drinks[index].strIngredient3){
                $ingredients.append(`<li>${data.drinks[index].strIngredient3}</li>`)
            }    
            if(data.drinks[index].strIngredient4 && data.drinks[index].strMeasure4){
                $ingredients.append(`<li>${data.drinks[index].strMeasure4} ${data.drinks[index].strIngredient4}</li>`)
            } else if(data.drinks[index].strIngredient4){
                $ingredients.append(`<li>${data.drinks[index].strIngredient4}</li>`)
            }
            if(data.drinks[index].strIngredient5 && data.drinks[index].strMeasure5){
                $ingredients.append(`<li>${data.drinks[index].strMeasure5} ${data.drinks[index].strIngredient5}</li>`)
            } else if(data.drinks[index].strIngredient5){
                $ingredients.append(`<li>${data.drinks[index].strIngredient5}</li>`)
            }
            if(data.drinks[index].strIngredient6 && data.drinks[index].strMeasure6){
                $ingredients.append(`<li>${data.drinks[index].strMeasure6} ${data.drinks[index].strIngredient6}</li>`)
            } else if(data.drinks[index].strIngredient6){
                $ingredients.append(`<li>${data.drinks[index].strIngredient6}</li>`)
            }
            if(data.drinks[index].strIngredient7 && data.drinks[index].strMeasure7){
                $ingredients.append(`<li>${data.drinks[index].strMeasure7} ${data.drinks[index].strIngredient7}</li>`)
            } else if(data.drinks[index].strIngredient7){
                $ingredients.append(`<li>${data.drinks[index].strIngredient7}</li>`)
            }
            if(data.drinks[index].strIngredient8 && data.drinks[index].strMeasure8){
                $ingredients.append(`<li>${data.drinks[index].strMeasure8} ${data.drinks[index].strIngredient8}</li>`)
            } else if(data.drinks[index].strIngredient8){
                $ingredients.append(`<li>${data.drinks[index].strIngredient8}</li>`)
            }
            if(data.drinks[index].strIngredient9 && data.drinks[index].strMeasure9){
                $ingredients.append(`<li>${data.drinks[index].strMeasure9} ${data.drinks[index].strIngredient9}</li>`)
            } else if(data.drinks[index].strIngredient9){
                $ingredients.append(`<li>${data.drinks[index].strIngredient9}</li>`)
            }
            ///////Adding instruction below///////
           $instructions.html(`Instructions:<br><br>${data.drinks[index].strInstructions}`)

}

////Toggle Button:
const $toggle = $('#toggle')
////Body to change themes:
const $body = $('body')

$toggle.click(toggleMode);

function toggleMode () {
    if($body.hasClass('lightMode')){
        $body.removeClass('lightMode')
    } else {
        $body.addClass('lightMode')
    }
}