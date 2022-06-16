<template>
	<div>

		<main class="container">

			<section id="pageName">
				<PageNameH1 :page-name="pageName" />
			</section>

			<section id="table">
				<EmployeesTable/>
			</section>

		</main>

	</div>
</template>

<script lang="ts">
import Vue from 'vue'

import PageNameH1 from '~/components/UI/PageNameH1.vue'
import EmployeesTable from "~/components/Pages/Employees/EmployesTable.vue";

export default Vue.extend({
	name: 'EmployeesMainPage',
	components: {EmployeesTable, PageNameH1, },
	data() {
		return {
			pageName: 'Персонал',
		}
	},
})
</script>

<style lang="css">

</style>
