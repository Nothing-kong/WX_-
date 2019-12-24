// pages/detail/detail.js
let datas = require('../../datas/list-data.js');
console.log(datas, typeof datas)
// 获取全局App的实例
let appDatas = getApp();
console.log(appDatas)


Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailObj: {},
    isCollected: false, // 标识当前文章是否被收藏，默认是未收藏
    isMusicPlay: false, // 标识音乐是否播放，默认未播放
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

    // 读取本地缓存的收藏状态数据
    let oldStorage = wx.getStorageSync('isCollected')
    // 更细状态数据
    if (oldStorage[index]) {
      this.setData({
        isCollected: oldStorage[index]
      })
    }


    // 处理音乐播放的状态
    let { isPlay, pageIndex } = appDatas.globalData
    if (isPlay && pageIndex === index) {
      // 修改音乐播放的状态为true
      this.setData({
        isMusicPlay: true
      })
    }

    // 监听音乐播放
    wx.onBackgroundAudioStop(() => {
      console.log('音乐停止')
      this.setData({
        isMusicPlay: false
      })

      appDatas.globalData.isPlay = false
    })

  },

  // 定义收藏功能的方法
  handleCollection() {
    // 修改是否收藏的状态isCollected
    let isCollected = !this.data.isCollected
    this.setData({
      isCollected
    })

    // 显示消息提示框
    let title = isCollected ? '收藏成功' : '取消收藏'
    wx.showToast({
      title
    })

    // 将收藏的状态存储到本地
    // 问题: 多个页面共享一个状态数据 
    // wx.setStorageSync('isCollected', isCollected)
    // 解决思路： 添加状态的同时添加页面标识
    // 对象： {0: true, 2: false, 3: true}
    let index = this.data.index
    //问题： 收藏的状态永远只有一个键值对
    // let obj = {}
    // 解决思路： 获取之前的收藏的对象
    let obj = wx.getStorageSync('isCollected') || {}
    obj[index] = isCollected
    wx.setStorageSync('isCollected', obj)
  },

  // 处理音乐播放的功能函数
  handleMusicPlay() {

    let isMusicPlay = !this.data.isMusicPlay
    this.setData({
      isMusicPlay
    })

    // 音乐播放功能实现
    let { dataUrl, title, coverImgUrl } = this.data.detailObj.music
    if (isMusicPlay) { // 音乐播放
      wx.playBackgroundAudio({
        dataUrl,
        title,
        coverImgUrl
      })
      // 将当前播放的状态存入全局的实例中
      appDatas.globalData.isPlay = true
      appDatas.globalData.pageIndex = this.data.index
    } else {// 音乐停止
      wx.stopBackgroundAudio()
      appDatas.globalData.isPlay = false
    }
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