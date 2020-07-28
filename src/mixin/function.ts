import Vue from 'vue';
import vuescroll from 'vuescroll';

Vue.use(vuescroll);

Vue.prototype.$vuescrollConfig = {
  bar: {
    background: '#ccc',
    size: '8px',
  }
}