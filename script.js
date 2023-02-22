const wrapper = document.querySelector('.wrapper')

fetch(`https://reqres.in/api/users?page=2`)
.then ((response) => {
    return response.json();
})

.then((data) => {
    data.data.forEach((data) => {
        let container = document.createElement('div')
        container.classList.add("container")
        wrapper.appendChild(container)
        
        let name = document.createElement('h2')
        name.classList.add("name")
        container.appendChild(name)

        name.innerHTML = data.first_name + ' ' + data.last_name

        let email = document.createElement('p')
        email.classList.add("email")
        container.appendChild(email)

        email.innerHTML = data.email

        let image = document.createElement('img')
        image.classList.add("avatar")
        container.appendChild(image)

        image.src = data.avatar
     
        
    });
    
})









