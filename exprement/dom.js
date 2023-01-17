let form=document.querySelector('#addForm');
let itemList=document.querySelector('#items');
let filter=document.querySelector('#filter');

/// filter event
filter.addEventListener('keyup', filterItem);
// form submit event
form.addEventListener('submit', addItem);
 
// Delete event
itemList.addEventListener('click', removeItem);

// add item function
function addItem(e){
    e.preventDefault();
    
    let newItem=document.querySelector('#item').value;
  /// create new li element
  let li =document.createElement('li');
   // add class
   li.className='list-group-item';
   li.appendChild(document.createTextNode(newItem));

   
   let deleteBtn=document.createElement('button');
   // add classes to delete btn
   deleteBtn.className='btn btn-danger btn-sm float-right delete'
     //append text node
     deleteBtn.appendChild(document.createTextNode('X'));

     // append button to li
     li.appendChild(deleteBtn)
     // append li to the list

itemList.appendChild(li);
}
  // Remove item
  function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure'));
        let li=e.target.parentElement;
        itemList.removeChild(li);
    }
  }
  // filter item
  function filterItem(e){
let text =e.target.value.toLowerCase();
var items=itemList.getElementsByTagName('li');

Array.from(items).forEach(function(item){
    let itemName=item.firstChild.textContent;
    if(itemName.toLocaleLowerCase().indexOf(text) != -1){
        item.style.display='block';
    }else{
        item.style.display='none';
    }
})
  }
