<template>
  <div class="container">
    <div class="screen">
      <center>
        <div class="login">
          <img class="logo" src="https://res.cloudinary.com/daox93pja/image/upload/v1715122906/e-full/rxdmtvmlczmg69wkeovx.png" alt="">

          <form @submit.prevent="submitForm">
            <div class="login__field">
              <input v-model="username" type="text" class="login__input" placeholder="Nome de Usuário">
            </div>
            <div class="login__field">
              <input v-model="email" type="text" class="login__input" placeholder="Email">
            </div>
            <div class="login__field">
              <input v-model="password" type="password" class="login__input" placeholder="Senha">
            </div>
            <button onclick="irParaLogin()" type="submit" class="btn-login">Registrar</button>
          </form>
          <div v-if="responseMessage" class="response-message">{{ responseMessage }}</div>
        </div>
      </center>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

const users = ref([]);
const username = ref('');
const email = ref('');
const password = ref('');
const responseMessage = ref('');

const fetchUsers = async () => {
  try {
    const response = await axios.get('https://localhost:7044/api/Usuarios');
    users.value = response.data;
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    responseMessage.value = 'Erro ao buscar usuários.';
  }
};

const submitForm = async () => {
  try {
    
    

    const response = await axios.post('https://localhost:7044/api/Usuarios', {
      username: username.value,
      email: email.value,
      password: password.value
    });
    
    responseMessage.value = "Registro bem-sucedido!";
    setTimeout(irParaLogin, 3000);
    fetchUsers();
  } catch (error) {
    console.error('Erro ao registrar:', error);
    responseMessage.value = 'Erro ao registrar.';
  }
};

function irParaLogin() {
  location.href = "/login"
}

onMounted(() => {
  fetchUsers();
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway:400,700');

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
  height: auto;
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
  gap: 20px;
}

.login__field {
  width: 100%;
  margin-bottom: 20px;
}

.login__input {
  border: none;
  border-bottom: 2px solid #dddddd;
  background: none;
  padding: 10px;
  font-weight: 700;
  width: 100%;
  transition: .2s;
  margin-bottom: 20px;
}

.login__input:active,
.login__input:focus,
.login__input:hover {
  outline: none;
  border-bottom-color: #ff7300;
}

ul {
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
}

li {
  padding: 10px 0;
  font-weight: 700;
}

.response-message {
  margin-top: 20px;
  color: rgb(71, 71, 71);
  font-weight: bold;
}

.btn-login {
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-image: linear-gradient(to right, #FF0000, #FFC000);
  border: none;
  color: rgb(255, 255, 255);
  padding: 4px 20px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-left: 10px;
  transition: 500ms;
}

.btn-login:hover {
  opacity: 0.5;
}

</style>
