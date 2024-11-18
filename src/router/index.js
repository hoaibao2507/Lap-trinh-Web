import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddProduct from '../views/Product/AddProduct.vue'
import SalesView from '../views/Sales/SalesView.vue'
import ProductContent from '../views/Product/ProductContent.vue'
import AppHeader from '../components/header.vue'
import AppLogin from '../views/Login/SignIn.vue'
import AppRegister from '../views/Login/SignUp.vue'
import ProductDetail from '../views/Product/ProductDetail.vue'
import CartShow from '../views/Cart/CartShow.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/admin/product/add',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/client/sales/salesview',
    name: 'SalesView',
    component: SalesView
  },
  {
    path: '/header',
    name: 'AppHeader',
    component: AppHeader
  },
  {
    path: '/client/product/content',
    name: 'ProductContent',
    component: ProductContent
  },
  {
    path: '/login',
    name: 'AppLogin',
    component: AppLogin
  },
  {
    path: '/register',
    name: 'AppRegister',
    component: AppRegister
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: ProductDetail
  },
  {
    path: '/cart',
    name: 'CartShow',
    component: CartShow
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
