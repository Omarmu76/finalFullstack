const form = document.querySelector("form");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const photoURL = document.getElementById("photo");

console.log("hola");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("hola2");

    if (password.value === confirmPassword.value) {
        console.log("hola3");
        fetch("http://localhost:3000/api/user/register", {
            method: "POST",
            body: JSON.stringify({
                email: email.value,
                password: password.value,
                photo: photoURL.value,
                name: nombre.value
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((res) => {
            console.log("hola4");
            if (res.status === 200) {
                window.location.href = "http://localhost:3000/"; // Redirige a la página principal si la respuesta es exitosa
            } else {
                console.log("Error en la respuesta:", res.status); // Imprime un mensaje si la respuesta no es exitosa
            }
            console.log("hola5");
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    } else {
        document.getElementById("passwords-no-match").style.display = "block";
    }
});
