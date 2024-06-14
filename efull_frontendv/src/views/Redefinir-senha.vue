<script setup>
import Navbar from '@/components/Navbar.vue'    
</script>

<template>
    <Navbar />
    <div style="margin-top: 10vh;" class="container container-login">
            <h1 class="titulo">REDEFINIR SENHA</h1>

                <div class="row">
                    <label for="email">Seu Email</label>
                    <input class="input-form" type="email" id="email" name="email" required>
                </div>
                <div class="row">
                    <label for="email">Confirme Seu Email</label>
                    <input class="input-form" type="email" id="email" name="email" required>
                </div>

                

                <p style="font-size: 15px; margin-top:2vh">Um link será mandado para o Email correspondente</p>
                <div class="row row-login ">
                    <router-link style="text-decoration: none;" class="btn-login" aria-current="page" to="/">Enviar</router-link>
                </div>
    </div>
</template>

<style scoped>

.titulo {
    margin-bottom: 5vh;
}

.row-esqueceu {
    margin-top: 3vh;
}

.container-login {
    width: 25rem;
}

.row-login {
    justify-content: center;
    margin-top: 3vh;
    
}

.row-registro {
    justify-content: center;
    
}

.input-form {
    padding: 2vh;
    margin: 1vh;
    border: none;
    box-shadow: 5px 5px 12px 0.5px #0000000e;
    border-radius: 2vh;
}

.container {
    margin-top: 2rem;
}


</style>