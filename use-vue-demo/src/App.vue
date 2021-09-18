<template>
    <RemoteBaseComponent type="button" text="提交" v-on:handleClick="handleClick"/>
</template>

<script>
import RemoteBaseComponent from './components/RemoteBaseComponent.vue';

export default {
  name: 'App',
  components: {
    RemoteBaseComponent,
  },
  data() {
    return {
    }
  },
  methods: {
    handleClick() {
      console.log('click');
    }
  }
}
</script>

<style>

</style>
