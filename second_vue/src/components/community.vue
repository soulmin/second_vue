<template>
	<div class="community">
		<div class="community_part">
			<div class="part">
				<div class="part_left">
					<img src="../assets/img/3.png" alt="图片">
					<p>难度：中等 时间：一天</p>
					<p>大约有 1200 人学习了这门课程</p>
				</div>
				<div class="part_right">
					<h2>基于CSS3实现抽奖大转盘</h2>
					<span class="part_span">中级</span>
					<p>
						本课程将 教会大家如何使用 CSS3 的特有属性 transform 制 作抽奖转盘,过程简单且富有乐趣，并在课程中穿插了一些留 给大家的思考题，希望大家积极参与并完成思考题，会有很多收获哦。
					</p>
					<span>CSS3</span>
					<span>动画</span>
					<span>JavaScript</span>
				</div>
			</div>
            <ul class="community_ul">
				<li v-for="(item,index) in items" :key="index">
					<h3>{{item.title}}</h3>
					<p>{{item.content1}}</p>
					<p>{{item.content2}}</p>
					<p>{{item.content3}}</p>
					<p>{{item.content4}}</p>
					<p>{{item.content5}}</p>
					<p>{{item.content6}}</p>
					<p>{{item.content7}}</p>
					<p>{{item.content8}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				items:[
					{
						title:'课程目标',	
						content1:'针对设计稿样式进行合理的HTML架构，包括以下但不限于：',
						content2:'掌握常用HTML标签的含义、用法',
						content3:'能够基于设计稿来合理规划HTML文档结构',
						content4:'理解语义化，合理地使用HTML标签来构建页面',
						content5:'掌握基本的CSS编码，包括以下但不限于：',
						content6:'了解CSS的定义、概念、发展简史',
						content7:'掌握CSS选择器的含义和用法',
						content8:'实践并掌握CSS的颜色、字体、背景、边框、盒模型、简单 布局等样式的定义方式',
					},
					{
						title:'任务描述',
						content1:'CSS3 实现抽奖大转盘',
						content2:'',
						content3:'',
						content4:'',
						content5:'',
						content6:'',
						content7:'',
						content8:'',
					},
					{
						title:'课程思路',
						content1:'首先来分析下抽奖转盘的特点,确定一下设计的整体构思。',
						content2:'以一个从没写过抽奖转盘的新手角度来考虑，大概会遇到一下几个难点：',
						content3:'1、转盘如何才能开始旋转；',
						content4:'2、转盘的速度控制。为了更加逼真的模拟现实中的转盘旋转，需要将转盘速度控制为 慢-快-慢；',
						content5:'3、如何等分切割转盘的扇形区域；',
						content6:'4、奖品是如何随机抽取的；',
						content7:'5、如何判定旋转已经结束；',
						content8:'接下来，就将逐个解决以上问题，同时，也一步步完成我们的抽奖转盘。',
					},
					{
						title:'在线学习参考资料',
						content1:'MDN HTML入门',
						content2:'MDN CSS3入门教程',
						content3:'w3cplus',
						content4:'',
						content5:'',
						content6:'',
						content7:'',
						content8:'',
					},
				]
				
			}
		}
	}
</script>

<style>
	.community{
		background: #EEEEEE;
		padding: 30px;
	}
	.community_part{
		width: 938px;
		margin: 0 auto;
		background: #FFFFFF !important;
		border-radius:15px ;
	}
	.part{
		margin: 40px;
	}
	.part_left img{
		float: left;
		width: 265px;
		height: 246px;
		display: block;
	}
	.part_left {
		height: 300px;
		display: inline-block;
		float: left;
		margin-top: 40px;
	}
	.part_right{
		text-align: left;
		display: inline-block;
		height: 300px;
		width: 500px;
		margin-top: 50px;
		
	}
	.part_right h2{
		font-weight: 200;
		display: inline-block;
		margin-right:100px ;
	}
	.part_right p{
		margin-top: 30px;
		line-height: 30px;
		font-size: 14px;
		color: #ACACAC;
	}
	.part_right span{
		display: inline-block;
		background: #F0F0F0;
		color: #ACACAC;
		width: 65px;
		height: 30px;
		font-size: 12px;
		margin: 10px 0px;
		line-height: 30px;
		text-align: center;
		border-radius:15px ;
		}
	.community_part ul{
		margin: 60px 0px 0px 30px;
		text-align: left;
		list-style: none;
		color:#ACACAC ;
		line-height: 30px;
		font-size: 14px;
	}
	.community_part h3{
		font-size: 24px!important;
		color: black;
		margin: 20px 0px;
		font-weight: 400;
	}
	.community_ul li:last-child{
		color: #54C15A;
		padding-bottom: 10px;
	}
	.community_ul p{
		margin: 5px 0px;
		padding-left: 40px;
	}
</style>