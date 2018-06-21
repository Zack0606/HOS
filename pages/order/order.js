//logs.js
var Bmob = require("../../utils/bmob.js");
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    var Diary = Bmob.Object.extend("diary");
    var diary = new Diary();
    diary.set("title", "1");
    diary.set("content", "2");
    diary.set("data","3");
    //添加数据，第一个入口参数是null
    diary.save(null, {
      success: function (result) {
        // 添加成功，返回成功之后的objectId（注意：返回的属性名字是id，不是objectId），你还可以在Bmob的Web管理后台看到对应的数据
        console.log("日记创建成功, objectId:" + result.id);
      },
      error: function (result, error) {
        // 添加失败
        console.log('创建日记失败');

      }
    });
  }
})
