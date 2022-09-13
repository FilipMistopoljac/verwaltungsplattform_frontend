<template>
  <div class="sidenav border border-dark">
    <img src="../assets/index.png">
    <a href="#" id="studentsA">TeilnehmerInnen</a>
    <div id="dropdownStudentsContent">
      <a href="">Anzeigen</a>
      <a href="">Hinzufügen</a>
    </div>
    <a href="#" id="dropdownTrainers">TrainerInnen</a>
    <div>

    </div>
  </div>
</template>

<script>
export default {
  name: "SideNav"
}
</script>

<style scoped>
/* The side navigation menu */
.sidenav {
  height: 100%; /* 100% Full-height */
  width: 250px; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 10px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
  margin-left: 10px;
  background-color: black;


}

/* The navigation menu links */
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

#dropdownStudentsContent {
  padding-left: 30px;
}
#dropdownStudentsContent a {
  font-size: 120%;
}

a:hover {
  color: gray;
}

</style>