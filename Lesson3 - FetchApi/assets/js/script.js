// Fetch metodu ile api cekmek
// https://restcountries.com/v2/all

const myUl = document.querySelector('ol')

fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => {
        console.log(data),
            data.forEach(element => {
                const li = document.createElement('li');
                li.innerHTML = element.name;
                myUl.appendChild(li)
            });
    })
    .catch(err => console.log(err))


// Fetch metodu ile JSON file 

// fetch('data.json')
// .then(res => res.json())
// .then(data => {
//     console.log(data),
//     data.forEach(element => {
//         const li = document.createElement('li');
//         li.innerHTML = element.name;
//         myUl.appendChild(li)
//     });
// })
// .catch(err => console.log(err))


const url = 'https://restcountries.com/v2/all'

async function getData() {
    try {
        const res = await fetch(url)
            .then(response => response.json())
            .then(data => console.log(data))
    }
    catch (err) {
        console.log(err);
    }
}

getData()