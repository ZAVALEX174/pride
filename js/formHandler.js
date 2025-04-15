
  class FormHandler {
    constructor(formId) {
      this.MAX_FILES = 3;
      this.form = document.getElementById(formId);
      this.modals = document.querySelector('.modals');
      this.fileInput = this.form.querySelector('[name="files[]"]');
      this.progressContainer = this.form.querySelector('#progressContainer');
      this.progressText = this.form.querySelector('.progress-text');
      this.fileList = this.form.querySelector('.file-list > div:last-child'); // Для контейнера файлов
      this.deleteAllBtn = this.form.querySelector('.delete-all-btn');
      this.warningMessage = this.form.querySelector('.warning');
      this.fileBox = this.form.querySelector('.file-list');
      this.closeBtn = this.form.querySelector('.anketa-close');

      this.uploadInterval = null;
      this.currentFiles = new DataTransfer();
      this.pendingFiles = [];

      this.fio = this.form.querySelector('[name="user-name"]');
      this.phone = this.form.querySelector('[name="user-tel"]');
      this.country = this.form.querySelector('[name="country"]');
      this.email = this.form.querySelector('[name="user-email"]');
      this.message = this.form.querySelector('[name="dopoln"]');
  
      this.initialize();
    }
  
    initialize() {
      this.fileInput.addEventListener('change', (e) => this.handleFileSelect(e));
      this.deleteAllBtn.addEventListener('click', () => this.deleteAllFiles());
      this.fileList.addEventListener('click', (e) => {
        const deleteBtn = e.target.closest('.delete-item-file');
        if (deleteBtn) {
          const index = parseInt(deleteBtn.dataset.index);
          this.removeFile(index);
        }
      });
    }
  
    handleFileSelect(e) {      
      const newFiles = Array.from(e.target.files);
      const availableSlots = this.MAX_FILES - this.currentFiles.items.length;
  
      this.warningMessage.style.display = 'none';
  
      if (availableSlots <= 0 || newFiles.length > availableSlots) {
        this.warningMessage.style.display = 'block';
        this.fileInput.files = this.currentFiles.files;
        return;
      }
  
      const duplicateFiles = newFiles.filter(newFile =>
        Array.from(this.currentFiles.files).some(existingFile =>
          existingFile.name === newFile.name &&
          existingFile.size === newFile.size
        )
      );
  
      if (duplicateFiles.length > 0) {
        this.fileInput.files = this.currentFiles.files;
        return;
      }
  
      newFiles.slice(0, availableSlots).forEach(file => {
        this.currentFiles.items.add(file);
      });
  
      this.fileInput.files = this.currentFiles.files;
      this.pendingFiles = Array.from(this.currentFiles.files);
      this.startProgress();
    }
  
    startProgress() {
      this.fileBox.style.display = 'flex';
      this.warningMessage.style.display = 'none';
      let progress = 0;
      this.fileList.innerHTML = '';
      this.progressContainer.classList.remove('hidden');
      this.deleteAllBtn.classList.add('hidden');
  
      this.uploadInterval = setInterval(() => {
        progress += 5;
        this.progressText.textContent = `Загрузка файлов ${progress}%`;
  
        if (progress >= 100) {
          clearInterval(this.uploadInterval);
          this.progressContainer.classList.add('hidden');
          this.deleteAllBtn.classList.remove('hidden');
          this.renderFileList();
        }
      }, 50);
    }
  
    renderFileList() {
      this.fileList.innerHTML = '';
      this.pendingFiles.forEach((file, index) => {
        const item = document.createElement('div');
        item.className = 'file-item';
        item.innerHTML = `
          <div>${file.name}</div>
          <button class="delete-item-file" data-index="${index}">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_2181_45441)">
              <path d="M14.7863 7.07153L13.5006 17.3572H4.50056L3.21484 7.07153" stroke="#2B2A29" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1.28613 4.5H16.7147" stroke="#2B2A29" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5.73438 4.12719V1.9029C5.73438 1.56191 5.86983 1.23488 6.11095 0.993764C6.35207 0.752646 6.6791 0.617188 7.02009 0.617188H10.8772C11.2182 0.617188 11.5453 0.752646 11.7864 0.993764C12.0275 1.23488 12.1629 1.56191 12.1629 1.9029V4.47433" stroke="#2B2A29" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_2181_45441">
              <rect width="18" height="18" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </button>
        `;
        this.fileList.appendChild(item);
      });
    }
  
    removeFile(index) {
      const newDataTransfer = new DataTransfer();
      this.pendingFiles.forEach((file, i) => {
        if (i !== index) newDataTransfer.items.add(file);
      });
      this.currentFiles = newDataTransfer;
      this.fileInput.files = this.currentFiles.files;
      this.pendingFiles = Array.from(this.fileInput.files);
      this.renderFileList();
  
      if (this.pendingFiles.length === 0) {
        this.deleteAllFiles();
      }
    }
  
    deleteAllFiles() {
      this.currentFiles = new DataTransfer();
      this.fileInput.files = this.currentFiles.files;
      this.pendingFiles = [];
      this.fileList.innerHTML = '';
      this.deleteAllBtn.classList.add('hidden');
      this.warningMessage.style.display = 'none';
      this.fileBox.style.display = 'none';
      this.fileInput.value = '';
  
      if (this.uploadInterval) {
        clearInterval(this.uploadInterval);
        this.progressContainer.classList.add('hidden');
      }
    }

   //Удаляем класс ошибки
    removeErrorStyle(e){    
      if (e.classList.contains('error'))
          e.classList.remove('error');        
    };

    addErrorStyle(e){             
      for (let i=0; i < e.length; i++) {          
          this.form.querySelector(`[name="${e[i]}"]`).classList.add('error');
      }      
      this.fio.addEventListener('focus', (e) => this.removeErrorStyle(e.target));      
      this.phone.addEventListener('focus', (e) => this.removeErrorStyle(e.target)); 
      this.country.addEventListener('focus', (e) => this.removeErrorStyle(e.target)); 
      this.email.addEventListener('focus', (e) => this.removeErrorStyle(e.target)); 
      this.message.addEventListener('focus', (e) => this.removeErrorStyle(e.target));
    }

   success(SuccessModalId, title, text) {    
    this.successForm = this.modals.querySelector(`#${SuccessModalId}`);
    this.successForm.querySelector('h3').innerText = title;
    this.successForm.querySelector('div').querySelector('div').innerText = text;
    this.form.classList.add('none');
    this.successForm.classList.remove('none');
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollBarAll - scrollBarClient}px`;   
  }

  /*addFormListeners() {
    document.querySelector('#modal-contacts').querySelector('.anketa-close').addEventListener('click', () => {    
    closeModals();});
  }*/
}

/*
BX.ready(function(){ 
  console.log("BX.ready");
});

BX.addCustomEvent('onAjaxSuccess', function() {    
  console.log("onAjaxSuccess");  
});*/

let form;
  // Инициализация для обеих форм
  //const applicationForm = new FileUploader('modal-submit-your-application');
  //const paymentForm = new FileUploader('modal-payment');
  //const questionForm = new FileUploader('modal-question');
  //const contactsForm = new FormHandler('modal-contacts');  
  
