<template>
  <div class="home">
    <span class="main-heading">TRPG模拟器</span><span class="sub-heading">({{subHeading}})</span>
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
                    eventNow ="semp.webp"
                    :event_icons="action_icons"
                    :eventAfter="action.icon"
                    iconMargin="2px"
                    ref="action"
                    v-if="action.show"
                  />
                  <img :src="`icons/+${action.value}.webp`" class="action-score" v-else/>
                </transition>
              </el-col>
            </el-row>
            <el-row class="icon-warp">
              <el-col :span="6" v-for="action in actionShowList2" :key="action.key">
                <transition name="fast-fade" mode="out-in">
                  <Roll
                    eventNow ="semp.webp"
                    :event_icons="action_icons"
                    :eventAfter="action.icon"
                    iconMargin="2px"
                    ref="action"
                    v-if="action.show"
                  />
                  <img :src="`icons/+${action.value}.webp`" class="action-score" v-else/>
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
                  eventNow="bemp.webp"
                  :event_icons="event_icons"
                  :eventAfter="eventShow"
                  iconMargin="2px 10px"
                  ref="eventroll"
                />
              </el-col>
              <el-col :span="8">
                <Roll
                  eventNow="bemp.webp"
                  :event_icons="number_icons"
                  :eventAfter="`bn${eventValue}.webp`"
                  iconMargin="2px 10px"
                  ref="eventrollvalue"
                />
              </el-col>
              <el-col :span="8">
                <Roll
                  eventNow="bemp.webp"
                  :event_icons="number_icons"
                  :eventAfter="`bn${eventRolled}.webp`"
                  iconMargin="2px 10px"
                  ref="eventresultroll"
                />
              </el-col>
            </el-row>
          </el-card>
        </el-col>
        <el-col :lg="9" :sm="24">
          <el-card id="market-card" v-show="displayMarket">
            <template #header>
              <span>市场 ({{money}};{{stock}})</span>
              <el-button class="card-header-button" type="primary" size="mini" plain>购买一组扭蛋</el-button>
              <el-button class="card-header-button" type="primary" size="mini" plain @click="displayMarket = !displayMarket">切换到状态</el-button>
            </template>
            <el-row>
              <el-col :span="5">
                <span class="price-now">当前价:{{price}}</span>
              </el-col>
              <el-col :span="14">
                <el-input size="mini" v-model.number="trade">
                  <template #append>
                    <el-button icon="el-icon-plus" @click="stockBuy"></el-button>
                    <el-button icon="el-icon-minus" @click="stockSell"></el-button>
                  </template>
                </el-input>
              </el-col>
              <el-col :span="5">
                <el-select v-model="leverage" placeholder="杠杆" size="mini">
                  <el-option
                    v-for="item in leverageOption"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-col>
            </el-row>
            <div id="k-graph"></div>
          </el-card>
          <el-card id="status-card" v-show="!displayMarket">
            <template #header>
              <span>状态</span>
              <el-button class="card-header-button" type="primary" size="mini" plain>购买一组扭蛋</el-button>
              <el-button class="card-header-button" type="primary" size="mini" plain @click="displayMarket = !displayMarket">切换到市场</el-button>
            </template>
            <el-descriptions :column="3" size="mini">
              <el-descriptions-item label="动作点">{{actionPoint}}</el-descriptions-item>
              <el-descriptions-item label="事件点">{{eventPoint}}</el-descriptions-item>
              <el-descriptions-item label="余额">{{money}}</el-descriptions-item>
            </el-descriptions>
            <el-descriptions :column="descriptionColumn" size="mini">
              <el-descriptions-item 
                v-for="(value, key) in status"
                :key="key"
                :label="key">{{value}}</el-descriptions-item>
            </el-descriptions>
            <el-descriptions :column="1" size="mini">
              <el-descriptions-item 
                v-for="(pack, key) in backpack"
                :key="key"
                :label="key"
              >{{pack.join(', ')}}</el-descriptions-item>
            </el-descriptions>
          </el-card>
        </el-col>
        <el-col :lg="12" :sm="24">
          <el-card id="items-card">
            <template #header>
              <span>事件</span>
            </template>
            <el-tabs
              id="item-card"
              type="border-card"
              tabPosition="left"
            >
              <el-tab-pane
                v-for="item in displayItemList"
                :key="item.id"
                :label="item.name"
              >
                <Item
                  :id="item.id"
                  :nodes="item.nodes"
                  :activeAction="item.activeAction"
                  @choose="chooseItem(item.id)"
                />
                <div class="button-item-action">
                  <el-button type="success" size="mini" icon="el-icon-check" plain round @click="chooseItem(item.id)"></el-button>
                  <el-button type="danger" size="mini" icon="el-icon-delete" plain round></el-button>
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
            <ul class="story-list">
              <Story
                v-for="story in displayStoryList"
                :key="story.id"
                v-bind="story"
                :numberIcon="number_icons"
                @choose-subid="solveChoose"
              />
            </ul>
          </el-card>
        </el-col>
      </el-row>
      <!-- <div class="timer">时间 {{formatTime(timer)}} 天</div> -->
    </el-card>
  </div>
