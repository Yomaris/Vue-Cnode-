<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view name="sidebar"></router-view>
      <router-view name="main"></router-view> 
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Postlist from './components/Postlist'
export default {
  name: 'App',
  components:{
    Header,
    Postlist
  }
}
</script>

<style>
.main{
  width: 90%;
  margin: 0 auto;
}
#app{
  background: #e1e1e1
}
</style>
