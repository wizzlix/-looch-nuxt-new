<template>
  <div>
    <section id="preloader">
      <PreloaderPage />
    </section>

    <header id="header">
      <NavBar/>
    </header>

		<div class="wrapper">
				<nuxt />
		</div>

		<footer>
			<FooterTemplate />
		</footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import NavBar from '~/components/Navigation/NavBar.vue'
import PreloaderPage from '~/components/UI/PreloaderPage.vue'

import FooterTemplate from '~/components/UI/FooterTemplate.vue'


export default Vue.extend({
  name: 'NuxtWrapper',
  components: { NavBar, PreloaderPage, FooterTemplate},

})
</script>

<style lang="css">
* {
  font-family: 'Roboto Condensed', sans-serif;
}

/* Прижатие футера */
.wrapper {
	min-height: 81vh;
  display: flex;
  flex-direction: column;
}

footer {
  margin-top: auto;
}

body {
  min-width: 360px;
}

</style>
