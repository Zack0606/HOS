  Page({
  data: {
      flag:0
  },
    changeColor1:function() {
      var that = this;
      that.setData({
        flag: 1
      });
    },
    changeColor2:function() {
      var that = this;
      that.setData({
        flag: 2
      });
    },
    changeColor3:function() {
      var that = this;
      that.setData({
        flag: 3
      });
    },
    changeColor4:function() {
      var that = this;
      that.setData({
        flag: 4
      });
    }
 
})