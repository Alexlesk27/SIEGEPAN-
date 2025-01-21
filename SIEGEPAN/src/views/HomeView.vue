<script setup>
import TheWelcome from '../components/TheWelcome.vue';
</script>

<template>
 <main class="home-container">
    <section class="welcome-section">
      <h1 class="welcome-title">Bem-vindo ao SIEGEPAN</h1>
      <p class="welcome-description">
        Explore nossas funcionalidades incríveis! Escolha uma das opções abaixo para começar:
      </p>
    </section>
    <div class="button-container">
      <router-link to="/faq" class="button">FAQ</router-link>
      <router-link to="/carousel" class="button">Carrossel</router-link>
    </div>
  </main>
</template>

<style scoped>

.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  font-family: 'Arial', sans-serif;
  text-align: center;
  box-sizing: border-box;
}

.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #f0f4f8, #d9e8fc);
  font-family: 'Arial', sans-serif;
  text-align: center;
}

.welcome-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
}

.welcome-description {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
  max-width: 600px;
}

.button-container {
  display: flex;
  gap: 1rem;
}

.button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  text-decoration: none;
  border-radius: 25px;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.button:hover {
  background-color: #0056b3;
}

@media (max-width: 768px) {
  .welcome-title {
    font-size: 2rem;
  }

  .welcome-description {
    font-size: 1rem;
  }

  .button {
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
  }
}
</style>
