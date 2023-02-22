
fetch(`https://reqres.in/api/users/2`)
.then ((response) => {
    return response.json()

})

.then((data) => {

    let image = document.querySelector('#image')
    //console.log(data.data.first_name)
    document.querySelector('#first-name').innerHTML = data.data.first_name;
    document.querySelector('#last-name').innerHTML = data.data.last_name;
    document.querySelector('#email').innerHTML = data.data.email;
    image.src = data.data.avatar;
})

