// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:'岁月如歌' 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onload')
    // setTimeout(()=>{
    //   this.setData({
    //     msg:'修改之后的数据'
    //   })
    //   console.log(this.data.msg)
    // },2000)
  },
  //处理事件的回调
  toList(){
    wx.navigateTo({
      url:'/pages/list/list'
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onready')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onshow')
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