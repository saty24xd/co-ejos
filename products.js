const products = [
    {
        category: "alimentos",
        image: "productos-pics/producto1.jpg",
        name: "Alimento Premium para Conejos",
        price: "59.90",
        description: "Un delicioso alimento para conejos que proporciona todos los nutrientes que necesitan para estar sanos y felices."
    },
    {
        category: "juguetes",
        image: "productos-pics/producto2.jpg",
        name: "Juguete Interactivo para Conejos",
        price: "29.90",
        description: "Un divertido juguete interactivo que mantendrá a tu conejo entretenido y estimulado durante horas."
    },
    {
        category: "accesorios",
        image: "productos-pics/producto3.jpg",
        name: "Casita de Descanso para Conejos",
        price: "79.90",
        description: "Una acogedora casita de descanso para que tu conejo descanse y se sienta seguro en su hogar."
    },
    // Agregar más objetos de productos para cada categoría
];

const productList = document.getElementById("product-list");
const categoryButtons = document.querySelectorAll(".category-btn");

// Function to display products based on selected category
function displayProducts(category) {
    productList.innerHTML = "";
    const filteredProducts = category === "todos" ? products : products.filter(product => product.category === category);

    filteredProducts.forEach(product => {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");

        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.name;

        const productName = document.createElement("h3");
        productName.textContent = product.name;

        const productPrice = document.createElement("p");
        productPrice.textContent = `S/ ${product.price}`;

        const productDescription = document.createElement("p");
        productDescription.textContent = product.description;

        productItem.appendChild(productImage);
        productItem.appendChild(productName);
        productItem.appendChild(productPrice);
        productItem.appendChild(productDescription);

        productList.appendChild(productItem);
    });
}

// Add click event listeners to category buttons
categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.dataset.category;
        displayProducts(category);
    });
});

// Initial display of all products
displayProducts("todos");
