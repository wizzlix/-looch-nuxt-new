<template>
<div>

    <main class="container">
      <section id="pageName">
        <PageNameH1 :page-name="pageName" />
      </section>

      <section class="">
				<ConfigTable/>
      </section>

    </main>

</div>
</template>

<script>


	import PageNameH1 from '~/components/UI/PageNameH1.vue'

	import ConfigTable from "~/components/Pages/Config/ConfigTable";




	export default {
		name: "ConfigMainPage",
		components:  {PageNameH1, ConfigTable},
		data(){
			  return{
					pageName: 'Базовые спецификации',
				}
		},
	}
</script>

<style lang="css" scoped>

</style>
