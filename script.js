const addToDoButton = document.getElementById('addToDoButton');     //
const toDoContainer = document.getElementById('toDoContainer');    // Podpinam elementy DOM - button, input i kontener na paragrafy
const inputField = document.getElementById('inputField');         //
const clearToDoButton = document.getElementById('clearToDoButton');   // Podpinam button do wyczyszczenia całej listy

addToDoButton.addEventListener('click', function()   // Dodaje do button metodę działania po kliknięciu i niemą funkcję
{
    const text = inputField.value;   // Tworzę zmienną która pobiera wartość z input
    const newParagraph = document.createElement('li');   // Tworzę zmienną która tworzy paragraf
    const paragraphText = document.createTextNode(text);   // Tworze zmienną która pozwala na wpisanie tekstu dzięki metodzie createTextNode
    newParagraph.appendChild(paragraphText);   // Dodaje do zmiennej nowego paragrafu zmienna z tekstem
    toDoContainer.appendChild(newParagraph);   // Dodaje do kontenera na paragrafy miejsce na nowe paragrafy
    newParagraph.classList.add('p-style')   // Dodaje klase do paragrafow
    inputField.value = '';   // Dodaje wyczyszczenie pola input, kiedy dodam paragraf
    newParagraph.addEventListener('click', function() 
    {
        newParagraph.style.textDecoration = 'line-through';   // Dodaje przekreślenie tekstu
    })
    newParagraph.addEventListener('dblclick', function()  // Poprzednio było jedno kliknięcie, dodanie "dbl" oznacza dwa kliknięcia
    {
        toDoContainer.removeChild(newParagraph);   // Usuwa paragraf
    })
})