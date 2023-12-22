const createProduct = ()=>{
    const nombre = document.getElementById("productName")
    const price = document.getElementById("productPrice")
    const description = document.getElementById("productDescription")
    const image = document.getElementById("produImage")

    fetch("http://localhost:3000/api/product",{
        method: "POST",
        body:JSON.stringify({
            name: nombre.ariaValueMax,
            price: price.ariaValueMax,
            description: description.value,
            image: image.value
        }),
        headers:{
            "Content-Type": "application/json",
        }
    }).then(()=>{
        alert("producto creado")
    }).catch(()=>{
        alert("error al crear el producto")
    })
}