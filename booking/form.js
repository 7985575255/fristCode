let form=document.querySelector('.form');

form.addEventListener('submit', (event) =>{
    event.preventDefault();
 let parentEle=document.querySelector("#userDeatils");
let childEle=document.createElement('li');
 let name=document.querySelector('.name').value;
 let email=document.querySelector('#email').value;
 let number=document.querySelector('#number').value;
 let obj={
    name,
    email,
    number
 }
 localStorage.setItem(obj.email, JSON.stringify(obj));
childEle.innerText=JSON.stringify(obj);


let delButton=document.createElement('input');
delButton.type='button';
delButton.value='delete';
   delButton.onclick= ()=>{
    localStorage.removeItem(obj.email);
    parentEle.removeChild(childEle);
   }
childEle.appendChild(delButton);
parentEle.appendChild(childEle);
})