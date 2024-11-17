document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.btn');
    const storeItems = document.querySelectorAll('.store-item');
    const modal = document.getElementById('itemModal');
    const modalImage = document.getElementById('modalImage');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const closeBtn = document.querySelector('.close-btn');
    let currentItemIndex = 0;

    function openModal(item) {
        modal.style.display = 'flex';
        modalImage.src = item.querySelector('img').src;
        currentItemIndex = Array.from(storeItems).indexOf(item);
    }

    function closeModal() {
        modal.style.display = 'none';
        modal.classList.add('hide');
    }

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (currentItemIndex < storeItems.length - 1) {
            openModal(storeItems[currentItemIndex + 1]);
        }
    });

    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (currentItemIndex > 0) {
            openModal(storeItems[currentItemIndex - 1]);
        }
    });

    storeItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            openModal(item);
            currentItemIndex = index;
        });
    });

    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = e.target.dataset.filter;
            storeItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

