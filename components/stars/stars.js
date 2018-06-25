var app = getApp()
Component({
  properties: {

  },
  attached: function () {

  },
  data: {
    stars: [0, 1, 2, 3, 4],
    normalSrc: '../../static/images/icon/star.png',
    selectedSrc: '../../static/images/icon/star-on.png',
    halfSrc: '../../static/images/icon/star-half.png',
    key: 0,//评分
  },
  methods: {
    selectLeft: function (e) {
    var key = e.currentTarget.dataset.key
    if (this.data.key == 0.5 && e.currentTarget.dataset.key == 0.5) {
      //只有一颗星的时候,再次点击,变为0颗
      key = 0;
    }
    console.log("得" + key + "分")
    
    this.setData({
      key: key
    })
    this.getRank()
    },
    //点击左边,整颗星
    selectRight: function (e) {
      var key = e.currentTarget.dataset.key
      console.log("得" + key + "分")
      this.setData({
        key: key
      })
      this.getRank()
    },
    getRank: function () {
      console.log("asd得" + this.data.key + "分")
      return this.data.key;
    }
  },
})
// Page({
//   data: {
//     stars: [0, 1, 2, 3, 4],
//     normalSrc: '../../../static/images/icon/star.png',
//     selectedSrc: '../../../static/images/icon/star-on.png',
//     halfSrc: '../../../static/images/icon/star-half.png',
//     key: 0,//评分
//   },
//   onLoad: function () {
//   },
//   //点击右边,半颗星
//   selectLeft: function (e) {
//     var key = e.currentTarget.dataset.key
//     if (this.data.key == 0.5 && e.currentTarget.dataset.key == 0.5) {
//       //只有一颗星的时候,再次点击,变为0颗
//       key = 0;
//     }
//     console.log("得" + key + "分")
//     this.setData({
//       key: key
//     })

//   },
//   //点击左边,整颗星
//   selectRight: function (e) {
//     var key = e.currentTarget.dataset.key
//     console.log("得" + key + "分")
//     this.setData({
//       key: key
//     })
//   }
// })