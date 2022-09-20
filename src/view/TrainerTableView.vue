<template>
  <div>
    <SideNav></SideNav>
    <EditWindowTrainer></EditWindowTrainer>
    <TrainerTable></TrainerTable>
  </div>
</template>

<script>
import SideNav from "@/components/SideNav";
import TrainerTable from "@/components/TrainerTable";
import EditWindowTrainer from "@/components/EditWindowTrainer";
export default {
  name: "TrainerTableView",
  components: {EditWindowTrainer, TrainerTable, SideNav}
}
</script>

<style scoped>

</style>