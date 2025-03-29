const container = document.querySelector('.personal-account');
const buttons = container.querySelectorAll('.tab-button');
const contents = container.querySelectorAll('.tab-content');

let scrollBarClient = document.documentElement.clientWidth;
let scrollBarAll = window.innerWidth;

if (container && buttons && contents) {
    class TabSystem {
        constructor(container) {
            this.container = document.querySelector(container);
            this.buttons = this.container.querySelectorAll('.tab-button');
            this.contents = this.container.querySelectorAll('.tab-content');

            this.init();
        }

        init() {
            this.buttons.forEach(btn => {
                btn.addEventListener('click', () => this.switchTab(btn));
            });

            // Восстановление активной вкладки при загрузке
            const savedTab = localStorage.getItem('activeTab');
            if (savedTab) {
                const tabBtn = document.querySelector(`.tab-button[data-tab-btn="${savedTab}"]`);
                if (tabBtn) this.switchTab(tabBtn);
            } else if (this.buttons.length > 0) {
                // Активация первой вкладки по умолчанию
                this.switchTab(this.buttons[0]);
            }
        }

        switchTab(activeBtn) {
            // Деактивируем все кнопки и контент
            this.buttons.forEach(btn => btn.classList.remove('tab-button__active'));
            this.contents.forEach(content => content.classList.remove('tab-content-active'));

            // Активируем выбранную
            activeBtn.classList.add('tab-button__active');
            const targetTabId = activeBtn.dataset.tabBtn; // Правильное обращение к data-tab-btn
            const targetTab = document.getElementById(targetTabId);

            if (targetTab) {
                targetTab.classList.add('tab-content-active');
                localStorage.setItem('activeTab', targetTabId);
            }
        }
    }

// Инициализация при загрузке страницы
    document.addEventListener('DOMContentLoaded', () => {
        new TabSystem('.personal-account');
    });
}

const histiryActiveBtn = document.getElementById('his-act');
const histiryBtn = document.getElementById('his');

if (histiryActiveBtn && histiryBtn) {
    class HistoryTabSystem {
        constructor(container) {
            this.container = document.querySelector(container);
            this.buttons = this.container.querySelectorAll('[data-tabs-history]');
            this.contents = this.container.querySelectorAll('.equipment-box-tab');

            this.init();
        }

        init() {
            this.buttons.forEach(btn => {
                btn.addEventListener('click', () => this.switchTab(btn));
            });

            // Активируем первую вкладку по умолчанию
            if (this.buttons.length > 0) {
                this.switchTab(this.buttons[0]);
            }
        }

        switchTab(activeBtn) {
            // Деактивируем все кнопки и контент
            this.buttons.forEach(btn => btn.classList.remove('personal-account-content-body__tabs-box-btn--active'));
            this.contents.forEach(content => content.style.display = 'none');

            // Активируем выбранную
            activeBtn.classList.add('personal-account-content-body__tabs-box-btn--active');
            const targetTab = document.getElementById(activeBtn.dataset.tabsHistory);
            if (targetTab) {
                targetTab.style.display = 'block';
            }
        }
    }

    // Инициализация при загрузке страницы
    document.addEventListener('DOMContentLoaded', () => {
        // Вкладки внутри "История заявок"
        new HistoryTabSystem('#tab-btn3 .personal-account-content-body');
    });
}

// Элементы
const modalOverlay = document.getElementById('modalOverlayAccount');
const modalOtbivkaOverlay = document.getElementById('modalOtbivka');
const openBtnConsultationForm = document.getElementById('consultation-btn');
const closeBtn = document.querySelector('.close-btn');
const closeBtnOtbivka = document.querySelector('.close-btn-otbivka');
const submitBtnConsultationForm = document.querySelector('.consultation-btn-form');

if (modalOverlay && modalOtbivkaOverlay) {
// Функции открытия/закрытия

// открытие modalOverlay
    function openModal() {
        modalOverlay.style.display = 'flex';
    }

// закрытие modalOverlay по кнопке submit и рикрытие отбивки
    function closeModal() {
        modalOverlay.style.display = 'none';
        openModalOtbivka();
    }

// закрыть modalOverlay по кнопке close
    function closeModalFirst() {
        modalOverlay.style.display = 'none';
    }

// открытие отбивки
    function openModalOtbivka() {
        modalOtbivkaOverlay.style.display = 'flex';
    }

// закрытие отбивки
    function closeModalOtbivka() {
        modalOtbivkaOverlay.style.display = 'none';
    }

// Обработчики событий
    openBtnConsultationForm.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModalFirst);
    submitBtnConsultationForm.addEventListener('click', closeModal);
    closeBtnOtbivka.addEventListener('click', closeModalOtbivka);

// Закрытие по клику на оверлей
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.style.display = 'none';
        }
    });

    modalOtbivkaOverlay.addEventListener('click', (e) => {
        if (e.target === modalOtbivkaOverlay) {
            modalOtbivkaOverlay.style.display = 'none';
        }
    });

// Закрытие по ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.style.display === 'flex') {
            modalOverlay.style.display = 'none';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOtbivkaOverlay.style.display === 'flex') {
            modalOtbivkaOverlay.style.display = 'none';
        }
    });

}

const problemsFeedbackBtns = document.querySelectorAll('.problems-feedback-btn');
const modalsConnection = document.getElementById('modal-contacts');
const modal = document.querySelector('.modals');

if (problemsFeedbackBtns && modalsConnection) {
    problemsFeedbackBtns.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('modals_opened');
            modalsConnection.classList.remove('none');
            modalsConnection.classList.remove('none');
            // document.documentElement.style.overflow = "hidden";
            document.body.style.overflow = "hidden";
            // document.body.style.paddingRight = `${scrollBarAll - scrollBarClient}px`;
        });
    })
}
// изменения 29_03_25

const modalFormZakaz = modal.querySelector('.modals-zakaz');
const closesModalFormZakaz = modalFormZakaz.querySelector('.modals-zakaz__btn');

const openFormBtn = document.querySelectorAll('.submit-application');
openFormBtn.forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        // document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
        // document.body.style.paddingRight = `${scrollBarAll - scrollBarClient}px`;
        modal.classList.add('modals_opened');
        modalFormZakaz.classList.remove('none');
    })
})