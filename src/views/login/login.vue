<template>
  <div class="login">
    <login-parel></login-parel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import loginParel from './cpns/login-parel.vue'
export default defineComponent({
  components: { loginParel },
  setup() {
    return
  }
})
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');
}
</style>
