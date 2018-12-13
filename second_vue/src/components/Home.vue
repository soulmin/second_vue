<template>
	<div class="home">
		<h2>基础课程</h2>
		<div class="home_img" v-for="(item,index) in items" :key="index">
			<img :src="item.img" alt="图片">
			<h3>{{item.title}}</h3>
			<p>{{item.content1}}</p>
			<span>{{item.scontent1}}</span>
			<span>{{item.scontent2}}</span>
			<p>{{item.content2}}</p>
		</div>
		<div class="home_div">
			<p><span>1</span>《JavaScript高级程序设计》</p>
			<p><span>2</span>《JavaScript DOM 艺术编程》</p>
			<p><span>3</span>《JavaScript语言精粹》</p>
			<p><span>4</span>《大话数据结构》</p>
			<p><span>5</span>《hash算法》</p>
			<p><span>6</span>《nodejs实战》</p>
			<p><span>7</span>《深入浅出nodejs》</p>
			<p><span>8</span>《深入浅出react》</p>
			<p><span>9</span>《css揭秘》</p>
			<p><span>10</span>《你不知道的JavaScript》</p>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				items:[
					{
						img:require('../assets/img/html.jpg'),
						title:'HTML/CSS',
						content1:'精选课程，和我们一起零基础入门HTML/CSS，共发布6个课程，等你来挑战',
						scontent1:'HTML',
						scontent2:'网页制作',
						content2:'已经有名学生在这里学习'
					},
					{
						img:require('../assets/img/html.png'),
						title:'HTML/CSS',
						content1:'精选课程，和我们一起零基础入门HTML/CSS，共发布6个课程，等你来挑战',
						scontent1:'HTML',
						scontent2:'网页制作',
						content2:'已经有名学生在这里学习'
					},
					{
						img:require('../assets/img/Jquery.png'),
						title:'HTML/CSS',
						content1:'精选课程，和我们一起零基础入门HTML/CSS，共发布6个课程，等你来挑战',
						scontent1:'HTML',
						scontent2:'网页制作',
						content2:'已经有名学生在这里学习'
					},
					{
						img:require('../assets/img/css.jpg'),
						title:'HTML/CSS',
						content1:'精选课程，和我们一起零基础入门HTML/CSS，共发布6个课程，等你来挑战',
						scontent1:'HTML',
						scontent2:'网页制作',
						content2:'已经有名学生在这里学习'
					},
					{
						img:require('../assets/img/css.jpg'),
						title:'HTML/CSS',
						content1:'精选课程，和我们一起零基础入门HTML/CSS，共发布6个课程，等你来挑战',
						scontent1:'HTML',
						scontent2:'网页制作',
						content2:'已经有名学生在这里学习'
					}
				]
			}
		}
	}
</script>

<style>
	.home{
		width: 960px;
		margin: 0 auto;
	}
	.home h2{
		text-align: left;
		margin: 20px 0px;
		font-weight:200;
	}
	.home div{
		display: inline-block;
		width: 290px;
		height: 420px;
		box-sizing: border-box;
		border: 2px solid #eee;
		margin: 10px 18px;
	}
	.home div:nth-child(2){
		margin-left:0px ;
	}
	.hom div+div+div{
		margin-right: 0px;
	}
	.home div+div+div+div{
		margin-left:0px ;
	}
	.home_img img{
		padding-top: 5px;
		width: 275px;
		height: 230px;
	}
	.home div:last-child{
		margin-right: 0px;
	}
	.home_div{
		
	}
</style>