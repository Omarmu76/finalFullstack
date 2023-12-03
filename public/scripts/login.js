const form = document.querySelector("form")
const email = document.getElementById("email")
const password = document.getElementById("password")

form.addEventListener("submit",(event)=>{
    event.preventDefault()
    fetch("http://localhost:3000/api/user/login",{
        method: "POST",
        body:JSON.stringify({
            email:email.value,
            password:password.value
        }),
        headers:{
            "Content-Type": "application/json",
        }
    }).then(async (res)=>{
        const text = await res.text()
        console.log("res:",text)
    }).catch(async (error) => {
        const error = await error.text()
        console.error('Error:', error);
    })    
})