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

const Errors = {
    message() {
    },
    toggle() {
        const errorMessage = document
        .getElementById('errorMessage')
        .classList.toggle("active")
    }
}

// Transaction ================================

const Transaction = {
    all: [
        {
            description: 'Energy',
            amount: -5000,
            date: '23/01/2021',
        },
        {
            description: 'Salary',
            amount: 200000,
            date: '24/01/2021',
        },
        {
            description: 'Gas',
            amount: -2500,
            date: '27/01/2021',
        },
        {
            description: 'Internet',
            amount: -19000,
            date: '30/01/2021',
        },
    ],

    add(transaction) {
        Transaction.all.push(transaction)
        App.reload()
    },

    remove(index) {
        Transaction.all.splice(index, 1)
        App.reload()
    },

    income (){
        // Count Income
        let income = 0
        Transaction.all.forEach(transaction => {
            if(transaction.amount > 0) {
                income += transaction.amount
            }
        } )        
        return income
    },

    expenses (){
        // Count Expenses
        let expense = 0
        Transaction.all.forEach(transaction => {
            if(transaction.amount < 0) {
                expense += transaction.amount
            }
        })
        return expense
    },

    total (){
        // Income - Expenses
        let total = this.income() + this.expenses()
        return total
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
    },

    updateBalance() {
        document
            .getElementById('incomeDisplay')
            .innerHTML = Utils.formatCurrency(Transaction.income())
        document
            .getElementById('expenseDisplay')
            .innerHTML = Utils.formatCurrency(Transaction.expenses())
        document
            .getElementById('totalDisplay')
            .innerHTML = Utils.formatCurrency(Transaction.total())
    },
    clearTransactions() {
        DOM.transactionsContainer.innerHTML = ""
    }
}

const Utils = {
    formatAmount(value) {
        value = Number(value) * 100

        return value
    },
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : ""
        value = String(value).replace(/\D/g, "")
        value = Number(value) / 100
        value = value.toLocaleString("en", {
            style: "currency",
            currency: "GBP",
        })

        return signal + value
    },
    formatDate(date) {
        const splittedDate = date.split("-")
        return `${splittedDate[2]}/${splittedData[1]}/${splittedDate[3]}`
    }
}

const Form = {
    description: document.querySelector('input#description'),
    amount: document.querySelector('input#amount'),
    date: document.querySelector('input#date'),

    getValues() {
        return {
            description: Form.description.value,
            amount: Form.amount.value,
            date: Form.date.value
        }
    },
    validateFields() {
        const { description, amount, date } = Form.getValues()

        if (
            description.trim() === "" || 
            amount.trim() === "" || 
            date.trim() === "" ) {
                throw new Error("Please, make sure to fill all of the camps")
            }
    },

    formatValues() {
        let { description, amount, date } = Form.getValues()
        amount = Utils.formatAmount(amount)
        date = Utils.formatDate(date)

        return {
            description,
            amount,
            date 
        }
    },

    saveTransaction() {
        Transaction.add(transaction)
    },

    submit(event) {
        event.preventDefault()
        try {
            Form.validateFields()
            const transaction = Form.formatValues()
            saveTransaction(transaction)
            Form.clearFields()
        } 
        catch (error) {
            Errors.toggle()
            errorMessage.innerHTML = error.message
        }
    }
}

const App = {
    init() {
        Transaction.all.forEach(transaction => {
            DOM.addTransaction(transaction)    
        })
        
        DOM.updateBalance()
    },
    reload() {
        DOM.clearTransactions()
        App.init()
    },

}

App.init()