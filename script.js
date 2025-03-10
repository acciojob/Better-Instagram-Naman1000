//your code here
const boxes = document.querySelectorAll('.image');

let draggedElement = null;

// Event listeners for drag and drop
boxes.forEach(box => {
    box.addEventListener('dragstart', (e) => {
        draggedElement = e.target;
        setTimeout(() => {
            e.target.style.opacity = '0.5';
        }, 0);
    });

    box.addEventListener('dragend', (e) => {
        setTimeout(() => {
            e.target.style.opacity = '1';
            draggedElement = null;
        }, 0);
    });

    box.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    box.addEventListener('dragenter', (e) => {
        e.preventDefault();
        e.target.style.border = '2px dashed black';
    });

    box.addEventListener('dragleave', (e) => {
        e.target.style.border = 'none';
    });

    box.addEventListener('drop', (e) => {
        e.target.style.border = 'none';
        if (e.target !== draggedElement) {
            let draggedBg = draggedElement.style.backgroundImage;
            draggedElement.style.backgroundImage = e.target.style.backgroundImage;
            e.target.style.backgroundImage = draggedBg;
        }
    });
});
