// pages/gzfk/gzfk.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topDataArr: [
      {
        'title': '真实姓名',
        'placeholder': '请填写您的真实姓名'
      },
      {
        'title': '联系电话',
        'placeholder': '请输入有效联系方式'
      }
    ],
    addressDataArr: [
      {
        'title': '居住社区',
        'placeholder': '请填写您的居住社区'
      },
      {
        'title': '故障设备号',
        'placeholder': '请输入故障设备号'
      }
    ]
  },

  inputText: function (event) {
    console.log(event.detail.value);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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