// pages/shezhi1/shezhi1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputvalue1:'',
    inputvalue2:'',
    inputvalue3:'',
  },
  inputChange1:function(e){
    this.setData({
      inputvalue1:e.detail.value,
    })
  },
  inputChange3:function(e){
    this.setData({
      inputvalue3:e.detail.value,
    })
  },
  inputChange2:function(e){
    this.setData({
      inputvalue2:e.detail.value,
    })
  },
  tiaozhuan1:function(){
    const iv_1=this.data.inputvalue1;
    const iv_2=this.data.inputvalue2;
    const iv_3=this.data.inputvalue3;
    wx.navigateTo({
      url: '/pages/renji/renji?chouma1='+iv_2+'&&chouma2='+iv_3+'&&jushu1='+iv_1+''
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})