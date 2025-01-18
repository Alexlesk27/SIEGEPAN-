import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import FaqSection from '@/views/FaqSection.vue';
import CarouselGuests from '@/views/CarouselGuests.vue';

const routes = [
  { path: '/carousel', component: CarouselGuests},
  { path: '/', component: HomeView },
  { path: '/faq', component: FaqSection },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
