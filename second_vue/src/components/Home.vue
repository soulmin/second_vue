<template>
	<div class="home">
		<h2>基础课程</h2>
		<div class="home_top">
			<div class="home_img" v-for="(item,index) in items" :key="index">
				<img :src="item.img" alt="图片">
				<h3>{{item.title}}</h3>
				<p>{{item.content1}}</p>
				<span>{{item.scontent1}}</span>
				<span>{{item.scontent2}}</span>
				<p>{{item.content2}}</p>
			</div>
			<div class="home_div">
				<p class="home_p1"><span>1</span>《JavaScript高级程序设计》</p>
				<p class="home_p2"><span>2</span>《JavaScript DOM 艺术编程》</p>
				<p class="home_p3"><span>3</span>《JavaScript语言精粹》</p>
				<p><span>4</span>《大话数据结构》</p>
				<p><span>5</span>《hash算法》</p>
				<p><span>6</span>《nodejs实战》</p>
				<p><span>7</span>《深入浅出nodejs》</p>
				<p><span>8</span>《深入浅出react》</p>
				<p><span>9</span>《css揭秘》</p>
				<p><span>10</span>《你不知道的JavaScript》</p>
			</div>
		</div>
		
		<div class="home_bottom">
			<div class="home_left">
				<h3>热门资讯</h3>
				<span>更多</span>
				<ul class="home_left_ul">
					<router-link to='' tag='li' v-for="(item,indexs) in message" :key='indexs'>
						
							<img :src="item.img" alt="图片">
							
								<div class="home_float">
									<h4>{{item.title}}</h4>
									<p>{{item.content1}}</p>
									<p>{{item.content2}}</p>
								</div>
						
								<div class="bottom_right">
									<p>{{item.amount}}</p>
									<p>{{item.words}}</p>
								</div>

						
					</router-link>
				</ul>
			</div>
			
			<div class="home_right">
				<h3>热门资讯</h3>
				<span>更多</span>
				<ul class="home_right_ul">
					<router-link to='' tag='li' v-for="(item,indexs) in message" :key='indexs'>
						<img :src="item.img" alt="图片">
						<div class="home_float">
							<h4>{{item.title}}</h4>
							<p>{{item.content1}}</p>
							<p>{{item.content2}}</p>
						</div>
						
						<div class="bottom_left">
							<p>{{item.amount}}</p>
							<p>{{item.words}}</p>
						</div>
					</router-link>
				</ul>
			</div>
			
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
						content2:'已经有12名学生在这里学习'
					},
					{
						img:require('../assets/img/html.png'),
						title:'HTML/CSS',
						content1:'精选课程，和我们一起零基础入门HTML/CSS，共发布6个课程，等你来挑战',
						scontent1:'HTML',
						scontent2:'网页制作',
						content2:'已经有12名学生在这里学习'
					},
					{
						img:require('../assets/img/Jquery.png'),
						title:'HTML/CSS',
						content1:'精选课程，和我们一起零基础入门HTML/CSS，共发布6个课程，等你来挑战',
						scontent1:'HTML',
						scontent2:'网页制作',
						content2:'已经有12名学生在这里学习'
					},
					{
						img:require('../assets/img/css.jpg'),
						title:'HTML/CSS',
						content1:'精选课程，和我们一起零基础入门HTML/CSS，共发布6个课程，等你来挑战',
						scontent1:'HTML',
						scontent2:'网页制作',
						content2:'已经有12名学生在这里学习'
					},
					{
						img:require('../assets/img/css.jpg'),
						title:'HTML/CSS',
						content1:'精选课程，和我们一起零基础入门HTML/CSS，共发布6个课程，等你来挑战',
						scontent1:'HTML',
						scontent2:'网页制作',
						content2:'已经有12名学生在这里学习'
					}
				],
				message:[
				{
					img:require('../assets/img/css.jpg'),
					title:'创业训练营',
					content1:'我们不上课，我们只为您解决问题',
					content2:'我们不上课，我们只为您解决问题',
					amount:'999',
					words:'浏览数',
				},
				{
					img:require('../assets/img/css.jpg'),
					title:'创业训练营',
					content1:'我们不上课，我们只为您解决问题',
					content2:'我们不上课，我们只为您解决问题',
					amount:'999',
					words:'浏览数',
				},
				{
					img:require('../assets/img/css.jpg'),
					title:'创业训练营',
					content1:'我们不上课，我们只为您解决问题',
					content2:'我们不上课，我们只为您解决问题',
					amount:'999',
					words:'浏览数',
				}
				]
			}
		}
	}
