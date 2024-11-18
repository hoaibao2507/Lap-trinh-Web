<template>
    <div class="container">
      <h2>Đăng Nhập</h2>
      <form @submit.prevent="login">
        <div>
          <label for="username">Tên người dùng:</label>
          <input type="text" v-model="username" required />
        </div>
        <div>
          <label for="password">Mật khẩu:</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Đăng Nhập</button>
        <p>Bạn chưa có tài khoản?<a @click="goToRegister()">ĐĂNG KÝ NGAY</a></p>
      </form>
      <p v-if="message">{{ message }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        password: '',
        message: ''
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('http://localhost:8080/api/auth/login', {
            username: this.username,
            password: this.password
          });
          this.message = response.data; // Hiển thị thông báo từ API
          if (this.username === 'admin' && this.password === 'admin')
            this.$router.push({ name: 'AddProduct' });
        } catch (error) {
          this.message = 'Đăng nhập thất bại!';
        }
      },
      goToRegister() {
        this.$router.push({ name: 'AppRegister'});
    }
    }
  };
  </script>

<style>
.container {
    padding-top: 100px;
}
</style>