<template>
  <div class="wallet">
    <el-card>
      <el-button type="primary" @click="newWallet">
        创建钱包
      </el-button>
      <el-form class="form-create">
        <el-form-item label="创建密码">
          <el-input type="password"></el-input>
        </el-form-item>

      </el-form>
    </el-card>
    <el-card>
      <el-button>
        导入钱包
      </el-button>
    </el-card>
  </div>
</template>

<script>
import {defineComponent,ref} from 'vue'
import { createWallet } from '../utils/eth'

export default defineComponent({
  name: "Wallet",
  setup () {
    // 密码
    // const entropy = ref('')
    // console.log(process)
    // methods
    function newWallet() {
      // const wallet = createWallet()
    }
    return {
      newWallet
    }
  }
})
</script>

<style lang="scss" scoped>
.wallet {
  display: flex;
  justify-content: space-around;
}
</style>