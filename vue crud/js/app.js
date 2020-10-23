
require('./bootstrap');

window.Vue = require('vue');

import router from './routes';

// Sweet Alert
window.swal = require('sweetalert2')

window.toast = swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


Vue.component('navbar', require('./partials/Navbar.vue'));

const app = new Vue({
    el: '#app',
    router
});
