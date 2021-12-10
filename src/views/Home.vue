<template>
  <div class="home">
    <h1>异世界转生模拟器</h1>
    <el-card id="content">
      <el-row :gutter="10" id="card-row">
        <el-col :lg="8" :sm="24">
          <el-card id="action-card">
            <template #header>
              <span>扭蛋</span>
              <el-switch v-model="actionLock" class="action-switch" :disabled="disableActionSwitch"/>
            </template>
            <el-row class="icon-warp">
              <el-col :span="6" v-for="action in actionShowList1" :key="action.key">
                <transition name="fast-fade" mode="out-in">
                  <Roll
                    eventNow ="semp.png"
                    :event_icons="action_icons"
                    :eventAfter="action.icon"
                    iconMargin="2px"
                    ref="action"
                    v-if="action.show"
                  />
                  <img :src="`icons/+${action.value}.png`" class="action-score" v-else/>
                </transition>
              </el-col>
            </el-row>
            <el-row class="icon-warp">
              <el-col :span="6" v-for="action in actionShowList2" :key="action.key">
                <transition name="fast-fade" mode="out-in">
                  <Roll
                    eventNow ="semp.png"
                    :event_icons="action_icons"
                    :eventAfter="action.icon"
                    iconMargin="2px"
                    ref="action"
                    v-if="action.show"
                  />
                  <img :src="`icons/+${action.value}.png`" class="action-score" v-else/>
                </transition>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
        <el-col :lg="7" :sm="24">
          <el-card id="event-card">
            <template #header>
              <span>事件</span>
              <el-switch v-model="eventLock" class="event-switch" :disabled="disableEventSwitch"/>
            </template>
            <el-row class="icon-warp">
              <el-col :span="8">
                <Roll
                  eventNow="bemp.png"
                  :event_icons="event_icons"
                  :eventAfter="eventShow"
                  iconMargin="2px 10px"
                  ref="eventroll"
                />
              </el-col>
              <el-col :span="8">
                <Roll
                  eventNow="bemp.png"
                  :event_icons="number_icons"
                  :eventAfter="`bn${eventValue}.png`"
                  iconMargin="2px 10px"
                  ref="eventrollvalue"
                />
              </el-col>
              <el-col :span="8">
                <Roll
                  eventNow="bemp.png"
                  :event_icons="number_icons"
                  :eventAfter="`bn${eventRolled}.png`"
                  iconMargin="2px 10px"
                  ref="eventresultroll"
                />
              </el-col>
            </el-row>
            <el-row class="icon-warp">
              <el-col :span="8">
                <img src="icons/bemp.png" class="event-icon-block event-value"/>
              </el-col>
              <el-col :span="8">
                <img :src="`icons/bn${determValue}.png`" class="event-value" />
              </el-col>
              <el-col :span="8">
                <transition name="fast-fade" mode="out-in">
                  <Roll
                    eventNow="bemp.png"
                    :event_icons="number_icons"
                    :eventAfter="`bn${determRolled.value}.png`"
                    iconMargin="2px 10px"
                    ref="determroll"
                    v-if="determRolled.show"
                  />
                  <img :src="`icons/bn${determRolledRevise}.png`" class="event-value" v-else/>
                </transition>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
        <el-col :lg="9" :sm="24">
          <el-card id="status-card">
            <template #header>
              <span>状态</span>
            </template>
            <el-descriptions :column="3" size="mini">
              <el-descriptions-item label="动作点">{{actionPoint}}</el-descriptions-item>
              <el-descriptions-item label="事件点">{{eventPoint}}</el-descriptions-item>
              <el-descriptions-item label="财富">{{money}}</el-descriptions-item>
              <el-descriptions-item label="HP">{{status.hitpoint}}</el-descriptions-item>
              <el-descriptions-item label="精神">{{status.spirit}}</el-descriptions-item>
              <el-descriptions-item label="理智">{{status.sanity}}</el-descriptions-item>
              <el-descriptions-item label="攻击">{{status.attack}}</el-descriptions-item>
              <el-descriptions-item label="防御">{{status.defense}}</el-descriptions-item>
              <el-descriptions-item label="力量">{{status.strength}}</el-descriptions-item>
              <el-descriptions-item label="体质">{{status.constitution}}</el-descriptions-item>
              <el-descriptions-item label="敏捷">{{status.dexterity}}</el-descriptions-item>
              <el-descriptions-item label="意志">{{status.power}}</el-descriptions-item>
            </el-descriptions>
          </el-card>
        </el-col>
        <el-col :lg="12" :sm="24">
          <el-card id="skills-card">
            <template #header>
              <span>事件</span>
            </template>
            <el-tabs
              id="skill-card"
              type="border-card"
              tabPosition="left"
            >
              <el-tab-pane
                v-for="skill in displaySkillList"
                :key="skill.id"
                :label="skill.name"
              >
                <Skill
                  :id="skill.id"
                  :nodes="skill.nodes"
                  :activeAction="skill.activeAction"
                  @choose="chooseSkill(skill.id)"
                />
                <div class="button-skill-action">
                  <el-button type="success" size="mini" icon="el-icon-check" plain round @click="chooseSkill(skill.id)"></el-button>
                  <el-button type="danger" size="mini" icon="el-icon-delete" plain round ></el-button>
                </div>
              </el-tab-pane>
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
import skillList from '@/assets/skillList.json'
import eventList from '@/assets/eventList.json'
import _ from 'lodash'
import Roll from '@/components/roll.vue'
import Skill from '@/components/skill.vue'
import { nanoid } from 'nanoid'

