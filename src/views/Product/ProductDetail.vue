<template>
    <div class="container">
        <div class="row pt-5">
            <div class="col-md-1"></div>
            <div class="col-md-4 col-12">
                <img v-if="product.imageUrl" :src="'data:image/jpeg;base64,' + product.imageUrl" class="img-fluid"/>
            </div>
            <div id="detail" class="col-md-6 col-12 pt-3 pt-md-0">
                <h4>{{ product.name }}</h4>
                <h6 class="font-weight-bold">{{ product.price }} VNĐ</h6>
                <p>{{ product.description }}</p>

                <div class="form-group">
                    <label for="quantity">Số lượng:</label>
                    <input type="number" v-model="quantity" id="quantity" class="form-control" min="1" />
                </div>

                <button @click="addToCart" class="btn btn-success"><i class="fa-solid fa-cart-shopping"></i> Thêm vào giỏ hàng</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            product: {},
            quantity: 1, // Giá trị mặc định cho số lượng
        };
    },
    props: ["baseURL"], // Nếu bạn cần truyền baseURL từ component cha
    mounted() {
        this.fetchProductDetail();
    },
    methods: {
        fetchProductDetail() {
            const id = this.$route.params.id; // Lấy ID sản phẩm từ URL
            axios
                .get(`http://localhost:8080/api/products/${id}`) // Đổi URL thành phù hợp với backend của bạn
                .then((response) => {
                    this.product = response.data;
                })
                .catch((error) => {
                    console.error("Lỗi khi lấy dữ liệu chi tiết sản phẩm:", error);
                });
        },
        async addToCart() {
            try {
                const userId = 1; // Tạm thời gán cứng userId, có thể thay đổi theo logic của bạn
                const cartItem = {
                    userId: userId,
                    productId: this.product.id,
                    quantity: this.quantity,
                };

                await axios.post("http://localhost:8080/api/cart/add", cartItem);
                alert("Sản phẩm đã được thêm vào giỏ hàng!");
            } catch (error) {
                console.error("Lỗi khi thêm sản phẩm vào giỏ hàng:", error);
                alert("Không thể thêm sản phẩm vào giỏ hàng!");
            }
        },
    },
};
</script>

<style scoped>
.container {
    padding-top: 30px;
}
.img-fluid {
    width: 100%;
    height: auto;
}
#detail {
    text-align: left;
}
.form-group {
    width: 80px;
}
</style>