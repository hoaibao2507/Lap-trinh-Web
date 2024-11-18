<template>
  <div id="product" class="section-p">
    <h2>DANH SÁCH SẢN PHẨM</h2>
    <div class="pro-container">
      <div class="pro" v-for="product in products" :key="product.id" @click="goToProductDetail(product.id)">
          <img v-if="product.imageUrl" :src="'data:image/jpeg;base64,' + product.imageUrl"/>
          <div class="des">
            <h3>{{ product.name }}</h3>
            <div class="sr">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
            <h4>{{ formatPrice(product.price) }} VNĐ</h4>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: []
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      axios.get('http://localhost:8080/api/products')
        .then(response => {
          this.products = response.data;
        })
        .catch(error => {
          console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
        });
    },
    formatPrice(price) {
      return price.toLocaleString('vi-VN');
    },
    goToProductDetail(productId) {
      this.$router.push({ name: 'ProductDetail', params: { id: productId } });
    }
  }
};
</script>

<style>
#product1 {
  text-align: center;
}

#product .pro-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 20px 20px;
  gap: 30px;
  margin: 0 auto;
  max-width: 1400px;
}

#product .pro {
  width: 23%;
  min-width: 250px;
  padding: 10px 12px;
  border: 1px solid #cce7D0;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.02);
  margin: 15px 0;
  transition: 0.2 ease;
  
}

#product .pro:hover {
  box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.06);
}

#product .pro img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 20px;
}

#product .pro .des {
  padding-top: 10px;
}

#product .pro .des i {
  font-size: 12px;
  color: rgb(243, 181, 25);
}
</style>