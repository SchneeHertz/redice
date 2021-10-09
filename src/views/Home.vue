<template>
  <div class="home">
    <h1>演化模拟器</h1>
    <el-card id="content">
      <el-row :gutter="10" id="card-row">
        <el-col :lg="9" :sm="24">
          <el-card id="mutation-card">
            <template #header>
              <span>进化</span>
              <el-switch v-model="mutationSwitch" class="mutation-switch"/>
            </template>
            <el-row class="icon-warp">
              <el-col :span="6" v-for="mutation in mutationShowList1" :key="mutation.key">
                <transition name="fast-fade" mode="out-in">
                  <Roll 
                    eventNow ="empty.png"
                    :event_icons="mutation_icons"
                    :eventAfter="mutation.icon"
                    pathString="img/mutation_icons/"
                    ref="mutation"
                    v-if="mutation.show"
                  />
                  <img src="img/mutation_icons/emptyRB.png" class="mutation-score" v-else/>
                </transition>
              </el-col>
            </el-row>
            <el-row class="icon-warp">
              <el-col :span="6" v-for="mutation in mutationShowList2" :key="mutation.key">
                <transition name="fast-fade" mode="out-in">
                  <Roll 
                    eventNow ="empty.png"
                    :event_icons="mutation_icons"
                    :eventAfter="mutation.icon"
                    pathString="img/mutation_icons/"
                    ref="mutation"
                    v-if="mutation.show"
                  />
                  <img src="img/mutation_icons/emptyRB.png" class="mutation-score" v-else/>
                </transition>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
        <el-col :lg="9" :sm="24">
          <el-card id="event-card">
            <template #header>
              <span>事件</span>
              <el-switch v-model="eventSwitch" class="event-switch"/>
            </template>
            <el-row class="icon-warp">
              <el-col :span="8">
                <Roll
                  eventNow="empty.png"
                  :event_icons="event_icons"
                  :eventAfter="eventAfter"
                  pathString="img/event_icons/"
                  ref="eventroll"
                />
              </el-col>
              <el-col :span="8">
                <img src="img/number_icons/bn8.png" class="event-value"/>
              </el-col>
              <el-col :span="8">
                <Roll
                  eventNow="empty.png"
                  :event_icons="number_icons"
                  eventAfter="bn7.png"
                  pathString="img/number_icons/"
                  ref="eventresultroll"
                />
              </el-col>
            </el-row>
          </el-card>
        </el-col>
        <el-col :lg="6" :sm="24">
          <el-card id="logger-card">
            <template #header>
              <span>记录</span>
            </template>
            
          </el-card>
        </el-col>
        <el-col :lg="24" :sm="24">
          <el-card id="status-card">
            <template #header>
              <span>状态</span>
            </template>
          </el-card>
        </el-col>
      </el-row>
      <p>地球时间 {{formatTime(timer)}} 年</p>
    </el-card>
  </div>
</template>

<script>
// @ is an alias to /src
import event_icons from '@/assets/event_icons.json'
import mutation_icons from '@/assets/mutation_icons.json'
import number_icons from '@/assets/number_icons.json'
import mutationList from '@/assets/mutationList.json'
import _ from 'lodash'
import Roll from '@/components/roll.vue'

export default {
  name: 'Home',
  components: {
    Roll
  },
  data () {
    return {
      timer: 0,
      framerate: 60,
      showEventImage: true,
      eventSwitch: true,
      event_icons: event_icons,
      mutation_icons: mutation_icons,
      number_icons: number_icons,
      mutationList: mutationList,
      mutationShowList: [
        {icon: 'bgv.png', show: true, key: 0.1},
        {icon: 'cgm.png', show: true, key: 0.2},
        {icon: 'bgn.png', show: true, key: 0.3},
        {icon: 'cgie.png', show: true, key: 0.4},
        {icon: 'cgv.png', show: true, key: 0.5},
        {icon: 'cgii.png', show: true, key: 0.6},
        {icon: 'bgth.png', show: true, key: 0.7},
        {icon: 'rbgk.png', show: true, key: 0.8},
      ],
      mutationSwitch: true,
      eventNow: _.sample(event_icons),
      eventAfter: _.sample(event_icons),
      status: {
        mutationPoint: 0,
        mutationRate: 1,
        quantity: 1,
        weight: 1,
        lifetime: 1,
        phenotypicTrait: [],
        intelligence: 1,
        natality: 0.1,
        mortality: 0.1,
        ecologicalNichePoint: 1,
        feedRange: 0.5
      }
    }
  },
  computed: {
    mutationShowList1 () {
      return this.mutationShowList.slice(0, 4)
    },
    mutationShowList2 () {
      return this.mutationShowList.slice(4, 8)
    }
  },
  watch: {
    eventSwitch: function () {
      this.$refs.eventroll.roundEvent()
      setTimeout(()=>this.$refs.eventresultroll.roundEvent(), 3000)
    },
    mutationSwitch: function () {
      this.mutationShowList.map(e=>{
        this.$set(e, 'show', true)
        this.$set(e, 'key', Math.random())
      })
      for (let i=0; i<8; i++) {
        setTimeout(()=>{
          this.$refs.mutation[i].roundEvent()
          if (i==7) setTimeout(()=>{
            this.$set(this.mutationShowList[4], 'show', false)
            this.$set(this.mutationShowList[6], 'show', false)
          }, 250*i+2750)
        }, 250*i)
      }
    }
  },
  mounted () {
    this.caculateFramerate()
    this.timeFlow()
  },
  methods: {
    formatTime (timer) {
      return new Intl.NumberFormat().format(timer)
    },
    caculateFramerate () {
      let count = 0
      let startTime = Date.now()
      let tick = () => {
        if (count < 1000) {
          count++
          requestAnimationFrame(tick)
        } else {
          let endTime = Date.now()
          let framerate = Math.round(1000*1000 / (endTime - startTime))
          this.framerate = framerate >= 60 ? framerate : 60
        }
      }
      requestAnimationFrame(tick)
    },
    timeFlow () {
      let count = 0
      let tick = () => {
        if (++count % this.framerate == 0) this.timer += 60
        requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }
  }
}
</script>

<style lang="stylus" scoped>
#content
  .el-card
    text-align left
    margin-bottom 10px
  #mutation-card, #event-card, #logger-card
    height 334px
  #status-card
    height 350px
  .event-switch, .mutation-switch
    float right 
  .event-value
    margin 4px
  .icon-warp
    margin 8px 0
    overflow hidden
  .mutation-score
    margin 4px

  .fast-fade-leave-active, .fast-fade-enter-active
    transition all 0.1s
  .fast-fade-leave-active
    transform translateY(128px)
  .fast-fade-enter
    transform translateY(-128px)
  .fast-fade-enter, .fast-fade-leave-active
    opacity 0.2
</style>
