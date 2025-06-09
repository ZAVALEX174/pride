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

      document.querySelector('.personal-account-content__application-form').classList.add('none');
      document.querySelector('.personal-account-content').classList.remove('none');

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
const btnFormApplication = document.querySelector('.application-form-product-form-form-btn');
const closeBtn = document.querySelector('.close-btn');
const closeBtnOtbivka = document.querySelector('.close-btn-otbivka');
const closeBtnsOtbivkaProblems = document.querySelectorAll('.close-btn-otbivka-problems');
const submitBtnConsultationForm = document.querySelector('.consultation-btn-form');
const modalCancelRequestOtbivka = document.getElementById('modalCancelRequestOtbivka');
const modalFormApplicationOtbivka = document.getElementById('modalApplicationOtbivka');

if (modalOverlay && modalOtbivkaOverlay) {
// Функции открытия/закрытия


// открытие modalOverlay
  function openModal() {
    modalOverlay.style.display = 'flex';
  }

// закрытие modalOverlay по кнопке submit
  function closeModal() {
    modalOverlay.style.display = 'none';
    // openModalOtbivka();
  }

// закрыть modalOverlay по кнопке close
  function closeModalFirst() {
    modalOverlay.style.display = 'none';
  }

// открытие отбивки Заявка успешно принята! для формы modalOverlay (id="modalOverlayAccount")
  function openModalOtbivka() {
    modalOtbivkaOverlay.style.display = 'flex';
  }

// открытие отбивки Отменить заявку
  function openModalOtbivkaProblems() {
    modalCancelRequestOtbivka.style.display = 'flex';
  }

  // закрыть отбивки Отменить заявку и отбивки modalFormApplicationOtbivka
  function closeModalOtbivkaProblems() {
    modalCancelRequestOtbivka.style.display = 'none';
    modalFormApplicationOtbivka.style.display = 'none';
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
  closeBtnsOtbivkaProblems.forEach(btn => {
    btn.addEventListener('click', closeModalOtbivkaProblems);

  })
  btnFormApplication.addEventListener('click', (e) => {
    e.preventDefault();
    openFormApplicationOtbivka();
  });

  function openFormApplicationOtbivka() {
    modalFormApplicationOtbivka.style.display = 'flex';
  }


// Закрытие по клику на оверлей
  modalFormApplicationOtbivka.addEventListener('click', (e) => {
    if (e.target === modalFormApplicationOtbivka) {
      modalFormApplicationOtbivka.style.display = 'none';
    }
  });

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
    if (e.key === 'Escape' && modalFormApplicationOtbivka.style.display === 'flex') {
      modalFormApplicationOtbivka.style.display = 'none';
    }
  });

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
const problemsCancelBtnRoutManager = document.querySelectorAll('.personal-account-content__application-form__header-btn');
const modalsConnection = document.getElementById('modal-contacts');

const modals = document.querySelector('.modals');
const submitModalProblemsBtns = document.querySelectorAll('.problems-cancel-btn--submit');

if (problemsFeedbackBtns && modalsConnection) {
  problemsFeedbackBtns.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      openManagerTabs();
      document.querySelector('.personal-account-content__application-form').classList.add('none');
      document.querySelector('.personal-account-content').classList.remove('none');
    });
  })
}

// открытие окна отбивки "проблемы"
if (problemsCancelBtns && modalCancelRequestOtbivka) {
  problemsCancelBtns.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      openModalOtbivkaProblems();
    });
  })
}

if (problemsFeedbackOtbivkaBtns && modalsConnection) {
  problemsFeedbackOtbivkaBtns.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      closeModalOtbivkaProblems();
      openManagerTabs();
      document.querySelector('.personal-account-content__application-form').classList.add('none');
      document.querySelector('.personal-account-content').classList.remove('none');
      document.querySelector('.personal-account-aside__content').classList.remove('none');
      document.querySelector('.personal-account-aside__application-form').classList.add('none');
    });
  })
}

// открытие и отправка заявки на отмену
if (submitModalProblemsBtns) {
  submitModalProblemsBtns.forEach(item => {
    item.addEventListener('click', (e) => {
      // e.preventDefault();
      closeModalOtbivkaProblems();
    })
  })
}

// изменения 29_03_25

