// pages/index/makeOrder/makeOrder.js
const app = getApp()
var Bmob = require("../../../utils/bmob.js");
var postRoomType = require('../../../static/data.js');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    config: {
      name: {
        title: '入住人',
        placeholder: '名字'
      },
      tel: {
        title: '联系电话',
        placeholder: '请输入手机号'
      },
      IDNumber: {
        title: '身份证号',
        placeholder: '请输入身份证号'
      },
      roomNumber: {
        title: '房间数',
        stepper: 1,
        min: 1,
        max: 10
      },
      disabled: {
        title: '发票',
        disabled: true,
        value: '如需发票，请到酒店前台索取'
      },
      remarks: {
        title: '备注',
        placeholder: '如有无特殊要求偏好'
      }
    },
    userInfo: null,
    roomType: '',
    roomInfo: {},
    checkInDate: "",
    checkOutDate: ""
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    var that = this
    var userInfo = app.getUserInfo();
    app.getUserInfo(function(userInfo) {
      that.setData({
        userInfo: userInfo
      });
      console.log(userInfo)
    });
    wx.getStorage({
      key: 'selectType',
      success: function(res) {
        that.setData({
          roomType: res.data,
          roomInfo: postRoomType.roomType[res.data],
        })
      }
    });
    wx.getStorage({
      key: 'checkInDate',
      success: function(res) {
        that.setData({
          checkInDate: res.data,
        })
      }
    });
    wx.getStorage({
      key: 'checkOutDate',
      success: function(res) {
        that.setData({
          checkOutDate: res.data,
        })
      }
    });

  },

  // 计数器
  handleZanStepperChange({
    detail: stepper,
    target: {
      dataset: {
        componentId
      }
    }
  }) {
    this.setData({
      [`${componentId}.stepper`]: stepper
    });
  },
  formSubmit: function(e) {
    var inputs = e.detail.value;
    console.log(e);
    var roomType = this.data.roomType;
    var price = this.data.roomInfo.price;
    var realName = e.detail.value.realName;
    var phoneNumber = e.detail.value.phoneNumber;
    var idNumber = e.detail.value.IDNumber;
    var roomNumber = e.detail.value.roomNumber;
    var remarks = e.detail.value.remarks;
    var checkInDate = new Date(this.data.checkInDate);
    var checkOutDate = new Date(this.data.checkOutDate);
    var Order = Bmob.Object.extend('Order');
    // 创建一个表记录对象
    var order = new Order();
    order.set("realName", realName)
    order.set("roomType", roomType)
    order.set("price", price)
    order.set("roomNumber", roomNumber)
    order.set("checkInDate", checkInDate)
    order.set("checkOutDate", checkOutDate)
    order.set("idNumber", idNumber)
    order.set("phoneNumber", phoneNumber)
    order.set("remarks", remarks)
    order.save()
  }
})
