// pages/component/home_main/serch.js
// 获取全局属性
var GlobalApp = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    iconSize: 15,
    home_main_top_search: {
      color: 'white',
      background: 'gray',
      'border-radius': '100px',
      padding: '5px',
    },
    globalTheme: GlobalApp.globalData.theme[GlobalApp.globalData.CURRENTTHEME],
    CURRENTTHEME: GlobalApp.globalData.CURRENTTHEME
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showGlobalParam () {
      console.log(this.theme);
    }
  },
  // 组件的声明周期函数有这种奇葩写法
  lifetimes: {

  },
  // 也可以写在外面
  attached: function () {
    console.log(this.data.globalTheme[this.data.CURRENTTHEME],this.data.CURRENTTHEME);
  }
})
