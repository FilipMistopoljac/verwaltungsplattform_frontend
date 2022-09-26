<template>
  <div class="container">

    <table class="table table-striped table-bordered table-hover table-sm border border-dark">
      <caption>Liste der Gruppen</caption>

      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Kategorie</th>
          <th scope="col">Startdatum</th>
          <th scope="col">Trainer</th>
        </tr>
      </thead>

      <tbody>
      <tr v-for="(group, i) in groupsList" :key="i">

        <td>
          {{group.name}}
        </td>

        <td>
          {{group.category}}
        </td>

        <td>
          {{group.startDate}}
        </td>

        <td>
          {{group.trainer}}
        </td>


      </tr>
      </tbody>

    </table>
  </div>
</template>

<script>
export default {
  name: "GroupTable",
  computed: {
    groupsList () {
      return this.$store.state.groupsList;
    }
  },
  methods: {
    async getGroups() {
      await this.$store.dispatch("getGroups");
      console.log(this.groupsList);
    }
  },
  mounted() {
    this.getGroups();
  }
}
</script>

<style scoped>

</style>