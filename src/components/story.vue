<template>
  <li class="list-element">
    <div v-if="messageType == 'message'" class="list-block">
      <p class="message-line">{{message}}</p>
    </div>
    <div v-else-if="messageType == 'roll'" class="list-block">
      <el-row>
        <p class="message-line">{{message}}</p>
      </el-row>
      <el-row>
        <p class="message-line">{{rollMessage}}</p>
      </el-row>
      <el-row v-if="rolled">
        <p class="message-line">检定难度{{determValue}}，检定值{{determRolled.value}}，修正值{{determRolledRevise}}，检定{{determResult ? '成功' : '失败'}}</p>
        <p class="message-line">{{determResult ? success : fail}}</p>
      </el-row>
      <el-row v-else class="icon-warp">
        <img :src="`icons/bn${determValue}.png`" class="event-value" />
        <transition name="fast-fade" mode="out-in">
          <Roll
            eventNow="bemp.png"
            :event_icons="numberIcon"
            :eventAfter="`bn${determRolled.value}.png`"
            iconMargin="2px 10px"
            ref="determroll"
            v-if="determRolled.show"
            class="event-value"
          />
          <img :src="`icons/bn${determRolledRevise}.png`" class="event-value" v-else/>
        </transition>
      </el-row>
    </div>
    <div v-else-if="messageType == 'choose'" class="list-block">
      <el-row>
        <p class="message-line">{{message}}</p>
      </el-row>
      <el-row>
        <el-radio-group v-model="chosenValue" @change="solveChoose" :disabled="chosen">
          <el-radio
            v-for="option in optionList"
            :key="option.label"
            :label="option.redirect"
          >{{option.label}}</el-radio>
        </el-radio-group>
      </el-row>
    </div>
  </li>
</template>

<script>
import Roll from '@/components/roll.vue'

export default {
  name: 'Story',
  components: {
    Roll
  },
  props: {
    messageType: {
      type: String,
      default: 'message'
    },
    message: String,
    numberIcon: Array,
    rollType: String,
    determValue: {
      type: Number,
      default: 0
    },
    determRolled: {
      type: Object,
      default: ()=>({value: 5, show: true})
    },
    determRolledRevise: {
      type: Number,
      default: 0
    },
    determResult: Boolean,
    success: String,
    fail: String,
    optionList: Array
  },
  data () {
    return {
      rolled: false,
      statusObject: {
        attack: '攻击',
        defense: '防御',
        strength: '体力',
        constitution: '体质',
        dexterity: '敏捷',
        power: '意志'
      },
      chosen: false,
      chosenValue: undefined
    }
  },
  computed: {
    rollMessage () {
      return this.statusObject[this.rollType] + '检定'
    }
  },
  mounted () {
    if (this.messageType == 'roll') {
      setTimeout(()=>{
        this.$refs.determroll.fastRoundEvent()
        setTimeout(()=>{
          this.determRolled.show = false
          setTimeout(()=>{
            this.rolled = true
          }, 1000)
        }, 3000)
      }, 250)
    }
  },
  methods: {
    solveChoose (value) {
      this.$emit('choose-subid', value)
      this.chosen = true
    }
  }
}
</script>

<style lang="stylus" scoped>
.list-element
  list-style-type none
  .list-block
    min-height 18px
    background #eff6ff
    margin 8px
    padding 10px
.message-line
  margin 6px 0
.icon-warp
  margin 4px 0
  overflow hidden
.event-value
  margin 2px 10px
  display inline-block

.fast-fade-leave-active, .fast-fade-enter-active
    transition all 0.1s
  .fast-fade-leave-active
    transform translateY(128px)
  .fast-fade-enter
    transform translateY(-128px)
  .fast-fade-enter, .fast-fade-leave-active
    opacity 0.2
</style>