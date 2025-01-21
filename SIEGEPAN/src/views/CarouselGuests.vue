<template>
  <section class="carousel">
    <!-- Botão Voltar para Home no estilo do FAQ -->
    <button class="back-button" @click="goToHome">←</button>

    <div class="carousel-content">
      <!-- Texto à esquerda -->
      <div class="carousel-text">
        <h1>Nossos Convidados Especiais</h1>
        <h2>Conheça os palestrantes, ministrantes e convidados que trazem suas experiências e conhecimentos únicos para o evento.</h2>

        <!-- Botões de navegação lado a lado -->
        <div class="nav-buttons">
          <button class="nav-btn prev" @click="prevSlide" style="background-color: gray;">‹</button>
          <button class="nav-btn next" @click="nextSlide" style="background-color: #51ACD9;">›</button>
        </div>
      </div>

      <!-- Carrossel à direita -->
      <div class="carousel-wrapper">
        <div class="carousel-container" ref="carousel">
          <div class="carousel-slide" v-for="(guest, index) in guests" :key="index">
            <div class="image-container">
              <img :src="guest.image" :alt="guest.name" />
            </div>
            <h3>{{ guest.name }}</h3>
            <p>{{ guest.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Instância do router para navegação
const router = useRouter();

// Lista de convidados
const guests = ref([
  { name: 'Convidado 1', description: 'Especialista em Vue.js.', image: new URL('@/assets/menina.jpeg', import.meta.url).href },
  { name: 'Convidado 2', description: 'Expert em design.', image: new URL('@/assets/enfermeiro.jpeg', import.meta.url).href },
  { name: 'Convidado 3', description: 'Engenheiro de software.', image: new URL('@/assets/en.jpeg', import.meta.url).href },
  { name: 'Convidado 4', description: 'Analista de dados.', image: new URL('@/assets/enfermeiro.jpeg', import.meta.url).href },
  { name: 'Convidado 5', description: 'Desenvolvedor Full Stack.', image: new URL('@/assets/en.jpeg', import.meta.url).href },
]);

const carousel = ref(null);
const slideWidth = 350; // Largura de cada slide

// Função para avançar no carrossel
const nextSlide = () => {
  if (carousel.value) {
    carousel.value.scrollBy({ left: slideWidth, behavior: 'smooth' });
  }
};

// Função para retroceder no carrossel
const prevSlide = () => {
  if (carousel.value) {
    carousel.value.scrollBy({ left: -slideWidth, behavior: 'smooth' });
  }
};

// Função para voltar à página inicial
const goToHome = () => {
  router.push('/');
};
</script>

<style scoped>
.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Ocupa toda a altura da tela */
  text-align: center;
  padding: 2rem;
}

.carousel-content {
  display: flex;
  justify-content: center;
  align-items: center; /* Centraliza verticalmente */
  width: 90%;
}

.carousel-wrapper {
  position: relative;
  width: 75%; /* 75% da largura para as imagens */
  overflow: hidden;
}

.carousel-container {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
}

.carousel-container::-webkit-scrollbar {
  display: none;
}

.carousel-slide {
  flex: 0 0 350px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background: #fff;
  padding: 1rem;
  transition: transform 0.3s ease-in-out;
}

.carousel-slide:hover {
  transform: scale(1.05);
}

.image-container {
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

h3 {
  margin-top: 10px;
  font-size: 1.5rem;
  color: #333;
}

p {
  font-size: 1rem;
  color: #666;
}

.carousel-text {
  width: 25%; /* O texto ocupa 25% da largura */
  text-align: left;
  padding-right: 2rem; /* Espaço entre o texto e as imagens */
}

.nav-buttons {
  margin-top: 20px; /* Espaço entre o texto e os botões */
  display: flex;
  gap: 10px;
  justify-content: flex-start; /* Botões lado a lado */
}

.nav-btn {
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  border: none;
  font-size: 2rem;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 50%;
  transition: background 0.3s ease;
}

.nav-btn:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.back-button {
  position: absolute;
  top: 20px;
  left: 20px;
  background: none;
  border: none;
  color: #333;
  font-size: 1.2rem;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: color 0.3s ease-in-out;
}

.back-button:hover {
  color: #51ACD9;
}
</style>
