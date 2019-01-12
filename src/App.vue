
<template>
	<div id="app">
		<el-container>
			<el-header>Predix Backup 
				<!-- <div class="right_top">
					 <i class="el-icon-menu" style=""></i>
			   		<span>Belle</span>
				</div> -->
			  
			</el-header>
			
			<el-main>
				<router-view />
			</el-main>
			<el-footer></el-footer>
		</el-container>

	</div>
</template>

<script>

	
</script>

<style >
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		
		color: #2c3e50;
	}
	
	.el-header
	 {
		background-color: #B3C0D1;
		color: #333;
		line-height: 60px;
	}
	.el-footer{
		background-color: #B3C0D1;
		color: #333;
		height:20px!important;    /*为了增加优先级*/
	}
	
	.el-main {
		background-color: #E9EEF3;
		color: #333;
		line-height: 50px; 
	}
	
	.right_top{
		float: right;
	}
</style>