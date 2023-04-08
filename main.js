let userName = document.querySelector('.user__name');
let info = document.querySelector('.user__info');
let userInfo = document.querySelectorAll('.user__info-text');
let editForm = document.forms.editForm;
let elements = editForm.elements;
let editProfBtn = document.querySelector('#editProf');


//Проверка наличия кл.ча в локальном хранилище
if (localStorage.getItem('htmlLS')) {
    info.innerHTML = localStorage.getItem('htmlLS');
}


// Клик по кнопке "Редактировать профиль" (при клике на кнопку к форму добавляется класс актив)
editProfBtn.addEventListener('click', ()=> {
    editForm.classList.add('active');
})

// Клик по кнопке "Закрыть форму" (при клике на кнопку удаляется класс актив)
elements.closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    editForm.classList.remove('active');
})

//Клик на кнопку "Сохранить изменения" (при клике на кнопку заполняются данные)
elements.saveBtn.addEventListener('click', (e) => {
    //Отмена действия по умолчанию 
    e.preventDefault();
    //Получить имя
    userName.textContent = elements.userName.value;
    //Получить город
    userInfo[0].textContent = elements.city.value;
    //Получить локацию УчебЗавед
    userInfo[1].textContent = elements.learnLocation.value;
    //Записать в локальное хранилище
    localStorage.setItem('htmlLS', info.innerHTML);
    //Сброс всех полей формы к начальным значениям
    editForm.reset();
})


// localStorage.setItem ('ключ', 'значение')

localStorage.setItem('Name', 'Vladimir');

//localStorage.getItem('ключ')

console.log(localStorage.getItem('Name'));

