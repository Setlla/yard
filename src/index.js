import Vue from 'Vue'
import bideo from 'bideo'

import router from './routers/router.js'

import './assets/css/yard.min.css'
//import './css/head.css'
//import './css/footer.css'
//import './css/index-mobile.css'
//import './css/main.css'
//import './css/project.css'
//import './css/purpose.css'
//import './css/shopkeeper.css'
//import './css/slide.css'
//import './css/contact.css'

new Vue({
  	router,
    methods: {
			changeBtn: function() {
				this.isshow ? this.isshow = false : this.isshow = true
			}
		},
    data: {
	  	isshow: false
	}
}).$mount('#body')
