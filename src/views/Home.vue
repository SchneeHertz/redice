<template>
  <div class="home">
    <h1>异世界转生模拟器</h1>
    <el-card id="content">
      <el-row :gutter="10" id="card-row">
        <el-col :lg="8" :sm="24">
          <el-card id="action-card">
            <template #header>
              <span>扭蛋</span>
              <el-switch v-model="actionSwitch" class="action-switch" :disabled="disableActionSwitch"/>
            </template>
            <el-row class="icon-warp">
              <el-col :span="6" v-for="action in actionShowList1" :key="action.key">
                <transition name="fast-fade" mode="out-in">
                  <Roll 
                    eventNow ="empty.png"
                    :event_icons="action_icons"
                    :eventAfter="action.icon"
                    pathString="img/action_icons/"
                    ref="action"
                    v-if="action.show"
                    iconMargin="2px"
                  />
                  <img :src="`img/action_icons/+${action.value}.png`" class="action-score" v-else/>
                </transition>
              </el-col>
            </el-row>
            <el-row class="icon-warp">
              <el-col :span="6" v-for="action in actionShowList2" :key="action.key">
                <transition name="fast-fade" mode="out-in">
                  <Roll 
                    eventNow ="empty.png"
                    :event_icons="action_icons"
                    :eventAfter="action.icon"
                    pathString="img/action_icons/"
                    ref="action"
                    v-if="action.show"
                    iconMargin="2px"
                  />
                  <img :src="`img/action_icons/+${action.value}.png`" class="action-score" v-else/>
                </transition>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
        <el-col :lg="7" :sm="24">
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
                  iconMargin="10px"
                />
              </el-col>
              <el-col :span="8">
                <Roll
                  eventNow="empty.png"
                  :event_icons="number_icons"
                  :eventAfter="`bn${eventShow.value}.png`"
                  pathString="img/number_icons/"
                  ref="eventrollvalue"
                  iconMargin="10px"
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
                  iconMargin="10px"
                />
              </el-col>
            </el-row>
          </el-card>
        </el-col>
        <el-col :lg="9" :sm="24">
          <el-card id="logger-card">
            <template #header>
              <span>记录</span>
            </template>
            
          </el-card>
        </el-col>
        <el-col :lg="12" :sm="24">
          <el-card id="status-card">
            <template #header>
              <span>事件</span>
            </template>
            <el-tabs
              id="skill-card"
              type="border-card"
              tabPosition="left"
            >
              <el-tab-pane label="消息中心"><div style="height:400px;width:400px;background-color:lightblue;"></div></el-tab-pane>
              <el-tab-pane label="消息中心">消息中心</el-tab-pane>
              <el-tab-pane label="角色管理">角色管理</el-tab-pane>
              <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
            </el-tabs>
          </el-card>
        </el-col>
        <el-col :lg="12" :sm="24">
          <el-card id="story-card">
            <template #header>
              <span>故事</span>
            </template>
          </el-card>
        </el-col>
      </el-row>
      <!-- <div class="timer">时间 {{formatTime(timer)}} 天</div> -->
    </el-card>
  </div>
</template>

<script>
// @ is an alias to /src
import event_icons from '@/assets/event_icons.json'
import action_icons from '@/assets/action_icons.json'
import number_icons from '@/assets/number_icons.json'
import actionList from '@/assets/actionList.json'
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
      actionList: actionList,
      availableActionList: [],
      action_icons: action_icons,
      actionSwitch: false,
      disableActionSwitch: false,
      existActionList: [],
      actionShowList: [
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
        actionPoint: 11400,
        actionRate: 1,
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
    actionShowList1 () {
      return this.actionShowList.slice(0, 4)
    },
    actionShowList2 () {
      return this.actionShowList.slice(4, 8)
    },
  },
  watch: {
    status: {
      handler: function (val, oldVal) {
        if (val.actionPoint >= 12000 && !this.actionSwitch) {
          this.actionSwitch = true
          this.$set(val, 'actionPoint', val.actionPoint - 1200)
          this.actionShowList = _.fill(Array(8), 0).map(()=>({
            show: true,
            key: _.random(0, 99999),
            ...this.pickIcon()
          }))
          for (let i=0; i<8; i++) {
            if (i !== 7) {
              setTimeout(()=>{
                this.$refs.action[i].roundEvent()
              }, 250*i)
            } else {
              setTimeout(()=>{
                this.$refs.action[i].roundEvent()
                setTimeout(()=>{
                  this.convertActionPoint()
                  setTimeout(()=>{this.actionSwitch = false}, 1000)
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
    convertActionPoint () {
      _.forIn(this.actionShowList, action=>{
        if (this.existActionList.includes(action.icon)) {
          this.$set(action, 'show', false)
          this.$set(this.status, 'actionPoint', this.status.actionPoint+action.value)
        } else {
          this.existActionList.push(action.icon)
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
          this.$set(this.status, 'actionPoint', this.status.actionPoint + 100)
          // this.calculateBiomass()
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
  #action-card, #event-card, #logger-card
    height 284px
  #status-card, #story-card
    height 500px
  #skill-card
    height 435px
  .event-switch, .action-switch
    float right 
  .event-value
    margin 4px
  .icon-warp
    margin 4px 0
    overflow hidden
  .action-score
    margin 2px

  .fast-fade-leave-active, .fast-fade-enter-active
    transition all 0.1s
  .fast-fade-leave-active
    transform translateY(128px)
  .fast-fade-enter
    transform translateY(-128px)
  .fast-fade-enter, .fast-fade-leave-active
    opacity 0.2
</style>

<style lang="stylus">
#content
  .el-card__body
    padding 10px
  .el-card__header
    padding 10px 20px
  .el-tabs__header.is-left
    width 148px
</style>
