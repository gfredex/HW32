const taskBlock = document.querySelector('.task-first');
const lang = document.getElementById('lang');
const fontSize = document.getElementById('curent-size');

function loadDataPage() {
    const saveTheme = sessionStorage.getItem('theme');
    const saveLang = sessionStorage.getItem('lang');
    const saveFontSize = sessionStorage.getItem('fontSize');

    if (saveTheme) {
        taskBlock.className = saveTheme;
    }

    if (saveLang) {
        lang.value = saveLang;
    }

    if (saveFontSize) {
        fontSize.textContent = saveFontSize;
        taskBlock.style.fontSize = saveFontSize;
    } else {
        fontSize.textContent = getComputedStyle(taskBlock).fontSize;
    }
};


loadDataPage();

const btnTheme = document.getElementById('btn-theme');
btnTheme.addEventListener('click', () => {
    const currentTheme = taskBlock.classList.contains('light');
    if (currentTheme) {
        taskBlock.className = 'task-first dark';
        sessionStorage.setItem('theme', 'task-first dark');
    } else {
        taskBlock.className = 'task-first light';
        sessionStorage.setItem('theme', 'task-first light');
    }
});

lang.addEventListener('change', () => {
    sessionStorage.setItem('lang', lang.value);
});

const btnIncFont = document.getElementById('pluse');
btnIncFont.addEventListener('click', () => {
    const currentFontSize = getComputedStyle(taskBlock).fontSize;
    let newFontSize = 1 + parseInt(currentFontSize.match(/\d+/)[0]) + 'px';
    taskBlock.style.fontSize = newFontSize;
    fontSize.textContent = newFontSize;
    sessionStorage.setItem('fontSize', newFontSize);
});

const btnDownFont = document.getElementById('minus');

btnDownFont.addEventListener('click', () => {
    const currentFontSize = getComputedStyle(taskBlock).fontSize;
    let newFontSize = parseInt(currentFontSize.match(/\d+/)[0]) - 1 + 'px';
    taskBlock.style.fontSize = newFontSize;
    fontSize.textContent = newFontSize;
    sessionStorage.setItem('fontSize', newFontSize);
});

const userForm = document.getElementById('user-form');
const userName = document.getElementById('user-name');
const userPass = document.getElementById('user-pass');
userForm.addEventListener('click', (e) => {
    e.preventDefault();
    const userData = {
        user: userName.value,
        password: userPass.value
    }
    if (e.target.id == 'btn-reg') {
        //  localStorage.setItem('user', )  
        if (userName.value.length > 0 && userPass.value.length > 0) {
            // console.log(JSON.stringify(userData));
            userName.style.borderColor = 'green';
            userPass.style.borderColor = 'green';
            localStorage.setItem('myUser', JSON.stringify(userData))
        } else {
            alert('Данные не заполнены!')
            userName.style.borderColor = 'red';
            userPass.style.borderColor = 'red';
        }
    }

    // console.log();

});

document.addEventListener('DOMContentLoaded', () => {
    const userData = JSON.parse(localStorage.getItem('myUser'));
    userName.value = userData.user;
    userPass.value = userData.password;
});