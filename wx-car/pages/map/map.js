// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  onReady: function (e) {
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('myMap')
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  data: {
    map:{
      latitude: 34.044677,
      longitude: 113.867991,
      showLocation:true, 
      markers:[{
        iconPath:"/static/images/map.png",
        id:0,
        latitude: 34.044677, 
        longitude: 113.867991,
        title:"创业大楼",
        width:25,
        height:25,
        callout:{
          content:"创业楼",
          color:"black",
          fontSize:15,
          bgColor:"skyblue",
          display:"ALWAYS"
        }
      }],
      // controls:[
      //   {id:1,
      //   position:{
      //     left:0,
      //     top:10,
      //     width:"100%",
      //     height:"15%"

      //   },
      //   iconPath:"/static/images/map.png",
      //   clickable:false}

      // ]
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */

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