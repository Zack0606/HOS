var app = getApp()

Page({
  data:{
    rank:0,
    content:null
  },
  onReady:function () {
    var that = this;
    this.stars = this.selectComponent("#stars");
    console.log(that.stars.getRank()+ "sdfsdf")
  }
})