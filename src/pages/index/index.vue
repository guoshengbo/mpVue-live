<template>
  <!-- <div class="container" @click="clickHandle('test click', $event)"> -->
  <div>
    <!-- <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div> -->

    <!-- <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div> -->
    <div v-for="(item, index) in RoomApi" :key="index">
      <a @click="setItem()" href="/pages/counter/main" class="counter">{{item?item.nickname:''}}</a>
    </div>
    
  </div>
</template>

<script>
import card from '@/components/card'
import store from '../../store/index'

export default {
  data () {
    return {
      RoomApi: [],
      userInfo: {}
    }
  },

  components: {
    card
  },

  methods: {
    setItem () {
      store.commit('setInof')
    },
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },
  mounted () {
    let self = this
    this.$fly.get('/api/RoomApi/live').then(function (res) {
      console.log('data', res.data.data)
      self.RoomApi = res.data.data
      console.log('self.RoomApi', self.RoomApi)
    })
  },
  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>