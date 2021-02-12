  
import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Terms from '@/components/Terms';

Vue.use(VueRouter);
const routes = [
    {
      path: '/',
      name: 'Home',
      component: HelloWorld
  },
    {
      path: '/terms',
      name: 'Terms',
      component: Terms
    },
];

const router = new VueRouter({
    mode: 'history',
    routes
  });
  
  export default router;