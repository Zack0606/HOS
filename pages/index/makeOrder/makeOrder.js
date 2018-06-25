// pages/index/makeOrder/makeOrder.js
const app = getApp()

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
        error: true,
        title: '联系电话',
        inputType: 'number',
        placeholder: '请输入手机号'
      },
      IDNumber: {
        title: '身份证号',
        placeholder: '请输入身份证号'
      },
      roomNumber: {
        title: '房间数',
        stepper: 2,
        min: 1,
        max: 10
      },
      disabled: {
        title: '发票',
        disabled: true,
        value: '如需发票，请到酒店前台索取'
      }
    },
    userInfo:null
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    var that = this
    var userInfo=app.getUserInfo();
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      });
      console.log(userInfo)
    });
    console.log("test")
  },

  onShow: function() {
    // console.log(this.data.config.name.placeholder)
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
  }
})