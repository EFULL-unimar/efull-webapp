import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';
import axios from 'axios';

// Criação de uma instância de axios
const axiosInstance = axios.create({
  baseURL: 'https://localhost:7044',
});

// Criação da aplicação Vue
const app = createApp(App);

// Configuração global do axios
app.config.globalProperties.$axios = axiosInstance;

// Uso do roteador
app.use(router);

// Montagem da aplicação
app.mount('#app');
