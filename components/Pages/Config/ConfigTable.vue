<template>

	<div>

		<div class='table-responsive'>

			<table id="example" class="table table-striped table-hover table-responsive" style="width:100%">
				<!--  Header  -->
				<thead>


				<tr>
					<th v-for="(header, index) in headers" :key="index">
						<div style="text-align: center;">
							{{ header }}
						</div>
					</th>
				</tr>


				</thead>
				<!--  Body  -->
				<tbody>
<!--				id: 4,-->
<!--				name: "Узел стыковочный верхний",-->
<!--				designation: "ЛУЧ.596.02.00.00" ,-->
<!--				executor: "Производство 2" ,-->
<!--				type: "Узел",-->

				<tr v-for="item in config" :key="item.id">
					<td>
						<div style="text-align: center;">{{ item.id }}</div>
					</td>



					<td>
						<nuxt-link no-prefetch class="table-link-container" :to="'orders/' + item.id">
							<div class="table-link" style="text-align: center;">{{ item.name }}</div>
						</nuxt-link>
					</td>

					<td>
						<div class="" style="text-align: center;">{{ item.designation }}</div>
					</td>

					<td>
						<div class="" style="text-align: center;">{{ item.executor }}</div>
					</td>

					<td>
						<div class="" style="text-align: center;">{{ item.type }}</div>
					</td>

				</tr>


				</tbody>
			</table>
		</div>

	</div>

</template>

<script>

//vuex
import {mapActions, mapState, mapMutations, mapGetters} from "vuex";

export default {
	name: 'ConfigsTable',

	computed: {
		...mapState('config', [
		'config'
		])
	},

	methods: {
		...mapActions('config', [
			'getConfig'
		])
	},

	data: function () {
		return {
			headers: ["№", "Название", "Обозначение", "Исполнитель", "Тип"],


			// optionValue: null,
			// searchValue: '',
			// endingTemp: "записей",
			// endingZero: '',
			// ending: "записей",
			// smallTextContentAll: "все",
			// minCount: 1,
			// maxCount: 10,
			// allCount: 10,
		}
	},


	// computed: {
	// 	filteredCustomers() {
	// 		return this.customers.filter(item => {
	// 			return item.name.toLowerCase().includes(this.searchValue.toLowerCase());
	// 		})
	// 	},
	// },
	// methods: {
	// 	countRows(value) {
	// 		if (value === "-1") {
	// 			console.log(this.customers.slice(0, this.customers.length));
	// 		} else {
	// 			console.log(this.customers.slice(0, value + 1));
	// 		}
	// 	}
	// },

	mounted(){
		$(document).ready(function () {
			$('#example').DataTable();
		});
		this.getConfig()
	},

	// beforeMount() {
	// 	this.getConfig()
	// }

}
</script>

<style scoped lang="scss">
@import "~static/assets/global.scss";
.table-link-container {
	text-decoration: none;
}

.table-link {
	color: $table-link;
	text-decoration: none;

	&:hover{
		text-decoration: none;
		transition-duration: 0.3s;
		transform: scale(1.01);
		cursor: pointer;
	}
}
</style>
