import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Lines from '../views/Lines.vue'
import Stops from '../views/Stops.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Bus Lines',
    component: Lines
  },
  {
    path: '/stops',
    name: 'Bus Stops',
    component: Stops
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
