import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Educations from '../views/Educations.vue'
import Experiences from '../views/Experiences.vue'
import Portofolio from '../views/Portofolio.vue'
import Contacts from '../views/Contacts.vue'

Vue.use(Router)

export default new Router({ 
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/educations',
      name: 'Educations',
      component: Educations
    },
    {
      path: '/experiences',
      name: 'Experiences',
      component: Experiences
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portofolio
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    },
  ]
})
