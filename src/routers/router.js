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
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    const position = {}
    // new navigation.
    // scroll to anchor by returning the selector
    if (to.hash) {
      position.selector = to.hash
    }
    // check if any matched route config has meta that requires scrolling to top
    if (to.matched.some(m => m.meta.scrollToTop)) {
      // cords will be used if no selector is provided,
      // or if the selector didn't match any element.
      position.x = 0
      position.y = 0
    }
    // if the returned position is falsy or an empty object,
    // will retain current scroll position.
    return position
  }
}
