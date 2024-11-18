<template>
    <div class="container mt-5">
      <h1 class="text-center">Danh Sách Sản Phẩm</h1>
      
      <!-- Form thêm/sửa sản phẩm -->
      <div class="mb-4">
        <h2 v-if="isEditing" class="text-primary">Cập Nhật Sản Phẩm</h2>
        <h2 v-else class="text-success">Thêm Sản Phẩm Mới</h2>
        <form @submit.prevent="isEditing ? updateProduct() : createProduct()" class="form-inline">
          <input v-model="productForm.name" class="form-control mr-2" placeholder="Tên sản phẩm" required />
          <input v-model="productForm.description" class="form-control mr-2" placeholder="Mô tả" required />
          <input v-model="productForm.price" type="number" class="form-control mr-2" placeholder="Giá" required />
          <input type="file" name="file" @change="onFileChange" class="form-control mr-2" required />
          <button type="submit" class="btn btn-primary">{{ isEditing ? 'Cập Nhật' : 'Thêm' }}</button>
          <button type="button" @click="resetForm" class="btn btn-secondary ml-2">Hủy</button>
        </form>
      </div>
  
      <!-- Danh sách sản phẩm -->
      <ul class="list-group">
        <li v-for="product in products" :key="product.id" class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <img v-if="product.imageUrl" :src="'data:image/jpeg;base64,' + product.imageUrl" alt="Product Image" class="img-thumbnail" style="width: auto; height: 300px; margin-right: 10px;" />
            {{ product.name }}, {{ product.description }}, {{ product.price }}
          </div>
          <div>
            <button @click="editProduct(product)" class="btn btn-warning btn-sm">Sửa</button>
            <button @click="deleteProduct(product.id)" class="btn btn-danger btn-sm">Xóa</button>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        products: [],
        productForm: {
          id: null,
          name: '',
          description: '',
          price: '',
          file: null // Add a file property to hold the uploaded file
        },
        isEditing: false
      };
    },
    created() {
      this.fetchProducts();
    },
    methods: {
      async fetchProducts() {
        try {
          const response = await axios.get('http://localhost:8080/api/products');
          this.products = response.data;
        } catch (error) {
          console.error('Có lỗi xảy ra khi gọi API:', error);
        }
      },
      onFileChange(event) {
        this.productForm.file = event.target.files[0]; // Store the selected file
      },
      async createProduct() {
        const formData = new FormData();
        formData.append('file', this.productForm.file); // Append the file to the form data
        formData.append('name', this.productForm.name);
        formData.append('description', this.productForm.description);
        formData.append('price', this.productForm.price);
  
        try {
          const response = await axios.post('http://localhost:8080/api/products', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          this.products.push(response.data);
          this.resetForm();
        } catch (error) {
          console.error('Có lỗi xảy ra khi thêm sản phẩm:', error);
        }
      },
      async updateProduct() {
        const formData = new FormData();
        formData.append('file', this.productForm.file); // Append the file to the form data
        formData.append('name', this.productForm.name);
        formData.append('description', this.productForm.description);
        formData.append('price', this.productForm.price);
  
        try {
          const response = await axios.put(`http://localhost:8080/api/products/${this.productForm.id}`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          const index = this.products.findIndex(product => product.id === this.productForm.id);
          this.products[index] = response.data;
          this.resetForm();
        } catch (error) {
          console.error('Có lỗi xảy ra khi cập nhật sản phẩm:', error);
        }
      },
      async deleteProduct(id) {
        try {
          await axios.delete(`http://localhost:8080/api/products/${id}`);
          this.products = this.products.filter(product => product.id !== id);
        } catch (error) {
          console.error('Có lỗi xảy ra khi xóa sản phẩm:', error);
        }
      },
      editProduct(product) {
        this.productForm = { ...product, file: null }; // Reset file when editing
        this.isEditing = true;
      },
      resetForm() {
        this.productForm = { id: null, name: '', description: '', price: '', file: null };
        this.isEditing = false;
      }
    }
  };
  </script>
  
  