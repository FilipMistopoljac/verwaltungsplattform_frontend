<template>
  <div>
    <form action="">
      <label for="">Name</label>
      <input type="text" id="name"><br>
      <label for="">E-Mail</label>
      <input type="text" id="email"><br>
      <label for="">Wohnort</label>
      <input type="text" id="address"><br>
      <label for="" id="employmentType">Anstellungsart</label>
      <input type="text"><br>
      <label for="" id="pay">Gehalt</label>
      <input type="text"><br>
      <label for="" id="category">Kategorie</label>
      <input type="text"><br>
      <button v-on:click="postTrainer">Hinzufügen</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "InputFormTrainer",

}
</script>

<style scoped>

form {
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