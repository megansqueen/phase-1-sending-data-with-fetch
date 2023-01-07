// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };

// const { bodyParser } = require("json-server");

  
//   const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (object) {
//       console.log(object);
//     })
//     .catch(function (error) {
//         alert("Bad things! Ragnarok!");
//         console.log(error.message);
//     })



// function submitData(name = ``, email = ``){

//     fetch("http://localhost:3000/users",{
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body:JSON.stringify(name, email)
//     })
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (object) {
//             console.log(object)
//         })
//     }


// const userData = {
//     name: ``,
//     email: ``,
// }

// const configureData = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify(userData),
// };

// function submitData() {
//     fetch("http://localhost:3000/users", configureData)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (object) {
//         console.log(object);
//     })
//     .catch(function (error) {
//         alert(message);
//         console.log(error.message)
//     })
// }




function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({name: name, email: email})
    })
    .then(function (response) {
        return response.json()
    })
    .then(function (object) {
        let newId = object.id
        document.createTextNode(newId)
    })
    .catch(function (error) {
        alert("error")
        console.log(error.message)
    })
}

//append to the DOM
//document.body.innerHTML
