<template>
  <div class="container">

    <table class="table table-striped table-bordered table-hover table-sm border border-dark">
      <caption>Liste der Kursteilnehmer</caption>

      <thead>
        <tr>
          <th scope="col">Nachname</th>
          <th scope="col">Vorname</th>
          <th scope="col">Gruppe</th>
          <th scope="col">Raum</th>
          <th scope="col">Anfangsdatum</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(student,i) in studentsList" :key="i" ref="tableRowRef">
          <td>{{student.lastName}}</td>
          <td>{{student.firstName}}</td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <button @click="toggleEdit(student.id)" class="btn btn-primary">Bearbeiten</button>
          </td>
          <td>
            <button @click="deleteStudent(student.id)" class="btn btn-danger">Löschen</button>
          </td>
        </tr>

      </tbody>

    </table>

  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "StudentTable",
  data: () => ({
  }),
  computed:{
    studentsList(){
      return this.$store.state.studentsList;
    }
  },
  methods: {
    async getStudents() {
      await this.$store.dispatch("getStudents");
    },
    async deleteStudent(studentId) {
      try{
        let apiUrl = 'http://localhost:8080/api/student/delete/' + studentId;
        await axios.delete(apiUrl);
        // console.log("student deleted - " + "First name:" + this.firstName + " Last name:" + this.lastName);
        window.location.reload();
      } catch (err){
        console.log(err)
      }
    }
  },
  mounted() {
    this.getStudents();
  }
}
</script>

<style scoped>

</style>