import Vue from 'vue';
import VueOnsen from 'vue-onsenui';

import 'onsenui';
// Onsen UI Styling and Icons
require('onsenui/css-components-src/src/onsen-css-components.css');
require('onsenui/css/onsenui.css');

import App from './pages/App';

Vue.use(VueOnsen);

new Vue({
  el: '#app',
  template: '<app></app>',
  components:{App}
});
