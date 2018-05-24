// data is an 'object'. Objects store data, we use them to display things in our app.
const data = {
  // A new data item can represent a piece of 'state' of the app. This object 'valid' will allow us to keep track of the validity of the data the user is giving us.
  valid: {
    description: true,
    amount: true,
  },
  // We will use the id of an expense to determine if we should be adding or updating an item and reuse the create form.
  // Since we aren't editing in the very beginning, this should be null.
  editingId: null,
  // We can store our message here. We can grab it any time with 'data.message'.
  message: 'Hello World!',
  description: '',
  amount: '',
  // Expenses is a list, it can hold multiple things like an object, but access them with numbers instead of names.'
  expenses: [],
  // We are now grabbing our expenses from the server, so we can get rid of our mock data!
}

// Make our data available to our other files.
export default data
