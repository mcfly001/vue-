<template>
  <div>
    <div>
      <div @click="getName">设置全局方法或者属性</div>
      <span>{{k}}</span>
    </div>

    <div>
      <div>添加全局资源</div>
      <div>{{age | capitalize}}</div>
    </div>

    <div>
      <div>给实例添加方法或属性</div>
      <span @click="getAge">给实例添加方法</span>
    </div>

    <div>
      <div  @click="l">注入组件</div>
      <span>{{num.name}}</span>
    </div>

    <Com-tag></Com-tag>
  </div>
</template>

<script>
  import Vue from 'vue';
  import ComTag from './comTag.vue';
  export default{
    data(){
      return {
        age: 12,
        num: {
          'name': '李四'
        },
        k: 0,
      }
    },
    components: {
      ComTag
    },
    methods:{
      getName(){
        this.k = Vue.k;
        Vue.foo()
      }
    }
  }

</script>