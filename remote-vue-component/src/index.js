import Vue from 'vue';
import Button from './components/Button/index.vue';

const components = [ Button ];

const install = () => {
  components.map((component) => {
    Vue.component(component.name, component);
  })
};

export default {
  install,
  Button,
}
