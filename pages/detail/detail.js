// pages/detail/detail.js
let datas = require('../../datas/list-data.js');
console.log(datas, typeof datas)


Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailObj: {},
    icCollected: false, //标识当前文章是否被收藏，默认是未收藏
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options) // options就是用来收集query参数的对象
    let index = options.index
    // 更新detailObj的状态数据
    this.setData({
      detailObj: datas.list_data[index],
      index
    })
  },
  //读取本地缓存的收藏状态数据
  let oldStorage = wx.getStorageSync('isCollected'),

  if(oldStorage[index]){
    this.setData({
      
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