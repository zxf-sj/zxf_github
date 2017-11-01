//main.js 是入口文件
import Vue from 'vue'    //引入第三方模块
import App from './App'  //没加后坠自动去找App.vue
import router from './router' //路由

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
