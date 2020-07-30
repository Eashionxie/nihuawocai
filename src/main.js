import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MetaInfo from 'vue-meta-info'
import './styles/index.scss'

Vue.config.productionTip = false

Vue.use(MetaInfo)

new Vue({
  router,
  store,
  render: h => h(App),
  /* 这句非常重要，否则预渲染将不会启动 */ 
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')
