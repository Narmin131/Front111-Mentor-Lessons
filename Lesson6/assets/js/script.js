const form = document.querySelector('form')
const input = document.querySelector('input')
const tbody = document.querySelector('tbody')
const todoItems = localStorage.getItem('todoItem')
const todo = todoItems ? JSON.parse(todoItems) : [];



form.addEventListener('submit', (e) => {
    e.preventDefault();
    let inputValue = input.value;
    todo.push(inputValue);
    localStorage.setItem('todoItem', JSON.stringify(todo))
    location.reload()
})

todo.map((data, index) => {
    tbody.innerHTML += `
    <tr>
    <td>${data}</td>
    <td onclick='del(${index})'>Delete</td>
    </tr>
`
})

// const del = (e) =>{

//     let filteredArray = todo.filter((data, index)=>{
//           return index !== e;
//     })

//     localStorage.setItem('todoItem', JSON.stringify(filteredArray))
//     location.reload()
// }