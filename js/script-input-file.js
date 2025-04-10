const MAX_FILES = 3;
const fileInput = document.getElementById('fileInput');
const progressContainer = document.getElementById('progressContainer');
const progressText = document.getElementById('progressText');
const fileList = document.getElementById('fileList');
const deleteAllBtn = document.getElementById('deleteAllBtn');
const warningMessage = document.querySelector('.warning');
const fileBox = document.querySelector('.file-list');
let uploadInterval;
let currentFiles = new DataTransfer();
let pendingFiles = []; // Файлы, ожидающие отображения

fileInput.addEventListener('change', function (e) {
    const newFiles = Array.from(e.target.files);
    const availableSlots = MAX_FILES - currentFiles.items.length;

    // Сбрасываем только UI предупреждения
    warningMessage.style.display = 'none';

    // Проверка 1: Если места нет
    if (availableSlots <= 0) {
        warningMessage.style.display = 'block';
        fileInput.files = currentFiles.files; // Восстанавливаем предыдущие файлы
        return;
    }

    // Проверка 2: Новых файлов больше доступных слотов
    if (newFiles.length > availableSlots) {
        warningMessage.style.display = 'block';
        fileInput.files = currentFiles.files; // Восстанавливаем предыдущие файлы
        return;
    }

    // Проверка на дубликаты
    const duplicateFiles = newFiles.filter(newFile =>
        Array.from(currentFiles.files).some(existingFile =>
            existingFile.name === newFile.name &&
            existingFile.size === newFile.size
        )
    );

    if (duplicateFiles.length > 0) {
        const duplicateNames = duplicateFiles.map(f => `• ${f.name}`).join('\n');
        // alert(`Дубликаты:\n${duplicateNames}`);
        fileInput.files = currentFiles.files; // Восстанавливаем предыдущие файлы
        return;
    }

    // Добавление новых файлов
    newFiles.slice(0, availableSlots).forEach(file => {
        currentFiles.items.add(file);
    });

    // Синхронизация с инпутом
    fileInput.files = currentFiles.files;
    pendingFiles = Array.from(currentFiles.files);
    startProgress();
});

// Добавьте эту функцию для проверки
// function logCurrentFiles() {
//     console.log('Текущие файлы:', Array.from(fileInput.files).map(f => f.name));
//     console.log('Количество файлов:', fileInput.files.length);
// }


function startProgress() {
    fileBox.style.display = 'flex';
    warningMessage.style.display = 'none';
    let progress = 0;
    fileList.innerHTML = ''; // Очищаем список перед началом новой загрузки
    progressContainer.classList.remove('hidden');
    deleteAllBtn.classList.add('hidden');

    uploadInterval = setInterval(() => {
        progress += 5;
        progressText.textContent = `Загрузка файлов ${progress}%`;

        if (progress >= 100) {
            clearInterval(uploadInterval);
            progressContainer.classList.add('hidden');
            deleteAllBtn.classList.remove('hidden');
            renderFileList(); // Показываем файлы только после завершения прогресса
        }
    }, 50);
}

function renderFileList() {
    fileList.innerHTML = '';
    pendingFiles.forEach((file, index) => {
        const item = document.createElement('div');
        item.className = 'file-item';
        item.innerHTML = `
        <div>${file.name}</div>
        <button class="delete-item-file" onclick="removeFile(${index})" style="margin-left: auto">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2181_45441)">
<path d="M14.7863 7.07153L13.5006 17.3572H4.50056L3.21484 7.07153" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.28613 4.5H16.7147" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.73438 4.12719V1.9029C5.73438 1.56191 5.86983 1.23488 6.11095 0.993764C6.35207 0.752646 6.6791 0.617188 7.02009 0.617188H10.8772C11.2182 0.617188 11.5453 0.752646 11.7864 0.993764C12.0275 1.23488 12.1629 1.56191 12.1629 1.9029V4.47433" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2181_45441">
<rect width="18" height="18" fill="white"/>
</clipPath>
</defs>
</svg>
</button>
      `;
        fileList.appendChild(item);
    });
}

function removeFile(index) {
    const newDataTransfer = new DataTransfer();
    pendingFiles.forEach((file, i) => {
        if (i !== index) newDataTransfer.items.add(file);
    });
    currentFiles = newDataTransfer;
    fileInput.files = currentFiles.files;
    pendingFiles = Array.from(fileInput.files);
    renderFileList();

    // console.log(pendingFiles.length, "длина");

    if (pendingFiles.length == 0) {
        deleteAllFiles();
    }
}


function deleteAllFiles() {
    currentFiles = new DataTransfer();
    fileInput.files = currentFiles.files; // Синхронизация
    // Очищаем DataTransfer
    currentFiles = new DataTransfer();
    // Очищаем файлы в инпуте
    fileInput.files = currentFiles.files;
    // Очищаем список файлов
    pendingFiles = [];
    // Очищаем DOM-элемент со списком
    fileList.innerHTML = '';
    // Скрываем кнопку удаления
    deleteAllBtn.classList.add('hidden');

    warningMessage.style.display = 'none';
    fileBox.style.display = 'none';

    // Добавляем сброс значения инпута для полной очистки
    fileInput.value = '';

    // Очищаем прогресс если активен
    if (uploadInterval) {
        clearInterval(uploadInterval);
        progressContainer.classList.add('hidden');
    }
}
