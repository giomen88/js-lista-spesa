// CREO IL MIO ARRAY
shoppingList = ["Uova", "Pane", "Latte", "Biscotti", "Pasta", "Affettati", "Formaggio", "Verdura", "Frutta"]

// ESTRAPOLO ELEMENTO DAL DOM
listContainer = document.getElementById('list-container');

///////////////////////////// CREO IL WHILE

// DO UN VALORE ALLA I
i = 0

// CREO VARIABILE ELEMENTI LISTA
let listItems = `<ul>`

// WHILE
while (i < shoppingList.length) {
    listItems += `<li>${shoppingList[i]}</li>`;
    i++;
}

listItems += `</ul>`

// INSERISCO LISTA NEL DOM
listContainer.innerHTML = listItems