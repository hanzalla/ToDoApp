var textAreas = document.getElementById('textArea');



function clearText() {
    let clearText = document.getElementById('clearText');
    let textArea = document.getElementById('textArea');

    textArea.value = '';
    textArea.disabled = false;

}


function onkeyUpNullChecking() {
    if (textAreas.value == '') {
        disabledAddbtn();
    }
    else {
        enabledAddbtn();
        // addItems();
    }

}


function addItems() { 

    let todoItems = document.getElementById('todoItems');
    let textArea = document.getElementById('textArea');


    // create a list and add the items in the list
    let todos = document.createElement("li");
    let liText = document.createTextNode(textArea.value);
    todos.appendChild(liText);
    todos.setAttribute('class', 'w-auto h-auto px-4 p-2 rounded-lg m-2 bg-slate-700 text-slate-50 shadow-lg shadow-stone-500 hover:translate-y-2');

    todos.setAttribute('onclick', 'getTextFomTodos(this)');
    // console.log(liText);



    // create edit button

    let editBtn = document.createElement('button');
    let editText = document.createTextNode('Edit');
    editBtn.setAttribute('class', 'border-2 bg-slate-400 px-4 m-2 rounded-lg'); //btn ki jaga propertieA add krni hai tailwind ki
    editBtn.appendChild(editText);
    // editBtn.onclick = function () {
        // editText(todos);

    // editBtn.appendChild(editText);

    editBtn.setAttribute('onclick', 'editTexts(this)'); 

    let delBtn = document.createElement('button');
    let delText = document.createTextNode('Delete');
    delBtn.appendChild(delText);
    delBtn.setAttribute('class', ' rounded-lg border-2 bg-slate-400 px-4 m-2'); //btn ki jaga propertieA add krni hai tailwind ki
    delBtn.setAttribute('onclick', 'deleteItem(this)');

    




    // Items add horhy hain list mein
    if (textAreas.value == '') {
        addBtn.disabled = true;
        alert('Textbox is Empty!')
    } else {
        todoItems.appendChild(todos);
        todos.appendChild(editBtn);
        todos.appendChild(delBtn);
        textArea.value = '';
        
        
    }
}


function getTextFomTodos(e) {
    let val = e.firstChild.nodeValue;
    let textArea = document.getElementById('textArea');
    textArea.value = val;   
    textArea.disabled = true;

   
}

function editTexts(e) {
    
    let val = prompt("Enter updated value..", e.parentNode.firstChild.nodeValue);

    if (val !== null) { // Check if the user provided new text or canceled the prompt
        e.parentNode.firstChild.nodeValue = val;
        textArea.disabled = false;
        enabledAddbtn();
    }
}



function deleteItem(e) {
    let delVal = e.parentNode.remove();
    
}

function deleteAll() {
    let todoItems = document.getElementById('todoItems');
    todoItems.innerText = '';
}



    // disabledAddbtn();

    // console.log

    // console.log(val);
    // console.log(e.parentNode.firstChild);

    // console.log(e.innerText);
    // let textArea = document.getElementById('textArea');

    


function disabledAddbtn() {
    let addBtn = document.getElementById('addBtn');
    addBtn.disabled = true;
    addBtn.classList.add('cursor-not-allowed')
}


function enabledAddbtn() {
    let addBtn = document.getElementById('addBtn');
    addBtn.disabled = false;
    // addBtn.classList.add('cursor-not-allowe')
}
