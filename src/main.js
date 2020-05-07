import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false


var data = {
  msg : 'vadsafdqq2131231',
  rawHtml:'<span style="color:red">This is Red</span>',
  color:'red',
};

Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  data:data,
}).$mount('#app')


// function add() {
//   data.msg = (new Date).toTimeString()
//   if (data.color == 'blue') {
//     data.color = 'red'
//   } else {
//     data.color = 'blue'
//   }
//   // console.log(data.msg)
// }

// self.setInterval(add, 1000)