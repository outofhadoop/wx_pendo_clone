// pages/component/home_main/time/time.js
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
    date: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  ready: function () {
    var $$this = this;
    var _date = new Date();
    var _dBefore = (_date.getMonth()+1) + '/' + _date.getDay() + ' ' + _date.getHours() + ':';
    var _dAfter = (_date.getMinutes() < 10 ? '0' + _date.getMinutes() : _date.getMinutes());
    var _d = _dBefore + _dAfter;
    this.data.date = _d;
    this.setData({date: _d});
    // 动态改变时间
    var _s = setInterval(function(){
      console.log(new Date());
      if (parseInt(_dAfter) != (new Date()).getMinutes()) {
        
        _dAfter = ((new Date()).getMinutes() < 10 ? '0' + _date.getMinutes() : _date.getMinutes());
        _d = _dBefore + _dAfter;
        $$this.setData({date: _d});
        console.log(parseInt(_dAfter), (new Date()).getMinutes());
      }
    }, 1000);
  }
})
