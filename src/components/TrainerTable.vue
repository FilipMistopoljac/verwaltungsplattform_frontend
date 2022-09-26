<template>
  <div class="container">

    <table class="table table-striped table-bordered table-hover table-sm">
      <caption>Liste der Trainer</caption>
      <thead class="tableHead">
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

          <td v-if="editBool" ><input type="text" v-model="trainer.firstName"></td>
          <td v-else>{{trainer.firstName}}</td>

          <td v-if="editBool"><input type="text" v-model="trainer.lastName"></td>
          <td v-else>{{trainer.lastName}}</td>

          <td v-if="editBool"><input type="text" v-model="trainer.email"></td>
          <td v-else>{{trainer.email}}</td>

          <td v-if="editBool"><input type="text" v-model="trainer.address"></td>
          <td v-else>{{trainer.address}}</td>

          <td v-if="editBool"><input type="text" v-model="trainer.employmentType"></td>
          <td v-else>{{trainer.employmentType}}</td>

          <td v-if="editBool"><input type="text" v-model="trainer.wage"></td>
          <td v-else>{{trainer.wage}}</td>

          <td>{{trainer.category}}</td>

          <td class="buttons">
            <button v-if="!editBool" @click="toggleEdit(trainer.trainerId)" class="btn btn-primary">Bearbeiten</button>
            <div v-else>
              <button @click="editTrainer(trainer.id, trainer.firstName, trainer.lastName, trainer.email, trainer.address, trainer.employmentType, trainer.wage, trainer.category)" class="btn btn-primary">Speichern</button>
              <button @click="toggleEdit" class="btn btn-warning">Abbrechen</button>
            </div>
          </td>

          <td class="buttons">
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
    editBool: false
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
      location.reload();
    },
    toggleEdit() {
      this.editBool = !this.editBool;
    },
    async editTrainer(trainerId, firstName, lastName, email, address, employmentType, wage, category) {
      await this.$store.dispatch("editTrainer", {
        id: trainerId,
        firstName: firstName,
        lastName: lastName,
        email: email,
        address: address,
        employmentType: employmentType,
        wage: wage,
        category: category
      });
      location.reload();
    }
  },
  mounted() {
    this.getTrainers();
  }
}
</script>

<style scoped>

.buttons, .tableHead {
  text-align: center;
}

</style>