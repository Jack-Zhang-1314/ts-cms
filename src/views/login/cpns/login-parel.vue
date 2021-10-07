<template>
  <div class="login-panel">
    <h1 class="tittle">后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span><i class="el-icon-user-solid"></i> 账号登录</span>
        </template>
        <loginAccount ref="accountRef"></loginAccount>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
        </template>
        <login-phone ref="phoneRef"></login-phone>
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassworld">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="loginBtn" @click="handleLoginClick()"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import loginAccount from './login-account.vue'
import loginPhone from './login-phone.vue'

export default defineComponent({
  components: { loginAccount, loginPhone },
  setup() {
    //定义属性
    const isKeepPassworld = ref(true)
    const accountRef = ref<InstanceType<typeof loginAccount>>()
    const phoneRef = ref<InstanceType<typeof loginPhone>>()
    const currentTab = ref<string>('account')
    //定义方法
    let handleLoginClick = () => {
      if (currentTab.value === 'account') {
        //console.log(accountRef.value)
        accountRef.value?.loginAction(isKeepPassworld.value)
      } else {
        console.log('phoneRef调用loginAction')
        //debugger
        phoneRef.value?.loginAction(isKeepPassworld.value)
      }
    }
    return {
      isKeepPassworld,
      currentTab,
      accountRef,
      phoneRef,
      handleLoginClick
    }
  }
})
</script>

<style lang="less" scoped>
.login-panel {
  margin-bottom: 150px;
  width: 320px;
  .tittle {
    text-align: center;
  }
  .account-control {
    margin-top: 0.625rem;
    display: flex;
    justify-content: space-between;
  }
  .loginBtn {
    width: 100%;
    margin-top: 0.625rem;
  }
}
</style>
