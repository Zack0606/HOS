// pages/index/makeOrder/makeOrder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
<<<<<<< HEAD
  
=======
    config: {
      base: {
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
        IDNumber:{
          title: '身份证号',
          placeholder: '请输入身份证号'
        },
        roomNumber:{
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
      }
    }
>>>>>>> dev-liszt
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
<<<<<<< HEAD
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
=======
    
  },

  initData: function () {
    
  },
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
>>>>>>> dev-liszt
  }
})