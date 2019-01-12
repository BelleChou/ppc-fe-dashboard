<template>
  <div class="pie-wrapper">
    <Doughnut
      ref="chart"
      >
    </Doughnut>
    <label><strong>{{(parseFloat(data[0])/(parseFloat(data[0])+parseFloat(data[1]))*100.0).toFixed(2)}}</strong>%</label>
     <!-- <div class="title">{{title}}</div> -->
  </div>
</template>

<script>
import { Doughnut } from 'vue-chartjs'
import * as COLORS from '@/colors.js'

export default {

  components: {
    Doughnut
  },
  props: {
    labels: {
      type: Array,
      default: () => ['Used', 'Available']  //默认值
    },
    data: {
      type: Array,
      default: () => [10, 10]
    },
    title: {
      type: String,
      default: 'Donut'
    }
  },

  mounted () {
    this.update()
  },
  methods: {
    update () {
      // Overwriting base render method with actual data.
      let data = {
        datasets: [{
          data: this.data,
          backgroundColor: [
            COLORS.GREEN,
            COLORS.RED
            ]
        }],


        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: this.labels
      }

      let options = {
        legend:{
           display: false,




        }
      }

      this.$refs.chart.renderChart(data,options)
      // document.getElementById('js-legend').innerHTML = this.$refs.chart.generateLegend();
      // console.log(this.$refs.chart.generateLegend())

    }


  },
  watch: {
    data () {
      this.update()

    }
  }
}
</script>

<style lang="scss" scoped>

.pie-wrapper {
  width: 19rem;
  height: 20rem;
  position: relative;

  label {
    width: 6rem;
    height: 3rem;
    font-size: 1.3rem;
    position: absolute;
    top: 8.5rem;
    left: 50%;
    margin-left: -3rem;
    strong {
      font-size: 2.2rem;
      vertical-align: -.1rem;
    }
  }


}
</style>
