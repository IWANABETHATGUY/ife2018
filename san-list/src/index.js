import san from 'san';

import App from './App.san';

const app = san.defineComponent(App);

const VM = san.defineComponent({
  components: {
    app
  },
  template: `<div><app></app></div>`,
  initData() {
    return {
      msg: 'world'
    }
  }
});

const vm = new VM();
vm.attach(document.getElementById('app'));