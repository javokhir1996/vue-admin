import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import uiComponents from './ui-components'
import './assets/main.css'

const app = createApp(App)

uiComponents.map(component => app.component(component.name, component));

app.use(router)
app.use(store)

app.mount('#app')
