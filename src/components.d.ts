import { DatePicker } from "primevue";

declare module 'vue' {
    export interface GlobalComponents {
      'app-calendar': typeof DatePicker
    }
  }