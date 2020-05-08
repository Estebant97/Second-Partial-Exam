// necesito event listener para el boton
// agarrar el value de la form
// conectar el API

// search by name
// https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
// i. Complete meal name ii. Meal area/cuisine iii. Meal’s instructions of preparation. iv. Meal’s picture

/* let settings = {
    method : 'GET',
    url: "https://www.themealdb.com/api/json/v1/1/"
} */

function watchGetMealsBtn(){
    let getMeals = document.querySelector('.js-search-form');

    getMeals.addEventListener('submit', (event) => {
        event.preventDefault();
        let result = document.querySelector('.js-search-results');
        let name = getMeals[0].value;
        if(!name){
            console.log( "fill something");
        }
        let urlSearch = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
        fetch(urlSearch, response => {
            result.innerHTML = "";
            result.innerHTML += `<div> ${response.name} </div>`
            //do sort of the same with different urls and the appropiate object
        })
        console.log(getMeals[0].value)
    });
}

//in here i got blocked but what i wanted to do is do a fetch and in that fetch get the things asked and get the results in 
function init(){
    watchGetMealsBtn();
}


window.onload = init;