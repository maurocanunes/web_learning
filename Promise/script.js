// $.getJSON('/my/url', function(data) {
//     //new old way
// });

// fetch('/users') //new way

// const promise = new Promise((resolve, reject) => {
//     if (true) {
//         resolve('Stuff Worked');
//     } else {
//         reject('Error, it broke');
//     }
// })
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'hiii')
// })
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, "heyy")
// })
// const promise4 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 5000, "hahaha")
// })

// Promise.all([promise, promise2, promise3, promise4])
//     .then(values => {
//         console.log(values);
//     })

// promise
//     .then(result => result + '!')
//     .then(result2 => console.log(result2))
//     .catch(() => console.log('errrrror!!')) //it catches any errors in between the .then

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
}).catch((err) => console.log(err));