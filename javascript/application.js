
console.log("Hello from JavaScript!");

// 1 select items on the page
const password = document.querySelector("#password")
const form = document.querySelector("#form")
const email = document.querySelector("#email")

// 2 listening for user input
form.addEventListener('submit', (event) => {

    event.preventDefault()
    
    // call api and manipulate DOM
    const url = "https://reqres.in/api/register"
    fetch(url, {
        method: "POST",
        headers: {'Content-Type': "application/json"},
        body: JSON.stringify({"email": email.value, "password": password.value})
    })
    .then((response) => {
        if (response.status === 200) {
            Swal.fire({title: 'Success', text: 'You are connected', icon: 'success'})
        } else {
            Swal.fire({title: 'Error!', text: 'Oups! Something went wrong', icon: 'error'})
        }

        return response.json()
    })
    .then(data => console.log(data))
})

console.log("Hello from JavaScript again!");