const modalFormZakaz = modal.querySelector('.modals-zakaz');
const closesModalFormZakaz = modalFormZakaz.querySelector('.modals-zakaz__btn');

const openFormBtn = document.querySelectorAll('.submit-application');

if (openFormBtn) {
  openFormBtn.forEach(el => {
    el.addEventListener('click', (e) => {
      // e.preventDefault();
      // openManagerTabs();
      document.querySelector('.personal-account-content__application-form').classList.remove('none');
      document.querySelector('.personal-account-content').classList.add('none');
      document.querySelector('.personal-account-aside__content').classList.add('none');
      document.querySelector('.personal-account-aside__application-form').classList.remove('none');
    })
  });
}


const myEquipmentConsultation = document.getElementById('my-equipment-consultation');
const helpConsultation = document.getElementById('help-conultation');

if (myEquipmentConsultation) {
  myEquipmentConsultation.addEventListener('click', (e) => {
    e.preventDefault();
    openManagerTabs();
    document.querySelector('.personal-account-content__application-form').classList.add('none');
    document.querySelector('.personal-account-content').classList.remove('none');
    document.querySelector('.personal-account-aside__content').classList.remove('none');
  })
}

if (helpConsultation) {
  helpConsultation.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log("И мне тоже нужно перейти на вкладку личный менеджер!");
    openManagerTabs();
    document.querySelector('.personal-account-content__application-form').classList.add('none');
    document.querySelector('.personal-account-content').classList.remove('none');

  })
}

const myEquipmentFavorites = document.getElementById('my-equipment-favorites');

if (myEquipmentFavorites) {
  myEquipmentFavorites.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("А я хочу перейти на вкладку Избранное!");
    openFavoritesTabs();
    document.querySelector('.personal-account-content__application-form').classList.add('none');
    document.querySelector('.personal-account-content').classList.remove('none');
  });
}

const equipmentItemBtns = document.querySelectorAll('.personal-account-content-body__equipment-item-btn--open-modal');

if (equipmentItemBtns) {
  equipmentItemBtns.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      // openManagerTabs();
      document.querySelector('.personal-account-content__application-form').classList.remove('none');
      document.querySelector('.personal-account-content').classList.add('none');
      document.querySelector('.personal-account-aside__content').classList.add('none');
      document.querySelector('.personal-account-aside__application-form').classList.remove('none');
    })
  })
}

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

// переделка 05-06-25
// Объект для хранения данных пользователя
const clientData = {
  name: '',
  surname: '',
  patronymic: '',
  call: '',
  mail: '',
  urid: '',
  inn: ''
};

// Конфигурация полей
const fieldsConfig = [
  {
    buttonId: 'setting-data-client-name',
    inputId: 'data-client-name-input',
    displaySelector: '[data-client-name="data_client_name"]',
    additionalDisplaySelector: '.personal-account-aside__information-text-name'
  },
  {
    buttonId: 'setting-data-client-surname',
    inputId: 'data-client-surname-input',
    displaySelector: '[data-client-surname="data_client_surname"]',
    additionalDisplaySelector: '.personal-account-aside__information-text-surname'
  },
  {
    buttonId: 'setting-data-client-patronymic',
    inputId: 'data-client-patronymic-input',
    displaySelector: '[data-client-patronymic="data_client_patronymic"]',
    additionalDisplaySelector: '.personal-account-aside__information-text-patronymic'
  },
  {
    buttonId: 'setting-data-client-call',
    inputId: 'data-client-call-input',
    displaySelector: '[data-client-call="data_client_call"]',
    additionalDisplaySelector: '.personal-account-aside__information-text-contacts'
  },
  {
    buttonId: 'setting-data-client-mail',
    inputId: 'data-client-mail-input',
    displaySelector: '[data-client-mail="data_client_mail"]'
  },
  {
    buttonId: 'setting-data-client-urid',
    inputId: 'data-client-urid-input',
    displaySelector: '[data-client-name="data_client_urid"]',
    additionalDisplaySelector: '.personal-account-aside__information-text-company'
  },
  {
    buttonId: 'setting-data-client-inn',
    inputId: 'data-client-inn-input',
    displaySelector: '[data-client-name="data_client_inn"]'
  }
];

