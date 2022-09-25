<template>
  <div class="container">

    <table class="table table-striped table-bordered table-hover table-sm border border-dark">

      <tbody>

        <tr>
          <th scope="col">Vorname</th>
          <td><input type="text" v-model="firstName"></td>
        </tr>

        <tr>
          <th scope="col">Nachname</th>
          <td><input type="text" v-model="lastName"></td>
        </tr>

      </tbody>

    </table>

    <div class="container text-center">
      <button @click="postStudent()" class="btn btn-primary">Hinzufuegen</button>
    </div>

  </div>
</template>

<script>
export default {
  name: "InputFormStudent",
  data: () => ({
    firstName: "",
    lastName: "",
    group: "",
    room: "",
    startDate: ""
  }),
  computed: {
    studentsList() {
      return this.$store.state.studentsList;
    }
  },
  methods: {
    async postStudent() {

      await this.$store.dispatch("postStudent", {
        firstName: this.firstName,
        lastName: this.lastName
      });

      await this.$store.dispatch("getStudents");

      // let studentIdArray = [];

      for (let i = 0; i < this.studentsList.length; i++) {
        let object = this.studentsList[i];
        console.log(object);
      }

      // let studentId = Math.max(studentIdArray);

      // console.log('student id', studentId);

      /*
      await this.$store.dispatch("addStudentToGroup", {
        groupId: this.group,
        studentId: studentId
      })
       */

    }
  }


}
</script>

<style scoped>

div {
  width:300px;
  margin:0 auto;
}
label, input {
  float: left;
  margin: 5px;
}

label {
  clear:left;
  display: block;
  width: 100px;
  text-align: left;
}
</style>