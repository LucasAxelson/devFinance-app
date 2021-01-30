// Modal ================================

const Modal = {
    toggle() {
        // Toggle Modal
        // Add or Remove active class to Modal
        const modalOverlay = document
        .querySelector('.modal-overlay')
        .classList.toggle("active")
    }
}

const newTransaction = document.querySelector('#newTransaction')
const closeTransaction = document.querySelector('#closeTransaction')

newTransaction.addEventListener('click', function () {
    Modal.toggle()
});

closeTransaction.addEventListener('click', function () { 
    Modal.toggle()
});

// Transaction ================================

const transactions = [
    {
        id: 1,
        description: 'Energy',
        amount: -5000,
        date: '23/01/2021',
    },
    {
        id: 2,
        description: 'Salary',
        amount: 200000,
        date: '24/01/2021',
    },
    {
        id: 3,
        description: 'Gas',
        amount: -2500,
        date: '27/01/2021',
    },
    {
        id: 4,
        description: 'Internet',
        amount: -19000,
        date: '30/01/2021',
    },
]

const Transaction = {
    income (){
        // Count Income

    },
    expenses (){
        // Count Expenses

    },
    total (){
        // Income - Expenses

    }
}

const DOM = {
    transactionsContainer: document.querySelector(`#data-table tbody`),
    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)
        DOM.transactionsContainer.appendChild(tr)
    },
    innerHTMLTransaction(transaction){
        const CSSclass = transaction.amount > 0 ? "income" : "expense"
        const amount = Utils.formatCurrency(transaction.amount)

        const html = `              
        <tr>
            <td class="description">${transaction.description}</td>
            <td class="${CSSclass}">${amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="/assets/minus.svg" alt="Remove Transaction">
            </td>
        </tr> 
        `

        return html
    }
    updateBalance() {
        document.getElementById
    }
}

const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : ""
        value = String(value).replace(/\D/g, "")
        value = Number(value) / 100
        value = value.toLocaleString("en", {
            style: "currency",
            currency: "GBP",
        })

        return signal + value
    }
}

transactions.forEach(function(transaction){
    DOM.addTransaction(transaction)    
})