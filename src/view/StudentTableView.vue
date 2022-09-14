<template>
  <div>
    <SideNav></SideNav>
    <StudentTable></StudentTable>
  </div>
</template>

<script>
import SideNav from "@/components/SideNav";
import StudentTable from "@/components/StudentTable";

export default {
  name: "StudentTableView",
  components: {StudentTable, SideNav}
}
</script>


<style scoped>

</style>