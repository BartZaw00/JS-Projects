const array = [
    {
        id: 1,
        category: "lunch",
        name: "Kaczka po Polsku",
        price: "$17.99",
        image: "/images/img-1.jpg",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam modi est blanditiis soluta commodi quod, officiis delectus doloremque id1."
    },
    {
        id: 2,
        category: "breakfast",
        name: "Ramen Wołowy",
        price: "$10.99",
        image: "/images/img-2.jpg",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam modi est blanditiis soluta commodi quod, officiis delectus doloremque id2."
    },
    {
        id: 3,
        category: "lunch",
        name: "Kaczka po Polsku",
        price: "$13.99",
        image: "/images/img-3.jpg",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam modi est blanditiis soluta commodi quod, officiis delectus doloremque id3."
    },
    {
        id: 4,
        category: "shakes",
        name: "Kaczka po Polsku",
        price: "$17.99",
        image: "/images/img-4.jpg",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam modi est blanditiis soluta commodi quod, officiis delectus doloremque id4."
    },
    {
        id: 5,
        category: "lunch",
        name: "Kaczka po Polsku",
        price: "$17.99",
        image: "/images/img-5.jpg",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam modi est blanditiis soluta commodi quod, officiis delectus doloremque id5."
    },
    {
        id: 6,
        category: "shakes",
        name: "Kaczka po Polsku",
        price: "$17.99",
        image: "/images/img-6.jpg",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam modi est blanditiis soluta commodi quod, officiis delectus doloremque id6."
    },
    {
        id: 7,
        category: "lunch",
        name: "Kaczka po Polsku",
        price: "$17.99",
        image: "/images/img-7.jpg",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam modi est blanditiis soluta commodi quod, officiis delectus doloremque id7."
    },
    {
        id: 8,
        category: "breakfast",
        name: "Kaczka po Polsku",
        price: "$17.99",
        image: "/images/img-8.jpg",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam modi est blanditiis soluta commodi quod, officiis delectus doloremque id8."
    },
    {
        id: 9,
        category: "breakfast",
        name: "Kaczka po Polsku",
        price: "$17.99",
        image: "/images/img-9.jpg",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam modi est blanditiis soluta commodi quod, officiis delectus doloremque id9."
    },
    {
        id: 10,
        category: "lunch",
        name: "Kaczka po Polsku",
        price: "$17.99",
        image: "/images/img-10.jpg",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt veniam modi est blanditiis soluta commodi quod, officiis delectus doloremque id10."
    },
]

const btnAll = document.querySelector('[data-button-all]');

const btnBreakfast = document.querySelector('[data-button-breakfast]');

const btnLunch = document.querySelector('[data-button-lunch]');

const btnShakes = document.querySelector('[data-button-shakes]');

const menu = document.querySelector('[data-menu]');



function displayMenu(category) {
    array.forEach((item) => {
        const menuElement = document.createElement("div");
        const img = document.createElement("img");
        const description = document.createElement("div");
        const descriptionHeader = document.createElement("div");
        const descriptionTitle = document.createElement("span");
        const descriptionPrice = document.createElement("span");
        const descriptionHeaderLine = document.createElement("div");
        const descriptionText = document.createElement("div");
        if (category === item.category || category === "all") {
            console.log("kategoria: " + category)
            console.log("item category: " + item.category)


            img.setAttribute("src", item.image);
            img.setAttribute("alt", "img");
            descriptionTitle.innerHTML = item.name;
            descriptionPrice.innerHTML = item.price;
            descriptionText.innerHTML = item.description;

            menu.appendChild(menuElement).classList.add("menu-element");
            menuElement.appendChild(img);
            menuElement.appendChild(description).classList.add("description");
            description.appendChild(descriptionHeader).classList.add("description-header");
            descriptionHeader.appendChild(descriptionTitle).classList.add("description-title");
            descriptionHeader.appendChild(descriptionPrice).classList.add("description-price");
            description.appendChild(descriptionHeaderLine).classList.add("description-header-line");
            description.appendChild(descriptionText).classList.add("description-text");
        }
    });
}

//window.addEventListener("load", displayMenu("all"));

btnAll.addEventListener('click', () => {
    displayMenu("all");
});

btnBreakfast.addEventListener('click', () => {
    displayMenu("breakfast");
});

btnLunch.addEventListener('click', () => {
    displayMenu("lunch");
});

btnShakes.addEventListener('click', () => {
    displayMenu("shakes");
});