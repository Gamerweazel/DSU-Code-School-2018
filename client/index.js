// We want something from another file so we ask for it. We should start our local server to request it.
import data from './data.js'
import api from './api.js'

// Vue instance. Controls the app logic.
// We can do additional things with the instance if we give a variable name.
const app = new Vue({
  // el, short for element. 'Hooks' into the div on index.html page
  el: '#app',
  created() {
    // Created is a lifecycle method, we are given opportunities to run code before and after our vue instance renders
    // We will fetch our expenses from our server and populate our expenses list.
    api.getExpenses()
      .then(expenses => this.expenses = expenses)
      .catch(e => console.log(e))
  },
  // Methods are where we can associate pieces of code to do different things in our app.
  methods: {
    isValid() {
      this.valid = {
        // We can now use this method to update our valid object. We will use this more detailed information to display messages to the user.
        // We didn't use the boolean caster before, they simple act as a caster like Number() for our amount. It will cast things like empty string '' or 0 to an explicit 'false'.
        description: Boolean(this.description),
        amount: Boolean(this.amount) && (!isNaN(Number(this.amount))),
      }
      // We will look over all fields in the 'this.valid' object and prevent the submission if any fail their respective check.
      // This allows us to extend our validations to many more fields will little code changes.
      for (const key in this.valid) {
        if (!this.valid[key])
          return false
      }
      return true
    },
    // This method is handling the @click directive on our button in index.html.
    saveExpense(e) {
      // We have access to our data items by prepending 'this' before the name.
      // This code will either update/add our expenses list according to what was currently in the inputs when the user saved them.
      // Because description and amount were bound to inputs with v-model, they will contain whatever text is in the input.
      if (this.isValid()) {
        // Since we are now able to update expenses, we have to determine if we are adding or updating, the editingId value will indicate which one.
        if (this.editingId !== null)
          this.updateExpense(this.editingId)
        else
          this.addExpense()
        // Remember we can clear the inputs manually.
        this.description = ''
        this.amount = ''
        this.$refs.descriptionInput.focus()
      }
    },
    addExpense() {
      // We make a call to our server to create the expense instead of altering the list locally.
      // When the call succeeds, we will then add it to our list locally.
      api.createExpense({
          description: this.description,
          amount: this.amount
        })
        .then(expense => this.expenses.unshift(expense))
        .catch(e => console.log(e))
    },
    deleteExpense(id) {
      // If we want to remove expenses, we can simple locate the index of the expense and use a splice operation.
      api.deleteExpense(id)
        .then(() => {
          const indexOfExpense = this.expenses.findIndex(expense => expense._id === id)
          // Vue will automatically update the data from the splicing operation. It is worth noting that splice mutates the original array.
          this.expenses.splice(indexOfExpense, 1)
          this.editingId = null
        })
    },
    updateExpense(id) {
      // Destructuring is an ES6 feature and helps avoid retyping 'this'.
      const { description, amount } = this
      api.updateExpense(id, {
        // If the properties match the values of an object we can just use the names directly instead of 'property: value'.
          description,
          amount,
        })
        .then(() => {
          // Again, we need to actually find where this item is in our expenses list.
          const indexOfExpense = this.expenses.findIndex(expense => expense._id === id)
          // The splice operation takes an optional replacement object as the last argument, since this is an update we remove the item and insert an item with the same id but updated fields.
          this.expenses.splice(indexOfExpense, 1, {
            ...this.expenses[indexOfExpense],
            description,
            amount: Number(amount),
          })
          this.editingId = null
        })
    },
    setEditingId(id) {
      // We set the currently edited item to the clicked item.
      this.editingId = id
      const indexOfExpense = this.expenses.findIndex(expense => expense._id === id)
      // Populate our fields with the selected expense's fields.
      this.description = this.expenses[indexOfExpense].description
      this.amount = this.expenses[indexOfExpense].amount
      // Focus and select the text in the input for a better user experience.
      this.$refs.descriptionInput.focus()
      setTimeout(() => {
        this.$refs.descriptionInput.select()
      }, 50)
    }
  },
  // Computed things are different from data, we use our data to 'compute' new values that are stored in here.
  // Anything in computed is cached so is best for things that require more memory to display.
  computed: {
    // We want to calculate the total costs for our items. We can have many items so it's best to have it be a computed property.
    total() {
      // The reduce method allows us to break down many items into a single value, in this case we take a single value (total) by summing all the amount properties on the expense.
      return this.expenses.reduce((total, expense) => total + expense.amount, 0)
    },
    saveButtonText() {
      return this.editingId !== null ? 'Update Expense' : 'Add Expense'
    }
  },
  // Watchers are a way to observe changes in your data and run specific pieces of code to handle them.
  watch: {
    // We 'watch' description and amount data for changes to remove validity errors. This is purely for a better user experience.
    description() {
      this.valid.description = true
    },
    amount() {
      this.valid.amount = true
    },
  },
  // Data is the stuff our app cares about. We usually want to show this on the page.
  data,
})

// Using our app variable, we can change things about our instance and the view will update accordingly.
// This is known as one way data-binding, our view is bound to this data and updates when it changes.
setTimeout(() => {
  // We load the page and wait 2 seconds to change our app message.
  app.message = 'Record an expense'
}, 2000)
