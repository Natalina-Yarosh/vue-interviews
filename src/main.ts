import './assets/main.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';

import Aura from '@primeuix/themes/aura';

import { initializeApp } from "firebase/app";


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import ConfirmationService from 'primevue/confirmationservice';


import App from './App.vue'
import Tooltip from 'primevue/tooltip';

import router from './router'
import { ComponentsRegister } from './plugins/components-register';


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
app.use(ConfirmationService)
app.use(createPinia())
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.my-app-dark',
        }
    }
});
app.use(router)
app.use(ComponentsRegister());


app.directive('tooltip',Tooltip)
app.mount('#app')
