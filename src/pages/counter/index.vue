<template>
  <div class="counter-warp">
   <!-- <live-player 
   src="http://hls3.douyucdn.cn/live/288016rlols5_900/playlist.m3u8" 
   mode="live" 
   autoplay="true" 
   bindstatechange="statechange"
   binderror="error" 
   style="width: 50px; height: 30px;" />  -->
  <video src="http://hls3.douyucdn.cn/live/288016rlols5_900/playlist.m3u8?wsSecret=ae5141b043211961d5bc1dc564f5fb8a&wsTime=1533719547&token=cpn-androidmpro-0-288016-67e0556a4d274e87dcb8d284b89bb5a8&did=48fef8f4390cfb6b8ad2244e000715q1">
    <!-- <cover-view class="voice-cover">
      <cover-image class="voice-img" src="https://cs-op.douyucdn.cn/dyfelocal/act/5acc7c96d51caa4669f8b2de/audio-live-cover.png?timestamp=1530193807"></cover-image>
    </cover-view> -->
  </video> 
  <!-- <div style="width:200px; height:200px"> -->
  <!-- <web-view src="http://hls3.douyucdn.cn/live/288016rlols5_900/playlist.m3u8?wsSecret=07de3360fa34f3ae686de792b6f8df54&wsTime=1533714549&token=cpn-androidmpro-0-288016-090e323b2ce7a648328ed942c464699c&did=6c790b9b70f89ca00ee864b0000715q1" /> -->
  <!-- </div> -->
  <!-- <web-view src="http://www.quanmin.tv/laoyuegou/29105" /> -->
  <!-- <iframe src="http://www.quanmin.tv/laoyuegou/29105" width="300px" height="200px"></iframe> -->
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

