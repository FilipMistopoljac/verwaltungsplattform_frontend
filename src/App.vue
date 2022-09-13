<template>
  <div id="app">
    <SideNav></SideNav>
    <StudentTable></StudentTable>
    <TrainerTable></TrainerTable>
    <InputFormStudent></InputFormStudent>
  </div>
</template>

<script>
import SideNav from "@/components/SideNav";
import InputFormStudent from "@/components/InputFormStudent";
// import InputFormTrainer from "@/components/InputFormTrainer";
import StudentTable from "@/components/StudentTable";
import TrainerTable from "@/components/TrainerTable";

export default {
  name: 'App',
  components: {
    SideNav, InputFormStudent, StudentTable, TrainerTable,
  }
}
</script>


<style>
#app {
 margin-left: 250px;
}
</style>
