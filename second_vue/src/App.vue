<template>
  <div id="app">
    <Navhead></Navhead>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
	import Navhead from './components/Navhead'
	import Home from './components/Home'
	import Footer from './components/Footer'
export default {
 // name: 'App'\
 components:{
 		Navhead,
 		Home,
 		Footer,
 }
}
</script>

<style>
*{
	margin: 0px;
	padding: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
	width: 960px;
	margin: 0 auto;
}
</style>
