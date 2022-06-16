<template>
  <div>

    <main class="container">

      <section id="pageName">
        <PageNameH1 :page-name="pageName" />
      </section>

      <section id="table">
				<CustomersTable/>
      </section>

    </main>

  </div>
</template>

<script>
import Vue from 'vue'

import PageNameH1 from '~/components/UI/PageNameH1.vue'
import CustomersTable from '~/components/Pages/Customers/CustomersTable.vue'

export default Vue.extend({
  name: 'CustomersMainPage',
  components: {PageNameH1, CustomersTable, },
  data() {
    return {
      pageName: 'Заказчики',
			content: []
    }
  },
})
</script>

<style lang="css">

</style>
