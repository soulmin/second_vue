<template>
    <div class="cursor">
		<ul>
			<router-link tag='li' to='' v-for='(item,index) in items' :key="index">
				<div class="cursor_left">
					<img :src="item.img" alt="图片">
					<p>{{item.degree}}</p>
					<p>{{item.quantity}}</p>
				</div>
				<div class="cursor_right">
					<h2>{{item.title}} </h2><span>{{item.grade}}</span>
					<p>{{item.content}}</p>
					<a href="#">{{item.buttons}}</a>
				</div>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				items:[
					{
						img:require('../assets/img/css.jpg'),
						degree:'难度：中等 时间：一天',
						quantity:'大约有12人学习了这门课程',
						title:'基于CSS3实现抽奖大转盘',
						grade:'中级',
						content:'本课程将 教会大家如何使用 CSS3 的特有属性 transform 制 作抽奖转盘,过程简单且富有乐趣，并在课程中穿插了一些留 给大家的思考题，希望大家积极参与并完成思考题，会有很多收获哦。 掌握基本的CSS3transform，canvas，包括以下但不限于： 了解CSS3、 的定义、概念发展简史 ；',
						buttons:'开始学习',
					},
					{
						img:require('../assets/img/Jquery.png'),
						degree:'难度：中等 时间：一天',
						quantity:'大约有1200人学习了这门课程',
						title:'jQuery在购物车的使用',
						grade:'中级',
						content:'本课程将 教会大家如何使用 CSS3 的特有属性 transform 制 作抽奖转盘,过程简单且富有乐趣，并在课程中穿插了一些留 给大家的思考题，希望大家积极参与并完成思考题，会有很多收获哦。 掌握基本的CSS3transform，canvas，包括以下但不限于： 了解CSS3、 的定义、概念发展简史 ；',
						buttons:'开始学习',
					},
					{
						img:require('../assets/img/55.gif'),
						degree:'难度：中等 时间：一天',
						quantity:'大约有1200人学习了这门课程',
						title:'CSS3饼状loading效果',
						grade:'中级',
						content:'本课程将 教会大家如何使用 CSS3 的特有属性 transform 制 作抽奖转盘,过程简单且富有乐趣，并在课程中穿插了一些留 给大家的思考题，希望大家积极参与并完成思考题，会有很多收获哦。 掌握基本的CSS3transform，canvas，包括以下但不限于： 了解CSS3、 的定义、概念发展简史 ；',
						buttons:'开始学习',
					},
					{
						img:require('../assets/img/Jquery.png'),
						degree:'难度：中等 时间：一天',
						quantity:'大约有1200人学习了这门课程',
						title:'动态数据绑定（一）',
						grade:'中级',
						content:'本课程将 教会大家如何使用 CSS3 的特有属性 transform 制 作抽奖转盘,过程简单且富有乐趣，并在课程中穿插了一些留 给大家的思考题，希望大家积极参与并完成思考题，会有很多收获哦。 掌握基本的CSS3transform，canvas，包括以下但不限于： 了解CSS3、 的定义、概念发展简史 ；',
						buttons:'开始学习',
					},
					{
						img:require('../assets/img/3.png'),
						degree:'难度：中等 时间：一天',
						quantity:'大约有1200人学习了这门课程',
						title:'基于CSS3实现抽奖大转盘',
						grade:'中级',
						content:'本课程将 教会大家如何使用 CSS3 的特有属性 transform 制 作抽奖转盘,过程简单且富有乐趣，并在课程中穿插了一些留 给大家的思考题，希望大家积极参与并完成思考题，会有很多收获哦。 掌握基本的CSS3transform，canvas，包括以下但不限于： 了解CSS3、 的定义、概念发展简史 ；',
						buttons:'开始学习',
					},
					{
						img:require('../assets/img/css.jpg'),
						degree:'难度：中等 时间：一天',
						quantity:'大约有1200人学习了这门课程',
						title:'基于CSS3实现抽奖大转盘',
						grade:'中级',
						content:'本课程将 教会大家如何使用 CSS3 的特有属性 transform 制 作抽奖转盘,过程简单且富有乐趣，并在课程中穿插了一些留 给大家的思考题，希望大家积极参与并完成思考题，会有很多收获哦。 掌握基本的CSS3transform，canvas，包括以下但不限于： 了解CSS3、 的定义、概念发展简史 ；',
						buttons:'开始学习',
					},
				]
			}
		}
	}
</script>

<style>
	.cursor{
		width: 100%;
		background: #EEEEEE;
		padding: 30px 0px 10px 0px;
	}
	.cursor ul{
		width: 938px;
		margin: 0px auto;
		list-style: none;
		
	}
	.cursor li{
		height: 300px;
		margin: 5px;
		background: #FFFFFF !important;
		border: 1px solid white;
		border-radius:15px ;
		padding: 25px;
	}
	.cursor_left{
		display: inline-block;
		margin:0px 20px;
		padding-left: 80px;
	}
	.cursor_left img{
		width: 265px;
		height: 246px;
		display: block;
	}
	.cursor_right{
		float: right;
		width: 480px;
		margin: 25px 5px;
		text-align: left;
	}
	.cursor_left p{
		margin: 5px;
		color: #A6A6A6;
		text-align: left;
	}
	.cursor_right h2{
		display: inline-block;
		font-weight: 400;
	}
	.cursor_right span{
		display: inline-block;
		float: right;
		width: 50px;
		height: 26px;
		background: #F0F0F0;
		line-height: 30px;
		text-align: center !important;
		border-radius:10px ;
	}
	.cursor_right p{
		margin: 20px 0px;
		line-height: 30px;
		color: #A6A6AE;
		font-size: 15px;
	}
	.cursor_right a{
		text-decoration: none;
		color: #FFFFFF;
		background: #54C15A;
		width: 150px;
		height: 40px;
		display: inline-block;
		text-align: center!important;
		line-height: 40px;
		border-radius: 15px;
		font-size: 18px;
	}
</style>