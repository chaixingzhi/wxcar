// pages/view2/view2.js
const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    infomationValue:{},
    productInfo:[],
    productID:""
  },
  infomation:function(event){
    var query = this.parseInt(event);
    wx.navigateTo({ url:"/pages/view2-info/view2-info?" + query});
    console.log("event: ",event);
    console.log("query: ",query);
    
  },
  getProductData:function(){
    wx.request({
      url:"http://192.168.1.210:3000/manage/product",
      success:(res)=>{
        console.log("res: ",res);
        if(res.data.OK){
          this.setData({
              productInfo:res.data.docs
              
          })
          
        }
      }
    })
  },
  parseInt:function(object){
     var query="id="+ object.currentTarget.id;
     return query;
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getProductData();
    console.log("getApp().globalData.productInfo", getApp().globalData);
    app.data = this.data;
    console.log("app.data:",app.data);
    
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