<template>
  <div class="container">

    <table class="table table-striped table-bordered table-hover table-sm border border-dark">

      <tbody>

        <tr>
          <th scope="col">Vorname</th>
          <td><input type="text" v-model="student.firstName"></td>
        </tr>

        <tr>
          <th scope="col">Nachname</th>
          <td><input type="text" v-model="student.lastName"></td>
        </tr>

        <tr>
          <th scope="col">Gruppe</th>
          <td><input type="text" v-model="student.groupName"></td>
        </tr>

        <tr>
          <th scope="col">Raum</th>
          <td><input type="text" v-model="student.roomName"></td>
        </tr>

        <tr>
          <th scope="col">Anfangsdatum</th>
          <td><input type="text" v-model="student.startDate"></td>
        </tr>

      </tbody>

    </table>

    <div class="container text-center">
      <button @click="editStudent(1,studentId)" class="btn btn-primary">Speichern</button>
    </div>
    <button @click="getStudent(studentId)">Update</button>

  </div>

</template>

<script>
export default {
  name: "EditWindowStudent",
  computed: {
    student(){
      return this.$store.state.studentData;
    },
    studentId() {
      return this.$store.state.studentId;
    },
    studentsList() {
      return this.$store.state.studentsList;
    }
  },
  methods: {
    async getStudent(studentId) {
      console.log(studentId);
      await this.$store.dispatch("getStudent", studentId);
      console.log(this.student);
    }
  }
}
</script>


<style scoped>

</style>