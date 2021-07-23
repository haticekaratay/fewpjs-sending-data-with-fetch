function submitData(name,email) {
    return fetch("http://localhost:3000/users",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    }
    )
    .then(response => response.json())
    .then(jsonObject => document.body.innerHTML = jsonObject.id)
    .catch(error => {
        //console.log(error.message);
        document.body.innerHTML = error.message
    }); 
};

//submitData("haley", "haley@email.com")