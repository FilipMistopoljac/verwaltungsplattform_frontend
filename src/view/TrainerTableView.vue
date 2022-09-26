<template>
  <div>
    <SideNav></SideNav>
    <TrainerTable></TrainerTable>
  </div>
</template>

<script>
import SideNav from "@/components/SideNav";
import TrainerTable from "@/components/TrainerTable";

export default {
  name: "TrainerTableView",
  components: {TrainerTable, SideNav}
}
</script>

<style scoped>

</style>