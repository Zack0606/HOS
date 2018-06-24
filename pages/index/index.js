//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../static/images/room1.jpg',
      '../../static/images/room2.jpg',
      '../../static/images/room3.jpg',
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 1000,
    duration: 1000,
    rating:4.9,
    percentage:97,
    commentNum:496,
    address:"长沙市解放西路王府井B座5楼"
  },
  goToHotel: function (e) {
    wx.openLocation({
      latitude: 28.1919590000, 
      longitude: 112.9751820000,
      scale: 18,
      name: '王府井商务楼',
      address: '中国湖南省长沙市天心区解放西路316号'
    })
  },
  goToComments: function () {
    wx.navigateTo({
      url: './comments/comments',
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
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
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
