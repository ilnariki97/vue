// import Vue from 'vue'
// import App from './App.vue'
//
// Vue.config.productionTip = false
//
// new Vue({
//   render: h => h(App),
// }).$mount('#app')
const App={
    data () {
        return{
            counter:0
        }
    }
}

const app= Vue.createApp(App)

app.mount('#app')