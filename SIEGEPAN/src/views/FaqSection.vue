<template>
    <section class="faq">
      <h2>FAQ</h2>
      <div v-for="(item, index) in faqs" :key="index" class="faq-item">
        <button @click="toggle(index)" class="faq-question">
          {{ item.question }}
          <span>{{ activeIndex === index ? '-' : '+' }}</span>
        </button>
        <div v-show="activeIndex === index" class="faq-answer">
          {{ item.answer }}
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const faqs = [
    { question: 'O que é o Siegepan?', answer: 'Siegepan é um sistema de gestão.' },
    { question: 'Como posso acessar?', answer: 'Você pode acessar pelo site oficial.' },
    { question: 'Quem pode usar?', answer: 'Qualquer usuário com cadastro válido.' },
  ];
  
  const activeIndex = ref(null);
  
  const toggle = (index) => {
    activeIndex.value = activeIndex.value === index ? null : index;
  };
  </script>
  
  <style scoped>
  .faq {
    padding: 2rem;
  }
  
  .faq-item {
    margin-bottom: 1rem;
  }
  
  .faq-question {
    display: flex;
    justify-content: space-between;
    background-color: #f7f7f7;
    padding: 1rem;
    border: none;
    cursor: pointer;
    text-align: left;
  }
  
  .faq-answer {
    margin-top: 0.5rem;
    padding: 1rem;
    background-color: #eaeaea;
    border-radius: 4px;
  }
  </style>
  