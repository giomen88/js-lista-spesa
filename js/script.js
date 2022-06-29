// CREO IL MIO ARRAY
shoppingList = ["Uova", "Pane", "Latte", "Biscotti", "Pasta", "Affettati", "Formaggio", "Verdura", "Frutta"]

// ESTRAPOLO ELEMENTO DAL DOM
listContainer = document.getElementById('list-container');

///////////////////////////// CREO IL WHILE

// DEFINISCO VARIABILE INDICE
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


/////////////////////////////////////////////////////////// WHILE E INSERIMENTO NEL DOM CON LE API

// while (i < shoppingList.length) {
//     const listItem = document.createElement('li');
//     listItem.append(shoppingList[i]);
//     listContainer.append(listItem);

//     i++;
// }
