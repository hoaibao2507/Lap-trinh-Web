<template>
  <div class="cart">
    <h1>Giỏ Hàng</h1>
    <div v-if="cartItems.length === 0">
      <p>Giỏ hàng trống!</p>
    </div>
    <div v-else>
      <div v-for="item in cartItems" :key="item.id" class="cart-item">
        <CartItem
          :item="{
            productName: item.product.name,
            price: item.product.price,
            quantity: item.quantity,
            id: item.id
          }"
          :onRemove="removeFromCart"
        />
      </div>
      <div class="total">
        <p>Tổng tiền: {{ totalPrice.toLocaleString() }} VND</p>
        <button @click="checkout" class="btn btn-success">Thanh toán</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CartItem from "@/views/Cart/CartItem.vue";

export default {
  name: "CartShow",
  components: { CartItem },
  data() {
    return {
      cartItems: [],
      userId: 1, // Tạm thời gán cứng userId
    };
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
      );
    },
  },
  methods: {
    async fetchCartItems() {
      const userId = this.userId;
      try {
        const response = await axios.get(`/api/cart/items/${userId}`);
        this.cartItems = response.data;
      } catch (error) {
        console.error("Lỗi khi lấy giỏ hàng:", error);
      }
    },
    async removeFromCart(cartItemId) {
      try {
        await axios.delete(`/api/cart/remove/${cartItemId}`);
        this.cartItems = this.cartItems.filter((item) => item.id !== cartItemId);
      } catch (error) {
        console.error("Lỗi khi xóa sản phẩm khỏi giỏ hàng:", error);
      }
    },
    async checkout() {
      try {
        await axios.post(`/api/cart/checkout/${this.userId}`);
        alert("Thanh toán thành công!");
        this.cartItems = [];
      } catch (error) {
        console.error("Lỗi khi thanh toán:", error);
      }
    },
  },
  mounted() {
    this.fetchCartItems();
  },
};
</script>
