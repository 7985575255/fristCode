
let form=document.querySelector('.form');

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    let name=document.querySelector('.name').value;
    let password=document.querySelector('#password').value;
    const obj={
        name,
        password
    }
    console.log(name);
    localStorage.setItem(name,JSON.stringify(obj));
    
})