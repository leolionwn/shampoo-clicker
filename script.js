let clickCount = 0;
const promoCodes = {
    10: "Промокод на 5%: CODE5",
    20: "Промокод на 10%: CODE10",
    30: "Промокод на 20%: CODE20",
    50: "Промокод на 50%: CODE50"
};

// Загрузка сохраненного количества кликов при загрузке страницы
window.onload = () => {
    clickCount = parseInt(localStorage.getItem('clickCount')) || 0;
    document.getElementById("click-count").innerText = `Клики: ${clickCount}`;
    updateRewardMessage(); // обновить сообщение с промокодом
}

// Обработчик клика по изображению
function handleClick() {
    clickCount++;
    localStorage.setItem('clickCount', clickCount);
    document.getElementById("click-count").innerText = `Клики: ${clickCount}`;
    updateRewardMessage();
}

// Обновление сообщения с промокодом
function updateRewardMessage() {
    const rewardMessage = document.getElementById("reward-message");
    if (promoCodes[clickCount]) {
        rewardMessage.innerText = promoCodes[clickCount];
    } else {
        rewardMessage.innerText = "";
    }
}

// Отображение доступных промокодов
function showPromoCodes() {
    const promoList = Object.keys(promoCodes)
        .filter(clicks => clickCount >= clicks)
        .map(clicks => promoCodes[clicks])
        .join("<br>");
    document.getElementById("promo-codes").innerHTML = promoList || "Промокодов пока нет.";
    document.getElementById("promo-codes").style.display = "block";
}
