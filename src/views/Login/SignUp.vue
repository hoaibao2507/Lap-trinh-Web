<template>
    <div class="container">
      <h2>Đăng Ký</h2>
      <form @submit.prevent="register">
        <div>
          <label for="username">Tên người dùng:</label>
          <input type="text" v-model="username" required />
        </div>
        <div>
          <label for="password">Mật khẩu:</label>
          <input type="password" v-model="password" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="email" required />
        </div>
        <button type="submit">Đăng Ký</button>
        <p>Bạn đã có tài khoản?<a @click="goToLogin()">ĐĂNG NHẬP</a></p>
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
        email: '',
        message: ''
      };
    },
    methods: {
      async register() {
        try {
          await axios.post('http://localhost:8080/api/auth/register', {
            username: this.username,
            password: this.password,
            email: this.email
          });
          this.message = 'Đăng ký thành công!';
        } catch (error) {
          this.message = 'Đăng ký thất bại!';
        }
      },
      goToLogin() {
        this.$router.push({ name: 'AppLogin'});
    }
    }
  };
  </script>
  
<style>
.container {
    margin-top: 30px;
}
</style>