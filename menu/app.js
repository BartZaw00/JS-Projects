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

const menuElement = document.createElement("div");

menuElement.class = "menu-element";

function displayMenu() {
    

}


btnAll.addEventListener('click', () => {
});