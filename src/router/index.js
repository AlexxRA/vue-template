import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views'
import ProductIndex from '@/views/indexes/Product'
import Product from '@/components/Product'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/Product/add', component: Product, name: 'product.add' },
  { path: '/Product/:item/edit', component: Product, name: 'product.edit' },
  { path: '/Product', component: ProductIndex, name: 'product.index' }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
