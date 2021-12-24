<template>
  <div>
    <h1>TRPG模拟器</h1>
    <el-row :gutter="8" class="introduction-page">
      <el-col
        :lg="8" :sm="24"
        v-for="script in scriptList"
        :key="script.id"
      >
        <el-card>
          <template #header>
            <span class="title">{{script.name}}</span>
            <el-button
              class="title-button"
              type="primary"
              size="small"
              plain
              @click="handleClick(script.filename)"
            >选择</el-button>  
          </template>
          {{script.description}}
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import scriptList from '@/assets/scriptData.json'

export default {
  data () {
    return {
      scriptList: scriptList
    }
  },
  methods: {
    handleClick (filename) {
      this.$router.push({
        name: 'Home',
        query: { script: filename }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.introduction-page
  text-align: left
.title
  font-weight: bold
.title-button
  float: right
  margin-top: -5px
</style>