// pages/view2-info/view2-info.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infomation: {},
    imgUrls: [],
    indicatorDots: false,
    autoplay: true,
    duration:300,
    interval:5000
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    const query = option;
    console.log("query###:",query.id);
    console.log("app.data:", app.data);
    const data = app.data.productInfo;
    console.log("data:",data);
    wx.request({
      url: "http://192.168.1.210:3000/manage/product/"+query.id,
      success:(res)=>{
        console.log("res:::",res);
        if(res.data.OK){
          this.setData({
            infomation:res.data.doc,
            imgUrls:res.data.doc.images
          })
        }
      }
    })
    data.map((v,i)=>{
      if (v.id === query.id){
        this.setData({
          infomation:v,
          imgUrls:v.images
        })
        console.log("v",v);
      }
    })
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
  
  }
})