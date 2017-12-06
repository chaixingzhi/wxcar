// pages/view4/view4.js
Page({
  data: {
    address:""
  },
  map:function(){
    wx.chooseLocation({
      success: function (res) {
       this.setData({
         address:res.address
       })
      }
    });
  },
  calling:function(){
    wx.makePhoneCall({
      phoneNumber: '13271230595' //仅为示例，并非真实的电话号码
    })
  },
  mapMove:function(){
    wx.navigateTo({
      url: '/pages/map/map',
    })
  }
})