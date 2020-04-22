<template>
  <div id="app">
    <Hello :msg="msg1"></Hello>
    <Hello :msg="msg2"></Hello>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Hello from './components/Hello'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Hello,
  },
  data(){
    return {
      msg1:'ninxxx',
      msg2:'xxxdfadf',
    }
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
