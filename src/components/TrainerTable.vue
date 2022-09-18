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
          <td>{{trainer.lastName}}</td>
          <td>{{trainer.firstName}}</td>
          <td>{{trainer.email}}</td>
          <td>{{trainer.address}}</td>
          <td>{{trainer.employmentType}}</td>
          <td>{{trainer.pay}}</td>
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
import axios from "axios";

export default {
  name: "TrainerTable",
  data: () => ({
    trainersList:"",
    editOn: false,
  }),
  methods: {
    async getTrainers() {
      try{
        let apiUrl = 'http://localhost:8080/api/trainer/get';
        let response = await this.axios.get(apiUrl);
        console.log(response);
        this.trainersList = response.data;
        console.log(this.trainersList);
      } catch (err){
        console.log(err)
      }
    },
    toggleEdit(trainerId) {

      this.editOn = this.editOn == false;
      console.log(trainerId);

    },
    async deleteTrainer(trainerId) {
      try{
        let apiUrl = 'http://localhost:8080/api/trainer/delete/' + trainerId;
        await axios.delete(apiUrl);
        // console.log("trainer deleted - " + "First name:" + this.firstName + " Last name:" + this.lastName);
        window.location.reload();
      } catch (err){
        console.log(err)
      }
    },
    async editTrainer(trainerId) {
      try{
        let apiUrl = 'http://localhost:8080/api/trainer/put/' + trainerId;
        await axios.put(apiUrl, {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          address: this.address,
          employmentType: this.employmentType,
          pay: this.pay,
          category: this.category
        });
        window.location.reload();
      } catch (err){
        console.log(err)
      }
      console.log(trainerId);
    }
  },
  mounted() {
    this.getTrainers();
  }
}
</script>

<style scoped>

</style>