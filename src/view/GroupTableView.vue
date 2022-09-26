<template>
  <div>
    <SideNav></SideNav>
    <GroupTable></GroupTable>
  </div>
</template>

<script>
import SideNav from "@/components/SideNav";
import GroupTable from "@/components/GroupTable";

export default {
  name: "GroupTableView",
  components: {SideNav, GroupTable}

}
</script>

<style scoped>

</style>