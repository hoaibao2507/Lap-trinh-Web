<template>
    <!-- <div class = "footer">
          <a :href = "contactURL.facebook" target="_blank" rel="noopener no referrer"><i class="fab fa-facebook"></i></a>
          <a :href = "contactURL.instagram" target="_blank" rel="noopener no referrer"><i class="fab fa-square-instagram"></i></a>
          <a :href = "contactURL.tiktok" target="_blank" rel="noopener no referrer"><i class="fab fa-tiktok"></i></a>
    </div> -->
    <footer class="pt-5 pb-3 border-top">
    <div class="container">
      <div class="row">
        <!-- Cột 1: Logo và slogan -->
        <div class="col-md-3 text-center text-md-left mb-4 mb-md-0">
          <img src="@/assets/images/logo.png" alt="Logo" class="mb-2" style="width: 150px;">
          <h3>Culaputa.</h3>
          <p class="text-white">Địa chỉ: ấp Hưng Tân, Phú Hưng, Phú Tân, An Giang</p>
        </div>
        
        <!-- Cột 2: Về chúng tôi -->
        <div class="col-md-3">
          <h5 class="font-weight-bold text-dark">Về chúng tôi</h5> <br>
          <ul class="list-unstyled">
            <img src="@/assets/images/momo.png" style="width: 50px; padding-bottom: 20px;"> <br>
            <img src="@/assets/images/BIDV.png" style="width: 50px; padding-bottom: 20px;"> <br>
            <p>Thanh toán khi nhận hàng</p>
          </ul>
        </div>

        <!-- Cột 3: Chính sách -->
        <div class="col-md-3">
          <h5 class="font-weight-bold text-dark">Chính sách</h5> <br>
          <ul class="list-unstyled">
            <li><a href="#" class="text-white">Chính sách quy định chung</a></li>
            <li><a href="#" class="text-white">Chính sách bảo mật</a></li>
            <li><a href="#" class="text-white">Chính sách vận chuyển</a></li>
            <li><a href="#" class="text-white">Chính sách đổi trả</a></li>
          </ul>
        </div>

        <!-- Cột 4: Liên hệ -->
        <div class="col-md-3">
          <h5 class="font-weight-bold text-dark">Liên hệ</h5> <br>
          <ul class="list-unstyled">
            <li><i class="fas fa-map-marker-alt"></i> Số 1 Võ Văn Ngân, Linh Chiểu, TP.Thủ Đức, HCM</li>
            <li><i class="fas fa-phone"></i> 0373.386.189</li>
          </ul>
          <!-- Các biểu tượng mạng xã hội -->
          <div class="mt-3">
            <a :href="contactURL.facebook" class="text-white mr-3"><i class="fab fa-facebook fa-lg"></i></a>
            <a :href="contactURL.instagram" class="text-white mr-3"><i class="fab fa-instagram fa-lg"></i></a>
            <a :href="contactURL.tiktok" class="text-white mr-3"><i class="fab fa-tiktok fa-lg"></i></a>
          </div>
        </div>
      </div>
      
      <!-- Phần cuối cùng: Copyright -->
      <div class="text-center text-muted mt-4">
        <small>© 2024 Culaputa. | All Rights Reserved | <a href="#" class="text-dark">Điều khoản và điều kiện</a></small>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
    name: "AppFooter",
    data() {
        return {
        contactURL: {
            facebook: "https://www.facebook.com/profile.php?id=100024295177545",
            instagram: "https://www.instagram.com/gainhaque44/",
            tiktok: "https://www.tiktok.com/@hoaibao.257"
        }
        };
    },
}
</script>

<style>
footer {
    background-color: #40E0D0; /* Chọn màu bạn mong muốn cho footer */
    color: #fff; /* Đảm bảo màu chữ trắng để nổi bật trên nền xanh */
    padding-top: 100px;
    width: 100%;
}

footer .container {
  width: 100%;
}

footer .row {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>
