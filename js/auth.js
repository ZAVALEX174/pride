// Весь исправленный код
class TabSystem {
    constructor(container) {
        this.container = document.querySelector(container);
        this.buttons = this.container.querySelectorAll('.sign-btn');
        this.contents = this.container.querySelectorAll('.auth-tabs-content .sign-tab-content');

        this.init();
    }

    init() {
        this.buttons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.switchTab(btn);
            });
        });

        // Активация первой вкладки
        this.switchTab(this.buttons[0]);
    }

    switchTab(activeBtn) {
        // Сбрасываем активные состояния
        this.buttons.forEach(btn => btn.classList.remove('sign-active'));
        this.contents.forEach(content => content.classList.remove('sign-tab-active'));

        // Устанавливаем новые
        activeBtn.classList.add('sign-active');
        const targetTabId = activeBtn.dataset.tab;
        const targetTab = document.getElementById(targetTabId);

        if(targetTab) {
            targetTab.classList.add('sign-tab-active');
        }

        const isSignUp = targetTabId === 'signup-btn';
        document.querySelector('.signin-title').classList.toggle('none', isSignUp);
        document.querySelector('.signup-title').classList.toggle('none', !isSignUp);
        document.querySelector('.signin-subtitle').classList.toggle('none', isSignUp);
        document.querySelector('.signup-subtitle').classList.toggle('none', !isSignUp);
    }
}

// Инициализация после полной загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.modal-auth');
    if(container) {
        new TabSystem('.modal-auth');
    }
});