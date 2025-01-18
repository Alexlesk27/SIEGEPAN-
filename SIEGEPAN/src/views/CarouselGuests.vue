<template>
    <section class="carousel">
      <h2>Convidados</h2>
      <div class="carousel-wrapper">
        <button @click="prev" class="carousel-btn prev">&lt;</button>
        <div class="carousel-track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          <div v-for="(guest, index) in guests" :key="index" class="carousel-item">
            <img :src="guest.image" :alt="guest.name" />
            <h3>{{ guest.name }}</h3>
            <h1>teste</h1>
            <p>{{ guest.description }}</p>
          </div>
        </div>
        <button @click="next" class="carousel-btn next">&gt;</button>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const guests = [
    { name: 'Convidado 1', description: 'Especialista em Vue.js.', image: '/guest1.jpg' },
    { name: 'Convidado 2', description: 'Expert em design.', image: '/guest2.jpg' },
    { name: 'Convidado 3', description: 'Engenheiro de software.', image: '/guest3.jpg' },
  
  ];
  
  const currentIndex = ref(0);
  
  const prev = () => {
    currentIndex.value = (currentIndex.value - 1 + guests.length) % guests.length;
  };
  
  const next = () => {
    currentIndex.value = (currentIndex.value + 1) % guests.length;
  };
  </script>
  
  <style scoped>
  .carousel {
    padding: 2rem;
    position: relative;
    overflow: hidden;
  }
  
  .carousel-wrapper {
    display: flex;
    align-items: center;
  }
  
  .carousel-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
  
  .carousel-item {
    flex: 0 0 100%;
    text-align: center;
    padding: 1rem;
  }
  
  .carousel-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
  }
  
  .prev {
    left: 0.5rem;
  }
  
  .next {
    right: 0.5rem;
  }
  
  @media (min-width: 768px) {
    .carousel-item {
      flex: 0 0 33.33%;
    }
  }
  </style>
  