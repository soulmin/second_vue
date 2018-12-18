<template>
	<div class="news">
		<div class="news_part">
			<ul>
				<router-link to='' tag='li'v-for='(item,index) in items' :key="index">
					<h2>{{item.title}}</h2>
					<p>{{item.content1}}</p>
					<p>{{item.content2}}</p>
					<p>{{item.content3}}</p>
					<p>{{item.content4}}</p>
					<p>{{item.content5}}</p>
					<p>{{item.content6}}</p>
					<p>{{item.content7}}</p>
					<p>{{item.content8}}</p>
					<p>{{item.content9}}</p>
					<p>{{item.content10}}</p>
				</router-link>
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
					title:'资讯',
					content1:'1.蚂蚁金服研发出眼纹识别技术 能识别同卵多胞胎',
					content2:'2.中国取消会计从业资格证，做假账将不得再从事会计工作。',
					content3:'3.滴滴拿下电子地图甲级测绘资质。',
					content4:'4.马云：蚂蚁金服两年内不会上市，更多关注金融科技。',
					content5:'5.京东今日宣布 3C 事业部合并组建为 3C 文旅事业部。',
					content6:'6.每日优鲜宣布全面转型会员制，推出会员专享商品 300 款， 返现 5%。',
					content7:'7.华为和印度多家运营商谈判，计划在当地推进 5G 技术创新。',
					content8:'8.微软 Dynamics 365 今日宣布正式登陆中国。',
					content9:'9.Facebook 称，至少 12% 的账户是虚假或重复账户。',
					content10:'10.彭博社：腾讯音乐寻求银行参与其至少 10 亿美元 IPO。',
				},
				{
					title:'产品',
					content1:'1.京东金融上线“京东超脑”可实现刷脸支付。',
					content2:'2.传 ofo 正秘密研发共享充电宝。',
					content3:'3.美团点评关闭充电宝. 松鼠便利店试点运营两个项目。',
					content4:'4.QQ 同步助手将用户生日信息弹窗给他人，律师称此行为侵犯隐私。',
					content5:'5.11 月 8 日腾讯将公布神秘的吃鸡手游。',
					content6:'6.新浪微博全资收购短视频公司“酷燃”，“秒拍”拟受波动。',
					content7:'7.国家邮政局微信小程序上线：可以收发上百家快递案。',
					content8:'8.国家邮政局微信小程序上线：可以收发上百家快递案。',
					content9:'9.爱奇艺用 AI 算法预测节目流量，中国有嘻哈请吴亦凡由 AI 定。',
					content10:'10.星巴克将茶饮品牌 Tazo 3.84 亿美元售予联合利华，将专注唯一茶饮品牌 Teavana。',
				},
				{
					title:'融资',
					content1:'1.湘财证券募集资金 15.18 亿，原有股东认购 99.46%。',
					content2:'2.无人便利店“零号元素”获 1000 万 Pre-A 轮融资。',
					content3:'3.聚焦办公空间生态环境“开工大吉”获得数百万元天使投资。',
					content4:'4.办公室无人货架公司“小闪科技”完成 2000 万元融资。',
					content5:'5.法律人工智能技术团队“法狗狗”法完成千万级别 Pre-A 轮融资。',
					content6:'6.在线汽车交易平台易鑫拟于香港 IPO 筹资 8.67 亿美元。',
					content7:'7.全球潮货移动电商品牌“达令”获得苏宁电器战略投资。',
					content8:'8.珠宝共享平台“一起戴”APP 完成了 5000 万元的战略融资。',
					content9:'9.专注语音合成前端技术的“标贝科技”完成千万级人民币融资。',
				},
				]
			}
		}
	}
</script>

<style>
	.news{
		background: #EEEEEE;
		padding: 30px;
	}
	.news_part{
		width: 938px;
		margin: 0 auto;
		background: #FFFFFF !important;
		border-radius:15px ;
	}
	.news_part ul{
		margin-left:60px ;
		list-style: none;
		text-align: left;
	}
	.news_part li{
		padding-top: 30px;
	}
	.news_part h2{
		font-weight: 500;
		margin: 10px 0px;
	}
	.news_part p{
		margin-left:30px ;
		line-height: 30px;
		color: #ACACAC;
	}
	.news_part li:last-child{
		padding-bottom: 20px;
	}
</style>