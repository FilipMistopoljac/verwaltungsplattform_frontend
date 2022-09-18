<template>
  <div class="container">

    <table class="table table-striped table-bordered table-hover table-sm border border-dark">

      <tbody>

        <tr>
          <th scope="col">Nachname</th>
          <td><input type="text" v-model="lastName"></td>
        </tr>

        <tr>
          <th scope="col">Vorname</th>
          <td><input type="text" v-model="firstName"></td>
        </tr>

        <tr>
          <th scope="col">Gruppe</th>
          <td><input type="text" value="test"></td>
        </tr>

        <tr>
          <th scope="col">Raum</th>
          <td><input type="text" value="test"></td>
        </tr>

        <tr>
          <th scope="col">Anfangsdatum</th>
          <td><input type="text" value="test"></td>
        </tr>

      </tbody>

    </table>

    <div class="container text-center">
      <button @click="editStudent(3)" class="btn btn-primary">Speichern</button>
    </div>

  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "EditWindowStudent",
  data: () => ({
    studentsList: "",
    firstName: "",
    lastName: "",
    studentData: ""
  }),

  methods: {
    async getStudents() {
      try{
        let apiUrl = 'http://localhost:8080/api/student/get';
        let response = await this.axios.get(apiUrl);
        console.log(response);
        this.studentsList = response.data;
        console.log(this.studentsList);
      } catch (err){
        console.log(err)
      }
    },
    async getStudent(studentId) {
      try{
        let apiUrl = 'http://localhost:8080/api/student/get/' + studentId;
        let response = await this.axios.get(apiUrl);
        console.log(response);
        this.studentData = response.data;
        console.log(this.studentData);
      } catch (err){
        console.log(err)
      }
    },
    async editStudent(studentId) {
      try{
        this.firstName = "test";
        this.lastName = "test";
        let apiUrl = 'http://localhost:8080/api/student/put/' + studentId;
        await axios.put(apiUrl, {
          id: studentId,
          firstName: "test",
          lastName: "test"
        });
        window.location.reload();
      } catch (err){
        console.log(err)
      }
      console.log(studentId);
      console.log(this.firstName);
    }
  },
  mounted() {
    this.getStudent(3);
  }

}
</script>


<style scoped>

</style>