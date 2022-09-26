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

          <td v-if="editBool"><input type="text" v-model="student.firstName"></td>
          <td v-else>{{student.firstName}}</td>

          <td v-if="editBool"><input type="text" v-model="student.lastName"></td>
          <td v-else>{{student.lastName}}</td>


          <td v-if="!editBool">{{student.groupName}}</td>
          <td v-else>
            <div class="editWindow">
              <select v-model="studentsList[i].val">
                <option v-for="(option, i) in groupsList" :key="i" :value="option.id" :selected="option.name">{{option.name}}</option>
              </select>
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
            <button @click="toggleEdit(student.studentId)" class="btn btn-primary">Edit</button>
            <button @click="editStudent(student.studentId, student.firstName, student.lastName, studentsList[i].val)" class="btn btn-primary">Bearbeiten</button>
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
    selectedGroup: "",
    editBool: false
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
    async editGroup(studentId, groupId) {
      await this.$store.dispatch("addStudentToGroup", {
        groupId: groupId,
        studentId: studentId
      })
    },
    toggleEdit() {
      this.editBool = !this.editBool;
    },
    async editStudent(studentId, firstName, lastName, groupId) {

      console.log(studentId, firstName, lastName, groupId);

      await this.$store.dispatch("editStudent", {
        id: studentId,
        firstName: firstName,
        lastName: lastName
      });

      if (groupId != null) {
        await this.$store.dispatch("addStudentToGroup", {
          groupId: groupId,
          studentId: studentId
        });
      }

      this.toggleEdit();
      location.reload();

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