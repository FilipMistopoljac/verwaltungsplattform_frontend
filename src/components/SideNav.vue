<template>
  <div class="sidenav border border-dark">
    <img src="../assets/index.png">
    <a href="#" id="studentsA">TeilnehmerInnen</a>
    <div id="studentsDropdown">
      <router-link to="/StudentTableView">Anzeigen</router-link>
      <router-link to="/InputStudentView">Hinzufügen</router-link>
    </div>
    <a href="#" id="trainersA">TrainerInnen</a>
    <div id="trainersDropdown">
      <a href="">Anzeigen</a>
      <a href="">Hinzufügen</a>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
export default  {
  name: "SideNav"
}

</script>

<style scoped>

.sidenav {
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding-top: 10px;
  transition: 0.5s;
  margin-left: 10px;
  background-color: black;


}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: white;
  display: block;
  transition: 0.3s;
}

.sidenav img {
  width: 120px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

#studentsA:hover + #studentsDropdown  {
  display: block;
}

#trainersA:hover + #trainersDropdown  {
  display: block;
}

#studentsDropdown:hover, #trainersDropdown:hover {
  display: block;
}

#studentsDropdown, #trainersDropdown {
  padding-left: 30px;
  display: none;
}
#studentsDropdown a, #trainersDropdown a {
  font-size: 120%;
}

a:hover {
  color: gray;
}

</style>