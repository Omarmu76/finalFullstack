let products = [];
fetch("http://localhost:3000/api/product").then(async (data) => {
    const productsList = document.getElementById("list-products");
    products = await data.json();
    products.forEach((product) => {
        productsList.innerHTML += `
        <li>
            <img src="${product.image}" alt="">
            ${product.name} - Precio: ${product.price}
            <button class="edit-btn" onclick="openEditModal('${product._id}')">Editar</button>
            <button class="delete-btn" onclick="openDeleteModal()">Borrar</button>
        </li>`;
    });
});

const createProduct = () => {
    const nombre = document.getElementById("productName");
    const price = document.getElementById("productPrice");
    const description = document.getElementById("productDescription");
    const image = document.getElementById("productImage");

    fetch("http://localhost:3000/api/product", {
        method: "POST",
        body: JSON.stringify({
            name: nombre.value,
            price: price.value,
            description: description.value,
            image: image.value
        }),
        headers: {
            "Content-Type": "application/json",
        }
    }).then(() => {
        alert("producto creado");
    }).catch(() => {
        alert("error al crear el producto");
    });
}

function openEditModal(productId) {
    console.log("productId", productId);
    const product = products.find((pr) => pr._id === productId);
    document.getElementById('editProductModal').style.display = 'block';
    document.getElementById("editProductName").value = product.name;
    document.getElementById("editProductPrice").value = product.price;
    document.getElementById("editProductDescription").value = product.description;
    document.getElementById("editProductImage").value = product.image;
}
