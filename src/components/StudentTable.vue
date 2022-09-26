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

          <td>
              {{student.firstName}}
            <div class="buttons">
              <button class="btn btn-primary" @click="editFirstName(student.studentId)">Editieren</button>
            </div>
          </td>

          <td>
            <div>
              {{student.lastName}}
            </div>
            <div class="buttons">
              <button class="btn btn-primary" @click="editLastName(student.studentId)">Editieren</button>
            </div>
          </td>

          <td>
            <div>
              {{student.groupName}}
            </div>
            <div class="editWindow">
              <select v-model="selectedGroup">
                <option v-for="(option, i) in groupsList" :key="i" :value="option.id">{{option.name}}</option>
              </select>
            </div>
            <div class="buttons">
              <button class="btn btn-primary" @click="editGroup(student.studentId)">Editieren</button>
            </div>
          </td>

          <td>
            <div>
              {{student.roomNumber}}
            </div>
          </td>

          <td>
            <div>
              {{student.startDate}}
            </div>
          </td>

          <td class="buttons">
            <button @click="deleteStudent(student.studentId)" class="btn btn-danger">Löschen</button>
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
    selectedGroup: ""
  }),
  computed:{
    studentsList() {
      return this.$store.state.studentsList;
    },
    groupsList () {
      return this.$store.state.groupsList;
    }
  },
  methods: {
    async getStudents() {
      await this.$store.dispatch("getStudents");
      console.log(this.studentsList);
    },
    async deleteStudent(studentId) {
      await this.$store.dispatch("deleteStudent", studentId)
    },
    async editGroup(studentId) {
      await this.$store.dispatch("addStudentToGroup", {
        groupId: this.selectedGroup,
        studentId: studentId
      })
    },
    async editFirstName(studentId) {
      return studentId;
    },
    async editLastName(studentId) {
      return studentId;
    },
    async getGroups() {
      await this.$store.dispatch("getGroups");
      console.log(this.groupsList);
    }
  },
  mounted() {
    this.getStudents();
    this.getGroups();
  }
}
</script>

<style scoped>

.buttons, .tableHead {
  text-align: center;
}

</style>