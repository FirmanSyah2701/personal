<template>
  <div id="app">
    <div id="content">
        <nav class="navbar navbar-expand-md navbar-light">
            <div class="container">
                <router-link class="navbar-brand" to="/">
                   <div class="text-dark"> Firman Syah </div> 
                </router-link>
                <button 
                  class="navbar-toggler collapsed" 
                  type="button" 
                  data-toggle="collapse" 
                  data-target="#navbarNav" 
                  aria-controls="navbarNav" 
                  aria-expanded="false" 
                  aria-label="Toggle navigation"
                >
                  <span class="my-1 mx-2 close">X</span>
                  <span class="navbar-toggler-icon" />
                </button> 
                <div id="navbarNav" class="collapse navbar-collapse flex-grow-0">
                  <ul class="navbar-nav text-right">
                    <li class="nav-item">
                      <router-link class="nav-link" :to="{name: 'Home'}">
                        Home
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" :to="{name: 'About'}">
                        About
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" :to="{name: 'Educations'}">
                        Educations
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" :to="{name: 'Experiences'}">
                        Experience
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" :to="{name: 'Portfolio'}">
                        Portfolio
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link" :to="{name: 'Contacts'}">
                        Contacts
                      </router-link>
                    </li>
                  </ul>
                </div>
            </div>
        </nav>
    </div>
    <router-view />
    <my-footer />
  </div>
</template>

<style>
  @import 'assets/style.css';
</style>
<script>
import Footer from './components/Footer.vue'
export default {
  components: { 'my-footer' : Footer},
}
</script>