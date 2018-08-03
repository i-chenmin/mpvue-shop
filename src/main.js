import Vue from 'vue'
import App from './App'


Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    "pages": ["pages/login/main", "^pages/index/main", "pages/category/main", "pages/categorylist/main", "pages/topic/main", "pages/goods/main", "pages/logs/main", "pages/branddetail/main", "pages/brandlist/main", "pages/cart/main", "pages/comment/main", "pages/commentsend/main", "pages/hotgoods/main", "pages/newgoods/main", "pages/practice/main", "pages/topicdetail/main"],
    "window": {
      "backgroundTextStyle": "light",
      "navigationBarBackgroundColor": "#fff",
      "navigationBarTitleText": "网易严选",
      "navigationBarTextStyle": "black"
    },
    "tabBar": {
      "backgroundColor": "#fafafa",
      "borderStyle": "white",
      "selectedColor": "#b4282d",
      "color": "#666",
      "list": [{
          "pagePath": "pages/index/main",
          "iconPath": "static/images/ic_menu_choice_nor.png",
          "selectedIconPath": "static/images/ic_menu_choice_pressed.png",
          "text": "首页"
        },
        {
          "pagePath": "pages/topic/main",
          "iconPath": "static/images/ic_menu_topic_nor.png",
          "selectedIconPath": "static/images/ic_menu_topic_pressed.png",
          "text": "专题"
        },
        {
          "pagePath": "pages/category/main",
          "iconPath": "static/images/ic_menu_sort_nor.png",
          "selectedIconPath": "static/images/ic_menu_sort_pressed.png",
          "text": "分类"
        },
        {
          "pagePath": "pages/cart/main",
          "iconPath": "static/images/ic_menu_shoping_nor.png",
          "selectedIconPath": "static/images/ic_menu_shoping_pressed.png",
          "text": "购物车"
        },
        {
          "pagePath": "pages/topic/main",
          "iconPath": "static/images/ic_menu_me_nor.png",
          "selectedIconPath": "static/images/ic_menu_me_pressed.png",
          "text": "我的"
        }
      ]
    }
  }
}
