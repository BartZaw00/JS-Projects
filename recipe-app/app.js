const mainContainer = document.getElementById('main-container');
const modal = document.getElementById('modal');
const modalCloseBtn = document.getElementById('modal-close');

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

window.addEventListener('load', async function () {
    await API_CALL(displayData);


});

function displayData(products) {
    products.meals.forEach((element) => {
        mainContainer.innerHTML += displaySingleRecipe(element);
    });

    
    const fullRecipeBtns = document.getElementsByClassName('recipe-btn');

    showModal(fullRecipeBtns, products);
}

function displaySingleRecipe(item) {
    return `<div class="recipe-and-button">
    <div class="recipe">
        <div class="recipe-img"><img src="${item.strMealThumb}" alt=""></div>
        <div class="recipe-content">
            <h2 class="text-color">${item.strMeal}</h2>
            <p>${item.strInstructions.slice(0, 150).padEnd(153, '.')}</p>
            <div class="details">
                <div class="detail">
                    <span class="detail-title">Hands-on Time</span>
                    <span class="text-color">30 min</span>
                </div>
                <div class="detail">
                    <span class="detail-title">Total Time</span>
                    <span class="text-color">40 min</span>
                </div>
                <div class="detail">
                    <span class="detail-title">Yield</span>
                    <span class="text-color">40 min</span>
                </div>
            </div>
        </div>
    </div>
    <button class="recipe-btn"><span>FULL RECIPE</span><span class="material-symbols-outlined">
            arrow_forward
        </span></button>
</div>`;
}

function showModal(fullRecipeBtns, products) {
    for (let i = 0; i < fullRecipeBtns.length; i++) {
        fullRecipeBtns[i].addEventListener('click', () => {
            console.log(i)
            document.getElementById("modal-title").textContent = products.meals[i].strMeal;
            document.getElementById("modal-category").textContent = products.meals[i].strCategory;
            document.getElementById("modal-area").textContent = products.meals[i].strArea;
            document.getElementById("modal-tags").textContent = products.meals[i].strTags;
            document.getElementById("modal-description").textContent = products.meals[i].strInstructions;
            if (!modal.classList.contains('show')) {
                console.log(modal)
                setTimeout(() => {
                    modal.classList.add('show');
                }, 0);
            }
        });
    }
}