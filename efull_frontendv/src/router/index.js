import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Dashboard from '@/views/Dashboard.vue';
import Entregas from '@/views/Entregas.vue';
import Registro from '@/views/Registro.vue';
import Redefinir from '@/views/Redefinir-senha.vue';
import About from '@/views/About.vue';
import HereApiComponent from '@/components/HereApiComponent.vue'; // Adicione esta linha


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Registro',
    component: Registro
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/redefinir-senha',
    name: 'Redefinir',
    component: Redefinir
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dash',
    name: 'Dash',
    component: Dashboard
  },
  {
    path: '/entregas',
    name: 'Entregas',
    component: Entregas
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
