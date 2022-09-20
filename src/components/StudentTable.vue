<template>
  <div class="container">

    <table class="table table-striped table-bordered table-hover table-sm border border-dark">
      <caption>Liste der Kursteilnehmer</caption>

      <thead class="tableHead">
        <tr>
          <th scope="col">Vorname</th>
          <th scope="col">Nachname</th>
          <th scope="col">Gruppe</th>
          <th scope="col">Raum</th>
          <th scope="col">Anfangsdatum</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(student,i) in studentsList" :key="i" ref="tableRowRef">
          <td>{{student.firstName}}</td>
          <td>{{student.lastName}}</td>
          <td></td>
          <td></td>
          <td></td>
          <td class="buttons">
            <button @click="toggleEdit(student.id)" class="btn btn-primary">Bearbeiten</button>
          </td>
          <td class="buttons">
            <button @click="deleteStudent(student.id)" class="btn btn-danger">Löschen</button>
          </td>
        </tr>

      </tbody>

    </table>

  </div>

</template>

<script>
export default {
  name: "StudentTable",
  data: () => ({
  }),
  computed:{
    studentsList() {
      return this.$store.state.studentsList;
    }
  },
  methods: {
    async getStudents() {
      await this.$store.dispatch("getStudents");
    },
    async deleteStudent(studentId) {
      await this.$store.dispatch("deleteStudent", studentId)
    },
    toggleEdit(studentId) {
      this.$store.state.studentId = studentId;
      console.log(this.$store.state.studentId);
    }
  },
  mounted() {
    this.getStudents();
  }
}
</script>

<style scoped>

.buttons, .tableHead {
  text-align: center;
}

</style>