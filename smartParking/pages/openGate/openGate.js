// pages/dkzd/dkzd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      doorDataArr:[
        {
          'img': '../img/one.png',
          'title': '道闸1 ',
          'name': '融侨锦江A区东门',
        },
        {
          'img': '../img/one.png',
          'title': '道闸1 ',
          'name': '融侨锦江A区东门',
        },
        {
          'img': '../img/one.png',
          'title': '道闸1 ',
          'name': '融侨锦江A区东门',
        }
      ],
  },

  openDoorClick:function(event){

    wx.showActionSheet({
      itemList: ['微信'],
      success:function(res){
        console.log(res.tapIndex);
      },
      fail:function(res){

      },
      complete:function(){

      }
    });
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