<template>
  <div>

    <main>
      <section id="pageName">
        <PageNameH1 :page-name="pageName" />
      </section>

			<section id="table">

      </section>

    </main>

  </div>
</template>

<script>

	import PageNameH1 from '~/components/UI/PageNameH1.vue'



	export default {
		name: "MainPage",
		components: { PageNameH1, },
		data(){
			  return{
					pageName: 'Главная',
				}
		},
	}
</script>

<style lang="css">

</style>
