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
          <div>
            {{group.trainer}}
          </div>
          <div class="editWindow">
            <select v-model="selectedTrainer">
              <option v-for="(trainer, i) in trainersList" :key="i" :value="trainer.id">{{trainer.firstName}} {{trainer.lastName}}</option>
            </select>
          </div>
          <button class="btn btn-primary">Editieren</button>
        </td>


      </tr>
      </tbody>

    </table>
  </div>
</template>

<script>
export default {
  name: "GroupTable",
  data: () => ({
    selectedTrainer: ""
  }),
  computed: {
    groupsList () {
      return this.$store.state.groupsList;
    },
    trainersList() {
      return this.$store.state.trainersList;
    }
  },
  methods: {
    async getGroups() {
      await this.$store.dispatch("getGroups");
      console.log(this.groupsList);
    },
    async getTrainers() {
      await this.$store.dispatch('getTrainers');
      console.log(this.trainersList);
    }
  },
  mounted() {
    this.getGroups();
    this.getTrainers();
  }
}
</script>

<style scoped>

</style>