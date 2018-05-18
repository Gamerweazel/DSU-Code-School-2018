// We want something from another file so we ask for it. We should start our local server to request it.
import data from './data.js'

// Vue instance. Controls the app logic.
new Vue({
  // el, short for element. 'Hooks' into the div on index.html page
  el: '#app',
  // Data is the stuff our app cares about. We usually want to show this on the page.
  data
})
