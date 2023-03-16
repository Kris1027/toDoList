const addToDoButton = document.getElementById('addToDoButton');
const toDoContainer = document.getElementById('toDoContainer');
const inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function()
{
    const text = inputField.value;
    const newParagraph = document.createElement('p');
    const paragraphText = document.createTextNode(text);
    newParagraph.appendChild(paragraphText);
    toDoContainer.appendChild(newParagraph);
    newParagraph.classList.add('p-style')
    inputField.value = '';
    newParagraph.addEventListener('click', function() 
    {
        newParagraph.style.textDecoration = 'line-through';
    })
    newParagraph.addEventListener('dblclick', function()
    {
        toDoContainer.removeChild(newParagraph);
    })
})