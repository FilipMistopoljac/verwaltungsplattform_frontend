<template>
  <div class="container">

    <table class="table table-striped table-bordered table-hover table-sm border border-dark">

      <tbody>

        <tr>
          <th scope="col">Nachname</th>
          <td><input type="text" v-model="student.firstName"></td>
        </tr>

        <tr>
          <th scope="col">Vorname</th>
          <td><input type="text" v-model="student.lastName"></td>
        </tr>

        <tr>
          <th scope="col">Gruppe</th>
          <td><input type="text"></td>
        </tr>

        <tr>
          <th scope="col">Raum</th>
          <td><input type="text"></td>
        </tr>

        <tr>
          <th scope="col">Anfangsdatum</th>
          <td><input type="text"></td>
        </tr>

      </tbody>

    </table>

    <div class="container text-center">
      <button @click="editStudent(studentId)" class="btn btn-primary">Speichern</button>
    </div>
    <button @click="getStudent(studentId)">Update</button>

  </div>

</template>

<script>
export default {
  name: "EditWindowStudent",
  data: () => ({
  }),
  computed:{
    student(){
      return this.$store.state.studentData;
    },
    studentId() {
      return this.$store.state.studentId;
    }
  },
  methods: {
    async getStudent(studentId) {
      await this.$store.dispatch("getStudent", studentId);
    },
    async editStudent(studentId) {
       await this.$store.dispatch("editStudent", {
          id: studentId,
          firstName: this.student.firstName,
          lastName: this.student.lastName
        });
    }
  },
  mounted() {
  }
}
</script>


<style scoped>

</style>