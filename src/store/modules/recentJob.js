import * as api from '../api.js'
import {parser} from '@/utils/parseShieldData.js'
import {mergeJobList} from '@/utils/mergeJobList.js'
//初始化数据
const state = {
    recentJob_list:[],
    recentShieldJob_list:[],
    isShieldFetch:false,
    isNBUFetch:false




};

//getter 抛出去的数据  给组件dashboard拿state用
const getters = {
    recentJobList : state => state.recentJob_list,
    isShieldFetch : state => state.isShieldFetch,
    isNBUFetch : state => state.isNBUFetch
};

//action 异步的操作
const actions = {

    getLatestJob(context){
      const result1=api.getJobJsonFromShield(context)
        .then(response => {
          context.state.isShieldFetch=false
          return response.json();
        })
        .catch(function(err) {
          context.state.isShieldFetch=true
          return [];
        });
      const result2=api.getJobJson(context)
        .then(response => {
          context.state.isNBUFetch=false
          return response.json();
        })
        .catch(function(err) {
          context.state.isNBUFetch=true
          return [];
        });

      Promise.all([result1, result2])
        .then(([shieldData, nbuData])=>{
          context.commit('mergeList',{"shield":shieldData,"nbuData":nbuData})

        });
    }


};

//mutation  官方推荐的修改状态的方式
const mutations = {

    mergeList(state,db){
      console.log(db['shield'])
      //db['shield']=parser(db['shield'])
      const mergedList=mergeJobList(db['shield'],db['nbuData'])
      state.recentJob_list=mergedList
      //console.log(state.recentJob_list)
    }




};

export default {
    state,
    mutations,
    actions,
    getters
};