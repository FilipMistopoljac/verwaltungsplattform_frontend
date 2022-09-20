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
export default {
  name: "InputFormStudent",
  data: () => ({
    firstName: "",
    lastName: ""
  }),
  methods: {
    async postStudent() {
      await this.$store.dispatch("postStudent", {
        firstName: this.firstName,
        lastName: this.lastName
      });
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