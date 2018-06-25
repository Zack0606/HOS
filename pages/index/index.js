//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../static/images/room5.jpg',
      '../../static/images/room3.jpg',
      '../../static/images/room0.jpg',
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 1000,
    duration: 1000,
    hotelName:"萤火虫创意酒店",
    rating:4.9,
    percentage:97,
    commentNum:496,
    address:"长沙市解放西路王府井B座5楼",
    deco:"2016年",
    open:"2017年2月",
    floor:"5",
    roomNum:"17",
    bar:{
      text:"尊敬的顾客您好：本店停车自费！",
      scrollable: true,
      leftIcon: 'https://img.yzcdn.cn/public_files/2017/8/10/6af5b7168eed548100d9041f07b7c616.png'
    },
    service:[
      {name:'wifi',
      img:'../../static/images/icon/wifi.png'
      },
      {
        name: '停车场',
        img: '../../static/images/icon/停车场.png'
      },
      {
        name: '刷卡支付',
        img: '../../static/images/icon/刷卡.png'
      }, {
        name: '行李寄存',
        img: '../../static/images/icon/行李.png'
      }, {
        name: '叫醒服务',
        img: '../../static/images/icon/闹钟.png'
      }, {
        name: '洗漱用品',
        img: '../../static/images/icon/洗漱用品.png'
      },
      
    ]
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
  goToOrderList: function () {
    wx.navigateTo({
      url: './orderList/orderList',
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
