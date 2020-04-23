<template>
  <div id="app">
    <Hello :msg = 'msg'></Hello>
    <p v-bind:class="color">{{msg}}</p>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'App',
  components: {
    Hello,
  },
  data(){
    return this.$parent.$data
  },
  beforeCreate() {
    console.log('before create')
  },
  created(){
    console.log('created')
  },
  beforeMount() {
    console.log('before mounte')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('before update')
  },
  updated(){
    console.log('updated')
  }
}


</script>

<style>
  .red {color:red}
  .blue {color:blue}
</style>
