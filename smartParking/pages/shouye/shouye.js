// pages/shouye/shouye.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topDataArr: [
      {
        img: '../img/one.png',
        text: "扫一扫",
        des: "便捷一扫，轻松停车",
      },
      {
        img: '../img/two1.png',
        text: "打开道闸",
        des: "默认道闸，一键选定",
      }
    ],
    middleDataArr: [
      {
        row: 0,
        img: '../img/qian.png',
        text: '充值',
        des: '充值多，优惠大',
      },

      {
        row: 0,
        img: '../img/mrsz.png',
        text: '默认设置',
        des: '更快的提高效率',
      },

      {
        row: 1,
        img: '../img/jyjl.png',
        text: '交易记录',
        des: '快捷一键查询',
      },

      {
        row: 1,
        img: '../img/fuwzhichi.png',
        text: '服务支持',
        des: '更好的服务',
      }
    ]

  },

  topItemClick: function (event) {
    var id = event.currentTarget.id;
    console.log(id);

    if (id === 'topItem0') {//扫一扫
      wx: wx.scanCode({
        onlyFromCamera: true,
        scanType: [],
        success: function (res) {

        },
        fail: function (res) {

        },
        complete: function (res) {

        },
      })
    }
    else if (id === 'topItem1') {//打开道闸
      wx: wx.navigateTo({
        url: '../dkzd/dkzd',
      })
    }
  },

  middleItemClick: function (event) {
    var id = event.currentTarget.id;
    // console.log(id);
    switch (id) {
      case 'middleItem0'://充值
        {
          wx: wx.navigateTo({
            url: '../tt/tt',
          })
        }
        break;
      case 'middleItem1'://默认设置
        {
          wx: wx.navigateTo({
            url: '../mrsz/mrsz',
          })
        }
        break;
      case 'middleItem2'://交易记录
        {
          wx: wx.navigateTo({
            url: '../xfjl/xfjl',
          })
        }
        break;
      case 'middleItem3'://服务支持
        {
          wx: wx.navigateTo({
            url: '../fwzc/fwzc',
          })
        }
        break;

      default:
        break;
    }
  },

  iconViewClick: function () {
    console.log('iconViewClick');
    wx: wx.navigateTo({
      url: '../grxx/grxx',
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