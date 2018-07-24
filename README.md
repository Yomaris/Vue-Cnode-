# cnode

> Vue.js搭建CNODE社区

线上地址：
* 项目描述：根据CNode提供的API，用vue框架搭建CNode社区，基本构架有Header topbar,PosltList列表,Article 文章的详情页,SlideBar 侧边栏,UserInfo 用户个人信息,Psgination 分页组件
* 功能实现：
   * 无论是首页，还是点击到内容页、个人信息页，这些页面都有相同的topbar，因此将topbar封装为Header组件，在入口主件App.vue中引入
   * 请求数据方面，在入口文件main.js中引入axios并添加到Vue原型上，方便各个组件使用，请求数据方法在生命周期beforeMount中调用
   * 使用Vue-Router，将组件映射到路由，在 vue-router的路由路径中使用“动态路径参数”(dynamic segment)和this.$route.params来实现参数的传递。使用路由参数时，例如此项目中，文章详情页(Article组件)和sidebar组件是同一个路由/topic（例子http://localhost:8080/#/topic/5b223c1d5cd02be640901490&author=XadillaX），点击sidebar里面的文章链接时，路由为http://localhost:8080/#/topic/5ac365fee34737560fcca9d0&author=XadillaX,原来的组件实例会被复用,因此，在Article组件中用watch方法监测变化，这样在复用组件时，组件会根据路由参数的变化作出响应
   * 通过自定义事件handleList实现子组件给父组件传递数据，在pagination组件中点击上一页、首页等Button时，其父组件根据传递的page的变化，改变请求API的参数，实现切换页码浏览数据
* 技术栈：**Vue.js Webpack Vue-Router Axios ES6**


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
