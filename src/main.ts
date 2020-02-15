import Vue from "vue"
import App from "./App.vue"
import "@wanmaoor/giaoui/dist/giaoui.css"
import "./registerServiceWorker"
import router from "./router"
import store from "./store"
import Nav from "@/components/Nav.vue"
import Layout from "@/components/Layout.vue"
import Icon from "@/components/Icon.vue"
import tagList from "@/models/tagList"


window.labelList = tagList.fetchData()

Vue.config.productionTip = false
Vue.component("Nav", Nav)
Vue.component("Layout", Layout)
Vue.component("Icon", Icon)
Vue.directive("focus", {
  inserted: function (el) {
    el.focus()
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
