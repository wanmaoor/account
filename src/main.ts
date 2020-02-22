import Vue from "vue"
import App from "./App.vue"
import "@wanmaoor/giaoui/dist/giaoui.css"
import "./registerServiceWorker"
import router from "./router"
import store from "./store"
import Nav from "@/components/Nav.vue"
import Layout from "@/components/Layout.vue"
import Icon from "@/components/Icon.vue"

Vue.config.productionTip = false
Vue.component("Nav", Nav)
Vue.component("Layout", Layout)
Vue.component("Icon", Icon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")

window.onload = function () {
  setTimeout(() => {
    window.scrollTo(0, 1000)
  }, 0)
}
