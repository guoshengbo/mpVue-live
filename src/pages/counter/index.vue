<template>
  <div class="counter-warp">
   <!-- <live-player 
   src="http://dlhls.cdn.zhanqi.tv/zqlive/197372_1t79D.m3u8" 
   mode="live" 
   autoplay 
   bindstatechange="statechange" 
   binderror="error" 
   style="width: 300px; height: 225px;" />
   <video id="__video_835660" 
    class="video-4948d5" 
    src="https://www.douyu.com/4a4e8fd3-1632-47c4-ad60-75d902e06240">
  </video> -->
  <web-view src="http://www.douyu.com/911" />
  <iframe src="http://www.quanmin.tv/laoyuegou/29105" width="300px" height="200px"></iframe>
    <a href="/pages/index/main" class="home">去往首页</a>
  </div>
</template>

<script>
// Use Vuex
import store from '../../store/index'

export default {
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
  }
}
</script>

