// We want something from another file so we ask for it. We should start our local server to request it.
import data from './data.js'

// Vue instance. Controls the app logic.
// We can do additional things with the instance if we give a variable name.
const app = new Vue({
  // el, short for element. 'Hooks' into the div on index.html page
  el: '#app',
  // Data is the stuff our app cares about. We usually want to show this on the page.
  data
})

// Using our app variable, we can change things about our instance and the view will update accordingly.
// This is known as one way data-binding, our view is bound to this data and updates when it changes.
setTimeout(() => {
  // We load the page and wait 2 seconds to change our app message.
  app.message = 'Goodbye'
}, 2000)
