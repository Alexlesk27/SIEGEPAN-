<template>
  <body>
    
  <section class="faq">
    <!-- Ícone de voltar para home -->
    <span @click="goHome" class="btn-home">←</span>

    <h1>Perguntas Frequentes</h1>
    <p class="intro-text">
      Precisa de informações? Encontre sua resposta sobre os detalhes do evento aqui!  
      Caso possua mais dúvidas, envie uma mensagem, estaremos prontos para ajudar!
    </p>

    <div class="accordion">
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="faq-item"
      >
        <button
          class="faq-question"
          @click="toggleAnswer(index)"
        >
          {{ faq.question }}
          <span class="icon">{{ faq.isOpen ? '−' : '+' }}</span>
        </button>
        <div
          v-show="faq.isOpen"
          class="faq-answer"
        >
          <p>{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </section>
  
</body>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Perguntas e respostas relacionadas ao evento
const faqs = ref([
  {
    question: 'Quando e onde acontecerá o evento?',
    answer: 'O evento acontecerá dos dias 5 a 7 de dezembro, no auditório do Instituto de Computação (IC).',
    isOpen: false,
  },
  {
    question: 'Como realizo minha inscrição?',
    answer: 'Você pode realizar sua inscrição no site oficial do evento, preenchendo o formulário disponível na seção "Inscrições".',
    isOpen: false,
  },
  {
    question: 'Haverá emissão de certificado para os participantes?',
    answer: 'Sim, todos os participantes receberão certificados digitais após a conclusão do evento.',
    isOpen: false,
  },
  {
    question: 'A participação é gratuita?',
    answer: 'Sim, a participação no evento é totalmente gratuita.',
    isOpen: false,
  },
  {
    question: 'Onde posso submeter meu trabalho?',
    answer: 'Os trabalhos devem ser submetidos através do sistema disponível no site do evento, na aba "Submissões".',
    isOpen: false,
  },
  {
    question: 'Como consigo entrar em contato com a organização?',
    answer: 'Você pode entrar em contato com a organização enviando um e-mail para contato@evento.com.',
    isOpen: false,
  },
]);

// Função para alternar as respostas
const toggleAnswer = (index) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen;
};

// Roteamento para voltar para home
const router = useRouter();
const goHome = () => {
  router.push('/');
};
</script>

<style scoped>
.faq {
  padding: 2rem;
  text-align: center;
  position: relative;
}

/* Ícone de voltar no canto superior esquerdo */
.btn-home {
  font-size: 2rem;
  cursor: pointer;
  color: #007bff;
  position: absolute;
  top: 1rem;
  left: 1rem;
  transition: color 0.3s ease;
}

.btn-home:hover {
  color: #0056b3;
}

/* Título e texto introdutório */
h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.intro-text {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #555;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* Accordion */
.accordion {
  max-width: 800px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
}

.faq-item {
  border-bottom: 1px solid #ddd;
}

.faq-item:last-child {
  border-bottom: none;
}

.faq-question {
  width: 100%;
  background-color: #e0e0e0;
  padding: 15px;
  text-align: left;
  border: none;
  font-size: 1.25rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-question:hover {
  background-color: #d0d0d0;
}

/* Ícone de + ou - */
.icon {
  font-size: 1.5rem;
  color: #007bff;
}

.faq-answer {
  padding: 15px;
  background-color: #fff;
  font-size: 1rem;
  color: #555;
}

/* Responsividade */
@media (max-width: 768px) {
  .faq {
    padding: 1rem;
  }

  h1 {
    font-size: 1.5rem;
  }

  .faq-question {
    font-size: 1rem;
  }

  .faq-answer {
    font-size: 0.9rem;
  }

  .btn-home {
    font-size: 1.8rem;
    top: 0.8rem;
    left: 0.8rem;
  }
}

body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #f0f4f8, #d9e8fc);
  height: 100vh;
}
</style>