</template>

<script>
// @ is an alias to /src
// import itemList from '@/assets/itemList.json'
// import eventList from '@/assets/eventList.json'
// import scriptData from '@/assets/scriptData.json'
import _ from 'lodash'
import Roll from '@/components/roll.vue'
import Item from '@/components/item.vue'
import Story from '@/components/story.vue'
import { nanoid } from 'nanoid'
import { Stock } from '@antv/g2plot'

export default {
  name: 'Home',
  components: {
    Roll,
    Item,
    Story
  },
  props: {
    script: String
  },
  data () {
    return {
      timer: 0,
      framerate: 60,
      letters:['a', 'ch', 'd', 'e', 'f', 'g', 'ie', 'ii', 'iu', 'k', 'l', 'm', 'n', 'oo', 'oz', 'p', 'ps', 'r', 's', 't', 'th', 'v', 'x', 'z'],
      number_icons: [],
      action_icons: [],
      event_icons: [],
      itemList: [],
      eventList: [],
      prePickEventList: [],
      availableActionList: [],
      chosenItemList: [],
      chosenEventList: [],
      actionSwitch: true,
      eventSwitch: true,
      disableActionSwitch: true,
      disableEventSwitch: true,
      actionLock: true,
      eventLock: true,
      existActionList: ['sgf.webp', 'sgoz.webp', 'ygl.webp'],
      actionShowList: [],
      eventShow: 'rbgk.webp',
      eventValue: 9,
      eventRolled: 6,
      actionPoint: 3000,
      eventPoint: 0,
      descriptionColumn: 3,
      status: {},
      backpack: [],
      itemToken: [],
      eventToken: [],
      pickEvent: undefined,
      pickEventFlow: undefined,
      storyList: [],
      subHeading: undefined,
      displayMarket: false,
      money: 0,
      trade: 0,
      marketHistory: [{
        open: 1,
        close: 1,
        high: 1,
        low: 1,
        time: Date.now()
      }],
      marketTime: 1,
      second: 0,
      price: 1,
      leverage: 1,
      leverageOption: [{
        label: '1x',
        value: 1
      }, {
        label: '5x',
        value: 5
      }, {
        label: '10x',
        value: 10
      }, {
        label: '50x',
        value: 50
      }, {
        label: '100x',
        value: 100
      }],
      stock: 0,
      stockGraph: undefined
    }
  },
  computed: {
    actionShowList1 () {
      return this.actionShowList.slice(0, 4)
    },
    actionShowList2 () {
      return this.actionShowList.slice(4, 8)
    },
    displayItemList () {
      return _(_.cloneDeep(this.itemList)).map(s=>{
        let nodeIcons = s.nodes.map(n=>n.icon)
        s.activeAction = _.filter(this.existActionList, a=>nodeIcons.includes(a))
        return s
      })
      .filter(s=>{
        return !(_.isEmpty(s.activeAction) || this.chosenItemList.includes(s.id))
      })
      .sortBy(s=>-s.activeAction.length / s.nodes.length)
      .value()
    },
    tokenList () {
      return this.itemToken.concat(this.eventToken)
    },
    availableEventList () {
      return _.filter(this.prePickEventList, event=>{
        if (!event.baseToken) event.baseToken = []
        return _.every(event.baseToken, t=>_.includes(this.tokenList, t))
      })
    },
    displayStoryList () {
      return _.take(this.storyList, 30)
    }
  },
  watch: {
    actionPoint: function (val, oldVal) {
      if (val >= 1200 && this.actionSwitch && this.actionLock) {
        this.actionSwitch = false
        this.actionPoint -= 1200
        this.actionShowList = _.fill(Array(8), 0).map(()=>({
          show: true,
          key: nanoid(8),
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
                setTimeout(()=>{this.actionSwitch = true}, 1000)
              }, 5000)
            }, 250*i)
          }
        }
      }
    },
    eventPoint: function (val, oldVal) {
      if (val >= 1000 && this.eventSwitch && this.eventLock && this.availableEventList.length > 0) {
        this.eventSwitch = false
        this.eventPoint -= 1000
        this.pickEvent = _.sample(this.availableEventList)
        this.pickEventFlow = _.filter(this.eventList, this.pickEvent.id)
        this.eventShow = this.pickEvent.icon
        if (this.pickEvent.action == "roll") {
          this.eventValue = this.pickEvent.actionValue
          setTimeout(()=>{
            this.$refs.eventroll.roundEvent()
            this.$refs.eventrollvalue.roundEvent()
            this.eventRolled = _.random(0, 9)
            setTimeout(()=>{
              this.storyList.unshift({
                id: nanoid(),
                messageType: 'message',
                message: this.pickEvent.description
              })
              this.$refs.eventresultroll.roundEvent()
              setTimeout(()=>{
                this.solveEvent()
              }, 4500)
            }, 4500)
          }, 1000)
        } else {
          this.eventValue = 0
          setTimeout(()=>{
            this.$refs.eventroll.roundEvent()
            this.$refs.eventrollvalue.roundEvent()
            setTimeout(()=>{
              this.storyList.unshift({
                id: nanoid(),
                messageType: 'message',
                message: this.pickEvent.description
              })
              this.solveEvent()
            }, 4500)
          }, 1000)
        }
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
      key: nanoid(8),
      ...this.pickIcon()
    }))
    setInterval(()=>{
      this.money += 1
    }, 1000)
    this.createGraph()
    setInterval(()=>{
      this.stockGraph.update({
        data: this.marketHistory,
      })
    }, 10000)

    this.$http.get(`/redice/data/${this.script}.json`)
    .then(res=>{
      
      let scriptData = res.data
      this.itemList = scriptData.itemList
      this.eventList = scriptData.eventList
      this.descriptionColumn = scriptData.column
      this.status = scriptData.status
      this.subHeading = scriptData.name
      this.backpack = scriptData.backpack

      this.prePickEventList = _.filter(this.eventList, event=>_.has(event, 'icon'))

      // test code
      // this.eventToken.push('野外')
      // this.talk(['1','2','3','4','5'])
    })
    .catch(()=>{
      this.$router.push('/')
    })
  },
  methods: {
    talk (remarks = [], delay = 2000) {
      remarks = _.cloneDeep(remarks)
      this.storyList.unshift({
        id: nanoid(),
        messageType: 'message',
        message: remarks.shift()
      })
      if (remarks.length > 0){
        setTimeout(()=>{
          this.storyList.unshift({
            id: nanoid(),
            messageType: 'message',
            message: remarks.shift()
          })
          this.talk(remarks)
        }, delay)
      }
    },
    pickIcon (colorList = [
      {color: 'rb', ratio: 98, value: 500},
      {color: 'y', ratio: 80, value: 100},
      {color: 's', ratio: 0, value: 10}
      ], type = 'g', letters = this.letters) {
      let seed = _.random(1,100)
      let letter = _.sample(letters)
      let foundInColor = _.find(colorList, c=>seed > c.ratio)
      return {
        icon: `${foundInColor.color}${type}${letter}.webp`,
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
    chooseItem (id) {
      let item = _.find(this.displayItemList, {id: id})
      if (item.activeAction.length == item.nodes.length) {
        if (item.onetime) this.chosenItemList.push(id)
        this.existActionList = _.without(this.existActionList, ...item.activeAction)
        this.handleEffect(_.pick(item, ['statusEffect', 'eventEffect']))
        if (item.addToken) {
          this.itemToken = _([...this.itemToken, ...item.addToken]).uniq().compact().value()
        }
        // if (['backpack'].includes(item.cat)) {
        //   this.backpack.push(item.name)
        // }
        if (!_.isEmpty(item.description)) {
          this.storyList.unshift({
            id: nanoid(),
            messageType: 'message',
            message: item.description
          })
        }
      }
    },
    triggerEvent (name) {
      this.pickEvent = _.find(this.prePickEventList, {name: name})
      if (!_.isEmpty(this.pickEvent.description)) {
        this.storyList.unshift({
          id: nanoid(),
          messageType: 'message',
          message: this.pickEvent.description
        })
      }
      this.solveFlow(this.pickEvent.id, 1)
    },
    solveEvent() {
      if (this.pickEvent.action == 'roll') {
        if (this.eventRolled >= this.eventValue) {
          this.storyList.unshift({
            id: nanoid(),
            messageType: 'message',
            message: this.pickEvent.success
          })
          setTimeout(()=>{
            this.solveFlow(this.pickEvent.id, this.pickEvent.successRedirect)
          }, 1000)
        } else {
          this.storyList.unshift({
            id: nanoid(),
            messageType: 'message',
            message: this.pickEvent.fail
          })
          setTimeout(()=>{
            this.solveFlow(this.pickEvent.id, this.pickEvent.failRedirect)
          }, 1000)
        }
      } else {

      }
    },
    solveFlow (id, subID) {
      if (!_.isNumber(subID)) return false
      let foundFlow = _.find(this.eventList, {id: id, subID: subID})
      switch (foundFlow.action) {
        case 'roll':
          let rolled = _.random(0, 9)
          let extraPoint = this.status[foundFlow.actionType] || 0
          let result = Math.round(rolled + extraPoint) > 9 ? 9 : Math.round(rolled + extraPoint) < 0 ? 0 : Math.round(rolled + extraPoint)
          this.storyList.unshift({
            id: nanoid(),
            messageType: 'roll',
            message: foundFlow.subFlowDescription,
            rollType: foundFlow.actionType,
            determValue: foundFlow.actionValue,
            determRolled: {
              value: rolled,
              show: true
            },
            determRolledRevise: result,
            determResult: result >= foundFlow.actionValue,
            success: foundFlow.success,
            fail: foundFlow.fail
          })
          setTimeout(()=>{
            if (result >= foundFlow.actionValue) {
              this.solveFlow(id, foundFlow.successRedirect)
            } else {
              this.solveFlow(id, foundFlow.failRedirect)
            }
          }, 5000)
          break
        case 'check':
          let checkFunction = eval('a=>' + foundFlow.actionValue)
          if (checkFunction(_.get(this, foundFlow.actionType))) {
            this.storyList.unshift({
              id: nanoid(),
              messageType: 'message',
              message: foundFlow.success
            })
            setTimeout(()=>{
              this.solveFlow(id, foundFlow.successRedirect)
            }, 1000)
          } else {
            this.storyList.unshift({
              id: nanoid(),
              messageType: 'message',
              message: foundFlow.fail
            })
            setTimeout(()=>{
              this.solveFlow(id, foundFlow.failRedirect)
            }, 1000)
          }
          break
        case 'choose':
          this.storyList.unshift({
            id: nanoid(),
            messageType: 'choose',
            message: foundFlow.subFlowDescription,
            optionList: foundFlow.optionList
          })
          break
        case 'end':
          this.storyList.unshift({
            id: nanoid(),
            messageType: 'message',
            message: foundFlow.subFlowDescription
          })
          this.eventSwitch = true
          this.handleEffect(foundFlow)
          break
      }
    },
    solveChoose (subID) {
      this.solveFlow(this.pickEvent.id, subID)
    },
    handleEffect (effect = {statusEffect: {}, eventEffect: {}}) {
      this.handleStatusEffect(effect.statusEffect)
      this.handleEventEffect(effect.eventEffect)
    },
    handleStatusEffect (effect) {
      _.forIn(effect, (val, key)=>{
        this.$set(this.status, key, this.status[key] + val)
      }) 
    },
    handleEventEffect (effect) {
      _.forIn(effect, (val, key)=>{
        switch (key) {
          case 'immediate':
            this.triggerEvent(val)
            break
          case 'add':
          case 'remove':
            break
        }
      })
    },
    handleToken () {

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
          this.updateMarkerPrice()
        }
        requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    },
    updateMarkerPrice () {
      let seed = _.random(-98,100)
      this.price = _.round(this.price*(1+seed/10000), 4)
      this.stock = _.round(this.stock*(1+seed/10000*this.leverage), 2)
      if (this.stock < 0) this.stock = 0
      this.second += 1
      if (this.second >= 60) {
        this.marketTime += 1
        this.marketHistory.push({
          time: Date.now(),
          open: this.price,
          close: this.price,
          high: this.price,
          low: this.price
        })
        this.second = 0
      } else {
        let marketNow = _.last(this.marketHistory)
        marketNow.high < this.price ? marketNow.high = this.price : ''
        marketNow.low > this.price ? marketNow.low = this.price : ''
        marketNow.close = this.price
      }
      if (this.marketHistory.length > 60) this.marketHistory.unshift()
    },
    createGraph () {
      this.stockGraph = new Stock('k-graph', {
        data: this.marketHistory,
        height: 200,
        xField: 'time',
        yField: ['open', 'close', 'high', 'low']
      })
      this.stockGraph.render()
    },
    stockBuy () {
      if (_.isNumber(this.trade) && this.trade > 0) {
        if (this.trade <= this.money) {
          this.money -= this.trade
          this.stock += this.trade
        } else {
          this.$message.warning('余额不足')
        }
      }
    },
    stockSell () {
      if (_.isNumber(this.trade) && this.trade > 0) {
        if (this.trade <= this.stock) {
          this.stock -= this.trade
          this.money += this.trade
        } else {
          this.$message.warning('持仓不足')
        }
      }
    },
    geneList (arrayA, arrayB, arrayC) {
      let resultList = []
      _.forIn(arrayA, elementInA=>{
        _.forIn(arrayB, elementInB=>{
          _.forIn(arrayC, elementInC=>{
            resultList.push(elementInA + elementInB + elementInC + '.webp')
          })
        })
      })
      return resultList
    }
  }
}
</script>

<style lang="stylus" scoped>
.main-heading
  font-weight bold
  font-size 32px
  display inline-block
  margin 8px 10px

#content
  max-width 1280px
  min-width 480px
  margin auto
  .el-card
    text-align left
    margin-bottom 10px
  #action-card, #event-card, #status-card, #market-card
    height 284px
  #items-card, #story-card
    height 500px
  #item-card
    height 435px
  .card-header-button
    float right
    margin -3px 2px 0
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
  .button-item-action
    float right
  .price-now
    font-size 12px
    vertical-align sub
    margin 0 4px
  .story-list
    height 436px
    margin 0
    padding 0
    overflow auto

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
  #event-card .el-card__body
    padding-top 60px
  #status-card .el-card__body
    height 224px
    overflow-y auto
    padding 8px 16px
</style>
