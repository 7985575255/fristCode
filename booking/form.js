

function storeDataInLocal(event){
    event.preventDefault();
    let name=document.querySelector('.name').value;
    let password=document.querySelector('#password').value;
    console.log(name);
    localStorage.setItem('Name',name);
    localStorage.setItem('Password',password);
}