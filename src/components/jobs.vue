<template>
	<div class="dashboard_top">

		<el-row :gutter="20">

			<el-col :span="6">
				<span >Total Storage Used</span><br />
				<span v-model="totalStorageUsed">{{totalStorageUsed}}</span>

			</el-col>

		</el-row>

		<el-row>
			<el-col :span="14">
				Jobs
			</el-col>
			<div class="add_new">
			<el-col >
				<el-button>
					Add New
				</el-button>
			</el-col>
			</div>

			<div class="search">
			<el-col>
				<el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input21">
				</el-input>
			</el-col>
			</div>


		</el-row>

		<el-table :data="tableData" style="width: 100%">
			<el-table-column prop="name" label="Name" width="280">
			</el-table-column>
			<el-table-column  prop="created" label="Created" width="500">
			</el-table-column>
			<el-table-column   prop="lastOccurence" label="Last Occurence"  width="500">
			</el-table-column>
			<el-table-column   prop="schedule" label="Schedule" width="300">
			</el-table-column>
			<el-table-column   prop="status" label="Status">
			</el-table-column>
		</el-table>

		<div class="block">
			<span class="demonstration">Rows per page</span><br/>
			<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage2" :page-sizes="[10, 20, 30, 40]" :page-size="100" layout="sizes, prev, pager, next" :total="1000">
			</el-pagination>
		</div>

	</div>
</template>

<script>
	export default {

		data() {

			return {

				totalStorageUsed: "250GB",
				tableData:[
				{
					name:"VM1",
					created:"2018-08-09 01:00:00",
					lastOccurence:"2018-08-09 01:00:00",
					schedule:"Daily",
					status:"Success"
				},
				{
					name:"VM2",
					created:"2018-08-09 01:00:00",
					lastOccurence:"2018-08-09 01:00:00",
					schedule:"Daily",
					status:"Success"
				},
				{
					name:"VM3",
					created:"2018-08-09 01:00:00",
					lastOccurence:"2018-08-09 01:00:00",
					schedule:"Daily",
					status:"Success"
				}



				]
			}
		}

	}


</script>

<style>
</style>