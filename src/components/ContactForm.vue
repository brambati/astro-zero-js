<script setup>
// Vue · client:visible (quem nunca rola até aqui nunca baixa este JS)
import { ref } from 'vue';
const enviado = ref(false);
</script>

<template>
  <form class="island" @submit.prevent="enviado = true">
    <input placeholder="Seu e-mail" type="email" required />
    <button>{{ enviado ? 'Enviado!' : 'Enviar' }}</button>
  </form>
</template>
