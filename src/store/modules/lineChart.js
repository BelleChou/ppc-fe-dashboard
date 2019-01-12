import *as api from '../api.js'
import moment from 'moment'
import {parser} from '@/utils/parseShieldData.js'
import {mergeJobList} from '@/utils/mergeJobList.js'

const FORMAT = 'HH:mm'

const state={
    last24hJob:[],
    labels:[],
    success:{},
    fail:{}
};

const getters={

    last24labels:state=>state.labels,

    getSuccess:state=>state.labels.map(l => state.success[l]),

    getFail:state=>state.labels.map(l => state.fail[l])

};

const actions={

    getLatest24hJob(context){
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
          context.commit('setLatest24hJob',{"shield":shieldData,"nbuData":nbuData})

        });
    }


};

const mutations={

    setLatest24hJob(state,json){
        json['shield']=parser(json['shield'])
        const mergedList=mergeJobList(json['shield'],json['nbuData'])
        const db=mergedList

        // 设置最近24小时的label
        const currentHour = moment().minutes(0).seconds(0);
        const success = {}
        const fail = {}
        const labels=[]

        for (var i=23;i>=0;i--) {
            const k = moment(currentHour).subtract(i, 'hour').format(FORMAT)
            labels.push(k)
            success[k]=0
            fail[k]=0
        }


        for (var i=0;i<db.length;i++) {
            if(db[i]['status']==0)
                success[moment.unix(db[i]['ended']).minutes(0).seconds(0).format(FORMAT)]++;
            else if(db[i]['status']==1)
                fail[moment.unix(db[i]['ended']).minutes(0).seconds(0).format(FORMAT)]++;
        }


        state.success=success;
        state.fail=fail;
        state.labels=labels;
        //console.log(state)


    }

};
export default{
    state,
    getters,
    actions,
    mutations,

}

