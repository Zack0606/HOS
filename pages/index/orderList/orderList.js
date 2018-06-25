// pages/index/orderList/orderList.js
var postRoomType = require('../../../static/data.js');
Page({


  data: {
    checkInDate: "",
    checkOutDate: "",
    stay: '',
    array: ['美国', '中国', '巴西', '日本'],
    roomList:[]
  },
  onLoad: function() {
    this.setData({ //获取数据成功后的数据绑定  
      roomList: postRoomType.roomType,
    });
  console.log(this.data.roomList);
  },
  goToMakeOrder: function (e) {
    wx.setStorage({
      key: "selectType",
      data: e.currentTarget.id
    });
    wx.navigateTo({
      url: '../makeOrder/makeOrder',
    });
    
  },
  change1({
    detail
  }) {
    this.setData({
      checkInDate: detail.value[0] + '-' + detail.value[1] + '-' + detail.value[2]
    });
    wx.setStorage({
      key: "checkInDate",
      data: detail.value[0] + '-' + detail.value[1] + '-' + detail.value[2]
    });
   // console.log(this.data.cid);
  },
  change2({
    detail
  }) {
    this.setData({
      checkOutDate: detail.value[0] + '-' + detail.value[1] + '-' + detail.value[2]
    });
    wx.setStorage({
      key: "checkOutDate",
      data: detail.value[0] + '-' + detail.value[1] + '-' + detail.value[2]
    });

    var stay1 = (new Date(this.data.checkOutDate) - new Date(this.data.checkInDate)) / (1000 * 60 * 60 * 24);
    this.setData({
      stay:stay1
    });
  },

})