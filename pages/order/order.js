const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    tabs: {
      list: [{
        id: 1,
        title: '当前订单',
        icon: "../../static/images/icon/cart.png",
        selected_icon: "../../static/images/icon/cart-on.png",
        selected:true
      }, {
        id: 2,
        title: '待评价',
        icon: "../../static/images/icon/comments.png",
        selected_icon: "../../static/images/icon/comments-on.png",
        selected: false
      }, {
        id: 3,
        title: '所有订单',
        icon: "../../static/images/icon/all.png",
        selected_icon: "../../static/images/icon/all-on.png",
        selected: false
      }]
    },
    selectedTab:1
  },
  //事件处理函数

  goToRewards: function () {
    wx.navigateTo({
      url: './rewards/rewards',
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // 标签页选择
  switchTab: function (e) {
    var id=Number(e.currentTarget.id)
    console.log("switchto"+id)
    console.log(e)
    for(var i=0;i<3;i++){
      if(i==parseInt(id)){
        this.data.tabs.list[i].selected=true;
        this.data.selectedTab=i;
      }
      else{
        this.data.tabs.list[i].selected = false;
      }
    }
    this.setData({
      tabs:this.data.tabs
    })
  }
})
