<template>
  <div
    :id="id"
    @click="$emit('choose')"
  ></div>
</template>

<script>
import G6 from '@antv/g6'
import _ from 'lodash'

export default {
  props:{
    nodes: {
      type: Array,
      default: ()=>[]
    },
    activeAction: {
      type: Array,
      default: ()=>[]
    },
    id: String
  },
  data () {
    return {
      graph: undefined
    }
  },
  mounted () {
    this.graph = new G6.Graph({
      container: this.id,
      width: 376,
      height: 376
    })
    this.graph.read({nodes: this.geneNodes()})
  },
  watch: {
    activeAction: function (oldVal, newVal) {
      if (!_.isEqual(oldVal, newVal)) {
        this.graph.clear()
        this.graph.read({nodes: this.geneNodes()})
      }
    }
  },
  methods: {
    geneNodes () {
      let imgPath = 'icons/'
      return this.nodes.map((n)=>{
        return {
          id: n.id,
          type: 'image',
          size: 94,
          x: 94 * (+n.x - 1) + 47,
          y: 94 * (+n.y - 1) + 47,
          img: imgPath + n.icon,
          style: {
            opacity: this.activeAction.includes(n.icon) ? 1 : 0.2
          }
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>