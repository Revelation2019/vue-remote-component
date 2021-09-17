<template>
  <div>
    <component :is="mode" v-bind="$attrs"></component>
    <!-- <remote-js :src="type"></remote-js> -->
  </div>
</template>

<script>
import { markRaw, h } from 'vue';
window.scriptLoadedevent = new CustomEvent('scriptLoaded');

export default {
  name: 'RemoteBaseComponent',
  props: {
    type: String,
  },
  data() {
    return {
      mode: ''
    }
  },
  inheritAttrs: false,
  // components: {
  //   'remote-js': {
  //     render() {
  //       return h('script', { 
  //         type: 'text/javascript', 
  //         src: `http://127.0.0.1:8888/${this.src}.js`,
  //         onload: "document.dispatchEvent(scriptLoadedevent)"
  //       });
  //     },
  //     props: {
  //       src: { type: String, required: true },
  //     },
  //   },
  // },
  // created() {
  //   document.addEventListener('scriptLoaded', (args) => {
//       this.mode = markRaw(window.MyComponent.default);
  //   })
  // },
  mounted() {
    this.loadScript()
    // .then(() => {
    //   this.mode = markRaw(window.MyComponent.default);
    // })
  },
  methods: {
    loadScript() {
      // 动态script
      // return new Promise((resolve, reject) => {
      //   const script = document.createElement('script');
      //   const target = document.getElementsByTagName('script')[0] || document.head;
      //   script.type = 'text/javascript';
      //   script.src = `http://127.0.0.1:8888/${this.type}.js`;
      //   script.onload = resolve;
      //   script.onerror = reject;
      //   target.parentNode.insertBefore(script, target)
      // })
      // 

      // ajax请求
      // fetch(`http://127.0.0.1:8888/${this.type}.js`).then((res) => {
      //   console.log(res)
      //   if (res.status === 200) {
      //     res.text().then((code) => {
      //       new Function(`${code}`)()
      //       // window.eval(code)
      //       this.mode = markRaw(window.MyComponent.default);
      //     })
      //   }
      // })

      window.System.import(`http://127.0.0.1:8888/${this.type}.js`).then((module) => {
        console.log('module', module)
        this.mode = module.default;
      })
    }
  }
}
</script>