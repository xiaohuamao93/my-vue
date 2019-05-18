// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import VueAxios from 'vue-axios';
import Mint from 'mint-ui';

import './common/mobileRem';
import VueDraggableResizable from 'vue-draggable-resizable'
import 'mint-ui/lib/style.css'

Vue.component('vue-draggable-resizable', VueDraggableResizable)

Vue.config.productionTip = false

Vue.use(VueAxios, axios);

Vue.use(Mint);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
