export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/settle/index',

    'pages/selectAdd/index',
    'pages/editAdd/index',
    'pages/success/index',
    'pages/myorder/index',
    'pages/details/index',
    'pages/store/index',
    
    'pages/shop/index',
    'pages/user/index',
    'pages/activity/index'


    

  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '趣洗衣',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: "#666488",
    selectedColor: "#FF5951",
borderStyle: "black",
    backgroundColor: "#ffffff",
    list: [
      {
          pagePath: "pages/index/index",
          iconPath: "tabBar/home.png",
          selectedIconPath: "tabBar/homecon.png",
          text: "首页"
      },
      {
          pagePath: "pages/shop/index",
          iconPath: "tabBar/shop.png",
          selectedIconPath: "tabBar/shopcon.png",
          text: "洗衣车"
      },
      {
          pagePath: "pages/user/index",
          iconPath: "tabBar/user.png",
          selectedIconPath: "tabBar/usercon.png",
          text: "我的"
      }
  ]
},
permission: {
    "scope.userLocation": {
        "desc": "您的地理位置将用于店铺配送信息"
    }
}

})
