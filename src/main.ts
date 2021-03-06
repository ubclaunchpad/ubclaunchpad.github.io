import Vue from 'vue';
import VueFathom from '@ubclaunchpad/vue-fathom';
import VueLazyload from 'vue-lazyload';
import VueUnicons from './unicons';

// third-party styles - see CONTRIBUTING.md
import 'bulma/css/bulma.css';
import 'animate.css';
import 'tippy.js/dist/tippy.css';

// launch pad global styles
import './styles/global.scss';
import App from './App.vue';

// polyfills for certain features
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

// load vue plugins
Vue.use(VueFathom, {
  siteID: 'FTSSPSGR',
  disabled: (process.env.NODE_ENV !== 'production'),
  settings: {
    url: 'https://chinchilla.ubclaunchpad.com/script.js',
    excludedDomains: ['localhost'],
  },
});
Vue.use(VueLazyload);
Vue.use(VueUnicons);

// set up vue configuration
Vue.config.productionTip = false;

// init vue app
new Vue({
  render: h => h(App),
}).$mount('#app');
