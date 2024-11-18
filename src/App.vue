<template>
  <div id="app">
    <AppHeader />
    <main>
      <router-view></router-view>
    </main>
    <AppFooter />
  </div>
  
</template>

<script>
import AppHeader from '@/components/header.vue';
import AppFooter from '@/components/footer.vue';
export default {
  data() {
    return {
      
    };
  },
  components: {
    AppHeader,
    AppFooter,
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
