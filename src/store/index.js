import Vue from 'vue';
import Vuex from 'vuex';
import recentJob from './modules/recentJob';
import storagePie from './modules/storagePieDetail'
import statePie from './modules/statePieDetail'
import lineChart from './modules/lineChart'
//import vuexAlong from 'vuex-along'

Vue.use(Vuex);


export default new Vuex.Store({
	modules:{
		recentJob,
		storagePie,
		statePie,
		lineChart
	}
	,
	//plugins: [vuexAlong]
	
})
