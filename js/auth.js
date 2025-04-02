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

        if (targetTab) {
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

    if (container) {
        new TabSystem('.modal-auth');
    }

    const auth = document.querySelector('.auth');
    const modalOverlay = document.getElementById('modalOverlayAuth');
    const openModalAuthBtn = document.querySelector('.header__user-btn');
    const closeModalAuthBtn = document.getElementById('close-modal-auth');
    const signinSubmitBtn = document.getElementById('signin-submit');
    const modalOverlayAuthOtbivka = document.getElementById('modalOverlayAuthOtbivka');
    const closeBtnModalOverlayAuthOtbivka = document.getElementById('modalCloseAuthOtbivka-close-btn');


    if (auth) {
        // открытие modalOverlay
        function openModal() {
            modalOverlay.classList.add('modal-overlay1');
        }

        // закрыть modalOverlay по кнопке close
        function closeModal() {
            modalOverlay.classList.remove('modal-overlay1');
        }

        // Закрытие по клику на оверлей
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('modal-overlay1');
            }
        });

        // Закрытие по клику на оверлей для отбивки
        modalOverlayAuthOtbivka.addEventListener('click', (e) => {
            if (e.target === modalOverlayAuthOtbivka) {
                modalOverlayAuthOtbivka.style.display = 'none';
            }
        });

        // Закрытие по ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalOverlay.classList.contains('modal-overlay1')) {
                modalOverlay.classList.remove('modal-overlay1');
            }
        });

        // открытие отбивки
        function openModalOtbivka() {
            modalOverlay.classList.remove('modal-overlay1');
            modalOverlayAuthOtbivka.style.display = 'flex';
        }

        // закрытие отбивки
        function closeModalOtbivka() {
            modalOverlayAuthOtbivka.style.display = 'none';
        }

        // закрытие modalOverlay по кнопке submit и рикрытие отбивки
        function closeModalSubmitBtn() {
            openModalOtbivka();
        }

        // Обработчики событий
        openModalAuthBtn.addEventListener('click', openModal);
        closeModalAuthBtn.addEventListener('click', closeModal);
        signinSubmitBtn.addEventListener('click', openModalOtbivka);
        closeBtnModalOverlayAuthOtbivka.addEventListener('click', closeModalOtbivka);
    }

});