const list = document.querySelector('#list');
const myButton = document.querySelector('#myButton');
const nameInput = document.querySelector('#nameInput')


// Добавление задачи при клике на кнопку 'Добавить'
myButton.addEventListener('click', addTask);

// ДОбавление задачи при нажатие на Enter
nameInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }

})

function addTask() {
    if (nameInput.value != '') {

        // Добавить класс элементу
        const modal = document.querySelector('#modal');
        const delBtnModal = document.querySelector('#del');
        const cancel = document.querySelector('#cancel');

        const newItem = document.createElement('li');
        // classList - добавить/удалить класс для элемента
        newItem.classList.add('item');

        // Записать в элемент списка Html код
        newItem.innerHTML = `<span>${nameInput.value}</span>`;

        // Создать кнопку элементу
        const deleteButton = document.createElement('button');

        // Добавить текст на кнопку
        deleteButton.textContent = 'Удалить';

        // Добавить элемент в конец списка
        list.appendChild(newItem);
        // Добавить кнопку в конец itеm
        newItem.appendChild(deleteButton);

        // Удаление элемента из списка 
        deleteButton.addEventListener('click', (event) => {

            modal.style.display = 'block';

            function removeTask() {
                list.removeChild(newItem);
                modal.style.display = 'none';
            }
            delBtnModal.addEventListener('click', removeTask);

            cancel.addEventListener('click', () => {
                modal.style.display = 'none';
                delBtnModal.removeEventListener('click', removeTask);
            })
        })

        // Отчистить поле ввода
        nameInput.value = '';

    } else {
        alert('Заполните поле')
    }
}
