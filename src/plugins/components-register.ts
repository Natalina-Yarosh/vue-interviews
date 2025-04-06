import type { Plugin } from 'vue';



import Menubar from 'primevue/menubar';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Toast from 'primevue/toast';
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
import Chart from 'primevue/chart';

/**
 * Registers PrimeVue components globally in the Vue app.
 *
 * @returns A Vue plugin that registers the components.
 */
export const ComponentsRegister = (): Plugin => {
  return {
    install(app) {
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
      app.component('app-chart', Chart);
    },
  };
};