// Инициализация полей
const fields = fieldsConfig.map(config => {
  const button = document.getElementById(config.buttonId);
  const input = document.getElementById(config.inputId);
  const display = document.querySelector(config.displaySelector);
  const additionalDisplay = config.additionalDisplaySelector
    ? document.querySelector(config.additionalDisplaySelector)
    : null;

  return {
    button,
    input,
    display,
    additionalDisplay,
    id: config.buttonId.replace('setting-data-client-', '')
  };
});

// Обработчики для кнопок редактирования
fields.forEach(field => {
  if (field.button && field.input && field.display) {
    field.button.addEventListener('click', e => {
      e.preventDefault();
      field.input.placeholder = field.display.textContent;
      field.input.classList.remove('none');
    });
  }
});

// изменения от 060625
// Обработчик сохранения с AJAX-отправкой
const saveSettingContactBtn = document.querySelector('.setting-contact-btn');
if (saveSettingContactBtn) {
  saveSettingContactBtn.addEventListener('click', async (e) => {
    e.preventDefault();

    // Показываем индикатор загрузки
    saveSettingContactBtn.disabled = true;
    saveSettingContactBtn.textContent = 'Сохранение...';

    // Собираем данные для отправки
    const formData = {};
    let hasChanges = false;

    fields.forEach(field => {
      if (field.input) {
        const value = field.input.value.trim();
        const currentValue = field.display.textContent.trim();

        if (value && value !== currentValue) {
          formData[field.id] = value;
          hasChanges = true;

          // Локальное обновление
          field.display.textContent = value;
          if (field.additionalDisplay) {
            field.additionalDisplay.textContent = value;
          }
        }

        field.input.classList.add('none');
        field.input.value = '';
      }
    });

    // Если есть изменения - отправляем на сервер
    if (hasChanges) {
      try {
        const response = await fetch('/api/update-profile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': getCSRFToken() // Функция для получения CSRF-токена
          },
          body: JSON.stringify(formData)
        });

        if (!response.ok) {
          throw new Error('Ошибка сервера');
        }

        const result = await response.json();
        showNotification('Данные успешно сохранены!', 'success');

      } catch (error) {
        console.error('Ошибка:', error);
        showNotification('Ошибка сохранения: ' + error.message, 'error');
        // Можно добавить откат изменений
      }
    } else {
      showNotification('Нет изменений для сохранения', 'info');
    }

    // Восстанавливаем кнопку
    saveSettingContactBtn.disabled = false;
    saveSettingContactBtn.textContent = 'Сохранить изменения';
  });
}

// Вспомогательные функции
function getCSRFToken() {
  return document.querySelector('meta[name="csrf-token"]')?.content || '';
}

function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => notification.classList.add('show'), 10);
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Функция для показа уведомлений
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add('show');
  }, 10);

  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => document.body.removeChild(notification), 300);
  }, 3000);
}

// Добавляем базовые стили для уведомлений
const style = document.createElement('style');
style.textContent = `
  .notification {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 25px;
    border-radius: 5px;
    color: white;
    opacity: 0;
    transform: translateX(100%);
    transition: all 0.3s ease;
    z-index: 1000;
  }
  
  .notification.show {
    opacity: 1;
    transform: translateX(0);
  }
  
  .notification-success { background: #4CAF50; }
  .notification-error { background: #F44336; }
  .notification-info { background: #2196F3; }
`;
document.head.appendChild(style);
// изменения от 060625

// Выйти из аккаунта
const goBackBtn = document.querySelector('.go-back-btn');
const closeGoBackBtn = document.querySelector('.close-btn-otbivka-out-account');
const outGoBackBtn = document.querySelector('.out-account-btn');
const modalOverlayOutAccount = document.getElementById('modalOutAccountOtbivka');


if (modalOverlayOutAccount) {
  // закрытие modalOverlay по кнопке submit и рикрытие отбивки
  function closeModalOutAccount() {
    modalOverlayOutAccount.style.display = 'none';
    // openModalOtbivka();
  }

  function openModalOutAccount() {
    modalOverlayOutAccount.style.display = 'flex';
  }

  goBackBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('чтобы выйти, нужно включить модалку НОВУЮ');
    openModalOutAccount();
  })

  closeGoBackBtn.addEventListener('click', (e) => {
    closeModalOutAccount();
  })

  outGoBackBtn.addEventListener('click', (e) => {
    closeModalOutAccount();
  })

