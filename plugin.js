/**
 * Created by zyj on 2017/5/10.
 */

var VuePaging = {
  //这里传入的Vue其实 new Vue();一个实例对象
  // options是一些配置

  install : function(Vue, options) {

    //设置全局方法或者属性
      Vue.foo = function(){
        console.log('设置全局方法')
      };

      Vue.k = 20;

      //添加全局资源
    Vue.filter('capitalize',function(value){
      if(value < 4){
        return '小'
      }
      else{
        return '大'
      }
    })


    //注入组件
    Vue.mixin({
      methods:{
        l(){
          console.log("注入组件");
        }
      }
    })

    //给实例添加方法
    Vue.prototype.getAge = function () {
      console.log('给实例添加方法')
    }
    Vue.prototype.num = {name: '张三'};
  }
}


if( typeof window !== 'undefined' && window.Vue){
  window.Vue.use(VuePaging);
}

export default VuePaging;