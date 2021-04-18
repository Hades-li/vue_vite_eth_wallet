import {createRouter,createWebHistory, RouteRecordRaw } from 'vue-router'
import Wallet from '../views/Wallet.vue'
import MyWallet from '../views/myWallet.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/create',
    name: 'createWallet',
    meta: {
      title: '创建钱包'
    },
    component: Wallet
  },
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页'
    },
    component: MyWallet
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

