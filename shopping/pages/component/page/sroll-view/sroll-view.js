const order = ['box vbox_1', 'box vbox_2','box vbox_3']

Page({
  onShareAppMessage(){
    return{
      title:'scroll-view',
      path:'pages/component/page/scroll-view/scroll-view'
    }
  },
  data:{
    toView:'box vbox_1'
  },
  upper(e){
    console.log(e)
  },
  lower(e){
    console.log(e)
  },
  scroll(e){
    console.log(e)
  },
  scrollToTop(){
    this.setAction({
      scrollTop:0
    })
  },
  tap(){
    for(let i = 0;i < order.length;i++){
      if(order[i] == this.data.toView){
        this.setData({
          toView:order[i + 1],
          scrollTop:(i + 1) *200
        })
        break
      }
    }
  }
})