export default {
  name: 'Home',
  components: {
    Roll,
    Skill
  },
  data () {
    return {
      timer: 0,
      framerate: 60,
      letters:['a', 'ch', 'd', 'e', 'f', 'g', 'ie', 'ii', 'iu', 'k', 'l', 'm', 'n', 'oo', 'oz', 'p', 'ps', 'r', 's', 't', 'th', 'v', 'x', 'z'],
      number_icons: [],
      action_icons: [],
      event_icons: [],
      skillList: skillList,
      eventList: eventList,
      availableActionList: [],
      availableEventList: [],
      chosenSkillList: [],
      chosenEventList: [],
      actionSwitch: false,
      eventSwitch: false,
      disableActionSwitch: true,
      disableEventSwitch: true,
      actionLock: true,
      eventLock: true,
      existActionList: ['bge.png'],
      actionShowList: [],
      eventShow: 'rbgk.png',
      eventValue: 9,
      eventRolled: 6,
      determValue: null,
      determRolled: {
        value: 5,
        show: true
      },
      determRolledRevise: 9,
      actionPoint: 11400,
      eventPoint: 600,
      money: 0,
      status: {
        hitpoint: 100,
        spirit: 100,
        sanity: 100,
        attack: 0,
        defense: 0,
        strength: 0,
        constitution: 0,
        dexterity: 0,
        power: 0
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
    displaySkillList () {
      return _(_.cloneDeep(this.skillList)).map(s=>{
        let nodeIcons = s.nodes.map(n=>n.icon)
        s.activeAction = _.filter(this.existActionList, a=>nodeIcons.includes(a))
        return s
      })
      .filter(s=>{
        return !(_.isEmpty(s.activeAction) || this.chosenSkillList.includes(s.id))
      })
      .sortBy(s=>-s.activeAction.length / s.nodes.length)
      .value()
    }
  },
  watch: {
    actionPoint: function (val, oldVal) {
      if (val >= 12000 && !this.actionSwitch && this.actionLock) {
        this.actionSwitch = true
        this.actionPoint -= 1200
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
    },
    eventPoint: function (val, oldVal) {
      if (val >= 1000 && !this.eventSwitch && this.eventLock) {
        this.eventSwitch = true
        this.eventPoint -= 1000
        this.eventShow = this.pickIcon([
            {color: 'rb', ratio: 95, value: 500},
            {color: 'c', ratio: 70, value: 100},
            {color: 'b', ratio: 0, value: 10}
          ],'g', this.letters).icon
        this.eventValue = _.random(0, 9)
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
    }
  },
  mounted () {
    this.caculateFramerate()
    this.timeFlow()
    this.action_icons = this.geneList(['s', 'y', 'rb'], ['g'], this.letters)
    this.number_icons = this.geneList(['b'], ['n'], [0,1,2,3,4,5,6,7,8,9])
    this.event_icons = this.geneList(['b', 'c', 'rb'], ['g'], this.letters)
    this.actionShowList = _.fill(Array(8), 0).map(()=>({
      show: true,
      key: nanoid(),
      ...this.pickIcon()
    }))
  },
  methods: {
    determRoll (determValue, determRolledValue, reviseValue) {
      this.determValue = determValue
      this.determRolled = {
        value: determRolledValue,
        show: true
      }
      let revise = Math.round(this.determRolled.value + reviseValue)
      if (revise < 0 ) {
        this.determRolledRevise = 0
      } else if (revise > 9) {
        this.determRolledRevise = 9
      } else {
        this.determRolledRevise = revise
      }
      setTimeout(()=>{
        this.$refs.determroll.fastRoundEvent()
        setTimeout(()=>{
          this.determRolled.show = false
        }, 3000)
      }, 250)
    },
    pickIcon (colorList = [
      {color: 'rb', ratio: 95, value: 500},
      {color: 'y', ratio: 70, value: 100},
      {color: 's', ratio: 0, value: 10}
      ], type = 'g', letters = this.letters) {
      let seed = _.random(1,100)
      let letter = _.sample(letters)
      let foundInColor = _.find(colorList, c=>seed > c.ratio)
      return {
        icon: `${foundInColor.color}${type}${letter}.png`,
        value: foundInColor.value
      }
    },
    convertActionPoint () {
      _.forIn(this.actionShowList, action=>{
        if (this.existActionList.includes(action.icon)) {
          this.$set(action, 'show', false)
          this.actionPoint += action.value
        } else {
          this.existActionList.push(action.icon)
        }
        this.eventPoint += 50
      })
    },
    chooseSkill (id) {
      let skill = _.find(this.displaySkillList, {id: id})
      if (skill.activeAction.length == skill.nodes.length) {
        if (skill.onetime) this.chosenSkillList.push(id)
        this.existActionList = _.without(this.existActionList, ...skill.activeAction)
        
      }
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
          this.actionPoint += 100
          // this.calculateBiomass()
        }
        requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    },
    geneList (arrayA, arrayB, arrayC) {
      let resultList = []
      _.forIn(arrayA, elementInA=>{
        _.forIn(arrayB, elementInB=>{
          _.forIn(arrayC, elementInC=>{
            resultList.push(elementInA + elementInB + elementInC + '.png')
          })
        })
      })
      return resultList
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
  #action-card, #event-card, #status-card
    height 284px
  #skills-card, #story-card
    height 500px
  #skill-card
    height 435px
  .event-switch, .action-switch
    float right
  .event-value
    margin 2px 10px
  .event-icon-block
    opacity 0
  .icon-warp
    margin 4px 0
    overflow hidden
  .action-score
    margin 2px
  .button-skill-action
    float right

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
