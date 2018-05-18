// data is an 'object'. Objects store data, we use them to display things in our app.
const data = {
  // We can store our message here. We can grab it any time with 'data.message'.
  message: 'Hello World!',
  // Expenses is a list, it can hold multiple things like an object, but access them with numbers instead of names.'
  expenses: [
    // Each expense is another object. We call this 'nesting' objects inside other objects.
    { amount: 15.06, description: 'Groceries' },
    { amount: 10.99, description: 'Movie Ticket' },
    { amount: 29.99, description: 'Oil Change' },
  ]
}

// Make our data available to our other files.
export default data
