<style lang="less">
  @import "./main.less";
</style>
<template>
  <div class="main" :class="{'main-hide-text': shrink}">
    <div class="sidebar-menu-con" :style="{width: shrink?'60px':'200px', overflow: shrink ? 'visible' : 'auto'}">
      <scroll-bar ref="scrollBar">
        <shrinkable-menu
          @on-change="handleSubmenuChange"
          :theme="menuTheme"
          :menu-list="menuList">
          <div slot="top" class="logo-con">
            <img src="../../static/logo.jpg" key="max-logo"/>
          </div>
        </shrinkable-menu>
      </scroll-bar>
    </div>
    <div class="main-header">
      <div class="header-middle-con">
        <div class="main-breadcrumb">
          <!--<breadcrumb-nav :currentPath="currentPath"></breadcrumb-nav>-->
        </div>
      </div>
      <div class="header-avator-con">
        <div class="user-dropdown-menu-con">
          <Row type="flex" justify="end" align="middle" class="user-dropdown-innercon">
            <Dropdown transfer trigger="click" @on-click="handleClickUserDropdown">
              <a href="javascript:void(0)">
                <span class="main-user-name">{{ userName }}</span>
                <Icon type="arrow-down-b"></Icon>
              </a>
              <DropdownMenu slot="list">
                <DropdownItem name="ownSpace">个人中心</DropdownItem>
                <DropdownItem name="loginout" divided>退出登录</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Avatar :src="avatorPath" style="margin-left: 10px;"></Avatar>
          </Row>
        </div>
      </div>
    </div>
    <div class="single-page-con" :style="{left: shrink?'60px':'200px'}">
      <div class="single-page">
        <keep-alive :include="cachePage">
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>
<script>
import shrinkableMenu from '../components/main-components/shrinkable-menu/shrinkable-menu'
// import tagsPageOpened from './main-components/tags-page-opened.vue'
// import breadcrumbNav from './main-components/breadcrumb-nav.vue'
// import fullScreen from './main-components/fullscreen.vue'
// import lockScreen from './main-components/lockscreen/lockscreen.vue'
// import messageTip from './main-components/message-tip.vue'
// import themeSwitch from './main-components/theme-switch/theme-switch.vue'
// import Cookies from 'js-cookie'
// import util from '@/libs/util.js'
import scrollBar from '../components/my-components/scroll-bar/vue-scroller-bars'

export default {
  components: {
    shrinkableMenu,
    //   tagsPageOpened,
    //   breadcrumbNav,
    //   fullScreen,
    //   lockScreen,
    //   messageTip,
    //   themeSwitch,
    scrollBar
  },
  data () {
    return {
      menuTheme: 'dark',
      shrink: false,
      userName: 'fuck',
      isFullScreen: false,
      openedSubmenuArr: '',
      menuList: [
        {name: '首页', icon: 'home', path: 'home'},
        {name: '用户管理', icon: 'person', path: 'userManagement'},
        {name: '地区管理', icon: 'ios-location', path: 'areaManagement'},
        {name: '灯光管理', icon: 'lightbulb', path: 'lightManagement'},
        {name: '联系方式', icon: 'iphone', path: 'contact'}
      ],
      avatorPath: require('../../static/zhanghu.png')
    }
  },
  computed: {
  },
  methods: {
    //   init () {
    //     let pathArr = util.setCurrentPath(this, this.$route.name)
    //     this.$store.commit('updateMenulist')
    //     if (pathArr.length >= 2) {
    //       this.$store.commit('addOpenSubmenu', pathArr[1].name)
    //     }
    //     this.userName = Cookies.get('user')
    //     let messageCount = 3
    //     this.messageCount = messageCount.toString()
    //     this.checkTag(this.$route.name)
    //     this.$store.commit('setMessageCount', 3)
    //   },
    handleClickUserDropdown (name) {
      // if (name === 'ownSpace') {
      //   util.openNewPage(this, 'ownspace_index')
      //   this.$router.push({
      //     name: 'ownspace_index'
      //   })
      // } else if (name === 'loginout') {
      //   // 退出登录
      //   this.$store.commit('logout', this)
      //   this.$store.commit('clearOpenedSubmenu')
      //   this.$router.push({
      //     name: 'login'
      //   })
      // }
    },
    //   checkTag (name) {
    //     let openpageHasTag = this.pageTagsList.some(item => {
    //       if (item.name === name) {
    //         return true
    //       }
    //     })
    //     if (!openpageHasTag) { //  解决关闭当前标签后再点击回退按钮会退到当前页时没有标签的问题
    //       util.openNewPage(this, name, this.$route.params || {}, this.$route.query || {})
    //     }
    //   },
    handleSubmenuChange (val) {
    }
    //   beforePush (name) {
    //     // if (name === 'accesstest_index') {
    //     //     return false;
    //     // } else {
    //     //     return true;
    //     // }
    //     return true
    //   },
    //   fullscreenChange (isFullScreen) {
    //     // console.log(isFullScreen);
    //   },
    //   scrollBarResize () {
    //     this.$refs.scrollBar.resize()
    //   }
  }
  // watch: {
  //   '$route' (to) {
  //     this.$store.commit('setCurrentPageName', to.name)
  //     let pathArr = util.setCurrentPath(this, to.name)
  //     if (pathArr.length > 2) {
  //       this.$store.commit('addOpenSubmenu', pathArr[1].name)
  //     }
  //     this.checkTag(to.name)
  //     localStorage.currentPageName = to.name
  //   },
  //   lang () {
  //     util.setCurrentPath(this, this.$route.name) // 在切换语言时用于刷新面包屑
  //   },
  //   openedSubmenuArr () {
  //     setTimeout(() => {
  //       this.scrollBarResize()
  //     }, 300)
  //   }
  // },
  // mounted () {
  //   this.init()
  //   window.addEventListener('resize', this.scrollBarResize)
  // },
  // created () {
  //   // 显示打开的页面的列表
  //   this.$store.commit('setOpenedList')
  // },
  // dispatch () {
  //   window.removeEventListener('resize', this.scrollBarResize)
  // }
}
</script>
