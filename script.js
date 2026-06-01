// Быстрый поиск элементов на странице
const qs = (selector) => document.querySelector(selector);
const question = qs(".question");
const gif = qs(".gif");
const yesBtn = qs(".yes-btn");
const noBtn = qs(".no-btn");

// 1. ЛОГИКА ДЛЯ КНОПКИ "ДА" (Показываем форму)
const handleYesClick = () => {
    // Скрываем старые элементы
    if (question) question.style.display = "none";
    if (gif) gif.style.display = "none";
    const btnGroup = qs(".btn-group");
    if (btnGroup) btnGroup.style.display = "none";

    // Показываем нашу анкету
    const successMessage = document.getElementById("success-message");
    if (successMessage) {
        successMessage.style.setProperty("display", "block", "important");
    }
};

// 2. ЛОГИКА ДЛЯ КНОПКИ "НЕТ" (Убегание)
const handleNoMouseOver = () => {
    // Получаем размеры кнопки, чтобы она не улетала за границы экрана
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    // Генерируем случайные координаты
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Делаем позиционирование абсолютным, чтобы кнопка могла свободно летать
    noBtn.style.position = "absolute";
    noBtn.style.left = ${randomX}px;
    noBtn.style.top = ${randomY}px;
};

// Привязываем действия к кнопкам
if (yesBtn) {
    yesBtn.addEventListener("click", handleYesClick);
}

if (noBtn) {
    // На компьютерах кнопка убегает при наведении мыши
    noBtn.addEventListener("mouseover", handleNoMouseOver);
    // На телефонах кнопка убегает при первой попытке коснуться её пальцем
    noBtn.addEventListener("touchstart", handleNoMouseOver);
}
