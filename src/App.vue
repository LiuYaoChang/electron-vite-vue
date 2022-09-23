<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import MsLayout from './layout-container/default.vue';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { onMounted, ref } from 'vue';

const code = ref<string>('');
const result = ref<string>('');
const lastTime = ref<number>(0);
const lastCode = ref<string>('');

onMounted(() => {

  document.onkeyup = handleKeyup
  // el.value // <div>
})

const handleKeyup = (event: KeyboardEvent) => {
        console.log("🚀 ~ file: App.vue ~ line 33 ~ handleKeypress ~ event", event)
      let nextCode = event.which;
      let codeStr = event.key;
      // const { code, lastTime, lastCode } = this;
      const lastCodeValue = lastCode.value;
      const lastTimeValue = lastTime.value;
      const codeValue = code.value;

      let time = Date.now();
      // 扫码枪输入
      // 扫码结束
      if (lastCodeValue !== undefined && nextCode === 13) {
        handleScanFinished(codeValue);
        lastCode.value = '';
        lastTime.value = 0;
        code.value = '';
        return;
      }
      if (
        lastCode !== null &&
        lastTimeValue !== 0 &&
        time - lastTimeValue <= 30
      ) {
        code.value = codeValue + codeStr; 
      } else {
        code.value = codeStr;
      }

      lastCode.value = codeStr;
      lastTime.value = time;
}

// 完成扫码
const handleScanFinished = (code: string) => {
  // result.value = '';
  result.value = code;
}

</script>

<template>
  <div class="dcms-app-body">
    <MsLayout />
  </div>
</template>

<style>
body, .dcms-app-body {
  height: 100vh;
}

.dcms-app-body .el-container {
  height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

.logo-box {
  display: flex;
  width: 100%;
  justify-content: center;
}

.static-public {
  display: flex;
  align-items: center;
  justify-content: center;
}

.static-public code {
  background-color: #eee;
  padding: 2px 4px;
  margin: 0 4px;
  border-radius: 4px;
  color: #304455;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: 0.75s;
}

.logo.vite:hover {
  filter: drop-shadow(0 0 2em #747bff);
}

.logo.electron:hover {
  filter: drop-shadow(0 0 2em #9FEAF9);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #249b73);
}
</style>
