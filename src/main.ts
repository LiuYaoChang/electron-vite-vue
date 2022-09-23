import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/style/rest.css'
import App from './App.vue'
// import './samples/node-api'
// app.use(ElementPlus)
const app = createApp(App);
app.use(ElementPlus)
app
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
