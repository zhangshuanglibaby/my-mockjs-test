<!--
 * @Date: 2022-11-28 17:12:55
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-28 20:51:22
 * @Description: 这是****文件
-->
<template>
  <div class="home">
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HomeView',
  async mounted () {
    const res = await axios.get('/list')
    console.log(res, 'resres')
  }
}
</script>
