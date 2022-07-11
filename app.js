const form = document.querySelector('.add-form');
const divs = document.querySelector('.my-body');


const generateTemplate = (todo) => {
    const html = `
    <div class="part-one">
    <p>${todo}</p>
    <i class="delete">X</i>
     </div>  
     <hr>
 `;
    divs.innerHTML += html;
};
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const todo = form.add.value.trim();

    if(todo.length){
        generateTemplate(todo);
        form.reset();
    }
});

divs.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})