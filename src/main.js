import Vue from 'vue'
import App from './App.vue'
// import App2 from './App2'

Vue.config.productionTip = false

var data = {
  vmsg : 'xxxxxxx'
}

new Vue({
  render: h => h(App),
  data:data,
}).$mount('#app')

// new Vue({
//   render: h=> h(App2),
// }).$mount('#app2')