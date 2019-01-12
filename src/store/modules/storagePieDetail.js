import * as api from '../api.js'
const state={

     usage_data:[]
};

const getters={
    usageData:state=>state.usage_data,
    availableStorage:state=>parseFloat(state.usage_data[0]).toFixed(2),
    usedStorage:state=>parseFloat(state.usage_data[1]).toFixed(2)
};


const actions = {
    getUsageJson(context){

   const result=api.getUsageJson(context);

   result.then(function (res) {
        console.log("----------------------JSON QUERY STORAGE:  res.status:"+res.status);
      if(res.status === 200){
        return res.json()
      }
    }).then(function (json) {

      console.log(typeof Array.from(json), Array.from(json));
      context.commit('setUsageJson', json);
    })
  }
};

//mutation  官方推荐的修改状态的方式
const mutations = {

    setUsageJson(state,db){

        let totalCapacity=db['Total Capacity (TB)'];
        let freeSpace=db['Free Space (TB)'];
        let usedCapacity=totalCapacity-freeSpace;

        let tempUsageData=new Array();
        tempUsageData[0]=freeSpace;
        tempUsageData[1]=usedCapacity;



        state.usage_data=tempUsageData;

        //console.log("sudu"+state.usage_data);
        //console.log( state.usage_data instanceof Array)  //是个数组
    }


};

export default{
    state,
    getters,
    actions,
    mutations
}

