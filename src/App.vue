<template>
  	<MyHeader></MyHeader>
	<div class="main-container">
		<LeftMenu></LeftMenu>
		<div class="router-container">
			<router-view></router-view>
		</div>
	</div>
	<MyFooter></MyFooter>
  
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import LeftMenu from './components/LeftMenu.vue'
import MyFooter from './components/MyFooter.vue'


export default {
  	name: 'App',
  	components: {
    	MyHeader, LeftMenu, MyFooter
  	},
	methods: {
		getNewData(){
            this.$store.dispatch('getData');
        }
	},
	created(){
		this.getNewData();
	}
}
</script>

<style>

a
{
	text-decoration: none;
	color: #000;
}

h2 {
	font-size: 40px
}

#app {
  	font-family: Avenir, Helvetica, Arial, sans-serif;
  	-webkit-font-smoothing: antialiased;
  	-moz-osx-font-smoothing: grayscale;
  
  	color: #2c3e50;
}

*{
	font-size: 15px;
	margin-block-start: 0;
	margin-block-end: 0;
	margin-inline-start: 0px;
	margin-inline-end: 0px;
	padding-inline-start: 0;

	
	text-decoration: none  !important;
}

.medium-img
{
    display: block;
    position: relative;
    width: 500px;
    height: 450px;
}

.container__left
{
	width: 400px;
	border-right: 1px gray solid;
  
}

.router-container
{
  	display: block;;
	width: 80%;
}

.main-container
{
	display: flex;
}
</style>
