// Modal ================================

const Modal = {
    toggle() {
        // Toggle Modal
        // Add or Remove active class to Modal
        const modalOverlay = document.querySelector('.modal-overlay').classList.toggle("active");
    }
}

const newTransaction = document.querySelector('#newTransaction');
const closeTransaction = document.querySelector('#closeTransaction');

newTransaction.addEventListener('click', function () {
    Modal.toggle();
});

closeTransaction.addEventListener('click', function () {
    Modal.toggle();
});

// Transaction ================================

// const tBody = document.querySelector('#tBody');
// const form = document.querySelector('#modalForm');


// form.addEventListener('click', function (e) {
//     e.preventDefault();

//     const inputDesc = document.querySelector('#description');
//     const inputAmount = document.querySelector('#amount');
//     const inputDate = document.querySelector('#date');

//     createTransaction(inputDesc.value, inputAmount.value, inputDate.value);
// });

// const createTransaction = (inputDesc, inputAmount, inputDate) => {
//     let row = document.createElement('tr');
//     let desc = document.createElement('td');
//     desc.classList.add('description');
//     let amount = document.createElement('td');
//     let date = document.createElement('td');
//     date.classList.add('date');

//     desc.value = inputDesc.value;
//     amount.value = inputAmount.value;
//     date.value = inputDate.value;

//     // if (amount.value < 0) {
//     //     amount.classList.add('expense');
//     // } else {
//     //     amount.classList.add('income');
//     // };

//     row.append(desc);
//     row.append(amount);
//     row.append(date);
//     tBody.append(row);
// };


