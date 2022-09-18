<template>
  <div>
    <SideNav></SideNav>
    <EditWindowStudent></EditWindowStudent>
    <StudentTable></StudentTable>
  </div>
</template>

<script>
import SideNav from "@/components/SideNav";
import StudentTable from "@/components/StudentTable";
import EditWindowStudent from "@/components/EditWindowStudent";

export default {
  name: "StudentTableView",
  components: {EditWindowStudent, StudentTable, SideNav}
}
</script>


<style scoped>

</style>