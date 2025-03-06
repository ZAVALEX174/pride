document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = Array.from(document.querySelectorAll('.product-card__swiper-slide2 img'));
    const modal = document.querySelector('.gallery-modal');
    const mainImage = modal.querySelector('.gallery-main-image');
    const thumbsContainer = modal.querySelector('.gallery-thumbs');
    let currentIndex = 0;

    // Собираем все изображения
    const images = galleryItems.map(img => ({
        src: img.closest('a').href,
        thumb: img.src
    }));

    // Создаем миниатюры
    images.forEach((img, index) => {
        const thumb = document.createElement('img');
        thumb.src = img.thumb;
        thumb.dataset.index = index;
        thumbsContainer.appendChild(thumb);
    });

    // Открытие модального окна
    galleryItems.forEach((img, index) => {
        img.addEventListener('click', (e) => {
            e.preventDefault();
            currentIndex = index;
            updateGallery();
            modal.style.display = 'block';
        });
    });

    // Закрытие модального окна
    modal.querySelector('.gallery-close').addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Переключение изображений
    modal.querySelector('.gallery-prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateGallery();
    });

    modal.querySelector('.gallery-next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateGallery();
    });

    // Клик по миниатюре
    thumbsContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            currentIndex = parseInt(e.target.dataset.index);
            updateGallery();
        }
    });

    // Обновление содержимого галереи
    function updateGallery() {
        mainImage.src = images[currentIndex].src;
        thumbsContainer.querySelectorAll('img').forEach((thumb, index) => {
            thumb.style.opacity = index === currentIndex ? '1' : '0.6';
        });
    }

    // Закрытие по клику вне изображения
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});