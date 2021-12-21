<template>
  <div>
    <transition :name="fadeType">
      <img :src="eventImage1st" v-if="trigger" key="on" class="event-icon" :style="{margin: iconMargin}"/>
      <img :src="eventImage2nd" v-else key="off" class="event-icon" :style="{margin: iconMargin}"/>
    </transition>
    <img :src="imageBlock" class="event-icon-block" :style="{margin: iconMargin}"/>
  </div>
</template>

<script>
export default {
  props: {
    eventNow: String,
    eventAfter: String,
    event_icons: Array,
    pathString: {
      type: String,
      default: 'icons/'
    },
    iconMargin: {
      type: String,
      default: '2px'
    }
  },
  data () {
    return {
      trigger: true,
      eventImage1st: this.pathString + this.eventNow,
      eventImage2nd: this.pathString + this.eventNow,
      imageBlock: this.pathString + 'bemp.webp',
      fadeType: ''
    }
  },
  methods: {
    fastRoundEvent () {
      let count = 0
      let frameRate = 6
      let frameCount = 20
      this.fadeType = 'fast-fade'
      let imageList = Array(frameCount - 1).fill(0).map(()=>this.pathString + this.event_icons[_.random(0, this.event_icons.length - 1)])
      imageList.unshift(this.pathString + this.eventAfter)
      let tick = () => {
        if (++count % frameRate == 0) {
          this.trigger = !this.trigger
          !this.trigger ? this.eventImage2nd = imageList.pop() : this.eventImage1st = imageList.pop()
        }
        if (count < 120) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    },
    roundEvent (speed = [6, 18, 54], duration = [90, 180, 240]) {
      let count = 0
      let frameRate = speed[0]
      let frameCount = Math.floor(duration[0] / speed[0] + (duration[1] - duration[0]) / speed[1] + (duration[2] - duration[1]) / speed[2])
      let imageList = Array(frameCount - 1).fill(0).map(()=>this.pathString + this.event_icons[_.random(0, this.event_icons.length - 1)])
      imageList.unshift(this.pathString + this.eventAfter)
      let tick = () => {
        if (++count % frameRate == 0) {
          this.trigger = !this.trigger
          !this.trigger ? this.eventImage2nd = imageList.pop() : this.eventImage1st = imageList.pop()
        }
        if (count < duration[0]) {
          this.fadeType = 'fast-fade'
          frameRate = speed[0]
          requestAnimationFrame(tick)
        } else if (count < duration[1]) {
          this.fadeType = 'medium-fade'
          frameRate = speed[1]
          requestAnimationFrame(tick)
        } else if (count < duration[2]) {
          this.fadeType = 'slow-fade'
          frameRate = speed[2]
          requestAnimationFrame(tick)
        } else {
        }
      }
      requestAnimationFrame(tick)
    }
  }
}
</script>

<style lang="stylus" scoped>
.event-icon
  position absolute
  z-index 2

.event-icon-block
  opacity: 0

.fast-fade-leave-active, .fast-fade-enter-active
  transition: all 0.1s

.medium-fade-leave-active, .medium-fade-enter-active
  transition: all 0.3s

.slow-fade-leave-active, .slow-fade-enter-active
  transition: all 0.9s

.fast-fade-leave-active, .medium-fade-leave-active, .slow-fade-leave-active
  transform: translateY(128px)

.fast-fade-enter, .medium-fade-enter, .slow-fade-enter
  transform translateY(-128px)

.fast-fade-enter, .fast-fade-leave-active,
.medium-fade-enter, .medium-fade-leave-active,
.slow-fade-enter, .slow-fade-leave-active
  opacity: 0.2

</style>