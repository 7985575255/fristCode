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
   let editButton=document.createElement('input');
   editButton.value='edit';
   editButton.type='button';
   editButton.onclick=()=>{
    localStorage.removeItem(obj.email);
    parentEle.removeChild(childEle);
    document.querySelector('.name').value=obj.name;
    document.querySelector('#email').value=obj.email;
    document.querySelector('#number').value=obj.number;
   }
childEle.appendChild(editButton);
childEle.appendChild(delButton);
parentEle.appendChild(childEle);
})