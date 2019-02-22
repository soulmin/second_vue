// pages/component/page/movable-view/movable-view.js
Page({
  onShareAppMessage(){
    return{
      title:'movable-view',
      path:'pages/component/movable-view/movable-view'
    }
  },
  
  data:{
    x:0,
    y:0,
    scale:2,
  },

  tap(){
    this.setData({
      x: 30,
      y: 30
    })
  },

  onChange(e){
    console.log(e.detail)
  },

  onScale(e){
    console.log(e.detail)
  },

  tap2(){
      this.setData({
        scale: 3
      })
  }
})