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
const closeBtnOtbivkaProblems = document.querySelector('.close-btn-otbivka-problems');
const submitBtnConsultationForm = document.querySelector('.consultation-btn-form');
const modalCancelRequestOtbivka = document.getElementById('modalCancelRequestOtbivka');

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

// открытие отбивки Отменить заявку
    function openModalOtbivkaProblems() {
        modalCancelRequestOtbivka.style.display = 'flex';
    }

    // закрыть отбивки Отменить заявку
    function closeModalOtbivkaProblems() {
        modalCancelRequestOtbivka.style.display = 'none';
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
    closeBtnOtbivkaProblems.addEventListener('click', closeModalOtbivkaProblems);

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

    modalCancelRequestOtbivka.addEventListener('click', (e) => {
        if (e.target === modalCancelRequestOtbivka) {
            modalCancelRequestOtbivka.style.display = 'none';
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

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalCancelRequestOtbivka.style.display === 'flex') {
            modalCancelRequestOtbivka.style.display = 'none';
        }
    });

}

const problemsFeedbackBtns = document.querySelectorAll('.problems-feedback-btn');
const problemsFeedbackOtbivkaBtns = document.querySelectorAll('.problems-feedback-btn-otbivka');
const problemsCancelBtns = document.querySelectorAll('.problems-cancel-btn');
const modalsConnection = document.getElementById('modal-contacts');

const modal = document.querySelector('.modals');
const submitModalProblemsBtn = document.querySelector('.problems-cancel-btn--submit');

if (problemsFeedbackBtns && modalsConnection) {
    problemsFeedbackBtns.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            // // document.documentElement.style.overflow = "hidden";
            // document.body.style.overflow = "hidden";
            // // document.body.style.paddingRight = `${scrollBarAll - scrollBarClient}px`;
            openManagerTabs();
        });
    })
}

// открытие окна отбивки "проблемы"
if (problemsCancelBtns && modalCancelRequestOtbivka) {
    problemsCancelBtns.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            // // document.documentElement.style.overflow = "hidden";
            // document.body.style.overflow = "hidden";
            // // document.body.style.paddingRight = `${scrollBarAll - scrollBarClient}px`;

            openModalOtbivkaProblems();
        });
    })
}

if (problemsFeedbackOtbivkaBtns && modalsConnection) {
    problemsFeedbackOtbivkaBtns.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            // // document.documentElement.style.overflow = "hidden";
            // document.body.style.overflow = "hidden";
            // // document.body.style.paddingRight = `${scrollBarAll - scrollBarClient}px`;
            closeModalOtbivkaProblems();
            openManagerTabs();
        });
    })
}

// открытие и отправка заявки на отмену
if (submitModalProblemsBtn) {
    submitModalProblemsBtn.addEventListener('click', (e) => {
        // e.preventDefault();
        closeModalOtbivkaProblems();
    })
}

// изменения 29_03_25

const modalFormZakaz = modal.querySelector('.modals-zakaz');
const closesModalFormZakaz = modalFormZakaz.querySelector('.modals-zakaz__btn');

const openFormBtn = document.querySelectorAll('.submit-application');
openFormBtn.forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        // console.log("нужно перейти на вкладку личный менеджер!");
        // // document.documentElement.style.overflow = "hidden";
        // document.body.style.overflow = "hidden";
        // // document.body.style.paddingRight = `${scrollBarAll - scrollBarClient}px`;
        // modal.classList.add('modals_opened');
        // modalFormZakaz.classList.remove('none');
        openManagerTabs();
    })
});

const myEquipmentConsultation = document.getElementById('my-equipment-consultation');

myEquipmentConsultation.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log("И мне тоже нужно перейти на вкладку личный менеджер!");
    openManagerTabs();
})

const myEquipmentFavorites = document.getElementById('my-equipment-favorites');

myEquipmentFavorites.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("А я хочу перейти на вкладку Избранное!");
    openFavoritesTabs();
});

const equipmentItemBtns = document.querySelectorAll('.personal-account-content-body__equipment-item-btn--open-modal');
equipmentItemBtns.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        // console.log('ну и мы туда же!!!');
        openManagerTabs();
    })
})

const managerBtnTab = document.querySelector('.tab-button[data-tab-btn="tab-btn4"]');
const managerTab = document.getElementById('tab-btn4');

const favoritesBtnTab = document.querySelector('.tab-button[data-tab-btn="tab-btn2"]');
const favoritesTab = document.getElementById('tab-btn2');

function openManagerTabs() {
    buttons.forEach(btn => btn.classList.remove('tab-button__active'));
    contents.forEach(content => content.classList.remove('tab-content-active'));
    managerBtnTab.classList.add('tab-button__active');
    managerTab.classList.add('tab-content-active');
}

function openFavoritesTabs() {
    buttons.forEach(btn => btn.classList.remove('tab-button__active'));
    contents.forEach(content => content.classList.remove('tab-content-active'));
    favoritesBtnTab.classList.add('tab-button__active');
    favoritesTab.classList.add('tab-content-active');
}

// console.log(managerTab);