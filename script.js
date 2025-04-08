// function checkSuccess(data) {
//     return new Promise(function(resolve, reject) {
//         if(data === "success") {
//             return resolve("successfully executed ")
//         } else {
//             return reject("unsuccessfully executed ")
//         }

//     })
// }

// checkSuccess("success").then(function(result) {
//     console.log(result);
// }).catch(function(error) {
//     console.error(error)
// });

fetch('https://api.github.com/users/vpvamsik1').then(function(result) {
    return result.json();
}).then(function(response) {
    console.log(response);
})