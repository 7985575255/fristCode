
let form=document.querySelector('.form');


form.addEventListener('submit', (event)=>{
    event.preventDefault();
    let name=document.querySelector('.name').value;
    let email=document.querySelector('#email').value;
    let number=document.querySelector('#number').value;
    let obj={
        name,
        email,
        number
    }
    localStorage.setItem(obj.email, JSON.stringify(obj));
    showOnscreen(obj);
})
function showOnscreen(obj){
    let parentEle=document.querySelector('#userDeatils');
    let childEle=document.createElement('li');
    childEle.innerText=`${obj.name}-${obj.email}-${obj.number}`;
    parentEle.appendChild(childEle);
}