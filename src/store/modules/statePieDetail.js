import * as api from '../api.js'
import {parser} from '@/utils/parseShieldData.js'
import {mergeJobList} from '@/utils/mergeJobList.js'
const state={

     state_data:[],
     total_jobs:0
};

const getters={

    stateData:state=>state.state_data,
    totalJobs:state=>state.state_data[0]+state.state_data[1],
    successfulJobs:state=>state.state_data[0],
    failJobs:state=>state.state_data[1]
};

const actions = {
    getStateJson(context){
      const result1=api.getJobJsonFromShield(context)
        .then(response => {
          return response.json();
        })
        .catch(function(err) {
          return [];
        });
      const result2=api.getJobJson(context)
        .then(response => {
          return response.json();
        })
        .catch(function(err) {
          return [];
        });
      Promise.all([result1, result2])
        .then(([shieldData, nbuData])=>{
          context.commit('setStateJson',{"shield":shieldData,"nbuData":nbuData})

        });
    }
};

const mutations = {

    setStateJson(state,json){

        json['shield']=parser(json['shield'])
        const mergedList=mergeJobList(json['shield'],json['nbuData'])
        const db=mergedList

        let successCount = 0;
        let failCount=0;
        let pendingCount=0;


        for(var i=0;i<db.length;i++)
        {


            if(db[i]['status']==0){
                successCount++;
            }
            else if(db[i]['status']==-1){
                pendingCount++;
            }
            else{
                failCount++;
            }



        }
        let tempStateCount=new Array();
        tempStateCount[0]=successCount;
        tempStateCount[1]=failCount;
        //tempStateCount[2]=pendingCount;
        state.state_data=tempStateCount;

        //console.log(state.state_data);

    }


};

export default{
    state,
    getters,
    actions,
    mutations,
}