// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: 'Hello',
    userInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
    // 发送ajax请求，前后端交互
    // console.log(this.data.msg) // 当前页面的实例对象
    // data中的 数据没有进行数据劫持和代理
    // 修改状态数据
    // vue: this.xxx = value
    // React： this.setState()
    // 小程序： this.setData()
    // setTimeout(() => {
    //   this.setData({
    //     msg: '修改之后的数据'
    //   })
    //   // 修改的动作：同步
    //   console.log(this.data.msg)
    // }, 2000)





    // 获取用户信息, 用户授权之后
    wx.getUserInfo({
      success: (res) => {
        
        this.setData({
          userInfo: res.userInfo
        })
      },
      fail: () => {
        console.log('获取用户信息失败')
      }
    })


  },
  // 处理事件的回调
  toList() {
    // 跳转至list页面
    wx.reLaunch({
      url: '/pages/list/list'
    })

  },
  // 为了第一次用户授权，并且成功获取用户数据
  handleGetUserInfo(res) {
    console.log(res)
    if (res.detail.userInfo) {
      // 用户授权了
      this.setData({
        userInfo: res.detail.userInfo
      })
    }
  },

  // handleChild() {
  //   console.log('child')
  // },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady')

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow')

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