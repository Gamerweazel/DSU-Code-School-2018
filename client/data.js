// data is an 'object'. Objects store data, we use them to display things in our app.
const data = {
  // A new data item can represent a piece of 'state' of the app. This object 'valid' will allow us to keep track of the validity of the data the user is giving us.
  valid: {
    description: true,
    amount: true,
  },
  // We can store our message here. We can grab it any time with 'data.message'.
  message: 'Hello World!',
  description: '',
  amount: '',
  // Expenses is a list, it can hold multiple things like an object, but access them with numbers instead of names.'
  expenses: [
    // Each expense is another object. We call this 'nesting' objects inside other objects.
    {
      // Adding a unique identifier is paramount to all the CRUD operations.
      id: 0,
      amount: 15.06,
      description: 'Groceries',
      // This is from the date library we included in our index.html
      date: moment().subtract(1, 'days').format('MMMM Do, YYYY'),
    },
    {
      id: 1,
      amount: 10.99,
      description: 'Movie Ticket',
      date: moment().subtract(1, 'months').format('MMMM Do, YYYY'),
    },
    {
      id: 2,
      amount: 29.99,
      description: 'Oil Change',
      date: moment().subtract(3, 'months').format('MMMM Do, YYYY'),
    },
  ]
}

// Make our data available to our other files.
export default data
