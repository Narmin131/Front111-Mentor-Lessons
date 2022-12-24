const saveLocalStorage = () =>{
    const myContent = document.getElementById('myTextarea').value;
    localStorage.setItem('MyText', myContent)
}

const getLocalStorage = () =>{
    const p = document.querySelector('p')
    p.innerHTML = localStorage.getItem('MyText');
}

const clearAllLocalStorage = () =>{
    localStorage.clear()
}

const removeItemFromLocalStorage = () =>{
    localStorage.removeItem('MyText')
}

const user = {
    name :'Nermin',
    surname :'Memmedova',
    age:19
}

localStorage.setItem('User', JSON.stringify(user))

const a = localStorage.getItem('User')

console.log(JSON.parse(a));

