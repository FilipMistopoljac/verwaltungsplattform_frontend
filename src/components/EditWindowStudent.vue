<template>
  <div>
    <p>Neuen Kursteilnehmer hinzufügen:</p>
    <label for="">Vorname</label>
    <input type="text" v-model="firstName"><br>
    <label for="">Nachname</label>
    <input type="text" v-model="lastName"><br>
    <button @click="editStudent(student.id)">Speichern</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "EditWindowStudent",
  data: () => ({
    firstName: "",
    lastName: ""
  }),
  methods: {
    async editStudent(studentId) {
      try{
        let apiUrl = 'http://localhost:8080/api/student/put/' + studentId;
        await axios.put(apiUrl, {
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