</script>

<style>
	.home{
		width: 938px;
		margin: 0 auto;
	}
	.home h2{
		text-align: left;
		margin: 20px 0px;
		font-weight:200;
	}
	.home_img{
		display: inline-block;
		width: 290px;
		height: 420px;
		box-sizing: border-box;
		border: 2px solid #eee;
		margin: 10px 12px;
		vertical-align: middle;
	}
	.home_bottom{
		overflow: hidden;
	}
	.home_div{
		display: inline-block;
		width: 290px;
		height: 420px;
		margin: 10px 12px;
		vertical-align: middle;
		text-align: left;
	}
	.home_top div:nth-child(2){
		margin-left:0px ;
	}
	.home_top div:first-child,.home_top div:nth-last-of-type(3){
		margin-left:0px ;
	}
	.home_img{
		text-align: left;
		padding:  0px 10px;
	}
	.home_img img{
		padding-top: 5px;
		width: 275px;
		height: 230px;
	}
	.home_top div:nth-of-type(3),.home_top div:last-child{
		margin-right: 0px;
	}
	.home_img h3{
		font-size: 16px;
		font-weight: 400;
		padding: 10px 0px;
	}
	.home_img p{
		color: #7f7f7f;
		font-size: 12px;
		line-height: 20px;
	}
	.home_img span{
		display: inline-block;
		border-radius: 15px;
		font-size: 10px;
		width: 60px;
		height: 40px;
		text-align: center;
		margin: 10px 10px 10px 0px;
		line-height: 40px;
		color: #7f7f7f;
		background: #F0F0F0;
	}
	.home_div span{
		display: inline-block;
		width:20px;
		height: 20px;
		margin: 10px 5px;
		line-height: 22px;
		text-align: center !important;
		background: #D2D2D2;
	}
	.home_div p{
		font-weight: 500;
	}
	.home_p1 span{
		background: #FF3C00;
	}
	.home_p2 span{
		background: #FF8400;
	}
	.home_p3 span{
		background: #FFB400;
	}
	.home_left_ul{
		width: 100%;
	}
	.home_right{
		display: inline-block;
		width: 45%;
	}
	.home_left_ul,.home_right_ul{
		list-style: none;
	}
	.home_left_ul img{
		width: 150px;
		height: 105px;
		float: left;
	}
	.all{
		display: inline-block;
		width: 180px;
		height: 108px;
	}
	.home_left_ul h4,.home_right_ul h4{
		display: inline-block;
		font-weight: 200;
		color: #787878;
	}
	.home_left_ul p,.home_right_ul p{
		display: inline-block;
		color:#787878 ;
		font-size: 12px;
		margin: 5px 0px;
	}
	.home_left,.home_right{
		text-align: left;
		height: auto;
		width: 45%;
		float: left;
		margin: 20px 8px;
	}
	.home_left_ul li,.home_right_ul li{
		width: 100%;
		height: 108px;
		margin: 40px 0px;
	}
	.home_right_ul img,.home_left_ul img{
		width: 180px;
		height: 105px;
		float: left;
	}
	.home_left h3,.home_right h3{
		display: inline-block;
		margin-bottom: 20px;
	}
	.bottom_right,.bottom_left{
		display: inline-block;
		margin-left:10px ;
	}
	.home_left span,.home_right span{
		display: inline-block;
		float: right;
	}
	.home_left_ul li:first-child,.home_right_ul li:first-child{
		margin-top: 0px;
	}
	.home_float{
		height: 108px;
		width: 180px;
		display: inline-block;
		margin-left: 5px;
	}
	.bottom_right p,.bottom_left p{
		display: block;
	}
	
</style>