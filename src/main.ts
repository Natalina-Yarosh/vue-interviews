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

import Menubar from 'primevue/menubar';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Toast from 'primevue/toast';
import Tooltip from 'primevue/tooltip';
import ProgressSpinner from 'primevue/progressspinner';
import Card from 'primevue/card';
import  DataTable  from 'primevue/datatable';
import  Column  from 'primevue/column';
import  ConfirmDialog  from 'primevue/confirmdialog';
import  Message  from 'primevue/message';
import  InputNumber from 'primevue/inputnumber';
import Textarea from 'primevue/textarea';
import DatePicker  from "primevue/datepicker";
import RadioButton  from "primevue/radiobutton";
import Badge  from 'primevue/badge';

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
app.use(ConfirmationService)
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
app.directive('tooltip',Tooltip)
app.component('app-menubar', Menubar);
app.component('app-button', Button);
app.component('app-input-text', InputText);
app.component('app-toast', Toast);
app.component('app-progress', ProgressSpinner);
app.component('app-card', Card);
app.component('app-datatable', DataTable);
app.component('app-column', Column);
app.component('app-dialog', ConfirmDialog);
app.component('app-message', Message);
app.component('app-input-number', InputNumber);
app.component('app-textarea', Textarea);
app.component('app-calendar', DatePicker);
app.component('app-radio', RadioButton);
app.component('app-badge', Badge);

app.mount('#app')
