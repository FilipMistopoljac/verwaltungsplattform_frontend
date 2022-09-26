<template>
  <div>
    <SideNav></SideNav>
    <RoomTable></RoomTable>
  </div>
</template>

<script>
import RoomTable from "@/components/RoomTable";
import SideNav from "@/components/SideNav";

export default {
  name: "RoomTableView",
  components: {RoomTable, SideNav}
}
</script>

<style scoped>

</style>