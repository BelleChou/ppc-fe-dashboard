<template>
<div class="statepie_legend">
    <div class="left_legend">
        <div style="font-size: 25px"> Backups </div>
        <div style="font-size: 25px;font-weight: bold">
            {{totalJobs}}
        </div>
       <div style="font-size: 25px"> Last 24 hours </div>
    </div>
    <Pie
        title="Successful Count"
        :data="stateData"
        :labels='["success", "fail"]'
        ></Pie>

    <div class="legend" >
          <div class=successlegend>
            <div class="success_square"></div>
            <div class="successtext" style="font-size: 20px">Success</div>
            <div  style="line-height:1;font-weight: bold;font-size: 30px;margin-left: 15px">{{successfulJobs}}</div>
           </div>
          <div class=faillegend>
            <div class="fail_square"></div>
            <div class="failtext" style="font-size: 20px">Failure</div>
            <div style="line-height:1;font-weight: bold;font-size: 30px;margin-left: 15px">{{failJobs}}</div>
           </div>
    </div>
</div>
</template>

<script>
    import Pie from './pieChart.vue'
    import {mapGetters,mapActions} from "vuex"
    import * as COLORS from '@/colors.js'

    export default{
        components: {
         Pie
        },

        computed:{

            ...mapGetters(['stateData','totalJobs','successfulJobs','failJobs'])

        },

        methods: {
         getStateJson(){


              this.$store.dispatch("getStateJson");

          },


       },
       mounted(){

        this.getStateJson();





       }

    }

</script>

<style>
.statepie_legend{

   /* border: 1px solid black;*/
    display: -webkit-flex; /* Safari */
    -webkit-align-items: center; /* Safari 7.0+ */
    display: flex;
    white-space: nowrap;

}
.statepie_legend .left_legend{

}

.statepie_legend .legend1{

}

.successlegend .success_square {
    width: 10px;
    height: 10px;
    background: rgb(75, 192, 192);
    display: inline-block;

}
.successlegend .successtext{
    display: inline-block;
}

.faillegend .fail_square {
    width: 10px;
    height: 10px;
    background: rgb(255, 99, 132);
    display: inline-block;
}
.faillegend .failtext{
    display: inline-block;
}



</style>

