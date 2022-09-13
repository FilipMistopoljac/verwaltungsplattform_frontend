<template>
  <div>
      <p>Neuen Kursteilnehmer hinzufügen:</p>
      <label for="">Vorname</label>
      <input type="text" v-model="firstName"><br>
      <label for="">Nachname</label>
      <input type="text" v-model="lastName"><br>
      <button @click="postStudent">Hinzufügen</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "InputFormStudent",
  data: () => ({
    studentsList:"",
    firstName: "",
    lastName: ""
  }),
  methods: {
    async postStudent() {
      if (confirm('Teilnehmer hinzufügen: ' + this.firstName + ' ' + this.lastName + '?')){
        try{
          let apiUrl = 'http://localhost:8080/api/student/add';
          await axios.post(apiUrl, {
            firstName: this.firstName,
            lastName: this.lastName
          });
          console.log("student added - " + "First name:" + this.firstName + " Last name:" + this.lastName);
          alert("Kursteilnehmer hinzugefügt.");
          window.location.reload();

        } catch (err){
          console.log(err)
        }
      }
    },
    checkButton() {
      console.log('test', this.firstName, this.lastName);

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