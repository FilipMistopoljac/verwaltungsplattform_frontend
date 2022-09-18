<template>
  <div class="container">

    <table class="table table-striped table-bordered table-hover table-sm border border-dark">

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

        <tr>
          <td><input type="text" v-model="lastName"></td>
          <td><input type="text" v-model="firstName"></td>
          <td><input type="text" value="test"></td>
          <td><input type="text" value="test"></td>
          <td><input type="text" value="test"></td>
          <td>
            <button @click="editStudent(3)" class="btn btn-primary">Bearbeiten</button>
          </td>
        </tr>

      </tbody>

    </table>

  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "EditWindowStudent",
  data: () => ({
    firstName: "test",
    lastName: ""
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
    async editStudent(studentId) {
      try{
        let apiUrl = 'http://localhost:8080/api/student/put/' + studentId;
        await axios.put(apiUrl, {
          id: studentId,
          firstName: this.firstName,
          lastName: this.lastName
        });
        window.location.reload();
      } catch (err){
        console.log(err)
      }
      console.log(studentId);
    }
  }

}
</script>


<style scoped>

</style>