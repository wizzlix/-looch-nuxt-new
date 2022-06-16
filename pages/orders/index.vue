<template>
  <div>

    <main class="container">
      <section id="pageName">
        <PageNameH1 :page-name="pageName" />
      </section>

			<section id="table">
				<OrdersTable/>
      </section>

    </main>

  </div>
</template>

<script>

	import PageNameH1 from '~/components/UI/PageNameH1.vue'

	import OrdersTable from "~/components/Pages/Orders/OrdersTable";




	export default {
		name: "OrdersMainPage",
		components: { PageNameH1,OrdersTable },
		data(){
			  return{
					pageName: 'Заказы',
				}
		},
	}
</script>

<style lang="css">

</style>
