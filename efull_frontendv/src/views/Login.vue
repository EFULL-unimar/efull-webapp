<template>
  <div style="margin-top: 2vh;" class="container">
    <div class="screen">
      <div class="screen__content">
        <form class="login" @submit.prevent="submitForm">
          <img class="logo" src="https://res.cloudinary.com/daox93pja/image/upload/v1715122906/e-full/rxdmtvmlczmg69wkeovx.png" alt="">
          <div class="login__field">
            <i class="login__icon fas fa-user"></i>
            <input v-model="username" type="text" class="login__input" placeholder="Usuário / Email">
          </div>
          <div class="login__field">
            <i class="login__icon fas fa-lock"></i>
            <input v-model="password" type="password" class="login__input" placeholder="Senha">
          </div>
          <button @click="submitForm" class="btn-login" :disabled="loading">Entrar</button>
          <div v-if="loading" class="loader-login"></div>

          <div class="links">
            <router-link class="router-link" to="/register"><p>Ainda não possui um cadastro?</p></router-link>
            <router-link class="router-link" to="/redefinir-senha"><p>Esqueci minha senha</p></router-link>
            <div v-if="responseMessage" class="response-message">{{ responseMessage }}</div>
          </div>
        </form>
      </div>  
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const username = ref('');
const password = ref('');
const responseMessage = ref('');
const loading = ref(false);
const router = useRouter();

const fetchUsers = async () => {
  try {
    const response = await axios.get('https://localhost:7044/api/Usuarios');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    responseMessage.value = 'Erro ao buscar usuários.';
  }
};

const submitForm = async () => {
  loading.value = true; // Mostra o loader
  responseMessage.value = ''; // Limpa a mensagem de resposta anterior

  try {
    const users = await fetchUsers();
    const user = users.find(u => (u.username === username.value || u.email === username.value) && u.password === password.value);
    
    if (user) {
      setTimeout(() => {
        router.push('/dash');
      }, 1000); // Espera 3 segundos antes de redirecionar
    } else {
      setTimeout(() => {
        loading.value = false; // Esconde o loader
        responseMessage.value = "Usuário ou senha incorretos.";
      }, 1000); // Espera 3 segundos antes de mostrar a mensagem de erro
    }
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    setTimeout(() => {
      loading.value = false; // Esconde o loader
      responseMessage.value = "Erro ao fazer login.";
    }, 1000); // Espera 3 segundos antes de mostrar a mensagem de erro
  }
};

</script>

  <style scoped>
   @import url('https://fonts.googleapis.com/css?family=Raleway:400,700');

   .loader-login {
    width: 50px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: 
      radial-gradient(farthest-side,#ffa516 94%,#0000) top/8px 8px no-repeat,
      conic-gradient(#0000 30%,#ffa516);
    -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 8px),#000 0);
    animation: l13 500ms infinite linear;
  }
  
  @keyframes l13{ 
    100%{transform: rotate(1turn)}
  }
.links {
   text-align: center;
   display: flex;
   flex-direction: column;
   font-weight: 300;
   font-size: 14px;
}

.router-link {
   text-decoration: none !important;
   color: rgb(70, 70, 70);
   transition: 500ms;
}

.router-link:hover{
   opacity: 0.5;
}
.logo {
   max-width: 70px;
}

.container {
   width: 100%;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;    
}

.screen {		
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 500px;
   width: 360px;	
   border-radius: 32px;
}

.login {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 320px;
   padding: 30px; 
   gap: 50px;
}



.login__input {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   border: none;
   border-bottom: 2px solid #dddddd;
   background: none;
   padding: 10px;
   font-weight: 700;
   width: 100%;
   transition: .2s;
}

.login__input:active,
.login__input:focus,
.login__input:hover {
   outline: none;
   border-bottom-color: #ff7300;
}

.line {
   position: absolute;
   bottom: 80px;
   background: #000000;
   width: 1000%;
   display: flex;
   height: 1px;
   transform: scale(0.1);
}

  </style>
  