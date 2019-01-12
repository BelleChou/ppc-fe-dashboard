<template>
	<el-tabs type="border-card">
		<el-tab-pane label="Dashboard">
		<dash-board></dash-board>					
			<!-- </el-tab-pane>
			<el-tab-pane label="Jobs">
				<jobs></jobs>
			</el-tab-pane>
			<el-tab-pane label="Reports"> -->
		</el-tab-pane>
	</el-tabs>
	
	
</template>

<script>
	import DashBoard from '@/components/dashboard.vue';
	// import Jobs from '@/components/jobs.vue';
	// import Reports from '@/components/reports.vue';
	
	export default {
	  components:{
	  	DashBoard,
		// Jobs,
		// Reports
	  }
	}
</script>

<style >
	
</style>