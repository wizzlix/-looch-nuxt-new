<template>
  <div>

    <main class="container">
      <section id="pageName">
        <PageNameH1 :page-name="pageName" />
      </section>

			<section id="table">
				<ItemsTable/>
      </section>
    </main>

  </div>
</template>

<script>

	import PageNameH1 from '~/components/UI/PageNameH1.vue'

	import ItemsTable from "~/components/Pages/Items/ItemsTable";



	export default {
		name: "CustomerMainPage",
		components: { PageNameH1,ItemsTable },
		data(){
			  return{
					pageName: 'Платы и изделия',
				}
		},
	}
</script>

<style lang="css">

</style>