// Закрытие по ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlayOutAccount.style.display === 'flex') {
      modalOverlayOutAccount.style.display = 'none';
    }
  });

// Закрытие по клику на оверлей
  modalOverlayOutAccount.addEventListener('click', (e) => {
    if (e.target === modalOverlayOutAccount) {
      modalOverlayOutAccount.style.display = 'none';
    }
  });
}

const inputsFileBoxImg = document.querySelectorAll('.inputs-file-box input[type="file"]');


// Исправленный код
document.addEventListener("DOMContentLoaded", function () {
  // Находим ВСЕ блоки с аватарами
  const avatarBoxes = document.querySelectorAll('.avatar-box');

  // Обработчик для загрузки изображений
  avatarBoxes.forEach(box => {
    const input = box.querySelector('input[type="file"]');
    const previewImg = box.querySelector('.input-img img');
    const radioBtn = box.querySelector('.avatar-check');

    input.addEventListener('change', function (e) {
      const file = e.target.files[0];

      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          // Обновляем превью ТОЛЬКО в текущем блоке
          previewImg.src = e.target.result;
          previewImg.style.display = 'block';

          // Активируем радио-кнопку ТЕКУЩЕГО блока
          radioBtn.disabled = false;
          box.dataset.hasImage = true;
        };
        reader.readAsDataURL(file);
      }
    });
  });

  // Обработчик для выбора основного аватара
  document.querySelectorAll('.avatar-check').forEach(radio => {
    radio.addEventListener('change', function () {
      if (!this.disabled) {
        // Находим изображение в ВЫБРАННОМ блоке
        const selectedImg = this.closest('.avatar-box')
          .querySelector('.input-img img').src;

        // ИЗМЕНЕНИЯ ОТ 09-06-25 СОСТОЯНИЕ ВЫБРАННОГО АВАТАРА

        const allAvararCheck = document.querySelectorAll('.avatar-box');
        allAvararCheck.forEach(el => {
          el.classList.remove('ava-check');
        })

        const avaCheck = this.closest('.avatar-box').classList.add('ava-check');
        // ИЗМЕНЕНИЯ ОТ 09-06-25 СОСТОЯНИЕ ВЫБРАННОГО АВАТАРА

        // Обновляем основное изображение
        document.querySelector('.personal-account-aside__information-images img').src = selectedImg;
      }
    });
  });
});

//  кнопка Вернуться назад
function goBackPersonalAccount() {
  document.querySelector('.personal-account-content__application-form').classList.add('none');
  document.querySelector('.personal-account-content').classList.remove('none');
  document.querySelector('.personal-account-aside__content').classList.remove('none');
  document.querySelector('.personal-account-aside__application-form').classList.add('none');
}

const goBackPersonalAccountBtn = document.querySelector('.personal-account-aside__application-form-link');
console.log(goBackPersonalAccountBtn);

if (goBackPersonalAccountBtn) {
  goBackPersonalAccountBtn.addEventListener('click', () => {
    openManagerTabs();//должен возврвщаться на ту вкладку с которой зашел или страницу, пота сделал так(нужно будет Вам переделать)
    goBackPersonalAccount();
  });
}


// вывод контента  на стартовой странице
const startTabContentBox = document.getElementById('tab-btn1');
console.log(startTabContentBox);

if (startTabContentBox) {
  const submitApplicationBtn = startTabContentBox.querySelector('.submit-application');
  const seriesNumbernBtn = startTabContentBox.querySelector('.personal-account-content-body__input-box-btn');
  const getCount = startTabContentBox.querySelector('[data-count]');
  const equipmentBox = startTabContentBox.querySelector('.equipment-box');
  const seriesNumbersBox = startTabContentBox.querySelector('.series-numbers');
  // console.log(equipmentBox);

  // функция для вывода блока с оборудованием на страницу
  function dataOutput() {
    seriesNumbersBox.classList.add('none');
    submitApplicationBtn.classList.remove('none');
    getCount.classList.remove('none');
    equipmentBox.classList.remove('none');
  }

  // временно для показа работы функции
  seriesNumbernBtn.addEventListener('click', dataOutput);
}



