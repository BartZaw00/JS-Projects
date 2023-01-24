const array = [
    {
        id: 1,
        category: "lunch",
        name: "Polish Duck",
        price: "$17.99",
        image: "images/img-1.jpg",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam modi est blanditiis soluta commodi quod, officiis delectus doloremque id1."
    },
    {
        id: 2,
        category: "breakfast",
        name: "Brownie in chocolate sauce",
        price: "$7.99",
        image: "images/img-8.jpg",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam modi est blanditiis soluta commodi quod, officiis delectus doloremque id8."
    },
    {
        id: 3,
        category: "lunch",
        name: "Italian Chicken",
        price: "$13.99",
        image: "images/img-3.jpg",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam modi est blanditiis soluta commodi quod, officiis delectus doloremque id3."
    },
    {
        id: 4,
        category: "dessert",
        name: "Pancakes in maple syrup",
        price: "$12.99",
        image: "images/img-6.jpg",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam modi est blanditiis soluta commodi quod, officiis delectus doloremque id6."
    },
    {
        id: 5,
        category: "lunch",
        name: "Prawns in cream sauce",
        price: "$19.99",
        image: "images/img-5.jpg",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam modi est blanditiis soluta commodi quod, officiis delectus doloremque id5."
    },
    {
        id: 6,
        category: "lunch",
        name: "Argentinian Chicken",
        price: "$13.99",
        image: "images/img-4.jpg",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam modi est blanditiis soluta commodi quod, officiis delectus doloremque id4."
    },
    {
        id: 7,
        category: "dessert",
        name: "Fruit Dessert",
        price: "$9.99",
        image: "images/img-7.jpg",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam modi est blanditiis soluta commodi quod, officiis delectus doloremque id7."
    },
    {
        id: 8,
        category: "lunch",
        name: "Beef Ramen",
        price: "$10.99",
        image: "images/img-2.jpg",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam modi est blanditiis soluta commodi quod, officiis delectus doloremque id2."
    },
    {
        id: 9,
        category: "breakfast",
        name: "Lard Sandwich",
        price: "$5.99",
        image: "images/img-9.jpg",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam modi est blanditiis soluta commodi quod, officiis delectus doloremque id9."
    },
    {
        id: 10,
        category: "lunch",
        name: "American Steak",
        price: "$21.99",
        image: "images/img-10.jpg",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam modi est blanditiis soluta commodi quod, officiis delectus doloremque id10."
    },
]

const btns = document.querySelectorAll('[data-button]');

const menu = document.querySelector('[data-menu]');



function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map((item) => {

        return `<div class="menu-element">
        <img src=${item.image} alt=${item.name}>
        <div class="description">
            <div class="description-header">
                <span class="description-title">${item.name}</span>
                <span class="description-price">${item.price}</span>
            </div>
            <div class="description-header-line"></div>
            <div class="description-text">${item.description}</div>
        </div>
    </div>`
    });
    displayMenu = displayMenu.join(""); //eliminuje przecinek na końcu obiektu
    menu.innerHTML = displayMenu;
}

window.addEventListener("load", displayMenuItems(array));

btns.forEach((button) => {
    button.addEventListener('click', (e) => {
        const category = e.currentTarget.dataset.button;
        const menuCategory = array.filter((item) => {
            if (category === item.category)
                return item;
        });
        if (category === 'all')
            displayMenuItems(array);
        else
            displayMenuItems(menuCategory);
    })
});


/* WERSJA Z TWORZENIEM ELEMENTÓW I APPENDOWANIEM ICH */
// const menuElement = document.createElement("div");
// const img = document.createElement("img");
// const description = document.createElement("div");
// const descriptionHeader = document.createElement("div");
// const descriptionTitle = document.createElement("span");
// const descriptionPrice = document.createElement("span");
// const descriptionHeaderLine = document.createElement("div");
// const descriptionText = document.createElement("div");

// img.setAttribute("src", item.image);
// img.setAttribute("alt", "img");
// descriptionTitle.innerHTML = item.name;
// descriptionPrice.innerHTML = item.price;
// descriptionText.innerHTML = item.description;

// menu.appendChild(menuElement).classList.add("menu-element");
// menuElement.appendChild(img);
// menuElement.appendChild(description).classList.add("description");
// description.appendChild(descriptionHeader).classList.add("description-header");
// descriptionHeader.appendChild(descriptionTitle).classList.add("description-title");
// descriptionHeader.appendChild(descriptionPrice).classList.add("description-price");
// description.appendChild(descriptionHeaderLine).classList.add("description-header-line");
// description.appendChild(descriptionText).classList.add("description-text");

