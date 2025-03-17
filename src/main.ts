import './assets/main.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';

import Aura from '@primeuix/themes/aura';

import { initializeApp } from "firebase/app";


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Menubar from 'primevue/menubar';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import ProgressSpinner from 'primevue/progressspinner';

import App from './App.vue'
import router from './router'


const firebaseConfig = {
    apiKey: "AIzaSyClaM-STJfrsxYcKOYuf_MHzM0zJmqFEi4",
    authDomain: "interviews-6fc19.firebaseapp.com",
    projectId: "interviews-6fc19",
    storageBucket: "interviews-6fc19.firebasestorage.app",
    messagingSenderId: "1003453883256",
    appId: "1:1003453883256:web:f361283d567b3d813b5e8d",
    measurementId: "G-508RXZ7HGK"
};

initializeApp(firebaseConfig);

const app = createApp(App)

app.use(ToastService)
app.use(createPinia())
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: true,
        }
    }
});
app.use(router)
app.component('app-menubar', Menubar);
app.component('app-button', Button);
app.component('app-input-text', InputText);
app.component('app-toast', Toast);
app.component('app-progress', ProgressSpinner);

app.mount('#app')
