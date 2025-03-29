const container = document.querySelector('.personal-account');
const buttons = container.querySelectorAll('.tab-button');
const contents = container.querySelectorAll('.tab-content');

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
