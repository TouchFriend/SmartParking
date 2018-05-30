Page({

  /**
   * 页面的初始数据
   */
  data: {
    moneyDataArr:[
      {
        title: '5元',
        row:0,
        font:38,
        value:5,
      },
      {
        title: '10元',
        row: 0,
        font: 38,
        value: 10,
      },
      {
        title: '15元',
        row: 0,
        font: 38,
        value: 15,
      }, {
        title: '20元',
        row: 1,
        font: 38,
        value: 20,
      },
      {
        title: '30元',
        row: 1,
        font: 38,
        value: 30,
      },
      {
        title: '其他金额',
        row: 1,
        font: 38,
        value: 0,
      },
    ],
  },

  submitBtnClick:function(event){
    console.log('form发生了submit事件，携带数据为：', event.detail.value)
  },

  itemClick:function(event){
    
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