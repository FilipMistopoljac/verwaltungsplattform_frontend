<template>
  <div>
    <SideNav></SideNav>
    <InputFormStudent></InputFormStudent>
  </div>
</template>

<script>
import SideNav from "@/components/SideNav";
import InputFormStudent from "@/components/InputFormStudent";

export default {
  name: "InputStudentView",
  components: {SideNav, InputFormStudent}
}
</script>

<style scoped>

</style>