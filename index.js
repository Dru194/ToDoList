function getValue(){
    const inputElement = document.getElementById('addToListInput');
    const inputValue = inputElement.value;
    return testValue(inputValue);
}

function testValue(value){
    if (value != "" && value.length < 200){
        console.log("input value is okay");
        return value;
    }
    else if(value.length > 200){
        console.log("input value is not okay");
        window.alert("Make this task smaller! Less than 40 characters please.");
        clearTextField();
        return true;
    }
    else{
        console.log("input value is not okay :(");
        window.alert("Try doing something instead of nothing!");
        return false;
    }
}

function addToList(){
    const item = getValue()
    if (typeof(item) === "boolean"){
        return;
    }
    elementToAdd = document.createElement('li');
    elementToAdd.innerHTML = "<input type='checkbox'></input>" + item;
    unorderedListForm = document.getElementById('ToDoList');
    unorderedListForm.appendChild(elementToAdd);
    clearTextField();
    listBorderHider();
}

function clearTextField(){
    const textField = document.getElementById('addToListInput');
    textField.value = "";
}

function removeFromList(){
    const toDoList = document.getElementById('ToDoList');
    const itemArray = toDoList.children;
    let x = 0;
    let y = itemArray.length;
    let itemCheckBox;
    while (x < y){
        itemCheckBox = itemArray[x].children;
        if (itemCheckBox[0].checked){
            itemArray[x].remove();
            x-=1;
            y-=1;
        }
        x+=1;
    }
    listBorderHider();
}

function deleteList(){
    const toDoList = document.getElementById('ToDoList');
    const itemArray = toDoList.children;
    console.log(itemArray.length);
    let y = itemArray.length;
    while (0 < y){
        itemArray[0].remove();
        y-=1;
    }
    listBorderHider();
    return;
}

function listBorderHider(){
    const toDoList = document.getElementById('ToDoList');
    const itemArray = toDoList.children;
    if (itemArray.length !== 0){
        toDoList.style.border = '5px dashed black';
    }
    else{
        toDoList.style.border = "";
    }   
}

function onClickResponse(){
    const textField = document.getElementById('addToListInput');
    console.log(textField.value);
    textField.addEventListener("keyup", enterKeyHandler());
    return;
}

function enterKeyHandler(){
    let key = event.key;
    if (key === "Enter"){
        addToList();
        return;
    }
    return;
}
