<template>
	<div class="head">
		<div class="head_first">
			<ul class="head_ul">
			<router-link tag='li':to='item.ref' v-for="(item,index) in items" :key='index' :class="{'isActive':item.name == $route.name}">
				{{item.name}}
			</router-link>
			</ul>
			<div class="head_input">
				<input type="text" placeholder="搜索 课程 / 问答" name="搜索">
				<i class="iconfont">&#xe603;</i>
				<span>登陆</span>
			</div>
		</div>
		
		<div class="splider_all" v-on:mouseover="stop()" v-on:mouseout="move()">
			<div class="head_splider" >
				<transition-group tag='ul' name="bounce">
					<li  v-for='(img,index) in imgs' :key='index'  v-show="index==mark">
						<img :src='img.url' alt="图片">
					</li>
				</transition-group>
			</div>
			<div class="dot">
				<span v-for="(dots,index) in imgs" :key='index' :class="{'active':mark == index}" @click="change(index)"></span>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				mark:0,
				timer:null,
				items:[
					{
						ref:'/',
						name:'首页'
					},
					{
						ref:'/course.html',
						name:'课程'
					},
					{
						ref:'/community.html',
						name:'社区'
					},
					{
						ref:'news.html',
						name:'资讯'
					}
				],
				imgs:[
					{
						url:require('../assets/img/ban.jpg'),
						name:'第一张'
					},
					{
						url:require('../assets/img/banner.jpg'),
						name:'第二张'
					},
					{
						url:require('../assets/img/ban.jpg'),
						name:'第三张'
					}
				]
			}
		},
		methods:{
			autoplay(){
				this.mark++;
				if(this.mark == 3){
					this.mark = 0;
				}
				
			},
			play(){
				this.timer = setInterval(this.autoplay,2500)
			},
			stop(){
				clearInterval(this.timer)
			},
			move(){
				this.timer = setInterval(this.autoplay,2500)
			},
			change(i){
				this.mark = i;
			}
		},
		created(){
			this.play()
		}
	}
</script>

<style>
	.head{
		width: 100%;
		height: 370px;
		
	}
	.head_first{
		width: 938px;
		margin: 0px auto;
	}
	.head_ul{
		list-style: none;
		display: flex;
		float: left;
	}
	.head_ul li{
		height: 100%;
		width: 120px;
		color: #777;
		font-size: 18px;
		line-height: 70px;
		cursor: pointer;
	}
	.head_ul li:first-child{
		margin-left: 0px;
	}
	.head_input{
		margin: 15px;
		display: inline-block;
		position: relative;
	}
	.head_input input{
		margin-left: 20px;
		border: 1px solid #777;
		border-radius: 20px;
		padding: 10px;
		
	}
	.head_input i{
		position: absolute;
		top: 10px;
		left: 170px;
		font-size: 18px;
		font-weight: 600;
	}
	.head_input span{
		float: right;
		margin-left: 30px;
		width: 100px;
		height: 35px;
		border-radius:15px ;
		display: inline-block;
		border: 1px solid #1AD1A3;
		background: #1ad1a3;
		line-height: 35px;
		color: white;
	}
	.splider_all{
		width: 100%;
		overflow: hidden;
		position: relative;
		height: 300px;
		cursor: pointer;
	}
	.head_splider{
		height: 300px;
		width: 100%;
	}
	.head_splider ul{
		list-style: none;
		display: flex;
		width: 300%;
	}
	.head_splider img{
		height: 300px;
		width: 100%;
	}
	.dot{
		position: absolute;
		top: 90%;
		left: 45%;	
	}
	.dot span{
		border-radius: 50%;
		border: 2px solid #777777;
		width: 5px;
		height: 5px;
		display: inline-block;
		margin: 10px;
		background:#777777 ;
	}
	.active{
		border: 2px solid #2C3E50 !important;
		background: #2C3E50;
	}
	.isActive{
		background: #E7E7E7;
	}
</style>