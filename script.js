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