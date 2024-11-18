<template>
    <header>
        <nav>
            <img :src="logo" class="logo">
            <div class="nav-links">
                <router-link
                    v-for="link in links"
                    :key="link.name"
                    :to="link.path"
                    class="nav-item " style="text-decoration: none;"
                >
                    {{ link.name }}
                </router-link>
                <router-link to="/login" class="nav-item" style="text-decoration: none;">ĐĂNG NHẬP</router-link>
                <router-link to="/cart" class="nav-item" style="text-decoration: none;"><i class="fa-solid fa-cart-shopping"></i></router-link>
            </div>
        </nav>
    </header>
</template>

<script>
import logo from '@/assets/images/logo.png';
export default {
  name: "AppHeader",
  data() {
    return {
      logo,
      links: [
        { name: "TRANG CHỦ", path: "/" },
        { name: "SẢN PHẨM", path: "/client/product/content" },
        { name: "GIỚI THIỆU", path: "/about" },
      ],
    };
  },
};
</script>

<style>
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
}
.logo {
    width: 100px;
}

nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 100px;
    background: #40E0D0;
}

.nav-links {
    display: flex;
    gap: 50px;
}

.nav-item {
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    position: relative;
    display: inline-block;
}

.nav-item::after {
    content: '';
    height: 3px;
    width: 0;
    background: black;
    position: absolute;
    left: 0;
    bottom: -3px;
    transition: 0.3s;
}

.nav-item:hover::after {
    width: 100%;
}
.nav-item:hover {
    color: black;
}
.nav-item.router-link-exact-active {
    color: black;
}

.footer {
    position: absolute;
    bottom: 40px;
    left: 70px;
    width: 200px;
    display: flex;
}

.footer a {
    display: flex;
    margin: 0 3px;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    border-radius: 50%;
    font-size: 20px;
    color: black;
    text-decoration: none;
}
.footer a:hover {
    background-color: black;
    color: white;
    transition: 0.5s;
}
</style>