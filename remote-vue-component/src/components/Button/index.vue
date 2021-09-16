<template>
  <button class="btn" @click="handleClick">{{$attrs.text}}</button>
</template>

<script>
export default {
  name: 'Button',
  data() {
    return {

    }
  },
  methods: {
    handleClick() {
      this.$emit('handleClick');
    }
  }
}
</script>

<style lang="css">
  .btn {
    font-size: 16px;
    color: #da2227;
  }
</style>