// We use the fetch api in order to make requests to our server.
// It's important to note that even though our code for client and server are close in proximity, they know nothing of each other and must communicate over a network.
const getExpenses = () =>
  fetch('/expenses')
    .then(res => res.json())

const createExpense = expense =>
  fetch('/expenses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(expense)
  })
    .then(res => res.json())

const updateExpense = (id, expense) =>
  fetch(`/expenses/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(expense)
  })

const deleteExpense = id =>
  fetch(`/expenses/${id}`, { method: 'DELETE' })


export default {
  getExpenses,
  createExpense,
  updateExpense,
  deleteExpense,
}
