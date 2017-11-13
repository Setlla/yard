import Vue from 'Vue'
import VueRouter from 'vue-router'

import home from '../components/home.vue'
import projects from '../components/projects.vue'
import projectdetails from '../components/projectdetails.vue'
import shops from '../components/shops.vue'
import shopdetails from '../components/shopdetails.vue'

Vue.use(VueRouter)

export default new VueRouter({
	mode: 'history',
	base: __dirname,
	scrollBehavior,
	routes: [
		{ path: '/', component: home, meta: { scrollToTop: true }},
	    { path: '/projects', component: projects, meta: { scrollToTop: true }},
	    { path: '/projects/:id', component: projectdetails },
	    { path: '/shops', component: shops, meta: { scrollToTop: true }},
	    { path: '/shopdetails/:id', component: shopdetails }
	]
})

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    const position = {}
    if (to.hash) {
      position.selector = to.hash
    }
    if (to.matched.some(m => m.meta.scrollToTop)) {
      position.x = 0
      position.y = 0
    }
    return position
  }
}
