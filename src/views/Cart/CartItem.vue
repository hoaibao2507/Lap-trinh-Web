<template>
  <div class="cart-item">
    <h4>{{ item.productName }}</h4> <!-- Tên sản phẩm -->
    <p>Giá: {{ item.price.toLocaleString() }} VND</p> <!-- Giá sản phẩm -->
    <p>Số lượng: {{ item.quantity }}</p> <!-- Số lượng sản phẩm -->
    <button @click="removeItem" class="btn btn-danger">Xóa</button>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    onRemove: {
      type: Function,
      required: true,
    },
  },
  methods: {
    removeItem() {
      this.onRemove(this.item.id); // Gọi hàm xóa từ cha
    },
  },
};
</script>

<style scoped>
.cart-item {
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
}
</style>
