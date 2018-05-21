// We want something from another file so we ask for it. We should start our local server to request it.
import data from './data.js'

// Vue instance. Controls the app logic.
// We can do additional things with the instance if we give a variable name.
const app = new Vue({
  // el, short for element. 'Hooks' into the div on index.html page
  el: '#app',
  // Methods are where we can associate pieces of code to do different things in our app.
  methods: {
    // This method is handling the @click directive on our button in index.html.
    clicked(e) {
      // We have access to our data items by prepending 'this' before the name.
      // This code will add to our expenses list according to what was currently in the inputs when the user saved them.
      // Because description and amount were bound to inputs with v-model, they will contain whatever text is in the input.
      this.expenses.unshift({ description: this.description, amount: this.amount })
      // Remember we can clear the inputs manually.
      this.description = ''
      this.amount = ''
    }
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
