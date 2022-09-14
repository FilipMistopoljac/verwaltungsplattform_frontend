<template>
  <div id="app">
    <SideNav></SideNav>
    <router-view/>
  </div>
</template>

<script>
import SideNav from "@/components/SideNav";

export default {
  name: 'App',
  components: {
    SideNav
  }
}
</script>

<style>
#app {
 margin-left: 250px;
}
</style>
