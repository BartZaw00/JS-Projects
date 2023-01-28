const mainContainer = document.getElementById('main-container');

let productsData;


async function API_CALL(callback) {
    try {
        const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
        const data = await response.json();
        callback(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

function displayData(products) {
    products.meals.forEach((element) => {
        mainContainer.innerHTML += displaySingleRecipe(element);
    });

}

function displaySingleRecipe(item) {
    return `<div class="recipe-and-button">
    <div class="recipe">
        <div class="recipe-img"><img src="${item.strMealThumb}" alt=""></div>
        <div class="recipe-content">
            <h2 class="text-color">${item.strMeal}</h2>
            <p>${item.strInstructions.slice(0, 150).padEnd(153, '.')}</p>
            <div class="recipe-times">
                <div class="recipe-time">
                    <span class="recipe-time-title">Hands-on Time</span>
                    <span class="def-font text-color">30 min</span>
                </div>
                <div class="recipe-time">
                    <span class="recipe-time-title">Total Time</span>
                    <span class="def-font text-color">40 min</span>
                </div>
                <div class="recipe-time">
                    <span class="recipe-time-title">Yield</span>
                    <span class="def-font text-color">40 min</span>
                </div>
            </div>
        </div>
    </div>
    <button class="recipe-btn"><span>FULL RECIPE</span><span class="material-symbols-outlined">
            arrow_forward
        </span></button>
</div>`;
}


window.addEventListener('load', async function () {
    await API_CALL(displayData);
});