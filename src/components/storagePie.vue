<template>
    <div class="storagepie_legend">
        <div class="left_legend">
            <div style="font-size: 20px"> Available Storage </div>
            <div style="font-size: 30px;font-weight: bold">
                {{availableStorage}} TB
            </div>
        </div>

        <Pie
        title="Used Storage"
        :data="usageData"
        :labels='["Available", "Used"]'
        ></Pie>

        <div class="legend" >
            <div class="availablelegend">
            <div class="available_square"></div>
            <div class="availabletext" style="font-size: 20px">Available</div>
            <div style="line-height:1;font-weight: bold;font-size: 30px; margin-left: 15px">{{availableStorage}}TB</div>
           </div>
          <div class=usedlegend>
            <div class="used_square"></div>
            <div class="usedtext" style="font-size: 20px">Used</div>
            <div style="line-height:1;font-weight: bold;font-size: 30px; margin-left: 15px;">{{usedStorage}}TB</div>
           </div>

    </div>
    </div>
</template>

<script>
    import Pie from './pieChart.vue'
    import {mapGetters,mapActions} from "vuex";
    export default{
        components: {
            Pie
        },
        computed:{

            ...mapGetters(['usageData','availableStorage','usedStorage'])


        },

        methods: {
            getUsageJson(){

                this.$store.dispatch("getUsageJson");

            },


        },
        mounted(){

            this.getUsageJson()


        }

    }


</script>

<style>
.storagepie_legend{

    /*border: 1px solid black;*/
    display: -webkit-flex; /* Safari */
    -webkit-align-items: center; /* Safari 7.0+ */
    display: flex;
    white-space: nowrap;

}
.usedlegend .used_square {
    width: 10px;
    height: 10px;
    background: rgb(255, 99, 132);
    display: inline-block;

}
.usedlegend .usedtext{
    display: inline-block;
}

.availablelegend .available_square {
    width: 10px;
    height: 10px;
    background: rgb(75, 192, 192);
    display: inline-block;
}
.availablelegend .availabletext{
    display: inline-block;
}


</style>

