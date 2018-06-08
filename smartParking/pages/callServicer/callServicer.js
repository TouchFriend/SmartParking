// pages/lxkf/lxkf.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr:[
      {
        'title': '客服电话',
        'phone': '0591-8343-2055'
      },
      {
        'title': '客服QQ',
        'phone': '602253614'
      }
    ]
  },


  callPhone:function(event){
    // console.log(event);
    var id = event.currentTarget.id;
    var phoneNum = this.data.dataArr[id].phone;
    // console.log(phoneNum);
    wx.makePhoneCall({
      phoneNumber: phoneNum,
      success:function(res)
      {

      },
      fail: function (res) {

      },
    })

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