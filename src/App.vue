<template>
  <div id="app">
    <Hello :msg = 'msg'></Hello>
    <test></test>
  </div>
</template>

<script>
import Hello from './components/Hello'
import test from './element_components/test'

export default {
  name: 'App',
  components: {
    Hello,
    test,
  },
  data(){
    return this.$parent.$data
  },
  watch:{

  },
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
