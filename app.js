const Modal = {
    open() {
        // Open Modal
        // Add active class to Modal
        const modalOverlay = document.querySelector('.modal-overlay').classList.add("active");
    },
    close() {
        // Close Modal
        // Remove active class from Modal
        const modalOverlay = document.querySelector('.modal-overlay').classList.remove("active");
    }
}

const newTransaction = document.querySelector('#newTransaction');
const closeTransaction = document.querySelector('#closeTransaction');

newTransaction.addEventListener('click', function () {
    Modal.open();
});

closeTransaction.addEventListener('click', function () {
    Modal.close();
});

