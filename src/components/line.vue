<script>
  import { Line } from 'vue-chartjs'
  import { mapState ,mapActions, mapGetters} from 'vuex'
  import moment from 'moment'
  import * as COLORS from '@/colors.js'

  const FORMAT = 'HH:mm'

  export default {
    extends: Line,

    computed:{
      ...mapGetters(['last24labels','getSuccess','getFail'])

    },



    methods: {
         getLatest24hJob(){


              this.$store.dispatch("getLatest24hJob");

          },


       },
    watch:{

      last24labels:function(v){

        this.renderChart({
          labels: this.last24labels,

          datasets: [{
            label: 'success',
            backgroundColor: COLORS.GREEN,
            data: this.getSuccess,
            fill: 'transparent',
          }, {
            label: 'failure',
            backgroundColor: COLORS.RED,
            data: this.getFail,
            fill: 'transparent',
          }]
        }, {
          responsive: true,
          maintainAspectRatio: true,
          // legend:{
          //   display:false
          // }
        })

      }

    },

    mounted() {

      this.getLatest24hJob();




    }


    }

</script>