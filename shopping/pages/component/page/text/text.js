const texts = [
  '2国内无现金支付这么普遍',
  '钞票却没有停止印刷',
  '现金都去哪了',
  '中国的第三方移动支付在2017年的金额已经到达了将近一百万',
  '机中的财富依然是我们的钱',
  '财富数字化了',
  '还是比例小',
  '银行金库一直在',
  '收藏爱好者',
  '印钞数量下降',
  '这几年印钞的数量已经在慢慢的下降了',
  '现在印钞的数量大概下降了百分之三十',
  '........'
]
Page({
 onShareAppMessage(){
   return {
     title:'text',
     path:'pages/component/page/text/text'
   }
 },
 
 data:{
   text:'',
   canAdd:true,
   canRemove:false
 },
 extraLine:[],

 add(){
   this.extraLine.push(texts[this.extraLine.length % 12])
   this.setData({
     text:this.extraLine.join('\n'),
     canAdd:this.extraLine.length < 12,
     canRemove:this.extraLine.length > 0
   })

   setTimeout(() => {
     this.setData({
       scrollTop:99999
     })
   },0)
 },

 remove(){
   if(this.extraLine.length > 0){
     this.extraLine.pop()
     this.setData({
       text:this.extraLine.join('\n'),
       canAdd:this.extraLine.length < 12,
       canRemove:this.extraLine.length > 0,
     })
   }
   setTimeout(() =>{
     this.setData({
       scrollTop:99999
     })
   },0)
 }
})