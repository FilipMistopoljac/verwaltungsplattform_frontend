<template>
  <div class="container">

    <table class="table table-striped table-bordered table-hover table-sm">
      <caption>Liste der Trainer</caption>
      <thead>
      <tr>
        <th scope="col">Vorname</th>
        <th scope="col">Nachname</th>
        <th scope="col">E-Mail</th>
        <th scope="col">Adresse</th>
        <th scope="col">Anstellungsart</th>
        <th scope="col">Gehalt</th>
        <th scope="col">Kategorie</th>
      </tr>
      </thead>

      <tbody>
        <tr v-for="(trainer,i) in trainersList" :key="i" ref="tableRowRef">
          <td>{{trainer.firstName}}</td>
          <td>{{trainer.lastName}}</td>
          <td>{{trainer.email}}</td>
          <td>{{trainer.address}}</td>
          <td>{{trainer.employmentType}}</td>
          <td>{{trainer.wage}}</td>
          <td>{{trainer.category}}</td>
          <td>
            <button @click="toggleEdit(trainer.id)" class="btn btn-primary">Bearbeiten</button>
          </td>
          <td>
            <button @click="deleteTrainer(trainer.id)" class="btn btn-danger">Löschen</button>
          </td>
        </tr>

      </tbody>

    </table>

  </div>

</template>

<script>
export default {
  name: "TrainerTable",
  data: () => ({
  }),
  computed: {
    trainersList() {
      return this.$store.state.trainersList;
    }
  },
  methods: {
    async getTrainers() {
      await this.$store.dispatch("getTrainers");
    },
    async deleteTrainer(trainerId) {
      await this.$store.dispatch("deleteTrainer", trainerId);
    },
    toggleEdit(trainerId) {
      this.$store.state.trainerId = trainerId;
      console.log(this.$store.state.trainerId);
    }
  },
  mounted() {
    this.getTrainers();
  }
}
</script>

<style scoped>

</style>