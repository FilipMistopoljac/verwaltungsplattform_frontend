<template>
  <div>
    <p>Neu:e Trainer:in hinzufügen:</p>
    <label for="">Vorname</label>
    <input type="text" v-model="firstName"><br>
    <label for="">Nachname</label>
    <input type="text" v-model="lastName"><br>
    <button @click="postTrainer">Hinzufügen</button>
    <label for="">Nachname</label>
    <input type="text" v-model="lastName"><br>
    <label for="">Nachname</label>
    <input type="text" v-model="lastName"><br>
    <label for="">Nachname</label>
    <input type="text" v-model="lastName"><br>
    <label for="">Nachname</label>
    <input type="text" v-model="lastName"><br>
    <label for="">Nachname</label>
    <input type="text" v-model="lastName"><br>
  </div>
</template>

<script>
export default {
  name: "InputFormTrainer",
  data: () => ({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    employmentType: "",
    wage: "",
    category: ""
  }),
  methods: {
    async postTrainer() {
      await this.$store.dispatch("postTrainer", {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        address: this.address,
        employmentType: this.employmentType,
        wage: this.wage,
        category: this.category
      })
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