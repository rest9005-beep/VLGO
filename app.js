// VLGO Application Initialization
console.log('%cVLGO Video Chat initialized', 'color: #4CAF50; font-weight: bold;');

// Добавьте функцию для показа приветствия
function showWelcomeFeatures() {
    const welcome = document.querySelector('.welcome-message .features');
    if (welcome) {
        setTimeout(() => {
            welcome.style.opacity = '1';
            welcome.style.transform = 'translateY(0)';
        }, 500);
    }
}

// Обновите функцию initApp
function initApp() {
    setupEventListeners();
    setInterval(updateOnlineStatus, 30000);
    showWelcomeFeatures();
    
    // Показываем уведомление о функциях
    if (currentUser) {
        setTimeout(() => {
            console.log('VLGO готов к использованию!');
            console.log('Доступные функции:');
            console.log('1. Видеозвонки с друзьями');
            console.log('2. Демонстрация экрана');
            console.log('3. Групповые чаты');
            console.log('4. Голосовые звонки');
            console.log('5. Личные сообщения');
        }, 1000);
    }
}

// ... остальной код app.js остается таким же ...