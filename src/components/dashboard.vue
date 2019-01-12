<template>
    <div class="dashboard_top">
        <line-chart :width="1800" :height="250"></line-chart>

        <div class="pie">
            <state-pie></state-pie>
           <storage-pie></storage-pie>
        </div>

        <el-row>
            <el-col :span="16">
                Recent Jobs Last 24 hours
            </el-col>

            <!-- <div class="add_new">

                <el-col >
                    <el-button @click="gotoShield">
                        Shield
                    </el-button>
                </el-col>
            </div>


            <div class="search">

                <el-col >
                    <el-button @click="gotoNBU">
                        Netbackup
                    </el-button>
                </el-col>
            </div>

            <div class="search">

                <el-col >

                    Go to Provider

                </el-col>
            </div> -->


        </el-row>

        <el-table :data="recentJobList.slice((currentPage-1)*pageSize, currentPage*pageSize)" style="width: 100% " height="300">
            <el-table-column prop="client" label="Name" width="350" fixed>
            </el-table-column>
            <el-table-column prop="started" label="Start Date" >
                <template slot-scope="scope">
                    {{timestampToTime(scope.row.started)}}
                </template>
            </el-table-column>
            <el-table-column prop="ended" label="End Date" >
                <template slot-scope="scope">
                    {{timestampToTime(scope.row.ended)}}
                </template>
            </el-table-column>
            <el-table-column prop="elapsed" label="Elapsed" >
                <template slot-scope="scope">
                    {{elapseTime(scope.row.elapsed)}}
                </template>
            </el-table-column>
            <el-table-column prop="status" label="Status" width="200">
                <template slot-scope="scope">
                    <el-tag
                    :type="scope.row.status? 'danger' : 'success'"
                    disable-transitions>{{scope.row.status? 'FAILURE' : 'SUCCESS'}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="engine" label="Provider" width="200">
            </el-table-column>
        </el-table>


        <div class="rowsperpage">Rows per page</div>
        <div class="block">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-sizes="[3, 4, 5, 6]" :page-size="pageSize" layout="sizes, prev, pager, next" :total="recentJobList.length">
            </el-pagination>
        </div>

        <div v-if="isShieldFetch">
            <el-alert title="Shield Error" type="error" show-icon >
            </el-alert>
        </div>
        <div v-if="isNBUFetch">
            <el-alert title="NBU Error" type="error" show-icon >
            </el-alert>
        </div>

    </div>

</template>

<script scoped>
    import LineChart from '@/components/line.vue';
    import StoragePie from '@/components/storagePie.vue'
    import StatePie from'@/components/statePie.vue'
    import {mapGetters,mapActions} from "vuex";
    import {timestampToTime,elapseTime} from  '@/utils/timeConvert.js'
    import * as config from '@/config.js'

    export default {
        components: {
            LineChart,
            StoragePie,
            StatePie

        },

        computed:{
            ...mapGetters(['recentJobList','isNBUFetch','isShieldFetch'])

        },
        methods: {
            timestampToTime:function(time){

                return timestampToTime(time);

            },
            elapseTime:function(time){
                return elapseTime(time);
            },

            getJson(){

                // this.$store.dispatch("getLatestJob");
                this.$store.dispatch("getLatestJob");
            },

            handleSizeChange(size){
                this.pageSize=size
            },
            handleCurrentChange(val){
                this.currentPage=val
            },
            gotoNBU(){
                window.open(config.nbu_url)
            },
            gotoShield(){
                window.open(config.shield_url)
            }

        },
        mounted(){

            this.getJson()

        },

        data() {
            return {
                totalHours: 250,
                totalStorageUsed: "250TB",
                pageSize:4,
                currentPage:1

            }

        }
    }
</script>

<style>
/* 翻页角标*/
span{
    font-weight:bold;
}
.add_new{
    float: right;
    margin:  10px

}
.search{
    float:right;
    margin: 10px
}


.block {

    text-align:right;


}

.el-pagination__sizes {
    margin: 0 10px 0 0;
    font-weight: 400;
    color: #606266;
    float: left;
}


.rowsperpage{
    font-weight:bold;
    margin:10px;
}

.pie{
    display: flex;
    margin: 3rem auto;
    justify-content: space-around;

}
</style>


