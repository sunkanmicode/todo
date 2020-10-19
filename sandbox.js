
const submit =document.querySelector('#submit');
const text =document.querySelector('#text');
const list =document.querySelector('.list');
// const ul = document.querySelector('ul')

// to addList
submit.addEventListener('click', addFun);

function addFun() {
  //adding..a list
      let paras = document.createElement("p");
      list.appendChild(paras);    
      paras.innerText = text.value;
      paras.classList.add('addList')
      text.value = "";
    
      //deleting..a list.
      paras.addEventListener('click', removeFun);
      function removeFun() {
       list.removeChild(paras)
      }
};






