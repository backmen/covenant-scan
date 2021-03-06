import Vue from 'vue'
import Router from 'vue-router'
import Landing from './views/Landing.vue'
import Blocks from './views/Blocks.vue'
import Txs from './views/Txs.vue'
import Block from './views/Block.vue'
import Transaction from './views/Transaction.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/blocks',
      name: 'blocks',
      component: Blocks,
    },
    {
      path: '/txs',
      name: 'txs',
      component: Txs,
    },
    {
      path: '/block/:hash',
      name: 'block',
      props: true,
      component: Block
    },
    {
      path: '/tx/:hash',
      name: 'tx',
      props: true,
      component: Transaction
    },
  ],
})
