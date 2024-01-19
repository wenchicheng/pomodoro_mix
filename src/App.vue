<template>
  <v-app>
    <v-app-bar color="#DCEDC8">
      <v-container class="d-flex align-center">
        <v-app-bar-title class="font-weight-bold">POMODORO</v-app-bar-title>
        <v-btn prepend-icon="mdi-home" to="/">首頁</v-btn>
        <v-btn prepend-icon="mdi-list-status" to="/list">事項</v-btn>
        <v-btn prepend-icon="mdi-cog" to="/settings">設定</v-btn>
        <v-btn prepend-icon="mdi-calendar" to="/calendar">日曆</v-btn>
        <div>
          <v-switch
            @click="toggleTheme"
            v-model="switchValue"
            label=""
            color="black"
            hide-details
          ></v-switch>
        </div>
      </v-container>
    </v-app-bar>
    <v-main>
      <!-- Component = 目前該顯示的路由元件 -->
      <router-view v-slot="{ Component }">
        <!--
          keep-alive 保持被包住的元件不被銷毀
          使用 include 指定只有 HomeView 這個元件不被銷毀
        -->
        <!--
          component = 動態元件
          使用 is 綁定的原件
        -->
        <keep-alive include="HomeView">
          <component :is="Component"></component>
        </keep-alive>
      </router-view>
    </v-main>
  </v-app>
</template>

<script setup>
// 切換主題顏色 https://vuetifyjs.com/en/features/theme/#setup
// 切換主題時，主題的改變通常需要觸發重新渲染（rerender）來應用新的主題樣式
// 異步更新（asynchronous update）可能會導致視覺元素不立即更新
import { ref } from 'vue'
// import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()
const switchValue = ref(false)

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  // 強制重新渲染
  theme.rerender()
}

</script>
