<template>
  <div class="home">
    <h1>演化模拟器</h1>
    <el-card id="content">
      <el-row :gutter="10" id="card-row">
        <el-col :lg="9" :sm="24">
          <el-card id="mutation-card">
            <template #header>
              <span>进化</span>
              <el-switch v-model="mutationSwitch" class="mutation-switch" :disabled="disableMutationSwitch"/>
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
                  <img :src="`img/mutation_icons/+${mutation.value}.png`" class="mutation-score" v-else/>
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
                  <img :src="`img/mutation_icons/+${mutation.value}.png`" class="mutation-score" v-else/>
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
                  :eventAfter="eventShow.icon"
                  pathString="img/event_icons/"
                  ref="eventroll"
                />
              </el-col>
              <el-col :span="8">
                <Roll
                  eventNow="empty.png"
                  :event_icons="number_icons"
                  :eventAfter="`bn${eventShow.value}.png`"
                  pathString="img/number_icons/"
                  ref="eventrollvalue"
                />
                <!-- <img :src="`img/number_icons/bn${eventShow.value}.png`" class="event-value"/> -->
              </el-col>
              <el-col :span="8">
                <Roll
                  eventNow="empty.png"
                  :event_icons="number_icons"
                  :eventAfter="`bn${eventRolled}.png`"
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
            <el-descriptions class="margin-top"  :column="3" size="small">
              <el-descriptions-item v-for="(value, key) in status" :key="key" :label="key">{{value}}</el-descriptions-item>
            </el-descriptions>
          </el-card>
        </el-col>
      </el-row>
      <div class="timer">地球时间 {{formatTime(timer)}} 年</div>
    </el-card>
  </div>
</template>

<script>
// @ is an alias to /src
import event_icons from '@/assets/event_icons.json'
import mutation_icons from '@/assets/mutation_icons.json'
import number_icons from '@/assets/number_icons.json'
import mutationList from '@/assets/mutationList.json'
import eventList from '@/assets/eventList.json'
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
      letters:['a', 'ch', 'd', 'e', 'f', 'g', 'ie', 'ii', 'iu', 'k', 'l', 'm', 'n', 'oo', 'oz', 'p', 'ps', 'r', 's', 't', 'th', 'v', 'x', 'z'],
      number_icons: number_icons,
      mutationList: mutationList,
      mutation_icons: mutation_icons,
      mutationSwitch: false,
      disableMutationSwitch: false,
      existMutationList: [],
      mutationShowList: [
        {icon: 'bgv.png', show: true, key: 0.1, value: 10},
        {icon: 'cgm.png', show: true, key: 0.2, value: 10},
        {icon: 'bgn.png', show: true, key: 0.3, value: 10},
        {icon: 'cgie.png', show: true, key: 0.4, value: 10},
        {icon: 'cgv.png', show: true, key: 0.5, value: 10},
        {icon: 'cgii.png', show: true, key: 0.6, value: 10},
        {icon: 'bgth.png', show: true, key: 0.7, value: 10},
        {icon: 'rbgk.png', show: true, key: 0.8, value: 10},
      ],
      eventList: eventList,
      event_icons: event_icons,
      eventSwitch: false,
      eventShow: {
        icon: 'rbgk.png',
        value: 9
      },
      eventRolled: 0,
      status: {
        mutationPoint: 11400,
        mutationRate: 1,
        eventPoint: 0,
        biomass: 100,
        reproductiverate: 0.1,
        lifetime: 0.00023,
        intelligence: 1,
        ecologicalNichePoint: 1,
        phenotypicTrait: [],
      }
    }
  },
  computed: {
    mutationShowList1 () {
      return this.mutationShowList.slice(0, 4)
    },
    mutationShowList2 () {
      return this.mutationShowList.slice(4, 8)
    },
  },
  watch: {
    status: {
      handler: function (val, oldVal) {
        if (val.mutationPoint >= 12000 && !this.mutationSwitch) {
          this.mutationSwitch = true
          this.$set(val, 'mutationPoint', val.mutationPoint - 1200)
          this.mutationShowList = _.fill(Array(8), 0).map(()=>({
            show: true,
            key: _.random(0, 99999),
            ...this.pickIcon()
          }))
          for (let i=0; i<8; i++) {
            if (i !== 7) {
              setTimeout(()=>{
                this.$refs.mutation[i].roundEvent()
              }, 250*i)
            } else {
              setTimeout(()=>{
                this.$refs.mutation[i].roundEvent()
                setTimeout(()=>{
                  this.convertMutationPoint()
                  setTimeout(()=>{this.mutationSwitch = false}, 1000)
                }, 5000)
              }, 250*i)
            }            
          }
        }
        if (val.eventPoint >= 1000 && !this.eventSwitch) {
          this.eventSwitch = true
          this.$set(val, 'eventPoint', val.eventPoint - 1000)
          this.eventShow = {
            icon: this.pickIcon().icon,
            value: _.random(0, 9)
          }
          setTimeout(()=>{
            this.$refs.eventroll.roundEvent()
            this.$refs.eventrollvalue.roundEvent()
            this.eventRolled = _.random(0, 9)
            setTimeout(()=>{
              this.$refs.eventresultroll.roundEvent()
              setTimeout(()=>{
                this.eventSwitch = false
              }, 4500)
            }, 4500)
          }, 1000)
        }
      },  
      deep: true
    }
  },
  mounted () {
    this.caculateFramerate()
    this.timeFlow()
  },
  methods: {
    calculateBiomass () {
      this.$set(this.status, 'biomass', this.status.biomass * (1+this.status.reproductiverate))
    },
    pickIcon () {
      let seed = _.random(1,100)
      let color, type, letter, value
      type = 'g'
      if (seed > 98) {
        color = 'rb'
        letter = _.sample(this.letters)
        value = 500
      } else if (seed > 80) {
        color = 'c'
        letter = _.sample(this.letters)
        value = 100
      } else {
        color = 'b'
        letter = _.sample(this.letters)
        value = 10
      }
      return {
        icon: `${color}${type}${letter}.png`,
        value: value
      }
    },
    convertMutationPoint () {
      _.forIn(this.mutationShowList, mutation=>{
        if (this.existMutationList.includes(mutation.icon)) {
          this.$set(mutation, 'show', false)
          this.$set(this.status, 'mutationPoint', this.status.mutationPoint+mutation.value)
        } else {
          this.existMutationList.push(mutation.icon)
        }
        this.$set(this.status, 'eventPoint', this.status.eventPoint + 50)
      })
    },
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
        if (++count % this.framerate == 0) {
          this.timer += 60
          this.$set(this.status, 'mutationPoint', this.status.mutationPoint + 100)
          this.calculateBiomass()
        }
        requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }
  }
}
</script>

<style lang="stylus" scoped>
#content
  max-width 1280px
  min-width 480px
  margin auto
  .el-card
    text-align left
    margin-bottom 10px
  #mutation-card, #event-card, #logger-card
    height 334px
  #status-card
    height 240px
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
