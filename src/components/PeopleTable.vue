<template>
  <div>
    <button v-on:click="loadList">Liste laden</button>
  </div>

</template>

<script>
export default {
  name: "PeopleTable",
  data: () => ({
    studentsList:"",
  }),
  methods: {
    async loadList() {
      try{
        let apiUrl = 'localhost:8080/api/v1/student/get';
        let response = await this.axios.get(apiUrl);
        console.log(response);
        this.studentsList = response.data
      } catch (err){
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>

</style>