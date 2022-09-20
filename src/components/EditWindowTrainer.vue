<template>
  <div class="container">

    <table class="table table-striped table-bordered table-hover table-sm border border-dark">

      <tbody>

      <tr>
        <th scope="col">Vorname</th>
        <td><input type="text" v-model="trainer.firstName"></td>
      </tr>

      <tr>
        <th scope="col">Nachname</th>
        <td><input type="text" v-model="trainer.lastName"></td>
      </tr>

      <tr>
        <th scope="col">E-Mail</th>
        <td><input type="text" v-model="trainer.email"></td>
      </tr>

      <tr>
        <th scope="col">Adresse</th>
        <td><input type="text" v-model="trainer.address"></td>
      </tr>

      <tr>
        <th scope="col">Anstellungsart</th>
        <td><input type="text" v-model="trainer.employmentType"></td>
      </tr>

      <tr>
        <th scope="col">Gehalt</th>
        <td><input type="text" v-model="trainer.wage"></td>
      </tr>

      <tr>
        <th scope="col">Kategorie</th>
        <td><input type="text" v-model="trainer.category"></td>
      </tr>

      </tbody>

    </table>

    <div class="container text-center">
      <button @click="editTrainer(trainerId)" class="btn btn-primary">Speichern</button>
    </div>
    <button @click="getTrainer(trainerId)">Update</button>

  </div>

</template>

<script>
export default {
  name: "EditWindowTrainer",
  computed: {
    trainer() {
      return this.$store.state.trainerData;
    },
    trainerId() {
      return this.$store.state.trainerId;
    }
  },
  methods: {
    async getTrainer(trainerId) {
      await this.$store.dispatch("getTrainer", trainerId);
    },
    async editTrainer(trainerId) {
      await this.$store.dispatch("editTrainer", {
        id: trainerId,
        firstName: this.trainer.firstName,
        lastName: this.trainer.lastName,
        email: this.trainer.email,
        address: this.trainer.address,
        employmentType: this.trainer.employmentType,
        wage: this.trainer.wage,
        category: this.trainer.category
      });
    }
  }
}
</script>

<style scoped>

</style>