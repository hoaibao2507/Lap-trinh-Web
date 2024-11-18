<template>
  <section id="banner">
    <h1>BIỂU TƯỢNG</h1>
    <img src="@/assets/images/1.jpg">
    <h1>ĐẶC SẮC</h1>
    <img src="@/assets/images/2.jpg">
    <h1>TRUYỀN THỐNG</h1>  
  </section>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  },
  data (){
    return {
      check: true
    }
  }
}
</script>

<style scoped>
#banner {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75)),url(@/assets/images/c.jpg);
  background-size: cover;
  color: white;
  padding: 0 80px;
  display: flex;
  align-items: center;
  justify-content:start;
}
#banner h1, #banner p {
  max-width: 40%; /* Giới hạn chiều rộng văn bản */
  flex-direction: column;
}
#banner img {
    width: 400px;
    border: 5px solid white;
    border-radius: 10px;
}
</style>